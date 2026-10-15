import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Actions sets BASE_PATH to the repository name, e.g. /lunaroom/.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
