<template>
  <div class="wrap bg-ivory">
    <div class="header">
      <Confirm v-slot="slotProps"
               :okText="'네'"
               :cancelText="'아니요'"
               :text = "'이전 화면으로 이동할까요? </br> 진행중인 학습 내용은 </br> 저장되지 않아요!'"
      >
        <button @click="globalUtils.confirm(slotProps,'goBack')" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt="">
        </button>
      </Confirm>
      <div class="box-close">
        <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col col-6">
        <div class="symbol-wrap">
          <div class="symbol"><img src="@/assets/images/common/Vector@2x.png" alt=""></div>
          <span class="text">Stage 4 Clear!</span></div>
        <div class="title">트윙클 스테이지<br/>
          4번째 학습을 완료했어요!</div>
        <div class="btn-group">
          <router-link to="/MainGallery" class="btn btn-dark mr">마이갤러리</router-link>
          <router-link to="/PabloMain" class="btn btn-gray">메인으로</router-link>
        </div>
      </div>
      <div class="col col-6">
        <div class="img"><img src="@/assets/images/temp/sample_img_01.jpg" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import Confirm from '@/components/popup/Confirm'
export default {
  name: 'PabloStudy6',
  components: { Confirm }
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
    .mr {
      margin-right: 1.2rem;
    }
    .btn-gray {
      height: 8rem;
      line-height: 7.8rem;
      background-color: var(--gray-300);
      color: var(--gray-600);
    }
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


