<template>
  <div v-if="isLoading">
    <div class="empty" v-if="isEmpty">
      <div class="voice-section">
        <ul class="voices">
          <li class="voice-default">
            <div class="emoji-icon">
              <img src="@/assets/images/common/emoji@2x.png" alt="이모티콘" class="img-m">
            </div>
            <div class="emoji-desc">아직 녹음한 음성이 없어요,<br>학습을 시작해보세요!</div>
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
        <ul class="voices" v-if="list.length > 0">
          <li class="voice-g" v-for="(item, index) in list" v-model="allSize">
            <div class="recode_icon">
              <img src="@/assets/images/common/record-mygallery@2x.png" alt="녹음 아이콘" class="img-m">
            </div>
            <div class="recode-desc">{{ timeChange(item.audioPlaytime) }}</div>
            <div class="gallery_img size-img">
              <a href="#"  @click="onToggle(index)"></a>
              <transition name="fade">
              <div class="play_bar" :id="playBar(index)" ></div>
              </transition>
            </div>
            <div class="play_icon">
              <img src="@/assets/images/common/play_dim@2x.png" v-if="focusIdx!==index||!play" alt="재생화면" class="img-m">
              <img src="@/assets/images/common/pause_dim@2x.png" v-else-if="focusIdx===index" alt="정지화면" class="img-m">
            </div>
            <div class="box_title">
<!--              <div class="img_title">{{ item.stageName || '스테이지' }} {{ item.stageId || '단계' }}</div>-->
              <div class="img_title">{{ item.createdDate.slice(0, 10).replaceAll('-','.') }}</div>
              <div class="img_desc">{{ item.title || '제목을 불러 올수 없습니다' }}</div>
            </div>
            <button class="icon_delete" @click="openDelete(item.userAudioId, index)"><img src="@/assets/images/common/btn_delete@2x.png" alt="" class="img-m"></button>
          </li>
        </ul>
        <ul class="voices" v-else>
          <li class="voice-default">
            <div class="emptyList">등록된 정보가 없어요</div>
          </li>
        </ul>
      </div>
    </div>

    <b-modal id="deleteAudio" centered title="완전히 삭제" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text" style="margin-bottom: 12px;">완전히 삭제하시겠어요?
        <br>삭제한 녹음 파일은<br>복구할 수 없어요!</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="deleteAudio()">삭제하기</b-button>
        <b-button class="btn btn-black  btn-half" @click="cancel()">닫기</b-button>
      </template>
    </b-modal>

    <!-- 공통 알림 popup-->
    <Alert ref="deleteComfirm" v-slot="slotProps" :boldText="'삭제 되었습니다'" :text="'다른 그림을 그릴까요?'" :buttonText ="'확인'"/>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Alert from '@/components/popup/Alert'

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
      play : false,
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
  components:{
    Alert
  },
  mounted () {
    this.isLoading = true
    this.list = this.userGalleryMypicture.audios
    this.allSize()
    this.audio = new Audio(this.list[0].audioUrl)
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
  methods: {
    ...mapActions({
      getUserGalleryMypicture: 'getUserGalleryMypicture',
      getUserAudioDetele: 'getUserAudioDetele'
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
          return a.createdDate > b.createdDate ? -1 : a.createdDate < b.createdDate ? 1 : 0
        })
      } else if (value === 2) {
        this.list.sort(function (a, b) { // 오름차순
          return a.createdDate < b.createdDate ? -1 : a.createdDate > b.createdDate ? 1 : 0
        })
      }
    },
    onToggle(index){
      if(index!==this.focusIdx){
        this.focusIdx = index
        this.audio = new Audio(this.list[index].audioUrl)
      }
      let elementById = document.getElementById("play_bar" + index)
      console.log(elementById)
      if(!this.play){
        this.audio.play()
        this.play = true
        elementById.classList.add('active')
        elementById.style.transitionDuration = this.list[index].audioPlaytime + "s";
        this.audio.onended = ()=>{
          this.play=false
          elementById.classList.remove('active')
          elementById.style.transitionDuration = "0s";
        }
      }else{
        this.audio.pause()
        this.play = false
        elementById.classList.remove('active')
        elementById.style.transitionDuration = "0s";
      }
    },
    openDelete(pictureId, index){
      this.selectId = pictureId
      this.selectIndex = index
      this.$bvModal.show('deleteAudio')
    },
    deleteAudio () {
      var self=this;
      this.$bvModal.hide('deleteAudio')
      this.getUserAudioDetele({audioId : this.selectId})
        .then(result => {
          if (result.code === "0000"){
            self.$refs.deleteComfirm.showAlert = true
            self.$refs.deleteComfirm.type = 'common'
            self.getUserGalleryMypicture()
              .then(data => {
                console.log('getUserGalleryMypictureVue', data.audios)
                self.list = data.audios
                self.allSize();
              })
          } else alert(result.message)
        })
    },
    timeChange(time){
      console.log(time)
      let min = Math.floor(time/60);
      let sec = 0;
      if (min > 0) {
        sec = time - min*60
      } else {
        sec = time
      }
      if (sec <10) {
        sec = "0" + sec.toString()
      } else {
        sec = sec.toString()
      }
      if (min <10) {
        min = "0" + min.toString()
      } else {
        min = min.toString()
      }
      return min + ':' + sec
    },
    playBar (index) {
      return 'play_bar'+index;
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
      font-size: 2rem;

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
        border-radius: 0 0 1.2rem 1.2rem;
        width: 0%;
        height: 2rem;
        background-color: var(--blue-500);
        bottom: 0;
        left: 0;
        z-index: 55;
        transition-timing-function: linear;
        &.active {
          width:100%;
        }
      }
    }
    .emptyList {
      margin: 20rem auto 3.2rem;
      font-family: 'NotoSansCJKKR';
      font-size: 3rem;
      font-weight: bold;
      line-height: 5.6rem;
      letter-spacing: -0.03rem;
      text-align: center;
    }
  }
}


</style>
