/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 14:15:06
 * @LastEditors: zero
 * @LastEditTime: 2020-10-22 16:34:27
 */
import { createRouter,createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {defineAsyncComponent} from 'vue'
import Layout from '../views/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect:"/home"
  // },
  {
    path:'/home',
    name: 'Home',
    component: Layout,
    redirect:{
      name:'home'
    },
    children:[
      {
        path:"home",
        name:'home',
        component: defineAsyncComponent({
          loader: () => import('@/views/Home.vue'),
          delay: 200,
          timeout: 3000,
        })
      }
    ]
  },
  
  {
    path: '/about',
    name: 'About',
    component: Layout,
    redirect:{
      name:'about'
    },
    children:[
      {
        path:"about",
        name:'about',
        component: defineAsyncComponent({
          loader: () => import('@/views/About.vue'),
          delay: 200,
          timeout: 3000,
        })
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
