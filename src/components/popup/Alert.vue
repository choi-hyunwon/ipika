<template>
  <div>
 <slot :toggleAlert="toggleAlert"></slot>
    <b-modal centered modal-class="normalPopup" v-model="showAlert">
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
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data(){
    return{
      showAlert : false,
      type : '',
      text :{

      }
    }
  },
  methods : {
    toggleAlert(type){
      this.showAlert = !this.showAlert;
      this.type = type
    }
  }
}
</script>


