<template>
  <div>
    <slot :toggleRegister="toggleRegister"></slot>
    <b-modal no-close-on-backdrop ref="" centered title="마케팅 관련 정보 수신 동의" modal-class="">
      <!--  header -->
      <template #modal-header>
        <div class="symbol">
          <img src="@/assets/images/common/check_red@2x.png" alt="">
        </div>
      </template>

      <!--     본문  -->
      <template>

      </template>

      <!--  footer  -->
      <template #modal-footer="{ cancel }">
        <b-button variant="black" class="btn-black btn-half" @click="ok">{{okText}}</b-button>
      </template>
    </b-modal>



    <!-- 태윤님 작업 영역 -->
    <b-modal id="startPopup" centered no-close-on-backdrop modal-class="CanvasPopup" v-model="showRegister">
      <template #modal-header="{}">
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      </template>
      <p class="text">
        이 그림의 제목은 무엇인가요?
      </p>
      <p class="text-sm">
        어떤 그림인지 파블로에게 알려주세요
      </p>
      <form>
        <input type="text" class="form-control active" id="text" v-model="title" @input="checkInputSize" @keydown.enter="registerFree" placeholder="여기에 입력해주세요">
      </form>
      <template #modal-footer="{ ok }">
        <button class="btn submit_button" variant="btn black btn-block" :class="{ 'btn-black' : title == '' }" @click="cancel">닫기</button>
        <button class="btn submit_button" variant="btn black btn-block" :class="{ 'btn-blue5' : !title == '' }" @click="registerFree">등록하기</button>
      </template>
    </b-modal>

    <!-- 공통 알림 popup-->
    <Alert ref="emptyTitle" v-slot="slotProps" :boldText="'제목이 비어있어요'" :text="'멋진 제목을 써보세요'" :buttonText ="'확인'"/>

  </div>
</template>

<script>
import Alert from '@/components/popup/Alert'

export default {
  name: 'Register',
  data(){
    return{
      showRegister : false,
      autoModal : true,
      type : "",
      title : ''
    }
  },
  components :{
    Alert
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
    completeText: {
      String,
      default () {return ''}
    }
  },
  methods: {
    toggleRegister (type, topic) {
      this.showRegister = !this.showRegister;
      this.type = type
      this.setTimerPause()
    },
    checkInputSize() {
      this.title = this.title.slice(0, 20)
    },
    registerFree () {
      if(this.title === '') {
        this.$refs.emptyTitle.showAlert = true
        this.$refs.emptyTitle.type = 'common'
        return false;
      }
      this.showRegister = false
      this.$EventBus.$emit('free', this.title)
    },
    cancel () {
      this.showRegister = !this.showRegister;

    }
  }
}
</script>

<style scoped lang="scss">
.CanvasPopup{
  .modal-footer{
    .btn{
      width:35rem;
      margin-bottom: 1rem;
      &:nth-child(1){
        margin-right: 4rem;

      }
    }
  }
}
</style>
