import { Link } from 'react-router-dom';
import Block from '../components/Block';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import JoinTheLab from '../components/JoinTheLab';
import PlayButtons from '../components/PlayButtons';
import Window from '../components/Window';
import { fanGameBySlug, fanGames } from '../data/games';
import { metaFor } from '../data/seo';
import useMeta from '../hooks/useMeta';

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
      <Window path={`C:\\project_dream\\fan_games\\${slug.replace(/-/g, '_')}`}>
        {/* HEADER */}
        <div className="fg-head">
          <div className="fg-cover">
            <img alt={`${g.title} cover`} src={g.cover} />
          </div>
          <div>
            <span className="eyebrow">Fan game</span>
            <h1>{g.title}</h1>
            <p className="g-lede">{g.pitch}</p>
            <div className="pills">
              <span className="pill on">Free</span>
              {g.platforms.map((p) => (
                <span className="pill" key={p}>
                  {p}
                </span>
              ))}
            </div>
            <div className="g-acts">
              <PlayButtons game={g} />
            </div>
            <JoinTheLab variant="line" game={g.slug} />
          </div>
        </div>

        {/* COLUMNS */}
        <div className={g.shots.length ? 'g-cols' : undefined} style={{ marginTop: 18 }}>
          {g.shots.length > 0 && (
            <div>
              <Block title="Recovered footage" tag={`${g.shots.length} frames`}>
                <Gallery shots={g.shots} />
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
        <Link to="/fan-games">
          <span>← Back</span>
          <b>All fan games</b>
        </Link>
        <Link to={next.path}>
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
