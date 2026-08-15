import { NavLink } from 'react-router-dom';
import { games } from '../data/games';

const tabs = [
  { to: '/', label: 'Home' },
  ...games.map((g) => ({ to: g.path, label: g.tabLabel })),
  { to: '/fan-games', label: 'Fan Games' },
  { to: '/about', label: 'About' },
];

export default function Tabs() {
  return (
    <nav className="tabs">
      {tabs.map((t, i) => (
        <NavLink
          key={t.to}
          to={t.to}
          end={t.to === '/'}
          className={({ isActive }) => (isActive ? 'tab on' : 'tab')}
        >
          <span className="k">{String(i + 1).padStart(2, '0')}</span> {t.label}
        </NavLink>
      ))}
    </nav>
  );
}
