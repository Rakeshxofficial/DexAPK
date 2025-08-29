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
      cssCodeSplit: true, // Enable CSS code splitting for better caching
      minify: 'terser',
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false, // Disable sourcemaps in production
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs in production
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug']
        }
      },
      assetsInlineLimit: 8192, // Inline larger assets as data URLs
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Group vendor dependencies
            if (id.includes('node_modules')) {
              if (id.includes('@supabase')) {
                return 'vendor-supabase';
              }
              if (id.includes('astro')) {
                return 'vendor-astro';
              }
              return 'vendor';
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