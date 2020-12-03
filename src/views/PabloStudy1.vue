<template>
  <div class="wrap bg-ivory">
    <div class="header">
      <router-link to="/PabloMain" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></router-link>
      <div class="box-close">
        <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col col-6">
        <div class="symbol-wrap">
          <div class="symbol"><img src="@/assets/images/common/Vector@2x.png" alt=""></div>
          <span class="text">Twinkle Stage 4</span></div>
        <div class="title">학습 주제 영역입니다.<br/>
          학습 주제는 최대 세 문장까지<br/>
          가능합니다.</div>
        <div class="btn-group">
          <router-link to="/PabloStudy2" class="btn btn-dark">시작하기</router-link>
        </div>
        <div>
          <Alert v-slot="slotProps">
            <b-button @click="showAlert(slotProps)">Alert</b-button>
          </Alert>
        </div>
        <div>
          <Confirm v-slot="slotProps">
            <b-button @click="showConfirm(slotProps)">Confirm</b-button>
          </Confirm>
        </div>
      </div>
      <div class="col col-6">
        <div class="img"><img src="@/assets/images/temp/sample_img_01.jpg" alt=""></div>
      </div>
    </div>
  </div>
</template>
<script>
import Alert from '@/components/popup/Alert'
import Confirm from '@/components/popup/Confirm'
export default {
  name: 'PabloStudy1',
  components: {
    Confirm,
    Alert
  },
  methods:{
    showAlert(slotProps){
      slotProps.toggleAlert();
    },
    showConfirm(slotProps){
      slotProps.toggleConfirm();
    }
  }

}
</script>

<style lang="scss" scoped>
.wrap {
  > .row {
    height: calc(120rem - 12rem);
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

  .btn-group {
    position: absolute;
    left: 10rem;
    bottom: 10rem;
  }

  .img {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
