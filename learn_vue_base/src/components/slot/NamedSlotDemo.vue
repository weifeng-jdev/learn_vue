<template>
    <div>
        <h1>子组件内容</h1>
        <div>
            <!--定义子组件匿名插槽-->
            <slot name="s1"></slot>
            <slot name="s2"></slot>
            <!--默认内容，在没有提供内容的时候自动渲染-->
            <slot name="s3"><button>默认按钮</button></slot>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            message:"你好"
        }
    }
}
</script>