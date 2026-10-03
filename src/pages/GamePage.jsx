import { Link } from 'react-router-dom';
import Block from '../components/Block';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import JoinTheLab from '../components/JoinTheLab';
import PlayButtons from '../components/PlayButtons';
import Trailer from '../components/Trailer';
import Window from '../components/Window';
import RichText from '../components/RichText';
import { gameBySlug } from '../data/games';
import { metaFor } from '../data/seo';
import useMeta from '../hooks/useMeta';
import { trackPlay } from '../lib/analytics';

export default function GamePage({ slug }) {
  const g = gameBySlug(slug);

  useMeta(metaFor(g.path));

  return (
    <>
      <Window path={g.winPath}>
        {/* HEADER */}
        <div className="g-head">
          <div className="g-icon">
            <img alt={`${g.shortTitle} icon`} src={g.icon} />
          </div>
          <div>
            <span className={g.eyebrowRed ? 'eyebrow red' : 'eyebrow'}>{g.eyebrow}</span>
            <h1>{g.title}</h1>
            <p className="g-lede">
              <RichText parts={g.lede} />
            </p>
            <div className="pills">
              {g.pills.map((p) => (
                <span
                  className={p.variant ? `pill ${p.variant}` : 'pill'}
                  key={p.text}
                >
                  {p.text}
                </span>
              ))}
            </div>
            <div className="g-acts">
              <PlayButtons game={g} />
              <a
                className={g.secondaryAction.variant === 'red' ? 'btn btn-red' : 'btn'}
                href={g.secondaryAction.href}
              >
                {g.secondaryAction.label}
              </a>
            </div>
            <JoinTheLab variant="line" game={g.slug} />
          </div>
        </div>

        {g.trailer && (
          <Trailer id={g.trailer.id} poster={g.trailer.poster} title={g.shortTitle} />
        )}

        {/* COLUMNS */}
        <div className="g-cols" style={{ marginTop: 18 }}>
          <div>
            {g.blocks.map((b) => (
              <Block
                key={b.title}
                title={b.title}
                tag={b.tag}
                prose={b.prose}
                features={b.features}
              />
            ))}
          </div>

          <aside>
            <Block title="Dossier" tag={g.dossierTag}>
              <table className="spec">
                <tbody>
                  {g.dossier.map(([k, v]) => (
                    <tr key={k}>
                      <th>{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Block>

            {g.asideBlocks.map((b) => (
              <Block key={b.title} title={b.title} tag={b.tag} prose={b.prose} />
            ))}

            <Block title="⚠ Content warning" tag="Read first" alarm red>
              {g.warning}
            </Block>

            <a
              className="btn btn-go"
              style={{ width: '100%' }}
              href={g.links.googlePlay}
              target="_blank"
              rel="noopener"
              onClick={() => trackPlay(g.slug, 'google_play')}
            >
              Download free ↗
            </a>
          </aside>
        </div>

        {/* SCREENSHOTS */}
        <div className="sec" id="shots">
          <div className="sec-h">
            <h2>recovered footage</h2>
          </div>
          <Gallery shots={g.shots} />
        </div>
      </Window>

      <nav className="chnav">
        <Link to={g.prev.to}>
          <span>{g.prev.label}</span>
          <b>{g.prev.title}</b>
        </Link>
        <Link to={g.next.to}>
          <span>{g.next.label}</span>
          <b>{g.next.title}</b>
        </Link>
      </nav>

      <Footer
        links={[
          { to: '/about', label: 'About' },
          { to: '/fan-games', label: 'Fan Games' },
          { to: '/privacy', label: 'Privacy' },
        ]}
        showPlay
      />
    </>
  );
}
