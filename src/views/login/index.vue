<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-11-14 18:40:01
 * @LastEditors: zero
 * @LastEditTime: 2020-11-15 10:02:23
-->
<template>
  <section class="login">
    <h2>{{course}}</h2>
    <a-button type='primary' @click="login">登陆</a-button>
    <a-button type='danger' @click="SET_COURSE">修改课程</a-button>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import * as Types from "@/store/modules/actions-types";
import { Course } from "@/store/modules/app";
import { GloableState } from "@/store";
enum Test {
  color,
  age
}
export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore<GloableState>();
    const course = computed(() => {
      return store.state.app.course;
    });
    const test = function(val?: Test): void {
      console.log(val);
    };
    const login = function() {
      router.push({
        path: "/home"
      });
    };
    const SET_COURSE = function() {
      store.commit(`app/${Types.SET_COURSE}`, Course.vue);
      test(Test.color);
    };

    return {
      login,
      course,
      SET_COURSE
    };
  }
});
</script>
