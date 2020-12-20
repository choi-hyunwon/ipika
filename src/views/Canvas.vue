<template>
  <div class="wrap">
    <!--   canvas 헤더 -->
    <CanvasHeader v-if="isLoading"></CanvasHeader>
    <!--   wacom 라이브러리 -->
    <Wacom ref="wacom" :drawer="drawer"></Wacom>

    <div v-if="bgPopup===true&&page==='diagnose'" class="guide_bg" @click="toggleGuide">
      <img src="@/assets/images/common/test_guide@2x.png" alt="" class="img-m">
    </div>
    <div v-if="bgPopup===true&&page==='letter'" class="guide_bg" @click="toggleGuide">
      <img src="@/assets/images/common/guide@2x.png" alt="" class="img-m">
    </div>

    <!--  프리드로잉 canvas 첫 진입시 popup -->
    <Register ref="register" v-if="page===''" v-slot="slotProps"/>

    <!--   진단테스트 canvas 첫 진입시 popup-->
    <Alert ref="autoOpen" v-if="page==='diagnose'" :text=subject.subject v-slot="slotProps"/>

    <!--   진단테스트 canvas 타이머 완료 시 popup-->
    <Confirm v-if="page==='diagnose'" ref="timerConfirm"/>

    <!--   진단테스트 드로잉 제출 완료 시 popup-->
    <Alert ref="autoOpenSuccess" v-slot="slotProps" :boldText="'성공적으로 </br> 제출되었어요 :)'" :text="'결과를 확인해보세요'" :buttonText ="'내 스테이지 확인하러 가기'"/>

    <!--   학습 드로잉 제출 완료 시 popup-->
    <Confirm ref="autoOpenLSuccess" v-slot="slotProps" :completeText="`${bg.imageName} 저장되었어요<br> 남은 그림도 더 그려볼까요?`"
             :text="'모든 배경교재를 그려야 학습과정이 완료돼요'" :cancelText = "'아니요'" :okText = "'네'"/>

    <!-- 공통 알림 popup-->
    <Alert ref="commonAlert" v-slot="slotProps" :boldText="'그림이 그려지지 않았어요'" :text="'그림을 시작해 볼까요?'" :buttonText ="'확인'"/>

    <!-- 공통 알림 popup-->
    <Alert ref="submissionFail" v-slot="slotProps" :boldText="'드로잉 제출 실패하였습니다'" :text="'앗! 이런'" :buttonText ="'확인'"/>


  </div>
</template>
<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'
import Wacom from '@/components/Wacom'
import Confirm from '@/components/popup/Confirm'
import CanvasHeader from '@/components/CanvasHeader'
import Alert from '@/components/popup/Alert'
import Register from '@/components/popup/Register'
import store from '@/store/store'

export default {
  name: 'Canvas',
  components :{
    Alert,
    Wacom,
    Confirm,
    Register,
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
    this.$EventBus.$on('main',this.goMain)
    this.$EventBus.$on('back',this.goBack)
    this.$EventBus.$on('close', this.close);
    this.$EventBus.$on('next', this.exportPNG);
    this.$EventBus.$on('free', (title)=> {
      this.freeTitle = title
      this.exportPNG()
    });
    this.$EventBus.$on('bgPopup',this.toggleBg);
    this.$EventBus.$on('freeName',this.setFreeName);
    if(this.page==='letter'){
      this.bgPopup = true
    }
  },
  mounted () {

    if (localStorage.getItem('isReload') === 'true' || localStorage.getItem('isReload') === undefined) window.location.reload()
    else this.isLoading = true

    ;(async () => {
      if(this.page ==='diagnose') await this.fetchSubject()
      else if(this.page === 'letter') await this.fetchLetter()
    })()

    if(this.page === '') this.$EventBus.$emit('showToolBar');
  },
  computed: {
    ...mapGetters({
      session: 'getSession',
      canvasTimer: 'getCanvasTimer',
      subject : 'getSubject',
      letter: 'getLetter',
      bg : 'getBg',
      canvasList : 'getLetterCanvasList'
    }),
    page() {
      return this.$router.currentRoute.query.page || ''
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
      setBg: 'setBg'
    }),
    ...mapActions({
      getSubject: 'getSubject',
      getLetter : 'getLetter',
      getSubmissionLearning : 'getSubmissionLearning',
      getSubmissionFree : 'getSubmissionFree',
      getSubmission : 'getSubmission'
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
      this.$router.push('/Listening')
    },
    goMain(){
      this.$router.push('/PabloMain')
    },
    close(){
      this.setTimerReset()
      this.$router.push('/')
    },
    popUpOpen(){
      this.setTimerPause()
    },
    clear(){
      WILL.clear()
      this.$bvModal.hide('clearAllPopup')
      this.setTimerReset()
    },
    exportPNG(e){
      const self = this;
      WILL.getImageCanvas().toBlob(function(blob) {
        let file = new File([blob], "my_image.png",{type:"image/png", lastModified:new Date()})

        // self.saveFile(URL.createObjectURL(blob))
        //미완성
        if (file.size <= 14500) {
          // alert('아직 그림이 그려지지 않았어요')
          self.$refs.commonAlert.showAlert = true
          self.$refs.commonAlert.type = 'common'
          return false
        }
        //진단학습
        if (self.page === 'diagnose') {
          const data = new FormData()
          data.append('userPicture', blob, 'canvas.png')
          self.fetchSubmission(data) //진단 테스트 드로잉 제출 API
          //학습교제
        } else if (self.page === 'letter') {
          const data = new FormData()
          data.append('stepId', self.letter.stepId )
          data.append('stepPicture', blob, 'canvas.png')
          data.append('imageId', self.bg.imageId)
          self.fetchSubmissionLearning(data) //학습 정보 드로잉 제출 API
          //프리 드로잉
        } else {
          const data = new FormData()
          data.append('title', self.freeTitle || store.getters.getSession.name + ' 프리드로잉')
          data.append('files', blob, 'canvas.png')
          self.fetchSubmissionFree(data) //프리 드로잉 제출 API
        }
      })
    },
    saveFile(href){
      var a = document.createElement("a");
      a.href = href;
      a.download = 'down.png';

      a.appendChild(document.createTextNode('down.png'));
      a.style.display = "none";

      document.body.appendChild(a);
      a.click();

      setTimeout(function() {
        URL.revokeObjectURL(href);
      }, 911);
    },
    toggleBg(){
      this.bgPopup = !this.bgPopup;
      if(this.bgPopup===false&&this.page==='diagnose'){
        this.setTimerStart();
      }else if(this.page==='letter'){
        this.bgPopup=false
        this.setBackgrounImage()
      }
    },
    toggleGuide(){
      this.bgPopup = !this.bgPopup;
      if(this.bgPopup===false&&this.page==='diagnose'){
        this.setTimerStart();
      }else if(this.page==='letter'){
        this.bgPopup=false
        this.setBackgrounImage()
      }
      this.$EventBus.$emit('showToolBar');
    },

    setFreeName(){
      this.$refs.register.showRegister=true
    },
    async fetchSubject () {
      this.getSubject()
        .then(result => {
          this.setTimeInit(this.subject.limitTime)
        })
    },
    async fetchLetter(){
      this.getLetter()
    },
    fetchSubmission(data){
      const self = this;
      this.getSubmission(data)
        .then(result => {
          if(result.code === '0000') {
            this.$refs.autoOpenSuccess.showAlert = true
            this.$refs.autoOpenSuccess.type = 'success'
          } else alert(`code : ${result.code} message : ${result.message}`)
        })
    },
    fetchSubmissionLearning(data){
      const self = this;
      this.getSubmissionLearning(data)
        .then(result => {
          if(result.code === '0000') {
            if(this.canvasList.length === 1) {
              this.getLetter()
                .then( result => {
                  this.setBg({reset : true})
                  this.$router.push('/Completion')
                })
            } else {
              this.$refs.autoOpenLSuccess.showConfirm = true
              this.$refs.autoOpenLSuccess.type = 'success'
            }
          } else {
            // alert('드로잉 제출 실패')
            this.$refs.submissionFail.showConfirm = true
            this.$refs.submissionFail.type = 'common'
          }
        })
    },
    fetchSubmissionFree(data){
      const self = this;
      this.getSubmissionFree(data)
        .then(result => {
          if(result.code === '0000') {
            self.$router.push('/Recording?page=free&freeTitle='+this.freeTitle)
          } else {
            // alert('드로잉 제출 실패')
            self.$refs.submissionFail.showAlert = true
            self.$refs.submissionFail.type = 'common'
          }
        })
    },
    setBackgrounImage(){
      // WILL.setBackground(this.canvasList[0].tabletImageUrl, 'url')
      // this.bg.imageId = this.canvasList[0].imageId
      // this.bg.imageName = this.canvasList[0].imageName

      WILL.clear()
      this.$EventBus.$emit('setBg', this.canvasList[0] , false)

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
