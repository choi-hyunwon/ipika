<template>
  <div class="wrap">

    <!-- s guide -->
<!--    <div class="guide"><img src="@/assets/images/common/test_guide@2x.png" alt=""></div>-->
    <!-- E guide -->

    <!-- 진단 테스트 -->
    <div v-if="page === 'diagnose'" class="header canvas">
      <div class="timer red"><!-- 1분 미만일 경우, red 클래스 추가 -->
        <!--        <div class="img"><img src="@/assets/images/common/timer-black@2x.png" alt=""></div>-->
        <div class="img"><img src="@/assets/images/common/timer@2x.png" alt=""></div> <!-- 1분 미만일 경우 -->
        <div class="time">{{timeRemains}}</div>
      </div>
      <div class="symbol">
        <span class="img"><img src="@/assets/images/common/Symbol@2x.png" alt=""></span>
        <span class="text">{{subject.subject}}</span>
      </div>
      <div class="box-close">
        <!--<router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>-->

        <!-- TODO: inline-style 추가함 확인 필요 -->
        <button @click="close" style="padding-top: 0;" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></button>

      </div>
    </div>

    <!-- 학습 -->
    <div v-if="page === 'study'" class="header ivory">

      <!--<router-link to="/thoughtRecords" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></router-link>-->
      <button @click="goBack" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></button>

      <div class="btn-wrap">
        <button><img src="@/assets/images/common/img_delete@2x.png" alt=""></button>
        <button><img src="@/assets/images/common/img_invisible@2x.png" alt=""></button>
        <div class="time">{{ timeRemains }}</div>
      </div>
      <div class="flex-box">
        <button v-b-modal.videoReviewPopup class="btn-right" @click="popUpOpen" >
          <span class="img"><img src="@/assets/images/common/ic-play@2x.png" alt=""></span>
          <span class="tit">영상보기</span>
        </button>

        <button v-b-modal.watchSubject class="btn-right" @click="popUpOpen">
          <span class="img"><img src="@/assets/images/common/drawing@2x.png" alt=""></span>
          <span class="tit">주제보기</span>
        </button>
        <button v-b-modal.studyBookPopup class="btn-right" @click="popUpOpen">
          <span class="img"><img src="@/assets/images/common/ic-img@2x.png" alt="" ></span>
          <span class="tit">배경교재</span>
        </button>
        <div class="box-close">
          <!--<router-link to="" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>-->

          <!-- TODO: inline-style 추가함 확인 필요 -->
          <button @click="close" style="padding-top: 0;" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></button>
        </div>
      </div>
    </div>

    <Wacom :isLoading="isLoading" :drawer="drawer"></Wacom>



    <!-- 진단 테스트 -->
    <!-- s 팝업  -->
<!--    <b-button v-if="page === 'diagnose'"  v-b-modal.normalPopup style="position: absolute; top: 200px; left: 50px;">진단테스트_3_시간 초과 시 1</b-button>-->
    <b-modal v-if="page === 'diagnose'" :visible="timeOver" id="timeoverPopup" centered title="진단테스트 : 타임오버" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/timer@2x.png" alt=""></div>
      </template>
      <p class="text">시간이 초과되었어요!<br/>
        제출하시겠어요?</p>
      <p class="text-sm">다시 그리면 먼저 그린 그림은 사라져요</p>
      <template #modal-footer="{ cancel }">
        <b-button @click="clear" variant="blue" class="btn-half">다시 그릴래요!</b-button>
        <b-button @click="exportPNG" variant="black" class="btn-half">제출할게요</b-button>
      </template>
    </b-modal>

<!--    <b-button v-if="page === 'diagnose'" v-b-modal.normalPopup2 style="position: absolute; top: 200px; left: 200px;">진단테스트_3_시간 초과 시 2</b-button>-->
    <b-modal v-if="page === 'diagnose'||'study'" @show="popUpOpen" @hide="hideInfo" id="clearAllPopup" centered title="진단테스트 : 전체 그림 지우기" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">다시 그리시겠어요?<br/>
        지금 그린 그림이 지워져요</p>
      <p class="text-sm">제출하면 파블로가 그림을 분석할 거예요 :)</p>
      <template #modal-footer="{ cancel }">
        <b-button @click="exportPNG" variant="blue" class="btn-half">제출할게요</b-button>
        <b-button @click="clear" variant="black" class="btn-half">다시 그릴게요!</b-button>
      </template>
    </b-modal>

<!--    <b-button v-if="page === 'diagnose'" v-b-modal.normalPopup3 style="position: absolute; top: 200px; left: 350px;">진단테스트_3_제출팝업</b-button>-->
    <b-modal v-if="page === 'diagnose'||'study'" @hide="timerStart" @show="popUpOpen" id="normalPopup3" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">다 그렸나요?<br/>
        제출하면 수정할 수 없어요!</p>
      <p class="text-sm">더 그리고 싶은 것은 없는지 생각해봐요</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="exportPNG">제출할게요</b-button>
        <b-button variant="black" class="btn-half" @click=cancel >더 그릴게요!</b-button>
      </template>
    </b-modal>

    <!-- s 팝업  -->

<!--    <b-button v-if="page === 'study'" v-b-modal.studyBookPopup style="position: absolute; top: 200px; left: 500px;" @click="popUpOpen">배경교제</b-button>-->
    <b-modal v-if="page === 'study'" :visible="true" @show="popUpOpen" @hide="hideInfo" id="studyBookPopup" centered hide-footer modal-class="studyBookPopup">
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

    <b-modal v-if="page==='diagnose'" :visible="true" @show="popUpOpen" @hide="timerStart" id="oderPopup" centered title="안내" modal-class="textPopup" scrollable ok-only ok-title="네 그려볼게요!" ok-variant="black btn-block">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      </template>
      <p class="text">{{subject.subject}}</p>
      <template #modal-footer="{ cancel }">
        <button size="sm" class="btn btn-black btn-block" @click="cancel()">알겠어요!</button>
      </template>
    </b-modal>
<!-- 주제보기-->
    <b-modal id="watchSubject" centered modal-class="normalPopup" @hide="hideInfo">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/drawing@2x.png" alt=""></div>
      </template>
      <p class="text text-md">학습 주제 영역입니다.<br/>
        학습 주제는 최대 세 문장까지<br/>
        가능합니다.</p>
      <p class="text-sm">생각 제시하는 생각 과제 제시하는 텍스트<br/>
        영역으로 최대 두줄 이상을 생각합니다.</p>
      <template #modal-footer="{ cancel }">
        <b-button class="btn btn-block btn-black" @click="cancel()">닫기</b-button>
      </template>
    </b-modal>

<!--    영상보기-->
    <b-modal id="videoReviewPopup" centered hide-footer modal-class="videoReviewPopup" @hide="hideInfo">
      <template #default="{ hide }">
        <div class="bg"><img src="@/assets/images/temp/sample_img_02.png" alt=""></div>
        <div class="full-screen dim"><!-- 전체 화면시 dim 제거 -->
          <div class="inner">
            <div class="video">
              <p class="text">생각 제시하는 생각 과제 제시하는 텍스트 영역입니다.</p>
              <button class="btn-close" @click="hide()"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
              <!-- s 전체 화면시 hide -->
              <div class="play-wrap">
                <button class="btn-rewind"><img src="@/assets/images/common/5s_rewind@2x.png" alt=""></button>
                <button class="btn-pause"><img src="@/assets/images/common/pause@2x.png" alt=""></button>
                <button class="btn-play"><img src="@/assets/images/common/btn_play@2x.png" alt=""></button>
                <button class="btn-forward"><img src="@/assets/images/common/5s_forward@2x.png" alt=""></button>
              </div>
              <div class="progress-wrap">
                <div class="inner">
                  <span class="time">2:40</span>
                  <div class="progress-inner">
                    <span class="bar" style="width: 30%"></span>
                  </div>
                  <span class="playtime">2:40</span>
                  <button class="btn-full-screen"><img src="@/assets/images/common/btn_full_screen@2x.png" alt="">
                  </button>
                </div>
              </div>
              <!-- e 전체 화면시 hide -->
            </div>
          </div>
          <!-- e 영상 재생 중_화면 탭 시 -->

        </div>
      </template>
    </b-modal>

  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import Wacom from '@/components/Wacom'


export default {
  name: 'Canvas',
  components :{
    Wacom
  },
  data () {
    return {
      isLoading: false,
      timeInitVal: 60*2,
      time: 60*2, // TODO: default 60*2
      timer: null,
      timeOver : false,
      drawer : true,
      subject : {}
    }
  },
  created(){
    this.$EventBus.$on('toggleDrawer', (drawer) => {
      this.drawer = drawer;
    });
  },
  mounted () {
    if (localStorage.getItem('isReload') === 'true' || localStorage.getItem('isReload') === undefined) window.location.reload()
    else this.isLoading = true
    this.timerStart()
    this.fetchSubject()
  },
  computed: {
    ...mapGetters({
      session: 'getSession'
    }),
    page() {
      return this.$router.currentRoute.query.page
    },
    timeSetting(){
      return this.time = this.subject.limitMinute * 60
    },
    timeRemains() {
      let mm = Math.floor(this.time / 60)
      mm = mm < 10 ? '0' + mm : mm
      let ss = this.time % 60
      ss = ss < 10 ? '0' + ss : ss
      return `${mm} : ${ss}`
    }
  },
  methods: {
    ...mapActions({
      getUserInfo: 'getUserInfo',
      getSubject: 'getSubject'
    }),
    reload(){
      window.location.reload()
    },
    timerStart() {
      this.timeOver=false
      this.timer = setInterval(() => {
        if (this.time === 0) {
          this.timeOver=true
          clearInterval(this.timer)
          // if (this.page === 'diagnose') {
          //   this.$router.push('/LoadingSpinnerWaiting')
          // }
          if (this.page === 'study') {
            this.$router.push('/PabloStudy6')
          }
        }
        if(this.time>0){
          this.time--
        }

      }, 1000)
    },
    reset() {
      this.time = this.timeInitVal
      clearInterval(this.timer)
      this.timer = null
    },
    goNext() {
      this.reset()
      if (this.page === 'diagnose') {
        this.$router.push('/LoadingSpinnerWaiting')
      }
      else if (this.page === 'study') {
        this.$router.push('/PabloStudy6')
      }
    },
    goBack(){
      this.reset()
      if (this.page === 'study') {
        this.$router.push('/peopleThinking')
      }
    },
    close(){
      this.reset()
      this.$router.push('/')
    },
    popUpOpen(){
      clearInterval(this.timer)
    },
    reWrite(){
      this.reset()
      this.timerStart()
    },
    hideInfo(e){
      if(e.trigger==="backdrop"||"esc"){
        this.timerStart()
      }
    },
    clear(){
      WILL.clear()
      this.$bvModal.hide('clearAllPopup')
      this.time = 120
    },
    exportPNG(e){
      WILL.getImageCanvas().toBlob(function(blob) {
        const href = URL.createObjectURL(blob);
        console.log(href)
        /**
         * todo : API날리기
         */
      });
      this.goNext()
    },
    // 메인 메뉴 조회
    fetchSubject () {
      this.getSubject()
        .then(result => {
          console.log('fetchSubject :', result)
          if(result !== undefined) this.subject = result;
        })
    }
  }
}

</script>

<style lang="scss" scoped>
.header {
  .btn-wrap {
    position: absolute;
    display: inline-block;
    top: 3rem;
    left: 12rem;
    button {
      display: inline-block;
      width: 12.7rem;
      height: 6rem;
      img {
        width: 100%;
        height: 100%;
      }
      &:first-child {
        margin-right: 1.2rem;
      }
    }
  }
}
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
