<template>
  <div>
    <slot :toggleConfirm="toggleConfirm"></slot>
    <b-modal no-close-on-backdrop ref="confirmModal" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup" v-model="showConfirm">
      <!--  header -->
      <template #modal-header>
        <div class="symbol">
          <img src="@/assets/images/common/check_red@2x.png" alt="">
        </div>
      </template>

      <!--     본문  -->
      <template>
        <p class="text" v-html="type === 'Refresh' || type === 'Complete' ? timeOut.completeText : completeText"></p>
        <p class="text-sm" v-html="text"></p>
      </template>

      <!--  footer  -->
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancelBtn">{{type === 'Refresh' || type === 'Complete' ? timeOut.cancelText : cancelText}}</b-button>
        <b-button variant="black" class="btn-black btn-half" @click="okBtn">{{type === 'Refresh' || type === 'Complete' ? timeOut.okText :okText}}</b-button>
      </template>
    </b-modal>

    <b-modal v-if="type === 'timeOut'" no-close-on-backdrop id="timeoverPopup" centered title="진단테스트 : 타임오버" modal-class="normalPopup" v-model="showConfirm">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/timer@2x.png" alt=""></div>
      </template>
      <p class="text">시간이 초과되었어요!<br/>이대로 그림을 제출할까요?</p>
      <p class="text-sm"></p>
      <template #modal-footer="{ cancel }">
        <b-button @click="cancelBtn" variant="gray" class="btn-half">아니오</b-button>
        <b-button @click="okBtn" variant="black" class="btn-half">제출하기</b-button>
      </template>
    </b-modal>

    <b-modal v-if="type === 'background'"  id="studyBookPopup" centered hide-footer modal-class="studyBookPopup" v-model="showConfirm">
      <template #default="{ hide,cancel }">
        <button class="btn-close" @click="cancel()"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
        <div class="content">
          <div class="c-header">
            <p class="title">배경교재 선택하기</p>
            <p class="desc">그리고 싶은 배경교재를 선택하고, 캔버스에서 그려보세요!</p>
          </div>
          <div class="c-body">
            <ul class="scroll">
              <li @click="setBg(canvas, false)" v-for="(canvas, i) in canvasList">
                <div>
                  <span class="img"><img :src=canvas.tabletImageUrl alt=""></span>
                  <span class="tit-sm">{{canvas.imageName}}</span>
                  <span class="tit">{{canvas.imageSubject}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
  name: 'Confirm',
  watch: {
    'showConfirm' : function (val) {
      this.$EventBus.$emit('popupOpen', val)
    },
  },
  data(){
    return{
      showConfirm : false,
      autoModal : false,
      type : "",
      timeOut : {
        completeText : '',
        cancelText : '다시그리기',
        okText : '제출하기'
      }
    }
  },
  created () {

  },
  computed:{
    ...mapGetters({
      getCanvasTimer : 'getCanvasTimer',
      canvasList : 'getLetterCanvasList',
      bg : 'getBg'
    }),
    timeOver(){
      return this.getCanvasTimer.timeOver
    }
  },
  props:{
    okText: {
      String,
      default(){return ''}
    },
    text:{
      String,
      default(){return''}
    },
    cancelText : {
      String,
      default(){return ''}
    },
    backText : {
      String,
      default(){return ''}
    },
    completeText: {
      String,
      default () {return ''}
    },
    autoOpen:{
      Boolean,
      default(){return false}
    }
  },
  methods: {
    ...mapMutations({
      setTimeInit: 'setTimeInit',
      setTimerReset: 'setTimerReset',
      setTimerStart: 'setTimerStart',
      setTimerPause: 'setTimerPause',
      setTimerResume: 'setTimerResume'
    }),
    toggleConfirm (type, topic) {
      this.showConfirm = !this.showConfirm;
      this.type = type;
      this.setTimerPause()
    },
    goMain () {
      this.$EventBus.$emit('main')
    },
    goBack () {
      this.$EventBus.$emit('back')
    },
    goToNext () {
      this.showConfirm = false
      this.$EventBus.$emit('next')
    },
    clear () {
      WILL.clear()
      this.showConfirm = false
      this.setTimerReset();
      this.setTimerStart();
    },
    modalCancel () {
      this.showConfirm = false
      this.setTimerResume();
    },
    okBtn () {
      if (this.type === 'goBack') {
        this.goBack()
      } else if (this.type === 'goMain') {
        this.goMain()
      } else if (this.type === 'Complete' || this.type === 'diagnose' || this.type === 'refresh' || this.type === 'record' || this.type === 'Refresh') {
        this.goToNext()
      } else if (this.type === 'watchComplete') {
        this.$route.push('/Recording')
      } else if (this.type === 'success') {
        this.setBg({tabletImageUrl : 'https://colorate.azurewebsites.net/SwatchColor/FFFFFF'}, true)
      } else if (this.type === 'checkRed') {
        this.showConfirm = false
        this.Android.appExit()
      } else if (this.type === 'timeOut') {
        this.type = 'Complete'
        this.timeOut.completeText = "다 그렸나요? </br> 제출하면 수정할수 없어요"
        this.showConfirm = true
      }
    },
    cancelBtn () {
      if (this.type === 'diagnose') this.modalCancel()
      else if (this.type === 'success') this.$router.push('/PabloMain')
      else if (this.type === 'refresh' || this.type === 'Refresh') this.clear()
      else if (this.type === 'timeOut') {
        this.type = 'Refresh'
        this.timeOut.completeText = "다시 그리시겠어요? </br> 조금 전 그림은 사라져요"
        this.showConfirm = true
      } else this.showConfirm = false
    },
    setBg(canvas, reset){
      this.showConfirm = false
      WILL.clear()
      this.$EventBus.$emit('setBg', canvas , reset)
    }
  }
}
</script>

<style scoped>

</style>
