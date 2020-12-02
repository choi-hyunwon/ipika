import WebApi from '../api/webApi'
import {store} from '../store/store';
const webApi = new WebApi();

export const actions = {
  getUserInfo ({ commit }, options) {
    let data = {}
    commit('setUserInfo', data.data)
    return data.result
  },
  getMainMenu ({ commit }, options) {
    debugger
    console.log(options)
    // webApi.getMainmenu(options)
    //   .then(data => {
    //     commit('setCategoryItems', data)
    //     return data
    //   })
  }
}
