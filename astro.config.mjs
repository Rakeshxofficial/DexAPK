// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: netlify({
    edgeMiddleware: false,
    functionPerRoute: false
  }),
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto', // Allow inlining for critical CSS
    assets: '_astro'
  },
  vite: {
    define: {
      'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || ''),
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || ''),
    },
    envPrefix: 'VITE_',
    build: {
      cssCodeSplit: false, // Combine CSS for fewer requests
      minify: 'terser',
      outDir: 'dist',
      emptyOutDir: true,
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs in production
          drop_debugger: true
        }
      },
      assetsInlineLimit: 4096, // Inline small images as data URLs
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
          },
          // Ensure long-term caching with content hashing
          entryFileNames: '_astro/[name].[hash].js',
          chunkFileNames: '_astro/[name].[hash].js',
          assetFileNames: '_astro/[name].[hash].[ext]'
        }
      }
    },
    ssr: {
      noExternal: ['sharp']
    }
  },
});