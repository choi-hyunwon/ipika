<template>
  <div>
    <slot :toggleConfirm="toggleConfirm"></slot>
    <b-modal :visible="autoModal" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup" v-model="showConfirm">
<!--      header -->
      <template #modal-header>
        <div class="symbol">
          <img src="@/assets/images/common/check_red@2x.png" alt="">
        </div>
      </template>

<!--      canvase time header-->
<!--      <template v-if="type==='canvasComplete'" #modal-header>-->
<!--        <div class="symbol">-->
<!--          <img src="@/assets/images/common/timer@2x.png" alt="">-->
<!--        </div>-->
<!--      </template>-->

<!--     본문  -->
      <template v-if= "type==='goBack'">
        <p class="text">정말 뒤로 가시겠어요?</p>
        <p class="text-sm">{{backText}}</p>
      </template>

      <template v-else-if="type==='Complete'">
        <p class="text">{{completeText}}</p>
        <p class="text-sm">{{text}}</p>
      </template>

      <template v-else-if="type==='refresh'">
        <p class="text">{{completeText}}</p>
        <p class="text-sm">{{text}}</p>
      </template>


<!--      footer  -->
      <template v-if="type==='goBack'" #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancel()">{{cancelText}}</b-button>
        <b-button @click="goBack" variant="black" class="btn-black btn-half">{{okText}}</b-button>
      </template>

      <template v-else-if="type==='Complete'" #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancel()">{{cancelText}}</b-button>
        <b-button @click="goToNext" variant="black" class="btn-black btn-half">{{okText}}</b-button>
      </template>

      <template v-else-if="type==='refresh'" #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancel()">{{cancelText}}</b-button>
        <b-button @click="goToNext" variant="black" class="btn-black btn-half">{{okText}}</b-button>
      </template>

      <template v-else-if="type==='watchComplete'" #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half"  @click="cancel()">다시 볼래요</b-button>
        <router-link to="/thoughtRecords" class="btn btn-black btn-half">넘어갈게요</router-link>
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
      autoModal : false,
      type : "",
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
    }
  },
  methods:{
    toggleConfirm(type,topic){
      this.showConfirm  = !this.showConfirm;
      if(topic==='visible'){
       this.autoModal = true
      }else{
        this.autoModal = false
      }
      this.type = type;
    },
    goBack(){
      this.$EventBus.$emit('back')
    },
    goToNext(){
      this.$EventBus.$emit('next')
    }
  }

}
</script>

<style scoped>

</style>
