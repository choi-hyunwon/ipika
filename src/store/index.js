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
    changeGrade (state, payload) {
      const age = payload
      const user = state.userinfo.grade
      switch (age) {
        case '3' :
        case '4' :
          user.stage = 'twinkle'
          user.program = '1'
          user.age = age
          break
        case '5' :
        case '6' :
          user.stage = 'Curios'
          user.program = '2'
          user.age = age
          break
        case '7' :
        case '8' :
          user.stage = 'Growing-up'
          user.program = '3'
          user.age = age
          break
        case '9' :
        case '10' :
          user.stage = 'Artist'
          user.program = '4'
          user.age = age
          break
        case '11' :
        case '12' :
        case '13' :
          user.stage = 'Creator'
          user.program = '5'
          user.age = age
          break
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
