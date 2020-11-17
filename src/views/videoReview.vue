<template>
  <div class="wrap bg-ivory">
    <div class="header ivory">
      <router-link to="/PabloStudy3" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt="">
      </router-link>
      <div class="flex-box">
        <router-link to="/" class="btn-right">
          <span class="img"><img src="@/assets/images/common/ic-play@2x.png" alt=""></span>
          <span class="tit">영상보기</span>
        </router-link>
        <router-link to="/" class="btn-right">
          <span class="img"><img src="@/assets/images/common/ic-drawing@2x.png" alt=""></span>
          <span class="tit">주제보기</span>
        </router-link>
        <div class="box-close">
          <router-link to="" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
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
        <button class="btn btn-dark">다했어요!</button>
        <button class="btn btn-dark disabled">다했어요!</button>
      </div>
    </div>
    <b-button v-b-modal.videoReviewPopup style="position: absolute; top: 200px; left: 700px;">다시보기 팝업</b-button>
    <b-modal :visible="modalShow" id="videoReviewPopup" centered hide-footer modal-class="videoReviewPopup">
      <template #default="{ hide }">
        <div class="bg"><img src="@/assets/images/temp/sample_img_02.png" alt=""></div>
        <div class="full-screen dim"><!-- 전체 화면시 dim 제거 -->
          <div class="inner">
            <div class="video">
              <p class="text">생각 제시하는 생각 과제 제시하는 텍스트 영역입니다.</p>
              <button class="btn-close" @click="hide()"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
              <!-- s 전체 화면시 hide -->
              <div class="play-wrap">
                <button class="btn-rewind"><img src="@/assets/images/common/5s_rewind@2x.png" alt=""></button>
                <button class="btn-pause"><img src="@/assets/images/common/pause@2x.png" alt=""></button>
                <button class="btn-play"><img src="@/assets/images/common/btn_play@2x.png" alt=""></button>
                <button class="btn-forward"><img src="@/assets/images/common/5s_forward@2x.png" alt=""></button>
              </div>
              <div class="progress-wrap">
                <div class="inner">
                  <span class="time">2:40</span>
                  <div class="progress-inner">
                    <span class="bar" style="width: 30%"></span>
                  </div>
                  <span class="playtime">2:40</span>
                  <button class="btn-full-screen"><img src="@/assets/images/common/btn_full_screen@2x.png" alt="">
                  </button>
                </div>
              </div>
              <!-- e 전체 화면시 hide -->
            </div>
          </div>
          <!-- e 영상 재생 중_화면 탭 시 -->

        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'videoReview',
  data () {
    return {
      modalShow: true
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
