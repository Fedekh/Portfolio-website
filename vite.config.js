import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
  },
  base: '/portfolio/',
  server: {
    port: 5174,
  },
  plugins: [vue()],
});
