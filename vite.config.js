import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: ' https://molkathalathrisha.github.io/task-buddy', // ← must be the repo name with leading & trailing slash
})
