import WebApi from '../api/webApi'
import store from '../store/store'

const webApi = new WebApi()

export const actions = {
  getUserInfo ({ commit }, options) {
    let data = {}
    commit('setUserInfo', data.data)
    return data
  },
  getMainMenu ({ commit }, options) {
    console.log(`getMainMenu`)
    return webApi.getMainmenu(options)
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
      return webApi.getSubject(options)
        .then(data => {
          commit('setSubject', data)
          return data
        })
    }
  },
  getResult ({ commit }, options) {
    if (store.getters.getIsDummy) {
      const data = {
        "code": "0000",
        "message": null,
        "stageId": 3,
        "stageName": "Growing-up",
        "trialRecommendation": "Y"
      }
      commit('setResult', data)
      return data
    } else {
      return webApi.getResult(options)
        .then(data => {
          commit('setResult', data)
          return data
        })
    }
  },
  getUesrGallery ({ commit }, options) {
    if (store.getters.getIsDummy) {
      const data = {
        "userName": "궁예",
        "backgroundImage": "/images/users/background/king.png",
        "totalCount": "21",
        "totalSharedCount": "21",
        "totalViewCount": "352",
        "totalReactionCount": "34"
      }
      commit('setUesrGallery', data)
      return data
    } else {
      return webApi.getUesrGallery(options)
        .then(data => {
          commit('setUesrGallery', data)
          return data
        })
    }
  },
  getUesrGalleryMypicture ({ commit }, options) {
    if (store.getters.getIsDummy) {
      const data =    {
        "pictures":[
          {
            "drawingType": 1,
            "stageId": 1,
            "stageName": "Twinkle Stage",
            "stepId": 1,
            "stepName": "4",
            "stepSubject": "사물을 그려보아요.",
            "ideaKeyword": "사과를 그려봅시다.",
            "pictureUrl": "https://vuejs.org/images/logo.png",
            "shareStatus": "Y",
            "viewCount": 23,
            "reactionCount": 6,
            "createdDate": "2020-11-06T18:25:43.511Z",
            "pictureId": "987654321"
          },
          {
            "drawingType": 3,
            "stageId": 0,
            "stageName": null,
            "stepId": 1,
            "stepName": null,
            "stepSubject": null,
            "ideaKeyword": null,
            "pictureUrl": "https://nodejs.org/static/images/logo.svg",
            "shareStatus": "Y",
            "viewCount": 16,
            "reactionCount": 4,
            "createdDate": "2020-11-07T12:25:43.511Z",
            "pictureId": "123465789"
          }
        ],
        "code": "string",
        "message": "string",
        "audio":[
          {
            "audioUrl": "string",
            "createdDate": "2020-11-07T12:25:43.511Z",
            "drawingType": 2,
            "pictureId": 0,
            "stageId": 1,
            "stageName": "Twinkle Stage",
            "stepId": 1,
            "title": "string",
            "userAudioId": 1,
            "userCode": 0
          },
          {
            "audioUrl": "string",
            "createdDate": "2020-11-01T12:25:43.511Z",
            "drawingType": 1,
            "pictureId": 0,
            "stageId": 1,
            "stageName": "Grow Stage",
            "stepId": 1,
            "title": "string",
            "userAudioId": 1,
            "userCode": 0
          },
        ]
      }
      commit('setUesrGalleryMypicture', data)
      return data
    } else {
      return webApi.getUesrGalleryMypicture(options)
        .then(data => {
          commit('setUesrGalleryMypicture', data)
          return data
        })
    }
  },
  getUesrGalleryBackground ({ commit }, options) {
    return webApi.getUesrGalleryBackground(options)
      .then(data => {
        return data
      })
  },
  getUesrGalleryDetele ({ commit }, options) {
    return webApi.getUesrGalleryDetele(options)
      .then(data => {
        return data
      })
  }
}
