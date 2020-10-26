<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-22 15:04:58
 * @LastEditors: zero
 * @LastEditTime: 2020-10-23 11:15:38
-->
<template>
  <div class="left-nav">
    <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu mode="inline" v-model:selectedKeys="selectedKeys">

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
          <a-menu-item  v-if="!item.children && !item.meta.hidden" :key="item.path">
            <router-link :to="item.path">{{item.name}}</router-link>
          </a-menu-item>
        </template>

      </a-menu>
    </a-layout-sider>
  </div>
</template>
<script lang='ts'>
import { reactive, toRefs, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {},
  setup() {
    console.log(useRouter(), "useRoute");
    const state = reactive({
      selectedKeys: [],
      collapsed: false,
      openKeys: [],
      routers: useRouter().options.routes
    });
    const openChange = (openKeys: string[]) => {
      console.log(openKeys, "openKeys");
    };
    return {
      ...toRefs(state),
      openChange
    };
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
