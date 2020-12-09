import axios from 'axios'
import store from '../store/store'

export default class WebApi {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
  }

  request (url, config) {
    return axios({
      url: `http://ec2-15-165-50-157.ap-northeast-2.compute.amazonaws.com:8996/${url}`,
      headers: {
        user_id: store.getters.getSession.user_id,
        user_auth_key: store.getters.getSession.user_auth_key,
        device_type: store.getters.getSession.device_type
      },
      ...config
    }).then(result => result.data)
      .catch(error => {
        // TODO 이미지 추룰 성공 후 해당 로직 제거 필요
        if(store.getters.getTest) {
          return {
            "code": "0000",
            "message": "",
            "stageId": 1,
            "stageName": "트윙클",
            "trialRecommendation": "Y",
            "mainTitle": "정윤님의 Ai Pablo 분석 결과는 <br>무의식의 세계 <br>트윙클 스테이지입니다.",
            "subTitle": "트윙클 스테이지에서는 반짝이는 상상력과<br>눈과 손의 협응력이 향상되며 자신감을 얻습니다."
          }
        }else{
          return {
            "code": "0001"
          }
        }
       /* console.log('error from api')
        console.log(error)
        alert(error.message)
        throw new Error(`WebApi ${url} Error!!`)
        // throw new Error(error)*/
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
      data: {}
    })
  }

  /**
   * 마이갤러리 : 그림 삭제
   *
   * 마이갤러리 상단 부분의 정보 조회
   * pictureId:String-그림ID
   */
  getUserGalleryDetele (options) {
    return this.request('api/users/gallery/delete/5', {
      method: 'DELETE',
      data: {
        pictureId: options.pictureId
      }
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
  getSubmission (options) {
    return this.request('api/test/submission', {
      method: 'POST',
      data: options
    })
  }
  /**
   * 학습 : 드로잉제출
   *
   * api/learning/submission
   *
   */
  getSubmissionLearning (options) {
    return this.request('api/learning/submission', {
      method: 'POST',
      data: options
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
}
