<template>
  <div class="listening-modal">
    <div class="dim-dark"></div>
    <div class="player_area">
      <div class="player_img">
        <progress-bar type="circle" ref="listenProgress" :options="options" :style="style"></progress-bar>
        <img :src="audioList[this.focusIdx].characterImageUrl" alt="" style="width: 45rem; height: 45rem;">
        <!--이미지 더미 파일 수정 -->
        <div class="recode_button" @click="play">
          <button v-if="!toggleButton" class="recode_btn play"><img src="@/assets/images/common/record_play@2x.png"
                                                                    alt="재생" class="img-m"></button>
          <button v-else-if="toggleButton" class="recode_btn stop"><img src="@/assets/images/common/pause_dim@2x.png"
                                                                        alt="정지" class="img-m"></button>
          <!--      같은위치에 저장되어 있어요 play 재생 stop 저장-->
        </div>
      </div>
      <div class="player_name">
        <p>{{ audioList[this.focusIdx].characterName }}</p>
      </div>
    </div>
    <div class="record-area">
      <p style="text-align:center;">{{ audioList[this.focusIdx].recordingAudioComment }}</p>
    </div>
    <div class="close_box">
      <button @click="togglePlay"><img src="@/assets/images/common/dim close@2x.png" alt="취소" class="img-m"></button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ListeningPlay',
  data () {
    return {
      toggleButton: false,
      audio: null,
      audioDuraion: null,
      completeStep: 0,
      options: {
        color: '#007AFF',
        strokeWidth: 3,
        duration: 3000,
      },
      style: {
        position: 'absolute',
      },
      svgStyle: {
        display: 'block'
      },
      lineBar: null,
      isPause : false,
    }
  },
  created () {
    this.audio = new Audio(this.audioList[this.focusIdx].recordingAudioUrl)
    console.log(this.audio)
    this.options.duration = this.audioList[this.focusIdx].audioPlaytime *1000
  },
  mounted () {
    this.lineBar = this.$refs.listenProgress
    this.play()
    // this.lineBar.animate(1.0)
    // this.$refs.line.animate(1.0)
  },
  watch: {
    play : () => {
      this.audioDuration = this.audio.duration
    }
  },
  computed: {
    ...mapGetters({
      audioList: 'getLetterAudioList',
    }),
    audioTime(){
      return this.audio.duration
    }
  },
  props: {
    playerInfo: {
      Object,
      default () {
        return {}
      }
    },
    focusIdx: {
      Number,
      default () {
        return 0
      }
    }
  },
  methods: {
    togglePlay () {
      this.audio.pause()
      this.$EventBus.$emit('toggle')
    },
    play () {
      if (!this.toggleButton) {
        this.audio.play()
        // this.lineBar.animate(this.isPause? 1 + this.lineBar.value() : 1)
        this.lineBar.animate(1)
        this.audio.onended = () => {
          this.toggleButton = false
          this.isPause=false
          this.lineBar.set(0)
        }
      }else {
        // this.lineBar.stop()
        // this.audio.pause()
        this.lineBar.set(0)
        this.audio.load()
        this.isPause=true
      }
      this.toggleButton = !this.toggleButton
    }
  }
}
</script>
<style lang="scss" scoped>
.listening-modal {
  position: absolute;
  top: 0;
  left: 0;
  //width: 192rem;
  //height: 120rem;
  width: 100%;
  height: 100%;
  z-index: 1000;

  .dim-dark {
    width: 100%;
    height: 100%;
    //width: 192rem;
    //height: 120rem;
    opacity: 0.7;
    background-color: var(--gray-black);
    position: absolute;
    top: 0;
    left: 0;
  }
  .player_area {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .player_img {
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      .recode_btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10rem;
        height: 10rem;
      }
    }
  }
  .player_name {
    margin-top: 6rem;
    p {
      font-family: var(--gray-bold);
      font-size: 4rem;
      font-weight: bold;
      line-height: 5.6rem;
      letter-spacing: -0.03rem;
      text-align: center;
      color: var(--gray-white);
    }
  }
  .record-area {
    position: absolute;
    bottom: 10rem;
    width: 100%;
    p {
      font-family: var(--gray-bold);
      font-size: 4rem;
      line-height: 5.6rem;
      letter-spacing: -0.03rem;
      text-align: center;
      color: var(--gray-white);
      margin: 0 10rem;
    }
  }
  .close_box {
    position: absolute;
    width: 7.2rem;
    height: 7.2rem;
    top: 2.4rem;
    right: 2.4rem;

  }
}
</style>
