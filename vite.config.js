import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // must match your repo name exactly (case-sensitive)
  base: "/todo-list/",
  // this makes the production build go into /docs
  build: { outDir: 'docs' },
})
