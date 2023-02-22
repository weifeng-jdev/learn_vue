import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置代理中转服务器
  server: {
    // 配置代理
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin:true,
        // 重写请求地址中的代理
        rewrite:path=>path.replace("api","")
      }
    }
  }
})
