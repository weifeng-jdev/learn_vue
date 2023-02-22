<template>
    <div>News</div>
</template>

<script>
export default{
    beforeRouteEnter (to, from, next) {
        console.log(to, from)
        // 获取组件对象
        next((vm)=>{
            console.log(vm)
        })
    },
    beforRouterUpdate(to, from, next){

    },
    beforeRouteLeave (to, from, next) {
        // ...
    }
}
</script>