<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed:{
    ...mapGetters({
      Config: 'getConfig'
    })
  },
  created () {
    const demo = true
    const app = false
    const dev = true

    this.Config.isDemo = demo
    this.Config.isIE = this.$browserDetect.isIE
    this.Config.isChrome = this.$browserDetect.isChrome
    this.Config.isChromeIOS = this.$browserDetect.isChromeIOS
    this.Config.isIOS = this.$browserDetect.isIOS
  }
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
