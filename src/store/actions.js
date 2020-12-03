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
      webApi.getResult(options)
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
      webApi.getUesrGallery(options)
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
            "userPicture": "http:///images/users/gallery/20201106_0023.png",
            "shareStatus": "Y",
            "viewCount": 23,
            "reactionCount": 6,
            "createdDate": "2020-11-06T18:25:43.511Z"
          },
          {
            "drawingType": 3,
            "stageId": 0,
            "stageName": null,
            "stepId": 1,
            "stepName": null,
            "stepSubject": null,
            "ideaKeyword": null,
            "userPicture": "http://cdn.mcocoa.com/edu//images/users/gallery/20201107_0032.png",
            "shareStatus": "Y",
            "viewCount": 16,
            "reactionCount": 4,
            "createdDate": "2020-11-07T12:25:43.511Z"
          }
        ],
        "audio":[
          {
            "userAudioId": 1,
            "audioUrl": "http://cdn.mcocoa.com/audio/20201106_0023.mp3",
            "createdDate": "2020-11-06T18:25:43.511Z"
          },
          {
            "userAudioId": 3,
            "audioUrl": "http://cdn.mcocoa.com/audio/20201106_0024.mp3",
            "createdDate": "2020-11-07T12:25:43.511Z"
          }
        ]
      }
      commit('setUesrGalleryMypicture', data)
      return data
    } else {
      webApi.getUesrGalleryMypicture(options)
        .then(data => {
          commit('setUesrGalleryMypicture', data)
          return data
        })
    }
  },
  getUesrGalleryBackground ({ commit }, options) {
    webApi.getUesrGalleryBackground(options)
      .then(data => {
        return data
      })
  },
  getUesrGalleryDetele ({ commit }, options) {
    webApi.getUesrGalleryDetele(options)
      .then(data => {
        return data
      })
  }
}
