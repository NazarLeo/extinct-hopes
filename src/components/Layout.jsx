import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SocialBar from './SocialBar';
import Tabs from './Tabs';

// Scrolls to the top on route change, but honours in-page #anchors.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function Layout({ children }) {
  const { pathname } = useLocation();
  // /links is the link-in-bio page: just the buttons, without the site chrome.
  const bare = pathname === '/links';

  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <div className="wrap">
        <ScrollManager />
        {!bare && <SocialBar />}
        {!bare && <Tabs />}
        {/* Keyed by route so every page plays its small entrance animation. */}
        <div className="page" key={pathname}>
          {children}
        </div>
      </div>
    </>
  );
}
