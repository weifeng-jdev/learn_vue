<script>
export default {
  data() {
    return {
      message: "hello",
      user: {
        name:"weifeng"
      }
    };
  },
  methods: {
    changeMsg: function () {
      this.message = "demo";
    },
  },
  watch: {
    // 监听属性，当属性变化时触发这个函数，无法监听对象的属性
    // message(newVal, oldVal) {
    //     console.log("val:", newVal, oldVal)
    // }
    // 完整写法，
    message: {
      immediate: true,
      handler: function (newVal, oldVal) {
        console.log("val:", newVal, oldVal);
      },
    },
    // user: {
    //   handler: function(newVal, oldVal) {
    //     console.log("val:", newVal, oldVal);
    //   },
    //   // 深度监听，可以监听对象的属性
    //   deep: true
    // }
    // 通过字符串形式监听对象中指定的属性
    "user.name": {
      handler: function(newVal, oldVal) {
        console.log("val:", newVal, oldVal);
      },
      // 深度监听，可以监听对象的属性
      deep: true
    }
  },
};
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMsg">change</button>
    <input type="text" v-model="message" />
    <p>{{user.name}}</p>
    <button @click="user.name='zhangsan'">changeName</button>
  </div>