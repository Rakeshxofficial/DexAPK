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
    inlineStylesheets: 'always',
  },
  vite: {
    define: {
      'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || ''),
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || ''),
    },
    envPrefix: 'VITE_',
    trailingSlash: 'ignore',
    optimizeDeps: {
      exclude: ['sharp'],
    },
    build: {
      cssCodeSplit: false, // Combine CSS for fewer requests
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs in production
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Group vendor dependencies
            if (id.includes('node_modules')) {
              if (id.includes('@supabase')) {
                return 'vendor-supabase';
              }
              return 'vendor';
            }
            // Group critical CSS
            if (id.includes('global.css')) {
              return 'critical';
            }
          },
          // Ensure long-term caching with content hashing
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    },
    ssr: {
      noExternal: ['sharp']
    }
  },
});