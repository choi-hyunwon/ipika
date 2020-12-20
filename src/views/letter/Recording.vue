<template>
  <div class="wrap bg-ivory">
    <LetterHeader/>
    <div class="contents">


      <!-- 화면 좌측 상단 텍스트 영역 -->
      <div class="txt-area" v-if="page === 'free'">
        <p class="txt-lg">이 그림은 무엇을 표현했는지<br>
          생각을 들려주세요</p>
        <p class="txt-sm">자유롭게 자신의 생각을 말해보세요</p>
      </div>

      <!-- 화면 좌측 상단 텍스트 영역 -->
      <div class="txt-area" v-else>
        <p class="txt-lg" v-html="letter.stepAudioMainText"></p>
        <p class="txt-sm">{{ letter.stepAudioSubText }}</p>
      </div>

      <!-- 이퀄라이징 영역 (av-media, av-line) -->
      <div ref="recordingArea" class="record-area" :class="{equalizing : ing}">
        <!-- 플레이 중 아닌 경우 가로선 -->
        <div v-if="!ing" class="_media">
          <div v-if="record" style="width: 100%; height: 5px; background-color: #2fca56;"></div>
          <div v-else style="width: 100%; height: 5px; background-color: #1585ff;"></div>
        </div>

        <!-- 이퀄라이징 대체 이미지 -->
        <div v-else
             class="equalizer"
             :class="{
              recording : record,
              playing : !record
             }"
        />

        <!-- av-media:녹음 -->
        <!--<av-media
          v-show="ing && record" class="_media" ref="media"
          type="frequ"
          :line-color="setColor"
          :media="media"
          :canv-width="canvasOptions.canvWidth"
          :canv-height="canvasOptions.canvHeight"
          :line-width="canvasOptions.canvLineWidth"
        />-->

        <!-- av-line:재생 -->
        <!--<av-line
          ref="audioPlayer"
          class="_audio"
          v-show="!record && ing && isAudioSet"
          :audio-src="audioSource"
          :line-color="setColor"
          :canv-width="canvasOptions.canvWidth"
          :canv-height="canvasOptions.canvHeight"
          :line-width="canvasOptions.canvLineWidth"
        />-->
      </div>

      <!-- 플레이어 버튼 영역 -->
      <div class="play-area"
           :class="{
             mic : !ing && record,
             stop : ing && record,
             play : !ing && !record,
             pause : ing && !record
           }"
      >
        <audio ref="audioPlayer" src=""/>

        <!-- 재생 또는 재생 정지 버튼 -->
        <div v-if="audioEl"
             class="play-btns"
             @click="playOrPause"
        />

        <!-- 녹음 시작 또는 녹음 중지 버튼 -->
        <audio-recorder
          ref="recorder"
          format="mp3"
          :time="1"
          :before-recording="startRecord"
          :after-recording="stopRecord"/>

        <!-- '다시 녹음하기' 버튼 -->
        <Confirm v-slot="slotProps"
                 :complete-text="`다시 녹음하시겠어요? </br> 지금 녹음한 내용은 지워져요`"
                 :text="`지워진 녹음은 다시 들을 수 없어요`"
                 :cancelText="`아니요`"
                 :okText="`네`">
          <button v-if="record || isExpired" style="position: absolute; bottom: 0">
            <img src="@/assets/images/common/refresh_default@2x.png" alt="">
          </button>
          <button v-else @click="globalUtils.confirm(slotProps,'record')" style="position: absolute; bottom: 0">
            <img src="@/assets/images/common/refresh_active@2x.png" alt="">
          </button>
        </Confirm>
      </div>

      <!-- 우측 하단 '다했어요!' 버튼 -->
      <div class="btn-area">
        <!--        <button class="btn btn-dark" @click="$router.push('/Listening')">건너뛰기</button>-->
        <div v-if="page==='free'">
          <button @click="fetchRecordingFree" class="btn btn-dark"
                  style="width: 16rem; height: 8rem; text-align:center;">완료</button>
        </div>
        <div v-else>
          <button v-if="!record" @click="fetchRecording" class="btn btn-dark"
                  style="width: 16rem; height: 8rem; text-align:center;"><img
            src="@/assets/images/common/next_nor@2x.png" style="width: 5rem"></button>
          <button v-if="record" class="btn btn-dark disabled" style="width: 16rem; height: 8rem; text-align:center;">
            <img src="@/assets/images/common/next_nor@2x.png" style="width: 5rem"></button>
        </div>


      </div>

    </div>

    <!-- 공통 알림 popup-->
    <Alert ref="deviceFindFail" v-slot="slotProps" :boldText="'녹음을 할 수 있는 장치가 없어요'" :text="'장치 설치를 하고 다시 해볼까요?'"
           :buttonText="'확인'"/>
    <!-- 공통 알림 popup-->
    <Alert ref="submissionFail" v-slot="slotProps" :boldText="'드로잉 제출 실패하였습니다'" :text="'앗! 이런'" :buttonText="'확인'"/>

    <b-modal id="submissionFree" centered title="배경 설정 : 없을 경우" modal-class="galleryBGChangeEmpty">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/emoji@2x.png" alt=""></div>
      </template>
      <p class="text">그림이 마이갤러리에<br>
        추가되었어요!</p>
      <p class="text-sm">마이갤러리에서 확인해보세요!</p>
      <template #modal-footer="{ cancel }">
        <router-link to="/PabloMain" class="btn btn-gray btn-half">메인으로</router-link>
        <router-link to="/MyGallery" class="btn btn-black btn-half">마이갤러리 가기</router-link>
      </template>
    </b-modal>

  </div>
</template>

<script>
import LetterHeader from '@/components/letter/LetterHeader'
import Confirm from '@/components/popup/Confirm'
import Alert from '@/components/popup/Alert'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'recording',
  components: {
    Confirm,
    LetterHeader,
    Alert
  },
  data () {
    return {
      media: null,
      ing: false,
      record: true,
      file: {},
      canvasOptions: {
        canvWidth: 1260, // TODO::: 동적 입력 확인 필요..
        canvHeight: 270,
        canvLineWidth: 15,
      },

      arPlayer: null,

      audioEl: null,
      audioSource: null,
      isAudioSet: false,

      isExpired: false,
      error: false
    }
  },
  created () {
    // window.z = this

    this.$EventBus.$on('back', this.goBack)
    this.$EventBus.$on('next', () => {
      this.record = true
    })
  },
  mounted () {
    if (this.userAudio) {
      this.isExpired = true
      this.record = false

      /* 임시 코드 */
      // TODO: userAudio url 이 음성 파일 형태가 다른 경우 임시 작업(삭제 예정 코드)
      // if (this.userAudio.audioUrl.slice(-3, -1) !== 'mp') {
      //   this.setUserAudio({
      //     audioPlaytime:15,
      //     audioUrl:"http://cdn.mcocoa.com/edu//steprecording/20201207122219/sample.mp3",
      //     userAudioId:52
      //   })
      // }
      /* // 임시 코드 */

      this.audioSource = this.userAudio.audioUrl

      /* 임시 코드 */
      // this.audioSource = "http://cdn.mcocoa.com/edu//steprecording/20201207122219/sample.mp3"
      /* // 임시 코드 */

      this.setAudio()
    }

    this.globalUtils.tts(this.letter.stepAudioMainText + this.letter.stepAudioSubText)

    const self = this
    navigator.getUserMedia({
        audio: true,
        video: false
      },
      function (stream) {
        console.log(stream)
        self.media = stream
      },
      function (err) {
        console.log(err)
        self.$refs.deviceFindFail.showAlert = true
        self.$refs.deviceFindFail.type = 'common'
        self.error = true
      })
  },
  watch: {
    'arPlayer.isPlaying': function (val) {
      this.ing = val
    },
  },
  computed: {
    ...mapGetters({
      letter: 'getLetter',
      userAudio: 'getUserAudio',
    }),
    setColor () {
      if (this.ing && this.record) {
        return '#f53c32'
      } else if (this.ing && !this.record) return '#1585ff'
    },
    page () {
      return this.$router.currentRoute.query.page || ''
    },
    freeTitle () {
      return this.$router.currentRoute.query.freeTitle || ''
    },

  },
  methods: {
    ...mapActions({
      getRecording: 'getRecording',
      getSubmissionFree: 'getSubmissionFree',
      getLetter: 'getLetter'
    }),
    ...mapMutations({
      setUserAudio: 'setUserAudio'
    }),
    goBack () {
      // this.$router.push('/Watching')
      this.$router.go(-1)
    },
    startRecord () {
      this.ing = true
    },
    stopRecord () {
      this.ing = false
      this.record = false
      setTimeout(() => {
        this.setRecentRecord()
      }, 500)
    },
    setRecentRecord () {
      const recorder = this.$refs.recorder

      // this.arPlayer = recorder.$children[2]
      recorder.$children.forEach(val => {
        val.$el.className === 'ar-player'
        this.arPlayer = val
      })

      if (recorder) {
        const top = recorder.recordList.length - 1
        recorder.selected = recorder.recordList[top]
        this.file = recorder.recordList[top]
        this.audioSource = this.file.url
        this.isAudioSet = true

        this.setAudio()
      }
    },
    fetchRecording () {
      if (this.isExpired) {
        return this.$router.push('/Listening')
      }

      try {
        //파일 테스트 : 삭제 예정
        //this.saveFile(URL.createObjectURL(this.file.blob))

        const data = new FormData()
        data.append('stepId', this.letter.stepId)
        data.append('recordingAudio', this.file.blob, 'myrecord.mp3')

        this.getRecording(data)
          .then(result => {
            console.log(result)
            if (result.code === '0000') {
              this.fetchLetter()
            } else {
              alert(`code : ${result.code} message : ${result.message}`)
              this.$router.push('/Listening')
            }
          })
      } catch (e) {
        alert(e)
      }
    },
    fetchRecordingFree () {

      //파일 테스트 : 삭제 예정
      //this.saveFile(URL.createObjectURL(this.file.blob))
      const self = this
      if (!this.file.blob) {
        this.$bvModal.show('submissionFree')
      } else {
        this.saveFile(URL.createObjectURL(this.file.blob))

        const data = new FormData()
        data.append('title', this.freeTitle)
        data.append('files', this.file.blob, 'myfree.mp3')

        this.getSubmissionFree(data)
          .then(result => {
            if (result.code === '0000') {
              this.$bvModal.show('submissionFree')
            } else {
              // alert('드로잉 제출 실패')
              self.$refs.submissionFail.showAlert = true
              self.$refs.submissionFail.type = 'common'
            }
          })
      }
    },
    saveFile (href) {
      var a = document.createElement('a')
      a.href = href
      a.download = 'myrecord.mp3'

      a.appendChild(document.createTextNode('myrecord.mp3'))
      a.style.display = 'none'

      document.body.appendChild(a)
      a.click()

      setTimeout(function () {
        URL.revokeObjectURL(href)
      }, 911)
    },
    async fetchLetter () {
      this.getLetter()
        .then(result => {
          this.$router.push('/Listening')
        })
    },

    setAudio () {
      // this.audioEl = this.$refs.audioPlayer.$el.firstElementChild.firstElementChild
      this.audioEl = this.$refs.audioPlayer
      this.audioEl.crossOrigin = 'anonymous'
      this.audioEl.setAttribute('src', this.audioSource)
      this.audioEl.onended = () => {
        this.ing = false
      }
    },
    playOrPause () {
      if (!this.record) {
        !this.ing ? this.audioEl.play() : this.audioEl.pause()
        this.ing = !this.ing
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contents {
  position: relative;
  width: 100%;
  height: calc(100% - 12rem);

  .txt-area {
    padding-top: 8rem;
    padding-left: 10rem;
    margin-bottom: 55.2rem;

    .txt-lg {
      font-family: var(--bold);
      font-size: 4rem;
      font-weight: bold;
      line-height: 5.6rem;
      letter-spacing: -0.03rem;
      margin-bottom: 1.2rem;
    }

    .txt-sm {
      font-size: 3.2rem;
      line-height: 4.8rem;
      letter-spacing: -0.03rem;
      color: var(--gray-black);
    }
  }

  .record-area {
    position: absolute;
    width: 100%;
    height: 27.1rem;
    background-color: var(--ivory-200);
    top: 53.2rem;

    &.equalizing {
      top: 40.2rem;
    }

    .equalizer {
      width: 100%;
      height: 27.1rem;

      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;

      &.recording {
        background-image: url("~@/assets/images/common/equalizer-red@2x.png");
      }

      &.playing {
        background-image: url("~@/assets/images/common/equalizer-blue@2x.png");
      }
    }

  }

  .play-area {
    position: absolute;
    bottom: 10.3rem;
    left: 10.3rem;

    button {
      display: inline-block;
      width: 12rem;
      height: 12rem;
      margin-left: 14.1rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .btn-area {
    position: absolute;
    bottom: 10rem;
    right: 10rem;

    .btn {
      margin-left: 10px;
    }
  }
}

::v-deep .ar {
  width: 11.4rem;
  background-color: transparent;
  box-shadow: unset;

  .ar-records {
    display: none;
  }

  .ar-player {
    .ar-player-bar {
      display: none;
    }
  }

  .ar-recorder__duration {
    display: none;
  }

  .ar-recorder__time-limit {
    display: none;
  }

  .ar-content {
    padding: 0;
  }

  .ar-icon {

    width: 11.4rem;
    height: 11.4rem;
    box-shadow: unset;
    border: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;

    > svg {
      //display: none;
    }

    &.ar-icon__sm {
      &.ar-recorder__stop {
        position: unset;
        top: unset;
        right: unset;
      }
    }
  }
}

/* 음성 녹음 아이콘 */
.mic {
  ::v-deep.ar {
    .ar-recorder {
      .ar-icon {
        &.ar-icon__lg {
          background-color: #2fca56;
          background-image: url("~@/assets/images/common/record@2x.png");
          background-size: 4rem;

          > svg {
            display: none;
          }
        }

        &.ar-icon__sm.ar-recorder__stop {
          display: none;
        }
      }
    }

    .ar-player {
      .ar-player-actions {
        display: none;
      }
    }
  }

  .play-btns {
    display: none;
  }
}

/* 녹음 정지 아이콘 */
.stop {
  ::v-deep.ar {
    .ar-recorder {
      .ar-icon {
        &.ar-icon__lg.ar-icon--rec {
          display: none;
        }

        &.ar-icon__sm.ar-recorder__stop {
          background-image: url("~@/assets/images/common/freeze@2x.png");
          border: 5px solid red;

          > svg {
            display: none;
          }
        }
      }
    }

    .ar-player {
      .ar-player-actions {
        display: none;
      }
    }
  }

  .play-btns {
    display: none;
  }
}

/* 녹음 재생 아이콘 */
.play {
  ::v-deep.ar {
    .ar-recorder {
      .ar-icon {
        &.ar-icon__lg {
          display: none;
        }

        &.ar-icon__sm.ar-recorder__stop {
          display: none;
        }
      }
    }

    .ar-player {
      .ar-icon.ar-icon__lg.ar-player__play {
        display: none;
      }
    }
  }
}

/* 재생 정지 아이콘 */
.pause {
  ::v-deep.ar {
    .ar-recorder {
      .ar-icon {
        &.ar-icon__lg {
          display: none;
        }

        &.ar-icon__sm.ar-recorder__stop {
          display: none;
        }
      }
    }

    .ar-player {
      .ar-icon.ar-icon__lg.ar-player__play.ar-player__play--active {
        display: none;
      }
    }
  }
}


::v-deep ._audio {
  & audio {
    display: none;
  }
}

.play-area {
  width: 12rem;
  height: 12rem;
  border-radius: 6rem;

  &.play {
    cursor: pointer;
    background-color: #1585ff;
    background-image: url("~@/assets/images/common/play@2x.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 3.24rem;
  }

  &.pause {
    cursor: pointer;
    background-color: transparent !important;
    background-image: url("~@/assets/images/common/ic-pause@2x.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 3.2rem;

    & .play-btns {
      border: 5px solid #1585ff;
    }

    ::v-deep.ar {
      & #play > svg {
        display: none;
      }
    }
  }

  & .play-btns {
    width: 100%;
    height: 100%;
    border-radius: 6rem;
  }
}
</style>
