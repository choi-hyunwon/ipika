<template>
  <div class="wrap">
    <div class="header d-flex">
      <div v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></div>
      <div class="box-close">
        <Confirm v-slot="slotProps"
                 :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`"
                 :cancelText="`아니요`"
                 :okText="`네`">
        <div class="btn-close" @click="globalUtils.confirm(slotProps,'checkRed')"><img src="@/assets/images/common/close@2x.png" alt=""></div>
        </Confirm>
      </div>
    </div>
    <div class="content">
      <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      <div class="text-area">
        <p>Ai Art Tutor, PABLO</p>
        <p>모든 학습의 기본 파블로<br>생각을 말하는 미술교육 서비스</p>
      </div>

        <div class="btn-group">
          <router-link v-if="resultCode=== '0000'" to="/PabloMain" class="btn btn-dark">시작하기</router-link>
          <router-link v-else to="/TestInfo" class="btn btn-dark">시작하기</router-link>
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
  .content {
    width: 100%;
    height: 108rem;
    .text-area{
      margin-top: 29.4rem;
      text-align: center;
      p:nth-child(1){
        font-family: 'Inter';
        font-size: 8rem;
        font-weight: bold;
        line-height: 13.6rem;
        letter-spacing: -0.03rem;
      }
      p:nth-child(2){
        font-size: 2.4rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 4rem;
        letter-spacing: -0.03rem;
        text-align: center;
        color: var(--bold);
      }
    }
    .btn-group {
      position: absolute;
      top: 66rem;
      left: 88rem;
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
}

</style>
