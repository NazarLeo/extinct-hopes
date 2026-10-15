// Small Vite plugin with the build-time jobs this static site needs.
//
// 1. Prerender. Search engines, Discord, X and Telegram read the raw HTML and
//    may never run JavaScript, so every route must carry its own <title>, meta
//    tags, JSON-LD and page content in the initial response. After the build
//    we write one HTML file per route (dist/fan-games/spamton-night.html …)
//    from the built index.html: the <!--seo-head--> marker gets that route's
//    tags and <!--app-html--> gets the React markup from src/entry-server.jsx
//    (the browser hydrates it, see src/main.jsx). Vercel's cleanUrls serves
//    them at /fan-games/spamton-night, and dist/404.html (an empty shell) is
//    returned with a real 404 status for unknown URLs.
//
// 1b. sitemap.xml and robots.txt, generated from the same route list and
//    SITE_URL, so they can never drift from the site.
//
// 2. /discord redirect for `vite dev` and `vite preview`. In production it
//    is a server-side redirect in vercel.json.
//
// 3. Guard: vercel.json cannot read src/config/links.js, so the invite URL
//    exists in both. The build fails if they disagree.
import fs from 'node:fs';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { createServer } from 'vite';
import { DISCORD_PATH, LINKS, SITE_URL, hasDiscord } from '../src/config/links.js';
import { absoluteUrl, headTags, indexableRoutes, notFoundMeta, routes } from '../src/data/seo.js';

const MARKER = '<!--seo-head-->';
const APP_MARKER = '<!--app-html-->';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const renderTag = ({ tag, attrs, text }) => {
  const open = `<${tag} ${Object.entries(attrs)
    .map(([k, v]) => `${k}="${esc(v)}"`)
    .join(' ')}>`;
  // Script bodies are raw text: already made safe by serializeJsonLd.
  return text === undefined ? open : `${open}${text}</${tag}>`;
};

const renderHead = (meta) =>
  [`<title>${esc(meta.title)}</title>`, ...headTags(meta).map(renderTag)].join('\n');

// '/' -> index.html, '/about' -> about.html, '/fan-games/x' -> fan-games/x.html
const fileFor = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

const sitemapXml = () =>
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  indexableRoutes.map((r) => `  <url><loc>${esc(absoluteUrl(r.path))}</loc></url>\n`).join('') +
  `</urlset>\n`;

const robotsTxt = () => `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;

// Loads src/entry-server.jsx through a throwaway Vite server (it needs the
// same JSX transform as the app) and returns its render function.
async function loadRenderer(root) {
  const server = await createServer({
    root,
    configFile: false,
    logLevel: 'error',
    appType: 'custom',
    plugins: [react()],
    server: { middlewareMode: true, hmr: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
  });
  const { render } = await server.ssrLoadModule('/src/entry-server.jsx');
  return { render, close: () => server.close() };
}

function checkVercelRedirect(root) {
  const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  const rule = (config.redirects || []).find((r) => r.source === DISCORD_PATH);

  if (hasDiscord && rule?.destination !== LINKS.discordInvite) {
    throw new Error(
      `vercel.json "${DISCORD_PATH}" redirect (${rule?.destination ?? 'missing'}) does not match ` +
        `LINKS.discordInvite (${LINKS.discordInvite}). Update vercel.json so they are the same.`
    );
  }
  if (!hasDiscord && rule) {
    console.warn(
      `\n[site] LINKS.discordInvite is empty but vercel.json still redirects ${DISCORD_PATH}. ` +
        `Remove that redirect if ${DISCORD_PATH} should stop working.\n`
    );
  }
}

function discordRedirect(req, res, next) {
  if (hasDiscord && req.url.split('?')[0] === DISCORD_PATH) {
    res.statusCode = 302;
    res.setHeader('Location', LINKS.discordInvite);
    res.end();
    return;
  }
  next();
}

export default function sitePlugin() {
  let root;
  let outDir;
  let isBuild = false;

  return {
    name: 'extinct-hopes-site',

    configResolved(config) {
      root = config.root;
      outDir = path.resolve(config.root, config.build.outDir);
      isBuild = config.command === 'build';
    },

    configureServer(server) {
      server.middlewares.use(discordRedirect);
    },
    configurePreviewServer(server) {
      server.middlewares.use(discordRedirect);
    },

    async closeBundle() {
      if (!isBuild) return;
      checkVercelRedirect(root);

      const indexPath = path.join(outDir, 'index.html');
      const template = fs.readFileSync(indexPath, 'utf8');
      for (const marker of [MARKER, APP_MARKER]) {
        if (!template.includes(marker)) {
          throw new Error(`${marker} is missing from index.html — nothing to prerender into.`);
        }
      }

      const write = (file, meta, html = '') => {
        const target = path.join(outDir, file);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        // Replacer functions: markup may contain "$&"-style sequences.
        fs.writeFileSync(
          target,
          template.replace(MARKER, () => renderHead(meta)).replace(APP_MARKER, () => html)
        );
      };

      const renderer = await loadRenderer(root);
      try {
        routes.forEach((meta) => write(fileFor(meta.path), meta, renderer.render(meta.path)));
      } finally {
        await renderer.close();
      }
      // 404.html stays an empty shell: it is served for any address, so there
      // is no single path to render and the client draws the page itself.
      write('404.html', notFoundMeta);

      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapXml());
      fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsTxt());
      console.log(
        `[site] prerendered ${routes.length} routes + 404.html, sitemap.xml (${indexableRoutes.length} urls), robots.txt`
      );
    },
  };
}
