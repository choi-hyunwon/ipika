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
  setUesrGallery (state, userGallery) {
    state.userGallery = userGallery
  },
  setUesrGalleryMypicture (state, mypicture) {
    state.uesrGalleryMypicture = mypicture
  }
}
