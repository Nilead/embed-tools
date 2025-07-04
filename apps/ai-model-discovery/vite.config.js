import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/embed-tools/ai-model-discovery/',
  build: {
    outDir: '../../dist/ai-model-discovery',
    rollupOptions: {
      // Ensure unique chunk names
      output: {
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimize for production
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
      '@embed-tools/components': resolve(__dirname, '../../packages/components/src'),
    },
  },
  server: {
    port: 3001,
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
}); 