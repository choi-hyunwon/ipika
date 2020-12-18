<template>
  <div class="header canvas">
    <div class="timer" :class="{'red' : canvasTimer.time <= 10}"><!-- 1분(10초로 변경) 미만일 경우, red 클래스 추가 -->
      <div class="img">
        <img v-if="canvasTimer.time > 10" src="@/assets/images/common/timer-black@2x.png" alt="">
        <img v-else src="@/assets/images/common/timer@2x.png" alt="">
      </div>
      <div class="time">{{ time }}</div>
    </div>
    <div class="symbol" >
      <span class="img"><img src="@/assets/images/common/Symbol@2x.png" alt=""></span>
      <span class="text">{{subject.subject}}</span>
    </div>
    <div class="box-close">
      <Confirm v-slot="slotProps"
               :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`"
               :cancelText="`아니요`"
               :okText="`네`">
        <button @click="globalUtils.confirm(slotProps,'checkRed')" style="padding-top: 0;" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></button>
      </Confirm>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import Confirm from '@/components/popup/Confirm'

export default {
  name: 'DiagnoseCanvasHeader',
  components: {Confirm },
  data(){
    return{
    }
  },
  computed: {
    ...mapGetters({
      canvasTimer: 'getCanvasTimer',
      subject : 'getSubject'
    }),
    timeInit() {
      return this.canvasTimer.timeInitVal()
    },
    time() {
      let mm = Math.floor(this.canvasTimer.time / 60)
      mm = mm < 10 ? '0' + mm : mm
      let ss = this.canvasTimer.time % 60
      ss = ss < 10 ? '0' + ss : ss
      return `${mm} : ${ss}`
    },
  }
}
</script>

<style scoped>

</style>
