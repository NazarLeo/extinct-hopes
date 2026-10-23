import { Link } from 'react-router-dom';
import { email, playStoreUrl } from '../data/socials';
import { trackNav, trackSocial } from '../lib/analytics';
import { playUrl } from '../lib/playLink';

export default function Footer({ links = [], showPlay = false }) {
  return (
    <div className="foot">
      <span className="made">// extinct hopes — solo dev</span>
      <nav>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => trackNav(l.to, 'footer')}>
            {l.label}
          </Link>
        ))}
        <a href={`mailto:${email}`} onClick={() => trackSocial('email', 'footer')}>
          Contact
        </a>
        {showPlay && (
          <a
            href={playUrl(playStoreUrl, 'footer')}
            target="_blank"
            rel="noopener"
            onClick={() => trackSocial('googleplay', 'footer')}
          >
            Google Play ↗
          </a>
        )}
      </nav>
    </div>
  );
}
