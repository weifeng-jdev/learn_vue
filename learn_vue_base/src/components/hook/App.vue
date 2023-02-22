<script>
import HookDemo from './components/hook/HookDemo.vue';
export default {
  components: { HookDemo },
  data() {
    return {
      show:true
    };
  },
  provide() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {},
};
</script>

<template>
  <div>
    <hook-demo v-if="show"></hook-demo>
    <!--销毁元素-->
    <button @click="show=!show">销毁</button>
  </div>
</template>

<style>
</style>