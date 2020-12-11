<template>
  <div v-if="isLoading">
    <div class="empty" v-if="isEmpty">
      <div class="voice-section">
        <ul class="voices">
          <li class="voice-default">
            <div class="emoji-icon">
              <img src="@/assets/images/common/emoji@2x.png" alt="이모티콘" class="img-m">
            </div>
            <div class="emoji-desc">아직 그린 그림이 없어요,<br>학습을 시작해보세요!</div>
            <div class="emoji-button">
              <router-link to="/pabloMain" class="btn btn-blue5 btn-half">시작하기</router-link>
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
            <span>{{ filterItem.title }} ({{ nSize[index] }})</span>
          </b-button>
        </div>
        <div class="float-right btn-rigth">
          <b-form-select v-model="selected" @change="setSort" :options="options"></b-form-select>
        </div>
      </div>
      <div class="voice-section">
        <ul class="voices">
          <li class="voice-g" v-for="(item, index) in list" v-model="allSize">
            <div class="recode_icon">
              <img src="@/assets/images/common/record-mygallery@2x.png" alt="녹음 아이콘" class="img-m">
            </div>
            <div class="recode-desc">{{ item.audioPlaytime }}</div>

            <div class="gallery_img size-img">
              <a href="#" @click.prevent="onPlay"></a>
              <div class="play_bar"></div>
            </div>
            <div class="play_icon" v-if="play">
              <img src="@/assets/images/common/play_dim@2x.png" alt="재생화면" class="img-m">
            </div>
            <div class="pause_icon" v-else>
              <img src="@/assets/images/common/pause_dim@2x.png" alt="정지화면" class="img-m">
            </div>
            <div class="box_title">
              <div class="img_title">{{ item.stageName || '스테이지' }} {{ item.stageId || '단계' }}</div>
              <div class="img_desc">{{ item.title || '제목을 불러 올수 없습니다' }}</div>
            </div>
            <a href="#" class="icon_delete" @click.prevent="openDelete(item.userAudioId, index)"><img src="@/assets/images/common/btn_delete@2x.png" alt="" class="img-m"></a>
          </li>
        </ul>
      </div>
    </div>


    <b-modal id="deleteAudio" centered title="완전히 삭제" modal-class="deleteAudio">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">완전히 삭제하시겠어요?<br/>녹음이 삭제돼요<br/></p>
      <p class="text-sm">삭제한 파일은 복구할 수 없어요</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click.prevent="deleteAudio()">삭제하기</b-button>
        <b-button class="btn btn-black  btn-half" @click="cancel()">닫기</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'myGalleryVoice',

  data () {
    return {
      isLoading :false,
      focusIdx : 0,
      empty: null,
      activeIndex: 0,
      nSize : [0,0,0],
      isPlay : false,
      filter: [
        {
          'title': 'ALL',
          'src': '@/assets/images/common/all.png',
          'click': 'filterAll'
        },
        {
          'title': 'Pablo Letter',
          'click': 'filterLetter'
        },
        {
          'title': 'Free Drawing',
          'click': 'filterTest'
        }
      ],
      list: [],
      selected: 1,
      audio : null,
      options: [
        {
          value: 1,
          text: '최신 순',
        },
        {
          value: 2,
          text: '오래된 순'
        }
      ]
    }
  },

  created () {

  },
  mounted () {
    this.isLoading = true
    this.list = this.userGalleryMypicture.audios
    this.allSize()
  },
  computed: {
    ...mapGetters({
      userGalleryMypicture: 'getUserGalleryMypicture'
    }),
    isEmpty () {
      if (this.userGalleryMypicture.audios.length === 0) {
        this.empty = true
        return this.empty
      } else {
        this.empty = false
        return this.empty
      }
    },

  },
  watch:{
    'focusIdx' : ()=>{
      console.log(this.focusIdx)
    }
  },
  methods: {
    ...mapActions({
      getUserGalleryDetele: 'getUserGalleryDetele'
    }),
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
        this.list = this.userGalleryMypicture.audios
      } else if (index === 1) {
        this.list = this.userGalleryMypicture.audios.filter(function (item) {
          return item.drawingType === 4
        })
      } else if (index === 2) {
        this.list = this.userGalleryMypicture.audios.filter(function (item) {
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
      if (this.list.length === 0) {
        return false
      }
      //select value에 따른 처리
      if (value === 1) {
        this.list.sort(function (a, b) { // 오름차순
          return a.createdDate > b.createdDate ? -1 : a.createdDate > b.createdDate ? 1 : 0
        })
      } else if (value === 2) {
        this.list.sort(function (a, b) { // 오름차순
          return a.createdDate < b.createdDate ? -1 : a.createdDate > b.createdDate ? 1 : 0
        })
      }
    },
    onPlay (index) {
      //todo : @최현원 음성 플레이
      this.focusIdx = index;
    },
    openDelete(pictureId, index){
      this.selectId = pictureId
      this.selectIndex = index
      this.$bvModal.show('deleteAudio')
    },
    deleteAudio () {
      var self=this;
      this.$bvModal.hide('deleteAudio')
      this.getUserGalleryDetele({pictureId : this.selectId})
        .then(result => {
          if (result.code === "U001"){
            alert('삭제되었습니다.');
            self.list.splice(self.selectIndex, 1)
          } else if (result.code === "U002"){
            alert(result.message);
          } else if (result.code === "U003"){
            alert(result.message);
          } else if (result.code === "U004"){
            alert(result.message);
          }
        })
    }

  }
}

</script>

<style scoped lang="scss">

.btns_group {
  .active {
    background-color: var(--gray-900) !important;
  }

  padding: 0;
  margin-top: 6.4rem;
  border-radius: 0.6rem;
  margin-bottom: 5.6rem;

  .btn-rigth {
    margin-right: 6.4rem;

    .custom-select {
      border-radius: 0.8rem;
      border: solid 0.2rem var(--gray-400);
      width: 14.4rem;
      height: 6.8rem;
      background-image: url('~@/assets/images/common/arrow_down@2x.png');
      background-repeat: no-repeat;
      background-size: 2rem 2rem;
      background-position: 10.4rem;
      font-size: 2rem;
      font-weight: 600;
      line-height: 3.6rem;
      letter-spacing: -0.03rem;
      text-align: center;
      color: var(--gray-700);
      padding: 0;
      padding-left: 2rem;

    }
  }

  .btn-left {
    margin-left: 6.4rem;
    color: var(--gray-500);


    button {
      background-color: var(--gray-200);
      margin-right: 1.2rem;
      color: var(--gray-500);
      min-width: auto;
      font-weight: 600;
      border: none;
      padding: 1.6rem 2rem;
      height: 6.8rem;
      line-height: 2rem;

      img {
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
        display: inline-block;
      }

      &:focus, &:active, &:hover, &.selected {
        background-color: var(--gray-900);
      }
    }

    /*.drawing_button {
      min-width: 20.6rem;
      background-color: var(--gray-200);
      margin-right: 1.2rem;
      color: var(--gray-500);
      border: none;
      font-weight: 600;
      padding: 0;
      .img{
        width: 1.57rem;
        height: 2rem;
        margin-right: 1.13rem;
      }
      &:focus,&:active,&:hover{
        background-color: var(--gray-900);
      }
    }

    .classic_button {
      min-width: 19.6rem;
      color: var(--gray-500);
      background-color: var(--gray-200);
      margin-right: 1.2rem;
      border: none;
      font-weight: 600;
      padding: 0;
      .img{
        width: 1.3rem;
        height: 1.5rem;
        margin-right: 1rem;
      }
      &:focus,&:active,&:hover{
        background-color: var(--gray-900);
      }
    }

    .canvas_button {
      background-color: var(--gray-200);
      color: var(--gray-500);
      border: none;
      font-weight: 600;
      min-width: 14.1rem;
      margin-right: 1.2rem;
      padding: 0;
      .img{
        width: 1.67rem;
        height: 1.67rem;
        margin-right: 1.17rem;
      }
      &:focus,&:active,&:hover{
        background-color: var(--gray-900);
      }
    }*/
  }
}

.voice-section {
  margin: 0 6.4rem;

  .voices {
    height: 64.4rem;
    width: 101%;

    .voice-default {
      margin: 0 auto;

      .emoji-icon {
        margin: 11.4rem auto 3.2rem;
        width: 14.4rem;
        height: 14.4rem;
      }

      .emoji-desc {
        margin: 0 auto 3.2rem;
        font-family: 'NotoSansCJKKR';
        font-size: 4rem;
        font-weight: bold;
        line-height: 5.6rem;
        letter-spacing: -0.03rem;
        text-align: center;
      }

      .emoji-button {
        text-align: center;

        .btn {
          background-color: var(--blue-500);
          border: none;
          font-family: 'NotoSansCJKKR';
          font-size: 2.4rem;
          font-weight: bold;
          line-height: 8rem;
          letter-spacing: -0.3px;
          text-align: center;
          color: var(--gray-white);
        }
      }
    }

    .voice-g {
      .openPinfo {
        margin-top: 1.6rem;
        align-items: center;

        .heart_icon {
          width: 3.2rem;
          height: 3.2rem;
          margin-right: 1rem;
        }

        .heart_number {
          font-family: 'Inter';
          font-size: 2.4rem;
          font-weight: 600;
          line-height: 4.0px;
          letter-spacing: -0.3px;
          color: var(--gray-900);
          margin-right: 2.4rem;
        }

        .eye_icon {
          width: 3.2rem;
          height: 3.2rem;
          margin-right: 1rem;
        }

        .eye_number {
          font-family: 'Inter';
          font-size: 2.4rem;
          font-weight: 600;
          line-height: 4.0px;
          letter-spacing: -0.3px;
          color: var(--gray-900);

        }

      }

      .icon_delete{
        position: absolute;
        top: 1.5rem;
        right: 3.5rem;
        height: 0;
        z-index: 999;
        width: 5rem;
        height: 5rem;
      }

      width: calc(100% / 3);
      float: left;
      margin-bottom: 8rem;
      position: relative;

      .dark_bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 57.6rem;
        height: 32.3rem;
        opacity: 0.5;
        border-radius: 1.2rem;
        background-color: var(--gray-black);
      }

      .play_icon, .pause_icon {
        position: absolute;
        top: 12.2rem;
        left: 24.8rem;
        width: 8rem;
        height: 8rem;
        z-index: 55;
      }

      .recode_icon {
        position: absolute;
        top: 3rem;
        left: 2.8rem;
        width: 3.2rem;
        height: 3.2rem;
        z-index: 55
      }

      .recode-desc {
        position: absolute;
        top: 2.8rem;
        left: 6.4rem;
        line-height: 3.6rem;
        font-size: 2rem;
        font-weight: 600;
        color: var(--gray-800);
        z-index: 55;
        letter-spacing: -0.03rem;

      }

      .size-img {
        width: 57.6rem;
        height: 32.3rem;
        margin-bottom: 2.4rem;
        position: relative;
        border: solid 1px var(--gray-500);
        border-radius: 12px;
        z-index: 100;

        > a {
          display: block;
          width: 100%;
          height: 100%;
        }

        .img_icon {
          width: 6.4rem;
          height: 6.4rem;
          position: absolute;
          top: 2rem;
          right: 2rem;
        }

        img {
          border-radius: 1.2rem;
        }
      }

      .img_title {
        font-size: 2rem;
        font-family: 'Inter-Regular';
        margin-bottom: 0.2rem;
        letter-spacing: -0.03rem;
        font-weight: normal;
        line-height: 3.6rem;
        color: var(--gray-black);

      }

      .img_desc {
        font-family: 'NotoSansCJKKR';
        font-size: 2.4rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: -0.03rem;
        text-align: left;
        line-height: 4rem;
        color: var(--gray-black);
      }

      .play_bar {
        position: absolute;
        border-radius: 0 0 0 1.2rem;
        width: 32.8rem;
        height: 2rem;
        background-color: var(--blue-500);
        bottom: 0;
        left: 0;
        z-index: 55
      }
    }
  }
}
</style>
