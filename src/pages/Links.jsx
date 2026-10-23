import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SocialLink from '../components/SocialLink';
import { fanGames, games, latestGame } from '../data/games';
import { cutouts } from '../data/scenes';
import { metaFor } from '../data/seo';
import { socials } from '../data/socials';
import useMeta from '../hooks/useMeta';
import { trackNav } from '../lib/analytics';

// Link-in-bio page: big, thumb-friendly buttons, mobile first. The social
// entries come from data/socials.js, so the Discord button disappears with
// the rest of Discord when no invite is configured.
const social = (id) => socials.find((s) => s.id === id);
const ORDER = ['youtube', 'tiktok', 'discord', 'gamejolt', 'googleplay'];

export default function Links() {
  useMeta(metaFor('/links'));

  return (
    <>
      <PageHero
        scene={{ bg: 'fog', side: 'center', char: cutouts['3808'] }}
        className="pg-short"
        id="pg-links"
        eyebrow="Solo horror game developer"
        title="extinct hopes"
      />

      <div className="lk-wrap">
        <div className="lk-list stagger">
          <Link
            className="lk lk-go"
            to={latestGame.path}
            onClick={() => trackNav(latestGame.path, 'links')}
          >
            <span className="lk-t">
              <b>▶ {latestGame.shortTitle}</b>
              <span>Latest release · free on Android</span>
            </span>
            <i>→</i>
          </Link>

          <Link className="lk" to="/#chapters" onClick={() => trackNav('/#chapters', 'links')}>
            <span className="lk-t">
              <b>All games</b>
              <span>
                {games.length} chapters + {fanGames.length} fan games
              </span>
            </span>
            <i>→</i>
          </Link>

          {ORDER.map(social).filter(Boolean).map((s) => (
            <SocialLink key={s.id} social={s} where="links" className="lk">
              <span className="lk-t">
                <b>{s.name}</b>
                <span>{s.handle}</span>
              </span>
              <i>↗</i>
            </SocialLink>
          ))}
        </div>
      </div>

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
