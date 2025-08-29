// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static', // Change to static for better performance
  adapter: netlify({
    trailingSlash: 'ignore'
  }),
  compressHTML: true,
  build: {
    inlineStylesheets: 'never', // Don't inline CSS for better caching
  },
  vite: {
    define: {
      'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || ''),
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || ''),
    },
    envPrefix: 'VITE_',
    trailingSlash: 'ignore',
    build: {
      cssCodeSplit: false, // Combine CSS for fewer requests
      minify: 'terser',
      // Ensure URLs are lowercase
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