import WebApi from '../api/webApi'
import store from '../store/store'

const webApi = new WebApi()

export const actions = {
  getUserInfo ({ commit }, options) {
    let data = {}
    commit('setUserInfo', data.data)
    return data.result
  },
  getMainMenu ({ commit }, options) {
    console.log(`getMainMenu`)
    webApi.getMainmenu(options)
      .then(data => {
        commit('setCategoryItems', data)
        return data
      })
  },
  getSubject ({ commit }, options) {
    if (store.getters.getIsDummy) {
      const data = {
        code: '0000',
        message: '',
        subject: '5 분안에 자유롭게 나무를 그려보세요.',
        limitMinute: 5
      }
      commit('setSubject', data)
      return data
    } else {
      webApi.getSubject(options)
        .then(data => {
          commit('setSubject', data)
          return data
        })
    }
  }
}
