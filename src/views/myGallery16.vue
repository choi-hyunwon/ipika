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
          <b-button class="black_btn" v-b-modal.normalPopup1>공개취소</b-button>
        </div>
      </div>
    </div>
    <b-modal id="normalPopup1" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">완전히 삭제하시겠어요?<br/>그림과 녹음 모두 삭제돼요<br/></p>
      <p class="text-sm">삭제한 그림과 녹음은 복구할 수 없어요</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half"  @click="cancel()">삭제하기</b-button>
        <router-link to="/thoughtRecords" class="btn btn-black  btn-half">닫기</router-link>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'MyGallery16'
}
</script>

<style scoped>

</style>
