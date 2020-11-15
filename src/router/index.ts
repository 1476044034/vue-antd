/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 14:15:06
 * @LastEditors: zero
 * @LastEditTime: 2020-11-14 19:27:09
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'
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
    redirect: {
      name: 'about'
    },
    children: [
      {
        path: "about",
        name: 'about',
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
router.beforeEach((to, from, next) => {
  console.log(to, from)
  // next({ name: 'login' })
  next()
})

export default router
