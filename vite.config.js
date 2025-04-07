import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: import.meta.env.MODE === 'production' ? '/https://wen-867.github.io/skills-github-pages/' : '/',
})
