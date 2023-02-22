<script>
import DemoComponent from "./DemoComponent.vue";

export default {
  components: { DemoComponent },
  data() {
    return {
      message: "hello haha",
      counter: 0,
    };
  },
  methods: {
    // 处理子组件推送的事件
    getChildMsg(value) {
      this.counter = value;
      console.log("child msg:", value);
    },
  },
  computed: {},
  watch: {},
  mounted(){
    // ii.获取子组件的信息
    console.log("refs", this.$refs)
  },
  // 引入组件
  components: {
    DemoComponent: DemoComponent,
  },
};
</script>

<template>
  <div>
    <!--a.引入组件, 通过绑定属性向子组件传参-->
    <!-- <demo-component :message="message"></demo-component> -->
    <!--2. 父组件监听子组件的自定义事件-->
    <!-- <demo-component @pushParent="getChildMsg"></demo-component>
    <p>{{counter}}</p> -->
    <!--
      父组件访问子组件 $refs
      子组件访问父组件 $parent
      子组件访问根组件 $root
    -->
    <!--i.通过ref为子组件定义一个key，ref也可以用于常规的dom元素-->
    <demo-component :message="message" ref="c1"></demo-component>
    <p ref="p"></p>
  </div>
</template>

<style>
</style>