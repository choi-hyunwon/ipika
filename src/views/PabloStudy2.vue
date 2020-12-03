<template>
  <div class="wrap bg-ivory">
    <div class="header ivory">
      <div class="symbol">
        <Confirm v-slot="slotProps"
                  :cancelText="'아니요'"
                  :okText="'네'"
        >
        <button @click="showConfirm(slotProps,1)"><img src="@/assets/images/common/arrow_left@2x.png" alt="" ></button>
<!--        <b-modal id="goToBack" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">-->
<!--          <template #modal-header>-->
<!--            <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>-->
<!--          </template>-->
<!--          <p class="text">정말 뒤로 가시겠어요?</p>-->
<!--          <br/>-->
<!--          <template #modal-footer="{ cancel }">-->
<!--            <b-button variant="gray" class="btn-half"  @click="cancel()">아니요</b-button>-->
<!--            <router-link to="/PabloStudy1" class="btn btn-black btn-half">네</router-link>-->
<!--          </template>-->
<!--        </b-modal>-->
        </Confirm>
      </div>
      <div class="flex-box">
          <Alert v-slot="slotProps">
            <button class="btn-right" @click="showAlert(slotProps,1)">
            <span class="img"><img src="@/assets/images/common/ic-drawing@2x.png" alt=""></span>
            <span class="tit">주제보기</span>
            </button>
          </Alert>
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

        <div class="box-close">
          <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
        </div>
      </div>
    </div>
    <div class="bg"><img src="@/assets/images/temp/sample_img_02.png" alt=""></div>
    <div class="dim">
      <div class="inner">
        <div class="symbol-wrap">
          <div class="symbol"><img src="@/assets/images/common/Stage_Twinkle @2x.png" alt=""></div>
          <span class="text">Twinkle Stage 4</span></div>
        <div class="title">생각 제시하는<br/>
          생각 과제 제시하는<br/>
          텍스트 영역입니다.</div>
        <div class="btn-group">
          <router-link to="/PabloStudy3" class="btn btn-dark"><i class="ic-play"><img src="@/assets/images/common/play@2x.png" alt=""></i><span>재생하기</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Confirm from '@/components/popup/Confirm'
import Alert from '@/components/popup/Alert'
export default {
  name: 'PabloStudy2',
  components: { Alert, Confirm },
  created() {
    this.$EventBus.$on('back',this.goToBack)
  },
  methods : {
    showConfirm(slotProps,number){
      if(number===1){
        slotProps.toggleConfirm('goToBack','pabloStudy2');
      }
    },
    showAlert(slotProps,number){
      if(number===1){
        slotProps.toggleAlert('normalPopup')
      }
    },
    goToBack(){
      this.$router.push('/PabloStudy1')
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
    }
    .symbol-wrap {
      position: absolute;
      left: 10.4rem;
      top: 10.4rem;
      .symbol {
        display: inline-block;
        width: 4rem;
        height: 4rem;
        vertical-align: middle;
        margin-right: 0.8rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        display: inline-block;
        vertical-align: middle;
        font-family: var(--Inter);
        font-size: 3.2rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.3px;
        text-align: left;
        color: var(--gray-white);
      }
    }

    .title {
      font-family: var(--bold);
      font-size: 5.6rem;
      font-weight: bold;
      line-height: 8rem;
      letter-spacing: -0.03rem;
      color: var(--gray-white);
      padding-top: 18rem;
      padding-left: 10rem;
      margin-bottom: 2rem;
    }

    .btn-group {
      position: absolute;
      left: 10rem;
      bottom: 10rem;
      .btn {
        display: block;
        min-width: 18rem;
        height: auto;
      }
      .ic-play {
        display: inline-block;
        width: 3.2rem;
        height: 3.2rem;
        margin-right: 1.2rem;
        vertical-align: middle;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      span {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>


