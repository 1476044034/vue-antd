<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-10-20 14:15:06
 * @LastEditors: zero
 * @LastEditTime: 2020-10-22 14:00:23
-->
<template>
  <div>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }} time is: {{ state.time }}
    </button>
    <p>{{name}}{{age}}</p>
  </div>
</template>

<script lang="ts">
import { reactive, computed, onMounted,ref } from "vue";
import dayjs from "dayjs";
interface Count {
  count: number;
  double: object;
  time?: string;
}
export default {
  setup() {
    const state: any = reactive<Count>({
      count: 0,
      double: computed(() => state.count * 2),
      time: dayjs().format("YYYY-MM-DD")
    });
    const  age: any = ref(0)
    console.log(typeof state);
    function increment() {
      state.count++;
      age.value = 100;
    }
    onMounted(() => {
      console.log('okkk')
    });
    return {
      state,
      increment,
      name: "123",
      age
    };
  }
};
</script>
