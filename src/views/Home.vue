<template>
  <div class="wrap">
    <div class="header d-flex">
      <div v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></div>
      <div class="box-close">
        <div to="" class="btn-close" @click="todo"><img src="@/assets/images/common/close@2x.png" alt=""></div>
      </div>
    </div>
    <div class="content">
      <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      <div class="text-area">
        <p>Ai Art Tutor, PABLO</p>
        <p>모든 학습의 기본 파블로<br>생각을 말하는 미술교육 서비스</p>
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

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      diagnose: 'getDiagnose'
    })
  },
  methods :{
    todo(){
      alert('종료 안내 팝업 노출 (퍼블리싱 필요)')
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
