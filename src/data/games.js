const shot = (id) => `https://play-lh.googleusercontent.com/${id}=w526-h296-rw`;

export const games = [
  {
    slug: 'game-lab',
    path: '/game-lab',
    tabLabel: 'Five Nights In Lab',
    winPath: 'C:\\project_dream\\ch00_lab',
    number: '00',
    title: 'Five Nights In Lab: Horror PD',
    shortTitle: 'Five Nights In Lab',
    eyebrow: 'Chapter 00 · Prequel',
    eyebrowRed: false,
    trackLine: 'Prequel — the lab is still running — Subject #3808',
    trackTag: 'Open',
    metaTitle: 'Five Nights In Lab',
    metaDescription:
      'Five Nights In Lab: Horror PD — free-roam first-person horror in a Soviet laboratory. Prequel to Project Dream. Free on Android.',
    ogTitle: 'Five Nights In Lab: Horror PD',
    pitch:
      'Night shift in a classified Soviet laboratory. Test Subject #3808 is loose.',
    icon: 'https://play-lh.googleusercontent.com/s0eQAyTKC7emeO_eevo0mijRh8jbLkshvG28wYxAg5roF1x0fqUUrBbN48fhg4u8e69oyVjIyIxl8lFdV9jz9pQ=w240',
    ogImage: '/og/game-lab.jpg',
    platforms: ['Android'],
    links: { googlePlay: 'https://play.google.com/store/apps/details?id=com.leni.p3808' },
    trailer: null,
    lede: [
      'You are maintenance on the night shift of a classified Soviet laboratory. Check the systems. Repair the equipment. Do your job. ',
      { b: "Test Subject #3808 is loose — and it knows you're here." },
    ],
    pills: [
      { text: 'Free', variant: 'on' },
      { text: 'Survival horror' },
      { text: 'Free-roam' },
      { text: 'Unreal Engine' },
      { text: 'Rated 12+', variant: 'red' },
    ],
    secondaryAction: { label: '▤ Screenshots', href: '#shots' },
    blocks: [
      {
        title: 'The story',
        tag: 'File 00-A',
        prose: [
          [
            'The year is unknown. Somewhere beneath a Soviet-era facility, classified experiments are underway. You signed up for the night shift because the pay was good. Nobody told you what they were keeping in the lower levels.',
          ],
          [
            'This is the prequel to ',
            { link: '/game-escape', text: 'Project Dream' },
            ' — the same laboratory, years before Chapter 1, with ',
            { b: 'a different protagonist:' },
            ' a maintenance worker, not the person who falls through the floor in Chapters 1 and 2. ',
            { b: 'The monsters were not always abandoned. They were contained.' },
            ' Until tonight.',
          ],
        ],
      },
      {
        title: 'Not a camera game',
        tag: 'File 00-B',
        prose: [
          [
            "Inspired by Five Nights at Freddy's, but with full free movement. There are no fixed camera views to sit behind — you are physically in the lab, walking its corridors and managing systems while something hunts you in the dark. ",
            { b: 'Think FNAF meets Alien: Isolation, on mobile.' },
          ],
        ],
      },
      {
        title: 'Features',
        tag: 'File 00-C',
        features: [
          'Free-roam gameplay — walk, explore, hide. Not just cameras.',
          'Test Subject #3808: enemy AI that hunts you through the facility.',
          'Repair mechanics — fix systems under pressure while it closes in.',
          'Soviet laboratory setting with its own dark atmosphere.',
          'Built on Unreal Engine, optimized for mobile hardware.',
          'Multiple language support.',
        ],
      },
    ],
    dossierTag: 'Subject #3808',
    dossier: [
      ['Chapter', '00 — Prequel'],
      ['Setting', 'Lab, operational'],
      ['Threat', 'Subject #3808'],
      ['Engine', 'Unreal'],
      ['Platform', 'Android'],
      ['Price', 'Free'],
      ['Rating', 'Teen · 12+'],
    ],
    asideBlocks: [],
    warning:
      'Horror themes, jump scares, sustained tension, darkness and mild language. Headphones make it work — and are exactly why to think twice if you startle easily.',
    // Play Store screenshots, in store order (the 1920x1080 set).
    shots: [
      'fFF7kbA2ImfY49_bd4SNvUQeJinX6U_9nUTUM0kLLNd0tmZR6D9kpUxC8kIvAZ9CG-z1mbltYPtmyLhWKYza',
      'K35m3sDCSTnosBkPdkwcQJO1XWuR16Bb57iYL-UBNcfS04V6XNyQu1ZqiLL9wKmmwmvNnbXuyaY9Y-KBHYwkYHs',
      'KaScHwg28A5vepQnM8a-DNbQ9lNCUYROzaeDjDOgzoHJxGHUaucs-1yMSGoYFE2OOynRuA-Lrp4cgjL4FfG3agI',
      'mLoyK9Or3cEhAliW5w_U3PvtElpmW2MTF6n7u7e00Ob2jSbVYYiHNNdajfeTJ1Wdc56ptnBgxQNNjHVYdh41',
      'eQ0qq0AWr-TzWmcxts_oDo01x-4mUYs1--BaUMBw7wGRjrBkBq5fYaN8gV5gI3yQBpExMoufaHVK0yuL8Y5ytuw',
      'km1p6L1uKtd374_I06zXtUr9J2y4roGwYoYsymJrRoJloF_VAjnbXveOPMnkF_D4Y3nqqxz-4BBktEc3RL2xqA',
      'WZ4I5YxuygjueiVNzaYXd-fslP65wKd9FwpAp8cEseP2vQ58FmcZVGqRB67Ua6AP3g-V6AeCjpbuS4WEFa3atyU',
    ].map(shot),
    prev: { to: '/', label: '← Back', title: 'All chapters' },
    next: { to: '/game-escape', label: 'Next · Chapter 1 →', title: 'Horror Escape' },
  },

  {
    slug: 'game-escape',
    path: '/game-escape',
    tabLabel: 'Horror Escape',
    winPath: 'C:\\project_dream\\ch01_escape',
    number: '01',
    title: 'Horror Escape: Project Dream',
    shortTitle: 'Horror Escape',
    eyebrow: 'Chapter 01 · Start here',
    eyebrowRed: false,
    trackLine: 'Chapter 1 — abandoned — the hybrid adapts to your route',
    trackTag: 'Open',
    metaTitle: 'Horror Escape',
    metaDescription:
      'Horror Escape: Project Dream — first-person horror escape with full voice acting and an enemy that hunts you through the facility. Chapter 1. Free on Android.',
    ogTitle: 'Horror Escape: Project Dream',
    pitch:
      'Your father told stories about monsters in an abandoned facility. The floor gave way.',
    icon: 'https://play-lh.googleusercontent.com/xDXte1POPv7HprynzGEsUZnsoBZfDC8S4gRYO49bEhBLLmerje5Gz9V1WarzqdQe5Pf2NJLitKf58brkJdof=w240',
    ogImage: '/og/game-escape.jpg',
    platforms: ['Android'],
    links: { googlePlay: 'https://play.google.com/store/apps/details?id=com.leni.gybrid' },
    trailer: { id: 'uwMriup6uI0', poster: 'https://i.ytimg.com/vi/uwMriup6uI0/maxresdefault.jpg' },
    lede: [
      'Your father told stories about monsters in an abandoned facility. You went to prove him wrong. ',
      { b: 'The floor gave way — and now you are the one underground.' },
    ],
    pills: [
      { text: 'Free', variant: 'on' },
      { text: 'Escape horror' },
      { text: 'Full voice acting' },
      { text: 'Unreal Engine' },
      { text: 'Rated 12+', variant: 'red' },
    ],
    secondaryAction: { label: '▶ Watch trailer', href: '#trailer', variant: 'red' },
    blocks: [
      {
        title: 'One goal: get out alive',
        tag: 'File 01-A',
        prose: [
          [
            'The exit is somewhere above you, behind locked doors and dead power. Search the rooms, find what opens the next section, and keep moving. ',
            { b: 'The longer you stay in one place, the more chances it has to find you.' },
          ],
        ],
      },
      {
        title: 'The hybrid',
        tag: 'File 01-B',
        prose: [
          [
            'It is not a scripted jump scare on a timer. It moves through the facility on its own schedule, and it adapts to where you keep going. ',
            { b: 'Hiding works — but only if you picked the spot before it got there.' },
          ],
        ],
      },
      {
        title: 'A story worth finishing',
        tag: 'File 01-C',
        prose: [
          [
            'Full voice acting with subtitles, notes and recordings left behind by the people who worked here, and an answer to what your father actually saw. Cinematic story sequences sit between the sections you have to survive.',
          ],
        ],
      },
      {
        title: 'Features',
        tag: 'File 01-D',
        features: [
          'First-person horror exploration with free movement.',
          'Hybrid enemy that patrols freely and adapts to your route.',
          'Puzzles, locked doors and secrets across the facility.',
          'Full voice acting with subtitles.',
          'Graphics settings for low-end and mid-range phones.',
          'Rebuilt menu and interface.',
        ],
      },
    ],
    dossierTag: 'The Hybrid',
    dossier: [
      ['Chapter', '01'],
      ['Setting', 'Lab, abandoned'],
      ['Threat', 'The Hybrid'],
      ['Voice acting', 'Yes, subtitled'],
      ['Engine', 'Unreal'],
      ['Platform', 'Android'],
      ['Price', 'Free'],
      ['Rating', 'Teen · 12+'],
    ],
    asideBlocks: [
      {
        title: 'Where to start',
        tag: 'Series order',
        prose: [
          [
            'This is Chapter 1 and the natural entry point. Your story continues in ',
            { link: '/game-cyborg', text: 'Cyborg Escape' },
            ' — ',
            { b: 'same character, same night, deeper levels.' },
            ' The prequel ',
            { link: '/game-lab', text: 'Five Nights In Lab' },
            ' is a separate story with a different protagonist, set years earlier while the lab still worked.',
          ],
        ],
      },
    ],
    warning:
      'Horror themes, jump scares and sustained tense atmosphere. Best with headphones — which is also exactly why to be careful if you startle easily.',
    // Play Store screenshots, in store order.
    shots: [
      'TTF01gbJjkczK_YVM9jKAaJSAXEuI8usJMaqZolwibhcXpHGGXDiIrScvaFa0z7XDpcpqYYoQj3mfKsum90CjQ',
      '0kCwhwd_Rbac6qyZkMJ_tCXHTvO0VY2OBi15SbGZ7IMlurYDYOXMFDD1inWBJydchRiPsDiT_29Z94pGBXu2LA',
      'KBeHs86CCDLvuygrzyNg5f3mQnhSJLse_bX7bO5w0H29FmC6FCIuYrQH9JHeK__oiCgoLLwty6Z5AhQd8I1mPw4',
      '0xctstM_-mmQhIMtlRbOgIE99Dn3CrOcduyt0o4zX-3g6p4aqxEZ4h6x7aGNsKXqer4IotZy69kTjnUBvfYBwtc',
      'sGLV97VoJI9yDomkq2M_hcIFHXevEtWc73R6Sq6PdE4Q7w0Xu9LwpLNB5aaligT2H3wmOP9M7tY1qp7UllSR',
      'gBk_0nyWzNwFZue2ZENBWKgcZUVShM67fHnnABcCZH11PkE3iopjpGaJmn15sVK5jojjqLHrVzIMRhuvLS63',
      'Ojy-rkXr4r5Kp8LEBVeVVApf1yAEM_b_Cc647GupexUZtYo9BZcZtTt2_KEkYZiCFCu9Z0cY7IBla8DCmwOZyQ',
      'kvTUGt_nZIW8zozNeCL-ngFn-vg0IBLxojjty0Y42d-_Z1-pPLReOc2gv-h6l4LvMOkr5Snr7Lbrz3ba22BN2w',
    ].map(shot),
    prev: { to: '/game-lab', label: '← Prequel', title: 'Five Nights In Lab' },
    next: { to: '/game-cyborg', label: 'Next · Chapter 2 →', title: 'Cyborg Escape' },
  },

  {
    slug: 'game-cyborg',
    path: '/game-cyborg',
    tabLabel: 'Cyborg Escape',
    winPath: 'C:\\project_dream\\ch02_cyborg',
    number: '02',
    title: 'Cyborg Escape: Project Dream 2',
    shortTitle: 'Cyborg Escape',
    eyebrow: 'Chapter 02 · Latest release',
    eyebrowRed: true,
    trackLine: 'Chapter 2 — lower levels — you are bleeding',
    trackTag: 'Latest',
    trackTagNew: true,
    metaTitle: 'Cyborg Escape',
    metaDescription:
      'Cyborg Escape: Project Dream 2 — wounded, underground, and hunted by something they rebuilt. Chapter 2. Free on Android.',
    ogTitle: 'Cyborg Escape: Project Dream 2',
    pitch:
      'You survived the first laboratory. It wounded you on the way out, and you are still underground.',
    icon: 'https://play-lh.googleusercontent.com/QKwkYaEl_2E9Uecb5wyGJgVywhDTp1tgQSWd7YTqGPR3W7z-_Tx2cVJ-ZlVcMlcXnU0LUVcRlMTqNMwFtdXp=w240',
    ogImage: '/og/game-cyborg.jpg',
    platforms: ['Android'],
    links: { googlePlay: 'https://play.google.com/store/apps/details?id=com.leni.cyborg' },
    trailer: { id: '146Dj7s4AvY', poster: 'https://i.ytimg.com/vi/146Dj7s4AvY/hqdefault.jpg' },
    lede: [
      'You survived the first laboratory. It did not survive you. ',
      { b: 'But it wounded you on the way out — and you are still underground.' },
    ],
    pills: [
      { text: 'Free', variant: 'on' },
      { text: 'Escape horror' },
      { text: 'Injury mechanic' },
      { text: 'Unreal Engine' },
      { text: 'Rated 12+', variant: 'red' },
    ],
    secondaryAction: { label: '▶ Watch trailer', href: '#trailer', variant: 'red' },
    blocks: [
      {
        title: 'You are injured',
        tag: 'File 02-A',
        prose: [
          [
            'Bleeding slows you down. Find the medical supplies scattered through the facility before the wound decides the ending for you. ',
            { b: 'Every detour costs you time you do not have.' },
          ],
        ],
      },
      {
        title: 'The rotten cyborg',
        tag: 'File 02-B',
        prose: [
          [
            'Whatever they built down here was not meant to keep working. It still does. It patrols the lower levels and it does not tire. ',
            { b: 'You cannot fight it — you can only learn how it moves.' },
          ],
        ],
      },
      {
        title: 'Solve the facility',
        tag: 'File 02-C',
        prose: [
          [
            'Locked doors, dead keypads, cut power lines. The way out is a chain of puzzles built from the facility itself, and the notes left behind explain what happened here — if you have the nerve to stop and read them.',
          ],
        ],
      },
      {
        title: 'Features',
        tag: 'File 02-D',
        features: [
          'First-person horror exploration with free movement.',
          'A new enemy with its own hunting behaviour.',
          'Injury mechanic that puts a clock on your escape.',
          'Puzzles, keypads and locked sections built into the environment.',
          'Expanded facility with new rooms and new threats.',
          'Graphics presets for low-end and mid-range phones.',
        ],
      },
    ],
    dossierTag: 'Rotten Cyborg',
    dossier: [
      ['Chapter', '02 — Latest'],
      ['Setting', 'Lower levels'],
      ['Threat', 'Rotten Cyborg'],
      ['Twist', 'Bleeding clock'],
      ['Engine', 'Unreal'],
      ['Platform', 'Android'],
      ['Price', 'Free'],
      ['Rating', 'Teen · 12+'],
    ],
    asideBlocks: [
      {
        title: 'New to the series?',
        tag: 'Series order',
        prose: [
          [
            'You play the ',
            { b: 'same person' },
            ' as in Chapter 1 — this picks up right where ',
            { link: '/game-escape', text: 'Horror Escape' },
            ' left off. You can still start here: the opening recaps Chapter 1 and the notes fill in the rest.',
          ],
        ],
      },
    ],
    warning:
      'Horror themes, jump scares, blood and injury, and sustained tense atmosphere. Best with headphones — which is also the reason to be careful if you startle easily.',
    // Play Store screenshots, in store order (the store graphic captioned "It can't hear you" is deliberately left out).
    shots: [
      '4_ApDwOCSxuvx7Kg9yUfd8YIys4lCm_jaRnVACXdxCVoyvkhmbPUnnWXv-qVBt7ku87ckfpNmP0yKNkamEbE_w',
      'PdWNZUYTSS-9JtYo5s2KLjoPnhL70UhFZomPjfVJ8Ei-cMxlkG1c03PzmAIY-ShwKj2q7v0_DFLNlUWGwhZZ',
      'v43lNjqbQ42z_cnXytk0Kn7qIRLv-SWT7Ulck-btjgHTiwdFKKbAPmdTsHjoj2KUIyEbnOZwcWlwHrseP54a',
      'eQJVM5_FbLptcjrSMKD5P6pJLoaGlB8WbQ8tKwcXFuT6OWgAOME5lTeUF0_yXthiL2NVEncV6UO03m5ukFhSmw',
      '34NPx9nnWe0Q2G8e4ixup_qAEj1e3D3OA2P8sLHgA-CGUw_9idAu_XPOO8QxSVPKEQ0dg7RTwIsq6YGnaZrd',
      'Q2gUGINMj9FRFyBfu7Od5NWy79UL2KmrmvHGcsorc0bXcMgqNlHqOEXBEnLg8eIIPcT8litVhapHMUdPSvuCog',
    ].map(shot),
    prev: { to: '/game-escape', label: '← Chapter 1', title: 'Horror Escape' },
    next: { to: '/', label: 'All chapters →', title: 'Project Dream' },
  },
];

export const gameBySlug = (slug) => games.find((g) => g.slug === slug);

// The release the bio-link page leads with.
export const latestGame = games.find((g) => g.trackTagNew);

// Home page CCTV wall — store screenshots pulled from across the three games.
// Indices point into each game's `shots`.
export const cctv = [
  { id: '01', src: games[0].shots[1] },
  { id: '02', src: games[0].shots[3] },
  { id: '03', src: games[0].shots[5], dead: true },
  { id: '04', src: games[0].shots[6] },
  { id: '05', src: games[1].shots[7] },
  { id: '06', src: games[1].shots[5], dead: true },
  { id: '07', src: games[2].shots[1] },
  { id: '08', src: games[2].shots[2] },
];

export const chapterArt = [
  games[0].shots[0],
  games[1].shots[2],
  games[2].shots[0],
];

// ---------------------------------------------------------------------------
const jolt = (kind, width, file) => `https://m.gjcdn.net/${kind}/${width}/${file}`;

const fanWarning =
  'Horror themes, jump scares, loud audio and dark scenes. Headphones make it work — and are exactly why to think twice if you startle easily.';

const fan = ({ thumb, art, shots = [], ...g }) => ({
  ...g,
  path: `/fan-games/${g.slug}`,
  img: art ?? jolt('game-thumbnail', 500, thumb),
  cover: art ?? jolt('game-thumbnail', 800, thumb),
  ogImage: `/og/${g.slug}.jpg`,
  shots: shots.map((id) => jolt('game-screenshot', 400, `${id}.webp`)),
  warning: g.warning ?? fanWarning,
});

export const fanGames = [
  fan({
    slug: 'spamton-night',
    title: 'Spamton Night',
    pitch:
      'A FNaF × Deltarune horror crossover. You are Spamton, running for your life from Friend through the dark.',
    tag: 'GameJolt · itch.io',
    thumb: '1089431-crop278_79_941_452-yikvfftr-v4.webp',
    art: '/img/spamton-night.webp',
    platforms: ['Windows', 'Android'],
    links: {
      itch: 'https://extinct-hopes.itch.io/spamton-night',
      gamejolt: 'https://gamejolt.com/games/spamton_night/1089431',
    },
    shots: [
      '52652669-rure8eyd-v4',
      '52652666-qnpps74e-v4',
      '52652667-zqjrpmti-v4',
      '52652668-vys7pn2w-v4',
      '52652665-kzmabddg-v4',
    ],
  }),
  fan({
    slug: 'one-night-with-piggy',
    title: 'One Night with Piggy',
    pitch: 'A short experimental FNaF-style horror game, built in three hours as a challenge.',
    tag: 'GameJolt',
    thumb: '1058476-crop425_120_1920_960-gqykxez4-v4.webp',
    platforms: ['Windows'],
    links: {
      gamejolt:
        'https://gamejolt.com/games/One-Night-with-Piggy-i-wanna-shoot-on-my-face-pls/1058476',
    },
    shots: ['49255861-ddrbtmbg-v4', '49255856-gynmafwj-v4', '49255854-zujrqdck-v4'],
  }),
  fan({
    slug: 'fnaf-2-movie-edition',
    title: 'FNaF 2 Movie Edition',
    pitch:
      'A 3D fan game based on the FNaF 2 movie — key moments from the film, playable, in its tense and dark atmosphere.',
    tag: 'GameJolt',
    thumb: '1034245-crop133_0_1381_702-zummpfku-v4.webp',
    platforms: ['Windows'],
    links: { gamejolt: 'https://gamejolt.com/games/fnaf_movie_edition2/1034245' },
    shots: [
      '48142819-ddvgsn9g-v4',
      '48142813-j87ixxpu-v4',
      '48142810-nutcwpmp-v4',
      '48142817-gvne5hcy-v4',
      '48142816-y64rdmra-v4',
      '48142815-hvv4evbv-v4',
    ],
  }),
  fan({
    slug: 'gravity-falls-exorcism',
    title: 'Gravity Falls: Exorcism',
    pitch: 'A Gravity Falls horror fan game with an action-adventure twist.',
    tag: 'GameJolt',
    thumb: '919820-nbd8yyxj-v4.webp',
    platforms: ['Windows'],
    links: {
      gamejolt: 'https://gamejolt.com/games/pleaseplay_five_nights_in_laboratory/919820',
    },
    shots: [
      '35257203-hdja3csh-v4',
      '35257202-nrget5ws-v4',
      '35257201-agcag33w-v4',
      '35257200-4yaxej3d-v4',
      '35257199-kbqutdcp-v4',
    ],
  }),
  fan({
    slug: 'fnaf-movie-edition',
    title: 'FNaF Movie Edition',
    pitch:
      "A fan game inspired by the FNaF movie. Revisit Freddy Fazbear's Pizza like never before.",
    tag: 'GameJolt',
    thumb: '850220-fxbbqemn-v4.webp',
    platforms: ['Windows', 'Android'],
    note: 'The Android build is not optimized.',
    links: { gamejolt: 'https://gamejolt.com/games/fnaf_movie_game/850220' },
    shots: [
      '33658175-cu4pe5jr-v4',
      '33658174-bygrkbtj-v4',
      '33658228-7mhwshhv-v4',
      '33658181-vn39uj5s-v4',
      '33658180-a3pmbsuu-v4',
      '33658177-afbefdma-v4',
    ],
  }),
  fan({
    slug: 'project-dream-pc',
    title: 'Project: Dream CHAPTER 1',
    pitch: 'The PC build of Project Dream, Chapter 1 — escape the facility on Windows.',
    tag: 'GameJolt — PC build',
    thumb: '753130-ruwzkzhd-v4.webp',
    platforms: ['Windows'],
    links: { gamejolt: 'https://gamejolt.com/games/leni_gybrid/753130' },
    shots: [
      '17316569-q4z8fzn9-v4',
      '17316568-bzq89zh8-v4',
      '17316567-zh8xyvss-v4',
      '17316566-biwuhfek-v4',
      '17316565-zf6qib62-v4',
      '17316564-sqtatpr5-v4',
    ],
  }),
  fan({
    slug: 'brawl-park',
    title: 'Night Shift at Brawl Park',
    pitch: "A Five Nights at Freddy's-style fan game: survive the night shift at Brawl Park.",
    tag: 'GameJolt',
    thumb: '683592-wgrkbcjm-v4.webp',
    platforms: ['Windows', 'Android'],
    links: { gamejolt: 'https://gamejolt.com/games/NSabp/683592' },
    shots: [
      '10913940-xdvjhmra-v4',
      '10913939-sf5ccxrp-v4',
      '10913938-n9teea37-v4',
      '10913937-tup2qvg2-v4',
      '10913936-whfenxxw-v4',
    ],
  }),
];

export const fanGameBySlug = (slug) => fanGames.find((g) => g.slug === slug);

export const avatar =
  'https://play-lh.googleusercontent.com/YT3AGVtwIgWng1O-LhEJjUQG0TEeq5BCzXZhS7h1V7Q3qjBTH2JVVawrGg_ahrgu_w=w512';
