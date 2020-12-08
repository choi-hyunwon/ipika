<template>
  <div class="wrap">

    <div class="cover">
      <div class="guide guide_canvas"><img src="@/assets/images/common/guide@2x.png" alt="" class="img-m"></div>
      <div class="guide test_canvas"><img src="@/assets/images/common/test_guide@2x.png" alt="" class="img-m"></div>
    </div>
    <!--   canvas 헤더 -->
    <CanvasHeader></CanvasHeader>
    <GuideHeader></GuideHeader>
    <!--   wacom 라이브러리 -->
    <Wacom :isLoading="isLoading" :drawer="drawer"></Wacom>

    <!--   진단테스트 canvas 첫 진입시 Alert-->
    <Alert v-if="page==='diagnose'"
            v-slot="slotProps"
            :autoOpen=true
            :text=subject.subject
            :isLoading="isLoading"></Alert>

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
import GuideHeader from '@/components/letter/GuideHeader'


export default {
  name: 'Canvas',
  components :{
    Alert,
    Wacom,
    Confirm,
    CanvasHeader,
    GuideHeader
  },
  data () {
    return {
      isLoading: false,
      drawer : true
    }
  },
  created(){
    this.$EventBus.$on('toggleDrawer', (drawer) => {
      this.drawer = drawer;
    });
    this.$EventBus.$on('back',this.goBack)
    this.$EventBus.$on('close', this.close);
    this.$EventBus.$on('next', this.exportPNG);
  },
  mounted () {
    if (localStorage.getItem('isReload') === 'true' || localStorage.getItem('isReload') === undefined) window.location.reload()
    else {
      this.isLoading = true
      //  todo refs 사용 로딩 완료 시 팝업 노출

    }
    ;(async () => {
      if(this.page ==='diagnose') await this.fetchSubject()
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
    }
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
      getSubject: 'getSubject'
    }),

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
      this.$router.push('/peopleThinking')
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
    async fetchSubject () {
      this.getSubject()
        .then(result => {
          this.setTimeInit(this.subject.limitTime)
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
.test_canvas{
  //display: none;
  display: block;
}
.guide_canvas{
  //display:block;
  display: none;
}
</style>
