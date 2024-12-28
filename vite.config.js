import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://ismaildevcode.netlify.app', // Replace with your domain
      routes: ['/'], // Add your site routes here
    }),
  ],
});