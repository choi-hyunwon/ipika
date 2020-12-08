<template>
  <div class="header ivory">

    <router-link to="/Listening" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></router-link>

    <!-- 뒤로 가기 -->
    <Confirm v-slot="slotProps"
             :okText="'뒤로 갈래요'"
             :cancelText="'닫기'"
             :backText="'그림은 저장되지 않습니다.'"
    >
      <button class="symbol" @click="showConfirm(slotProps,1)">
        <img src="@/assets/images/common/arrow_left@2x.png" alt="">
      </button>
    </Confirm>

    <!-- 가리기 버튼 -->
    <div class="btn-wrap">
      <button><img src="@/assets/images/common/img_invisible@2x.png" alt=""></button>
    </div>

    <!-- 배경 교재 주제 노출 -->
    <!--<div>
      배경 교재 주제 노출 퍼블리싱 작업 필요!!
    </div>-->

    <!-- 우측 영상보기 / 배경교재 -->
    <div class="flex-box">
      <button v-b-modal.videoReviewPopup class="btn-right" @click="popUpOpen" >
        <span class="img"><img src="@/assets/images/common/ic-play@2x.png" alt=""></span>
        <span class="tit">영상보기</span>
      </button>
      <button v-b-modal.studyBookPopup class="btn-right" @click="popUpOpen">
        <span class="img"><img src="@/assets/images/common/ic-img@2x.png" alt="" ></span>
        <span class="tit">배경교재</span>
      </button>
      <div class="box-close">
        <button @click="close" style="padding-top: 0;" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'DrawingHeader'
}
</script>


<style lang="scss" scoped>
.header {
  .btn-wrap {
    position: absolute;
    display: inline-block;
    top: 3rem;
    left: 12rem;
    button {
      display: inline-block;
      width: 12.7rem;
      height: 6rem;
      img {
        width: 100%;
        height: 100%;
      }
      &:first-child {
        margin-right: 1.2rem;
      }
    }
  }
}
</style>
