<template>
  <div class="wrap">
    <div class="header d-flex">
      <div v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></div>
      <div class="box-close">
        <Confirm v-slot="slotProps"
                 :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`"
                 :cancelText="`아니오`"
                 :okText="`네`">
        <div class="btn-close" @click="globalUtils.confirm(slotProps,'checkRed')"><img src="@/assets/images/common/close@2x.png" alt=""></div>
        </Confirm>
      </div>
    </div>
    <div class="content">
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      <div class="img-size">
      <img src="@/assets/images/common/Group 1388@2x.png" alt="" class="img">
        <p>모든 학습의 기본 파블로<br>
          질문하고 대화하는 미술교육 서비스</p>
      </div>

        <div class="btn-group">
          <router-link v-if="resultCode=== '0000'" to="/PabloMain" class="btn btn-dark">시작하기</router-link>
          <router-link v-else to="/canvas?page=diagnose" class="btn btn-dark">시작하기</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Confirm from '@/components/popup/Confirm'

export default {
  name: 'Home',
  components: {Confirm},
  data (){
    return {
      resultCode : ''
    }
  },
  mounted () {

    this.loadAndroid()
  },
  methods :{
    ...mapActions({
      getDiagnoseResult: 'getDiagnoseResult'
    }),
    ...mapMutations({
      setSession : 'setSession'
    }),
    fetchDiagnoseResult(){
      this.getDiagnoseResult()
      .then( result => {
        this.resultCode = result
      })
    },
    loadAndroid(){

      try {
        const Vari = this.Android.getInitVariables()
        const obj = JSON.parse(Vari)
        console.log(obj)
        this.setSession(obj)
      } catch(e){
        console.log('this.Android.getInitVariables 에러')
      }
      this.fetchDiagnoseResult()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  .header {
    border: none;

    .box-close {
      border: none;
    }
  }

  .symbol {
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 4rem;
    left: 4rem;

    img {
      width: 100%;
      height: 100%;
    }

  }
}
.content {

  .btn-group {
    display: block;
    text-align: center;
  }
  .img-size{
    width: 120.8rem;
    //height: 19.2rem;
    margin: 29.4rem auto 5.4rem;
    p {
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      line-height: 1.67;
      color: var(--gray-700);
    }
  }

  .img {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

</style>
