import axios from 'axios'
import store from '../store/store'

export default class WebApi {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
  }

  request (url, config) {
    if (store.getters.getSession.user_id === ""){
      // alert('user_id 가 유효하지 않습니다.')
      const Vari = window.android.getInitVariables()
      // const Vari = '{"grade":"5","name":"홈런******","user_id":"1954536","user_auth_key":"V01a1eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1YmlwMDEiLCJ1c2VySWQiOjIwNTkzNTYsImxvZ2luQXMiOmZhbHNlLCJpYXQiOjE2MDgwMzQ1NjQsImV4cCI6MTYwODYzOTM2NH0.qgXxkRvDh6vdVsthFaXV9egKquReHF6Y3VoB1hY_12cbC5aoiSYFW5A5NO8wvbBzriNUncApkmqqdSHHRFYCGw","device_type":"1002"}'
      const obj = JSON.parse(Vari)
      store.getters.getSession.user_id = obj.user_id
      store.getters.getSession.user_auth_key = obj.user_auth_key
      store.getters.getSession.device_type = obj.device_type
      store.getters.getSession.name = obj.name
    }

    return axios({
      // url: store.getters.getSession.api_url + url,
      url : `https://pablo.house/${url}`,
      headers: {
        user_id: store.getters.getSession.user_id,
        user_auth_key: store.getters.getSession.user_auth_key,
        device_type: store.getters.getSession.device_type
      },
      ...config
    }).then(result => result.data)
      .catch(error => {
        console.log('error from api')
        console.log(error)
        // alert('error from API')
        // alert(error.message)
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
      data: {}
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
      data: {}
    })
  }

  /**
   * 진단테스트 : 결과 조회 (홈 화면 분기 처리 시 사용)
   *
   * api/test/result
   *
   */
  getDiagnoseResult (options) {
    return this.request('api/test/result', {
      method: 'GET',
      data: {}
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
      data: {}

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
      data: {}
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
      data: options
    })
  }

  /**
   * 마이갤러리 : 그림 삭제
   *
   * 마이갤러리 상단 부분의 정보 조회
   * pictureId:String-그림ID
   */
  getUserGalleryDetele (data) {
    return this.request('api/users/gallery/picture', {
      method: 'DELETE',
      data:data
    })
  }
  /**
   * 마이갤러리 : 오디오 삭제
   *
   * 마이갤러리 상단 부분의 정보 조회
   * pictureId:String-그림ID
   */
  getUserAudioDetele (data) {
    return this.request('api/users/gallery/audio', {
      method: 'DELETE',
      data:data
    })
  }


  /**
   * 학습 : 학습 정보 조회
   *
   * api/learning/info
   *
   */
  getLetter (options) {
    return this.request('api/learning/info', {
      method: 'GET',
      data: {}
    })
  }

  /**
   * 진단테스트 : 드로잉제출
   *
   * api/test/submission
   *
   */
  getSubmission (data) {
    return this.request('api/test/submission', {
      method: 'POST',
      data: data
    })
  }
  /**
   * 학습 : 드로잉제출
   *
   * api/learning/submission
   *
   */
  getSubmissionLearning (data) {
    return this.request('api/learning/submission', {
      method: 'POST',
      data: data
    })
  }
  /**
   * 학습 : 드로잉제출
   *
   * api/learning/submission
   *
   */
  getSubmissionFree (data) {
    return this.request('api/drawing/register', {
      method: 'POST',
      data: data
    })
  }



  /**
   * 학습정보: 생각녹음
   *
   * api/learning/recording
   *
   */
  getRecording (options) {
    return this.request('api/learning/recording', {
      method: 'POST',
      data: options
    })
  }

  /**
   * 전역 : TTS
   *
   * 네이버 크로버 TTS
   *
   */
  getClovaTTS (options) {
    return this.request('tts-premium/v1/tts', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'X-NCP-APIGW-API-KEY-ID': '0d5rxee0gt',
        'X-NCP-APIGW-API-KEY': 'uKcIGuao7nWRbkJIxnT5t8wAuW18SAGifKRrU2Gh'
      },
      data: options
    })
  }
}
