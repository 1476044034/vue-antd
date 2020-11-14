/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 14:15:06
 * @LastEditors: zero
 * @LastEditTime: 2020-11-12 10:09:56
 */
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import app from './App.vue'
import router from './router'
import store from './store';
// createApp(App).use(Antd).use(store).use(router).mount('#app')
const getPrice = function (price: number): number{
  return price;
}
const App = createApp(app);
App.config.globalProperties.$getPrice = getPrice(1);
App.use(Antd);
App.use(store);
App.use(router);
App.mount('#app')
