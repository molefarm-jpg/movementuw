import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use VITE_BASE env var if provided (set by CI), otherwise default to root '/'
const base = process.env.VITE_BASE || '/';

export default defineConfig({
  base,
  plugins: [react()],
});
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
