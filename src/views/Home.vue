<template>
  <div class="wrap">
    <div class="header d-flex">
      <div v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></div>
      <div class="box-close">
        <router-link to="/PabloMain" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
      </div>
    </div>
    <div class="content">
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      <div class="img-size">
      <img src="@/assets/images/common/Group 1388@2x.png" alt="" class="img">
      </div>
        <div class="btn-group">
          <router-link to="/PabloStudy1" class="btn btn-dark">시작하기</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home'
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
