// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Keep Tailwind enabled for all pages except AMP
      applyBaseStyles: true
    })
  ],
  output: 'static',
  adapter: netlify({
    edgeMiddleware: false,
    functionPerRoute: false,
    binaryMediaTypes: []
  }),
  compressHTML: true,
  build: {
    // Re-enable stylesheet inlining for normal pages
    inlineStylesheets: 'auto',
    assets: '_astro',
    assetsPrefix: '/',
    excludeMiddleware: true
  },
  vite: {
    define: {
      'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || ''),
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || ''),
    },
    envPrefix: 'VITE_',
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug']
        }
      },
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          entryFileNames: '_astro/[name].[hash].js',
          chunkFileNames: '_astro/[name].[hash].js',
          assetFileNames: '_astro/[name].[hash].[ext]',
          manualChunks: {
            vendor: ['@supabase/supabase-js']
          }
        }
      }
    },
    ssr: {
      noExternal: ['sharp']
    }
  }
});