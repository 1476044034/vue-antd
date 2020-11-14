/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 14:15:06
 * @LastEditors: zero
 * @LastEditTime: 2020-11-14 12:58:55
 */
import { createStore } from 'vuex';
// import createPersistedState from "vuex-persistedstate"
import app, { AppProps } from './modules/app'
export interface GloableState {
  app: AppProps;
}
const store =  createStore({
  modules: {
    app
  }
})

export default store;
