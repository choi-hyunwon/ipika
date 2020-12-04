import store from '../store/store'

export default{
  install(Vue){
    /**
     * 안드로이드 앱 종료
     * @param data
     */
    Vue.prototype.$appExit = function(data){
      window.android.exit();
    }
    /**
     * 안드로이드 초기값 실행
     * @param data
     */
    Vue.prototype.$getInitVariables = function(data){
      store.state.userInfo = window.android.getInitVariables();
    }


    Vue.prototype.$onBackPressed = function(data){
      //Native -> WebView로 Back버튼 선택 시 onBackPressed() 함수 호출
      //todo : @최현원 함수 생성 필요
    }


  }
}
