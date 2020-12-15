<template>
  <div id="app">
    <div class="userid">사용자 ID : {{ $store.state.session.user_id }}</div>

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

.userid {
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border: 1px solid #000;
  padding: 5px;
  z-index: 1000;
}
</style>
