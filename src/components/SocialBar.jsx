import { socials } from '../data/socials';
import SocialLink from './SocialLink';

// Top-of-page social row. `handle` is the title so hovering shows the account.
export default function SocialBar() {
  return (
    <div className="topbar">
      <span className="topbar-label">extinct hopes</span>
      <div className="topbar-links">
        {socials.map((s) => (
          <SocialLink key={s.id} social={s} where="topbar" title={`${s.name} — ${s.handle}`}>
            <span>{s.name}</span>
          </SocialLink>
        ))}
      </div>
    </div>
  );
}
