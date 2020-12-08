<!--
 * @Description: layout
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-22 13:56:26
 * @LastEditors: zero
 * @LastEditTime: 2020-11-20 18:27:32
-->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!-- <left-nav></left-nav> -->
    <left-nav></left-nav>
    <a-layout>
      <a-layout-header class="header" style="background: #fff; padding: 0">
        <div class="menu">
          <!-- <p>{{collapsed}}</p> -->
          <menu-unfold-outlined v-if="collapsed" class="trigger" @click="toggleSideBar" />
          <menu-fold-outlined v-else class="trigger" @click="toggleSideBar" />
        </div>
      </a-layout-header>
      <a-layout-content class="layout-content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { computed, defineComponent } from 'vue';
import leftNav from './LeftNav/index.vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'
import * as Types from '@/store/modules/actions-types'

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    leftNav
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    console.log(route, 'route')
    // watch(route, (val) => {
    //   console.log(val, 'okkk')
    //   store.commit(`app/${Types.SET_FULLPATH}`, val.fullPath);
    // }, {
    //     immediate: true
    //   })
    const collapsed = computed(() => {
      return store.state.app.collapsed;
    });
    const toggleSideBar = function () {
      store.commit(`app/${Types.TOGGLE_SILDEBAR}`, !store.state.app.collapsed)
    }
    return {

      toggleSideBar,
      collapsed
    }
  }
});
</script>
<style lang="less" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .menu {
    margin-left: 16px;
  }
}
.layout-content {
  padding: 24px;
  background: #fff;
  margin: 24px 16px;
  min-height: 280px;
  height: calc(100vh - 110px);
  overflow-y: scroll;
}
</style>



