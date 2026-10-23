import { Link } from 'react-router-dom';
import Block from '../components/Block';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import JoinTheLab from '../components/JoinTheLab';
import PageHero from '../components/PageHero';
import PlayButtons from '../components/PlayButtons';
import Window from '../components/Window';
import { fanGameBySlug, fanGames } from '../data/games';
import { metaFor } from '../data/seo';
import useMeta from '../hooks/useMeta';
import { trackNav } from '../lib/analytics';

// One page per fan game: /fan-games/<slug>. Everything comes from the game's
// object in src/data/games.js; buttons and sections that have no data are
// simply not rendered.
export default function FanGamePage({ slug }) {
  const g = fanGameBySlug(slug);
  useMeta(metaFor(g.path));

  const dossier = [
    ['Type', 'Fan game'],
    ['Platform', g.platforms.join(' · ')],
    ['Price', 'Free'],
    ...(g.note ? [['Note', g.note]] : []),
  ];
  const next = fanGames[(fanGames.indexOf(g) + 1) % fanGames.length];

  return (
    <>
      <PageHero
        scene={{ bg: 'fan', side: 'left' }}
        className="pg-dim"
        id={`pg-${g.slug}`}
        eyebrow="Fan game"
        title={g.title}
        poster={
          <div className="pg-poster">
            <img alt={`${g.title} cover`} src={g.cover} />
          </div>
        }
      >
        <p className="pg-p pg-rv" style={{ '--d': '1s' }}>
          {g.pitch}
        </p>
        <div className="pills pg-rv" style={{ '--d': '1.1s' }}>
          <span className="pill on">Free</span>
          {g.platforms.map((p) => (
            <span className="pill" key={p}>
              {p}
            </span>
          ))}
        </div>
        <div className="pg-acts pg-rv" style={{ '--d': '1.2s' }}>
          <PlayButtons game={g} />
        </div>
        <JoinTheLab variant="line" game={g.slug} />
      </PageHero>

      <Window path={`C:\\project_dream\\fan_games\\${slug.replace(/-/g, '_')}`}>
        <div className={g.shots.length ? 'g-cols' : undefined}>
          {g.shots.length > 0 && (
            <div>
              <Block title="Recovered footage" tag={`${g.shots.length} frames`}>
                <Gallery shots={g.shots} game={g.slug} name={g.title} />
              </Block>
            </div>
          )}

          <aside>
            <Block title="Dossier" tag="Fan project">
              <table className="spec">
                <tbody>
                  {dossier.map(([k, v]) => (
                    <tr key={k}>
                      <th>{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Block>

            <Block title="⚠ Content warning" tag="Read first" alarm red>
              {g.warning}
            </Block>
          </aside>
        </div>
      </Window>

      <nav className="chnav">
        <Link to="/fan-games" onClick={() => trackNav('/fan-games', 'fan_nav')}>
          <span>← Back</span>
          <b>All fan games</b>
        </Link>
        <Link to={next.path} onClick={() => trackNav(next.path, 'fan_nav')}>
          <span>Next fan game →</span>
          <b>{next.title}</b>
        </Link>
      </nav>

      <Footer
        links={[
          { to: '/', label: 'Home' },
          { to: '/fan-games', label: 'Fan Games' },
          { to: '/privacy', label: 'Privacy' },
        ]}
      />
    </>
  );
}
