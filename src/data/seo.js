// Per-route <head> data. One list drives both the client (useMeta, on
// navigation) and the build (scripts/vite-plugin-site.js, which bakes the same
// tags into every route's HTML so crawlers and link previews — which may not
// run JavaScript — see them).
//
// Adding a static page? Add it here AND as a <Route> in App.jsx.
// Games and fan games are picked up from src/data/games.js automatically.
import {
  BING_SITE_VERIFICATION,
  GOOGLE_SITE_VERIFICATION,
  LINKS,
  SITE_URL,
  hasDiscord,
} from '../config/links';
import { fanGames, games } from './games';

export const SITE_NAME = 'Extinct Hopes';
const TWITTER_HANDLE = '@extinct_hopes';

// 1200x630 preview art for pages that are not a game (public/og/site.jpg).
const DEFAULT_IMAGE = '/og/site.jpg';
export const OG_SIZE = { width: 1200, height: 630 };

export const absoluteUrl = (path) => (/^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`);

// ---------------------------------------------------------------------------
// Structured data (schema.org JSON-LD)

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const SERIES_ID = `${SITE_URL}/#project-dream`;

// Public profiles that belong to the same publisher; helps Google tie the
// brand name to the site.
const sameAs = [LINKS.youtube, LINKS.tiktok, LINKS.x, LINKS.gamejolt, LINKS.itch, LINKS.googlePlay]
  .filter(Boolean);

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  alternateName: ['ExtinctHopes', 'Extinct Hopes Games'],
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/icons/icon-512.png'),
    width: 512,
    height: 512,
  },
  image: absoluteUrl(DEFAULT_IMAGE),
  description: 'Solo horror game developer. Free first-person horror games for Android.',
  sameAs,
};

const website = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: 'Extinct Hopes Games',
  inLanguage: 'en',
  publisher: { '@id': ORG_ID },
};

const series = {
  '@type': 'VideoGameSeries',
  '@id': SERIES_ID,
  name: 'Project Dream',
  url: `${SITE_URL}/`,
  author: { '@id': ORG_ID },
  genre: ['Horror'],
};

const breadcrumbs = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: absoluteUrl(path),
  })),
});

const freeOffer = (url) => ({
  '@type': 'Offer',
  price: '0',
  priceCurrency: 'USD',
  availability: 'https://schema.org/InStock',
  url,
});

const webPage = (meta, type = 'WebPage', extra = {}) => ({
  '@type': type,
  '@id': `${absoluteUrl(meta.path)}#webpage`,
  url: absoluteUrl(meta.path),
  name: meta.title,
  description: meta.description,
  inLanguage: 'en',
  isPartOf: { '@id': SITE_ID },
  ...extra,
});

// Play Store screenshots come as 526x296 thumbnails; the same URL accepts a size.
const bigShot = (src) => src.replace(/=w\d+-h\d+-rw$/, '=w1920-h1080-rw');

const gameNode = (g) => ({
  '@type': ['VideoGame', 'MobileApplication'],
  '@id': `${absoluteUrl(g.path)}#game`,
  name: g.title,
  alternateName: g.shortTitle,
  url: absoluteUrl(g.path),
  description: g.metaDescription,
  image: absoluteUrl(g.ogImage),
  thumbnailUrl: g.icon,
  screenshot: g.shots.slice(0, 6).map(bigShot),
  applicationCategory: 'GameApplication',
  operatingSystem: 'Android',
  gamePlatform: 'Android',
  genre: g.genre,
  playMode: 'SinglePlayer',
  inLanguage: 'en',
  contentRating: 'Teen (12+)',
  isAccessibleForFree: true,
  author: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
  isPartOf: { '@id': SERIES_ID },
  offers: freeOffer(g.links.googlePlay),
  sameAs: [g.links.googlePlay],
});

const fanGameNode = (g) => {
  const store = g.links.itch || g.links.gamejolt;
  return {
    '@type': 'VideoGame',
    '@id': `${absoluteUrl(g.path)}#game`,
    name: g.title,
    url: absoluteUrl(g.path),
    description: g.pitch,
    image: absoluteUrl(g.ogImage),
    applicationCategory: 'GameApplication',
    operatingSystem: g.platforms.join(', '),
    gamePlatform: g.platforms,
    genre: ['Horror', 'Fan game'],
    playMode: 'SinglePlayer',
    inLanguage: 'en',
    isAccessibleForFree: true,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    offers: freeOffer(store),
    sameAs: Object.values(g.links),
  };
};

// ---------------------------------------------------------------------------
// Routes

const staticPages = [
  {
    path: '/',
    title: 'Extinct Hopes — Free Android Horror Games | Project Dream',
    description:
      'Extinct Hopes, solo horror developer. Play the Project Dream series — Five Nights In Lab, Horror Escape, Cyborg Escape — free first-person horror for Android.',
    ogTitle: 'Extinct Hopes // Project Dream',
    ogDescription: 'One facility. Two survivors. Free-roam first-person horror on Android.',
  },
  {
    path: '/fan-games',
    title: 'Fan Games by Extinct Hopes — Free FNaF & Horror Fan Games',
    description:
      'Free horror fan games by Extinct Hopes: Spamton Night, FNaF Movie Edition, Gravity Falls: Exorcism and more. Play on PC and Android via GameJolt and itch.io.',
    ogTitle: 'Fan Games // Extinct Hopes',
    ogDescription: 'Fan games and side projects, free on GameJolt and itch.io.',
  },
  {
    path: '/about',
    title: 'About Extinct Hopes — Solo Horror Game Developer',
    description:
      'Extinct Hopes is a solo developer making free first-person horror games for Android in Unreal Engine: the Project Dream series and a set of fan games.',
    ogTitle: 'Extinct Hopes // About',
    ogDescription: 'Solo developer. Unreal Engine, Android, and a facility that keeps getting deeper.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy — Extinct Hopes Games',
    description: 'Privacy policy for the Extinct Hopes horror games on Google Play.',
    ogTitle: 'Extinct Hopes // Privacy',
    ogDescription: 'Privacy policy for the Extinct Hopes horror games on Google Play.',
  },
  {
    // Link-in-bio page: useful to visitors, but a thin duplicate of the home
    // page for search, so it stays out of the index and the sitemap.
    path: '/links',
    title: 'Extinct Hopes — Links',
    description: `All Extinct Hopes links in one place: the latest game, YouTube, TikTok,${
      hasDiscord ? ' Discord,' : ''
    } GameJolt and Google Play.`,
    ogTitle: 'Extinct Hopes // Links',
    ogDescription: 'Games, videos and socials — everything in one place.',
    noindex: true,
  },
];

const schemaFor = {
  '/': (m) => [
    organization,
    website,
    series,
    webPage(m, 'WebPage', {
      about: { '@id': ORG_ID },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: games.map((g, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: absoluteUrl(g.path),
          name: g.title,
        })),
      },
    }),
  ],
  '/fan-games': (m) => [
    organization,
    breadcrumbs([
      ['Home', '/'],
      ['Fan Games', '/fan-games'],
    ]),
    webPage(m, 'CollectionPage', {
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: fanGames.map((g, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: absoluteUrl(g.path),
          name: g.title,
        })),
      },
    }),
  ],
  '/about': (m) => [
    organization,
    breadcrumbs([
      ['Home', '/'],
      ['About', '/about'],
    ]),
    webPage(m, 'AboutPage', { mainEntity: { '@id': ORG_ID } }),
  ],
  '/privacy': (m) => [
    breadcrumbs([
      ['Home', '/'],
      ['Privacy Policy', '/privacy'],
    ]),
    webPage(m),
  ],
};

const withSchema = (page) => ({ ...page, schema: schemaFor[page.path]?.(page) });

const gamePages = games.map((g) => ({
  path: g.path,
  title: g.metaTitle,
  description: g.metaDescription,
  ogTitle: g.ogTitle,
  ogDescription: g.pitch,
  ogImage: g.ogImage,
  schema: [
    organization,
    series,
    breadcrumbs([
      ['Home', '/'],
      [g.shortTitle, g.path],
    ]),
    gameNode(g),
  ],
}));

const fanPages = fanGames.map((g) => ({
  path: g.path,
  title: `${g.title} — Free Horror Fan Game for ${g.platforms.join(' & ')}`,
  description: `${g.title} is a free horror fan game for ${g.platforms.join(' and ')} by Extinct Hopes. ${g.pitch}`,
  ogTitle: `${g.title} // Extinct Hopes`,
  ogDescription: g.pitch,
  ogImage: g.ogImage,
  schema: [
    organization,
    breadcrumbs([
      ['Home', '/'],
      ['Fan Games', '/fan-games'],
      [g.title, g.path],
    ]),
    fanGameNode(g),
  ],
}));

// Every route that gets its own prerendered HTML file.
export const routes = [...staticPages.map(withSchema), ...gamePages, ...fanPages];

// Routes that belong in sitemap.xml.
export const indexableRoutes = routes.filter((r) => !r.noindex);

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

const ROBOTS_INDEX = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
const ROBOTS_NOINDEX = 'noindex,follow';

// JSON-LD goes inside <script>, where only "</script" and "<!--" can break out.
export const serializeJsonLd = (nodes) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');

/**
 * The tags that go in <head> besides <title>, as plain descriptors so the
 * same list can be serialised at build time or applied to the live DOM.
 * A descriptor with `text` is a <script> whose body is that text.
 */
export function headTags(meta) {
  const description = meta.description;
  const image = absoluteUrl(meta.ogImage || DEFAULT_IMAGE);
  const ogTitle = meta.ogTitle || meta.title;
  const ogDescription = meta.ogDescription || description;
  const tags = [
    { tag: 'meta', attrs: { name: 'description', content: description } },
    { tag: 'meta', attrs: { name: 'robots', content: meta.noindex ? ROBOTS_NOINDEX : ROBOTS_INDEX } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:locale', content: 'en_US' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE_NAME } },
    { tag: 'meta', attrs: { property: 'og:title', content: ogTitle } },
    { tag: 'meta', attrs: { property: 'og:description', content: ogDescription } },
    { tag: 'meta', attrs: { property: 'og:image', content: image } },
    { tag: 'meta', attrs: { property: 'og:image:alt', content: ogTitle } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: String(OG_SIZE.width) } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: String(OG_SIZE.height) } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:site', content: TWITTER_HANDLE } },
    { tag: 'meta', attrs: { name: 'twitter:creator', content: TWITTER_HANDLE } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: ogTitle } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: ogDescription } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: image } },
  ];
  if (meta.path) {
    const url = absoluteUrl(meta.path);
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: url } });
    // A noindex page has no business claiming a canonical URL.
    if (!meta.noindex) tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } });
  }
  if (meta.path === '/') {
    if (GOOGLE_SITE_VERIFICATION) {
      tags.push({
        tag: 'meta',
        attrs: { name: 'google-site-verification', content: GOOGLE_SITE_VERIFICATION },
      });
    }
    if (BING_SITE_VERIFICATION) {
      tags.push({ tag: 'meta', attrs: { name: 'msvalidate.01', content: BING_SITE_VERIFICATION } });
    }
  }
  if (meta.schema) {
    tags.push({
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      text: serializeJsonLd(meta.schema),
    });
  }
  return tags;
}
