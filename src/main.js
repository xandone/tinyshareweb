import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import axios from './api/api'
import Qs from './api/api'

const app=createApp(App)

//整个应用支持路由。
app.use(router)

app.use(ElementPlus)

/*使用axios插件*/
app.config.globalProperties.$axios = axios ;
app.config.globalProperties.$qs = Qs;

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.mount('#app')
