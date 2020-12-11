import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'
import { routes } from './router/index'
import store from './store/store'
import { BootstrapVue } from 'bootstrap-vue'
import { GlobalUtils } from './utils/globalUtils'
import AudioRecorder from 'vue-audio-recorder'
import AudioVisual from 'vue-audio-visual'
import {Android} from './assets/js/android'
import VueProgress from 'vue-progress'


Vue.config.productionTip = false

Vue.prototype.globalUtils= new GlobalUtils()
Vue.prototype.$EventBus = new Vue();
Vue.prototype.Android = new Android()
Vue.prototype.Router = new Router({ mode : 'history', routes : routes })

Vue.use(BootstrapVue)
Vue.use(AudioRecorder)
Vue.use(AudioVisual)
Vue.use(Router);

const router = new Router({
  mode : 'history',
  routes : routes
});
Vue.use(VueProgress)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.config.devtools = true
