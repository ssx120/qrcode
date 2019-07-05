import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: () => import( './views/qrcode.vue')
    },
    {
      path: '/module',
      name: 'module',
      component: () => import( './views/module/module.vue')
    },
    // module
  ]
})
