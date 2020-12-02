export const mutations = {
  setUserInfo (state, userInfo) {
    state.userinfo = userInfo
  },

  setSession(state, session){
    state.session = {
      ...state.session,
      ...session
    }
  },

}
