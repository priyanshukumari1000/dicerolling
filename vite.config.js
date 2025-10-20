<<<<<<< HEAD


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/c
export default defineConfig({
  plugins: [react()],
  base: '/dicerolling/',  // 👈 important
})
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/dicerolling/",  // 👈 repo name goes here
});
>>>>>>> 7c2681c57b9ee9507d5272abe0cdb6ca9633c727
