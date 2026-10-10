import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackScrollDepth } from '../lib/analytics';

// How far down counts as "read it".
const DEPTH = 0.75;

/**
 * Sends one `scroll_deep` event the first time a visitor reaches DEPTH of a
 * page, then stops listening. At most one event per page view, so this can
 * never do more than double the event count.
 *
 * Pages that are shorter than the window cannot be scrolled at all, so they
 * never report — which is correct: there is nothing to read past the fold.
 */
export default function useScrollDepth() {
  const { pathname } = useLocation();

  useEffect(() => {
    const el = document.documentElement;
    let sent = false;

    const onScroll = () => {
      if (sent) return;
      const { scrollTop, scrollHeight, clientHeight } = el;
      if (scrollHeight - clientHeight < 200) return; // nothing worth scrolling
      if ((scrollTop + clientHeight) / scrollHeight < DEPTH) return;

      sent = true;
      trackScrollDepth(pathname);
      window.removeEventListener('scroll', onScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);
}
