import axios from 'axios'
import { store } from '../store/store'

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
  getMainmenu () {
    debugger;
    return this.request(`/api/main/menu`, {
      method: 'GET',
      data: {
        user_id: store.getters.getSession.user_id,
        SystemCode: store.getters.getSession.CP,
        StoreCode: store.getters.getSession.TM,
        TerminalCode: store.getters.getSession.TM,
        QrCode: store.getters.getSession.DATA,
        SendUniqueCode: store.getters.getSession.UniqueCode,
      }
    })
  }
}
