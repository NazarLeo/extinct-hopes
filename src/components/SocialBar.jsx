import { socials } from '../data/socials';

// Top-of-page social row. `handle` is the title so hovering shows the account.
export default function SocialBar() {
  return (
    <div className="topbar">
      <span className="topbar-label">extinct hopes</span>
      <div className="topbar-links">
        {socials.map((s) => (
          <a
            key={s.id}
            href={s.href}
            title={`${s.name} — ${s.handle}`}
            target={s.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={s.href.startsWith('mailto:') ? undefined : 'noopener'}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={s.path} />
            </svg>
            <span>{s.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
