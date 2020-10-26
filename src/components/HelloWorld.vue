<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 15:44:37
 * @LastEditors: zero
 * @LastEditTime: 2020-10-26 15:02:50
-->
<template>
  <div class="hello">
    <h1 @click="submit">{{ msg }}</h1>
    <h2 @click="change">修改msg</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String
  },
  emits: ["submit", "update:msg"],
  setup(props, ctx) {
    console.log(props, "props");
    function submit(): void {
      props.msg && ctx.emit("submit", "321312");
    }
    function change(): void {
      console.log("修改");
      ctx.emit("update:msg", "嫦娥msg");
    }
    
    function getData(n: number): number {
      if (n == 1) {
        return 1;
      }
      return n * getData(n - 1);
    }
    console.log(getData(3));

    return {
      submit,
      change
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
