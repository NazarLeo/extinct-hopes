import { trackSocialLink } from '../lib/analytics';

/**
 * One social profile as a link: icon + whatever children the caller passes.
 * `where` is the placement, used for analytics (topbar, profile, elsewhere…).
 * mailto: links stay in the same tab; everything else (including the /discord
 * redirect) opens in a new one.
 */
export default function SocialLink({ social: s, where, title, className, children }) {
  const mail = s.href.startsWith('mailto:');
  return (
    <a
      className={className}
      href={s.href}
      title={title}
      target={mail ? undefined : '_blank'}
      rel={mail ? undefined : 'noopener'}
      onClick={() => trackSocialLink(s, where)}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={s.path} />
      </svg>
      {children}
    </a>
  );
}
