import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { games } from '../data/games';

const tabs = [
  { to: '/', label: 'Home' },
  ...games.map((g) => ({ to: g.path, label: g.tabLabel })),
  { to: '/fan-games', label: 'Fan Games' },
  { to: '/about', label: 'About' },
];

export default function Tabs() {
  const nav = useRef(null);
  const { pathname } = useLocation();

  // On narrow screens the tab row scrolls sideways: keep the active tab in view.
  useEffect(() => {
    const el = nav.current?.querySelector('.tab.on');
    if (el) {
      nav.current.scrollTo({
        left: el.offsetLeft - (nav.current.clientWidth - el.offsetWidth) / 2,
        behavior: 'smooth',
      });
    }
  }, [pathname]);

  return (
    <nav className="tabs" ref={nav}>
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          end={t.to === '/'}
          className={({ isActive }) => (isActive ? 'tab on' : 'tab')}
        >
          {t.label}
        </NavLink>
      ))}
    </nav>
  );
}
