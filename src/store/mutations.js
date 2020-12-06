export const mutations = {
  setUserInfo (state, userInfo) {
    state.userinfo = userInfo
  },
  setSession (state, session) {
    state.session = {
      ...state.session,
      ...session
    }
  },
  setSubject (state, subject) {
    state.subject = subject
  },
  setResult (state, result) {
    state.result = result
  },
  setUserGallery (state, userGallery) {
    state.userGallery = userGallery
  },
  setUserGalleryMypicture (state, mypicture) {
    state.UserGalleryMypicture = mypicture
  }
}
