<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 14:15:06
 * @LastEditors: zero
 * @LastEditTime: 2020-10-22 14:59:26
-->
<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    // 获取当前路由
    const route = useRoute();
    console.log(route.fullPath, "fullPath");
    // 获取路由实例
    // const router: any = useRouter();
    // 当当前路由发生变化时，调用回调函数
    watch(
      () => route,
      (val: any) => {
        // 回调函数
        console.log(val.fullPath);
      },
      {
        immediate: true,
        deep: true
      }
    );
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
