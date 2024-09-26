// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/yangsen/ys/projects/mom/translator/frontend/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.27/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/yangsen/ys/projects/mom/translator/frontend/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.6_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueDevTools from "file:///Users/yangsen/ys/projects/mom/translator/frontend/node_modules/.pnpm/vite-plugin-vue-devtools@7.0.17_vite@5.1.6_vue@3.4.21/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import Components from "file:///Users/yangsen/ys/projects/mom/translator/frontend/node_modules/.pnpm/unplugin-vue-components@0.27.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import { NaiveUiResolver } from "file:///Users/yangsen/ys/projects/mom/translator/frontend/node_modules/.pnpm/unplugin-vue-components@0.27.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/resolvers.js";
import UnoCSS from "file:///Users/yangsen/ys/projects/mom/translator/frontend/node_modules/.pnpm/unocss@0.60.0_postcss@8.4.35_vite@5.1.6/node_modules/unocss/dist/vite.mjs";
import postcssPresetEnv from "file:///Users/yangsen/ys/projects/mom/translator/frontend/node_modules/.pnpm/postcss-preset-env@9.5.13_postcss@8.4.35/node_modules/postcss-preset-env/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/yangsen/ys/projects/mom/translator/frontend/vite.config.ts";
var vite_config_default = defineConfig({
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
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5174,
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWFuZ3Nlbi95cy9wcm9qZWN0cy9tb20vdHJhbnNsYXRvci9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3lhbmdzZW4veXMvcHJvamVjdHMvbW9tL3RyYW5zbGF0b3IvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lhbmdzZW4veXMvcHJvamVjdHMvbW9tL3RyYW5zbGF0b3IvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcblxuLy8gXHU4MUVBXHU1MkE4XHU2MzA5XHU5NzAwXHU1RjE1XHU1MTY1IE5haXZlVUkgXHU3RUM0XHU0RUY2XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgTmFpdmVVaVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuLy8gXHU1RjE1XHU1MTY1IFVub0NTU1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbi8vIFx1NUYxNVx1NTE2NSBwb3N0Y3NzLXByZXNldC1lbnYgXHU2M0QyXHU0RUY2XG5pbXBvcnQgcG9zdGNzc1ByZXNldEVudiBmcm9tICdwb3N0Y3NzLXByZXNldC1lbnYnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgVnVlRGV2VG9vbHMoKSxcbiAgICAvLyBcdTgxRUFcdTUyQThcdTYzMDlcdTk3MDBcdTVGMTVcdTUxNjUgTmFpdmVVSSBcdTdFQzRcdTRFRjZcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW05haXZlVWlSZXNvbHZlcigpXVxuICAgIH0pLFxuICAgIC8vIFVub0NTU1xuICAgIFVub0NTUygpXG4gIF0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFtwb3N0Y3NzUHJlc2V0RW52KCldXG4gICAgfVxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgcG9ydDogNTE3NCxcbiAgICBvcGVuOiB0cnVlXG4gIH1cbn0pXG5cblxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxTQUFTLGVBQWUsV0FBVztBQUUzVyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFHeEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyx1QkFBdUI7QUFFaEMsT0FBTyxZQUFZO0FBRW5CLE9BQU8sc0JBQXNCO0FBWitLLElBQU0sMkNBQTJDO0FBZTdQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQTtBQUFBLElBRVosV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLGdCQUFnQixDQUFDO0FBQUEsSUFDL0IsQ0FBQztBQUFBO0FBQUEsSUFFRCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLGlCQUFpQixDQUFDO0FBQUEsSUFDOUI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
