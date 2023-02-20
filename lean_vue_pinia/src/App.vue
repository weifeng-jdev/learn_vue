<script setup>
import { userStore, useCounterStore } from './stores';
import { storeToRefs } from 'pinia';
// 接收store，需要调用store方法才能获取到store实例
const store1 = userStore()
console.log('store1:', store1)
const store2 = useCounterStore()
console.log('store2:', store2)
// 结构store并保持响应式, 但是无法结构 actions
const { counter, gettersCounter } = storeToRefs(store1)
// 修改state
function addCounter() {
  // 1. 直接获取修改
  // store1.counter++
  // 2. 批量修改,调用$path({})函数, 传入一个对象，可选store中的任意属性
  // store1.$patch({
  //   counter: 10
  // })
  // 3. 批量修改,调用$path(()=>())函数, 接受的函数入参为store中的任意属性
  store1.$patch((state) => {
    state.counter++
  })

}
</script>

<template>
  <div>
    <p>{{ counter }}</p>
    <p>{{ store1.gettersConter2 }}</p>
    <!-- <p>{{ store1.gettersConter }}</p> -->
    <button @click="addCounter">store1 add</button>
    <p>{{ store2.count }}</p>
    <button @click="store2.increment">store2 add</button>
  </div>
</template>
