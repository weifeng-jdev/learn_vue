<template>
  <!--通过ref接收子组件暴露的内容-->
  <sub-demo :message="message" @push="recivChild" ref="content"></sub-demo>
</template>
<script>
import SubDemo from "./Sub.vue";
import { ref, provide } from "vue";
export default {
  setup(props) {
    const message = ref("hello");
    function recivChild(value) {
      console.log(value.value);
    }
    // 通过provide透传数据
    const name = ref("张三")
    provide("name", name)
    // 暴露内容
    return {
      message,
      recivChild,
      name
    };
  },
  components: {
    SubDemo,
  },
  mounted() {
    // 获取子组件暴露的内容
    console.log("content -----", this.$refs.content);
    // 调用子组件暴露的方法
    this.$refs.content.pushParent();
  },
};
</script>