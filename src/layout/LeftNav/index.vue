<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-22 15:04:58
 * @LastEditors: zero
 * @LastEditTime: 2020-11-20 15:33:50
-->
<template>
  <div class="left-nav">
    <a-layout-sider :collapsed="collapsed" :trigger='null' collapsible>
      <div class="logo" />
      <a-menu mode="inline" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys">

        <template v-for="(item) in routers">
          <a-sub-menu v-if="item.children && item.children.length >= 1" :key="item.path">
            <template v-slot:title>

              <span>{{item.name}}</span>
            </template>
            <template v-for="(item2) of item.children">
              <a-menu-item v-if="!item2.hidden" :key="item.path+'/'+item2.path">
                <router-link :to="item.path+'/'+item2.path">{{item2.name}}</router-link>
              </a-menu-item>
            </template>

          </a-sub-menu>
          <a-menu-item v-if="!item.children && !item.meta.hidden" :key="item.path">
            <router-link :to="item.path">{{item.name}}</router-link>
          </a-menu-item>
        </template>

      </a-menu>
    </a-layout-sider>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
interface DataProps {
  routers: any;
  openKeys?: any;
}
export default defineComponent({
  setup() {
    const test = 1;
    const store = useStore();
    const route = useRoute();
    const state: DataProps = reactive({
      routers: useRouter().options.routes,
      openKeys: ["/home"]
    });
    const collapsed = computed(() => {
      return store.state.app.collapsed;
    });
    const selectedKeys = computed(() => {
      console.log(route.path, "lfc 逗比");
      return [route.path];
    });
    // const openKeys = computed(() => {
    //   const currentFullPath: string = store.state.app.currentFullPath;
    //   if ((openKeys as any).length == 0) {
    //     return ["/" + currentFullPath.split("/")[1]];
    //   } else {
    //     if ((openKeys as any)[0] != "/" + currentFullPath.split("/")[1]) {
    //       return ["/" + currentFullPath.split("/")[1]];
    //     }
    //   }
    // });
    return { test, ...toRefs(state), collapsed, selectedKeys };
  }
});
</script>


<style lang="less" scoped>
.left-nav {
  height: 100vh;
  overflow-y: scroll;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
