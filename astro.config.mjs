// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // Change from 'hybrid' to 'server' for Netlify deployment
  adapter: netlify(),
  compressHTML: true,
  experimental: {
    optimizeHoistedScript: true,
  },
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
    assetsPrefix: '/_astro',
  },
  vite: {
    define: {
      'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || ''),
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || ''),
    },
    envPrefix: 'VITE_',
    trailingSlash: 'ignore',
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['@supabase/supabase-js'],
          }
        }
      }
    }
  },
});