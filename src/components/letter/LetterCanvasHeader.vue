<template>
  <div class="header ivory">
    <!-- 이전 페이지 이동 안내 팝업 노출 -->
    <Confirm v-slot="slotProps"
             :okText="'네'"
             :cancelText="'아니요'"
             :completeText = "'이전 화면으로 이동할까요? </br> 진행중인 학습 내용은 </br> 저장되지 않아요!'">
      <button @click="globalUtils.confirm(slotProps,'goBack')" class="symbol">
        <img src="@/assets/images/common/arrow_left@2x.png" alt="뒤로가기">
      </button>
    </Confirm>
    <div v-if="bg.active" class="btn-wrap" @click="visible">
      <button v-if="bg.isShow"><img src="@/assets/images/common/img_visible@2x.png" alt="보이기"></button>
      <button v-else><img src="@/assets/images/common/img_invisible@2x.png" alt="가리기"></button>
    </div>

    <div class="title" >
      <span class="img"><img src="@/assets/images/common/Symbol@2x.png" alt="파블로아이콘"></span>
      <span class="text">{{bg.imageSubject}}</span>
    </div>

    <div class="flex-box">
      <!--영상보기-->
      <Alert v-slot="slotProps">
        <button @click="globalUtils.alert(slotProps,'video')" class="btn-right">
          <span class="img"><img src="@/assets/images/common/youtube.png" alt="영상보기"></span>
          <span class="tit">영상보기</span>
        </button>
      </Alert>
      <Confirm v-slot="slotProps">
        <button @click="globalUtils.confirm(slotProps,'background')" class="btn-right" >
          <span class="img"><img src="@/assets/images/common/ic-img@2x.png" alt="배경선택" ></span>
          <span class="tit">배경선택</span>
        </button>
      </Confirm>
      <Confirm v-slot="slotProps" :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`" :cancelText="`아니요`" :okText="`네`">
        <div class="box-close">
          <button @click="globalUtils.confirm(slotProps,'checkRed')" style="padding-top: 0;" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt="종료하기"></button>
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
  mounted () {
    // this.Android.tts(this.bg.imageSubject)
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
    left: 12rem;
    padding-right: 2.8rem;
    border-right: 0.1rem solid var(--ivory-500);
    height: 100%;
    padding-top: 1rem;

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
    position: relative;
    top: 2rem;
    left: 32.1rem;
    .img {
      width: 4rem;
      height: 4rem;
      display: inline-block;
      margin-right: 2.4rem;
      position: absolute;
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
      width: 100%;
      position: absolute;
      left: 6.4rem;
    }
  }
  .flex-box{
    .btn-right{
      .img{
        margin-right: 0.6rem;
      }
    }
  }
}
</style>
