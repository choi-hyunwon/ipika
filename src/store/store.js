import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'

Vue.use(Vuex)

/**
 * Vue의 상태관리를 담당함
 * 컴포넌트 간의 통신이나 데이터 전달을 좀 더 유기적으로 관리
 * 컴포넌트 간 데이터 전달 및 이벤트 통신 등의 여러 컴포넌트의 공통 데이터 상태를 관리함
 */
export const store = new Vuex.Store({
  /**
   * global로 사용하는 state
   * component 간 공유될 전역 data를 관리
   * 예)
   * this.$store.state.CONSTANTS;
   */
  state: {
    userinfo: {
      name: '길동아',
      key: '',
      grade: {
        stage: '',
        program: '',
        age: 0
      }
    },
    session: {
      user_id: 'testplan56',
      user_auth_key: 'abcdefghijklmnopqrstuvwxyz0123456789',
      Content_Language: 'ko',
      device_type: '1001'
    }
  },
  /**
   * global로 사용하는 getters
   * 각 컴포넌트에서 Vuex의 데이터를 접근할 때 중복된 코드를 반복호출 하게 될 때 여기서 정의 해 중복을 없앤다.
   * 데이터 호출에 관련된 중복 공통 로직이 정의 됨
   * 예)
   * this.$store.getters.CONSTANTS
   */
  getters: {
    getUserInfo: state => {
      return state.userinfo
    },
    getSession: state => {
      return state.session
    }
  },
  /**
   * global로 사용하는 Mutations
   */
  mutations: mutations,
  /**
   * global로 사용하는 Actions
   */
  actions: actions
})
