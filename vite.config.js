

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/c
export default defineConfig({
  plugins: [react()],
  base: '/dicerolling/',  // 👈 important
})
