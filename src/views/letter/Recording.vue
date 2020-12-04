<template>
  <div class="wrap bg-ivory">
    <div class="header ivory">
<!--      < style="position: absolute; top: 200px; left: 820px;">뒤로가기 팝업</b-button>-->
      <Confirm v-slot="slotProps"
               :okText="'뒤로 갈래요'"
               :cancelText="'닫기'"
               :text ="'지워진 녹음은 다시 들을 수 없어요'"
      >
      <button class="symbol" @click="globalUtils.confirm(slotProps,'goToBack')">
        <img src="@/assets/images/common/arrow_left@2x.png" alt="">
      </button>
      </Confirm>

      <div class="flex-box">
        <Alert v-slot="slotProps">
          <button @click="globalUtils.alert(slotProps,'video')" class="btn-right">
            <span class="img"><img src="@/assets/images/common/ic-play@2x.png" alt=""></span>
            <span class="tit">영상보기</span>
          </button>
        </Alert>

        <Alert v-slot="slotProps"
                :boldText="'주제보기'"
                :text="'주제보기'"
                :buttonText="'닫기'">
          <button @click="globalUtils.alert(slotProps,'subject')" class="btn-right">
            <span class="img"><img src="@/assets/images/common/ic-drawing@2x.png" alt=""></span>
            <span class="tit">주제보기</span>
          </button>
        </Alert>

        <div class="box-close">
          <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="txt-area">
        <p class="txt-lg">
          정윤님은<br/>
          이 주제에 대해 어떻게 생각해요?<br/>
          생각을 들려주세요
        </p>
        <p class="txt-sm">
          자유롭게 본인의 생각을 말해보세요
        </p>
      </div>
      <div class="record-area">
        <!-- todo! svg 녹음? -->
      </div>
      <div class="play-area">
        <button><img src="@/assets/images/common/record@2x.png" alt=""></button><!-- 녹음 버튼 -->
        <button><img src="@/assets/images/common/record_play@2x.png" alt=""></button><!-- 재생 버튼 -->
        <button><img src="@/assets/images/common/refresh_active@2x.png" alt=""></button><!-- 새로고침 활성화 버튼 -->
        <button><img src="@/assets/images/common/refresh_default@2x.png" alt=""></button><!-- 새로고침 버튼 -->
      </div>
      <div class="btn-area">
        <router-link to="/Listening" class="btn btn-dark">다했어요!</router-link>
        <button class="btn btn-dark disabled">다했어요!</button>
      </div>
    </div>
    <Confirm v-slot="slotProps"
             :complete-text="`다시 녹음하시겠어요? 지금 녹음한 내용은 지워져요`"
             :text="`지워진 녹음은 다시 들을 수 없어요`"
             :cancelText="`닫기`"
             :okText="`다시 녹음할게요`"
    >
      <b-button @click="showConfirm(slotProps,3)" style="position: absolute; top: 200px; left: 700px;">새로고침 팝업</b-button>
    </Confirm>
  </div>
</template>

<script>
import Confirm from '@/components/popup/Confirm'
import Alert from '@/components/popup/Alert'
export default {
  name: 'thoughtRecords',
  components: { Alert, Confirm },
  data(){
    return{

    }
  },
  created() {
    this.$EventBus.$on('back',this.goToBack)
  },

  methods : {

    goToBack(){
      this.$router.push('/Watching')
    }
  }
}
</script>

<style lang="scss" scoped>
.contents {
  position: relative;
  width: 100%;
  height: calc(100% - 12rem);
  .txt-area {
    padding-top: 8rem;
    padding-left: 10rem;
    margin-bottom: 55.2rem;
    .txt-lg {
      font-family: var(--bold);
      font-size: 4rem;
      font-weight: bold;
      line-height: 5.6rem;
      letter-spacing: -0.03rem;
      margin-bottom: 1.2rem;
    }
    .txt-sm {
      font-size: 3.2rem;
      line-height: 4.8rem;
      letter-spacing: -0.03rem;
      color: var(--gray-black);
    }
  }
  .record-area {
    position: absolute;
    width: 100%;
    height: 27.1rem;
    background-color: pink;
    top: 40.8rem;
  }
  .play-area {
    padding-left: 10rem;
    button {
      display: inline-block;
      width: 12rem;
      height: 12rem;
      margin-left: 2.4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .btn-area {
    position: absolute;
    bottom: 10rem;
    right: 10rem;
  }
}
</style>
