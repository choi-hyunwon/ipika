<template>
  <div>
    <div class="bgc-section">
      <div class="bg">
        <!--        <div class="img-m" style="width:192rem; height: 40rem; background-color:#eee9e3;" :style="{backgroundImage: 'url(' + galleryInfo.backgroundImage + ')'}"></div>-->
        <div class="img-m" style="width:192rem; height: 40rem; background-color:#eee9e3;" :style="{backgroundImage: 'url(https://kr.vuejs.org/images/stdlib.png)'}"></div>
      </div>
      <div class="setting-img">
        <img src="@/assets/images/common/setting_default.png" alt="세팅" class=" img-m" @click="$emit('popup')">
      </div>
    </div>
    <div class="info-section d-flex">
      <div class="profile profile_r">
        <img v-if="result.stageId === 0" src="@/assets/images/common/img_thum_stage_01@2x.png" alt="프로필사진" class="img-m">
        <img v-if="result.stageId === 1" src="@/assets/images/common/img_thum_stage_02@2x.png" alt="프로필사진" class="img-m">
        <img v-if="result.stageId === 2" src="@/assets/images/common/img_thum_stage_03@2x.png" alt="프로필사진" class="img-m">
        <img v-if="result.stageId === 3" src="@/assets/images/common/img_thum_stage_04@2x.png" alt="프로필사진" class="img-m">
        <img v-if="result.stageId === 4" src="@/assets/images/common/img_thum_stage_05@2x.png" alt="프로필사진" class="img-m">
        <div class="text-center name">{{ name }}</div>
        <div class="text-center english-name">{{ result.stageName }}</div>
      </div>
      <ul class="infomation d-flex">
        <li class="info">
          <div>내 그림</div>
          <div>{{ galleryInfo.totalCount }}</div>
        </li>
        <li class="info">
          <div>공개한 그림</div>
          <div>{{ galleryInfo.totalSharedCount }}</div>
        </li>
        <li class="info">
          <div>조회 수</div>
          <div>{{ galleryInfo.totalViewCount }}</div>
        </li>
        <li class="info">
          <div>좋아요 수</div>
          <div>{{ galleryInfo.totalReactionCount }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'myGalleryInfo',

  data () {
    return {
      result: {
        stageName: '',
        stageId: 0,
      },
      galleryInfo:{

      }
    }
  },
  computed: {
    name () {
      return this.$store.state.userinfo.name
    }
  },
  mounted () {
    this.fetchResult();
    this.fetchUesrGallery();
  },

  methods: {
    ...mapActions({
      getResult: "getResult",
      getUesrGallery: "getUesrGallery"
    }),
    fetchResult(){
      this.getResult()
        .then(result => {
          console.log('fetchResult :', result)
          if(result !== undefined) this.result = result;
        })
    },
    fetchUesrGallery(){
      this.getUesrGallery()
        .then(result => {
          console.log('fetchUesrGallery :', result)
          if(result !== undefined) this.galleryInfo = result;
        })
    },

  }
}
</script>

<style scoped>

</style>

