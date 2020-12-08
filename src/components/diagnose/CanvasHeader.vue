<template>
  <div class="header canvas">
    <div class="timer" :class="{'red' : canvasTimer.time < 60}"><!-- 1분 미만일 경우, red 클래스 추가 -->
      <div class="img">
        <img v-if="canvasTimer.time >= 60" src="@/assets/images/common/timer-black@2x.png" alt="">
        <img v-else src="@/assets/images/common/timer@2x.png" alt="">
      </div>
      <div class="time">{{ time }}</div>
    </div>
    <div class="symbol">
      <span class="img"><img src="@/assets/images/common/Symbol@2x.png" alt=""></span>
      <span class="text">{{subject.subject}}</span>
    </div>
    <div class="box-close">
      <!-- TODO: inline-style 추가함 확인 필요 -->
      <button @click="close" style="padding-top: 0;" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CanvasHeader',
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
      return this.canvasTimer.timeInitVal
    },
    time() {
      let mm = Math.floor(this.canvasTimer.time / 60)
      mm = mm < 10 ? '0' + mm : mm
      let ss = this.canvasTimer.time % 60
      ss = ss < 10 ? '0' + ss : ss
      return `${mm} : ${ss}`
    },
  },
  methods: {
    close() {
      this.$EventBus.$emit('close')
    },
  }
}
</script>

<style scoped>

</style>
