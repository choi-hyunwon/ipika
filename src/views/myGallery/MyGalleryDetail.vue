<template>
  <div v-if="isLoading">
    <div class="wrap" v-show="userGalleryMypicture">
      <div class="header ivory bg-ivory d-flex">
        <div class="gallery-title">
          <span class="title-center">{{ title || '제목을 불러 올수 없습니다'}}</span>
        </div>
        <div class="box-close">
          <a href="#" class="btn-close" @click.prevent="goBack"><img src="@/assets/images/common/close@2x.png" alt=""></a>
        </div>
      </div>
      <div class="contents no_scroll">
        <div class="bg_gallery">
          <div class="gallery_img">
            <img :src="pagePictureUrl" alt="img-m" style="width: 192rem"
                 :id="pagePictureId"
            >
            <!-- @/assets/images/temp/sample_img_02.png-->
          </div>
          <div class="btn_group">
            <b-button v-b-modal.ImgDelete>삭제하기</b-button>
          </div>
        </div>
      </div>
      <!-- 삭제 팝업  -->
      <b-modal id="ImgDelete" centered title="파블로 알림" modal-class="normalPopup">
        <template #modal-header>
          <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
        </template>
        <p class="text">완전히 삭제하시겠어요?<br/>그림과 녹음 모두 삭제되요<br/></p>
        <p class="text-sm">삭제된 그림과 녹음은 복구할 수 없어요</p>
        <template #modal-footer="{ cancel }">
          <b-button variant="gray" class="btn-half" @click="deletePicture">삭제하기</b-button>
          <b-button class="btn btn-black  btn-half" @click="cancel()">닫기</b-button>
        </template>
      </b-modal>
      <!-- //삭제 팝업  -->
    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'MyGalleryDetail',
    data () {
      return {
        isLoading: false,
        pictureId: {},
        pictureUrl: {},
        list: {}
      }
    },
    computed: {
      ...mapGetters({
        userGalleryMypicture: 'getUserGalleryMypicture'
      }),
      pagePictureId () {
        this.pictureId = this.$router.currentRoute.query.pictureId * 1
        return this.pictureId
      },
      pagePictureUrl () {
        return this.list[0].pictureUrl
      },
      title () {
        return this.list[0].title
      }
    },
    created () {
      this.isLoading = true
      console.log(this.userGalleryMypicture)
      this.list = this.userGalleryMypicture.pictures.filter(item => item.pictureId === Number(this.$router.currentRoute.query.pictureId))
    },
    methods: {
      ...mapActions({
        getUserGalleryDetele: 'getUserGalleryDetele'
      }),
      goBack () {
        this.$router.go(-1)
      },
      load () {
        console.log('load')
      },
      deletePicture () {
      this.getUserGalleryDetele({pictureId : this.pictureId})
        .then(data => {
          return data
        })
    }
  }
}
</script>

<style lang="scss" scoped>

.btn_group{
  position: absolute;
  bottom: 10rem;
  right: 10rem;
  .btn{
    width: 16rem;
    height: 8rem;
    border-radius: 0.8rem;
    background-color: var(--red-500);
    border: none;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 4rem;
    letter-spacing: -0.03rem;
    text-align: center;
    color: var(--gray-white);
  }
}



</style>
