<script setup>
</script>

<template>
  <div>
    <!--vue-router 将路由和组件映射起来-->
    <h1>Hello App!</h1>
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
      <!--to支持动态绑定命名路由配置对象-->
      <router-link :to="{name:'user', params:{id:123}}">Go to User</router-link>
      <router-link to="/news/123">Go to News</router-link>
      <router-link to="/parent">Go to Parent</router-link>
      <router-link to="/page">Go to Page</router-link>
      <router-link to="/shop/1231">Go to Shop</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- <router-view></router-view> -->
    <!--声明多个router-view，通过name指定命名视图中对应的路由组件-->
    <router-view name="ShopTop"></router-view>
    <router-view></router-view>
    <router-view name="ShopFoot"></router-view>
  </div>
</template>