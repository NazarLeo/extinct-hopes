import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { cutouts } from '../data/scenes';
import { notFoundMeta } from '../data/seo';
import useMeta from '../hooks/useMeta';
import { trackNav, trackNotFound } from '../lib/analytics';

// Shown for any address that is not a real route. Vercel serves this same
// page (dist/404.html) with a genuine 404 status.
export default function NotFound() {
  const { pathname } = useLocation();
  useMeta(notFoundMeta);

  // dist/404.html is prerendered without knowing which address was asked for,
  // so the path is shown only after mount: the first client render then matches it.
  const [shown, setShown] = useState('');
  useEffect(() => setShown(pathname), [pathname]);

  // Which address was asked for, and which site sent them — that pair is
  // what tells you whether an old link is still out there somewhere.
  useEffect(() => {
    let from = 'direct';
    try {
      if (document.referrer) from = new URL(document.referrer).hostname;
    } catch {
      from = 'unknown';
    }
    trackNotFound(pathname, from);
  }, [pathname]);

  return (
    <>
      <PageHero
        scene={{ bg: 'fog', side: 'left', char: cutouts.cyborg }}
        id="pg-404"
        eyebrow="Error 404"
        red
        title="signal lost"
        number="404"
      >
        <p className="pg-p pg-rv" style={{ '--d': '1s' }}>
          There is no camera feed at this address. The page was moved, or it was never here.
        </p>
        <p className="err-path pg-rv" style={{ '--d': '1.1s' }}>
          <span>requested:</span> {shown}
        </p>
        <div className="pg-acts pg-rv" style={{ '--d': '1.2s' }}>
          <Link className="btn btn-go" to="/" onClick={() => trackNav('/', 'not_found')}>
            Back to the facility
          </Link>
          <Link
            className="btn"
            to="/fan-games"
            onClick={() => trackNav('/fan-games', 'not_found')}
          >
            Fan games
          </Link>
        </div>
      </PageHero>

      <Footer
        links={[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/privacy', label: 'Privacy' },
        ]}
      />
    </>
  );
}
