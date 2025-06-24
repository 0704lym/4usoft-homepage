import vue from '@vitejs/plugin-vue'
import path from 'path'

export default {
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
      
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
}