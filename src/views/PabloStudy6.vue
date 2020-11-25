<template>
  <div class="wrap bg-ivory">
    <div class="header">
      <div v-b-modal.goToBack class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt="">
        <b-modal id="goToBack" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
          <template #modal-header>
            <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
          </template>
          <p class="text">정말 뒤로 가시겠어요?</p>
          <br/>
          <template #modal-footer="{ cancel }">
            <b-button variant="gray" class="btn-half" @click="cancel()">아니요</b-button>
            <router-link to="/canvas" class="btn btn-black btn-half">네</router-link>
          </template>
        </b-modal>
      </div>
      <div class="box-close">
        <router-link to="" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
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
          <button class="btn btn-dark mr">마이갤러리</button>
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
export default {
  name: 'PabloStudy6'
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


