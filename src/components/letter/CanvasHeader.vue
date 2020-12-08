<template>
  <div class="header ivory">
    <!-- 이전 페이지 이동 안내 팝업 노출 -->
    <Confirm v-slot="slotProps"
             :okText="'네'"
             :cancelText="'아니요'"
             :completeText = "'이전 화면으로 이동할까요? </br> 진행중인 학습 내용은 </br> 저장되지 않아요!'">
      <button @click="globalUtils.confirm(slotProps,'goBack')" class="symbol">
        <img src="@/assets/images/common/arrow_left@2x.png" alt="">
      </button>
    </Confirm>
    <div class="btn-wrap">
      <button><img src="@/assets/images/common/img_invisible@2x.png" alt=""></button>
    </div>
    <div class="flex-box">
      <!--영상보기-->
      <Alert v-slot="slotProps">
        <button @click="globalUtils.alert(slotProps,'video')" class="btn-right">
          <span class="img"><img src="@/assets/images/common/ic-play@2x.png" alt=""></span>
          <span class="tit">영상보기</span>
        </button>
      </Alert>
      <Confirm v-slot="slotProps">
        <button @click="globalUtils.confirm(slotProps,'background')" class="btn-right" >
          <span class="img"><img src="@/assets/images/common/ic-img@2x.png" alt="" ></span>
          <span class="tit">배경교재</span>
        </button>
      </Confirm>
      <Confirm v-slot="slotProps"
               :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`"
               :cancelText="`아니오`"
               :okText="`네`">
        <div class="box-close">
          <button @click="globalUtils.confirm(slotProps,'checkRed')" style="padding-top: 0;" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></button>
        </div>
      </Confirm>
    </div>
  </div>

</template>

<script>
import Alert from '@/components/popup/Alert'
import Confirm from '@/components/popup/Confirm'
import { mapGetters } from 'vuex'

export default {
  name: 'CanvasHeader',
  components :{
    Alert,
    Confirm
  },
  computed: {
    ...mapGetters({
      subject : 'getSubject'
    })
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
