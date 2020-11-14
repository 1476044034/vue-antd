/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-11-11 11:49:54
 * @LastEditors: zero
 * @LastEditTime: 2020-11-11 14:05:15
 */
import { reactive, toRefs } from 'vue';
interface DataProps {
  pageSize: number;
  pageLimit: number;
}
export function usePage() {
  const state: DataProps = reactive({
    pageSize: 1,
    pageLimit: 10
  })
  const add: Function = (): void =>  {
    state.pageSize++
  }
  return {
    ...toRefs(state),
    add
  }
}