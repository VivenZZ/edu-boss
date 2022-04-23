import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
// 引入全局样式
import './styles/element/index.scss'
import './styles/index.scss'
createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
