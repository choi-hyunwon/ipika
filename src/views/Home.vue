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
