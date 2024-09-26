import { createI18n } from 'vue-i18n';
import zhCN from './locales/zh-cn';
import enUS from './locales/en-us';

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS
};

const i18n = createI18n({
  // locale: 'en-US',
  // locale: 'zh-CN',
  // 首先从缓存里拿，没有的话就用浏览器语言，
  locale: localStorage.getItem('lang') || navigator.language || 'zh-CN',
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
  legacy: false
});

export const $t : any = i18n.global.t;

export default i18n;