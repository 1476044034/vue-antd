/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-23 09:50:49
 * @LastEditors: zero
 * @LastEditTime: 2020-10-26 14:37:38
 */
const store = {
  state: {
    version: '1.0.0'
  },
  mutations:{
    setVersion (state: any,val: string): void{
       state.version = val;
    }
  }
}
export default store;