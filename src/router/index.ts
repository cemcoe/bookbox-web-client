import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Attention from '../views/Attention/Attention.vue';
import Excellent from '../views/Excellent/Excellent.vue';
import Message from '../views/Message/Message.vue';
import Profile from '../views/Profile/Profile.vue';
import User from '../views/User/User.vue';
import Post from '../views/Post/Post.vue';
import Editor from '../views/Editor/Editor.vue';

import Login from '../views/Login/Login.vue';

const routes = [
  {
    path: '/home',
    component: Home,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/',
    redirect: '/home'
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
  {
    path: '/u/:id',
    component: User
  },
  {
    path: '/p/:id',
    component: Post
  },
  {
    path: '/editor/:pid',
    component: Editor
  },
  {
    path: '/editor',
    component: Editor
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
