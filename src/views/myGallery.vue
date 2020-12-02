<template>
  <div class="wrap">
    <div class="header ivory bg-ivory d-flex">
      <router-link to="/MyGalleryMain" v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></router-link>
      <div class="gallery-title">
        <router-link to="/">
          <span class="title-center">My Gallery</span>
        </router-link>
      </div>
      <div class="box-close">
        <router-link to="/MyGalleryMain" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
      </div>
    </div>
    <div class="contents">
      <div class="bgc-section">
        <div class="bg">
          <!--          <img src="@/assets/images/temp/sample_img_02.png" alt="배경화면" class="img-m">-->
          <div class="img-m" style="width:192rem; height: 40rem; background-color:#eee9e3;"></div>
        </div>
        <div class="setting-img">
          <img src="@/assets/images/common/setting_default.png" alt="세팅" class=" img-m" @click="settingPopup">
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
            <div class="empty" v-if="myTab.empty">
              <div class="gallery-section">
                <ul class="gallerys">
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
            </div>
            <div class="list" v-if="!myTab.empty">
              <div class="clearfix btns_group">
                <div class="float-left btn-left">
                  <router-link to="/mygallery2">
                    <b-button :pressed="true" class="all_button" aria-pressed="true">
                      <img src="@/assets/images/common/all.png" alt="모든이미지" class="img">
                      <span>ALL</span>
                    </b-button>
                  </router-link>
                  <router-link to="/mygallery3">
                    <b-button class="drawing_button">
                      <img src="@/assets/images/common/all.png" alt="모든이미지" class="img">
                      <span>Pablo Drawing</span>
                    </b-button>
                  </router-link>
                  <router-link to="/mygallery4">
                    <b-button class="classic_button">
                      <img src="@/assets/images/common/all.png" alt="모든이미지" class="img" style="width: 1.57rem; height: 2rem;">
                      <span>Pablo Classic</span>
                    </b-button>
                  </router-link>
                  <router-link to="/mygallery6">
                    <b-button class="canvas_button">
                      <img src="@/assets/images/common/all.png" alt="모든이미지" class="img">
                      <span>Canvas</span>
                    </b-button>
                  </router-link>
                </div>
                <div class="float-right btn-rigth">
                  <b-dropdown id="dropdown-1" text="최신 순">
                    <b-dropdown-item style="top: 0.4rem">오래된 순</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <div class="gallery-section">
                <ul class="gallerys">
                  <li class="gallery-g">
                    <div class="gallery_img size-img">
                      <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                    </div>
                    <div class="img_title">Curious Stage</div>
                    <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                  </li>
                  <li class="gallery-g">
                    <div class="gallery_img size-img">
                      <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                    </div>
                    <div class="img_title">Curious Stage2</div>
                    <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                  </li>
                  <li class="gallery-g">
                    <div class="gallery_img size-img">
                      <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                      <div class="img_icon">
                        <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m">
                      </div>
                    </div>
                    <div class="img_title">Curious Stage 3</div>
                    <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>

                  </li>
                  <li class="gallery-g">
                    <div class="gallery_img size-img">
                      <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                      <div class="img_icon">
                        <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m">
                      </div>
                    </div>
                    <div class="img_title">Curious Stage 12</div>
                    <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>

                  </li>
                  <li class="gallery-g">
                    <div class="gallery_img size-img">
                      <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                      <div class="img_icon">
                        <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m">
                      </div>
                    </div>
                    <div class="img_title">Curious Stage 13</div>
                    <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>

                  </li>
                  <li class="gallery-g">
                    <div class="gallery_img size-img">
                      <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                      <div class="img_icon">
                        <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m">
                      </div>
                    </div>
                    <div class="img_title">Curious Stage 14</div>
                    <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                  </li>
                  <li class="gallery-g">
                    <div class="gallery_img size-img">
                      <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                    </div>
                    <div class="img_title">Curious Stage 3</div>
                    <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                  </li>
                  <li class="gallery-g">
                    <div class="gallery_img size-img">
                      <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                    </div>
                    <div class="img_title">Curious Stage 3</div>
                    <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                  </li>
                  <li class="gallery-g">
                    <div class="gallery_img size-img">
                      <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
                    </div>
                    <div class="img_title">Curious Stage 3</div>
                    <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>
                  </li>
                </ul>
              </div>
            </div>
          </b-tab>
          <b-tab title="내 녹음 듣기" class="tab"></b-tab>
        </b-tabs>
      </div>
    </div>
    <b-modal id="GalleryBgSet" centered title="파블로 알림" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/emoji@2x.png" alt=""></div>
      </template>
      <p class="text">직접 그린 그림으로만<br/> 배경을 설정할 수 있어요<br/></p>
      <p class="text-sm">파블로 학습을 시작해보세요!</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancel()">닫기</b-button>
        <b-button class="btn btn-blue5 btn-half">시작하기</b-button>
      </template>
    </b-modal>


    <b-modal id="galleryBgChange" centered hide-footer modal-class="galleryBgChange">
      <button class="btn-close"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
      <div class="content">
        <div class="c-header">
          <p class="title">배경 그림 선택하기</p>
          <p class="desc">그림의 중앙부분이 배경그림으로 보여져요!</p>
        </div>
        <div class="c-body">
          <div class="btns_group d-flex">
            <b-button :pressed="true" class="all_button">
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
          <ul class="scroll d-flex">
            <li class="background-img">
              <router-link to="">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="" class="img-m">
              </router-link>
            </li>
            <li class="background-img">
              <router-link to="">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="" class="img-m">
              </router-link>
            </li>  <li class="background-img">
            <router-link to="">
              <img src="@/assets/images/temp/sample_img_01.jpg" alt="" class="img-m">
            </router-link>
          </li>
            <li class="background-img">
              <router-link to="">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="" class="img-m">
              </router-link>
            </li>
            <li class="background-img">
              <router-link to="">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="" class="img-m">
              </router-link>
            </li>
            <li class="background-img">
              <router-link to="">
                <img src="@/assets/images/temp/sample_img_01.jpg" alt="" class="img-m">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'myGallery',
  data () {
    return {
      myTab: {
        empty: false
      }
    }
  },
  computed: {
  },
  methods: {
    settingPopup () {
      if (!this.myTab.empty) {
        this.$bvModal.show('GalleryBgSet')
      } else {
        this.$bvModal.show('galleryBgChange')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
