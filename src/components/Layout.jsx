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
  return (
    <>
      <div className="crt" />
      <div className="sweep" />
      <div className="wrap">
        <ScrollManager />
        <SocialBar />
        <Tabs />
        {children}
      </div>
    </>
  );
}
