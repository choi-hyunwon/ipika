import axios from 'axios'
import store from '../store/store'

axios.defaults.baseURL = 'http://localhost:8001'
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
      data: {
        user_id: store.getters.getSession.user_id,
        user_auth_key: store.getters.getSession.user_auth_key,
        Content_Language: store.getters.getSession.Content_Language,
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
    // console.log(store.getters.getSession)
    return this.request('api/test/subject', {
      method: 'GET',
      data: {
        user_id: store.getters.getSession.user_id,
        user_auth_key: store.getters.getSession.user_auth_key,
        Content_Language: store.getters.getSession.Content_Language,
        device_type: store.getters.getSession.device_type
      }
    })
  }
}
