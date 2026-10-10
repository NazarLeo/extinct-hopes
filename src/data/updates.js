// Latest updates feed — the newest thing I made, shown at the top of the home
// page. Trailers, teasers, releases, devlogs.
//
// NEWEST FIRST: add a new entry at the very top of the list and nothing else
// needs touching. The first entry becomes the featured one (big player on the
// home page); everything after it drops into the log below it.
//
// Fields:
//   id       unique slug — used as the React key, never shown
//   kind     short label for the tag: Trailer, Teaser, Release, Devlog, Update
//   date     ISO date (YYYY-MM-DD) — rendered as "10 Oct 2026"
//   title    one line
//   text     one or two sentences of context (optional)
//   youtube  video id — the entry then plays inline, right on the home page
//   game     slug from data/games.js — adds a link to that game's page
//   href     any external link, for entries without a video (optional)
//   linkLabel  label for that link (optional, defaults to "Open ↗")
import { gameBySlug } from './games';

const feed = [
  {
    id: 'fnil-trailer',
    kind: 'Trailer',
    date: '2026-10-10',
    title: 'Five Nights In Lab — official trailer',
    text: 'The prequel finally has a trailer. Night shift in a classified Soviet laboratory, one maintenance worker, and Test Subject #3808 already out of its cell.',
    youtube: 'jxUGYi0C9eM',
    game: 'game-lab',
  },
];

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

// Resolve `game` into the real title and path, and pre-render the date so the
// components stay dumb.
const resolve = (u) => {
  const game = u.game ? gameBySlug(u.game) : null;

  return {
    ...u,
    dateLabel: dateFormat.format(new Date(`${u.date}T00:00:00`)),
    poster: u.youtube ? `https://i.ytimg.com/vi/${u.youtube}/maxresdefault.jpg` : null,
    watchUrl: u.youtube ? `https://www.youtube.com/watch?v=${u.youtube}` : null,
    gameTitle: game?.shortTitle ?? null,
    gamePath: game?.path ?? null,
  };
};

export const updates = feed.map(resolve);

// What the home page leads with, and the rest of the log under it.
export const latestUpdate = updates[0] ?? null;
export const earlierUpdates = updates.slice(1);
