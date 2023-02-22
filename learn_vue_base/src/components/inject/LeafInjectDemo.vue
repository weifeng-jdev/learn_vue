<template>
  <div>
    <p>孙子组件对象--{{ provideObj.counter }}</p>
    <p>孙子组件函数--{{ count }}</p>
  </div>
</template>

<script>
export default {
  inject: ["provideObj"],
  computed: {
    count: function() {
      return this.counterData()
    },
  },
};
</script>