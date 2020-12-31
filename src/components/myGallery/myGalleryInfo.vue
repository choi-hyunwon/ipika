<template>
  <div>
    <div class="bgc-section">
      <div class="bg">
        <!--        <div class="img-m" style="width:192rem; height: 40rem; background-color:#eee9e3;" :style="{backgroundImage: 'url(' + galleryInfo.backgroundImage + ')'}"></div>-->
        <div class="img-m" style="width:192rem; height: 40rem; background-color:#eee9e3; background-position: center center;" :style="{backgroundImage: 'url(' + getUserGallery.backgroundPictureUrl + ')'}"></div>
      </div>
      <div class="setting-img">
        <img src="@/assets/images/common/setting_default.png" alt="배경화면세팅" class=" img-m" @click="$emit('popup')">
      </div>
    </div>
    <div class="info-section d-flex">
      <div class="profile profile_r">
        <img v-if="result.stageId === 1" src="@/assets/images/common/img_thum_stage_01@2x.png" alt="프로필사진" class="img-m">
        <img v-if="result.stageId === 2" src="@/assets/images/common/img_thum_stage_02@2x.png" alt="프로필사진" class="img-m">
        <img v-if="result.stageId === 3" src="@/assets/images/common/img_thum_stage_03@2x.png" alt="프로필사진" class="img-m">
        <img v-if="result.stageId === 4" src="@/assets/images/common/img_thum_stage_04@2x.png" alt="프로필사진" class="img-m">
        <img v-if="result.stageId === 5" src="@/assets/images/common/img_thum_stage_05@2x.png" alt="프로필사진" class="img-m">
        <div class="text-center name">{{ getUserGallery.nickname || name }}</div>
        <div class="text-center english-name">{{ result.stageName }}</div>
      </div>
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
        stageId: 0
      },
      galleryInfo: {}
    }
  },
  computed: {
    ...mapGetters({
      getUserGallery: 'getUserGallery'
    }),
    name () {
      return this.$store.state.session.name || "이름 없음"
    }
  },
  mounted () {
    this.fetchResult()
    this.fetchUserGallery()
  },

  methods: {
    ...mapActions({
      getResult: "getResult",
      getUserGallery: "getUserGallery"
    }),
    fetchResult() {
      this.getResult()
        .then(result => {
          console.log('fetchResult :', result)
          if(result !== undefined) this.result = result
        })
    },
    fetchUserGallery() {
      const self = this
      this.getUserGallery()
        .then(result => {
          console.log('fetchUserGallery :', result)
          if(result !== undefined) this.galleryInfo = self.getUserGallery
        })
    }
  }
}
</script>

<style lang="scss" scoped>

.bgc-section {
  position: relative;
  .bg {
    //width: 192rem;
    width: 100%;
    height: 40rem;
  }
  .setting-img{
    cursor:pointer;
    position: absolute;
    bottom: 4rem;
    right: 4rem;
    width: 8rem;
    height: 8rem;

  }
}
.info-section {
  height: 24rem;
  position: relative;
  justify-content: center;
  .profile_r{
    position: relative;
    .profile_a{
      position: absolute;
      width: 4.8rem;
      height: 4.8rem;
      bottom: 0.4rem;
      right: 0.4rem;
    }
  }
  .profile {
    position: absolute;
    width: 16rem;
    height: 16rem;
    top: -8rem;
    .name {
      margin-top: 1.6rem;
      line-height: 4rem;
      font-size: 2.4rem;
      letter-spacing: -0.03rem;
      margin-bottom: 0.2rem;
      position: relative;
      overflow: hidden;
      height: 4rem;
    }

    .english-name {
      font-size: 2rem;
      line-height: 3.6rem;
      color: var(--greyish);
    }
  }

  .infomation {
    text-align: center;
    margin-top: 21.4rem;
    width: 67.2rem;
    justify-content: space-between;
    .info {
      div {
        letter-spacing: -0.03rem;
        &:first-child {
          font-size: 2.4rem;
          color: var(--greyish);
          line-height: 4rem;
        }

        &:last-child {
          font-size: 2.8rem;
          margin-top: 0.8rem;
          line-height: 4.4rem;
          font-family: 'Inter';
        }
      }
    }
  }
}
</style>
