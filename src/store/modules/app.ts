/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-23 09:50:49
 * @LastEditors: zero
 * @LastEditTime: 2020-11-15 09:43:53
 */
import { Module } from 'vuex';
import { GloableState } from '..';
import * as Types from './actions-types';
export interface AppProps {
  version: string;
  course: Course;
  collapsed: boolean;
}
export enum Course {
  vue,
  react,
  node
}
const state: AppProps = {
  version: '默认版本',
  course: Course.vue,
  collapsed: false
}

// AppProps
const app: Module<AppProps, GloableState> = { //GloableState 全局属性
  namespaced: true, //commit时 store.commit('文件名/方法名')
  state,
  mutations: {
    [Types.SET_VERSION](state: AppProps, payload: string) {
      state.version = payload;
    },
    [Types.SET_COURSE](state: AppProps, val: Course) {
      state.course = val;
    },
    [Types.TOGGLE_SILDEBAR](state: AppProps, val: boolean) {
      state.collapsed = val;
    }


  }
}
export default app;