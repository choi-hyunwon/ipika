<template>
  <div class="wrap">
    <div class="header">
      <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      <div class="box-close">
        <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col col-6">
        <div class="symbol-wrap">
          <div class="symbol"><img src="@/assets/images/common/Vector@2x.png" alt=""></div>
          <span class="text">Twinkle Stage</span></div>
        <div class="title">정윤님은 무의식의 세계,<br/>
          트윙클 스테이지네요!<br/>
          학습을 시작하세요 😉</div>
        <p class="desc">트윙클 스테이지는 눈과 손의 협응이 일어나고<br/>
          무의식적으로 표현하는 단계입니다.</p>
        <div class="btn-group">
          <router-link to="/" class="btn btn-dark">무료체험 3개월 시작하기</router-link>
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
  name: 'TestingResult'
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: var(--ivory-200);
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

  .desc {
    font-size: 2.4rem;
    font-family: "Noto Sans CJK KR Medium";
    font-family: var(--medium);
    font-weight: 500;
    line-height: 4rem;
    letter-spacing: -0.03rem;
    color: var(--gray-700);
    padding-left: 10rem;
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
}
</style>


