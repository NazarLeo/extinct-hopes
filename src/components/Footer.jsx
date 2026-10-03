import { Link } from 'react-router-dom';
import { email, playStoreUrl } from '../data/socials';
import { trackSocial } from '../lib/analytics';

export default function Footer({ links = [], showPlay = false }) {
  return (
    <div className="foot">
      <span className="made">// extinct hopes — solo dev</span>
      <nav>
        {links.map((l) => (
          <Link key={l.to} to={l.to}>
            {l.label}
          </Link>
        ))}
        <a href={`mailto:${email}`}>Contact</a>
        {showPlay && (
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener"
            onClick={() => trackSocial('googleplay')}
          >
            Google Play ↗
          </a>
        )}
      </nav>
    </div>
  );
}
