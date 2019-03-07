import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Index02 from './views/Index02.vue'
import Index03 from './views/Index03.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/index',
      name: 'index',
      component:Index
    },
    {
      path: '/index02',
      name: 'index02',
      component:Index02
    },
    {
      path: '/index03',
      name: 'index03',
      component:Index03
    }
  ]
})
