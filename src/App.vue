<template>
  <div id="app">
    <div id="nav">
      <a @click="go('/')">Home</a> |
      <a @click="go('/canvas')">Canvas</a> |
      <a @click="go('/view1')">View1</a> |
      <a @click="go('/view2')">View2</a> |
      <a @click="go('/view3')">View3</a>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
