import { trackPlay } from '../lib/analytics';

// Store buttons in display order; the first one a game has gets the primary style.
const STORES = [
  { key: 'googlePlay', platform: 'google_play', label: 'Get it on Google Play' },
  { key: 'itch', platform: 'itch', label: 'Get it on itch.io' },
  { key: 'gamejolt', platform: 'gamejolt', label: 'Play on GameJolt' },
];

// Direct download / play buttons for a game. Only the stores listed in
// game.links are rendered. Meant to sit inside a flex row (.g-acts).
export default function PlayButtons({ game }) {
  return STORES.filter((s) => game.links[s.key]).map((s, i) => (
    <a
      key={s.key}
      className={i === 0 ? 'btn btn-go' : 'btn'}
      href={game.links[s.key]}
      target="_blank"
      rel="noopener"
      onClick={() => trackPlay(game.slug, s.platform)}
    >
      ▶ {s.label}
    </a>
  ));
}
