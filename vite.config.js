import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitePlugin from './scripts/vite-plugin-site.js';

export default defineConfig({
  plugins: [react(), sitePlugin()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
