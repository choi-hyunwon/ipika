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
          <img src="@/assets/images/temp/sample_img_02.png" alt="배경화면" class="img-m">
        </div>
        <div class="setting-img">
          <img src="@/assets/images/common/setting_default.png" alt="세팅" class=" img-m">
        </div>
      </div>
      <div class="info-section d-flex">
        <div class="profile profile_r">
          <img src="@/assets/images/common/check_default@2x.png" alt="프로필사진" class="img-m profile_a">
          <img src="@/assets/images/common/Group 426@2x.png" alt="프로필사진수정" class="img-m">
          <div class="text-center name">김정윤</div>
          <div class="text-center english-name">Twinkle Stage</div>
        </div>
        <ul class="infomation d-flex">
          <li class="info">
            <div>내 그림</div>
            <div>47</div>
          </li>
          <li class="info">
            <div>공개한 그림</div>
            <div>32</div>
          </li>
          <li class="info">
            <div>조회 수</div>
            <div>64K</div>
          </li>
          <li class="info">
            <div>좋아요 수</div>
            <div>1728</div>
          </li>
        </ul>
      </div>
      <div class="tab-section">
        <b-tabs justified>
          <b-tab title="내그림" class="tab">
            <div class="clearfix btns_group">
              <div class="float-left btn-left">
                <router-link to="/mygallery2"><b-button  class="all_button" aria-pressed="true">
                  <img src="@/assets/images/common/all.png" alt="모든이미지" class="img">
                  <span>ALL</span>
                </b-button></router-link>
                <router-link to="/mygallery3"><b-button class="drawing_button">
                  <img src="@/assets/images/common/all.png" alt="모든이미지" class="img">
                  <span>Pablo Drawing</span>
                </b-button></router-link>
                <router-link to="/mygallery4"><b-button class="classic_button">
                  <img src="@/assets/images/common/all.png" alt="모든이미지" class="img" style="width: 1.57rem; height: 2rem;">
                  <span>Pablo Classic</span>
                </b-button></router-link>
                <router-link to="/mygallery6"><b-button :pressed="true" class="canvas_button">
                  <img src="@/assets/images/common/all.png" alt="모든이미지" class="img">
                  <span>Canvas</span>
                </b-button></router-link>
              </div>
              <div class="float-right btn-rigth">
                <b-dropdown id="dropdown-1" text="최신 순">
                  <b-dropdown-item style="top: 0.4rem">오래된 순</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <div class="gallery-section">
              <ul class="gallerys">
                <li class="gallery-g" >
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                  </div>
                  <div class="img_title">2020.10.02</div>
                  <div class="img_desc">유명한 음악가의 음악을 그림으로 표현해봐!</div>
                </li>
                <li class="gallery-g">
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                    <div v-b-modal.normalPopup1 class="img_icon">
                      <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m">
                    </div>
                  </div>
                  <div class="img_title">2020.09.28</div>
                  <div class="img_desc">내가 좋아하는 꽃을 그려봐!</div>

                </li>
                <li class="gallery-g">
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                    <div v-b-modal.normalPopup1 class="img_icon">
                      <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m">
                    </div>
                  </div>
                  <div class="img_title">2020.08.31</div>
                  <div class="img_desc">내가 좋아하는 꽃을 그려봐!</div>

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
        <div class="symbol"><img src="@/assets/images/common/check_blue@2x.png" alt=""></div>
      </template>
      <p class="text">오픈갤러리에 그림을<br/>공개하시겠어요?<br/></p>
      <p class="text-sm">친구들에게 그림을 보여주세요!</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half"  @click="cancel()">닫기</b-button>
        <b-button v-b-modal.normalPopup1-1  class="btn btn-black  btn-half" >공개하기</b-button>
      </template>
    </b-modal>
    <b-modal id="normalPopup1-1" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_green@2x.png" alt=""></div>
      </template>
      <p class="text">그림이 친구들에게<br/>공개되었습니다!<br/></p>
      <p class="text-sm">오픈갤러리에서 확인해보세요!</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half"  @click="cancel()">닫기</b-button>
        <router-link to="/mygallery7" class="btn btn-black  btn-half">오픈갤러리 가기</router-link>
      </template>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: 'myGallery6'
}
</script>

<style lang="scss" scoped>

</style>
