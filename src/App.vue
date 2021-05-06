<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    <icon></icon>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  import Icon from 'components/content/Icon/Icon.vue'
  
  export default {
    name: 'App',
    components: {
      MainTabBar,
      Icon
    }
  }
</script>

<style scoped>
  @import "assets/css/base.css"
</style>
