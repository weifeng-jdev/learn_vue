<template>
  <div>User</div>
</template>

<script setup>
// 通过组合式API获取路由对象
import { useRoute } from "vue-router";
console.log(useRoute().params.id);
const prop = defineProps({
  id:String
})
console.log("路由props传参：", prop.id)
</script>

<!-- <script>
// Vue2中的使用方法
export default {
  props: ["id"],
  mounted() {
    // 通过 this.$route获取当前活跃的路由对象
    console.log(this.$route.params.id);
    console.log("路由props传参：", this.id)
  },
};
</script> -->