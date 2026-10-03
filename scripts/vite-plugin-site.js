// Small Vite plugin with the three build-time jobs this static site needs.
//
// 1. Prerender. Discord, X and Telegram build link previews from the raw
//    HTML and never run JavaScript, so every route must carry its own <title>
//    and meta tags in the initial response. After the build we write one HTML
//    file per route (dist/fan-games/spamton-night.html …) from the built
//    index.html, filling the <!--seo-head--> marker with that route's tags.
//    Vercel's cleanUrls serves them at /fan-games/spamton-night, and
//    dist/404.html is returned (with a real 404 status) for unknown URLs.
//    The page body is still rendered by React in the browser.
//
// 2. /discord redirect for `vite dev` and `vite preview`. In production it
//    is a server-side redirect in vercel.json.
//
// 3. Guard: vercel.json cannot read src/config/links.js, so the invite URL
//    exists in both. The build fails if they disagree.
import fs from 'node:fs';
import path from 'node:path';
import { DISCORD_PATH, LINKS, hasDiscord } from '../src/config/links.js';
import { headTags, notFoundMeta, routes } from '../src/data/seo.js';

const MARKER = '<!--seo-head-->';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const renderTag = ({ tag, attrs }) =>
  `<${tag} ${Object.entries(attrs)
    .map(([k, v]) => `${k}="${esc(v)}"`)
    .join(' ')}>`;

const renderHead = (meta) =>
  [`<title>${esc(meta.title)}</title>`, ...headTags(meta).map(renderTag)].join('\n');

// '/' -> index.html, '/about' -> about.html, '/fan-games/x' -> fan-games/x.html
const fileFor = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

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

    closeBundle() {
      if (!isBuild) return;
      checkVercelRedirect(root);

      const indexPath = path.join(outDir, 'index.html');
      const template = fs.readFileSync(indexPath, 'utf8');
      if (!template.includes(MARKER)) {
        throw new Error(`${MARKER} is missing from index.html — nothing to prerender into.`);
      }

      const write = (file, meta) => {
        const target = path.join(outDir, file);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, template.replace(MARKER, renderHead(meta)));
      };

      routes.forEach((meta) => write(fileFor(meta.path), meta));
      write('404.html', notFoundMeta);
      console.log(`[site] prerendered ${routes.length} routes + 404.html`);
    },
  };
}
