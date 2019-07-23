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
    // 二维码
    {
      path: '/qrcode',
      name: 'qrcode',
      component: () => import( './views/qrcode.vue')
    },
    // 模块
    {
      path: '/module',
      name: 'module',
      component: () => import( './views/module/module.vue')
    },
    // 公益捐款分享
    {
      path: '/commonweal_share',
      name: 'commonweal_share',
      component: () => import( '@/components/commonweal/commonweal_share.vue')
    },
    // 领取积分
    {
      path: '/creditPoint_child',
      name: 'creditPoint_child',
      component: () => import('@/components/creditPoint/creditPoint_child.vue')
    },
    // 领取红包
    {
      path: '/redPacket_child',
      name: 'redPacket_child',
      component: () => import('@/components/redPacket/redPacket_child.vue')
    },
    //裂变
    {
      path:'/growth',
      name:'growth',
      component:()=>import('@/components/growth/growth.vue')
    },
    ,
    //邀请
    {
      path:'/invitation',
      name:'invitation',
      component:()=>import('@/components/invitation/invitation.vue')
    },
    // 投票
    {
      path:'/vote',
      name:'vote',
      component:()=>import('@/components/vote/vote.vue'),
    },
    {
        path:"/success",
        name:"voteSuccess",
        component:()=>import('@/components/vote/success.vue')
    }

  ]
})
