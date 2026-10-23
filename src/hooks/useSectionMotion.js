import { useEffect } from 'react';

// Drives the full-screen `.pg` sections inside `ref`:
//  - `.in` is added once a section is a third on screen (the reveal),
//  - `--p` runs from 1 (section entering from below) to -1 (leaving above) and
//    feeds the parallax in sections.css.
// Without this hook, or with reduced motion, the sections simply render in
// their final state: the hidden start state only exists under `.armed`.
export default function useSectionMotion(ref) {
  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = [...root.querySelectorAll('.pg')];
    sections.forEach((s) => s.classList.add('armed'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('in');
          io.unobserve(e.target);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => io.observe(s));

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      sections.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
        s.style.setProperty('--p', p.toFixed(4));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref]);
}
