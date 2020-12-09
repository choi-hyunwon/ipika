<template>
  <!--학습하기-->
  <Letter v-if="page === 'letter'" ></Letter>
  <!--진단하기-->
  <Diagnose v-else-if="page === 'diagnose'"></Diagnose>
  <!--프리드로잉-->
  <div v-else class="header ivory">
    <router-link to="/PabloMain" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></router-link>
    <div class="flex-box">
      <div class="box-close">
        <router-link to="/PabloMain" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Letter from '@/components/letter/CanvasHeader'
import Diagnose from '@/components/diagnose/CanvasHeader'

export default {
  name: 'CanvasHeader',
  components : {Letter, Diagnose},
  computed: {
    page () {
      return this.$router.currentRoute.query.page
    }
  }
}
</script>


<style lang="scss" scoped>
.header {
  .btn-wrap {
    position: absolute;
    display: inline-block;
    top: 3rem;
    left: 12rem;
    button {
      display: inline-block;
      width: 12.7rem;
      height: 6rem;
      img {
        width: 100%;
        height: 100%;
      }
      &:first-child {
        margin-right: 1.2rem;
      }
    }
  }
}
</style>
