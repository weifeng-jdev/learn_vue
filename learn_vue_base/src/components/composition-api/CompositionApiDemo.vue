<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="changeCounter">changeCounter</button>
    <p>{{ obj }}</p>
    <p>{{ name }}</p>
    <button @click="changObjName">changeObj</button>
    <p>msg--{{ message }}</p>
    <p>reverMsg--{{ reverMessage }}</p>
  </div>
</template>

<script>
import {
  computed,
  reactive,
  ref,
  toRefs,
  watch,
  watchEffect,
  onBeforeMount,
  onMounted,
} from "vue";
export default {
  // 组合式API
  setup(props) {
    // 定义的变量不是响应式的，如果需要响应式的变量需要用ref(val)函数装饰，返回一个带有value属性的响应式引用
    let counter = ref(0);
    function changeCounter() {
      counter.value++;
    }
    // 通过watch()函数监听变量
    watch(counter, (newVlue) => {
      console.log("watch counter:", newVlue);
    });
    // 计算属性通过computed函数装饰，返回一个带有value属性的响应式变量
    let message = ref("hello world");
    let reverMessage = computed(() => {
      return message.value.split("").reverse().join("");
    });

    // 定义响应式引用数据类型需要reactive(obj)函数装饰
    let obj = reactive({
      name: "张三",
      age: 28,
    });
    function changObjName() {
      obj.name = "李四";
    }
    // 通过watchEffect()监听对象，不需要指定监听的属性,组件初始化会手机所有的对象依赖
    watchEffect(() => {
      console.log("watch obj:", obj.name);
    });
    // 暴露定义的变量和方法
    return {
      counter,
      changeCounter,
      obj,
      changObjName,
      // ES6拓展运算符解构的变量没有响应式
      ...obj,
      // ES结构的数据重新或得响应式
      ...toRefs(obj),
      message,
      reverMessage,
    };
    // 生命周期钩子函数
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
  },
};
</script>