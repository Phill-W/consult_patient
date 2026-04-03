import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

//配置组件自动注册插件
//配置 vant UI组件库解析器
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    //样式重复引入问题：当使用组件自动注册插件时，可能会导致样式被重复引入。为了解决这个问题，可以在组件库的解析器中添加一个选项来避免重复引入样式。
    Components({
      dts: false, // 禁用生成 .d.ts 文件
      resolvers: [VantResolver({ importStyle: false })]
    })
  ],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
