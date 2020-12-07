<template>
  <div class="video">
    <video ref="videoPlayer" class="video-js"/>

    <div class="play-wrap"
         :class="{'isTap' : isTap}"
         @click="tap"
    />
    <div class="btn-area">
      <!-- 5초 앞으로 -->
      <button v-show="isTap" class="btn-rewind" @click="() => skip(-5)">
        <img src="@/assets/images/common/5s_rewind@2x.png" alt="">
      </button>
      <!-- 재생 -->
      <button v-show="isStart || (isTap && !isPlaying)" class="btn-play" @click="play">
        <img src="@/assets/images/common/btn_play@2x.png" alt="">
      </button>
      <!-- 일시 정지 -->
      <button v-show="isTap && isPlaying" class="btn-pause" @click="pause">
        <img src="@/assets/images/common/pause@2x.png" alt="">
      </button>
      <!-- 5초 뒤로 -->
      <button v-show="isTap" class="btn-forward" @click="() => skip(5)">
        <img src="@/assets/images/common/5s_forward@2x.png" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
  name: "Player",

  props: {
    options: {
      Object,
      default() {
        return {}
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

  mounted () {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    })
    // this.player.bigPlayButton.addClass('bigPlayButtonClass')

    this.player.on('ended', this.videoEnd)
  },

  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  },

  methods: {
    // 영상 재생
    play() {
      this.player.play()
      this.isPlaying = true

      // 시작이 아닌 경우
      if(!this.isStart) {
        this.extendTap()
      }

      this.isStart = false
    },

    // 영상 정지
    pause() {
      this.player.pause()
      this.isPlaying = false
      this.extendTap()
    },

    // 5초 앞으로 / 5초 뒤로
    skip(time) {
      this.player.currentTime(this.player.currentTime() + time)
      this.extendTap()
    },

    // 영상 종료
    videoEnd() {
      this.isPlaying = false

      // TODO;
      alert('The End')
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
  }
  .btn-area {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    text-align: center;
    margin-top: 48rem;
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
}
.vjs-duration.vjs-time-control.vjs-control {
  display: block;
}
</style>
