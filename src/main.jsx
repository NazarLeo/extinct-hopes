import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { beforeSend } from './lib/analytics';
import './styles/site.css';
import './styles/game.css';
import './styles/home.css';
import './styles/sections.css';
import './styles/pages.css';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Analytics beforeSend={beforeSend} />
  </React.StrictMode>
);

// Prerendered routes arrive with their markup already inside #root and are
// hydrated; dev and 404.html start empty and are rendered from scratch.
if (root.firstElementChild) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
