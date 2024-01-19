import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
        { find: '@c', replacement: path.resolve(__dirname, 'src/components') },
        { find: '@p', replacement: path.resolve(__dirname, 'src/pages') },
        { find: '~', replacement: path.resolve(__dirname, 'src') },
        { find: '@a', replacement: path.resolve(__dirname, 'src/asset') },
        { find: '@cf', replacement: path.resolve(__dirname, 'src/configs') },
        { find: '@s', replacement: path.resolve(__dirname, 'src/styles') },
    ],
},
  server:{
    host: 'localhost',
    port:3000,
    open: 'http://localhost:3000',
  }
})
