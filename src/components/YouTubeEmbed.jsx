import { useState } from 'react';

// Lazy YouTube player. The iframe is only created once the poster is clicked,
// so nothing loads from youtube.com on a plain page view.
export default function YouTubeEmbed({ id, poster, title, label = 'Play trailer', onPlay }) {
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    onPlay?.();
  };

  return (
    <div className="trailer">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button className="tr-poster" aria-label={label} onClick={start}>
          <img alt={title} src={poster} />
          <span className="tr-play">
            <i>▶</i>
          </span>
        </button>
      )}
    </div>
  );
}
