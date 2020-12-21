<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/assets/scss/common';
@import '@/assets/scss/fonts';
@import '@/assets/scss/layout';
@import '@/assets/scss/popup';
@import '@/assets/scss/modal';
</style>

<style>
#app {
  width: 1280px;
  position: relative;
  margin: 0 auto;
}
</style>
