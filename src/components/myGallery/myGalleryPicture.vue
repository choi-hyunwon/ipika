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
    <div class="list" v-else-if="userGalleryMypicture" v-model="setList">
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
        <div class="float-right ">
          <b-form-select v-model="selected" @change="setSort" :options="options" class="m-md-2" style="height: 30px;"></b-form-select>
        </div>
      </div>
      <div class="gallery-section">
        <ul class="gallerys">
          <li class="gallery-g" v-for="(item, index) in list">
            <router-link :to="getURL(item)" @click.prevent="log">
              <div class="gallery_img size-img">
                <img :src="item.pictureUrl" alt="갤러리사진" class="img-m">
                <div class="img_icon" v-b-modal.normalPopup1>
<!--                  <img src="@/assets/images/common/share.png" alt="다운로드" class="img-m" v-b-modal.normalPopup1>-->
                </div>
              </div>
              <div class="img_title">{{ item.stageName || '스테이지'}} {{ item.stageId || '단계'}}</div>
              <div class="img_desc">{{ item.title || '제목을 불러 올수 없습니다'}}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
          'click': 'filterLetter'
        },
        {
          'title': 'Pablo Classic',
          'click': 'filterTest'
        },
        {
          'title': 'Canvas',
          'click': 'filterFree'
        }
      ],
      list: [],
      selected: 1,
      options: [
        { value: 1, text: '최신 순' },
        { value: 2, text: '오래된 순' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      userGalleryMypicture: 'getUserGalleryMypicture'
    }),
    isEmpty(){
      if (this.userGalleryMypicture.pictures.length === 0){
        this.empty = true
        return this.empty
      } else {
        this.empty = false
        return this.empty
      }
    },
    setList(){
      return this.list = this.userGalleryMypicture.pictures
    },

  },
  methods: {
    onClick (index) {
      if (this.activeIndex === index) {
        this.activeIndex = null
      } else {
        this.activeIndex = index
      }
      this.setFilter(index)
    },
    setFilter (index) {
      if (index === 0) {
        this.list = this.userGalleryMypicture.pictures
      } else if (index === 1) {
        this.list = this.userGalleryMypicture.pictures.filter(function (item) {
          return item.drawingType === 1
        })
      } else if (index === 2) {
        this.list = this.userGalleryMypicture.pictures.filter(function (item) {
          return item.drawingType === 2
        })
      } else if (index === 3) {
        this.list = this.userGalleryMypicture.pictures.filter(function (item) {
          return item.drawingType === 3
        })
      }
      //sort 처리
      this.setSort(this.selected)
    },
    setSort (value) {
      //select value
      this.selected = value
      //값 없을 경우
      if (this.list.length === 0)
        return false;
      //select value에 따른 처리
      if (value === 1){
        this.list.sort(function(a, b) { // 오름차순
          return a.createdDate > b.createdDate ? -1 : a.createdDate > b.createdDate ? 1 : 0;
        });
      } else if (value === 2){
        this.list.sort(function(a, b) { // 오름차순
          return a.createdDate < b.createdDate ? -1 : a.createdDate > b.createdDate ? 1 : 0;
        });
      }
    },
    getURL(item){
      return 'MyGalleryDetail?' +'pictureId=' + item.pictureId
    },
    log(e){
      console.log(e.currentTarget)
    }
  }
}
</script>

<style scoped>

</style>
