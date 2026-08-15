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
    ogDescription:
      'Night shift in a classified Soviet laboratory. Test Subject #3808 is loose.',
    icon: 'https://play-lh.googleusercontent.com/s0eQAyTKC7emeO_eevo0mijRh8jbLkshvG28wYxAg5roF1x0fqUUrBbN48fhg4u8e69oyVjIyIxl8lFdV9jz9pQ=w240',
    ogImage:
      'https://play-lh.googleusercontent.com/s0eQAyTKC7emeO_eevo0mijRh8jbLkshvG28wYxAg5roF1x0fqUUrBbN48fhg4u8e69oyVjIyIxl8lFdV9jz9pQ=w600',
    store: 'https://play.google.com/store/apps/details?id=com.leni.p3808',
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
    shots: [
      'fcBwhlXMVfTn4Av7m57rBb7MvOc6dD0xo7QlcocZz19m2_839e8x0IA7nl5iv7kReAJiFeo75uJugnA0465zx3w',
      '5GIEwUeqbDo8WJkUWDeZqySJq8dt76yVyaXEFM7bMNGZng0wBMqV4STvQrmhIukbh5jfY3P-QQ_ASYavs9pJ8Q',
      'zwagdlzTHdhgzkkJ2ZNYtljs2gR-hrYRI1kvBlpnsk74NwUSCwVGtJuQ8xw7pGdRvMqQtNTdb9TowsjuA2BIEno',
      'W-cdHI0nlQvX2xHduyAlNuuGAChT-yChIaeqdVJTzCJwvqIm7THYkML7yavFfYOansAK91ZxZTlxLC2bw3Tp8g',
      '6fXn97K9NGikLEF6E3LFScm_VM9Skf15ynoI4YQrG5cwecfkbcGeMG7THHiktqqEaLaCyS5OXP4NrPdaMAOd6MI',
      'oS38p5gPVHJmZAXGnL9IiYZvSJoO_jEMmWBaQtTojjai55wxrgUhks0JpsmWMqboNoK4LDaF2J_7F9x6iYLtwVY',
      'tzKzQ6UHdIH9kEBpgv7iiEMDIGxQBfw6jvnF2kMxFNSBGT2guygR44_7vTiGX3BZrZmTNU6hIpJAG8P4xxva6Q',
      'wXM3DY0696lZm1IOEQ21g3Fugg7R0N-MGW9yh7aF2j6KMxAtUz43BM-6gP0tMYS0VyBvR_Lw6iAfjPq-NhU3cA',
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
    ogDescription:
      'Your father told stories about monsters in an abandoned facility. The floor gave way.',
    icon: 'https://play-lh.googleusercontent.com/xDXte1POPv7HprynzGEsUZnsoBZfDC8S4gRYO49bEhBLLmerje5Gz9V1WarzqdQe5Pf2NJLitKf58brkJdof=w240',
    ogImage:
      'https://play-lh.googleusercontent.com/xDXte1POPv7HprynzGEsUZnsoBZfDC8S4gRYO49bEhBLLmerje5Gz9V1WarzqdQe5Pf2NJLitKf58brkJdof=w600',
    store: 'https://play.google.com/store/apps/details?id=com.leni.gybrid',
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
    shots: [
      'TCz9JvFm1qOn5ebUuFa2VsPBc0KmZF85FdTL9jtByExRQb4KIJmmV0KuPJikgNW__qHfA5dkaVGthZTh8_EVNVc',
      'cH4Jkxz8AOUL1CbXKhWGrwNlVKg8w5X_oNdvoInsgCT5UzA00AKHdaw3D-QHEufahB758cjQ6cvGrdJqSPvo',
      'hPn1r52WxXK3fBbeVQP5bUwSKEX9JwdMSTzaR7l3AfQolcUNHxFtV6U3qxKZb0m_2oK6N3tGxdNXW_mE5Yk42W0',
      'FhmFsCsRWNShgwfW8TTTAQFEceqLVVtjUNbww3yUwh4etjWPjwqDS4eDFgGcKBDzJN9-Grv3DFH5MEB1gc8dgw',
      'dAmuZ9HJomYbv1wCokUbqkK7_bpuwJ6ogGpTK87Lim546uKgb9vttxWNTIGG_DhHQ_QAtWfyKIT8JVQ-Af7-',
      'QIGMGd0G9vAM1eORV4n8oXsA7zsmhK6SRU_TJ6G6aext4MkdC_N0-NVBsHBxZec2WhBjNXOKqBaXBZ3b9D4',
      '51PJ5GTubvlVmiBZ2-Ir9RGYSQf-gfL1AMMwnuP_k87pmGkviC1hZJKgX_kmK_C2As1lMbzksC5m8gHKVmfqmw',
      '5hNNphVvhktExHFoyOGSwQE4P5OkrR4Egs0NtviBJf79hv-o2a20ycPYwz1AB-nakmZzQa_vdAfVRX-HC8DeN6Y',
      'VSjVmBxhrmL6W1DnuPZ_YfgmWlgV4JXBcaMo_9hRHoeX7uMXBw06yzEYaVA-BHqDX6ajnS7pwVHht37mHnY-_g',
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
    ogDescription:
      'You survived the first laboratory. It wounded you on the way out, and you are still underground.',
    icon: 'https://play-lh.googleusercontent.com/QKwkYaEl_2E9Uecb5wyGJgVywhDTp1tgQSWd7YTqGPR3W7z-_Tx2cVJ-ZlVcMlcXnU0LUVcRlMTqNMwFtdXp=w240',
    ogImage:
      'https://play-lh.googleusercontent.com/QKwkYaEl_2E9Uecb5wyGJgVywhDTp1tgQSWd7YTqGPR3W7z-_Tx2cVJ-ZlVcMlcXnU0LUVcRlMTqNMwFtdXp=w600',
    store: 'https://play.google.com/store/apps/details?id=com.leni.cyborg',
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
            'Whatever they built down here was not meant to keep working. It still does. It patrols the lower levels, it reacts to what it sees, and it does not tire. ',
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
    shots: [
      'cA2p-yEzUxwCZE4TxWjtioh-EKKQJ6yUB63NX0AKcqBhg5KCglADp23fGAl4WTUyqqDgcSPF3EGhJSxpuKGzUw',
      'QIFo-xG6fmXmXXSa2gAGSdFpfx3v2ud8f0aaOKCYGN0EvldRbCbvYzybzw5AvQSUTqP-49JXaA-DTOI47Nikqw',
      'Y_Xno6r9aiG8vc5LJXPGKW4YrysrQwqoIw8Vl0JIHtEZMm0t9yGQhbRD1gFAET0PdmNDZt4aTED0nsroOewOAQ',
      'Kro5KmeFwe_5V5JE4SHSyhfz1-k42C_QN2SMrmRBfjAxUVS-SG3xde3-NhvvMjpKcGnK08aIckoeSRuSUXt9Tqo',
      '87ukl920eFwXJ8T0PWW4wMloMDRoqpSr-IN56WRODEHXk06I-Wmvx7uKNPPqBKWUzgAvrC6a3FDadUFGxP0DQw',
      '9ikv1qHayDoMPDObvVgrCstz0AIBcsv2oKD-ke8p9hBCJPJUaEoFRLDNHiccj5Wch2ko3oF1pQZojz-_6ULJuLQ',
      'i7GCyHU8W2LjRy0AoQlhwHXScwIU4vmBQy4p2dXL3QRG5yyZ0sAf7MAW7hUjidkcJJ_TDusOiWx2ndrqjAR0LOE',
      'DxUZbGC0bD3yOwHNllIkZkH5dhk0Yf5UIrYpYqt-MSXPQVJlzHVDljFbiZPtyTkn4UoN7tZtgNuB2rfk3eIK7YQ',
      'IaDrl_2yQyDxhTU2udScKV0WW7Bt9Q5pGMYgLeWVisAcwn0HH2JX3EPEqhdTw-nHawuEDxx_x8FN0co0904BgbI',
      'La6BTfQp139uDW8QD5_xEfbmB6arj3Zk85z4Qj7z3NL7gCZ1vY9llDqZkGoAW4Kx67tjTNMdWhvW9yojS6qEZw',
    ].map(shot),
    prev: { to: '/game-escape', label: '← Chapter 1', title: 'Horror Escape' },
    next: { to: '/', label: 'All chapters →', title: 'Project Dream' },
  },
];

export const gameBySlug = (slug) => games.find((g) => g.slug === slug);

// Home page CCTV wall — real screenshots pulled from across the three games.
export const cctv = [
  { id: '01', src: games[0].shots[0] },
  { id: '02', src: games[0].shots[1] },
  { id: '03', src: games[0].shots[3], dead: true },
  { id: '04', src: games[0].shots[5] },
  { id: '05', src: games[1].shots[0] },
  { id: '06', src: games[1].shots[2], dead: true },
  { id: '07', src: games[2].shots[0] },
  { id: '08', src: games[2].shots[2] },
];

export const chapterArt = [
  games[0].shots[2],
  games[1].shots[0],
  games[2].shots[0],
];

export const fanGames = [
  {
    title: 'Spamton Night',
    href: 'https://gamejolt.com/games/spamton_night/1089431',
    img: 'https://m.gjcdn.net/game-thumbnail/500/1089431-crop278_79_941_452-yikvfftr-v4.webp',
    tag: 'GameJolt',
  },
  {
    title: 'One Night with Piggy',
    href: 'https://gamejolt.com/games/One-Night-with-Piggy-i-wanna-shoot-on-my-face-pls/1058476',
    img: 'https://m.gjcdn.net/game-thumbnail/500/1058476-crop425_120_1920_960-gqykxez4-v4.webp',
    tag: 'GameJolt',
  },
  {
    title: 'FNaF 2 Movie Edition',
    href: 'https://gamejolt.com/games/fnaf_movie_edition2/1034245',
    img: 'https://m.gjcdn.net/game-thumbnail/500/1034245-crop133_0_1381_702-zummpfku-v4.webp',
    tag: 'GameJolt',
  },
  {
    title: 'Gravity Falls: Exorcism',
    href: 'https://gamejolt.com/games/pleaseplay_five_nights_in_laboratory/919820',
    img: 'https://m.gjcdn.net/game-thumbnail/500/919820-nbd8yyxj-v4.webp',
    tag: 'GameJolt',
  },
  {
    title: 'FNaF Movie Edition',
    href: 'https://gamejolt.com/games/fnaf_movie_game/850220',
    img: 'https://m.gjcdn.net/game-thumbnail/500/850220-fxbbqemn-v4.webp',
    tag: 'GameJolt',
  },
  {
    title: 'Project: Dream CHAPTER 1',
    href: 'https://gamejolt.com/games/leni_gybrid/753130',
    img: 'https://m.gjcdn.net/game-thumbnail/500/753130-ruwzkzhd-v4.webp',
    tag: 'GameJolt — PC build',
  },
  {
    title: 'Night Shift at Brawl Park',
    href: 'https://gamejolt.com/games/NSabp/683592',
    img: 'https://m.gjcdn.net/game-thumbnail/500/683592-wgrkbcjm-v4.webp',
    tag: 'GameJolt',
  },
];

export const avatar =
  'https://play-lh.googleusercontent.com/YT3AGVtwIgWng1O-LhEJjUQG0TEeq5BCzXZhS7h1V7Q3qjBTH2JVVawrGg_ahrgu_w=w512';
