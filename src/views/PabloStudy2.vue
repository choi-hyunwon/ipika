<template>
  <div class="wrap">
    <div class="header ivory">
      <router-link to="/PabloStudy1" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></router-link>
      <div class="flex-box">
        <router-link to="/" class="btn-view">
          <span class="img"><img src="@/assets/images/common/ic-drawing@2x.png" alt=""></span>
          <span class="tit">주제보기</span>
        </router-link>
        <div class="box-close">
          <router-link to="" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
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
          <router-link to="/" class="btn btn-dark"><i class="ic-play"><img src="@/assets/images/common/play@2x.png" alt=""></i><span>재생하기</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PabloStudy2'
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: var(--ivory-200);
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


