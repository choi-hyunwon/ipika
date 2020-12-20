<template>
  <div>
 <slot :toggleAlert="toggleAlert"></slot>


    <b-modal v-if="type==='subject'" centered modal-class="normalPopup" v-model="showAlert">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/drawing@2x.png" alt=""></div>
        <div class="modal-title">학습 주제</div>
      </template>
      <template >
        <p class="text">{{boldText}}</p>
        <p class="text-sm">{{text}}</p>
      </template>
      <template #modal-footer="{ cancel }">
        <b-button class="btn btn-block btn-black" @click="cancel()">{{ buttonText }}</b-button>
      </template>
    </b-modal>


    <b-modal v-if="type==='video'" centered hide-footer modal-class="videoReviewPopup" v-model="showAlert">
      <template  #default="{ hide }">
        <div class="full-screen dim"><!-- 전체 화면시 dim 제거 -->
          <div class="inner">
            <div class="video">
              <button class="btn-close" @click="hide()"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
              <div class="dim" >
                <div class="inner"
                     ref="playerArea">
                  <Player :options="playerOptions"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </b-modal>


    <b-modal ref="alertModal" v-if="type==='diagnose'" no-close-on-backdrop id="oderPopup" centered title="안내" modal-class="textPopup" ok-variant="black btn-block" v-model="showAlert">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
        <div class="modal-title">환영해요</div>
      </template>
      <p class="text">{{text}}</p>
      <template #modal-footer="{ cancel }">
        <button size="sm" class="btn btn-black btn-block" @click="timeStart">네 그려볼게요!</button>
      </template>
    </b-modal>


    <b-modal v-if="type==='success'" centered modal-class="normalPopup" v-model="showAlert">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_green@2x.png" alt=""></div>
      </template>
      <template >
        <p class="text" v-html="boldText"></p>
        <p class="text-sm">{{text}}</p>
      </template>
      <template #modal-footer="{ cancel }">
        <b-button class="btn btn-block btn-black" @click="$router.push('/TestingResult')">{{ buttonText }}</b-button>
      </template>
    </b-modal>

    <b-modal v-if="type==='common'" centered modal-class="normalPopup" v-model="showAlert">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      </template>
      <template >
        <p class="text" v-html="boldText"></p>
        <p class="text-sm">{{text}}</p>
      </template>
      <template #modal-footer="{ cancel }">
        <b-button class="btn btn-block btn-black" @click="cancel">{{ buttonText }}</b-button>
      </template>
    </b-modal>


    <!--<b-modal v-if="type==='agreement1'" centered :title=boldText modal-class="marketing" scrollable ok-only ok-title="닫기" ok-variant="black btn-block" v-model="showAlert">
      <p>{{text}}</p>
    </b-modal>
    <b-modal v-if="type==='agreement2'"  id="startPopup" centered modal-class="textPopup" v-model="showAlert">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      </template>
      <p class="text" v-html="text"></p>
      <template #modal-footer="{ cancel }">
        <router-link to="/canvas?page=diagnose">
          <button size="sm" variant="btn black btn-block" @click="cancel()">네 그려볼게요!!</button>
        </router-link>
      </template>
    </b-modal>-->
  </div>
</template>

<script>
import Player from '@/components/letter/Player'
import { mapGetters , mapMutations} from 'vuex'
export default {
  name: 'Alert',
  components : {Player},
  data(){
    return{
      showAlert : false,
      type : "",
    }
  },
  props:{
    boldText:{
      String,
      default(){return ''}
    },
    text : {
      String,
      default(){return ''}
    },
    buttonText : {
      String,
      default(){return ''}
    },
  },
  created () {
    this.$EventBus.$on('videoEnd', () => {
      this.$EventBus.$off('videoEnd')
    })
  },
  watch : {
    'showAlert' : function (val) {
      if(this.type !== 'video') this.$EventBus.$emit('popupOpen', val)
    },
    'type' :function (){
      if(this.type === 'video') this.setPlayerOptions()
    }
  },
  computed:{
    ...mapGetters({
      playerOptions: 'getPlayerOptions'
    })
  },
  methods : {
    ...mapMutations({
      setTimerStart:'setTimerStart',
      setPlayerSize: 'setPlayerSize'
    }),
    toggleAlert(type,topic){
      this.showAlert = !this.showAlert;
      this.type = type;
    },
    timeStart(){
      this.$EventBus.$emit('bgPopup')
      this.$refs['alertModal'].hide()
      this.globalUtils.tts("파블로 캔버스 툴에 대해 간단하게 설명해드릴게요")
    },
    setPlayerOptions(){
      this.setPlayerSize({width: 1065, height: 666})
    }
  }
}
</script>


