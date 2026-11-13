import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base relativa: el mismo build funciona en GitHub Pages (subruta /<repo>/),
// Vercel, Netlify o cualquier hosting estático, sin depender del nombre del repo.
export default defineConfig({
  plugins: [react()],
  base: './',
})
