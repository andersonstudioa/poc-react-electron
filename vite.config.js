import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  outDir: 'dist',
  assetsDir: 'assets', // Certifique-se de que esta configuração está correta
})
