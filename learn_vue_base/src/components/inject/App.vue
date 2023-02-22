<script>
import ParentInjectDemo from "./components/inject/ParentInjectDemo.vue";
export default {
  components: { ParentInjectDemo },
  data() {
    return {
      message: "hello",
      provideObj: {
        counter: 0,
      },
    };
  },
  // 通过provide选项提供值
  // provide: {
  //   message:"hello"
  // },
  // 如果需要推送组件实例中的属性，需要将provide定义为一个返回对象的函数
  provide() {
    return {
      message: this.message,
      // 推送响应式数据
      // 通过响应式对象
      provideObj: this.provideObj,
      // 通过响应式函数
      counterData: () => this.message,
    };
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {},
};
</script>

<template>
  <div>
    <parent-inject-demo></parent-inject-demo>
    <!--provide以及inject并非响应式的-->
    <h1>祖先--{{ message }}</h1>
    <button @click="message = 'world'">click</button>
    <!--响应式provide-->
    <p>{{ provideObj.counter }}</p>
    <button @click="provideObj.counter++">click2</button>
  </div>
</template>

<style>
</style>