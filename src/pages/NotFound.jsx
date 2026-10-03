import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Window from '../components/Window';
import { notFoundMeta } from '../data/seo';
import useMeta from '../hooks/useMeta';

// Shown for any address that is not a real route. Vercel serves this same
// page (dist/404.html) with a genuine 404 status.
export default function NotFound() {
  const { pathname } = useLocation();
  useMeta(notFoundMeta);

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
          <Link className="btn btn-go" to="/">
            Back to the facility
          </Link>
          <Link className="btn" to="/fan-games">
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
