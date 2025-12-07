import { defineConfig } from 'vite'

// Set base to a relative path so the production build can be opened
// directly from the filesystem (file://) as `dist/index.html`.
export default defineConfig({
  base: './'
})
