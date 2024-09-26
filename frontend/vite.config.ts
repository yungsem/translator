import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// 自动按需引入 NaiveUI 组件
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// 引入 UnoCSS
import UnoCSS from 'unocss/vite'
// 引入 postcss-preset-env 插件
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    // 自动按需引入 NaiveUI 组件
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    // UnoCSS
    UnoCSS()
  ],
  css: {
    postcss: {
      plugins: [postcssPresetEnv()]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5174,
    open: true
  }
})


