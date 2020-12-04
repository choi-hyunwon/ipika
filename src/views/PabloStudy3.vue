<template>
  <div class="wrap bg-ivory">
    <div class="header ivory">
      <div class="symbol">
        <Confirm v-slot="slotProps"
                 :okText="'뒤로 갈래요'"
                 :cancelText="'닫기'"
                 :backText ="'영상이 아직 끝나지 않았습니다.'"
        >
          <button @click="showConfirm(slotProps,1)"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></button>
        </Confirm>
<!--        <b-button variant="black" @click="goToBack">버튼</b-button>-->
      </div>
      <div class="flex-box">
        <Alert v-slot="slotProps"
                :boldText="`학습주제`"
                :text="`학습주제`"
                :buttonText ="'닫기'">
        <button class="btn-right" @click="showAlert(slotProps,1)">
          <span class="img"><img src="@/assets/images/common/ic-drawing@2x.png" alt=""></span>
          <span class="tit">주제보기</span>
<!--          <b-modal id="normalPopup2" centered modal-class="normalPopup">-->
<!--            <template #modal-header>-->
<!--              <div class="symbol"><img src="@/assets/images/common/drawing@2x.png" alt=""></div>-->
<!--            </template>-->
<!--            <p class="text text-md">학습 주제 영역입니다.<br/>-->
<!--              학습 주제는 최대 세 문장까지<br/>-->
<!--              가능합니다.</p>-->
<!--            <p class="text-sm">생각 제시하는 생각 과제 제시하는 텍스트<br/>-->
<!--              영역으로 최대 두줄 이상을 생각합니다.</p>-->
<!--            <template #modal-footer="{ cancel }">-->
<!--              <b-button class="btn btn-block btn-black" @click="cancel()">닫기</b-button>-->
<!--            </template>-->
<!--          </b-modal>-->
          </button>
        </Alert>
        <div class="box-close">
          <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
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

      <!--뒤로가기-->
<!--      <b-modal id="goBackPopup" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">-->
<!--        <template #modal-header>-->
<!--          <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt="" class="img-m"></div>-->
<!--        </template>-->
<!--        <p class="text">뒤로 가시겠어요?<br/>-->
<!--        </p>-->
<!--        <p class="text-sm">영상이 아직 끝나지 않았습니다.</p>-->
<!--        <template #modal-footer="{ cancel }">-->
<!--          <router-link to="PabloStudy2" class="btn btn-gray btn-half">뒤로 갈래요</router-link>-->
<!--          &lt;!&ndash;        <b-button variant="gray" class="btn-half">뒤로 갈래요</b-button>&ndash;&gt;-->
<!--          <b-button variant="black" class="btn-half" @click="cancel()">닫기</b-button>-->
<!--        </template>-->
<!--      </b-modal>-->
      <!-- s 영상 재생 중_화면 탭 시 -->
      <div class="inner">
        <div class="video">
          <p class="text">생각 제시하는 생각 과제 제시하는 텍스트 영역입니다.</p>
          <Confirm v-slot="slotProps"
                   :text="'보지못한 부분이 있어도 괜찮아요:)'"
                   :completeText ="'다 보셨나요? 영상은 다음단계에서도 볼 수 있어요'"
                    :ok-text="'넘어갈게요'"
                  :cancel-text="'다시 볼래요'">
            <b-button @click="showConfirm(slotProps,2)" style="position: absolute; top: 200px; left: 350px;">시청 완료</b-button>
          </Confirm>
<!--          <b-modal id="normalPopup1" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">-->
<!--            <template #modal-header>-->
<!--              <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>-->
<!--            </template>-->
<!--            <p class="text">다 보셨나요? 영상은 다음<br/>-->
<!--              단계에서도 볼 수 있어요</p>-->
<!--            <p class="text-sm">보지 못한 부분이 있어도 괜찮아요 :)</p>-->
<!--            <template #modal-footer="{ cancel }">-->
<!--              <b-button variant="gray" class="btn-half"  @click="cancel()">다시 볼래요</b-button>-->
<!--              <router-link to="/thoughtRecords" class="btn btn-black btn-half">넘어갈게요</router-link>-->
<!--            </template>-->
<!--          </b-modal>-->
          <div class="play-wrap">
            <button class="btn-rewind"><img src="@/assets/images/common/5s_rewind@2x.png" alt=""></button>
            <button class="btn-pause"><img src="@/assets/images/common/pause@2x.png" alt=""></button>
            <button class="btn-forward"><img src="@/assets/images/common/5s_forward@2x.png" alt=""></button>
          </div>
          <div class="progress-wrap">
            <div class="inner">
              <span class="time">2:40</span>
              <div class="progress-inner">
                <span class="bar" style="width: 30%"></span>
              </div>
              <span class="playtime">2:40</span>
              <router-link to="/PabloStudy4"><button class="btn-full-screen"><img src="@/assets/images/common/btn_full_screen@2x.png" alt=""></button></router-link>
            </div>
          </div>
          </div>
        </div>
      </div>
      <!-- e 영상 재생 중_화면 탭 시 -->
    </div>
</template>

<script>
import Confirm from '@/components/popup/Confirm'
import Alert from '@/components/popup/Alert'
export default {
  name: 'PabloStudy3',
  components: { Alert, Confirm },
  // created(){
  //   setTimeout( ()=> { this.$router.push({ path: '/PabloPopup1'})},7000);
  // },
  created () {
    this.$EventBus.$on('back',this.goToBack)
    this.$EventBus.$on('next',this.goToNext)
  },
  methods : {
    showConfirm(slotProps,number){
      if(number===1){
        slotProps.toggleConfirm('goToBack','pabloStudy3');
      }else if(number===2){
        slotProps.toggleConfirm('Complete','pabloStudy3');
      }
    },
    showAlert(slotProps,number){
      if(number===1){
        slotProps.toggleAlert('subject','PabloStudy3')
      }
    },
    goToBack(){
      this.$router.push('/PabloStudy2')
    },
    goToNext(){
      this.$router.push('/thoughtRecords')
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


