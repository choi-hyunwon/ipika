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
        <div class="img-m bg">
          <img src="@/assets/images/temp/sample_img_02.png" alt="" class="img-m">
        </div>
      </div>
      <div class="info-section d-flex">
        <div class="img-m profile text-center">
          <img src="@/assets/images/common/check_default@2x.png" alt="">
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
            <div>조회수</div>
            <div>64K</div>
          </li>
          <li class="info">
            <div>좋아요 수</div>
            <div>1728</div>
          </li>
        </ul>
      </div>
      <div class="tab-section">
          <b-tabs justified >
            <b-tab title="내그림" active class="tab">
              <div class="clearfix btns_group">
                <div class="float-left btn-left">
                  <b-button class="all_button">ALL</b-button>
                  <b-button class="drawing_button">Pablo Drawing</b-button>
                  <b-button class="classic_button">Pablo Classic</b-button>
                  <b-button class="canvas_button">Canvas</b-button>
                </div>
               <div class="float-right btn-rigth">
                   <b-dropdown id="dropdown-left" text="최신순" class="gallery_drop">
                     <b-dropdown-item href="#">오래된 순</b-dropdown-item>
                   </b-dropdown>
               </div>
              </div>
            </b-tab>
            <b-tab title="공개한 그림" class="tab">
              <div class="clearfix">
                <div class="float-left">
                  <b-button><img src="@/assets/images/common/all@2x.png" alt="" class="all_icon">ALL</b-button>
                  <b-button variant="danger"><img src="@/assets/images/common/all@2x.png" alt="" class="drawing_icon">Pablo Drawing</b-button>
                  <b-button variant="success"><img src="@/assets/images/common/all@2x.png" alt="" class="classic_icon">Pablo Classic</b-button>
                  <b-button variant="outline-primary"><img src="@/assets/images/common/all@2x.png" alt="" class="canvas_icon">Canvas</b-button>
                </div>
                <ul class="float-right">
                  <li>최신순</li>
                  <li>오래된 순</li>
                </ul>
              </div>
            </b-tab>
            <b-tab title="내 녹음 듣기" class="tab">
              <div class="clearfix">
                <div class="float-left">
                  <b-button>ALL</b-button>
                  <b-button variant="danger">Pablo Drawing</b-button>
                  <b-button variant="success">Pablo Classic</b-button>
                  <b-button variant="outline-primary">Canvas</b-button>
                </div>
                <ul class="float-right">
                  <li>최신순</li>
                  <li>오래된 순</li>
                </ul>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      <div class="gallery-section">
        <div class="gallery-layout">
          <div class="gallery-line d-flex">
            <div class="gallery-desc">
              <div class="gallery-img">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리 사진" class="img-m">
              </div>
              <div class="gallery-title">Curious Stage 3</div>
              <div class="gallery-sub">최초의 사람은 어떤 사람이었을까요?</div>
            </div>
            <div class="gallery-desc">
              <div class="gallery-img">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리 사진" class="img-m">
              </div>
              <div class="gallery-title">Curious Stage 2</div>
              <div class="gallery-sub">내가 좋아하는 꽃을 그려봐!</div>
            </div>
            <div class="gallery-desc">
              <div class="gallery-img">
                <img src="@/assets/images/common/share@2x.png" alt="다운로드 사진" class="img-m download-img" style="width: 6.4rem; height: 6.4rem;">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리 사진" class="img-m">
              </div>
              <div class="gallery-title">Curious Stage 1</div>
              <div class="gallery-sub">내가 좋아하는 꽃을 그려봐</div>
            </div>
          </div>
          <div class="gallery-line d-flex">
            <div class="gallery-desc">
              <div class="gallery-img">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리 사진" class="img-m">
                <img src="@/assets/images/common/share@2x.png" alt="다운로드 사진" class="img-m download-img" style="width: 6.4rem; height: 6.4rem;">
              </div>
              <div class="gallery-title">Curious Stage 14</div>
              <div class="gallery-sub">최초의 사람은 어떤 사람이었을까요?</div>
            </div>
            <div class="gallery-desc">
              <div class="gallery-img">
                <img src="@/assets/images/common/share@2x.png" alt="다운로드 사진" class="img-m download-img" style="width: 6.4rem; height: 6.4rem;">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리 사진" class="img-m">
              </div>
              <div class="gallery-title">Curious Stage 13</div>
              <div class="gallery-sub">내가 좋아하는 꽃을 그려봐!</div>
            </div>
            <div class="gallery-desc">
              <div class="gallery-img">
                <img src="@/assets/images/common/share@2x.png" alt="다운로드 사진" class="img-m download-img" style="width: 6.4rem; height: 6.4rem;">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리 사진" class="img-m">
              </div>
              <div class="gallery-title">Curious Stage 12</div>
              <div class="gallery-sub">내가 좋아하는 꽃을 그려봐</div>
            </div>
          </div>
          <div class="gallery-line d-flex">
            <div class="gallery-desc">
              <div class="gallery-img">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리 사진" class="img-m">
              </div>
              <div class="gallery-title">Curious Stage 3</div>
              <div class="gallery-sub">최초의 사람은 어떤 사람이었을까요?</div>
            </div>
            <div class="gallery-desc">
              <div class="gallery-img">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리 사진" class="img-m">
              </div>
              <div class="gallery-title">Curious Stage 2</div>
              <div class="gallery-sub">내가 좋아하는 꽃을 그려봐!</div>
            </div>
            <div class="gallery-desc">
              <div class="gallery-img">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리 사진" class="img-m">
              </div>
              <div class="gallery-title">Curious Stage 1</div>
              <div class="gallery-sub">내가 좋아하는 꽃을 그려봐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myGallery1'
}
</script>

<style lang="scss" scoped>

</style>
