<template>
    <div>
        <p>作用域插槽</p>
        <slot name="scoped" :list="list" :message="message"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [1,2,3,4,5],
            message:"你好"
        }
    },
}
</script>