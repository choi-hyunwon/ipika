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
        <img src="@/assets/images/temp/sample_img_02.png" alt="img-m" style="width: 192rem">
        </div>
        <div class="btn_group">
          <b-button v-b-modal.ImgDelete>삭제하기</b-button>
        </div>
      </div>
    </div>
    <b-modal id="ImgDelete" centered title="파블로 알림" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">완전히 삭제하시겠어요?<br/>그림과 녹음 모두 삭제되요<br/></p>
      <p class="text-sm">삭제된 그림과 녹음은 복구할 수 없어요</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half">삭제하기</b-button>
        <b-button class="btn btn-black  btn-half" @click="cancel()">닫기</b-button>
      </template>
    </b-modal>
    <b-modal id="GalleryPublic" centered title="파블로 알림" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_green@2x.png" alt=""></div>
      </template>
      <p class="text">그림이 친구들에게<br/>공개되었습니다!<br/></p>
      <p class="text-sm">오픈갤러리에서 확인해보세요</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half"  @click="cancel()">닫기</b-button>
        <router-link to="/thoughtRecords" class="btn btn-black  btn-half">오픈갤러리 가기</router-link>
      </template>
    </b-modal>
  </div>

</template>
<script>
export default {
  name: 'MainGalleryDetail'
}
</script>

<style lang="scss" scoped>

</style>
