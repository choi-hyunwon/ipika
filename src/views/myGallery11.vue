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
        <div class="btn_group">
          <b-button>삭제하기</b-button>
          <b-button>오픈갤러리 공개하기</b-button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'MyGallery11'
}
</script>

<style lang="scss" scoped>

</style>
