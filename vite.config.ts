import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/k92ebc3e719eda/',
  plugins: [tsconfigPaths()],
  server: {
    port: 3000,
  },
});
