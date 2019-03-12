import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Index02 from './views/Index02.vue'

import UserInfo from './views/user/UserInfo.vue'
import UserInsert from './views/user/UserInsert.vue'
import UserUpdate from './views/user/UserUpdate.vue'

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
      component:Index02,
      children: [
          {
            path: '/user/info',
            name: 'UserInfo',
            component: UserInfo,

          },
          {
            path: '/user/insert',
            name: 'UserInsert',
            component: UserInsert
          },
          {
            path:'/user/update/',
            name: 'UserUpdate',//要用名字路由，就要写这个名字
            component: UserUpdate,
            props: true
          }
      ]
    }


  ]
})
