<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="pushParent">sendToParent</button>
    <p>{{name}}</p>
  </div>
</template>

<script>
import { toRef, ref, inject } from "vue";
import { h } from "@vue/runtime-core";
export default {
  // 子组件定义父组件传来的参数
  props: {
    message: {
      type: String,
      default: "message",
    },
  },
  /*
  setup 函数的参数
  1. props:
  接收父组件的传参
  2. context:
    a.attrs:获取父组件定义在子组件标签上的属性
    b.slots: 获取插槽
    c.emit: 向父组件推送数据
    d.expose：暴露公共属性
 */
  //通过props参数读取父组件的数据
  setup(props, context) {
    const msg = toRef(props, "message");
    console.log(msg.value);
    console.log("context---", context);
    // emit向父组件推送数据
    const counter = ref(0);
    function pushParent() {
      context.emit("push", counter);
    }
    // 当setup返回渲染函数，通过expose暴露其他的变量或者方法
    // context.expose({
    //   msg,
    //   counter,
    //   pushParent,
    //   name,
    // });
    // 通过inject接收上级组件透传的数据, 参数为属性名
    const name = inject("name");
    // setup返回渲染函数，渲染目标的内容
    return {
      msg,
      counter,
      pushParent,
      name,
    };
  },
};
</script>