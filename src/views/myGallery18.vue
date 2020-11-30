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
          </b-tab>
          <b-tab title="공개한 그림" class="tab"></b-tab>
          <b-tab title="내 녹음 듣기" class="tab active">
            <div class="clearfix btns_group">
              <div class="float-left btn-left">
                <b-button class="all_button">
                  <img src="@/assets/images/common/all.png" alt="모든이미지" class="img">
                  <span>ALL</span>
                </b-button>
                <b-button class="drawing_button">
                  <img src="@/assets/images/common/all.png" alt="모든이미지" class="img">
                  <span>Pablo Drawing</span>
                </b-button>
                <b-button class="classic_button">
                  <img src="@/assets/images/common/all.png" alt="모든이미지" class="img" style="width: 1.57rem; height: 2rem;">
                  <span>Pablo Classic</span>
                </b-button>
                <b-button class="canvas_button">
                  <img src="@/assets/images/common/all.png" alt="모든이미지" class="img">
                  <span>Canvas</span>
                </b-button>
              </div>
              <div class="float-right btn-rigth">
                <b-dropdown id="dropdown-1" text="최신 순">
                  <b-dropdown-item style="top: 0.4rem">오래된 순</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <div class="gallery-section">
              <ul class="gallerys d-flex">
                <li class="gallery-g">
                  <div class="recode_icon">
                    <img src="@/assets/images/common/record@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="recode-desc">01:00</div>
                  <div class="play_icon">
                    <img src="@/assets/images/common/pause_dim@2x.png" alt="정지화면" class="img-m">
                  </div>
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                  </div>
                  <div class="dark_bg"></div>
                  <div class="img_title">Curious Stage</div>
                  <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                </li>
                <li class="gallery-g">
                  <div class="recode_icon">
                    <img src="@/assets/images/common/record@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="recode-desc">01:00</div>
                  <div class="play_icon">
                    <img src="@/assets/images/common/play_dim@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                  </div>
                  <div class="dark_bg"></div>
                  <div class="img_title">Curious Stage2</div>
                  <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                </li>
                <li class="gallery-g">
                  <div class="recode_icon">
                    <img src="@/assets/images/common/record@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="recode-desc">00:32</div>
                  <div class="play_icon">
                    <img src="@/assets/images/common/play_dim@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                  </div>
                  <div class="dark_bg"></div>
                  <div class="img_title">Curious Stage 3</div>
                  <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                </li>
                <li class="gallery-g">
                  <div class="recode_icon">
                    <img src="@/assets/images/common/record@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="recode-desc">00:52</div>
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                  </div>
                  <div class="play_icon">
                    <img src="@/assets/images/common/play_dim@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="dark_bg"></div>
                  <div class="img_title">Curious Stage 12</div>
                  <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                </li>
                <li class="gallery-g">
                  <div class="recode_icon">
                    <img src="@/assets/images/common/record@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="recode-desc">00:48</div>
                  <div class="dark_bg"></div>
                  <div class="play_icon">
                    <img src="@/assets/images/common/play_dim@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                  </div>
                  <div class="img_title">Curious Stage 13</div>
                  <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                </li>
                <li class="gallery-g">
                  <div class="recode_icon">
                    <img src="@/assets/images/common/record@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="recode-desc">00:32</div>
                  <div class="dark_bg"></div>
                  <div class="play_icon">
                    <img src="@/assets/images/common/play_dim@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                  </div>
                  <div class="img_title">Curious Stage 14</div>
                  <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                </li>
                <li class="gallery-g">
                  <div class="recode_icon">
                    <img src="@/assets/images/common/record@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="recode-desc">00:34</div>
                  <div class="dark_bg"></div>
                  <div class="play_icon">
                    <img src="@/assets/images/common/play_dim@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                  </div>
                  <div class="img_title">Curious Stage 3</div>
                  <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                </li>
                <li class="gallery-g">
                  <div class="recode_icon">
                    <img src="@/assets/images/common/record@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="recode-desc">00:26</div>
                  <div class="dark_bg"></div>
                  <div class="play_icon">
                    <img src="@/assets/images/common/play_dim@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                  </div>
                  <div class="img_title">Curious Stage 3</div>
                  <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                </li>
                <li class="gallery-g">
                  <div class="recode_icon">
                    <img src="@/assets/images/common/record@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="recode-desc">00:40</div>
                  <div class="dark_bg"></div>
                  <div class="play_icon">
                    <img src="@/assets/images/common/play_dim@2x.png" alt="재생화면" class="img-m">
                  </div>
                  <div class="gallery_img size-img">
                    <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                  </div>
                  <div class="img_title">Curious Stage 3</div>
                  <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                </li>
              </ul>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myGallery18'
}
</script>

<style lang="scss" scoped>

</style>
