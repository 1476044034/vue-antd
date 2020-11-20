<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-11-14 18:40:01
 * @LastEditors: zero
 * @LastEditTime: 2020-11-20 15:06:00
-->
<template>
  <section class="login">
    <h2>{{course}}</h2>
    <h2 @click="addCount">{{count}}++</h2>
    <a-button type='primary' @click="login">登陆</a-button>
    <a-button type='danger' @click="SET_COURSE">修改课程</a-button>
    <Test></Test>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
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
    const count: object = ref(0);
    const course = computed(() => {
      return store.state.app.course;
    });
    // 位移运算
    enum shapsFlag {
      ELEMENT = 1,
      COMPONENT = 1 << 2,
      BIG = 1 << 3,
      SMALL = 1 << 4
    }
    const vnode = {
      shapFlag: 0
    };
    const addCount = (): void => {
      console.log(count);
      (count as any).value++;
    };
    const demo = (element = shapsFlag.ELEMENT, type = shapsFlag.SMALL) => {
      vnode.shapFlag = element |= type;
      console.log(vnode, "vnode");
    };
    const demo1 = (val: number) => {
      if (val & shapsFlag.ELEMENT) {
        console.log("element");
      } else {
        console.log("组件");
      }
    };
    const demo3 = function(params1: string) {
      console.log(params1.length);
    };
    demo();
    demo1(10);
    demo3("str");
    const test = function(val?: Test): void {
      console.log(val);
    };
    const login = function() {
      router.push({
        name: "about1"
      });
    };
    const SET_COURSE = function() {
      store.commit(`app/${Types.SET_COURSE}`, Course.vue);
      test(Test.color);
    };

    return {
      login,
      course,
      SET_COURSE,
      count,
      addCount
    };
  }
});
</script>
