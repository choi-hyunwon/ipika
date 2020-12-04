import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { BootstrapVue } from 'bootstrap-vue'
import { TTS } from './utils/tts'
import { Popup } from './utils/popup'

Vue.config.productionTip = false

Vue.prototype.tts = new TTS()
Vue.prototype.showPopup = new Popup()
Vue.prototype.$EventBus = new Vue();

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.config.devtools = true
