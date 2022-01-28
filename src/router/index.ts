import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Attention from '../views/Attention/Attention.vue'
import Excellent from '../views/Excellent/Excellent.vue'
import Message from '../views/Message/Message.vue'
import Profile from '../views/Profile/Profile.vue'

import Login from '../views/Login/Login.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/attention',
    component: Attention,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/excellent',
    component: Excellent,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/message',
    component: Message,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      showTabbar: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router