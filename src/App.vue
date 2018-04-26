<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div class="z-foot">
      <buttom-nav></buttom-nav>
    </div>
  </div>
</template>

<script>
import ButtomNav from './components/BottomNav.vue'
require('assets/css/common.less')

export default {
  name: 'App',
  components: {
    ButtomNav
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
