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
      const Vari = this.Android.getInitVariables()
      // const Vari = '{"grade":"5","name":"홈런******","user_id":"1954536","user_auth_key":"V0147eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlY290ZXN0MiIsInVzZXJJZCI6MTk1NDUzNiwibG9naW5BcyI6ZmFsc2UsImlhdCI6MTYwNzk0ODgwOCwiZXhwIjoxNjA4NTUzNjA4fQ.sTVDmHc-j68H5mbkGBKQFEbk3B-y7eKHNG4PgBbzzuiCTvsXqwt5mARkl63c2C8D1bXZ-LPVizvdHUTIntf0VQ","device_type":"1002"}'
      const obj = JSON.parse(Vari)
      console.log(obj)
      this.setSession(obj)

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
    position: absolute;
    top: 66rem;
    left: 88rem;
  }
  .img-size{
    width: 120.8rem;
    height: 19.2rem;
    margin: 0 auto;
    margin-top: 29.4rem;
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
