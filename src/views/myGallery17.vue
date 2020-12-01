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
      <div class="tab-section">
            <div class="clearfix btns_group">
              <div class="float-left btn-left">
                <b-button class="all_button active">
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
              <ul class="gallerys">
                <li v-b-modal.normalPopup1 class="gallery-g" >
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
                  <div class="recode-desc">00:18</div>
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
                  <div class="recode-desc">00:22</div>
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
                  <div class="recode-desc">00:23</div>
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
                  <div class="recode-desc">00:42</div>
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
                  <div class="recode-desc">00:32</div>
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

              </ul>
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
        <b-button variant="gray" class="btn-half">삭제하기</b-button>
        <b-button class="btn btn-black  btn-half" @click="cancel()">닫기</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'myGallery17',

  data() {
    return {
      tabIndex: 3
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
