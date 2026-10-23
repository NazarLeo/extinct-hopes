// Art for the full-screen scenes: the home sections and every page header.
// `bg` is a name in public/sections (or 'fog'); `side` is the half of the
// frame dark enough to carry the copy. The character is one of the cut-outs in
// public/hero, standing on the other half: `ar` is its aspect ratio, `mw` its
// width on a phone.
export const cutouts = {
  '3808': { id: '3808', ar: 2564 / 2092, mw: '112vw' },
  donkey: { id: 'donkey', ar: 2285 / 2087, mw: '104vw' },
  cyborg: { id: 'cyborg', ar: 1635 / 2080, mw: '74vw' },
};

export const scenes = {
  'game-lab': { bg: 'lab', side: 'left', char: cutouts['3808'] },
  'game-escape': { bg: 'escape', side: 'right', char: cutouts.donkey },
  'game-cyborg': { bg: 'cyborg', side: 'left', char: cutouts.cyborg },
};
