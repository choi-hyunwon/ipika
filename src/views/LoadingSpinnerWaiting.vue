<template>
  <div class="wrap bg-ivory">
    <div class="header">
      <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      <div class="box-close">
        <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
      </div>
    </div>
    <div class="contents">
      <p class="title red top">로딩스피너 제작 예정</p>
      <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      <div class="title bottom">파블로가 그림을 분석하고 있어요 </div>
      <div class="desc">조금만 기다려주세요!</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoadingSpinnerWaiting',
  mounted () {
    setTimeout(() => {
      this.$router.push('/TestingResult')
    }, 1000 * 2)
  }
}
</script>

<style lang="scss" scoped>
.contents {
  padding-top: 22.9rem;
  .title {
    font-family: var(--bold);
    font-size: 5.6rem;
    font-weight: bold;
    line-height: 8rem;
    letter-spacing: -0.03rem;
    text-align: center;
    &.top {
      margin-bottom: 10.7rem;
    }
    &.bottom {
      margin-bottom: 1.2rem;
    }
    &.red {
      color: var(--red-400);
    }
  }
  .symbol {
    width: 6.4rem;
    height: 6.4rem;
    margin: 0 auto 5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    font-size: 3.2rem;
    line-height: 4.8rem;
    letter-spacing: -0.03rem;
    text-align: center;
    color: var(--gray-700);
  }
}
</style>
