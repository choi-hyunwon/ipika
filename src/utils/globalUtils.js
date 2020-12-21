import WebApi from '../api/webApi'

const webApi = new WebApi()

export class GlobalUtils {
  confirm(slotProps,type) {
    slotProps.toggleConfirm(type);
  }
  alert(slotProps,type){
    slotProps.toggleAlert(type)
  }
  tts(sText){
    // if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
    //   alert("이 브라우저는 음성 합성을 지원하지 않습니다.")
    //   return
    // }
    //
    //
    // window.speechSynthesis.cancel()
    // const speechMsg = new SpeechSynthesisUtterance()
    // speechMsg.rate = 1
    // speechMsg.pitch = 1
    // speechMsg.lang = 'ko-KR'
    // speechMsg.text = sText
    // window.speechSynthesis.speak(speechMsg)

    //
    //
    //
    // let options = 'speaker=nara&text=' + sText + '&format=mp3'
    //
    // return webApi.getClovaTTS(options)
    //   .then(data => {
    //     alert(data)
    //
    //     document.getElementById('video').src = data
    //     document.getElementById('video').click()
    //     // this.audio = new Audio(data)
    //     // this.audio.play()
    //   })
  }
}
