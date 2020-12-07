<template>
  <div class="wrap" v-show="userGalleryMypicture">
    <div class="header ivory bg-ivory d-flex">
      <div v-b-modal.goBackPopup class="symbol" @click="goBack"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></div>
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

</template>
<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'MyGalleryDetail',
  data () {
    return {
      pictureId : {},
      pictureUrl : {},
      list : {}
    }
  },
  computed: {
    ...mapGetters({
      userGalleryMypicture: 'getUserGalleryMypicture'
    }),
    pagePictureId() {
      this.pictureId = this.$router.currentRoute.query.pictureId;
      return this.pictureId
    },
    pagePictureUrl() {
      return this.list[0].pictureUrl
    },
    title() {
      this.list = this.userGalleryMypicture.pictures.filter(item => item.pictureId === this.$router.currentRoute.query.pictureId)
      return this.list[0].title
    }
  },
  methods: {
    ...mapActions({
      getUserGalleryDetele: 'getUserGalleryDetele'
    }),
    goBack(){
      this.$router.go(-1)
    },
    load(){
      console.log('load')
    },
    deletePicture(){
      alert('delete')
      this.getUserGalleryDetele({pictureId : this.pictureId})
        .then(data => {
          return data
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
