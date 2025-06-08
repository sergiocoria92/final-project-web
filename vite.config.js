import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.', // la raíz es donde está tu index.html
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        book: resolve(__dirname, 'book.html'),
        services: resolve(__dirname, 'services.html'),
        testimonies: resolve(__dirname, 'testimonies.html'),
      }
    }
  },
  publicDir: 'public' // para que funcione /images/... desde public/
})
