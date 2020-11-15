<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 15:44:37
 * @LastEditors: zero
 * @LastEditTime: 2020-11-14 18:54:40
-->
<template>
  <section class="hellowWorld">
    <h1> hellowWorld {{msg}}</h1>
    <h2 @click="sendMsg">button 修改msg</h2>
  </section>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  props: {
    msg: String
  },
  setup(props, context) {
    console.log(props);
    const state = reactive({
      count: 0
    });
    const sendMsg = function() {
      state.count++;
      props.msg && context.emit("update:msg", `第${state.count}次改变msg`);
    };
    return {
      sendMsg,
      ...toRefs(state)
    };
  }
});
</script>

