import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Add this for Leaflet compatibility
  optimizeDeps: {
    exclude: ['leaflet']
  }
}) 