<script>
export default {
  data() {
    return {
      user: {
        name: "weifeng",
      },
      isError: true,
      isActive: false,
    };
  },
  methods: {
    changeMsg: function () {
      this.message = "demo";
    },
  },
  computed: {
    err: function () {
      return {
        errDisplay: this.isActive && this.isError,
      };
    },
  },
};
</script>

<template>
  <div>
    <!-- clas属性直接绑定字符串 -->
    <div class="active">{{ user.name }}</div>
    <!-- clas属性通过对象绑定, 兼容原生attribute -->
    <div :class="{ active: isActive }" class="isError">{{ user.name }}</div>
    <!-- clas属性绑定计算属性 -->
    <div :class="{ active: isActive, isError: err.errDisplay }">
      {{ user.name }}
    </div>
    <!-- 数组语法绑定属性 -->
    <div :class="[user.name]">{{user.name}}</div>
    <button @click="isActive = !isActive">click</button>
  </div>
</template>

<style>
.active {
  font-size: 50px;
}
.isError {
  color: red;
}
.weifeng{
  color: aqua;
}
</style>