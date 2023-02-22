<template>
  <div>
    <!--渲染父组件的参数-->
    <h2>hello--{{ name }}</h2>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // 子组件通过声明props对象的方式接收父组件的传参，声明父组件的{参数名称:类型}，同时声明默认值，必传
  props: {
    // 类型限制
    // name:String
    // 设置默认值
    name: {
      type: String,
      // 默认值
      default: "anonyoms",
      // 必传属性
      required: true,
    },
    list: {
      type: Array,
      // 对象或者数组的默认值必须以函数的形式返回
      default() {
        return [];
      },
    },
  },
  mounted() {
    console.log("root", this.$root);
  },
};
</script>