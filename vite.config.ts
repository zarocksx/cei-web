// vite-lit-element-starter
import { defineConfig } from 'vite'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // https://vitejs.dev/guide/static-deploy.html#github-pages
  build: {
    outDir: 'build',
    minify: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        historique: resolve(__dirname, 'src/pages/historique.html'),
        photos: resolve(__dirname, 'src/pages/photos.html')
      },
    },
  },
})
