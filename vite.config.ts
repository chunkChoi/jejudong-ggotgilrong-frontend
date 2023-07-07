import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ssr } from 'vite-plugin-ssr/plugin';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tsconfigPaths(),
    ],
    build: {
        rollupOptions: {
            output: {
                // assetFileNames: (assetInfo) => {
                //     let extType = assetInfo.name.split('.').at(1);
                //     if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                //         extType = 'img';
                //     }
                //     return `assets/${extType}/[name]-[hash][extname]`;
                // },
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'kcb7af3d2b823a/assets/[name]-[hash].js',
            },
        },
    },
    server: {
        port: 3000,
    },
});