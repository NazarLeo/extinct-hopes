import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { games } from './data/games';
import Home from './pages/Home';
import About from './pages/About';
import FanGames from './pages/FanGames';
import GamePage from './pages/GamePage';
import Privacy from './pages/Privacy';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {games.map((g) => (
          <Route key={g.slug} path={g.path} element={<GamePage slug={g.slug} />} />
        ))}
        <Route path="/fan-games" element={<FanGames />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* Old .html URLs stay working for anything already linked out there. */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        {games.map((g) => (
          <Route
            key={`${g.slug}-html`}
            path={`/${g.slug}.html`}
            element={<Navigate to={g.path} replace />}
          />
        ))}
        <Route path="/fan-games.html" element={<Navigate to="/fan-games" replace />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/privacy.html" element={<Navigate to="/privacy" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
