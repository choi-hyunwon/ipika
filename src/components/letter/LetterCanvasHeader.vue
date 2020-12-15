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
    <div v-if="bg.active" class="btn-wrap" @click="visible">
      <button v-if="bg.isShow"><img src="@/assets/images/common/img_visible@2x.png" alt=""></button>
      <button v-else><img src="@/assets/images/common/img_invisible@2x.png" alt=""></button>
    </div>

    <div class="title" >
      <span class="img"><img src="@/assets/images/common/Symbol@2x.png" alt=""></span>
      <span class="text">{{bg.imageSubject}}</span>
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
      <Confirm v-slot="slotProps" :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`" :cancelText="`아니오`" :okText="`네`">
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
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'LetterCanvasHeader',
  components :{
    Alert,
    Confirm
  },
  computed: {
    ...mapGetters({
      subject : 'getSubject',
      bg : 'getBg'
    })
  },
  methods : {
    ...mapMutations({
      setBg : 'setBg'
    }),
    visible(){
      this.setBg({isShow : !this.bg.isShow})
      this.$EventBus.$emit('visibleBg')
    }
  }
}
</script>


<style lang="scss" scoped>
.header {
  background-color: var(--ivory-200);
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
  .title {
    position: absolute;
    top: 4rem;
    left: 32.7rem;
    .img {
      width: 4rem;
      height: 4rem;
      display: inline-block;
      margin-right: 2.4rem;
      img {
        width: 100%;
      }
    }
    .text {
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 4rem;
      text-align: left;
      color: var(--gray-black);
    }
  }
}
</style>
