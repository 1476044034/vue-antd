<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 15:30:08
 * @LastEditors: zero
 * @LastEditTime: 2020-11-14 13:03:39
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button v-for="(item,index) in girls " :key="index" @click="selectGirlFun(index)">{{item}}</button>
    <p>{{selectGirl}}</p>
    <button @click="getHome">about</button>
    <p>
      {{msg}}子组件参数
    </p>
    <p>vuex {{store.app.version}}</p>
    <a-button type='primary' @click="setVersion">修改vuex版本</a-button>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, watch, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import * as Types from '../store/modules/actions-types';
import { useStore } from "vuex";
import { GloableState } from '@/store';
interface DataProps {
  girls: any;
  selectGirl: string;
  msg: string;
  selectGirlFun: (index: number) => void;
  store: object;
}
export default {
  components: {
    
  },
  setup(props: any, ctx: any) {
    console.log(process.env,'process')
    const store = useStore<GloableState>();
    console.log(useStore().state.app.version, "vuex12");
    console.log(props, ctx);
    const data: DataProps = reactive({
      girls: ["大脚12", "刘英256", "晓红233"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
      msg: "默认参数",
      store: useStore().state
    });
    const setVersion = (): void =>{
       store.commit(`app/${Types.SET_VERSION}`,'修改的vuex')
    }

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
      console.log('跳转33')
      router.push({
        path: "/about"
      });
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
      setVersion
    };
  }
};
</script>
