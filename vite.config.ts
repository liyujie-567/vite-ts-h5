import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
  plugins: [vue(),
    vitePluginImp({ // 配置样式按需引入
      libList: [
        {
          libName: 'vant',
          style(name) {
            if (/CompWithoutStyleFile/i.test(name)) {
              // This will not import any style file
              return false
            }
            return `vant/es/${name}/index.css`
          }
        }
      ]
    })
  ],
  base: '/',
  resolve: {
    alias:{
      '@': path.resolve(__dirname, './src') //设置别名
    }
  },
  server: {
    host: '192.168.0.103',
    port: 4000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://123.56.85.24:5000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    cors: true,
    hmr:{
      overlay:false // 错误提示禁止覆盖
    }
  }
})
