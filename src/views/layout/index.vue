<!--
 * @Description: layout
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-22 13:56:26
 * @LastEditors: zero
 * @LastEditTime: 2020-10-22 16:13:30
-->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!-- <left-nav></left-nav> -->
    <left-nav></left-nav>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {reactive,toRefs} from 'vue';
import leftNav from './LeftNav/index.vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
export default {
components: {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  leftNav
  },
  setup () {
    const state = reactive({
      selectedKeys1:['2'],
      selectedKeys2:['1'],
      collapsed:false,
      openKeys:['sub1']
    })
    return {
      ...toRefs(state)
    }
  }
};
</script>


