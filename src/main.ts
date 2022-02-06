import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 我知道这样不好，后期更改
import Vant from 'vant';
import 'vant/lib/index.css';

import BXRequest from './service';
BXRequest.request('/v1/posts').then((res) => {
  console.log(res, 'main');
});

createApp(App).use(router).use(Vant).mount('#app');
