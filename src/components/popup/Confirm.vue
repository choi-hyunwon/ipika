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
        <p class="text" v-html="completeText"></p>
        <p class="text-sm" v-html="text"></p>
      </template>

      <!--  footer  -->
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancleA(cancel)">{{cancelText}}</b-button>
        <b-button variant="black" class="btn-black btn-half" @click="ok()">{{okText}}</b-button>
      </template>
    </b-modal>

    <b-modal v-if="type === 'timeOut'" no-close-on-backdrop id="timeoverPopup" centered title="진단테스트 : 타임오버" modal-class="normalPopup" v-model="showConfirm">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/timer@2x.png" alt=""></div>
      </template>
      <p class="text">시간이 초과되었어요!<br/>이대로 그림을 제출할까요?</p>
      <p class="text-sm"></p>
      <template #modal-footer="{ cancel }">
        <b-button @click="clear" variant="gray" class="btn-half">아니오</b-button>
        <b-button @click="goToNext" variant="black" class="btn-half">제출하기</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
  name: 'Confirm',
  data(){
    return{
      showConfirm : false,
      autoModal : false,
      type : "",
    }
  },
  created () {
    if(this.autoOpen===true){
      this.showConfirm = true
      this.type='diagnose'
    }
  },
  computed:{
    ...mapGetters({
      getCanvasTimer : 'getCanvasTimer',
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
  methods:{
    ...mapMutations({
      setTimeInit : 'setTimeInit',
      setTimerReset : 'setTimerReset',
      setTimerStart : 'setTimerStart',
      setTimerPause : 'setTimerPause',
      setTimerResume : 'setTimerResume'
    }),
    toggleConfirm(type,topic){
      this.showConfirm  = !this.showConfirm;
      this.type = type;
      this.setTimerPause()
    },
    goBack(){
      this.$EventBus.$emit('back')
    },
    goToNext(){
      this.showConfirm = false
      this.$EventBus.$emit('next')
    },
    clear(){
      WILL.clear()
      this.$refs.confirmModal.hide()
      this.setTimerReset();
      this.setTimerStart();
    },
    modalCancel(){
      this.$refs.confirmModal.hide()
      this.setTimerResume();
    },
    isComplete(){
      return this.$router.push('/pablomain')
    },
    ok(){
      if(this.type==='goBack'){
        this.goBack()
      }else if(this.type==='Complete'||this.type==='checkRed'||this.type==='diagnose'){
        this.goToNext()
      }else if(this.type==='refresh'){
        this.clear()
      }else if(this.type==='watchComplete'){
        this.$route.push('/Recording')
      }else if(this.type==='letter'){
        this.modalCancel()
      }
    },
    cancleA(cancle) {
      if(this.type === 'diagnose') this.modalCancel()
      else if(this.type === 'letter') this.isComplete()
      else cancle()
    }
  }
}
</script>

<style scoped>

</style>
