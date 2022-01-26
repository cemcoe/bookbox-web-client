import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Profile from '../views/Profile/Profile.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router