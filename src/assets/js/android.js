import Vue from 'vue'

export class Android {
  /**
   * 안드로이드 앱 종료
   * @param data
   */
  appExit(){
    window.android.exit();
  }
  /**
   * 안드로이드 초기값 실행
   * @param data
   */
  getInitVariables(){
    return  window.android.getInitVariables();
  }
  /**
   * Native -> WebView로 Back버튼 선택 시 onBackPressed() 함수 호출
   * @param data
   */
  onBackPressed(){
    //todo : 메인 홈인 경우 exit
    Vue.prototype.Router.go(-1)
  }
}
