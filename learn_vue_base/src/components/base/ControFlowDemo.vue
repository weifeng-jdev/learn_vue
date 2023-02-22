<script>
export default {
  data() {
    return {
      name: "weifeng",
      flag: true,
      gender: "man",
      list: [{ user: "张三" }, { user: "李四" }, { user: "王五" }],
      newUser:null
    };
  },
  methods: {},
  computed: {
    isShow: function () {
      return this.flag;
    },
  },
};
</script>

<template>
  <div>
    <!-- v-if 条件性渲染，条件满足时显示，会销毁dom元素 -->
    <p v-if="isShow">true</p>
    <p v-else-if="!isShow">false</p>
    <button @click="flag = !flag">click</button>
    <!-- 在template元素上使用v-if条件渲染分组，template是不可见元素，不会被渲染 -->
    <template v-if="isShow">
      <p>R18</p>
    </template>
    <template v-else-if="!isShow">
      <p>R13</p>
    </template>
    <!-- v-show 不支持template 也不支持v-else，将dom的display属性改为none -->
    <p v-show="gender == 'man'">man</p>
    <p v-show="gender == 'woman'">woman</p>
    <button @click="gender = 'woman'">click2</button>
    <!-- v-for 循环渲染列表, item为元素，index为索引, key用于给行定义唯一标识-->
    <div>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          {{ index + "-" + item.user }}
        </li>
      </ul>
      <input type="text" v-model="newUser">
      <button @click="list.push({user:newUser})">add</button>
    </div>
  </div>
</template>

<style>
</style>