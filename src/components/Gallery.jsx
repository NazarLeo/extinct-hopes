import { useCallback, useEffect, useState } from 'react';

// Larger version of a thumbnail: Play Store art and GameJolt screenshots both
// accept a size in the URL.
const full = (src) =>
  src
    .replace(/=w\d+-h\d+-rw$/, '=w1920-h1080-rw')
    .replace('/game-screenshot/400/', '/game-screenshot/1200/');

export default function Gallery({ shots }) {
  const [idx, setIdx] = useState(null);
  const open = idx !== null;

  const close = useCallback(() => setIdx(null), []);
  const step = useCallback(
    (d) => setIdx((i) => (i === null ? i : (i + d + shots.length) % shots.length)),
    [shots.length]
  );

  // Lock page scroll while the lightbox is up, and wire keyboard nav.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  return (
    <>
      <div className="shots">
        {shots.map((src, i) => (
          <button className="shot" key={src} onClick={() => setIdx(i)}>
            <span className="id">{String(i + 1).padStart(2, '0')}</span>
            <img loading="lazy" alt={`Screenshot ${i + 1}`} src={src} />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="lb open"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button className="lb-x" aria-label="Close" onClick={close}>
            ✕
          </button>
          <button
            className="lb-nav lb-prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ‹
          </button>
          <img src={full(shots[idx])} alt={`Screenshot ${idx + 1}`} />
          <button
            className="lb-nav lb-next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
