<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      Config: 'getConfig',
      Session: 'getSession'
    })
  },
  data() {
    return {
      dummy: false, //더미 데이터 사용
      demo: false, //데모용 빌드
      app: false, //웹 유무
      dev: true //API서버
    }
  },
  created() {
    this.setConfig()
    this.setSession()
    this.setApiUrl()
  },
  methods: {
    setConfig() {
      this.Config.isDemo = this.demo
      this.Config.isApp = this.app
      this.Config.isIE = this.$browserDetect.isIE
      this.Config.isChrome = this.$browserDetect.isChrome
      this.Config.isChromeIOS = this.$browserDetect.isChromeIOS
      this.Config.isIOS = this.$browserDetect.isIOS
    },
    setSession() {
      /**
       * 데모용 설정
       * home부분에서 디바이스에서 값을 가져와서 처리 함
       * this.Android.getInitVariables()
       * @type {boolean}
       */
      if (this.app === false) {
        if (this.demo) {
          /**
           * 데모일 경우에는 난수 처리
           */
          this.Session.name = '영철'
          this.Session.user_id = Math.random(99999999) * 10000000000000000
          this.Session.user_auth_key = 'abcdefghijklmnopqrstuvwxyz0123456789'
          this.Session.Content_Language = 'ko'
          this.Session.device_type = '1002'
          localStorage.setItem('user_id', this.Session.user_id)
        } else {
          /**
           * 정식 스토리 경우에는 고정값 처리
           */
          this.Session.name = '승아'
          this.Session.user_id = '123213124312412424567'
          this.Session.user_auth_key = 'abcdefghijklmnopqrstuvwxyz0123456789'
          this.Session.Content_Language = 'ko'
          this.Session.device_type = '1002'
          localStorage.setItem('userId', this.Session.user_id)
        }

      }
    },
    setApiUrl() {
      /**
       * 상용 서버 URL 셋팅
       */
      if (this.dev) {
        // this.Session.api_url = 'https://ec2-15-165-50-157.ap-northeast-2.compute.amazonaws.com/'
        this.Session.api_url = 'https://dev.pablo.house/'
      } else {
        this.Session.api_url = 'https://pablo.house/'
      }
    }

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
  width: 192.2rem;
  height: 112.9rem;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}
</style>
