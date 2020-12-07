<template>
  <div class="wrap">
    <div class="header ivory bg-ivory d-flex">
      <a href="#" @click.prevent="goBack" v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></a>
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
      <myGalleryInfo v-on:popup="settingPopup"></myGalleryInfo>
      <div class="tab-section">
        <b-tabs justified>
          <b-tab title="내그림" class="tab">
            <myGalleryPicture></myGalleryPicture>
          </b-tab>
          <b-tab title="내 녹음 듣기" class="tab">
            <myGalleryVoice></myGalleryVoice>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <!--modal-->
    <b-modal id="galleryBGChangeEmpty" centered title="배경 설정 : 없을 경우" modal-class="galleryBGChangeEmpty">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/emoji@2x.png" alt=""></div>
      </template>
      <p class="text">직접 그린 그림으로만<br/> 배경을 설정할 수 있어요<br/></p>
      <p class="text-sm">파블로 학습을 시작해보세요!</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancel()">닫기</b-button>
        <router-link to="/canvas" class="btn btn-blue5 btn-half">시작하기</router-link>
      </template>
    </b-modal>
    <b-modal id="galleryBgChange" centered title="배경 그림 선택" hide-footer modal-class="galleryBgChange">
      <template #default="{hide}">
        <button class="btn-close" @click="hide"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
        <div class="content">
          <div class="c-header">
            <p class="title">배경 그림 선택하기</p>
            <p class="desc">그림의 중앙부분이 배경그림으로 보여져요!</p>
          </div>
          <div class="c-body">
            <div class="btns_group d-flex">
              <b-button class="all_button">
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
      </template>
    </b-modal>
    <b-modal id="delete" centered title="완전히 삭제" modal-class="delete">
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
    <b-modal id="openGallery" centered title="오픈갤러리 공개" modal-class="openGallery">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_blue@2x.png" alt=""></div>
      </template>
      <p class="text">오픈갤러리에 그림을<br/>공개하시겠어요?<br/></p>
      <p class="text-sm">친구들에게 그림을 보여주세요!</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half"  @click="cancel()">닫기</b-button>
        <b-button v-b-modal.normalPopup1-1  class="btn btn-black  btn-half" >공개하기</b-button>
      </template>
    </b-modal>
    <b-modal id="openGalleryComplete" centered title="오픈갤러리 공개 완료" modal-class="openGalleryComplete">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_green@2x.png" alt=""></div>
      </template>
      <p class="text">그림이 친구들에게<br/>공개되었습니다!<br/></p>
      <p class="text-sm">오픈갤러리에서 확인해보세요!</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half"  @click="cancel()">닫기</b-button>
        <router-link to="/PabloMain" class="btn btn-black  btn-half">오픈갤러리 가기</router-link>
      </template>
    </b-modal>
    <!--//modal-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import myGalleryPicture from '@/components/myGallery/myGalleryPicture'
import myGalleryVoice from '@/components/myGallery/myGalleryVoice'
import myGalleryInfo from '@/components/myGallery/myGalleryInfo'

export default {
  name: 'MyGallery',
  components: {
    myGalleryPicture,
    myGalleryVoice,
    myGalleryInfo
  },
  data () {
    return {
      myTab: {
        empty: false
      },
      closeBtn:{
        ModalClose: false
      }
    }
  },
  computed: {
    ...mapGetters({
      session: 'getSession',
      UserGalleryMypicture: 'getUserGalleryMypicture'
    })
  },
  mounted () {
    this.fetchUserGalleryMypicture();
  },
  methods: {
    ...mapActions({
      getUserGallery : 'getUserGallery',
      getUserGalleryMypicture: 'getUserGalleryMypicture',
      getUserGalleryBackground: 'getUserGalleryBackground',
      getUserGalleryDetele: 'getUserGalleryDetele'
    }),
    settingPopup () {
      if (!this.myTab.empty) {
        this.$bvModal.show('galleryBGChangeEmpty')
      } else {
        this.$bvModal.show('galleryBgChange')
      }
    },
    fetchUserGalleryMypicture(){
      this.getUserGalleryMypicture()
        .then(result => {
          console.log('getUserGalleryMypicture :', result)
        })
    }
  },
  goBack(){
    this.$router.go(-1)
  },
}
</script>

<style lang="scss" scoped>

</style>
