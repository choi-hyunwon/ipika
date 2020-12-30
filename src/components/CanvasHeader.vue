<template>
  <!--학습하기-->
  <Letter v-if="page === 'letter'" ></Letter>
  <!--진단하기-->
  <Diagnose v-else-if="page === 'diagnose'"></Diagnose>
  <!--프리드로잉-->
  <div v-else class="header ivory">
    <Confirm v-slot="slotProps"
             :okText="'네'"
             :cancelText="'아니요'"
             :completeText = "'이전 화면으로 이동할까요? </br> 진행중인 학습 내용은 </br> 저장되지 않아요!'">
      <button @click="globalUtils.confirm(slotProps,'goMain')" class="symbol">
        <img src="@/assets/images/common/arrow_left@2x.png" alt="뒤로가기">
      </button>
    </Confirm>
    <div class="flex-box">
      <div class="box-close">
        <Confirm v-slot="slotProps"
                 :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`"
                 :cancelText="`아니요`"
                 :okText="`네`">
          <button @click="globalUtils.confirm(slotProps,'checkRed')" style="padding-top: 0;" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt="종료하기"></button>
        </Confirm>
      </div>
    </div>
  </div>
</template>

<script>
import Letter from '@/components/letter/LetterCanvasHeader'
import Diagnose from '@/components/diagnose/DiagnoseCanvasHeader'
import Confirm from '@/components/popup/Confirm'

export default {
  name: 'CanvasHeader',
  components : {Letter, Diagnose,Confirm},
  computed: {
    page () {
      return this.$router.currentRoute.query.page
    }
  }
}
</script>


<style lang="scss" scoped>
.header {
  .btn-close{
    height: 8rem;
  }
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
