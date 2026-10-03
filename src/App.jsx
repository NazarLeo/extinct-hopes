import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { fanGames, games } from './data/games';
import Home from './pages/Home';
import About from './pages/About';
import FanGamePage from './pages/FanGamePage';
import FanGames from './pages/FanGames';
import GamePage from './pages/GamePage';
import Links from './pages/Links';
import NotFound from './pages/NotFound';
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
        {fanGames.map((f) => (
          <Route key={f.slug} path={f.path} element={<FanGamePage slug={f.slug} />} />
        ))}
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/links" element={<Links />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
