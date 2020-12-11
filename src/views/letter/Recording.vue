<template>
  <div class="wrap bg-ivory">
    <LetterHeader/>
    <div class="contents">

      <div class="txt-area">
        <p class="txt-lg" v-html="letter.stepAudioMainText"></p>
        <p class="txt-sm">{{letter.stepAudioSubText}}</p>
      </div>

      <div ref="recordingArea" class="record-area" :class="{recording : ing}">
        <div v-if="!ing" class="_media">
          <div v-if="record" style="width: 100%; height: 5px; background-color: #2fca56;"></div>
          <div v-else style="width: 100%; height: 5px; background-color: #1585ff;"></div>
        </div>

        <av-media
          v-show="ing && record" class="_media" ref="media"
          type="frequ"
          :line-color="setColor"
          :media="media"
          :canv-width="canvasOptions.canvWidth"
          :canv-height="canvasOptions.canvHeight"
          :line-width="canvasOptions.canvLineWidth"
        />

        <!--<av-line
          v-if="ing && !record"-->
        <av-line
          ref="audioPlayer"
          class="_audio"
          v-show="!record && ing && isAudioSet"
          :audio-src="audioSource"
          :line-color="setColor"
          :canv-width="canvasOptions.canvWidth"
          :canv-height="canvasOptions.canvHeight"
          :line-width="canvasOptions.canvLineWidth"
        ></av-line>
      </div>

      <div class="play-area"
           :class="{
             mic : !ing && record,
             stop : ing && record,
             play : !ing && !record,
             pause : ing && !record
           }"
      >
        <div class="play-btns"
             @click="playOrPause"
        />

        <audio-recorder
          ref="recorder"
          format="mp3"
          :before-recording="startRecord"
          :after-recording="stopRecord"/>

        <Confirm v-slot="slotProps"
                 :complete-text="`다시 녹음하시겠어요? </br> 지금 녹음한 내용은 지워져요`"
                 :text="`지워진 녹음은 다시 들을 수 없어요`"
                 :cancelText="`아니오`"
                 :okText="`네`">
          <button v-if="!record" @click="globalUtils.confirm(slotProps,'record')" style="position: absolute; bottom: 0">
            <img src="@/assets/images/common/refresh_active@2x.png" alt="">
          </button>
          <button v-if="record" style="position: absolute; bottom: 0">
            <img src="@/assets/images/common/refresh_default@2x.png" alt="">
          </button>
        </Confirm>
      </div>

      <div class="btn-area">
        <button v-if="!record" @click="fetchRecording" class="btn btn-dark">다했어요!</button>
        <button v-if="record" class="btn btn-dark disabled">다했어요!</button>
      </div>

    </div>
  </div>
</template>

<script>
import LetterHeader from '@/components/letter/LetterHeader'
import Confirm from '@/components/popup/Confirm'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'recording',
  components: {Confirm, LetterHeader},
  data(){
    return{
      media: null,
      ing : false,
      record : true,
      file : {},
      canvasOptions: {
        canvWidth : 1260, // TODO::: 동적 입력 확인 필요..
        canvHeight: 270,
        canvLineWidth: 15,
      },

      arPlayer : null,

      audioEl : null,
      audioSource : null,
      isAudioSet : false,
    }
  },
  created() {
    window.z = this

    this.$EventBus.$on('back',this.goBack)
    this.$EventBus.$on('next', () => {
      this.record = true
    })
  },
  mounted () {
    this.globalUtils.tts(this.letter.stepAudioMainText + this.letter.stepAudioSubText)
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(media => {
        this.media = media
      })
  },
  watch: {
    'arPlayer.isPlaying' : function(val) {
      this.ing = val
    }
  },
  computed: {
    ...mapGetters({
      letter: 'getLetter'
    }),
    setColor (){
      if(this.ing && this.record) return '#f53c32'
      else if(this.ing && !this.record) return '#1585ff'
    }
  },
  methods : {
    ...mapActions({
      getRecording: 'getRecording'
    }),
    goBack () {
      this.$router.push('/Watching')
    },
    startRecord() {
      this.ing = true
    },
    stopRecord() {
      this.ing = false
      this.record = false
      setTimeout(() => {
        this.setRecentRecord();
      }, 500);
    },
    setRecentRecord() {
      const recorder = this.$refs.recorder;

      // this.arPlayer = recorder.$children[2]
      recorder.$children.forEach(val => {
        val.$el.className === 'ar-player'
        this.arPlayer = val
      })

      if (recorder) {
        const top = recorder.recordList.length - 1;
        recorder.selected = recorder.recordList[top];
        this.file = recorder.recordList[top]
        this.audioSource = this.file.url
        this.isAudioSet = true

        this.audioEl = this.$refs.audioPlayer.$el.firstElementChild.firstElementChild
        this.audioEl.setAttribute('src', this.audioSource)
        this.audioEl.onended = () => {this.ing = false}
      }
    },
    fetchRecording(){
      const data = new FormData()
      data.append('stepId', this.letter.stepId)
      data.append('recordingAudio', this.file.blob)

      this.getRecording(data)
        .then(result =>{
          console.log(result)
          if(result.code === '0000') this.$router.push('/Listening')
          else {
            alert(`code : ${result.code} message : ${result.message}`)
            this.$router.push('/Listening')
          }
        })
    },
    playOrPause(){
      if(!this.record) {
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

    &.recording {
      top: 33.2rem;
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

    >svg {
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
          background-size: 120%;
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
  }
  &.pause {
    cursor: pointer;
    background-color: transparent !important;
    background-image: url("~@/assets/images/common/ic-pause@2x.png");
    background-repeat: no-repeat;
    background-position: center;

    & .play-btns {
      border: 5px solid #1585ff;
    }

    ::v-deep.ar {
      & #play>svg {
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
