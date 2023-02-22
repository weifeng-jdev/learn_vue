<script>
import SlotDemo from "./slot/SlotDemo.vue";
import NamedslotDemo from "./slot/NamedSlotDemo.vue"
import ScopedSlotDemo from './slot/ScopedSlotDemo.vue';
export default {
  components: { SlotDemo, NamedslotDemo, ScopedSlotDemo },
  data() {
    return {
      message:"hello"
    };
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {},
};
</script>

<template>
  <div>
    <slot-demo>
      <!--父组件填充插槽-->
      <button>父组件按钮</button>
    </slot-demo>
    <!--具名插槽填充-->
    <namedslot-demo>
      <!--具名插槽必须使用template标签包裹填充的内容，并使用v-slot指定填充的名称-->
      <template v-slot:s1>
        <!--父组件模板中的表达式只能访问父组件的作用域；子组件模板中的表达式只能访问子组件的作用域。-->
        <h1>S1插槽内容{{message}}</h1>
      </template>
      <template v-slot:s2>
        <h1>S2插槽内容，子组件数据</h1>
      </template>
      <template v-slot:s3>
        <!-- <h1>S3插槽内容</h1> -->
      </template>
    </namedslot-demo>
    <!--作用域插槽,父组件提供内容，子组件提供数据 -->
    <scoped-slot-demo>
      <!--父组件通过v-slot:scoped="slotProp"获取插槽内的数据-->
      <template v-slot:scoped="slotProp" >
          {{ slotProp }}
      </template>
    </scoped-slot-demo>
  </div>
</template>

<style>
</style>