import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: {
      name: '길동아',
      key: '',
      grade: {
        stage: '',
        program: '',
        age: 0
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
