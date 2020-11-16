<template>
  <div id="app">
    <div class="navigation">
      진단테스트 :
      <a @click="go('/')">초기화면</a> |
      <a @click="go('/Agreement')">약관동의</a> |
      <a @click="go('/canvas')">캔버스</a> |
      <a @click="go('/LoadingSpinnerWaiting')">로딩스피너 제작 예정</a> |
      <a @click="go('/TestingResult')">테스팅 결과</a>
    </div>
    <div class="navigation pb-5">
      파블로레터 :
      <a @click="go('/PabloMain')">학습메인</a> |
      <a @click="go('/PabloStudy1')">파블로학습1</a> |
      <a @click="go('/PabloStudy2')">파블로학습2</a> |
      <a @click="go('/PabloStudy3')">파블로학습3</a> |
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
.navigation {
  padding: 10px 10px 0 10px;
}
.navigation:last-child {
}
.navigation a {
  font-weight: bold;
  color: #2c3e50;
}

.navigation a.router-link-exact-active {
  color: #42b983;
}
</style>
