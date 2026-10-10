import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Window from '../components/Window';
import { notFoundMeta } from '../data/seo';
import useMeta from '../hooks/useMeta';
import { trackNav, trackNotFound } from '../lib/analytics';

// Shown for any address that is not a real route. Vercel serves this same
// page (dist/404.html) with a genuine 404 status.
export default function NotFound() {
  const { pathname } = useLocation();
  useMeta(notFoundMeta);

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
      <Window path="C:\project_dream\error_404">
        <span className="eyebrow red">Error 404</span>
        <h1 className="page-h1">signal lost</h1>
        <p className="page-lede">
          There is no camera feed at this address. The page was moved, or it was never here.
        </p>
        <p className="err-path">
          <span>requested:</span> {pathname}
        </p>
        <div className="g-acts">
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
      </Window>

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
