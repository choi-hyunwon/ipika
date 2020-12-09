<template>
  <div class="wrap bg-ivory">
    <div class="header ivory">
      <Confirm v-slot="slotProps"
               :okText="'네'"
               :cancelText="'아니요'"
               :completeText = "'이전 화면으로 이동할까요? </br> 진행중인 학습 내용은 </br> 저장되지 않아요!'">
        <button class="symbol" @click="globalUtils.confirm(slotProps,'goBack')">
          <img src="@/assets/images/common/arrow_left@2x.png" alt="">
        </button>
      </Confirm>
      <div class="flex-box">
        <Alert v-slot="slotProps">
          <button @click="globalUtils.alert(slotProps,'video')" class="btn-right">
            <span class="img"><img src="@/assets/images/common/ic-play@2x.png" alt=""></span>
            <span class="tit">영상보기</span>
          </button>
        </Alert>

        <Alert v-slot="slotProps"
               :boldText="'주제보기'"
               :text="'주제보기'"
               :buttonText="'닫기'">
          <button @click="globalUtils.alert(slotProps,'subject')" class="btn-right">
            <span class="img"><img src="@/assets/images/common/ic-drawing@2x.png" alt=""></span>
            <span class="tit">주제보기</span>
          </button>
        </Alert>

        <div class="box-close">
          <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="txt-area">
        <p class="txt-lg">다른 친구들은 어떻게<br/>
          생각하는지 들어볼까요?</p>
        <p class="txt-sm">
          친구들의 생각을 듣고, 내 생각과 비교해봐요!
        </p>
      </div>
      <!-- todo! slider? scroll? -->
      <div class="img-slider">
        <ul>
          <li class="item">
            <router-link to="" class="img">
              <img src="@/assets/images/temp/sample_img_03.png" alt="">
            </router-link>
            <p class="title">김정윤</p>
            <p class="time">00:59</p>
          </li>
          <li class="item pause">
            <router-link to="" class="img">
              <img src="@/assets/images/temp/sample_img_03.png" alt="">
            </router-link>
            <p class="title">김정윤</p>
            <p class="time">00:59</p>
          </li>
          <li class="item pause">
            <router-link to="" class="img">
              <img src="@/assets/images/temp/sample_img_03.png" alt="">
            </router-link>
            <p class="title">김정윤</p>
            <p class="time">00:59</p>
          </li>
          <li class="item pause">
            <router-link to="" class="img">
              <img src="@/assets/images/temp/sample_img_03.png" alt="">
            </router-link>
            <p class="title">김정윤</p>
            <p class="time">00:59</p>
          </li>
          <li class="item pause">
            <router-link to="" class="img">
              <img src="@/assets/images/temp/sample_img_03.png" alt="">
            </router-link>
            <p class="title">김정윤</p>
            <p class="time">00:59</p>
          </li>
        </ul>
      </div>
      <div class="navigation">
        <button class="swipe"><img src="@/assets/images/common/swipe_left_default@2x.png" alt=""></button>
        <button class="swipe"><img src="@/assets/images/common/swipe_left_active@2x.png" alt=""></button>
        <button class="swipe"><img src="@/assets/images/common/swipe_right_active@2x.png" alt=""></button>
      </div>
      <div class="btn-wrap"><router-link to="/canvas?page=letter" class="btn btn-dark">다 들었어요!</router-link></div>
      <!--      <div class="btn-wrap"><button class="btn btn-dark disabled">다 들었어요!</button></div>-->
    </div>
    <div class="background-dark">
      <router-link to="/"><img src="@/assets/images/common/dim close@2x.png" class="close-icon" alt=""></router-link>
      <h2 class="subtitle">음성파일 자막 내용 노출 영역입니다.음성파일 자막 내용 노출 영역입니다.음성파일 자막 내용 노출 영역입니다.음성파일 자막 내용 노출 영역입니다.음성파일 자막 내용 노출 영역입니다.</h2>
    </div>
    <div class="item play itemplay">
      <router-link to="" class="img">
        <img src="@/assets/images/temp/sample_img_03.png" alt="">
        <!--        큰 원-->
        <img src="@/assets/images/common/pause_blue@2x.png" alt="" class="btn_toggle">
        <img src="@/assets/images/common/play_blue@2x.png" alt="" class="btn_toggle">
        <!--  이미지 같은 위치에 존재함  이미지만 변경하시면되요 토글버튼-->
      </router-link>
      <p class="title">김정윤</p>
    </div>
  </div>
</template>

<script>
import Confirm from '@/components/popup/Confirm'
import Alert from '@/components/popup/Alert'
export default {
  name: 'peopleThinking',
  components: { Alert, Confirm},
  created() {
    this.$EventBus.$on('back',this.goBack)
  },
  methods : {
    goBack(){
      this.$router.push('/Recording')
    }
  }
}
</script>

<style lang="scss" scoped>
.contents {
  position: relative;
  width: 100%;
  height: calc(100% - 12rem);
  .txt-area {
    padding-top: 8rem;
    padding-left: 10rem;
    margin-bottom: 12rem;
    .txt-lg {
      font-family: var(--bold);
      font-size: 4rem;
      font-weight: bold;
      line-height: 5.6rem;
      letter-spacing: -0.03rem;
      margin-bottom: 1.2rem;
    }
    .txt-sm {
      font-size: 3.2rem;
      line-height: 4.8rem;
      letter-spacing: -0.03rem;
      color: var(--gray-black);
    }
  }
  .img-slider {
    width: 100%;
    ul {
      height: 47rem;
      overflow-x: scroll;
      white-space: nowrap;
      padding-left: 10rem;
    }
    .item {
      position: relative;
      width: 32rem;
      display: inline-block;
      margin-right: 10rem;
      a {
        position: relative;
      }
      .img {
        display: inline-block;
        width: 32rem;
        height: 32rem;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 10rem;
        img {
          width: auto;
          height: 100%;
        }
      }
      .title {
        font-family: var(--bold);
        font-size: 2.4rem;
        font-weight: bold;
        line-height: 4rem;
        letter-spacing: -0.03rem;
        text-align: center;
        margin-top: 2.4rem;
      }
      .time {
        font-family: var(--Inter);
        font-size: 2rem;
        font-weight: 600;
        line-height: 3.6rem;
        letter-spacing: -0.03rem;
        text-align: center;
        color: var(--gray-600);
      }
      &.pause {
        a {
          &::after {
            content: '';
            position: absolute;
            display: block;
            width: 6rem;
            height: 6rem;
            background-image: url("~@/assets/images/common/btn_play@2x.png");
            background-size: cover;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      &.play {
        a {
          &::after {
            content: '';
            position: absolute;
            display: block;
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            background-color: rgba(21, 133, 255,.6);
            background-image: url("~@/assets/images/common/ic-pause-white@2x.png");
            background-size: 2.4rem 2.4rem;
            background-position: center;
            background-repeat: no-repeat;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .img {
          box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.08), 0 40px 60px 0 rgba(0, 0, 0, 0.2);
        }
        .time {
          color: var(--blue-400);
        }
        .title {
          margin-top: 4.4rem;
        }
      }
    }
  }
  .navigation {
    position: absolute;
    bottom: 10rem;
    left: 10rem;
    .swipe {
      display: inline-block;
      width: 8rem;
      height: 8rem;
      margin-right: 1.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .btn-wrap {
    position: absolute;
    bottom: 10rem;
    right: 10rem;
  }
}
.background-dark{
  position: absolute;
  top: 0;
  left: 0;
  width: 192rem;
  height: 120rem;
  opacity: 0.7;
  background-color: var(--gray-black);
  .close-icon{
    position: absolute;
    top: 2.4rem;
    right: 2.4rem;
    width: 7.2rem;
    height: 7.2rem;
  }
  .subtitle{
    margin: 0 10rem;
    font-family: NotoSansCJKKR;
    font-size: 4rem;
    font-weight: bold;
    line-height: 5.6rem;
    letter-spacing: -0.03rem;
    text-align: center;
    color: var(--gray-white);
    bottom: 10rem;
    margin-top: 98.8rem;
  }
}
.itemplay {
  z-index: 999;
  position: relative;
  width: 48rem;
  display: inline-block;
  top: -96rem;
  left: 72rem;
  a {
    position: relative;
    border: 2rem solid var(--blue-500);
  }
  .img {
    display: inline-block;
    width: 48rem;
    height: 48rem;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: auto;
      height: 100%;
    }
    .btn_toggle{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10rem;
      height: 10rem;
      transform: translate(-50%, -50%);
    }
  }
  .title {
    font-family: var(--bold);
    font-size: 4rem;
    line-height: 5.6rem;
    letter-spacing: -0.03px;
    text-align: center;
    color: var(--gray-white);
    margin-top: 6rem;
  }
  .progressbar-circle{

  }
}







$borderWidth: 5px;
$animationTime: .5s;
$border-color-default: #efefef;
$border-color-fill: #ffb43e;
$size: 160px;
$howManySteps: 100;

.progress {
  width: $size;
  height: $size;
  line-height: $size;
  background: none;
  margin: 0 auto;
  box-shadow: none;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: $borderWidth solid $border-color-default;
    position: absolute;
    top: 0;
    left: 0;
  }
  > span {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .progress-left {
    left: 0;
  }
  .progress-bar {
    width: 100%;
    height: 100%;
    background: none;
    border-width: $borderWidth;
    border-style: solid;
    position: absolute;
    top: 0;
    border-color: $border-color-fill;
  }
  .progress-left .progress-bar {
    left: 100%;
    border-top-right-radius: ($size/2);;
    border-bottom-right-radius: ($size/2);;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left;
  }
  .progress-right {
    right: 0;
    .progress-bar {
      left: -100%;
      border-top-left-radius: ($size/2);;
      border-bottom-left-radius: ($size/2);;
      border-right: 0;
      -webkit-transform-origin: center right;
      transform-origin: center right;
      //animation: loading-1 1.8s linear forwards;
    }
  }
  .progress-value {
    display: flex;
    border-radius: 50%;
    font-size: 1rem;
    text-align: center;
    line-height: 20px;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-weight: 300;
    div {
      //margin-top: 10px;
    }
    span {
      font-size: 12px;
      text-transform: uppercase;
    }
  }
}
@for $i from 1 through $howManySteps {
  $stepName: ($i*(100 / $howManySteps));

  //animation only the left side if below 50%
  @if $i <= ($howManySteps/2) {
    .progress[data-percentage="#{$stepName}"] {
      .progress-right .progress-bar {
        animation: loading-#{$i} $animationTime linear forwards;
      }
      .progress-left .progress-bar {animation: 0;}
    }
  }
  //animation only the right side if above 50%
  @if $i > ($howManySteps/2)  {
    .progress[data-percentage="#{$stepName}"] {
      .progress-right .progress-bar {
        animation: loading-#{($howManySteps/2)} $animationTime linear forwards; //set the animation to longest animation
      }
      .progress-left .progress-bar {
        animation: loading-#{$i - ($howManySteps/2)} $animationTime linear forwards $animationTime;
      }
    }
  }
}

//animation
@for $i from 1 through ($howManySteps/2) {
  $degrees: (180/($howManySteps/2));
  $degrees: ($degrees*$i);
  @keyframes loading-#{$i}{
    0%{
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100%{
      -webkit-transform: rotate($degrees);
      transform: rotate(#{$degrees}deg);
    }
  }
}













</style>
