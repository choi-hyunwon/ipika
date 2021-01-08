<template>
  <div class="video">
    <!-- 영상 플레이어 -->
    <video ref="videoPlayer" class="video-js"
           :style="{
             'isStart' : 'display: none',
             '!isStart' : 'display: block',
           }"
    />

    <!-- 영상 시작 전 썸네일 이미지 -->
    <div v-if="isStart && !isPopup"
         class="video-thumbnail"
         style="position: absolute; top: 0; background-size: cover; height: 100%; width: 100%;"
         :style="{ 'background-image' : `url(${options.Thumnail})` }"
    />

    <div v-if="options.sources[0].src">
      <!-- 비디오 영역 커버 - videojs 직접 컨트롤 안되도록 -->
      <div class="play-wrap"
           :class="{'isTap' : isTap}"
           @click="tap"
      />

      <!-- 비디오 컨트롤 버튼 영역 -->
      <div
           class="btn-area"
      >
        <!-- 5초 앞으로 -->
        <button v-show="isTap" class="btn-rewind" @click="() => skip(-5)">
          <img src="@/assets/images/common/5s_rewind@2x.png" alt="5초앞으로가기">
        </button>
        <!-- 재생 -->
        <button v-show="isStart || (isTap && !isPlaying)" class="btn-play" @click="play">
          <img src="@/assets/images/common/btn_play@2x.png" alt="재생하기">
        </button>
        <!-- 일시 정지 -->
        <button v-show="isTap && isPlaying" class="btn-pause" @click="pause">
          <img src="@/assets/images/common/pause@2x.png" alt="정지하기">
        </button>
        <!-- 5초 뒤로 -->
        <button v-show="isTap" class="btn-forward" @click="() => skip(5)">
          <img src="@/assets/images/common/5s_forward@2x.png" alt="5초뒤로가기">
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { mapGetters } from 'vuex'

export default {
  name: "Player",

  props: {
    options: {
      Object,
      default() {
        return {}
      }
    },
    isPopup: {
      Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      isStart: true,
      player: null,
      isPlaying: false,
      isTap: false,
      tapTimer: null
    }
  },
  created () {
    console.log('PLAYER CREATED>>>>>>>>>>>>>>>>>>>>>')




    this.$EventBus.$on('popupOpen', (val) => {
      if(this.player) {
        val && this.pause()
      }
    })
    this.$eventBus.$on('setVolumeVideo',this.setVolume)
  },
  computed:{
    ...mapGetters({
       volume : 'getVolume'
    })
  },
  mounted () {

    this.fnMakeSecUrl()
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    })
    // this.player.bigPlayButton.addClass('bigPlayButtonClass')

    this.player.on('ended', this.videoEnd)
  },

  beforeDestroy () {
    console.log('<<<<<<<<<<<<<<<<<<<<<PLAYER BEFORE DESTROY')
    if (this.player) {
      this.player.dispose()
      this.player = null
    }
  },

  methods: {

    fnMakeSecUrl(){
      let orgUrl = this.options.sources[0].src

      var cdnkey = "iscreamauth";
      var encUrl = orgUrl.substring(orgUrl.indexOf(".com")+4);
      console.log("encUrl : " + encUrl);
      var convurl = "https://avod.home-learn.com"+encUrl;

      const jsDate = new Date();
      var ctime = Date.now();
      console.log(ctime);

      var pxTime = parseInt(ctime/1000, 10) + (60*5);
      console.log("pxTime : " + pxTime);

      var pxHash = cdnkey + encUrl + pxTime;
      console.log("dec hash : " + pxHash);
      var pxHash = this.$CryptoJS.MD5(pxHash);

      console.log("enc hash : " + pxHash);

      var secUrl = convurl+"?px-time="+pxTime+"&px-hash="+pxHash;

      console.log("k34lURL :"+ secUrl);

      this.options.sources[0].src = secUrl
    },
    // 영상 재생
    play() {
      this.player.play()
      this.player.volume(this.volume)
      this.isPlaying = true

      if(this.player.currentTime() === 0){
        // 로그값 넣기
        this.Android.setLog('action=MediaStarted&id='+'N/A'+'&url='+this.options.sources[0].src+'&title='+'N/A'+'&type=VideoObject&duration='+'N/A'+'&currentTime='+0+'&edApp=파블로')
      } else {
        this.Android.setLog('action=MediaResumed&id='+'N/A'+'&url='+this.options.sources[0].src+'&title='+'N/A'+'&type=VideoObject&duration='+'N/A'+'&currentTime='+this.player.currentTime()+'&edApp=파블로')
      }

      // TODO: 테스트용 임시 코드(영상시간단축)
      if(this.isStart) {
        // this.player.currentTime(this.player.duration() - 5)
      }

      // 시작이 아닌 경우
      if(!this.isStart) {
        this.extendTap()
      }

      this.isStart = false
    },
    setVolume(){
      this.player.volume(this.volume)
      this.Android.setLog('action=MediaChangedVolume&id='+'N/A'+'&url='+this.options.sources[0].src+'&title='+'N/A'+'&type=VideoObject&duration='+'N/A'+'&currentTime='+this.player.currentTime()+'&edApp=파블로')
    },
    // 영상 정지
    pause() {
      this.player.pause()
      this.isPlaying = false
      this.extendTap()
      //로그값넣기기
      this.Android.setLog('action=MediaPaused&id='+'N/A'+'&url='+this.options.sources[0].src+'&title='+'N/A'+'&type=VideoObject&duration='+'N/A'+'&currentTime='+this.player.currentTime()+'&edApp=파블로')
    },

    // 5초 앞으로 / 5초 뒤로
    skip(time) {
      this.player.currentTime(this.player.currentTime() + time)
      this.extendTap()
      this.Android.setLog('action=MediaJumpedTo&id='+'N/A'+'&url='+this.options.sources[0].src+'&title='+'N/A'+'&type=VideoObject&duration='+'N/A'+'&currentTime='+this.player.currentTime()+'&seekTime=5&edApp=파블로')
      //로그값 넣기
    },

    // 영상 종료
    videoEnd() {
      this.isPlaying = false
      this.Android.setLog('action=MediaJumpedTo&id='+'N/A'+'&url='+this.options.sources[0].src+'&title='+'N/A'+'&type=VideoObject&duration='+'N/A'+'&currentTime='+this.player.currentTime()+'&seekTime=5&edApp=파블로')
      this.$EventBus.$emit('videoEnd')
      // 테스트용 임시 코드(영상 무한반복)
      // {
      //   this.isPlaying = true
      //
      //   this.player.currentTime(0)
      //   this.player.play()
      // }
    },

    // 화면 탭
    tap() {
      if(!this.isStart) {

        if(this.isTap) {
          this.resetTap()
        } else {
          this.startTap()
        }

      }
    },

    // 화면 탭 상태 시작
    startTap() {
      this.isTap = true
      this.tapTimer = setTimeout(() => {
        this.resetTap()
      }, 1000 * 2)
    },

    // 화면 탭 상태 제거
    resetTap() {
      this.isTap = false
      clearTimeout(this.tapTimer)
      this.tapTimer = null
    },

    // 탭 시간 연장
    extendTap() {
      clearTimeout(this.tapTimer)
      this.tapTimer = null

      this.startTap()
    },
  }

}
</script>

<style lang="scss" scoped>
.video {
  position: relative;
  width: 100%;
  height: calc(120rem - 12rem);

  .text {
    font-family: var(--bold);
    font-size: 4rem;
    font-weight: bold;
    line-height: 5.6rem;
    letter-spacing: -0.03rem;
    color: var(--gray-white);
    padding: 6rem 6rem 0;
  }
  .play-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    text-align: center;
    .isTap {
      background-color: var(--gray-black);
      opacity: 0.3;
    }
    z-index: 1;
  }
  .btn-area {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    text-align: center;
    margin-top: 48rem;
    z-index: 5;
    button {
      display: inline-block;
    }
    .btn-rewind, .btn-forward {
      width: 10rem;
      height: 10rem;
      margin-right: 6.4rem;
    }
    .btn-pause, .btn-play {
      width: 12rem;
      height: 12rem;
      margin-right: 6.4rem;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  .progress-wrap {
    position: absolute;
    width: 100%;
    height: 4rem;
    bottom: 4rem;
    .inner {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .time {
      display: inline-block;
      width: 8rem;
      font-family: var(--Inter);
      font-size: 2.4rem;
      font-weight: bold;
      line-height: 4rem;
      letter-spacing: -0.03rem;
      text-align: left;
      color: var(--gray-white);
      margin-left: 4rem;
      vertical-align: middle;
    }

    .progress-inner {
      position: relative;
      display: inline-block;
      width: 161.8rem;
      height: 4rem;
      vertical-align: middle;
      &::before {
        content: '';
        position: absolute;
        width: 161.8rem;
        height: .4rem;
        background-color: rgba(20,20,20,.3);
        top: calc((4rem - .4rem) / 2);
      }
      .bar {
        position: absolute;
        display: block;
        height: .4rem;
        top: calc((4rem - .4rem) / 2);
        left: 0;
        background-color: var(--gray-white);
        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          background-color: var(--gray-white);
          right: 0;
          bottom: -1.1rem;
        }
      }
    }
    .playtime {
      display: inline-block;
      width: 8rem;
      font-family: var(--Inter);
      font-size: 2.4rem;
      font-weight: bold;
      line-height: 4rem;
      letter-spacing: -0.03rem;
      text-align: right;
      color: var(--gray-white);
      vertical-align: middle;
      margin-right: 3rem;

    }
    .btn-full-screen {
      display: inline-block;
      width: 3.2rem;
      height: 3.2rem;
      vertical-align: middle;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

<style>
.video-js button.vjs-big-play-button {
  display: none;
}
button.vjs-play-control.vjs-control.vjs-button.vjs-paused {
  display: none;
}
button.vjs-play-control.vjs-control.vjs-button.vjs-playing {
  display: none;
}
.vjs-volume-panel.vjs-control.vjs-volume-panel-horizontal {
  display: none;
}
button.vjs-picture-in-picture-control.vjs-control.vjs-button {
  display: none;
}
button.vjs-fullscreen-control.vjs-control.vjs-button {
  display: none;
}
.vjs-remaining-time.vjs-time-control.vjs-control {
  display: none;
}

.video-js .vjs-current-time, .vjs-no-flex .vjs-current-time {
  display: block;
  margin-left: 22px;
}
.vjs-duration.vjs-time-control.vjs-control {
  display: block;
}
.vjs-has-started .vjs-control-bar {
  opacity: 1 !important;
  background-color: rgba(255,255,255,0);
  margin-bottom: 40px;
  height: 4em;
}
.video-js .vjs-progress-control .vjs-progress-holder {
  margin: 0 120px 0 10px;
}
.vjs-duration.vjs-time-control.vjs-control {
  position: absolute;
  right: 22px;
}
.vjs-time-control.vjs-control {
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.3px;
  font-weight: bold;
}
</style>

<!--.vjs-current-time.vjs-time-control.vjs-control-->
<!--.vjs-duration.vjs-time-control.vjs-control-->
