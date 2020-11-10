<template>
  <div id="app">
    <div id="nav">
      <a @click="go('/')">초기화면</a> |
      <a @click="go('/view1')">약관동의</a> |
      <a @click="go('/canvas')">캔버스</a> |
      <a @click="go('/view2')">로딩스피너 제작 예정</a> |
      <a @click="go('/view3')">View3</a> |
      <a @click="go('/view4')">View4</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App',
  methods: {
    go(path) {
      if(path === '/canvas') localStorage.setItem('isReload', true)
      this.$router.push({ path: path })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/common';
@import '@/assets/scss/fonts';
@import '@/assets/scss/layout';
@import '@/assets/scss/popup';
</style>

<style>
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
