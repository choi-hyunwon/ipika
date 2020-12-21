import WebApi from '../api/webApi'

const webApi = new WebApi()

export const actions = {
  getUserInfo ({ commit }, options) {
    let data = {}
    commit('setUserInfo', data.data)
    return data
  },
  getMainMenu ({ commit }, options) {
    return webApi.getMainmenu(options)
      .then(data => {
        return data
      })
  },
  getSubject ({ commit }, options) {
    return webApi.getSubject(options)
      .then(data => {
        commit('setSubject', data)
      })
  },
  getResult ({ commit }, options) {
    return webApi.getDiagnoseResult(options)
      .then(data => {
        return data
      })
  },
  getDiagnoseResult ({ commit }, options) {
    return webApi.getDiagnoseResult(options)
      .then(data => {
        return data.code
      })
  },
  getUserGallery ({ commit }, options) {

    return webApi.getUserGallery(options)
      .then(data => {
        commit('setUserGallery', data)
        return data
      })
  },
  getUserGalleryMypicture ({ commit }, options) {
    return webApi.getUserGalleryMypicture(options)
      .then(data => {
        commit('setUserGalleryMypicture', data)
        return data
      })
  },
  getUserGalleryBackground ({ commit }, options) {
    return webApi.getUserGalleryBackground(options)
      .then(data => {
        return data
      })
  },
  getUserGalleryDetele ({ commit }, options) {
    return webApi.getUserGalleryDetele(options)
      .then(data => {
        return data
      })
  },
  getUserAudioDetele ({ commit }, options) {
    return webApi.getUserAudioDetele(options)
      .then(data => {
        return data
      })
  },
  getLetter ({ commit }, options) {
    return webApi.getLetter(options)
      .then(data => {

        data.canvasList = data.canvasList.sort(function (a, b) { // 오름차순
          return a.createdDate > b.createdDate ? -1 : a.createdDate > b.createdDate ? 1 : 0
        })


        commit('setLetter', data)

        /* TODO: API 조회 예외 처리 필요 */
        // 영상 재생을 위한 임시 코드
        console.log('data.stepVideoUrl from actions > getLetter')
        console.log(data)
        if (!data.stepVideoUrl) {
          data.stepVideoUrl = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4'
          data.stepVideoThumnailUrl = 'https://dummyimage.com/640x360/000000/fff&text=Thumbnail'
        }

        commit('setPlayerUrl', {
          sources: [{ src: data.stepVideoUrl }],
          Thumnail: data.stepVideoThumnailUrl
        })

        return data
      })
  },
  getSubmission ({ commit }, options) {
    return webApi.getSubmission(options)
      .then(data => {
        commit('setSubmission', data)
        return data
      })
  },
  getSubmissionLearning ({ commit }, options) {
    return webApi.getSubmissionLearning(options)
      .then(data => {
        return data
      })
  },
  getSubmissionFree ({ commit }, options) {
    return webApi.getSubmissionFree(options)
      .then(data => {
        return data
      })
  },

  getRecording ({ commit }, options) {
    return webApi.getRecording(options)
      .then(data => {
        commit('setUserAudio', data)
        return data
      })
  },
  getClovaTTS ({ commit }, options) {
    return webApi.getClovaTTS(options)
      .then(data => {
        console.log('getClovaTTS')
        return data
      })
  }
}
