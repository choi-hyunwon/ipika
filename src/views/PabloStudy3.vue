<template>
  <div class="wrap">
    <div class="header ivory">
      <router-link to="/PabloStudy2" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></router-link>
      <div class="flex-box">
        <div class="btn-view">
          <span class="img"><img src="@/assets/images/common/ic-drawing@2x.png" alt=""></span>
          <span class="tit">주제보기</span>
        </div>
        <div class="box-close">
          <router-link to="/PabloMain" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
        </div>
      </div>
    </div>
    <div class="bg"><img src="@/assets/images/temp/sample_img_02.png" alt=""></div>
    <div class="dim">
<!--      <div class="inner">-->
<!--        <div class="symbol-wrap">-->
<!--          <div class="symbol"><img src="@/assets/images/common/Stage_Twinkle @2x.png" alt=""></div>-->
<!--          <span class="text">Twinkle Stage 4</span></div>-->
<!--        <div class="title">생각 제시하는<br/>-->
<!--          생각 과제 제시하는<br/>-->
<!--          텍스트 영역입니다.</div>-->
<!--        <div class="btn-group">-->
<!--          <b-button class="btn btn-dark"><i class="ic-play"><img src="@/assets/images/common/play@2x.png" alt=""></i><span>재생하기</span></b-button>-->
<!--        </div>-->
<!--      </div>-->
      <div class="inner"> <!-- 영상 재생 중_화면 탭 시 -->
        <div class="video">
          <p class="text">생각 제시하는 생각 과제 제시하는 텍스트 영역입니다.</p>
          <div class="play-wrap">
            <button class="btn-rewind"><img src="@/assets/images/common/5s_rewind@2x.png" alt=""></button>
            <button class="btn-pause"><img src="@/assets/images/common/pause@2x.png" alt=""></button>
            <button class="btn-forward"><img src="@/assets/images/common/5s_forward@2x.png" alt=""></button>
          </div>
          <div class="progress-wrap">
            <span class="time">2:40</span>
            <div class="progress-bar">
              <span class="bar"></span>
            </div>
            <span class="playtime">2:40</span>
            <button class="btn-full-screen"><img src="@/assets/images/common/btn_full_screen@2x.png" alt=""></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PabloStudy2'
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: var(--ivory-200);
  .bg {
    width: 100%;
    height: calc(120rem - 12rem);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .dim {
    width: 100%;
    height: calc(120rem - 12rem);
    position: absolute;
    top: 12rem;
    left: 0;
    background-color: rgba(20,20,20,.6);
    .inner {
      position: relative;
      width: 100%;
      height: calc(120rem - 12rem);
      .video {
        position: relative;
        width: 100%;
        height: calc(120rem - 12rem);
        .text {
          font-family: var(--bold);
          font-size: 4rem;
          font-weight: bold;
          line-height: 5.6rem;
          letter-spacing: -0.03rem;
          color: var(--gray-white);
          padding: 6rem 6rem 0;
        }
        .play-wrap {
          width: 100%;
          height: 12rem;
          position: absolute;
          left: 50%;
          top: 48rem;
          transform: translateX(-50%);
          text-align: center;
          button {
            display: inline-block;
          }
          .btn-rewind, .btn-forward {
            width: 10rem;
            height: 10rem;
            margin-right: 6.4rem;
          }
          .btn-pause {
            width: 12rem;
            height: 12rem;
            margin-right: 6.4rem;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        .progress-wrap {
          position: absolute;
          width: 100%;
          height: 4rem;
        }
      }
    }
  }
}
</style>


