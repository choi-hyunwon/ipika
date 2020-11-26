<template>
  <div class="wrap bg-ivory">
    <div class="header ivory">
<!--      < style="position: absolute; top: 200px; left: 820px;">뒤로가기 팝업</b-button>-->
      <div v-b-modal.goBackPopup class="symbol" ><img src="@/assets/images/common/arrow_left@2x.png" alt=""></div>
      <div class="flex-box">
        <router-link to="/videoReview" class="btn-right">
          <span class="img"><img src="@/assets/images/common/ic-play@2x.png" alt=""></span>
          <span class="tit">영상보기</span>
        </router-link>
        <div v-b-modal.normalPopup2 class="btn-right">
          <span class="img"><img src="@/assets/images/common/ic-drawing@2x.png" alt=""></span>
          <span class="tit">주제보기</span>
          <b-modal id="normalPopup2" centered modal-class="normalPopup">
            <template #modal-header>
              <div class="symbol"><img src="@/assets/images/common/drawing@2x.png" alt=""></div>
            </template>
            <p class="text text-md">학습 주제 영역입니다.<br/>
              학습 주제는 최대 세 문장까지<br/>
              가능합니다.</p>
            <p class="text-sm">생각 제시하는 생각 과제 제시하는 텍스트<br/>
              영역으로 최대 두줄 이상을 생각합니다.</p>
            <template #modal-footer="{ cancel }">
              <b-button class="btn btn-block btn-black" @click="cancel()">닫기</b-button>
            </template>
          </b-modal>
        </div>
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
        <!-- todo! svg 녹음? -->
      </div>
      <div class="play-area">
        <button><img src="@/assets/images/common/record@2x.png" alt=""></button><!-- 녹음 버튼 -->
        <button><img src="@/assets/images/common/record_play@2x.png" alt=""></button><!-- 재생 버튼 -->
        <button><img src="@/assets/images/common/refresh_active@2x.png" alt=""></button><!-- 새로고침 활성화 버튼 -->
        <button><img src="@/assets/images/common/refresh_default@2x.png" alt=""></button><!-- 새로고침 버튼 -->
      </div>
      <div class="btn-area">
        <router-link to="/peopleThinking" class="btn btn-dark">다했어요!</router-link>
        <button class="btn btn-dark disabled">다했어요!</button>
      </div>
    </div>
    <b-button v-b-modal.refreshPopup style="position: absolute; top: 200px; left: 700px;">새로고침 팝업</b-button>
    <b-modal id="refreshPopup" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">다시 녹음하시겠어요?<br/>
        지금 녹음한 내용은 지워져요</p>
      <p class="text-sm">지워진 녹음은 다시 들을 수 없어요</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half">다시 녹음할게요</b-button>
        <b-button variant="black" class="btn-half" @click="cancel()">닫기</b-button>
      </template>
    </b-modal>

<!--    <b-button v-b-modal.goBackPopup style="position: absolute; top: 200px; left: 820px;">뒤로가기 팝업</b-button>-->
    <b-modal id="goBackPopup" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">뒤로 가시겠어요?<br/>
        지금 녹음한 내용은 지워져요</p>
      <p class="text-sm">지워진 녹음은 다시 들을 수 없어요</p>
      <template #modal-footer="{ cancel }">
        <router-link to="PabloStudy2" class="btn btn-gray btn-half">뒤로 갈래요</router-link>
<!--        <b-button variant="gray" class="btn-half">뒤로 갈래요</b-button>-->
        <b-button variant="black" class="btn-half" @click="cancel()">닫기</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'thoughtRecords'
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
</style>
