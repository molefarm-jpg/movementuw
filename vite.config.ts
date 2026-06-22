import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { inspectAttr } from 'kimi-plugin-inspect-react';

// Use VITE_BASE env var if provided (set by CI), otherwise default to project root './'
const base = process.env.VITE_BASE || './';

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
