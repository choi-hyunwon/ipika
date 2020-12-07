import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { BootstrapVue } from 'bootstrap-vue'
import { GlobalUtils } from './utils/globalUtils'
import AudioRecorder from 'vue-audio-recorder'
import AudioVisual from 'vue-audio-visual'

Vue.config.productionTip = false

Vue.prototype.globalUtils= new GlobalUtils()
Vue.prototype.$EventBus = new Vue();

Vue.use(BootstrapVue)
Vue.use(AudioRecorder)
Vue.use(AudioVisual)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.config.devtools = true
