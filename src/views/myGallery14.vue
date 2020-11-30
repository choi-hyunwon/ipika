<template>
  <div class="wrap">
    <div class="header ivory bg-ivory d-flex">
      <div v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></div>
      <div class="gallery-title">
        <router-link to="/">
          <span class="title-center">최초의 사람은 어떤 사람이였을까요?</span>
        </router-link>
      </div>
      <div class="box-close">
        <router-link to="/PabloMain" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
      </div>
    </div>
    <div class="contents no_scroll">
      <div class="bg_gallery">
        <div class="gallery_img">
          <img src="@/assets/images/temp/sample_img_01.jpg" alt="img-m">
        </div>
        <div class="heart_like d-flex">
            <div class="heart-icon">
              <img src="@/assets/images/common/emoji@2x.png" alt="" class="img-m">
            </div>
            <div class="heart-number text">1,245</div>
            <div class="eye-icon">
              <img src="@/assets/images/common/emoji@2x.png" alt="" class="img-m">
            </div>
            <div class="eye-number text">3,882</div>
          </div>
        <div class="like-icon">
          <img src="@/assets/images/common/like_big default.png" alt="하트아이콘" class="img-m">
        </div>
        <div class="btn_group">
          <b-button class="pink_btn">삭제하기</b-button>
          <b-button class="black_btn">공개취소</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyGallery14'
}
</script>

<style scoped>

</style>
