<template>
  <div>
    <div class="empty" v-if="empty">
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

            <b-button v-for="(filterItem, index) in filter"
                      :key="index"
                      aria-pressed="true"
                      :data="filterItem"
                      :class="{'selected' : activeIndex === index}"
                      @click="onClick(index)"
            >
              <img v-if="filterItem.src" src="@/assets/images/common/all.png" alt="모든이미지" class="img">
              <span>{{ filterItem.title }}</span>
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
          <li class="gallery-g" v-for="(item, index) in userGalleryMypicture.pictures">
            <div class="gallery_img size-img">
              <img :src="item.userPicture" alt="갤러리사진" class="img-m">
              <div class="img_icon" v-b-modal.normalPopup1>
                <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m" v-b-modal.normalPopup1>
              </div>
            </div>
            <div class="img_title">{{ item.stageName || 'stage'}} {{ item.stageId || 'step'}}</div>
            <div class="img_desc">{{ item.stepSubject || '설명을 찾을 수 없습니다'}}</div>
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

  data () {
    return {
      empty: null,
      activeIndex : 0,
      filter : [
        {
          'title' : 'ALL',
          'src' : '@/assets/images/common/all.png',
          'click' : 'filterAll'
        },
        {
          'title' : 'Pablo Drawing',
          'click' : 'filterLetter'
        },
        {
          'title' : 'Pablo Classic',
          'click' : 'filterTest'
        },
        {
          'title' : 'Canvas',
          'click' : 'filterFree'
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      userGalleryMypicture: 'getUesrGalleryMypicture'
    }),
    isEmpty() {
       if (this.userGalleryMypicture.pictures.length === 0){
        this.empty = true;
      } else {
        this.empty = false;
      }
      return this.empty
    }
  },

  watch: {

  },

  mounted () {
  },

  methods: {
    onClick (index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
      this.setfilter(index)
    },
    setfilter (index){

    }
  }
}

</script>

<style scoped>

</style>
