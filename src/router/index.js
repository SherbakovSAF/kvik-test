import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../pages/indexPage.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexPage
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('../pages/taskPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
