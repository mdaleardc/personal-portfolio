import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
  hostname: 'https://ismaildevcode.netlify.app',
  routes: ['/', '/about', '/contact'], // Add only your actual site routes
}),
  ],
});