// vite-lit-element-starter
import { defineConfig } from 'vite'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/zarocksx/cei-web/',
  build: {
    outDir: 'build',
    minify: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
