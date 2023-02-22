<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    counterPlus() {
      this.counter++;
    },
    counterPlusParam(number, e) {
      this.counter += number;
      console.log(e);
    },
    submitClike(){
      console.log("表单提交")
    },
    keySubmit(){
      console.log("键盘表单提交")
    }
  },
  computed: {},
};
</script>

<template>
  <div>
    <!-- 事件处理 on:event或者@event-->
    <p>{{ counter }}</p>
    <button @click="counterPlus">click</button>
    <!-- 参数传递 -->
    <button @click="counterPlusParam(5, $event)">click</button>
    <!-- 一个事件绑定多个处理函数通过逗号分隔 -->
    <button @click="counterPlusParam(5, $event), counterPlus">click</button>
    <!-- 事件修饰符.stop阻止事件冒泡-->
    <div @click="counterPlusParam(10, $event)">
      <button @click.stop="counterPlus">事件</button>
    </div>
    <!-- .prevent阻止默认行为 -->
    <form action="">
      <input type="submit" value="提交" @click.prevent="submitClike()">
    </form>
    <!-- .once只触发一次事件 -->
    <button @click.once="submitClike()">once</button>
    <!-- 按键修饰符，keyup, keydown, keypress -->
    <input type="text" @keyup.enter="keySubmit">
  </div>
</template>

<style>
</style>