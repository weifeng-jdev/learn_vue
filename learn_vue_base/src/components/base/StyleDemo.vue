<script>
export default {
  data() {
    return {
      name: "weifeng",
      isError: true,
      isActive: false,
      activeColor: "red",
      activeFontSize: 100,
    };
  },
  methods: {
    changeMsg: function () {
      this.message = "demo";
    },
  },
};
</script>

<template>
  <div>
    <p style="color: red">{{ name }}</p>
    <!-- 对象绑定style, 支持驼峰命名和中划线(需要引号包围) -->
    <p
      :style="{
        color: activeColor,
        fontSize: activeFontSize + 'px',
        'background-color': 'blue',
      }"
    >
      {{ name }}
    </p>
  </div>
</template>

<style>
</style>