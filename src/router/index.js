import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Attention from '../views/Attention/Attention.vue'
import Excellent from '../views/Excellent/Excellent.vue'
import Message from '../views/Message/Message.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile/Profile.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/attention',
    name: 'Attention',
    component: Attention
  },
  {
    path: '/excellent',
    name: 'Excellent',
    component: Excellent
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
