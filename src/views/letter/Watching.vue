<template>
  <div class="wrap bg-ivory">
    <LetterHeader></LetterHeader>
    <div class="dim">
      <div class="inner"
           ref="playerArea">
        <Player v-if="isMounted" :options="playerOptions" :isPopup="false"/>
      </div>
    </div>
  </div>
</template>

<script>
import LetterHeader from '@/components/letter/LetterHeader'
import Player from '@/components/letter/Player'
import { mapGetters } from 'vuex'

export default {
  name: 'Watching',
  components: {Player , LetterHeader},
  data(){
    return {
      isMounted: false
    }
  },
  created () {
    this.$EventBus.$on('back',this.goBack)
    this.$EventBus.$on('next',this.goToNext)
    this.$EventBus.$on('videoEnd', () => {
      this.$EventBus.$off('videoEnd')
      this.goToNext()
    })
  },
  mounted () {
    this.playerOptions.width = this.$refs.playerArea.clientWidth
    this.playerOptions.height = this.$refs.playerArea.clientHeight
    this.isMounted = true
  },
  computed:{
    ...mapGetters({
      playerOptions: 'getPlayerOptions'
    })
  },
  methods : {
    goBack(){
      this.$router.push('/Intro')
    },
    goToNext(){
      this.$router.push('/Recording')
    },
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  .bg {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    &.full-screen {
      height: 120rem;
    }
  }
  .dim {
    width: 100%;
    height: calc(112.4rem - 8rem);
    position: absolute;
    top: 8rem;
    left: 0;
    background-color: rgba(20,20,20,.6);
    >.inner {
      position: relative;
      width: 100%;
      height: 100%;
      /*.video {
        position: relative;
        width: 100%;
        height: calc(120rem - 12rem);

        // TODO: css 추가
        >.video-js {
          .vjs_video_3-dimensions {
            width: 100%;
            height: 100%;
          }
        }

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
          height: 12rem;
          position: absolute;
          left: 50%;
          top: 48rem;
          transform: translateX(-50%);
          text-align: center;
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
      }*/
    }
    &.full-screen {
      height: 100%;
      top: 0;
      .inner {
        height: 100%;
      }
      .video {
        height: 100%;
      }
    }
  }
  .btn-dim-close {
    position: absolute;
    width: 7.2rem;
    height: 7.2rem;
    right: 2.4rem;
    top: 2.4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>


