<template>

  <div class="wrap bg-ivory">
    <div class="header ivory">
      <!--      < style="position: absolute; top: 200px; left: 820px;">뒤로가기 팝업</b-button>-->
      <Confirm v-slot="slotProps"
               :okText="'네'"
               :cancelText="'아니오'"
               :completeText = "'이전 화면으로 이동할까요? </br> 진행중인 학습 내용은 </br> 저장되지 않아요!'"
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
        <div v-if="!ing">
          <div v-if="record" style="width: 100%; height: 5px; background-color: #2fca56;"></div>
          <div v-else style="width: 100%; height: 5px; background-color: #1585ff;"></div>
        </div>
        <av-media class="_media" ref="media" type="frequ" :media="media" line-color="#f53c32"/>
      </div>
      <div class="play-area">
        <audio-recorder
          ref="recorder"
          :before-recording="startRecord"
          :after-recording="stopRecord"/>
        <Confirm v-slot="slotProps"
                 :complete-text="`다시 녹음하시겠어요? 지금 녹음한 내용은 지워져요`"
                 :text="`지워진 녹음은 다시 들을 수 없어요`"
                 :cancelText="`닫기`"
                 :okText="`다시 녹음할게요`">
          <button v-if="!record" @click="globalUtils.confirm(slotProps,'checkRed')" style="position: absolute; bottom: 0"><img src="@/assets/images/common/refresh_active@2x.png" alt=""></button>
          <button v-if="record" style="position: absolute; bottom: 0"><img src="@/assets/images/common/refresh_default@2x.png" alt=""></button>
        </Confirm>
      </div>
      <div class="btn-area">
        <router-link v-if="!record" to="/Listening" class="btn btn-dark">다했어요!</router-link>
        <button v-if="record" class="btn btn-dark disabled">다했어요!</button>
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
      media: null,
      constraints : {
        audio: true,
        video: false
      },
      ing : false,
      record : true
    }
  },
  created() {
    this.$EventBus.$on('back',this.goBack)
    this.$EventBus.$on('next', this.todoRemove);
  },
  mounted () {
    this.todoRemove()
    this.globalUtils.tts('정윤님은 이 주제에 대해 어떻게 생각해요? 생각을 들려주세요 자유롭게 자신의 생각을 말해보세요')
    navigator.mediaDevices.getUserMedia(this.constraints)
      .then(media => {
        this.media = media
      })
  },
  watch :{
    'ing':function (){ // TODO 퍼블리싱 완료 후 제거
      if(this.ing) $('._media').show()
      else $('._media').hide()
    },
    'record':function (){ // TODO 퍼블리싱 완료 후 제거
      if(this.record) {
        $('.ar-recorder').show()
        $('.ar-player').hide()
      }else{
        $('.ar-recorder').hide()
        $('.ar-player').show()
      }
    }
  },
  methods : {
    goBack () {
      this.$router.push('/Watching')
    },
    startRecord() {
      this.ing = true
      this.setRecordAbled()
    },
    stopRecord() {
      this.ing = false
      this.record = false
      this.setPlayerAbled()
      setTimeout(() => {
        this.setRecentRecord();
      }, 800);
    },
    setRecentRecord() {
      const recorder = this.$refs.recorder;
      if (recorder) {
        const top = recorder.recordList.length - 1;
        recorder.selected = recorder.recordList[top];
      }
    },
    setPlayerAbled() { // TODO 퍼블리싱 완료 후 제거
      const $player = this.$refs.recorder.$el.querySelector('.ar-player');
      $player.classList.add('abled');
      const $stopBtn = this.$refs.recorder.$el.querySelector('.ar-recorder__stop');
      $stopBtn.style.display = 'none';
    },
    setRecordAbled() { // TODO 퍼블리싱 완료 후 제거
      const $stopBtn = this.$refs.recorder.$el.querySelector('.ar-recorder__stop');
      $stopBtn.style.display = 'block';
    },
    todoRemove(){ // TODO 퍼블리싱 완료 후 제거
      this.record = true
      $('._media').hide()
      $('.ar-player').hide()
      $('.ar-recorder').show()
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

::v-deep .ar-player > .ar-player-bar{
  display: none;
}
::v-deep .ar-player > .ar-player-bar > .ar-player__progress {
  max-width: 110px;
}
::v-deep .ar-recorder__duration {
  font-size: 1.3rem;
  margin: 0.3rem 0 0 0;
  display: none;
}
</style>


