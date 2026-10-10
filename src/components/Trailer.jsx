import YouTubeEmbed from './YouTubeEmbed';
import { trackVideo } from '../lib/analytics';

export default function Trailer({ id, poster, title }) {
  return (
    <div className="sec" id="trailer">
      <div className="sec-h">
        <h2>official trailer</h2>
      </div>
      <YouTubeEmbed
        id={id}
        poster={poster}
        title={`${title} trailer`}
        onPlay={() => trackVideo(id, 'game_page')}
      />
      <p className="tr-note">
        Loads from YouTube only when you press play · headphones recommended
      </p>
    </div>
  );
}
