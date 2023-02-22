<script>
import CompositionApi2Demo from './components/composition-api/CompositionApi2Demo.vue';
import CompositionApiDemo from './components/composition-api/CompositionApiDemo.vue'
import CompositionApiCandy from './components/composition-api/CompositionApiCandy.vue';
export default {
  components: {CompositionApiDemo, CompositionApi2Demo,CompositionApiCandy},
  data() {
    return {
      show: true,
    };
  },
  provide() {
    return {};
  },
  methods: {
    
  },
  computed: {},
  watch: {},
  mounted() {},
};
</script>

<template>
  <div>
    <!-- <composition-api-demo></composition-api-demo> -->
    <!-- <composition-api-2-demo @push="recivChild"></composition-api-2-demo> -->
    <composition-api-candy></composition-api-candy>
  </div>
</template>

<style>
</style>