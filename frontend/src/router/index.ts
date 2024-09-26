import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue'),
      children: [
        {
          path: '/translate',
          name: 'translate',
          component: () => import('../views/home/modules/TranslateView.vue'),
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import('../views/home/modules/SettingView.vue'),
        }
      ]
    }
  ]
})

export default router
