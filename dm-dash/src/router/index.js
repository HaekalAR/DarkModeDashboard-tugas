// import App from '@/App.vue'
import LoginView from '@/views/loginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginView',
      component: LoginView
    }
    // {
    //   path: '/appvue',
    //   name: 'appvue',
    //   component: App
    // }
  ]
})

export default router
