// Single source of truth for every external link on the site.
// Change a URL here and it changes everywhere.

// Canonical origin, used for absolute og:url / og:image URLs.
export const SITE_URL = 'https://extinct-hopes.vercel.app';

export const LINKS = {
  // Set to "" to hide every Discord block, button and counter on the site.
  // vercel.json holds the same URL for the /discord redirect — the build
  // fails if the two disagree (see scripts/vite-plugin-site.js).
  discordInvite: 'https://discord.gg/R3XajAAurn',
  discordServerId: '1449772243163942964', // used for the live online counter, optional
  youtube: 'https://www.youtube.com/@ExtinctHopes',
  tiktok: 'https://www.tiktok.com/@extinct_hopes',
  x: 'https://x.com/extinct_hopes',
  gamejolt: 'https://gamejolt.com/@leni/games',
  googlePlay: 'https://play.google.com/store/apps/dev?id=8760570199713578008',
  email: 'mailto:leni49823@gmail.com',
};

export const hasDiscord = Boolean(LINKS.discordInvite);

// The only Discord URL used on the site and shared elsewhere. It is a
// server-side redirect (vercel.json), so the real invite can change freely.
export const DISCORD_PATH = '/discord';

// Plain address, for places that show it as text.
export const emailAddress = LINKS.email.replace(/^mailto:/, '');
