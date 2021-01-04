<template>
  <transition name="fade">
  <div class="wrap"  v-if="isLoading">
    <div class="header ivory bg-ivory d-flex">
      <a href="#" @click="goBack" v-b-modal.goBackPopup class="symbol"><img
        src="@/assets/images/common/arrow_left@2x.png" alt="뒤로가기"></a>
      <div class="gallery-title">
        <router-link to="/">
          <span class="title-center">My Gallery</span>
        </router-link>
      </div>
      <div class="box-close">
        <Confirm v-slot="slotProps"
                 :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`"
                 :cancelText="`아니요`"
                 :okText="`네`">
          <button @click="globalUtils.confirm(slotProps,'checkRed')" style="padding-top: 0;" class="btn-close"><img
            src="@/assets/images/common/close@2x.png" alt="종료하기"></button>
        </Confirm>
      </div>
    </div>
    <div class="contents" >
      <myGalleryInfo v-on:popup="settingPopup"></myGalleryInfo>
      <div class="tab-section">
        <b-tabs justified >
          <b-tab title="내 그림" title-link-class="mytab" @click="onClickPicture">
            <myGalleryPicture></myGalleryPicture>
          </b-tab>
          <b-tab title="내 녹음 듣기" title-link-class="mytab">
            <myGalleryVoice></myGalleryVoice>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <!--modal-->
    <b-modal id="galleryBGChangeEmpty" centered title="배경 설정 : 없을 경우" modal-class="galleryBGChangeEmpty">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/emoji@2x.png" alt="팝업아이콘"></div>
      </template>
      <p class="text">직접 그린 그림으로만<br/> 배경을 설정할 수 있어요<br/>파블로학습을 시작해보세요!</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancel()">닫기</b-button>
        <router-link to="/pabloMain" class="btn btn-black btn-half">시작하기</router-link>
      </template>
    </b-modal>
    <b-modal id="galleryBgChange" centered title="배경 그림 선택" hide-header hide-footer modal-class="galleryBgChange">
      <template #default="{hide}">
        <button class="btn-close" @click="hide"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
        <div class="content">
          <div class="c-header">
            <p class="title">배경 그림 선택하기</p>
            <p class="desc">그림의 중앙부분이 배경그림으로 보여져요!</p>
          </div>
          <div class="c-body">
            <div class="btns_group d-flex">
              <b-button v-for="(filterItem, index) in filter"
                        :key="index"
                        aria-pressed="true"
                        :data="filterItem"
                        :class="{'selected' : activeIndex === index}"
                        @click="onClick(index)"
              >
                <img v-if="filterItem.src" src="@/assets/images/common/all.png" alt="모든이미지" class="img">
                <span>{{ filterItem.title }} ({{ nSize[index] }})</span>
              </b-button>
            </div>
            <ul class="scroll d-flex" v-if="list.length > 0">
              <li class="background-img" v-for="(item, index) in list">
                <button @click="setBackground(item.pictureId, index)">
                  <img :src="item.pictureUrl" alt="갤러리사진" class="img-m">
                </button>
              </li>
            </ul>
            <div class="emptyList" v-else> 등록된 정보가 없어요
            </div>

          </div>
        </div>
      </template>
    </b-modal>
    <!--//modal-->

    <!-- 공통 알림 popup-->
    <Alert ref="setMyBackground" v-slot="slotProps" :boldText="'배경 화면이 저장되었습니다.'" :text="'배경을 바꾸어 보았어요'" :buttonText ="'확인'"/>


  </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import myGalleryPicture from '@/components/myGallery/myGalleryPicture'
import myGalleryVoice from '@/components/myGallery/myGalleryVoice'
import myGalleryInfo from '@/components/myGallery/myGalleryInfo'
import Alert from '@/components/popup/Alert'
import Confirm from '@/components/popup/Confirm'

export default {
  name: 'MyGallery',
  components: {
    Alert,
    Confirm,
    myGalleryPicture,
    myGalleryVoice,
    myGalleryInfo
  },
  data () {
    return {
      isLoading : false,
      closeBtn: {
        ModalClose: false
      },
      activeIndex : 0,
      nSize : [0,0,0],
      filter : [
        {
          'title' : 'ALL',
          'src' : '@/assets/images/common/all.png',
          'click' : 'filterAll'
        },
        {
          'title' : 'Pablo Letter',
          'click': 'filterLetter'
        },
        {
          'title': 'Free Drawing',
          'click': 'filterTest'
        }
      ],
      list: [],
      selected: 1
    }
  },
  created () {
    this.$EventBus.$on('setPicture', this.setList)
  },
  computed: {
    ...mapGetters({
      session: 'getSession',
      userGalleryMypicture: 'getUserGalleryMypicture'
    }),

  },
  mounted () {
    this.fetchUserGalleryMypicture()
    this.getUserGallery()
  },
  methods: {
    ...mapActions({
      getUserGallery: 'getUserGallery',
      getUserGalleryMypicture: 'getUserGalleryMypicture',
      getUserGalleryBackground: 'getUserGalleryBackground',
      getUserGalleryDetele: 'getUserGalleryDetele'
    }),
    onClickPicture() {
      this.$eventBus.$emit('stopAudioMy')
    },
    setList(){
      this.list = this.userGalleryMypicture.pictures
      this.allSize()
    },
    isEmpty(){
      return this.userGalleryMypicture.pictures.length === 0 ? true : false
    },
    allSize(){
      this.nSize[0] = this.list.length

      const letter = this.list.filter(function (item) {
        return item.drawingType === 4
      })
      this.nSize[1] = letter.length

      const free = this.list.filter(function (item) {
        return item.drawingType === 3
      })
      this.nSize[2] = free.length
    },
    settingPopup () {
      if (this.isEmpty()) {
        this.$bvModal.show('galleryBGChangeEmpty')
      } else {
        this.$bvModal.show('galleryBgChange')
        this.activeIndex = 0;
        this.setFilter(this.activeIndex)
        this.allSize()
      }
    },
    fetchUserGalleryMypicture () {
      this.getUserGalleryMypicture()
        .then(result => {
          console.log('getUserGalleryMypicture :', result)
          this.list = result.pictures
          this.isLoading = true
          this.allSize()
        })
    },
    goBack () {
      this.$router.push('/PabloMain')
    },
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
          return item.drawingType === 4
        })
      } else if (index === 2) {
        this.list = this.userGalleryMypicture.pictures.filter(function (item) {
          return item.drawingType === 3
        })
      }
      console.log(index)
      console.log(this.list)
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
    setBackground (pictureId, index) {
      var self=this;
      this.$bvModal.hide('galleryBgChange')
      this.selectId = pictureId
      console.log(pictureId)
      this.selectIndex = index
      this.$bvModal.hide('galleryBgChange')
      this.getUserGalleryBackground({pictureId : this.selectId})
        .then(result => {
          if (result.code === "0000"){
            self.getUserGallery()
            self.$refs.setMyBackground.showAlert = true
            self.$refs.setMyBackground.type = 'common'
          } else {
            alert(result.message);
          }
        })
    }
  }
}
</script>

<style lang="scss">
.tab-section {
  border-top: 1px solid var(--gray-500);;

  .nav-link.mytab {
    border: none;

    &.active {
      border-bottom: 0.4rem solid var(--gray-black);
      color: var(--gray-black);
    }
  }
}
.modal.galleryBgChange .modal-content {
  height: 760px;
  margin-top: 10px;
}
.modal.galleryBgChange .c-body .btns_group .btn:hover,
.modal.galleryBgChange .c-body .btns_group .btn:active,
.modal.galleryBgChange .c-body .btns_group .btn:focus,
.modal.galleryBgChange .c-body .btns_group .btn.selected {
  color: var(--gray-white);
  background-color: var(--gray-900);
}

.emptyList {
  margin: 35rem auto 3.2rem;
  font-family: 'NotoSansCJKKR';
  font-size: 4rem;
  font-weight: bold;
  line-height: 5.6rem;
  letter-spacing: -0.03rem;
  text-align: center;
}
</style>
