import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [ {
        path: '/',
        name: 'home',
        component: Home,
    } ]
  })


export default router