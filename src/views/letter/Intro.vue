<template>
  <div class="wrap bg-ivory">
    <LetterHeader/>
    <div class="row">
      <div class="col col-6">
        <div class="symbol-wrap">
          <div class="symbol" :class="`stage_0${letter.stageId}`"></div>
          <span class="text">{{letter.stageName}} Stage {{letter.stageId}}</span></div>
        <div class="title">{{letter.stepSubejct}}</div>
        <div class="btn-group">
          <router-link to="/Watching" class="btn btn-dark">시작하기</router-link>
        </div>
      </div>
      <div class="col col-6">
        <div class="img"><img :src=letter.stepImageUrl alt="학습시작이미지"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import LetterHeader from '@/components/letter/LetterHeader'

export default {
  name: 'Intro',
  components : {LetterHeader},
  mounted () {
    this.Android.tts(this.letter.stepSubejct)
  },
  computed:{
    ...mapGetters({
      letter: 'getLetter'
    })
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  > .row {
    height: calc(100% - 8rem);
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
