import { track } from '@vercel/analytics';

// Click events for Vercel Web Analytics. Names and properties are kept
// readable on purpose — they show up as-is in the dashboard.

// A direct play / download button. `platform`: google_play | itch | gamejolt.
export const trackPlay = (game, platform) => track('play_click', { game, platform });

// Any Discord button. `source` says where it was: home_panel, game_page,
// topbar, profile, elsewhere, about, links…
export const trackDiscord = (source, game) =>
  track('discord_click', game ? { source, game } : { source });

export const trackSocial = (platform) => track('social_click', { platform });

// Social entries from data/socials.js: Discord gets its own event.
export const trackSocialLink = (social, source) =>
  social.id === 'discord' ? trackDiscord(source) : trackSocial(social.id);
