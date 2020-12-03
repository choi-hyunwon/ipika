<template>
  <div class="wrap bg-ivory">
    <div class="header ivory">
      <div v-b-modal.goToBack class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt="">
<!--        <b-modal id="goToBack" modal-class="normalPopup">-->
<!--          <template #modal-header>-->
<!--            <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>-->
<!--          </template>-->
<!--          <p class="text">정말 뒤로 가시겠어요?</p>-->
<!--          <br/>-->
<!--          <template #modal-footer="{ cancel }">-->
<!--            <b-button variant="gray" class="btn-half"  @click="cancel()">아니요</b-button>-->
<!--            <router-link to="/PabloStudy2" class="btn btn-black btn-half">네</router-link>-->
<!--          </template>-->
<!--        </b-modal>-->
        <Confirm v-slot="slotProps">
          slotProps.toggleConfirm()
        </Confirm>
      </div>
      <div class="flex-box">
        <button v-b-modal.normalPopup2 class="btn-right">
          <span class="img"><img src="@/assets/images/common/ic-drawing@2x.png" alt=""></span>
          <span class="tit">주제보기</span>
        </button>

        <div class="box-close">
          <router-link to="/PabloMain" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
        </div>
      </div>
    </div>
    <div class="bg"><img src="@/assets/images/temp/sample_img_02.png" alt=""></div>
    <div class="dim">
      <!-- s default -->
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
      <!-- e default -->

      <!-- s 영상 재생 중_화면 탭 시 -->
      <div class="inner">
        <div class="video">
          <!--          <p class="text">생각 제시하는 생각 과제 제시하는 텍스트 영역입니다.</p>-->
          <!--          <div class="play-wrap">-->
          <!--            <button class="btn-rewind"><img src="@/assets/images/common/5s_rewind@2x.png" alt=""></button>-->
          <!--            <button class="btn-pause"><img src="@/assets/images/common/pause@2x.png" alt=""></button>-->
          <!--            <button class="btn-forward"><img src="@/assets/images/common/5s_forward@2x.png" alt=""></button>-->
          <!--          </div>-->
          <div class="progress-wrap">
            <div class="inner">
              <span class="time">2:40</span>
              <div class="progress-inner">
                <span class="bar" style="width: 30%"></span>
              </div>
              <span class="playtime">2:40</span>
              <button class="btn-full-screen"><img src="@/assets/images/common/btn_full_screen@2x.png" alt=""></button>
            </div>
          </div>
        </div>
      </div>
      <!-- e 영상 재생 중_화면 탭 시 -->

    </div>
    <router-link to="PabloPopup1"><b-button v-b-modal.normalPopup2 style="position: absolute; top: 200px; left: 350px;">시청 완료시</b-button></router-link>
    <b-modal :visible="modalShow" no-close-on-backdrop id="normalPopup2" centered modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/drawing@2x.png" alt=""></div>
      </template>
      <p class="text text-md">학습 주제 영역입니다.<br/>
        학습 주제는 최대 세 문장까지<br/>
        가능합니다.</p>
      <p class="text-sm">생각 제시하는 생각 과제 제시하는 텍스트<br/>
        영역으로 최대 두줄 이상을 생각합니다.</p>
      <template #modal-footer="{ cancel }">
        <router-link to="/thoughtRecords" class="btn btn-block btn-black" @click="cancel()">닫기</router-link>
<!--        <router-link to="/PabloStudy2" class="btn btn-block btn-black">닫기</router-link>-->
      </template>
      <!--      <p class="text">뒤로 가시겠어요?<br/>-->
      <!--        처음부터 다시 봐야해요</p>-->
      <!--      <p class="text-sm">주제보기를 누르면 학습주제를 다시 볼 수 있어요</p>-->
      <!--      <template #modal-footer="{ cancel }">-->
      <!--        <b-button variant="gray" class="btn-half">뒤로 갈래요</b-button>-->
      <!--        <b-button variant="black" class="btn-half">계속 볼게요!</b-button>-->
      <!--      </template>-->
    </b-modal>
  </div>
</template>

<script>

import Confirm from '@/components/popup/Confirm'
export default {
  name: 'PabloPopup2',
  components: { Confirm },
  data () {
    return {
      modalShow: true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  .bg {
    width: 100%;
    height: calc(120rem - 12rem);
    img {
      width: 100%;
      height: 100%;
    }
    &.full-screen {
      height: 120rem;
    }
  }
  .dim {
    width: 100%;
    height: calc(120rem - 12rem);
    position: absolute;
    top: 12rem;
    left: 0;
    background-color: rgba(20,20,20,.6);
    >.inner {
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
          .btn-pause, .btn-play {
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
          bottom: 4rem;
          .inner {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .time {
            display: inline-block;
            width: 8rem;
            font-family: var(--Inter);
            font-size: 2.4rem;
            font-weight: bold;
            line-height: 4rem;
            letter-spacing: -0.03rem;
            text-align: left;
            color: var(--gray-white);
            margin-left: 4rem;
            vertical-align: middle;
          }

          .progress-inner {
            position: relative;
            display: inline-block;
            width: 161.8rem;
            height: 4rem;
            vertical-align: middle;
            &::before {
              content: '';
              position: absolute;
              width: 161.8rem;
              height: .4rem;
              background-color: rgba(20,20,20,.3);
              top: calc((4rem - .4rem) / 2);
            }
            .bar {
              position: absolute;
              display: block;
              height: .4rem;
              top: calc((4rem - .4rem) / 2);
              left: 0;
              background-color: var(--gray-white);
              &::after {
                content: '';
                display: block;
                position: absolute;
                width: 2.4rem;
                height: 2.4rem;
                border-radius: 50%;
                background-color: var(--gray-white);
                right: 0;
                bottom: -1.1rem;
              }
            }
          }
          .playtime {
            display: inline-block;
            width: 8rem;
            font-family: var(--Inter);
            font-size: 2.4rem;
            font-weight: bold;
            line-height: 4rem;
            letter-spacing: -0.03rem;
            text-align: right;
            color: var(--gray-white);
            vertical-align: middle;
            margin-right: 3rem;

          }
          .btn-full-screen {
            display: inline-block;
            width: 3.2rem;
            height: 3.2rem;
            vertical-align: middle;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    &.full-screen {
      height: 100%;
      top: 0;
      .inner {
        height: 100%;
      }
      .video {
        height: 100%;
      }
    }
  }
  .btn-dim-close {
    position: absolute;
    width: 7.2rem;
    height: 7.2rem;
    right: 2.4rem;
    top: 2.4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>


