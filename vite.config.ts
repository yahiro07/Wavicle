import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  resolve: { tsconfigPaths: true },
  server: { host: '0.0.0.0', port: 3000 },
  clearScreen: false,
});
