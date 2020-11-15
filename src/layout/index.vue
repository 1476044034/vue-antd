<!--
 * @Description: layout
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-22 13:56:26
 * @LastEditors: zero
 * @LastEditTime: 2020-11-15 09:56:41
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
import { reactive, toRefs, computed } from 'vue';
import leftNav from './LeftNav/index.vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { useStore } from 'vuex';
import * as Types from '@/store/modules/actions-types'
export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    leftNav
  },
  setup() {
    const state = reactive({
      selectedKeys1: ['2'],
      selectedKeys2: ['1'],
      openKeys: ['sub1']
    })
    const store = useStore();
    const collapsed = computed(() => {
      return store.state.app.collapsed;
    });
    const toggleSideBar = function () {
      store.commit(`app/${Types.TOGGLE_SILDEBAR}`, !store.state.app.collapsed)
    }
    return {
      ...toRefs(state),
      toggleSideBar,
      collapsed
    }
  }
};
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



