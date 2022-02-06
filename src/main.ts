import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/css/reset.css';
import './assets/css/values.css';

import BXRequest from './service';
BXRequest.request('/v1/posts').then((res) => {
  console.log(res, 'main');
});

createApp(App).use(router).mount('#app');
