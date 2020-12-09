<template>
  <div class="wrap">

    <!--   canvas 헤더 -->
    <CanvasHeader></CanvasHeader>

    <!--   wacom 라이브러리 -->
    <Wacom ref="wacom" :isLoading="isLoading" :drawer="drawer"></Wacom>

    <div v-if="bgPopup===true&&page==='diagnose'" class="guide_bg" @click="toggleBg">
      <img src="@/assets/images/common/test_guide@2x.png" alt="" class="img-m">
    </div>
    <div v-if="bgPopup===true&&page==='letter'" class="guide_bg" @click="toggleBg">
      <img src="@/assets/images/common/guide@2x.png" alt="" class="img-m">
    </div>

    <!--   진단테스트 canvas 첫 진입시 Alert-->
    <Alert ref="autoOpen"
            v-if="page==='diagnose'"
            v-slot="slotProps"
            :text=subject.subject></Alert>

    <!--   진단테스트 canvas 타이머 완료 시 popup-->
    <Confirm v-if="page==='diagnose'" ref="timerConfirm"></Confirm>
  </div>
</template>
<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'
import Wacom from '@/components/Wacom'
import Confirm from '@/components/popup/Confirm'
import CanvasHeader from '@/components/CanvasHeader'
import Alert from '@/components/popup/Alert'


export default {
  name: 'Canvas',
  components :{
    Alert,
    Wacom,
    Confirm,
    CanvasHeader
  },
  data () {
    return {
      isLoading: false,
      drawer : true,
      bgPopup : false
    }
  },

  created(){
    this.$EventBus.$on('toggleDrawer', (drawer) => {
      this.drawer = drawer;
    });
    this.$EventBus.$on('back',this.goBack)
    this.$EventBus.$on('close', this.close);
    this.$EventBus.$on('next', this.exportPNG);
    this.$EventBus.$on('bgPopup',this.toggleBg);
    if(this.page==='letter'){
      this.bgPopup = true
    }
  },
  mounted () {
    if (localStorage.getItem('isReload') === 'true' || localStorage.getItem('isReload') === undefined) window.location.reload()
    else {
      this.isLoading = true
      //  todo refs 사용 로딩 완료 시 팝업 노출
    }
    ;(async () => {
      if(this.page ==='diagnose') await this.fetchSubject()
      else if(this.page === 'letter') await this.fetchLetter()
    })()
  },
  computed: {
    ...mapGetters({
      session: 'getSession',
      canvasTimer: 'getCanvasTimer',
      subject : 'getSubject'
    }),
    page() {
      return this.$router.currentRoute.query.page
    }
  },
  watch:{
    'canvasTimer.timeOver':function(){
      if(this.canvasTimer.timeOver===true)
      this.$refs.timerConfirm.showConfirm=true
      this.$refs.timerConfirm.type='timeOut'
    },
    'isLoading':function(){
      if(this.isLoading&&this.page==='diagnose'){
          this.$refs.autoOpen.showAlert=true
          this.$refs.autoOpen.type='diagnose'
      }
    },
  },
  methods: {
    ...mapMutations({
      setTimeInit: 'setTimeInit',
      setTimerStart: 'setTimerStart',
      setTimerReset: 'setTimerReset',
      setTimerPause: 'setTimerPause',
      setTimerResume: 'setTimerResume',
    }),
    ...mapActions({
      getUserInfo: 'getUserInfo',
      getSubject: 'getSubject',
      getLetter : 'getLetter'
    }),
    ttsPlay(tts){
      globalUtils.tts(tts)
    }
    ,
    reload(){
      window.location.reload()
    },
    goNext() {
      this.setTimerReset()
      if (this.page === 'diagnose') {
        this.$router.push('/TestingResult')
      }
      else if (this.page === 'letter') {
        this.$router.push('/Completion')
      }
    },
    goBack(){
      this.$router.push('/Listening')
    },
    close(){
      this.setTimerReset()
      this.$router.push('/')
    },
    popUpOpen(){
      this.setTimerPause()
    },
    hideInfo(e){
      if(e.trigger==="backdrop"||"esc"){
        this.setTimerResume()
      }
    },
    clear(){
      WILL.clear()
      this.$bvModal.hide('clearAllPopup')
      this.setTimerReset()
    },
    exportPNG(e){
      /*WILL.getImageCanvas().toBlob(function(blob) {
        const href = URL.createObjectURL(blob);
        console.log(href)

      });*/
    },
    toggleBg(){
      this.bgPopup = !this.bgPopup;
      if(this.bgPopup===false&&this.page==='diagnose'){
        this.setTimerStart();
      }else if(this.page==='letter'){
        this.bgPopup=false
      }
    },
    async fetchSubject () {
      this.getSubject()
        .then(result => {
          this.setTimeInit(this.subject.limitTime)
        })
    },
    async fetchLetter(){
      this.getLetter()
        .then(result => {

        })
    }
  }
}


</script>

<style lang="scss" scoped>
.guide {
  position: absolute;
  width: 192rem;
  height: 120rem;
  top: 0;
  left: 0;
  z-index: 1111;
  img {
    width: 100%;
    height: 100%;
  }
}
.guide_bg{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>
