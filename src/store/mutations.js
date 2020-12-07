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
  },


  /* timer */
  setTimeInit (state, timeInitVal) {
    state.canvasTimer.timeInitVal = timeInitVal
    state.canvasTimer.time = timeInitVal
    // console.log('\nsetTimeInit..')
    // console.log(JSON.stringify(state.canvasTimer))
  },
  setTimerStart (state) {
    state.canvasTimer.timeOver = false
    state.canvasTimer.time = state.canvasTimer.timeInitVal
    console.error("&&&&&&&&&&&&&&&&&&&&&&&&")
    console.error(state.canvasTimer.timeOver)
    state.canvasTimer.timer = setInterval(() => {
      if (state.canvasTimer.time === 0) {
        console.error("#########################")
        console.error(state.canvasTimer.timeOver)
        state.canvasTimer.timeOver = true
        console.error("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        console.error(state.canvasTimer.timeOver)
        clearInterval(this.timer)
      }
      if (state.canvasTimer.time > 55) {
        state.canvasTimer.time--
      }
    }, 1000)
  },

  setTimerReset (state) {
    state.canvasTimer.time = state.canvasTimer.timeInitVal
    clearInterval(state.canvasTimer.timer)
    state.canvasTimer.timer = null
  },

  setTimerPause (state) {
    clearInterval(state.canvasTimer.timer)
  },

  setTimerResume (state) {
    state.canvasTimer.timer = setInterval(() => {
      if (state.canvasTimer.time === 0) {
        state.canvasTimer.timeOver = true
        clearInterval(state.canvasTimer.timer)
      }
      if (state.canvasTimer.time > 0) {
        state.canvasTimer.time--
      }
    }, 1000)
  },
  /* // timer */
}
