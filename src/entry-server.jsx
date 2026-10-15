import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

// Used only at build time by scripts/vite-plugin-site.js: the markup for one
// route, written into that route's HTML so crawlers get real content without
// running JavaScript. The browser then hydrates it (see main.jsx).
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
