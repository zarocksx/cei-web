import { defineConfig } from 'vite'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-lit-element-starter/',
  build: {
    outDir: 'build',
    lib: {
      entry: 'src/index.js',
      formats: ['es'],
    },
    manifest: true,
    rollupOptions: {
      external: /^lit/,
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
