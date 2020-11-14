import { Module } from 'vuex';
import { GloableState } from '..';
import * as Types from './actions-types';
export interface AppProps {
  version: string;
}
const state: AppProps = {
  version: '默认版本'
}

const app: Module<AppProps, GloableState> = { //GloableState 全局属性
  namespaced: true,
  state,
  mutations: {
    [Types.SET_VERSION](state: AppProps, payload: string) {
      state.version = payload;
    },
    setName (state,val){
      state.version = val;
    }

  }
}
export default app;
//13025127666