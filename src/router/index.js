import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Attention from '../views/Attention/Attention.vue'
import Excellent from '../views/Excellent/Excellent.vue'
import Message from '../views/Message/Message.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile/Profile.vue'
import Editor from '../views/Editor/Editor.vue'
import User from '../views/User/User.vue'
import Post from '../views/Post/Post.vue'
import Search from '../views/Search/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/attention',
    name: 'Attention',
    component: Attention,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/excellent',
    name: 'Excellent',
    component: Excellent,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor
  },
  {
    path: '/u/:id',
    name: 'User',
    component: User,
  },
  {
    path: '/p/:id',
    name: 'Post',
    component: Post,
  },
  {
    path: '/Search',
    component: Search,
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
