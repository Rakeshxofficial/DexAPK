// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Disable Tailwind for AMP pages
      applyBaseStyles: false,
      config: {
        // Exclude AMP pages from Tailwind processing
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', '!./src/pages/**/amp.astro']
      }
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
    inlineStylesheets: 'never', // Prevent automatic stylesheet inlining
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
      cssCodeSplit: true, // Enable CSS code splitting for better performance
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
      assetsInlineLimit: 4096, // Reduce inline limit for better caching
      rollupOptions: {
        output: {
          // Ensure long-term caching with content hashing
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
  },
  // Exclude AMP pages from normal processing
});