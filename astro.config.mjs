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
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    define: {
      'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || ''),
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || ''),
    },
    envPrefix: 'VITE_',
    build: {
      cssCodeSplit: true,
      minify: true,
      assetsInlineLimit: 4096, // 4kb
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['@supabase/supabase-js'],
          }
        }
      }
    },
    ssr: {
      noExternal: ['@supabase/supabase-js']
    }
  },
});