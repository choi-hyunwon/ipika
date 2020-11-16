<template>
  <div class="wrap">
    <div class="row">
      <div class="col col-6">
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
        <div class="title">Ai Art Tutor<br/>PABLO</div>
        <p class="desc">생각을 표현해보는 미술교육 서비스</p>
        <div class="btn-group">
          <router-link to="/Agreement" class="btn btn-dark">시작하기</router-link>
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
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.wrap {
  .symbol {
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 4rem;
    left: 4rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    font-family: var(--Inter);
    font-weight: bold;
    font-size: 12rem;
    line-height: 13.6rem;
    letter-spacing: -.03rem;
    padding-top: 20.8rem;
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


