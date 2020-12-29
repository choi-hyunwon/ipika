<template>
  <div class="wrap bg-ivory">
    <div class="header">
      <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      <div class="box-close">
        <Confirm v-slot="slotProps"
                 :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`"
                 :cancelText="`아니요`"
                 :okText="`네`">
          <div class="btn-close" @click="globalUtils.confirm(slotProps,'checkRed')"><img src="@/assets/images/common/close@2x.png" alt=""></div>
        </Confirm>
      </div>
    </div>
    <div class="row">
      <div class="col col-6">
        <div class="symbol-wrap">
          <div class="symbol" :class="`stage_0${submission.stageId}`"></div>
          <span class="text">{{submission.stageName}} Stage</span></div>
        <div class="title" v-html="submission.mainTitle"></div>
        <p class="desc" v-html="submission.subTitle"></p>
        <div class="btn-other">
          <a href="#" @click="menu.popup = !menu.popup" class="btn btn-blue">다른 스테이지 더 알아보기</a>
        </div>
        <div class="btn-group" v-if="!isDemo">
          <router-link to="/PabloMain" class="btn btn-dark">무료체험 시작하기</router-link>
        </div>
      </div>
      <div class="col col-6">
        <img v-if="submission.stageId === 1" src="@/assets/images/common/img_stage_end_01@2x.png" alt="프로필사진" class="img">
        <img v-if="submission.stageId === 2" src="@/assets/images/common/img_stage_end_02@2x.png" alt="프로필사진" class="img">
        <img v-if="submission.stageId === 3" src="@/assets/images/common/img_stage_end_03@2x.png" alt="프로필사진" class="img">
        <img v-if="submission.stageId === 4" src="@/assets/images/common/img_stage_end_04@2x.png" alt="프로필사진" class="img">
        <img v-if="submission.stageId === 5" src="@/assets/images/common/img_stage_end_05@2x.png" alt="프로필사진" class="img">
      </div>
    </div>
    <div class="bg_dim"  v-if="menu.popup">
      <div class="modal_img">
        <img src="@/assets/images/common/stage_modal.png" alt="" class="img-m">
        <img src="@/assets/images/common/close_dim@2x.png" alt="" class="img-m close_btn" @click="menu.popup = !menu.popup">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Confirm from '@/components/popup/Confirm'

export default {
  name: 'TestingResult',
  components: {Confirm },
  data() {
    return {
      menu:{
        popup:false
      },
      demo:true
    }
  },
  computed: {
    ...mapGetters({
      submission : 'getSubmission',
      config : 'getConfig'
    }),
    isDemo(){
      return this.config.isDemo
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  .box-close{
    .btn-close{
      padding-top: 2rem;
      cursor: pointer;
    }
  }
  > .row {
    height: calc(112.6rem - 12rem);
  }
  .col {
    height: 100%;
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
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      &.stage_01{
        background-image: url("~@/assets/images/common/img_ic_stage_01@2x.png");
      }
      &.stage_02{
        background-image: url("~@/assets/images/common/img_ic_stage_02@2x.png");
      }
      &.stage_03{
        background-image: url("~@/assets/images/common/img_ic_stage_03@2x.png");
      }
      &.stage_04{
        background-image: url("~@/assets/images/common/img_ic_stage_04@2x.png");
      }
      &.stage_05{
        background-image: url("~@/assets/images/common/img_ic_stage_05@2x.png");
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
      color: var(--gray-black);
    }
  }

  .title {
    font-family: var(--bold);
    font-size: 5.6rem;
    font-weight: bold;
    line-height: 8rem;
    letter-spacing: -0.03rem;
    color: var(--gray-900);
    padding-top: 18rem;
    padding-left: 10rem;
    margin-bottom: 2rem;
  }

  .desc {
    font-size: 2.4rem;
    padding-right: 10rem;
    padding-left: 10rem;
    font-family: "Noto Sans CJK KR Medium";
    font-family: var(--medium);
    font-weight: 500;
    line-height: 4rem;
    letter-spacing: -0.03rem;
    color: var(--gray-700);
    padding-left: 10rem;
  }
  .btn-other{
    position: absolute;
    left: 10rem;
    top: 59rem;
    color: #fff;
    border-radius: 5rem;
    overflow: hidden;
    .btn{
      border-right: 3rem;
      width: 26.5rem;
      height: 5rem;
      font-size: 2rem;
      line-height: 5rem;
      &:hover{
        color: #fff;
      }
    }
  }
  .btn-group {
    position: absolute;
    left: 10rem;
    bottom: 10rem;
  }
  .btn {
    width: 72rem;
  }

  .img {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .bg_dim{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: rgba(20,20,20,.6);
  }
  .modal_img{
    position: absolute;
    top: 3rem;
    width: 176rem;
    height: 105.7rem;
    left: 8.5rem;
    .close_btn{
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 6rem;
      height: 6rem;
      cursor: pointer;
    }
  }
}
</style>


