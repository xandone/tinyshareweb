import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import details from '../pages/details.vue'
import publish from '../pages/publish.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [ {
        path: '/',
        name: 'home',
        component: Home,
    },{
      path: '/details/:id',
      name: 'details',
      component: details, 
    },{
      path: '/publish',
      name: 'publish',
      component: publish, 
    } ]
  })


export default router