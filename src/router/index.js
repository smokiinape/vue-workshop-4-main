import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    }
  ]
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.path === '/dashboard') {
    if (authStore.isLoggedIn === true) return true
    if (authStore.isLoggedIn === false) {
      alert('You must login first!')
      router.push('/login')
      return
    }
  }
})

export default router
