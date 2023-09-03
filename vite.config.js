import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react'
dotenv.config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __SUPABASE_KEY__: `"${process.env.SUPABASE_KEY}"`, // wrapping in "" since it's a string
    __SUPABASE_URL__: `"${process.env.SUPABASE_URL}"`, // wrapping in "" since it's a string
  },
  plugins: [react()],
})


