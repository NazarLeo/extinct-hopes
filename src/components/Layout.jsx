import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollDepth from '../hooks/useScrollDepth';
import { introSeen } from '../lib/intro';
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
  useScrollDepth();
  // /links is the link-in-bio page: just the buttons, without the site chrome.
  const bare = pathname === '/links';
  // Every page opens with a full-screen scene, and the nav floats over it. On
  // the home page the nav also fades in last, after the intro.
  const home = pathname === '/';

  return (
    <>
      <div className="wrap wrap-scene">
        <ScrollManager />
        {!bare && (
          <div
            className={
              home ? (introSeen() ? 'chrome-over intro-a seen' : 'chrome-over intro-a') : 'chrome-over'
            }
            style={home ? { '--at': '3.9s' } : undefined}
          >
            <SocialBar />
            <Tabs />
          </div>
        )}
        {/* Keyed by route so every page plays its small entrance animation. */}
        <div className="page" key={pathname}>
          {children}
        </div>
      </div>
    </>
  );
}
