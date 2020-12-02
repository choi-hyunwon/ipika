
export class TTS {
  speak(text){
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
}
