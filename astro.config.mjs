// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
     trailingSlash: 'ignore',
  output: 'server', // Change from 'hybrid' to 'server' for Netlify deployment
  adapter: netlify(),
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    define: {
      'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || ''),
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || ''),
    },
    envPrefix: 'VITE_',
    trailingSlash: 'ignore'
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'critical': ['./src/styles/global.css'],
          }
        }
      }
    }
  },
});