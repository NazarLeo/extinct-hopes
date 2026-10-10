// ============================================================
// Vercel Web Analytics — one place for everything the site measures.
//
// Page views are collected automatically by <Analytics /> in main.jsx.
// Everything below is a *custom event*, so Vercel's rules apply:
//
//   · Custom events need a Pro (or Enterprise) plan. On Hobby only page views
//     are collected — flip CUSTOM_EVENTS to false to stop sending them.
//     https://vercel.com/docs/analytics/custom-events
//   · Pro stores 2 properties per event (8 with the Web Analytics Plus
//     add-on). MAX_PROPS below must match the plan.
//   · Values may only be string / number / boolean / null, 255 chars max.
//   · Every event already carries the URL it happened on, so the page itself
//     never has to be passed as a property.
//
// THE EVENTS
//   play_click     {game, store}      store / download button → a real install
//   social_click   {platform, where}  any link off to a profile or store page
//   discord_click  {where, game}      every Discord button on the site
//   video_play     {video, where}     a trailer or teaser actually started
//   update_click   {update, kind}     an entry in the home "latest updates" feed
//   gallery_open   {game, shot}       a screenshot opened full size
//   cta_click      {cta, where}       the big in-page buttons
//   nav_click      {to, where}        internal navigation — gives page views a source
//   scroll_deep    {page}             someone got ~3/4 of the way down a page
//   not_found      {path, from}       a 404, and the referrer that sent it
//
// `where` is always the placement, not the page: topbar, home_hero,
// home_chapters, home_updates, elsewhere, game_page, fan_index, links,
// footer, about.
// ============================================================
import { track } from '@vercel/analytics';

// Custom events are a paid feature. Set to false while on the Hobby plan if
// you would rather not send events that nothing will store.
const CUSTOM_EVENTS = true;

// 2 on Pro, 8 with the Web Analytics Plus add-on.
const MAX_PROPS = 2;
const MAX_LENGTH = 255;

const isDev = import.meta.env.DEV;

const clamp = (v) => (typeof v === 'string' && v.length > MAX_LENGTH ? v.slice(0, MAX_LENGTH) : v);

// The single door every event leaves through: empty values are dropped, the
// rest is trimmed to what Vercel will accept, and anything over the plan's
// property limit is reported in development instead of silently vanishing.
function send(name, props) {
  if (!CUSTOM_EVENTS) return;

  const kept = Object.entries(props ?? {}).filter(([, v]) => v !== undefined && v !== null && v !== '');

  if (isDev && kept.length > MAX_PROPS) {
    console.warn(
      `[analytics] "${name}" carries ${kept.length} properties — the plan stores ${MAX_PROPS}:`,
      kept.map(([k]) => k).join(', ')
    );
  }

  const data = Object.fromEntries(kept.slice(0, MAX_PROPS).map(([k, v]) => [k, clamp(v)]));
  track(name, Object.keys(data).length ? data : undefined);
}

// ---- the events -------------------------------------------------------

// A direct play / download button. `store`: google_play | itch | gamejolt.
export const trackPlay = (game, store) => send('play_click', { game, store });

// Any link to a social profile or a store front page.
export const trackSocial = (platform, where) => send('social_click', { platform, where });

// Any Discord button; `game` only when the button sits on a game page.
export const trackDiscord = (where, game) => send('discord_click', { where, game });

// Social entries from data/socials.js: Discord keeps its own event.
export const trackSocialLink = (social, where) =>
  social.id === 'discord' ? trackDiscord(where) : trackSocial(social.id, where);

// A trailer or teaser that was actually started (not just shown).
export const trackVideo = (video, where) => send('video_play', { video, where });

// An entry in the home page "latest updates" feed.
export const trackUpdate = (update, kind) => send('update_click', { update, kind });

// A screenshot opened in the lightbox. `shot` is 1-based, so the dashboard
// shows which image people actually open.
export const trackGallery = (game, shot) => send('gallery_open', { game, shot });

// The big in-page buttons that are not a store link.
export const trackCta = (cta, where) => send('cta_click', { cta, where });

// Internal navigation. Page views say where people landed; this says what
// they clicked to get there.
export const trackNav = (to, where) => send('nav_click', { to, where });

// Fired once per page view, from useScrollDepth.
export const trackScrollDepth = (page) => send('scroll_deep', { page });

// A dead URL, with the referrer that produced it — this is what tells you
// which old link out in the world is still broken.
export const trackNotFound = (path, from) => send('not_found', { path, from });

// ---- what leaves the browser ------------------------------------------

// Query parameters worth keeping: the campaign tags that say where a visit
// came from. Everything else is stripped before the event is sent.
const KEEP_PARAM = /^(utm_|ref$|via$|fbclid$|gclid$)/;

/**
 * Runs on every page view and every event, before it is sent.
 * Passed to <Analytics beforeSend> in main.jsx.
 * https://vercel.com/docs/analytics/redacting-sensitive-data
 */
export function beforeSend(event) {
  // Personal opt-out. Run localStorage.setItem('va-disable', '1') in the
  // console and this browser stops being counted — useful on your own
  // machine so your visits do not show up as traffic.
  try {
    if (localStorage.getItem('va-disable')) return null;
  } catch {
    // storage blocked (private mode): just carry on and count the visit
  }

  const url = new URL(event.url);
  url.hash = ''; // /game-lab#trailer and /game-lab are the same page
  for (const key of [...url.searchParams.keys()]) {
    if (!KEEP_PARAM.test(key)) url.searchParams.delete(key);
  }

  return { ...event, url: url.toString() };
}
