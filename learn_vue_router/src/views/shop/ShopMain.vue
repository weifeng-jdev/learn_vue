<template>
  <div>
    <p>shop main</p>
  </div>
</template>

<script setup>
const prop = defineProps({
  id: String,
});
console.log("命名视图prop传参", prop.id);
</script>