<template>
  <div class="header">
    <!--Intro 페이지 이전 아이콘 클릭 시 팝업 노출 없이 메인 이동-->
    <router-link v-if="path ==='/Intro'" to="/PabloMain" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></router-link>

    <!-- 그 외 페이지 이전 페이지 이동 안내 팝업 노출 -->
    <Confirm v-if="path !== '/Intro'"
             v-slot="slotProps"
             :okText="'네'"
             :cancelText="'아니요'"
             :completeText = "'이전 화면으로 이동할까요? </br> 진행중인 학습 내용은 </br> 저장되지 않아요!'">
      <button @click="globalUtils.confirm(slotProps,'goBack')" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt="">
      </button>
    </Confirm>

    <div class="box-close">
      <!--Intro / Completion 페이지 종료 아이콘 클릭 시 팝업 노출 없이 메인 이동-->
      <router-link v-if="path ==='/Intro' || path ==='/Completion'" to="/PabloMain" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>

      <!-- 그 외 페이지 종료 안내 팝업 노출 -->
      <Confirm v-slot="slotProps"
               :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`"
               :cancelText="`아니오`"
               :okText="`네`">
        <div class="btn-close" @click="globalUtils.confirm(slotProps,'checkRed')"><img src="@/assets/images/common/close@2x.png" alt=""></div>
      </Confirm>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/popup/Alert'
import Confirm from '@/components/popup/Confirm'

export default {
  name: "LetterHeader",
  components :{
    Alert,
    Confirm
  },
  computed: {
    path() {
      return this.$router.currentRoute.path
    }
  }

}
</script>

<style scoped>

</style>
