<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 15:30:08
 * @LastEditors: zero
 * @LastEditTime: 2020-10-23 10:01:35
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @submit='getValue' v-model="msg" />
    <button v-for="(item,index) in girls " :key="index" @click="selectGirlFun(index)">{{item}}</button>
    <p>{{selectGirl}}</p>
    <button @click="getHome">about</button>
    <p>
      {{msg}}
    </p>
    <p>vuex {{store.app.version}}</p>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, watch, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useStore } from "vuex";
interface DataProps {
  girls: any;
  selectGirl: string;
  msg: string;
  selectGirlFun: (index: number) => void;
  store: object;
}
export default {
  components: {
    HelloWorld
  },
  setup(props: any, ctx: any) {
    console.log(useStore().state.app.version, "vuex");
    console.log(props, ctx);
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
      msg: "Welcome to Your Vue3.0.js + TypeScript App",
      store: useStore().state
    });

    // 获取路由实例
    const router = useRouter();
    // console.log((router.currentRoute as any)._rawValue, "router");
    watch(
      () => {
        return [data.selectGirl];
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue, "okkk");
      }
    );

    // 路由跳转
    const getHome = () => {
      router.push({
        path: "/about"
      });
    };
    const getValue = (val: string) => {
      console.log(val);
    };
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
      console.log(document.getElementsByClassName("home")[0]);
    });
    const refData = toRefs(data);
    return {
      ...refData,
      getHome,
      getValue
    };
  }
};
</script>
