import axios from 'axios'
import store from '../store/store'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export default class WebApi {
  constructor () {
  }

  request (url, config) {
    console.error(url)
    console.error(config)
    return axios({
      url: `http://ec2-15-165-50-157.ap-northeast-2.compute.amazonaws.com:8996/${url}`,

      ...config
    }).then(result => result.data)
      .catch(error => {
        console.log('error from api')
        console.log(error)
        alert(error.message)
        throw new Error(`WebApi ${url} Error!!`)
        // throw new Error(error)
      })
  }

  /**
   * 카테고리 대메뉴 조회
   *
   * <br> - {String}      account     - ID
   *
   */
  getMainmenu (options) {
    // console.log(store.getters.getSession)
    return this.request('api/main/menu', {
      method: 'GET',
      headers: {
        user_id: store.getters.getSession.user_id,
        user_auth_key: store.getters.getSession.user_auth_key,
        device_type: store.getters.getSession.device_type
      }
    })
  }
  /**
   * 진단 테스트 : 주제 조회
   *
   * api/test/subject
   *
   */
  getSubject (options) {
    return this.request('api/test/subject', {
      method: 'GET',
      headers: {
        user_id: store.getters.getSession.user_id,
        user_auth_key: store.getters.getSession.user_auth_key,
        device_type: store.getters.getSession.device_type,
      },
      data: {
        content_language: store.getters.getSession.Content_Language
      }
    })
  }


  /**
   * 사용자 정보 조회
   *
   * 사용자 스테이지 티어 및 정보 조회
   * stageId:int-스테이지ID
   * stageName:String-스테이지명
   * trialRecommendation:String-무료체험 추천여부
   *
   */
  getResult (options) {
    return this.request('api/test/result', {
      method: 'GET',
      headers: {
        user_id: store.getters.getSession.user_id,
        user_auth_key: store.getters.getSession.user_auth_key,
        device_type: store.getters.getSession.device_type
      }
    })
  }



  /**
   * 마이갤러리 정보 조회
   *
   * 마이갤러리 상단 부분의 정보 조회
   * userName:String-스테이지ID
   * backgroundImage:String-배경화면
   * totalCount:String-전체그림수
   * totalSharedCount:String-전체공유그림수
   * totalViewCount:String-전체공유그림조회수
   * totalReactionCount:String-전체공유그림좋아요수
   */
  getUserGallery (options) {
    return this.request('api/users/gallery', {
      method: 'GET',
      headers: {
        user_id: store.getters.getSession.user_id,
        user_auth_key: store.getters.getSession.user_auth_key,
        device_type: store.getters.getSession.device_type
      }
    })
  }
  /**
   * 마이갤러리 : 내 그림 리스트
   *
   * 마이갤러리 이미지 및 음성 정보 조회
   * pictures:List
   */
  getUserGalleryMypicture (options) {
    return this.request('api/users/gallery/mypicture', {
      method: 'GET',
      headers: {
        user_id: store.getters.getSession.user_id,
        user_auth_key: store.getters.getSession.user_auth_key,
        device_type: store.getters.getSession.device_type
      }
    })
  }
  /**
   * 마이갤러리 : 배경변경
   *
   * 마이갤러리 상단 부분의 정보 조회
   * code:String - 코드
   * message:String - 메시지
   */
  getUserGalleryBackground (options) {
    return this.request('api/users/gallery/background', {
      method: 'POST',
      headers: {
        user_id: store.getters.getSession.user_id,
        user_auth_key: store.getters.getSession.user_auth_key,
        device_type: store.getters.getSession.device_type
      }
    })
  }
  /**
   * 마이갤러리 : 그림 삭제
   *
   * 마이갤러리 상단 부분의 정보 조회
   * pictureId:String-그림ID
   */
  getUserGalleryDetele (options) {
    debugger
    return this.request('api/users/gallery/delete', {
      method: 'DELETE',
      headers: {
        user_id: store.getters.getSession.user_id,
        user_auth_key: store.getters.getSession.user_auth_key,
        device_type: store.getters.getSession.device_type,
      },
      data: {
        pictureId : options.pictureId
      }
    })
  }
}
