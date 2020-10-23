/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 14:15:06
 * @LastEditors: zero
 * @LastEditTime: 2020-10-23 09:53:31
 */
import { createStore } from 'vuex';
import app from './app/app'

export default createStore({
  modules: {
    app
  }
})
