<template>
  <div>
    <p>Home</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      message: undefined,
    };
  },
  // fetch调用接口
  mounted() {
    // 入参请求url，返回promise对象,通过json解析成json的promise
    fetch("/api/vue/hello")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
  },
  // axios调用接口，基于promiss的http库
  created() {
    axios.get("/api/vue/hello").then((res) => {
      console.log(res);
      this.message = res.data?.data
    });
  },
};
</script>