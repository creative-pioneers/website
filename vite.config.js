// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, `assets`),
    emptyOutDir: false,
    rollupOptions: {
      input: [
        resolve(__dirname, 'resources/style.css'),
        resolve(__dirname, 'resources/script.ts'),
      ],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    },
  },
})