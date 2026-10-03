import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SocialLink from '../components/SocialLink';
import Window from '../components/Window';
import { avatar, fanGames, games, latestGame } from '../data/games';
import { metaFor } from '../data/seo';
import { socials } from '../data/socials';
import useMeta from '../hooks/useMeta';

// Link-in-bio page: big, thumb-friendly buttons, mobile first. The social
// entries come from data/socials.js, so the Discord button disappears with
// the rest of Discord when no invite is configured.
const social = (id) => socials.find((s) => s.id === id);
const ORDER = ['youtube', 'tiktok', 'discord', 'gamejolt', 'googleplay'];

export default function Links() {
  useMeta(metaFor('/links'));

  return (
    <>
      <Window path="C:\project_dream\links">
        <div className="lk-wrap">
          <div className="lk-head">
            <div className="g-icon">
              <img alt="Extinct Hopes" src={avatar} />
            </div>
            <div>
              <h1 className="page-h1">extinct hopes</h1>
              <div className="tagline">Solo horror game developer</div>
            </div>
          </div>

          <div className="lk-list">
            <Link className="lk lk-go" to={latestGame.path}>
              <span className="lk-t">
                <b>▶ {latestGame.shortTitle}</b>
                <span>Latest chapter · free on Android</span>
              </span>
              <i>→</i>
            </Link>

            <Link className="lk" to="/#chapters">
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
