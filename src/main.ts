/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 14:15:06
 * @LastEditors: zero
 * @LastEditTime: 2020-11-20 11:27:24
 */
import { createApp, defineAsyncComponent } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import app from './App.vue'
import router from './router'
import store from './store';
const getPrice = function (price: number): number {
  return price;
}
//import Test from '@/components/test.vue'
const App = createApp(app);
App.config.globalProperties.$getPrice = getPrice(1);
App.component('Test', defineAsyncComponent(() =>
  import('@/components/test.vue')
))
App.use(Antd);
App.use(store);
App.use(router);
App.mount('#app')
