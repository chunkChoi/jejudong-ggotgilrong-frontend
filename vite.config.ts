import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ssr } from 'vite-plugin-ssr/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [
  //     tsconfigPaths(),
  //     ssr({
  //         baseAssets: 'https://user-app.krampoline.com/kcb7af3d2b823a/'
  //     })
  // ],
plugins: [react()],
	build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/kcb7af3d2b823a/[name]-[hash].js',
        entryFileNames: 'assets/kcb7af3d2b823a/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 3000,
  },
});
