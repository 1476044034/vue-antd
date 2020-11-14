<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 14:15:06
 * @LastEditors: zero
 * @LastEditTime: 2020-11-12 11:08:40
-->
<template>
  <div>
   
    <HelloWorld v-model:msg='msg' @msg='getMsg'></HelloWorld>
  </div>
</template>

<script lang="ts">
import { reactive,toRefs } from "vue";
// import { useStore } from "vuex";

import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
interface Count {
 
  msg: string;
}
export default {
  components: {
    HelloWorld
  },
  setup() {
    const state: any = reactive<Count>({
      msg: "初始化msg"
    });
    const getMsg = function (val: string){
       console.log(val,'valchild')
    }
   
    return {
      ...toRefs(state),
      getMsg
    };
  }
};
</script>
