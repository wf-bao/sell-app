import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home/index.vue';
const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:'/home'
  },
  //首页
  {
    path:'/home',
    component:Home,
    redirect:'/home/shops',
    children:[
      {
        path:'/home/shops',
        component:()=>import('@/views/home/shops.vue')
      },
      {
        path:'/home/goods',
        component:()=>import('@/views/home/goods.vue')
      },
      {
        path:'/home/comment',
        component:()=>import('@/views/home/comment.vue')
      },
    ]
  },
  //详情页
  {
    path:'/detail',
    component:()=>import ('@/views/detail/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
