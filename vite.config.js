import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    port: 5174,
    host: 'localhost',
    strictPort: true,
  },
  preview: {
    port: 5174,
    host: 'localhost',
  }
})
