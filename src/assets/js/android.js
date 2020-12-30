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
   * 안드로이드 로그 사용
   */
  setLog (data) {
    var broadcastAction = "com.homelearn.xcaliper.web"
    // var action = "AppEnded"
    // var edApp = "Pablo"

    try{
      window.android.callBroadcast(broadcastAction, data)
    } catch(error){
      console.log('안드로이드 로그 에러')
    }
  }

  tts(text){
    try{
      window.android.sendTTS(text)
    } catch (e){
      console.log('TTS error')
      console.log(text)
    }
  }


  /**
   * 안드로이드 초기값 실행
   * @param data
   */
  getInitVariables(){
    // return '{"grade":"5","name":"홈런******","user_id":"1954536","user_auth_key":"V0147eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlY290ZXN0MiIsInVzZXJJZCI6MTk1NDUzNiwibG9naW5BcyI6ZmFsc2UsImlhdCI6MTYwNzk0ODgwOCwiZXhwIjoxNjA4NTUzNjA4fQ.sTVDmHc-j68H5mbkGBKQFEbk3B-y7eKHNG4PgBbzzuiCTvsXqwt5mARkl63c2C8D1bXZ-LPVizvdHUTIntf0VQ","device_type":"1002"}'
    return  window.android.getInitVariables();
  }
  /**
   * Native -> WebView로 Back버튼 선택 시 onBackPressed() 함수 호출
   * @param data
   */
  onBackPressed(){
    //메인 홈인 경우 exit
    if ( location.pathname.containsIgnoreCase("Main") || location.pathname == "/" ){
      window.android.exit()
    } else {
      Vue.prototype.Router.go(-1)
    }
  }


  /**
   * onChangedVolume
   * @param curVolume
   */
  onChangedVolume(event) {
    if (event === 'up') {
      //  mute log
      if (Vue.$store.state.volume < 1) {
        Vue.$store.state.volume = Vue.$store.state.volume + 0.1
      }
    } else if (event === 'down') {
      //소리가 있을때
      if (Vue.$store.state.volume > 0) {
        Vue.$store.state.volume = Vue.$store.state.volume - 0.1
      }
    }
  }
}
