<template>
  <div>
    <slot :toggleConfirm="toggleConfirm"></slot>
    <b-modal centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup" v-model="showConfirm">
      <template #modal-header>
        <div class="symbol">
          <img src="@/assets/images/common/check_red@2x.png" alt="">
        </div>
      </template>
      <p class="text">뒤로 가시겠어요?<br/></p>
      <p v-if="type==='goToBack2'" class="text-sm">영상이 아직 끝나지 않았습니다.</p>
      <template v-if="type==='goToback'" #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancel()">아니요</b-button>
        <router-link to="/PabloStudy1" class="btn btn-black btn-half">네</router-link>
      </template>

      <template v-if="type==='goToBack2'" #modal-footer="{ cancel }">
        <router-link to="PabloStudy2" class="btn btn-gray btn-half">뒤로 갈래요</router-link>
        <b-button variant="black" class="btn-half" @click="cancel()">닫기</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  data(){
    return{
      showConfirm : false,
      type : "",
      text : {

      },
      src : {
        check_red : "@/assets/images/common/check_red@2x.png"
      }
    }
  },
  methods:{
    toggleConfirm(type){
      this.showConfirm  = !this.showConfirm;
      this.type = type;
    }
  }

}
</script>

<style scoped>

</style>
