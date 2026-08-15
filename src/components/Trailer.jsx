import { useState } from 'react';

// The YouTube iframe is only created once the poster is clicked,
// so nothing loads from youtube.com on a plain page view.
export default function Trailer({ id, poster, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="sec" id="trailer">
      <div className="sec-h">
        <h2>official trailer</h2>
      </div>
      <div className="trailer">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title="Trailer"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="tr-poster"
            aria-label="Play trailer"
            onClick={() => setPlaying(true)}
          >
            <img alt={`${title} trailer`} src={poster} />
            <span className="tr-play">
              <i>▶</i>
            </span>
          </button>
        )}
      </div>
      <p className="tr-note">
        Loads from YouTube only when you press play · headphones recommended
      </p>
    </div>
  );
}
