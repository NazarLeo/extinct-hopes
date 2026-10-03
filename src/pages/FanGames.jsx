import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Window from '../components/Window';
import { LINKS } from '../config/links';
import { fanGames } from '../data/games';
import { metaFor } from '../data/seo';
import useMeta from '../hooks/useMeta';
import { trackSocial } from '../lib/analytics';

export default function FanGames() {
  useMeta(metaFor('/fan-games'));

  return (
    <>
      <Window path="C:\project_dream\fan_games">
        <span className="eyebrow">Side projects</span>
        <h1 className="page-h1">Fan games</h1>
        <p className="page-lede">
          Fan games and smaller experiments, all free. These are separate from the Project
          Dream series — made for fun, mostly PC.
        </p>

        <div className="fan">
          {fanGames.map((f) => (
            <Link className="fan-card" to={f.path} key={f.slug}>
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
            onClick={() => trackSocial('gamejolt')}
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
