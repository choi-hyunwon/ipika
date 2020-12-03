<template>
  <div>
    <div class="empty" v-if="myTab.empty">
      <div class="gallery-section">
        <ul class="gallerys">
          <li class="gallery-default">
            <div class="emoji-icon">
              <img src="@/assets/images/common/emoji@2x.png" alt="이모티콘" class="img-m">
            </div>
            <div class="emoji-desc">아직 그린 그림이 없어요,<br>학습을 시작해보세요!</div>
            <div class="emoji-button">
              <router-link to="/canvas" class="btn btn-blue5 btn-half">시작하기</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="list" v-else>
      <div class="clearfix btns_group">
        <div class="float-left btn-left">
          <b-button class="all_button" aria-pressed="true">
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
              <div class="img_icon" v-b-modal.normalPopup1>
                <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m" v-b-modal.normalPopup1>
              </div>
            </div>
            <div class="img_title">Curious Stage 3</div>
            <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>

          </li>
          <li class="gallery-g">
            <div class="gallery_img size-img">
              <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
              <div class="img_icon" v-b-modal.normalPopup1>
                <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m" v-b-modal.normalPopup1>
              </div>
            </div>
            <div class="img_title">Curious Stage 12</div>
            <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>

          </li>
          <li class="gallery-g">
            <div class="gallery_img size-img">
              <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
              <div class="img_icon">
                <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m" v-b-modal.normalPopup1>
              </div>
            </div>
            <div class="img_title">Curious Stage 13</div>
            <div class="img_desc">최초의 사람은 어떤 사람이었을까요?</div>

          </li>
          <li class="gallery-g">
            <div class="gallery_img size-img">
              <img src="@/assets/images/temp/sample_img_01.jpg" alt="갤러리사진" class="img-m">
              <div class="img_icon">
                <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m" v-b-modal.normalPopup1>
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'myGalleryPicture',

  components: {},

  mixins: [],

  props: {},

  data () {
    return {
      myTab: {
        empty: false
      },
    }
  },

  computed: {},

  watch: {},

  created () {
  },

  methods: {}
}

</script>

<style scoped>

</style>
