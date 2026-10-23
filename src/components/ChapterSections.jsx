import { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fanGames, games } from '../data/games';
import useSectionMotion from '../hooks/useSectionMotion';
import { trackNav, trackPlay } from '../lib/analytics';

// Background art lives in public/sections: `<key>-1600|2560.webp` for wide
// screens and `<key>-m.webp`, a portrait crop, for phones. `side` is the
// half of the frame that is dark enough to carry the copy.
const art = {
  'game-lab': { key: 'lab', side: 'left' },
  'game-escape': { key: 'escape', side: 'right' },
  'game-cyborg': { key: 'cyborg', side: 'left' },
};

const fanBlurb =
  'Outside Project Dream I make fan games and smaller experiments: FNaF movie editions, Spamton Night, Gravity Falls, Brawl Park. Mostly for PC, all free on GameJolt.';

function Bg({ name }) {
  const src = (suffix) => `/sections/${name}-${suffix}.webp`;
  return (
    <div className="pg-bg" aria-hidden="true">
      <div className="pg-bgp">
        <picture>
          <source media="(max-width: 720px)" srcSet={src('m')} />
          <img
            alt=""
            loading="lazy"
            decoding="async"
            sizes="100vw"
            srcSet={`${src(1600)} 1600w, ${src(2560)} 2560w`}
            src={src(2560)}
          />
        </picture>
      </div>
    </div>
  );
}

// The title rises word by word out of a clipped line.
function Words({ text }) {
  return text.split(' ').map((word, i) => (
    <Fragment key={i}>
      <span className="w">
        <span style={{ '--i': i }}>{word}</span>
      </span>{' '}
    </Fragment>
  ));
}

function Copy({ id, eyebrow, red, title, children }) {
  return (
    <div className="pg-copy">
      <span className={red ? 'eyebrow red pg-rv' : 'eyebrow pg-rv'} style={{ '--d': '.4s' }}>
        {eyebrow}
      </span>
      <h2 className="pg-title" id={id}>
        <Words text={title} />
      </h2>
      {children}
    </div>
  );
}

function Chapter({ game }) {
  const { key, side } = art[game.slug];
  const id = `pg-${game.slug}`;

  return (
    <section className={`pg pg-${side}`} aria-labelledby={id}>
      <Bg name={key} />
      <div className="pg-shade" aria-hidden="true" />
      <span className="pg-num" aria-hidden="true">
        {game.number}
      </span>
      <Copy id={id} eyebrow={game.eyebrow} red={game.eyebrowRed} title={game.shortTitle}>
        <p className="pg-p pg-rv" style={{ '--d': '1s' }}>
          {game.pitch}
        </p>
        <div className="pg-acts pg-rv" style={{ '--d': '1.15s' }}>
          <Link
            className="btn btn-go"
            to={game.path}
            onClick={() => trackNav(game.path, 'home_chapters')}
          >
            Open the game
          </Link>
          <a
            className="pg-ext"
            href={game.links.googlePlay}
            target="_blank"
            rel="noopener"
            onClick={() => trackPlay(game.slug, 'google_play')}
          >
            Google Play ↗
          </a>
        </div>
      </Copy>
    </section>
  );
}

function FanSection() {
  return (
    <section className="pg pg-fan pg-center" aria-labelledby="pg-fan-games">
      <Bg name="fan" />
      <div className="pg-shade" aria-hidden="true" />
      <Copy
        id="pg-fan-games"
        eyebrow={`Side projects · ${fanGames.length} free games`}
        title="Fan games"
      >
        <p className="pg-p pg-rv" style={{ '--d': '1s' }}>
          {fanBlurb}
        </p>
        <div className="pg-acts pg-rv" style={{ '--d': '1.15s' }}>
          <Link
            className="btn btn-go"
            to="/fan-games"
            onClick={() => trackNav('/fan-games', 'home_fan_games')}
          >
            See all fan games
          </Link>
        </div>
      </Copy>
    </section>
  );
}

// The home page below the hero: one full-screen section per chapter, then the
// fan games. The wrapper carries #chapters, the target of the hero's button.
export default function ChapterSections() {
  const root = useRef(null);
  useSectionMotion(root);

  return (
    <div className="pgs" id="chapters" ref={root}>
      {games.map((g) => (
        <Chapter game={g} key={g.slug} />
      ))}
      <FanSection />
    </div>
  );
}
