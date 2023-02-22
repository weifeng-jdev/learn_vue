<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ counter }}</p>
    <button @click="add">click</button>
  </div>
</template>

<!--语法糖版本setup-->
<script setup>
// 引入组件不需要注册
import Sub from "./Sub.vue";
// 定义响应式变量还是需要引入
import { ref } from "@vue/reactivity";
// 定义的变量，不需要暴露，直接使用
const name = "张三";
const counter = ref(0);
function add() {
  counter.value++;
}
</script>