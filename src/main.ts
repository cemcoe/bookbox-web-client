import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 我知道这样不好，后期更改
import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App).use(router).use(Vant).mount('#app');
