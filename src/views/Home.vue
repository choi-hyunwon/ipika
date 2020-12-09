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
          <router-link v-if="diagnose" to="/PabloMain" class="btn btn-dark">시작하기</router-link>
          <router-link  v-else to="/canvas?page=diagnose" class="btn btn-dark">시작하기</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Confirm from '@/components/popup/Confirm'

export default {
  name: 'Home',
  data() {
    return {
      diagnose : null
    }
  },
  components: {Confirm },
  computed: {
  },
  mounted () {
    this.fetchResult()
  },
  methods :{
    ...mapActions({
      getResult: 'getResult'
    }),
    todo(){
      alert('종료 안내 팝업 노출 (퍼블리싱 필요)')
    },
    fetchResult(){
      let  self = this;
      this.getResult()
        .then(result => {
          if(result.code === "0000") {
            self.diagnose = true
          } else {
            self.diagnose = false
          }
        })
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
