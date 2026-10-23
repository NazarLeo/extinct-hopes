import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { fanGames, games } from '../data/games';
import { scenes } from '../data/scenes';
import useSectionMotion from '../hooks/useSectionMotion';
import { trackNav, trackPlay } from '../lib/analytics';
import { playUrl } from '../lib/playLink';
import Scene, { Eyebrow, Title } from './Scene';

const fanBlurb =
  'Outside Project Dream I make fan games and smaller experiments: FNaF movie editions, Spamton Night, Gravity Falls, Brawl Park. Mostly for PC, all free on GameJolt.';

function Chapter({ game }) {
  const id = `pg-${game.slug}`;

  return (
    <Scene {...scenes[game.slug]} number={game.number} labelledBy={id}>
      <Eyebrow red={game.eyebrowRed}>{game.eyebrow}</Eyebrow>
      <Title id={id} text={game.shortTitle} />
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
          href={playUrl(game.links.googlePlay, 'home_chapter', game.slug)}
          target="_blank"
          rel="noopener"
          onClick={() => trackPlay(game.slug, 'google_play')}
        >
          Google Play ↗
        </a>
      </div>
    </Scene>
  );
}

function FanSection() {
  return (
    <Scene className="pg-fan" bg="fan" side="center" labelledBy="pg-fan-games">
      <Eyebrow>{`Side projects · ${fanGames.length} free games`}</Eyebrow>
      <Title id="pg-fan-games" text="Fan games" />
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
    </Scene>
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
