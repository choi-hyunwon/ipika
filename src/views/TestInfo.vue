<template>
  <div class="wrap">
    <div class="header ivory bg-ivory d-flex">
      <a href="#" @click="goBack" v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/Symbol@2x.png"
                                                                            alt=""></a>
      <div class="box-close">
        <Confirm v-slot="slotProps"
                 :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`"
                 :cancelText="`아니요`"
                 :okText="`네`">
          <button @click="globalUtils.confirm(slotProps,'checkRed')" style="padding-top: 0;" class="btn-close"><img
            src="@/assets/images/common/close@2x.png" alt=""></button>
        </Confirm>
      </div>
    </div>
    <div class="contents bg-ivory testinfo">
      <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" style="width: 8rem;"></div>
      <div class="title"><img src="@/assets/images/common/img_testinfo_title@2x.png" style="width: 67rem"></div>
      <div class="desc"><img src="@/assets/images/common/img_testinfo_desc@2x.png" style="width: 86.8rem"></div>
      <div class="btn-group">
        <router-link to="/canvas?page=diagnose" class="btn btn-block btn-dark">AI 입회 테스트 시작하기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Confirm from '@/components/popup/Confirm'

export default {
  name: 'TestInfo',
  components: {
    Confirm
  }
}
</script>

<style lang="scss" scoped>
.bg-ivory {
  background-color: #f7f4f1;
}

.testinfo {
  position: relative;
  padding-top: 15.4rem;
  height: calc(100% - 8rem);


  .symbol {
    text-align: center;
    margin-bottom: 5rem;
  }

  .title {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  .desc {
    text-align: center;
    margin-bottom: 10.7rem;
  }
  .btn-group{
    width: 48rem;
    display: block;
    margin: 0 auto
  }
}

</style>
