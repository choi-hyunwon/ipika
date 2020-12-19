<template>
  <div class="wrap bg-ivory">
    <LetterHeader/>
    <div class="contents">
      <div class="txt-area">
        <p class="txt-lg">다른 친구들은 어떻게<br/>생각하는지 들어볼까요?</p>
        <p class="txt-sm">친구들의 생각을 듣고, 내 생각과 비교해봐요!</p>
      </div>

      <div class="img-slider" :style="{'transform': `translateX(-${position}px)`, 'transition-duration' : '300ms'}">
        <ul>
          <li>
          <div v-for="(audio, i) in audioList" class="item" :class="{'pause' : !play, 'play' : play && i === focusIdx}">
            <button class="img" @click="showPlay(i)"><img :src=audio.characterImageUrl alt=""></button>
            <p class="name">{{audioList[i].characterName}}</p>
            <p class="time">{{ timeChange(audioList[i].audioPlaytime)}}</p>
          </div>
          </li>
        </ul>
      </div>

      <div v-if="maximumLength>=5" class="navigation">
        <button v-if="position<=0" class="swipe"><img src="@/assets/images/common/swipe_left_default@2x.png" alt=""></button>
        <button v-if="position>0||position>=this.maximumLength" class="swipe"><img src="@/assets/images/common/swipe_left_active@2x.png" alt="" @click="moveLeft"></button>
        <button v-if="position<=this.maximumLength" class="swipe"><img src="@/assets/images/common/swipe_right_active@2x.png" alt="" @click="moveRight"></button>
        <button v-if="position>this.maximumLength" class="swipe"><img src="@/assets/images/common/swipe_right_default@2x.png" alt=""></button>
      </div>
      <div class="btn-wrap"><router-link to="/canvas?page=letter" class="btn btn-dark" :class="{'disabled':submit===false}">다 들었어요!</router-link></div>
      <!--      <div class="btn-wrap"><button class="btn btn-dark ">다 들었어요!</button></div>-->
    </div>
    <ListeningPlay v-if="play" :focusIdx="focusIdx"/>
  </div>
</template>

<script>
import LetterHeader from '@/components/letter/LetterHeader'
import ListeningPlay from '@/components/letter/ListeningPlay'
import { mapGetters } from 'vuex'
import {Controller} from 'swiper'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";


export default {
  name: 'peopleThinking',
  components: {LetterHeader, ListeningPlay,Swiper, SwiperSlide,Controller},
  data () {
    return {
      play : false,
      focusIdx : 0,
      position : 0,
      maximumLength : 0,
      playLength : 250,
      playPopup : false,
      submit : false,
      isEnd : false,

      // swiperOption: {
      //   slidesPerView: 5,
      //   spaceBetween: 100,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true
      //   },
      //   breakpoints: {
      //     1024: {
      //       slidesPerView: 5,
      //       spaceBetween: 210
      //     },
      //   }
      // }
    };
  },
  created() {
    this.$EventBus.$on('back',this.goBack)
    if(this.audioList) this.maximumLength = this.playLength * this.audioList.length -1025
    else this.maximumLength = 0
    this.$EventBus.$on('toggle',()=>{
      this.play = false
    })
    console.log(this.submit)
  },
  mounted:function(){

  },
  computed:{
    ...mapGetters({
      audioList: 'getLetterAudioList'
    })
  },
  methods : {
    goBack () {
      this.$router.push('/Recording')
    },
    showPlay (index) {
      this.play = true
      this.submit = true
      this.focusIdx = index
      console.log(index)
    },
    selectIndex(index){
      this.focusIdx=index
    },
    moveRight () {
      if (this.position <= this.maximumLength) {
        this.position += 280;
        console.log("현재 위치 : " + this.position)
        console.log("전체 길이  : " + this.maximumLength)
      } else return
    },
    moveLeft () {
      if (this.position >= 0) {
        this.position -= 280;
        console.log("현재 위치 : " + this.position)
        console.log("전체 길이  : " + this.maximumLength)
      } else return
    },
    test(){
      this.isEnd = true
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
    margin-bottom: 12rem;
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
  .img-slider {
    width: 100%;
    ul {
      height: 47rem;
      white-space: nowrap;
      padding-left: 10rem;
    }
    .item {
      position: relative;
      width: 32rem;
      display: inline-block;
      margin-right: 10rem;
      a {
        position: relative;
      }
      .img {
        display: inline-block;
        width: 32rem;
        height: 32rem;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 10rem;
        img {
          width: auto;
          height: 100%;
        }
      }
      .title {
        font-family: var(--bold);
        font-size: 2.4rem;
        font-weight: bold;
        line-height: 4rem;
        letter-spacing: -0.03rem;
        text-align: center;
        margin-top: 2.4rem;
      }
      .name{
        height: 40px;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 40px;
        letter-spacing: -0.3px;
        text-align: center;
        margin-top: 24px;
        color: var(--gray-black);
      }
      .time {
        font-family: var(--Inter);
        font-size: 2rem;
        font-weight: 600;
        line-height: 3.6rem;
        letter-spacing: -0.03rem;
        text-align: center;
        color: var(--gray-600);
      }
      &.pause {
        a {
          &::after {
            content: '';
            position: absolute;
            display: block;
            width: 6rem;
            height: 6rem;
            background-image: url("~@/assets/images/common/btn_play@2x.png");
            background-size: cover;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      &.play {
        a {
          &::after {
            content: '';
            position: absolute;
            display: block;
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            background-color: rgba(21, 133, 255,.6);
            background-image: url("~@/assets/images/common/ic-pause-white@2x.png");
            background-size: 2.4rem 2.4rem;
            background-position: center;
            background-repeat: no-repeat;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .img {
          box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.08), 0 40px 60px 0 rgba(0, 0, 0, 0.2);
        }
        .time {
          color: var(--blue-400);
        }
        .title {
          margin-top: 4.4rem;
        }
      }
    }
  }
  .navigation {
    position: absolute;
    bottom: 10rem;
    left: 10rem;
    .swipe {
      display: inline-block;
      width: 8rem;
      height: 8rem;
      margin-right: 1.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .btn-wrap {
    position: absolute;
    bottom: 10rem;
    right: 10rem;
  }
}
</style>
