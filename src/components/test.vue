<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-11-20 11:08:42
 * @LastEditors: zero
 * @LastEditTime: 2020-11-20 11:26:26
-->
<template>
  <section class="test">
    <h1>{{msg}}</h1>
    <h2>2323</h2>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const msg = ref("56456465");
    return {
      msg
    };
  }
});
</script>

