// Per-route <head> data. One list drives both the client (useMeta, on
// navigation) and the build (scripts/vite-plugin-site.js, which bakes the same
// tags into every route's HTML so Discord / X / Telegram previews work —
// those crawlers do not run JavaScript).
//
// Adding a static page? Add it here AND as a <Route> in App.jsx.
// Games and fan games are picked up from src/data/games.js automatically.
import { SITE_URL, hasDiscord } from '../config/links';
import { fanGames, games } from './games';

export const SITE_NAME = 'Extinct Hopes';

// 1200x630 preview art for pages that are not a game (public/og/site.jpg).
const DEFAULT_IMAGE = '/og/site.jpg';
export const OG_SIZE = { width: 1200, height: 630 };

export const absoluteUrl = (path) => (/^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`);

const staticPages = [
  {
    path: '/',
    title: 'Extinct Hopes',
    description:
      'Extinct Hopes — solo horror game developer. Three connected first-person horror games in one Soviet-era facility. Free on Android.',
    ogTitle: 'Extinct Hopes // Project Dream',
    ogDescription: 'One facility. Two survivors. Free-roam first-person horror on Android.',
  },
  {
    path: '/fan-games',
    title: 'Fan Games',
    description: 'Fan games and side projects by Extinct Hopes, free on GameJolt and itch.io.',
    ogTitle: 'Fan Games // Extinct Hopes',
    ogDescription: 'Fan games and side projects, free on GameJolt and itch.io.',
  },
  {
    path: '/about',
    title: 'About Me',
    description:
      'Extinct Hopes — a solo developer building free-roam first-person horror for Android on Unreal Engine.',
    ogTitle: 'Extinct Hopes // About',
    ogDescription: 'Solo developer. Unreal Engine, Android, and a facility that keeps getting deeper.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy',
    description: 'Privacy policy for the Extinct Hopes horror games on Google Play.',
    ogTitle: 'Extinct Hopes // Privacy',
    ogDescription: 'Privacy policy for the Extinct Hopes horror games on Google Play.',
  },
  {
    path: '/links',
    title: 'Links',
    description: `All Extinct Hopes links in one place: the latest game, YouTube, TikTok,${
      hasDiscord ? ' Discord,' : ''
    } GameJolt and Google Play.`,
    ogTitle: 'Extinct Hopes // Links',
    ogDescription: 'Games, videos and socials — everything in one place.',
  },
];

const gamePages = games.map((g) => ({
  path: g.path,
  title: g.metaTitle,
  description: g.metaDescription,
  ogTitle: g.ogTitle,
  ogDescription: g.pitch,
  ogImage: g.ogImage,
}));

const fanPages = fanGames.map((g) => ({
  path: g.path,
  title: `${g.title} — Fan Game`,
  description: `${g.title} — free horror fan game for ${g.platforms.join(' and ')}. ${g.pitch}`,
  ogTitle: `${g.title} // Extinct Hopes`,
  ogDescription: g.pitch,
  ogImage: g.ogImage,
}));

// Every route that gets its own prerendered HTML file.
export const routes = [...staticPages, ...gamePages, ...fanPages];

const byPath = Object.fromEntries(routes.map((r) => [r.path, r]));

export function metaFor(path) {
  const meta = byPath[path];
  if (!meta) throw new Error(`No SEO entry for route ${path} (src/data/seo.js)`);
  return meta;
}

// Served as dist/404.html, which Vercel returns with a real 404 status.
export const notFoundMeta = {
  title: 'Signal lost — Extinct Hopes',
  description: 'This page does not exist.',
  ogTitle: 'Signal lost // Extinct Hopes',
  ogDescription: 'This page does not exist.',
  noindex: true,
};

/**
 * The tags that go in <head> besides <title>, as plain descriptors so the
 * same list can be serialised at build time or applied to the live DOM.
 */
export function headTags(meta) {
  const description = meta.description;
  const image = absoluteUrl(meta.ogImage || DEFAULT_IMAGE);
  const tags = [
    { tag: 'meta', attrs: { name: 'description', content: description } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE_NAME } },
    { tag: 'meta', attrs: { property: 'og:title', content: meta.ogTitle || meta.title } },
    {
      tag: 'meta',
      attrs: { property: 'og:description', content: meta.ogDescription || description },
    },
    { tag: 'meta', attrs: { property: 'og:image', content: image } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: String(OG_SIZE.width) } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: String(OG_SIZE.height) } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
  ];
  if (meta.path) {
    const url = absoluteUrl(meta.path);
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: url } });
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } });
  }
  if (meta.noindex) {
    tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } });
  }
  return tags;
}
