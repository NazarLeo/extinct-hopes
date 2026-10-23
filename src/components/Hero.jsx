import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { playStoreUrl } from '../data/socials';
import { trackCta, trackPlay } from '../lib/analytics';
import { introSeen, markIntroSeen } from '../lib/intro';
import { playUrl } from '../lib/playLink';

// Cropped to the character's outline by the export script; the aspect ratio
// of each file is what the CSS sizes the layer from.
const cast = [
  { id: 'donkey', w: 2285, h: 2087 },
  { id: 'cyborg', w: 1635, h: 2080 },
  { id: '3808', w: 2564, h: 2092 },
];

const img = (id, size) => `/hero/${id}-${size}.webp`;

export default function Hero() {
  const root = useRef(null);
  // Read once: a re-render must not flip an intro that is already playing.
  const seen = useRef(introSeen());

  useEffect(() => {
    const el = root.current;
    try {
      sessionStorage.setItem('eh-intro', '1');
    } catch {
      /* ignore */
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => markIntroSeen();
    }

    // Scroll-linked parallax: one CSS variable, layers pick their own depth.
    let frame = 0;
    const update = () => {
      frame = 0;
      el.style.setProperty('--sy', Math.min(window.scrollY, window.innerHeight));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
      markIntroSeen();
    };
  }, []);

  // A tap anywhere jumps the intro to its final frame.
  const skip = () => {
    document.documentElement.dataset.intro = 'skip';
    markIntroSeen();
  };

  return (
    <section
      className={seen.current ? 'hero seen' : 'hero'}
      ref={root}
      onClick={skip}
      aria-label="Extinct Hopes"
    >
      <div className="hero-fog" aria-hidden="true">
        <div className="intro-a" style={{ '--at': '2.8s' }} />
      </div>

      <div className="hero-cast" aria-hidden="true">
        {cast.map(({ id, w, h }, i) => (
          <div className={`hc hc-${id}`} key={id} style={{ aspectRatio: `${w} / ${h}` }}>
            <img
              className="intro-a"
              style={{ '--at': `${[1.3, 2.1, 0.4][i]}s` }}
              alt=""
              width={w / 2}
              height={h / 2}
              sizes="(max-width: 720px) 100vw, 50vw"
              srcSet={`${img(id, 700)} 700w, ${img(id, 1400)} 1400w`}
              src={img(id, 1400)}
              fetchpriority={id === '3808' ? 'high' : undefined}
              decoding="async"
            />
          </div>
        ))}
      </div>

      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-copy">
        <img
          className="hero-icon intro-a"
          style={{ '--at': '3.4s' }}
          alt=""
          width="64"
          height="64"
          src="/icons/icon-192.png"
        />
        <h1 className="intro-a" style={{ '--at': '3.55s' }}>
          extinct hopes<span className="x">_</span>
        </h1>
        <p className="hero-tag intro-a" style={{ '--at': '3.7s' }}>
          Solo horror game developer
        </p>
        <div className="hero-acts intro-a" style={{ '--at': '3.85s' }}>
          <a
            className="btn btn-go"
            href={playUrl(playStoreUrl, 'home_hero')}
            target="_blank"
            rel="noopener"
            onClick={() => trackPlay('all', 'google_play')}
          >
            Play all three — free
          </a>
          <Link
            className="btn btn-red"
            to="/#chapters"
            onClick={() => trackCta('chapters', 'home_hero')}
          >
            Open the chapters
          </Link>
        </div>
      </div>
    </section>
  );
}
