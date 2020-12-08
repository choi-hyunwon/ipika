<template>
  <div class="wrap">

    <!-- s guide -->
<!--    <div class="guide"><img src="@/assets/images/common/test_guide@2x.png" alt=""></div>-->
    <!-- E guide -->

    <div class="cover">

    </div>

    <CanvasHeader></CanvasHeader>

<!--   진단테스트 canvas 첫 진입시 Alert-->
    <Alert v-if="page==='diagnose'"
            v-slot="slotProps"
           :autoOpen=true
            text="text"></Alert>
    <Wacom :isLoading="isLoading" :drawer="drawer"></Wacom>
<!--   진단테스트 canvas 타이머 완료 시 popup-->
    <Confirm v-if="page==='diagnose'" ref="timerConfirm"></Confirm>

    <!-- s 팝업  -->
<!--    <b-modal v-if="page === 'diagnose'||'letter'" @hide="setTimerResume" @show="popUpOpen" id="normalPopup3" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">-->
<!--      <template #modal-header>-->
<!--        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>-->
<!--      </template>-->
<!--      <p class="text">다 그렸나요?<br/>-->
<!--        제출하면 수정할 수 없어요!</p>-->
<!--      <p class="text-sm">더 그리고 싶은 것은 없는지 생각해봐요</p>-->
<!--      <template #modal-footer="{ cancel }">-->
<!--        <b-button variant="gray" class="btn-half" @click="exportPNG">제출할게요</b-button>-->
<!--        <b-button variant="black" class="btn-half" @click=cancel >더 그릴게요!</b-button>-->
<!--      </template>-->
<!--    </b-modal>-->
    <!-- s 팝업  -->

    <b-modal v-if="page === 'letter'" :visible="true" @show="popUpOpen" @hide="hideInfo" id="studyBookPopup" centered hide-footer modal-class="studyBookPopup">
      <template #default="{ hide,cancel }">
        <button class="btn-close" @click="hide()"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
        <div class="content">
          <div class="c-header">
            <p class="title">배경교재 선택하기</p>
            <p class="desc">그리고 싶은 배경교재를 선택하고, 캔버스에서 그려보세요!</p>
          </div>
          <div class="c-body">
            <ul class="scroll">
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </b-modal>
    <!-- e 팝업  -->


<!--    <b-modal v-if="page==='diagnose' && isLoading" :visible="true" @show="popUpOpen" @hide="setTimerResume" id="oderPopup" centered title="안내" modal-class="textPopup" scrollable ok-only ok-title="네 그려볼게요!" ok-variant="black btn-block">-->
<!--      <template #modal-header>-->
<!--        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>-->
<!--      </template>-->
<!--      <p class="text">{{subject.subject}}</p>-->
<!--      <template #modal-footer="{ cancel }">-->
<!--        <button size="sm" class="btn btn-black btn-block" @click="cancel()">알겠어요!</button>-->
<!--      </template>-->
<!--    </b-modal>-->

    <!--주제보기-->
<!--    <b-modal id="watchSubject" centered modal-class="normalPopup" @hide="hideInfo">-->
<!--      <template #modal-header>-->
<!--        <div class="symbol"><img src="@/assets/images/common/drawing@2x.png" alt=""></div>-->
<!--      </template>-->
<!--      <p class="text text-md">학습 주제 영역입니다.<br/>-->
<!--        학습 주제는 최대 세 문장까지<br/>-->
<!--        가능합니다.</p>-->
<!--      <p class="text-sm">생각 제시하는 생각 과제 제시하는 텍스트<br/>-->
<!--        영역으로 최대 두줄 이상을 생각합니다.</p>-->
<!--      <template #modal-footer="{ cancel }">-->
<!--        <b-button class="btn btn-block btn-black" @click="cancel()">닫기</b-button>-->
<!--      </template>-->
<!--    </b-modal>-->

    <!--영상보기-->
<!--    <b-modal id="videoReviewPopup" centered hide-footer modal-class="videoReviewPopup" @hide="hideInfo">-->
<!--      <template #default="{ hide }">-->
<!--        <div class="bg"><img src="@/assets/images/temp/sample_img_02.png" alt=""></div>-->
<!--        <div class="full-screen dim">&lt;!&ndash; 전체 화면시 dim 제거 &ndash;&gt;-->
<!--          <div class="inner">-->
<!--            <div class="video">-->
<!--              <p class="text">생각 제시하는 생각 과제 제시하는 텍스트 영역입니다.</p>-->
<!--              <button class="btn-close" @click="hide()"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>-->
<!--              &lt;!&ndash; s 전체 화면시 hide &ndash;&gt;-->
<!--              <div class="play-wrap">-->
<!--                <button class="btn-rewind"><img src="@/assets/images/common/5s_rewind@2x.png" alt=""></button>-->
<!--                <button class="btn-pause"><img src="@/assets/images/common/pause@2x.png" alt=""></button>-->
<!--                <button class="btn-play"><img src="@/assets/images/common/btn_play@2x.png" alt=""></button>-->
<!--                <button class="btn-forward"><img src="@/assets/images/common/5s_forward@2x.png" alt=""></button>-->
<!--              </div>-->
<!--              <div class="progress-wrap">-->
<!--                <div class="inner">-->
<!--                  <span class="time">2:40</span>-->
<!--                  <div class="progress-inner">-->
<!--                    <span class="bar" style="width: 30%"></span>-->
<!--                  </div>-->
<!--                  <span class="playtime">2:40</span>-->
<!--                  <button class="btn-full-screen"><img src="@/assets/images/common/btn_full_screen@2x.png" alt="">-->
<!--                  </button>-->
<!--                </div>-->
<!--              </div>-->
<!--              &lt;!&ndash; e 전체 화면시 hide &ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; e 영상 재생 중_화면 탭 시 &ndash;&gt;-->

<!--        </div>-->
<!--      </template>-->
<!--    </b-modal>-->

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
      subject : {},
    }
  },
  created(){
    this.$EventBus.$on('toggleDrawer', (drawer) => {
      this.drawer = drawer;
    });
    this.$EventBus.$on('back',this.goBack)
    this.$EventBus.$on('close', this.close);
    console.log(this.subject.subject)

  },
  mounted () {
    if (localStorage.getItem('isReload') === 'true' || localStorage.getItem('isReload') === undefined) window.location.reload()
    else this.isLoading = true
    ;(async () => {
      await this.fetchSubject()
    })()
  },
  computed: {
    ...mapGetters({
      session: 'getSession',
      canvasTimer: 'getCanvasTimer',
      // subject : 'getSubject'
    }),

    page() {
      return this.$router.currentRoute.query.page
    },

    // timeOver() {
    //   return this.canvasTimer.timeOver
    // }
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
      setSubject : 'setSubject'
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
        /!**
         * todo : API날리기
         *!/
      });*/
      this.goNext()
    },
    // showConfirm(slotProps,number){
    //   if(number === 1){
    //     slotProps.toggleConfirm('goBack','canvas');
    //   }else if(number === 2){
    //     if(this.time <= 0){
    //       slotProps.toggleConfirm('canvasComplete','canvas');
    //     }
    //   }
    // },


    // TODO::
    // 진단하기 주제 조회
    async fetchSubject () {
      this.getSubject()
        .then(result => {
          console.log('fetchSubject :', result)

          if(result !== undefined) {
            this.subject = result
            this.setSubject(result)
            this.setTimeInit(this.subject.limitTime)
          }
          // this.setTimeInit(result.limitTime)
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
</style>
