<template>
  <div>
    <div class="navigation pb-5">
      <p>TTS 기능 테스트 :<br></p>
      <button id="btn-read" @click="tts.speak('TTS 테스트')">TTS 기능 테스트</button>
    </div>
    <div class="navigation">
      <p>진단테스트 :<br></p>
      <router-link to="/home">초기화면</router-link>
      <router-link to="/Agreement">약관동의</router-link>
      <router-link to="/canvas?page=diagnose">캔버스</router-link>
      <router-link to="/LoadingSpinnerWaiting">로딩스피너 제작 예정</router-link>
      <router-link to="/TestingResult">테스팅 결과</router-link>
    </div>
    <div class="navigation pb-5">
      <p>파블로레터 :<br></p>
      <router-link to="/PabloMain">학습메인</router-link>
      <router-link to="/PabloStudy1">파블로학습1</router-link>
      <router-link to="/PabloStudy2">파블로학습2</router-link>
      <router-link to="/PabloStudy3">파블로학습2(영상 재생 중_화면 탭 시)</router-link>
      <router-link to="/PabloStudy4">파블로학습2(영상 재생 중_전체화면)</router-link>
      <router-link to="/PabloStudy5">파블로학습2(전체화면_화면 탭 시)</router-link><br/>
      <router-link to="/PabloPopup1">파블로학습2(시청 완료 시/뒤로가기)</router-link>
      <router-link to="/PabloPopup2">파블로학습2(주제보기)</router-link>
      <router-link to="/thoughtRecords">파블로학습3(생각녹음하기/들어보기/새로고침(팝업)/뒤로가기(팝업))</router-link>
      <router-link to="/videoReview">파블로학습3_영상다시보기</router-link>
      <router-link to="/peopleThinking">파블로학습4_사람들 생각듣기</router-link>
      <router-link to="/pabloCanvas">파블로학습5_캔버스</router-link>
      <router-link to="/PabloStudy6">파블로학습6_제출완료</router-link>
    </div>

    <div class="navigation pb-5">
      <p>마이갤러리 :<br></p>
      <router-link to="/MyGalleryMain">학습메인_마이페이지</router-link>
      <router-link to="/myGallery">마이갤러리(default)</router-link>
      <router-link to="/myGallery1">마이갤러리_default 배경그림 설정 버튼 탭 시</router-link>
      <router-link to="/myGallery2">마이갤러리_학습 중인 유저_배경그림 설정_스크롤 시</router-link>
      <router-link to="/myGallery3">마이갤러리_학습 중인 유저_내 그림 탭_drawing</router-link>
      <router-link to="/myGallery4">마이갤러리_내 그림 탭_classic</router-link><br/>
      <router-link to="/myGallery5">마이갤러리_내 그림 탭_canvas</router-link>
      <router-link to="/myGallery6">마이갤러리_내 그림 탭_canvas_공개버튼 클릭시</router-link>
      <router-link to="/myGallery7">마이갤러리_내 그림 탭_canvas_공개하기 클릭 시</router-link>
      <router-link to="/myGallery9')" >마이갤러리_공개한_그림</router-link>
      <router-link to="/myGallery10">마이갤러리_내가 그린 그림 이미지</router-link>
      <router-link to="/myGallery11">마이갤러리_내가 그린 그림 이미지_삭제하기 탭 시</router-link>
      <router-link to="/myGallery12">마이갤러리_내가 그린 그림 이미지_오픈갤러리에 공개하기 탭 시</router-link>
      <router-link to="/myGallery13">마이갤러리_공개한 그림 이미지</router-link>
      <router-link to="/myGallery14">마이갤러리_공개한 그림 이미지_공개취소 탭 시</router-link>
      <router-link to="/myGallery15">마이갤러리_공개한 그림 이미지_삭제하기 탭 시</router-link>
      <router-link to="/myGallery16">마이갤러리_내 녹음 듣기_default</router-link>
      <router-link to="/myGallery17">마이갤러리_내 녹음 듣기_재생시</router-link>
      <router-link to="/myGallery18">마이갤러리_내 녹음 듣기_이미지 영역 롱프레스시</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List'
  }
</script>

<style scoped>

  .navigation {
    padding: 10px 10px 0 10px;
  }

  .navigation:last-child {
  }
  .navigation p {
    font-size: 20px;
    line-height: 30px;
    clear: both;
  }
  .navigation a {
    font-weight: bold;
    color: #2c3e50;
    display: inline-block;
    width: 200px;
    height: 100px;
    margin: 10px;
    border: 1px solid #000;
    vertical-align: middle;
    padding: 10px;
    font-size: 14px;
    float: left;
  }

  .navigation a.router-link-exact-active {
    color: #42b983;
  }
</style>
