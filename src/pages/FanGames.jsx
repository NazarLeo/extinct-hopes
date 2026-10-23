import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Window from '../components/Window';
import { LINKS } from '../config/links';
import { fanGames } from '../data/games';
import { metaFor } from '../data/seo';
import useMeta from '../hooks/useMeta';
import { trackNav, trackSocial } from '../lib/analytics';

export default function FanGames() {
  useMeta(metaFor('/fan-games'));

  return (
    <>
      <PageHero
        scene={{ bg: 'fan', side: 'left' }}
        className="pg-short pg-dim"
        id="pg-fan-index"
        eyebrow="Side projects"
        title="Fan games"
      >
        <p className="pg-p pg-rv" style={{ '--d': '1s' }}>
          Fan games and smaller experiments, all free. These are separate from the Project
          Dream series — made for fun, mostly PC.
        </p>
      </PageHero>

      <Window path="C:\project_dream\fan_games">
        <div className="fan stagger">
          {fanGames.map((f) => (
            <Link
              className="fan-card"
              to={f.path}
              key={f.slug}
              onClick={() => trackNav(f.path, 'fan_index')}
            >
              <span className="fan-art">
                <img loading="lazy" alt={f.title} src={f.img} />
              </span>
              <span className="fan-t">
                <b>{f.title}</b>
                <span>{f.tag}</span>
              </span>
            </Link>
          ))}
        </div>

        <p style={{ margin: '20px 0 0' }}>
          <a
            className="btn"
            href={LINKS.gamejolt}
            target="_blank"
            rel="noopener"
            onClick={() => trackSocial('gamejolt', 'fan_index')}
          >
            See all on GameJolt
          </a>
        </p>
      </Window>

      <Footer
        links={[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/privacy', label: 'Privacy' },
        ]}
      />
    </>
  );
}
