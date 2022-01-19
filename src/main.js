import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { 
  Button,
  Tabbar,
  TabbarItem,
} from 'vant';

import './assets/css/reset.css'

createApp(App)
.use(Button)
.use(Tabbar)
.use(TabbarItem)
.use(store).use(router).mount('#app')
