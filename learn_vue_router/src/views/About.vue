<template>
  <div>About<button @click="go">后退</button></div>
</template>

<script>
export default {
  methods: {
    go() {
        //通过 this.$router.go()在路由history中前进和后退
        //-1等于 this.$router.back() 1等于this.$router.forword()
      this.$router.go(-1);
    },
  },
};
</script>