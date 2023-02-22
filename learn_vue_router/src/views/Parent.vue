<template>
  <div>
    Parent
    <!--嵌套路由-->
    <router-link to="/parent/child1">to Child1</router-link>
    <router-link to="/parent/child2">to Child2</router-link>
    <router-view></router-view>
  </div>
</template>