<template>
  <div class="wrap">
    <div class="header ivory bg-ivory d-flex">
      <div v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></div>
      <div class="gallery-title">
        <router-link to="/">
          <span class="title-center">My Gallery</span>
        </router-link>
      </div>
      <div class="box-close">
        <router-link to="/PabloMain" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
      </div>
    </div>
    <div class="contents">
      <div class="bgc-section">
        <div class="bg">
          <!--          <img src="@/assets/images/temp/sample_img_02.png" alt="배경화면" class="img-m">-->
          <div class="img-m" style="width:192rem; height: 40rem; background-color:#a1ceff;"></div>
        </div>
        <div class="setting-img">
          <img v-b-modal.normalPopup1 src="@/assets/images/common/setting_default.png" alt="세팅" class=" img-m">
        </div>
      </div>
      <div class="info-section d-flex">
        <div class="profile profile_r">
          <!--          <img src="@/assets/images/common/check_default@2x.png" alt="프로필사진수정" class="img-m profile_a">-->
          <img src="@/assets/images/common/Group 426@2x.png" alt="프로필사진" class="img-m">
          <div class="text-center name">김정윤</div>
          <div class="text-center english-name">Twinkle Stage</div>
        </div>
        <ul class="infomation d-flex">
          <li class="info">
            <div>내 그림</div>
            <div>0</div>
          </li>
          <li class="info">
            <div>공개한 그림</div>
            <div>0</div>
          </li>
          <li class="info">
            <div>조회 수</div>
            <div>0</div>
          </li>
          <li class="info">
            <div>좋아요 수</div>
            <div>0</div>
          </li>
        </ul>
      </div>
      <div class="tab-section">
        <b-tabs justified>
          <b-tab title="내그림" class="tab active">
            <div class="gallery-section">
              <ul class="gallerys d-flex">
                <li class="gallery-default">
                  <div class="emoji-icon">
                    <img src="@/assets/images/common/emoji@2x.png" alt="이모티콘" class="img-m">
                  </div>
                  <div class="emoji-desc">아직 그린 그림이 없어요,<br>학습을 시작해보세요!</div>
                  <div class="emoji-button">
                    <b-button>시작하기</b-button>
                  </div>
                </li>
              </ul>
            </div>
          </b-tab>
          <b-tab title="공개한 그림" class="tab"></b-tab>
          <b-tab title="내 녹음 듣기" class="tab">
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <b-modal id="normalPopup1" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/emoji@2x.png" alt=""></div>
      </template>
      <p class="text">직접 그린 그림으로만<br/> 배경을 설정할 수 있어요<br/></p>
      <p class="text-sm">파블로 학습을 시작해보세요!</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half"  @click="cancel()">닫기</b-button>
        <router-link to="/thoughtRecords" class="btn btn-blue5  btn-half">시작하기</router-link>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'myGallery1'
}
</script>

<style lang="scss" scoped>

</style>
