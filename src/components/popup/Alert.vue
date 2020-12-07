<template>
  <div>
 <slot :toggleAlert="toggleAlert"></slot>
    <b-modal v-if="type==='subject'" centered modal-class="normalPopup" v-model="showAlert">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/drawing@2x.png" alt=""></div>
      </template>
      <template  >
        <p class="text text-md">{{boldText}}</p>
        <p class="text-sm">{{text}}</p>
      </template>
      <template #modal-footer="{ cancel }">
        <b-button class="btn btn-block btn-black" @click="cancel()">{{ buttonText }}</b-button>
      </template>
    </b-modal>

    <b-modal v-if="type==='video'" centered hide-footer modal-class="videoReviewPopup" v-model="showAlert">
      <template  #default="{ hide }">
        <div class="bg"><img src="@/assets/images/temp/sample_img_02.png" alt=""></div>
        <div class="full-screen dim"><!-- 전체 화면시 dim 제거 -->
          <div class="inner">
            <div class="video">
              <p class="text">생각 제시하는 생각 과제 제시하는 텍스트 영역입니다.</p>
              <button class="btn-close" @click="hide()"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
              <!-- s 전체 화면시 hide -->
              <div class="play-wrap">
                <button class="btn-rewind"><img src="@/assets/images/common/5s_rewind@2x.png" alt=""></button>
                <button class="btn-pause"><img src="@/assets/images/common/pause@2x.png" alt=""></button>
                <button class="btn-play"><img src="@/assets/images/common/btn_play@2x.png" alt=""></button>
                <button class="btn-forward"><img src="@/assets/images/common/5s_forward@2x.png" alt=""></button>
              </div>
              <div class="progress-wrap">
                <div class="inner">
                  <span class="time">2:40</span>
                  <div class="progress-inner">
                    <span class="bar" style="width: 30%"></span>
                  </div>
                  <span class="playtime">2:40</span>
                  <button class="btn-full-screen"><img src="@/assets/images/common/btn_full_screen@2x.png" alt="">
                  </button>
                </div>
              </div>
              <!-- e 전체 화면시 hide -->
            </div>
          </div>
          <!-- e 영상 재생 중_화면 탭 시 -->
        </div>
      </template>
    </b-modal>

    <b-modal v-if="type==='agreement1'" centered :title=boldText modal-class="marketing" scrollable ok-only ok-title="닫기" ok-variant="black btn-block" v-model="showAlert">
      <p>
        {{text}}
      </p>
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
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data(){
    return{
      showAlert : false,
      type : "",
      modalShow : true
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
    }
  },
  methods : {
    toggleAlert(type,topic){
      this.showAlert = !this.showAlert;
      this.type = type;
    },
  }
}
</script>


