<template>
  <div>
    <!--向子组件传参-->
    <sub-component :name="name" :list="list"></sub-component>
		<!--c.使用父组件传来的参数-->
    <h2>组件内容Demo--{{ message }}</h2>
    <!--1. 定义子组件触发事件-->
    <button @click="send2Parent">parent++</button>
  </div>
</template>

<script>
import SubComponent from "./SubComponent.vue";

export default {
  data() {
    return {
      name: "weifeng",
      list: ["张三", "李四"],
      counter: 0,
    };
  },
  // b.子组件通过声明props字符串数组的形式接收父组件传递的参数
  props: ["message"],
  methods: {
    // 1.1向父组件传输数据,通过this.emit
    send2Parent() {
      // 1.2第一个参数为自定义事件的名称，第二个参数是发送的数据
      this.$emit("pushParent", this.counter++);
    },
  },
	mounted(){
		// 子组件获取父组件的数据
		console.log("parent", this.$parent)
	},
  components: {
    SubComponent: SubComponent,
  },
};
</script>
