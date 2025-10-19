import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Don't set a fixed `base` here so the site will work when deployed to Vercel.
  // If you need to serve from a subpath (e.g. GitHub Pages), set BASE_PATH in the
  // environment and uncomment the line below to use it.
  // base: process.env.BASE_PATH || '/',
})
