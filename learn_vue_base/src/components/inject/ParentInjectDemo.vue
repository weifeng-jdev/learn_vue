<template>
  <div>
    <leaf-inject-demo> </leaf-inject-demo>
    <p>子组件内容--{{ message }}</p>
  </div>
</template>

<script>
import LeafInjectDemo from "./LeafInjectDemo.vue";

export default {
  components: { LeafInjectDemo },
  // 通过inject属性注入祖先组件的数据
  inject: ["message"],
};
</script>