<template>
  <div>
    <slot :toggleConfirm="toggleConfirm"></slot>
    <b-modal centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup" v-model="showConfirm">
<!--      header -->
      <template #modal-header>
        <div class="symbol">
          <img src="@/assets/images/common/check_red@2x.png" alt="">
        </div>
      </template>

<!--     본문  -->
      <template v-if= "type==='goToBack'">
        <p class="text">뒤로 가시겠어요?</p>
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
      <template v-if="type==='goToBack'" #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancel()">{{cancelText}}</b-button>
        <b-button @click="goToBack" variant="black" class="btn-black btn-half">{{okText}}</b-button>
      </template>

      <template v-else-if="type==='Complete'" #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancel()">{{cancelText}}</b-button>
        <b-button @click="goToNext" variant="black" class="btn-black btn-half">{{okText}}</b-button>
      </template>

      <template v-else-if="type==='refresh'" #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancel()">{{cancelText}}</b-button>
        <b-button @click="goToNext" variant="black" class="btn-black btn-half">{{okText}}</b-button>
      </template>

<!--      <template v-else-if="type==='watchComplete'" #modal-footer="{ cancel }">-->
<!--        <b-button variant="gray" class="btn-half"  @click="cancel()">다시 볼래요</b-button>-->
<!--        <router-link to="/thoughtRecords" class="btn btn-black btn-half">넘어갈게요</router-link>-->
<!--      </template>-->
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
      topic : "",
      text : {
      },
      src : {
        check_red : "@/assets/images/common/check_red@2x.png"
      }
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
      this.type = type;
      this.topic = topic
    },
    goToBack(){
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
