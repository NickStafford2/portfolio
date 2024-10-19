import glsl from 'vite-plugin-glsl'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  /* use an alias to make imports easier inside src. This must be done both here and in
     both the app and node tsconfig.json files.
  */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@public': path.resolve(__dirname, './public/'),
    },
  },
  plugins: [react(), glsl()],
})
