import { Link } from 'react-router-dom';
import Block from '../components/Block';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Trailer from '../components/Trailer';
import Window from '../components/Window';
import RichText from '../components/RichText';
import { gameBySlug } from '../data/games';
import useMeta from '../hooks/useMeta';

export default function GamePage({ slug }) {
  const g = gameBySlug(slug);

  useMeta({
    title: g.metaTitle,
    description: g.metaDescription,
    ogTitle: g.ogTitle,
    ogDescription: g.ogDescription,
    ogImage: g.ogImage,
  });

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
              <a className="btn btn-go" href={g.store} target="_blank" rel="noopener">
                ▶ Get it on Google Play
              </a>
              <a
                className={g.secondaryAction.variant === 'red' ? 'btn btn-red' : 'btn'}
                href={g.secondaryAction.href}
              >
                {g.secondaryAction.label}
              </a>
            </div>
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
              href={g.store}
              target="_blank"
              rel="noopener"
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
