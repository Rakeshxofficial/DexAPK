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
    functionPerRoute: false,
    binaryMediaTypes: []
  }),
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto', // Allow inlining for critical CSS
    assets: '_astro',
    assetsPrefix: '/'
  },
  vite: {
    define: {
      'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || ''),
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || ''),
    },
    envPrefix: 'VITE_',
    build: {
      cssCodeSplit: false, // Disable CSS code splitting to prevent MIME issues
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