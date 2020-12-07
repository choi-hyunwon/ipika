<template>

  <div class="wrap bg-ivory">
    <div class="header ivory">
<!--      < style="position: absolute; top: 200px; left: 820px;">뒤로가기 팝업</b-button>-->
      <Confirm v-slot="slotProps"
               :okText="'뒤로 갈래요'"
               :cancelText="'닫기'"
               :text ="'지워진 녹음은 다시 들을 수 없어요'"
      >
      <button class="symbol" @click="globalUtils.confirm(slotProps,'goBack')">
        <img src="@/assets/images/common/arrow_left@2x.png" alt="">
      </button>
      </Confirm>

      <div class="flex-box">
        <Alert v-slot="slotProps">
          <button @click="globalUtils.alert(slotProps,'video')" class="btn-right">
            <span class="img"><img src="@/assets/images/common/ic-play@2x.png" alt=""></span>
            <span class="tit">영상보기</span>
          </button>
        </Alert>

        <Alert v-slot="slotProps"
                :boldText="'주제보기'"
                :text="'주제보기'"
                :buttonText="'닫기'">
          <button @click="globalUtils.alert(slotProps,'subject')" class="btn-right">
            <span class="img"><img src="@/assets/images/common/ic-drawing@2x.png" alt=""></span>
            <span class="tit">주제보기</span>
          </button>
        </Alert>

        <div class="box-close">
          <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="txt-area">
        <p class="txt-lg">
          정윤님은<br/>
          이 주제에 대해 어떻게 생각해요?<br/>
          생각을 들려주세요
        </p>
        <p class="txt-sm">
          자유롭게 본인의 생각을 말해보세요
        </p>
      </div>
      <div class="record-area">
        <av-media type="frequ" :media="media" line-color="darkorange"/>
      </div>
      <div class="play-area">
        <audio-recorder
          ref="recorder"
          :before-recording="startRecord"
          :pause-recording="callback"
          :after-recording="setRecorded"
          :select-record="callback"
          :before-upload="callback"
          :successful-upload="callback"
          :failed-upload="callback"/>
        <Confirm v-slot="slotProps"
                 :complete-text="`다시 녹음하시겠어요? 지금 녹음한 내용은 지워져요`"
                 :text="`지워진 녹음은 다시 들을 수 없어요`"
                 :cancelText="`닫기`"
                 :okText="`다시 녹음할게요`"
        >
        <button @click="globalUtils.confirm(slotProps,'refresh')" style="position: absolute; bottom: 0"><img src="@/assets/images/common/refresh_active@2x.png" alt=""></button>
        </Confirm>
        <!--<button><img src="@/assets/images/common/record@2x.png" alt=""></button>
        <button><img src="@/assets/images/common/record_play@2x.png" alt=""></button>
        <button><img src="@/assets/images/common/refresh_active@2x.png" alt=""></button>
        <button><img src="@/assets/images/common/refresh_default@2x.png" alt=""></button>-->
      </div>
      <div class="btn-area">
        <router-link to="/Listening" class="btn btn-dark">다했어요!</router-link>
        <button class="btn btn-dark disabled">다했어요!</button>
      </div>
    </div>
  </div>
</template>

<script>
import Confirm from '@/components/popup/Confirm'
import Alert from '@/components/popup/Alert'
export default {
  name: 'recording',
  components: { Alert, Confirm },
  data(){
    return{
      media: null
    }
  },
  created() {
    this.$EventBus.$on('back',this.goBack)
  },
  mounted () {
    const audio = this.$refs.player
    const constraints = {
      audio: true,
      video: false
    }
    navigator.mediaDevices.getUserMedia(constraints)
      .then(media => {
        this.media = media
      })
  },
  methods : {
    goBack () {
      this.$router.push('/Watching')
    },
    callback (data) {
      console.debug(data)
    },
    setPlayerDisabled() {
      const $player = this.$refs.recorder.$el.querySelector('.ar-player');
      $player.classList.remove('abled');
    },
    setPlayerAbled() {
      const $player = this.$refs.recorder.$el.querySelector('.ar-player');
      $player.classList.add('abled');
    },
    hideStopBtn() {
      const $stopBtn = this.$refs.recorder.$el.querySelector('.ar-recorder__stop');
      $stopBtn.style.display = 'none';
    },
    showStopBtn() {
      const $stopBtn = this.$refs.recorder.$el.querySelector('.ar-recorder__stop');
      $stopBtn.style.display = 'block';
    },
    setRecentRecord() {
      const recorder = this.$refs.recorder;
      if (recorder) {
        const top = recorder.recordList.length - 1;
        recorder.selected = recorder.recordList[top];
      }
    },

    // 녹음 끝 <audio-recorder ... :after-recording="setRecorded" ... />
    setRecorded() {
      // 중지 버튼 hide
      this.hideStopBtn();

      // 녹음본 저장 및 교체
      this.setPlayerDisabled();
      setTimeout(() => {
        // 마지막 List요소를 selected 오브젝트로 설정해 준다.
        this.setRecentRecord();
        this.setPlayerAbled();
      }, 800);
    },

    // 녹음 시작 <audio-recorder ... :before-recording="startRecord" ... />
    startRecord() {
      // 중지 버튼 show
      this.showStopBtn();
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
    background-color: pink;
    top: 40.8rem;
  }
  .play-area {
    padding-left: 10rem;
    button {
      display: inline-block;
      width: 12rem;
      height: 12rem;
      margin-left: 2.4rem;
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

::v-deep .ar-player__play {
  fill: white !important;
  background-color: #171003 !important;

  &.ar-player__play--active {
    background-color: #171003 !important;
  }
}

::v-deep .ar-player__play {
  fill: white !important;
  background-color: #ff6b64 !important;
  cursor: inherit;

  &.ar-player__play--active {
    background-color: #ff6b64 !important;
  }
}

::v-deep .ar-icon {
  border: none;
  box-shadow: 0 2px 5px 1px rgba(158, 158, 158, 0.5);
}

::v-deep .ar-icon__lg {
  width: 38px;
  height: 38px;
}

::v-deep svg {
  vertical-align: baseline;
}

::v-deep div.ar {
  margin: auto;
  width: 100%;
  max-width: 510px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  background-color: #fff;
  border: 1px solid #eff2f7;
  border-radius: 0.375rem;
}

::v-deep .ar-player {
  width: 100%;
}

/* disalbed 처리 */
::v-deep .ar-player {
  opacity: 0.5;
  cursor: default;
  &.abled {
    opacity: 1;
    cursor: pointer;
  }
}

::v-deep .ar-player__time {
  width: 3.2rem;
  margin: 0 0.4rem;
}

::v-deep .ar-records {
  display: none;
}

::v-deep .ar-records__record {
  min-width: 250px;
}

::v-deep .ar-recorder__duration {
  font-size: 1.3rem;
  margin: 0.3rem 0 0 0;
}

::v-deep .ar-player-actions {
  width: 50px;
  justify-content: center;
}

::v-deep .ar-player > .ar-player-bar > .ar-player__progress {
  max-width: 110px;
}

/* 중지 버튼 레코딩 버튼과 겹치기 */

::v-deep .ar-recorder__stop {
  fill: white !important;
  background-color: #ff6b64 !important;
  top: 0;
  right: 0;
  width: 38px;
  height: 38px;
  display: none;
}
</style>


