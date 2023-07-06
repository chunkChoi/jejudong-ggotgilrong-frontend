import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ssr } from 'vite-plugin-ssr/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      tsconfigPaths(),
      ssr({
          baseAssets: 'https://user-app.krampoline.com/kcb7af3d2b823a/'
      })
  ],
  server: {
    port: 3000,
  },
});
