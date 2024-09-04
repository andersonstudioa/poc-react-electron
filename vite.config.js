import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron({
      entry: 'main.js', // Seu arquivo de entrada do Electron
    }),
  ],
  base: './',
  outDir: 'dist',
  assetsDir: 'assets', // Certifique-se de que esta configuração está correta
  build: {
    rollupOptions: {
      external: ['fs', 'path'], // Indique que "fs" e "path" são módulos externos e não devem ser incluídos no bundle
    }
  }
})
