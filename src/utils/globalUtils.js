export class GlobalUtils {
  confirm(slotProps,type) {
    slotProps.toggleConfirm(type);
  }
  alert(slotProps,type){
    slotProps.toggleAlert(type)
  }
  tts(text){
    if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
      alert("이 브라우저는 음성 합성을 지원하지 않습니다.")
      return
    }
    window.speechSynthesis.cancel()
    const speechMsg = new SpeechSynthesisUtterance()
    speechMsg.rate = 1
    speechMsg.pitch =  1
    speechMsg.lang = 'ko-KR'
    speechMsg.text = text
    window.speechSynthesis.speak(speechMsg)
  }
  ttsReader(tts){
    this.tts(tts)
  }
}
