<script>
export default {
  data() {
    return {
      message:"hello",
      counter: 0,
      select: false,
      mulSelect: [],
      gender: "",
      score: "a",
      mulScore:[]
    };
  },
  methods: {},
  computed: {},
  watch: {
    select(newVal) {
      console.log("newVal=", newVal);
    },
    mulSelect(newVal) {
      console.log("newVal=", newVal);
    },
    gender(newVal) {
      console.log("newVal=", newVal);
    },
    score(newVal) {
      console.log("newVal=", newVal);
    },
    mulScore(newVal) {
      console.log("newVal=", newVal);
    },
  },
};
</script>

<template>
  <!-- v-model -->
  <div>
    <button @click="counter--">-</button>
    <input type="text" v-model="counter" />
    <button @click="counter++">+</button><br />
    <input type="checkbox" v-model="select" />单选框<br />
    <!-- 多选框 -->
    <input type="checkbox" value="1" v-model="mulSelect" />1
    <input type="checkbox" value="2" v-model="mulSelect" />2
    <input type="checkbox" value="3" v-model="mulSelect" />3
    <input type="checkbox" value="4" v-model="mulSelect" />4
    <!--单选框-->
    <input type="radio" v-model="gender" value="“man" />男
    <input type="radio" v-model="gender" value="woman" />女
    <!--下拉框 多选绑定为数组-->
    <select v-model="score">
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
      <option value="d">D</option>
    </select>
    <select v-model="mulScore" multiple>
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
      <option value="d">D</option>
    </select><br/>
    <!--修饰符-->
    <p>-{{message}}-</p>
    <p>{{typeof counter}}</p>
    <!--.lazy失去焦点-->
    <input type="text" v-model.lazy="message">
    <!--.trim去除首尾空格-->
    <input type="text" v-model.trim="message">
    <!--.number内容转为数字-->
    <input type="text" v-model.number="counter">
  </div>
</template>

<style>
</style>