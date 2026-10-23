import { Link } from 'react-router-dom';
import Block from '../components/Block';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import JoinTheLab from '../components/JoinTheLab';
import PageHero from '../components/PageHero';
import PlayButtons from '../components/PlayButtons';
import Trailer from '../components/Trailer';
import Window from '../components/Window';
import RichText from '../components/RichText';
import { gameBySlug } from '../data/games';
import { scenes } from '../data/scenes';
import { metaFor } from '../data/seo';
import useMeta from '../hooks/useMeta';
import { playUrl } from '../lib/playLink';
import { trackCta, trackNav, trackPlay } from '../lib/analytics';

export default function GamePage({ slug }) {
  const g = gameBySlug(slug);

  useMeta(metaFor(g.path));

  return (
    <>
      <PageHero
        scene={scenes[g.slug]}
        id={`pg-${g.slug}`}
        eyebrow={g.eyebrow}
        red={g.eyebrowRed}
        title={g.title}
      >
        <p className="pg-p pg-rv" style={{ '--d': '1s' }}>
          <RichText parts={g.lede} />
        </p>
        <div className="pills pg-rv" style={{ '--d': '1.1s' }}>
          {g.pills.map((p) => (
            <span className={p.variant ? `pill ${p.variant}` : 'pill'} key={p.text}>
              {p.text}
            </span>
          ))}
        </div>
        <div className="pg-acts pg-rv" style={{ '--d': '1.2s' }}>
          <PlayButtons game={g} />
          <a
            className={g.secondaryAction.variant === 'red' ? 'btn btn-red' : 'btn'}
            href={g.secondaryAction.href}
            onClick={() => trackCta(g.secondaryAction.href.slice(1), 'game_page')}
          >
            {g.secondaryAction.label}
          </a>
        </div>
        <JoinTheLab variant="line" game={g.slug} />
      </PageHero>

      <Window path={g.winPath}>
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
              href={playUrl(g.links.googlePlay, 'game_page_sidebar', g.slug)}
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
          <Gallery shots={g.shots} game={g.slug} name={g.title} />
        </div>
      </Window>

      <nav className="chnav">
        <Link to={g.prev.to} onClick={() => trackNav(g.prev.to, 'chapter_nav')}>
          <span>{g.prev.label}</span>
          <b>{g.prev.title}</b>
        </Link>
        <Link to={g.next.to} onClick={() => trackNav(g.next.to, 'chapter_nav')}>
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
