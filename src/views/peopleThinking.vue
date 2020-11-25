<template>
  <div class="wrap bg-ivory">
    <div class="header ivory">
      <div v-b-modal.goToBack class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt="">
        <b-modal id="goToBack" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
          <template #modal-header>
            <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
          </template>
          <p class="text">정말 뒤로 가시겠어요?</p>
          <br/>
          <template #modal-footer="{ cancel }">
            <b-button variant="gray" class="btn-half"  @click="cancel()">아니요</b-button>
            <router-link to="/thoughtRecords" class="btn btn-black btn-half">네</router-link>
          </template>
        </b-modal>
      </div>
      <div class="flex-box">
        <div v-b-modal.videoReviewPopup class="btn-right">
          <span class="img"><img src="@/assets/images/common/ic-play@2x.png" alt=""></span>
          <span class="tit">영상보기</span>
          <b-modal id="videoReviewPopup" centered hide-footer modal-class="videoReviewPopup">
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
        <div v-b-modal.normalPopup2 class="btn-right">
          <span class="img"><img src="@/assets/images/common/ic-drawing@2x.png" alt=""></span>
          <span class="tit">주제보기</span>
          <b-modal id="normalPopup2" centered modal-class="normalPopup">
            <template #modal-header>
              <div class="symbol"><img src="@/assets/images/common/drawing@2x.png" alt=""></div>
            </template>
            <p class="text text-md">학습 주제 영역입니다.<br/>
              학습 주제는 최대 세 문장까지<br/>
              가능합니다.</p>
            <p class="text-sm">생각 제시하는 생각 과제 제시하는 텍스트<br/>
              영역으로 최대 두줄 이상을 생각합니다.</p>
            <template #modal-footer="{ cancel }">
              <b-button class="btn btn-block btn-black" @click="cancel()">닫기</b-button>
            </template>
          </b-modal>
        </div>
        <div class="box-close">
          <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="txt-area">
        <p class="txt-lg">다른 친구들은 어떻게<br/>
          생각하는지 들어볼까요?</p>
        <p class="txt-sm">
          친구들의 생각을 듣고, 내 생각과 비교해봐요!
        </p>
      </div>
      <!-- todo! slider? scroll? -->
      <div class="img-slider">
        <ul>
          <li class="item play">
            <router-link to="" class="img">
              <img src="@/assets/images/temp/sample_img_03.png" alt="">
            </router-link>
            <p class="title">김정윤</p>
            <p class="time">00:59</p>
          </li>
          <li class="item pause">
            <router-link to="" class="img">
              <img src="@/assets/images/temp/sample_img_03.png" alt="">
            </router-link>
            <p class="title">김정윤</p>
            <p class="time">00:59</p>
          </li>
          <li class="item pause">
            <router-link to="" class="img">
              <img src="@/assets/images/temp/sample_img_03.png" alt="">
            </router-link>
            <p class="title">김정윤</p>
            <p class="time">00:59</p>
          </li>
          <li class="item pause">
            <router-link to="" class="img">
              <img src="@/assets/images/temp/sample_img_03.png" alt="">
            </router-link>
            <p class="title">김정윤</p>
            <p class="time">00:59</p>
          </li>
          <li class="item pause">
            <router-link to="" class="img">
              <img src="@/assets/images/temp/sample_img_03.png" alt="">
            </router-link>
            <p class="title">김정윤</p>
            <p class="time">00:59</p>
          </li>
        </ul>
      </div>
      <div class="navigation">
        <button class="swipe"><img src="@/assets/images/common/swipe_left_default@2x.png" alt=""></button>
        <button class="swipe"><img src="@/assets/images/common/swipe_left_active@2x.png" alt=""></button>
        <button class="swipe"><img src="@/assets/images/common/swipe_right_active@2x.png" alt=""></button>
      </div>
      <div class="btn-wrap"><router-link to="/canvas" class="btn btn-dark">다 들었어요!</router-link></div>
<!--      <div class="btn-wrap"><button class="btn btn-dark disabled">다 들었어요!</button></div>-->
    </div>
  </div>
</template>

<script>

export default {
  name: 'peopleThinking'
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
    margin-bottom: 12rem;
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
  .img-slider {
    width: 100%;
    ul {
      height: 47rem;
      overflow-x: scroll;
      white-space: nowrap;
      padding-left: 10rem;
    }
    .item {
      position: relative;
      width: 32rem;
      display: inline-block;
      margin-right: 10rem;
      a {
        position: relative;
      }
      .img {
        display: inline-block;
        width: 32rem;
        height: 32rem;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 10rem;
        img {
          width: auto;
          height: 100%;
        }
      }
      .title {
        font-family: var(--bold);
        font-size: 2.4rem;
        font-weight: bold;
        line-height: 4rem;
        letter-spacing: -0.03rem;
        text-align: center;
        margin-top: 2.4rem;
      }
      .time {
        font-family: var(--Inter);
        font-size: 2rem;
        font-weight: 600;
        line-height: 3.6rem;
        letter-spacing: -0.03rem;
        text-align: center;
        color: var(--gray-600);
      }
      &.pause {
        a {
          &::after {
            content: '';
            position: absolute;
            display: block;
            width: 6rem;
            height: 6rem;
            background-image: url("~@/assets/images/common/btn_play@2x.png");
            background-size: cover;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      &.play {
        a {
          &::after {
            content: '';
            position: absolute;
            display: block;
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            background-color: rgba(21, 133, 255,.6);
            background-image: url("~@/assets/images/common/ic-pause-white@2x.png");
            background-size: 2.4rem 2.4rem;
            background-position: center;
            background-repeat: no-repeat;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .img {
          box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.08), 0 40px 60px 0 rgba(0, 0, 0, 0.2);
        }
        .time {
          color: var(--blue-400);
        }
        .title {
          margin-top: 4.4rem;
        }
      }
    }
  }
  .navigation {
    position: absolute;
    bottom: 10rem;
    left: 10rem;
    .swipe {
      display: inline-block;
      width: 8rem;
      height: 8rem;
      margin-right: 1.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .btn-wrap {
    position: absolute;
    bottom: 10rem;
    right: 10rem;
  }
}
</style>
