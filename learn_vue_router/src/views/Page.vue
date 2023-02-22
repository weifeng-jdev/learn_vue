<template>
  <div>
    <h1>Page页面</h1>
    <button @click="jump">跳转页面</button>
  </div>
</template>

<!-- <script setup>
import { useRouter } from 'vue-router';
function jump() {
  if(true) {
    useRouter().push("/")
  }
}
</script> -->

<script>
export default {
  methods: {
    jump() {
      if (true) {
        // 通过$router控制路由, 通过对象可以传递多样的参数
        // this.$router.push("/")
        // this.$router.push({
        //   path: "/user/123",
        // });
        // this.$router.push({
        //   name: "user",
        //   // 传递路由参数
        //   params: {
        //     id: 123,
        //   },
        //   // 拼接路径参数
        //   query:{
        //     name:"123"
        //   }
        // });
        // 以replace形式替换当前路由，不会产生history
        // this.$router.push({path:"/", replace:true});
        // this.$router.replace({path:"/"});
        this.$router.push("about")
      }
    },
  },
};
</script>