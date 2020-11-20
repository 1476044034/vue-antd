/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 14:15:06
 * @LastEditors: zero
 * @LastEditTime: 2020-11-17 14:59:54
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "/login",
    meta: {
      hidden: true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      hidden: true
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    name: '会员',
    component: Layout,
    redirect: {
      name: 'home'
    },
    children: [
      {
        path: "home",
        name: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: "about1",
        name: 'about1',
        component: () => import('@/views/About.vue')
      }
    ]
  },

  {
    path: '/about',
    name: 'About',
    component: Layout,
    redirect: {
      name: 'about'
    },
    children: [
      {
        path: "about",
        name: 'about',
        component: () => import('@/views/About.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   // next({ name: 'login' })
//   next()
// })

export default router
