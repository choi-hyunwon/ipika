export const actions = {
  getUserInfo ({ commit }, options) {
    let data = {}
    commit('setUserInfo', data.data)
    return data.result
  },
  getMygallery ({ commit }, options) {
    let data = {}
    commit('setMygallery', data.data)
    return data.result
  }
}
