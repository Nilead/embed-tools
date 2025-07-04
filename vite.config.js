import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/embed-tools/',
  build: {
    rollupOptions: {
      input: {
        'ai-model-discovery': resolve(__dirname, 'apps/ai-model-discovery/index.html'),
        'website-cost-estimator': resolve(__dirname, 'apps/website-cost-estimator/index.html'),
        'website-launch-checklist': resolve(__dirname, 'apps/website-launch-checklist/index.html'),
      
        'analytics-tool-discovery': resolve(__dirname, 'apps/analytics-tool-discovery/index.html'),
        'website-platform-discovery': resolve(__dirname, 'apps/website-platform-discovery/index.html'),
        'color-palette-generator': resolve(__dirname, 'apps/color-palette-generator/index.html'),},
      output: {
        // Ensure unique chunk names for multiple apps
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/${facadeModuleId}-[hash].js`;
        },
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimize for embedding
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@embed-tools/components': resolve(__dirname, './packages/components/src'),
    },
  },
  // Optimize for GitHub Pages
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
  // CSS optimization for Tailwind v4
  css: {
    devSourcemap: true,
  },
  // Root directory configuration for multi-app setup
  root: process.cwd(),
});