<template>
  <div>
    <div class="navigation">
      진단테스트 :
      <a @click="go('/')">초기화면</a> |
      <a @click="go('/Agreement')">약관동의</a> |
      <a @click="go('/canvas')">캔버스</a> |
      <a @click="go('/LoadingSpinnerWaiting')">로딩스피너 제작 예정</a> |
      <a @click="go('/TestingResult')">테스팅 결과</a>
    </div>
    <div class="navigation pb-5">
      파블로레터 :
      <a @click="go('/PabloMain')">학습메인</a> |
      <a @click="go('/PabloStudy1')">파블로학습1</a> |
      <a @click="go('/PabloStudy2')">파블로학습2</a> |
      <a @click="go('/PabloStudy3')">파블로학습2(영상 재생 중_화면 탭 시)</a> |
      <a @click="go('/PabloStudy4')">파블로학습2(영상 재생 중_전체화면)</a> |
      <a @click="go('/PabloStudy5')">파블로학습2(전체화면_화면 탭 시)</a><br/>
      <a @click="go('/PabloPopup1')" class="ml-5 pl-5">파블로학습2(시청 완료 시/뒤로가기)</a> |
      <a @click="go('/PabloPopup2')">파블로학습2(주제보기)</a> |
      <a @click="go('/thoughtRecords')">파블로학습3(생각녹음하기/들어보기/새로고침(팝업)/뒤로가기(팝업))</a> |
      <a @click="go('/videoReview')">파블로학습3_영상다시보기</a> |
      <a @click="go('/peopleThinking')">파블로학습4_사람들 생각듣기</a> |
      <a @click="go('/pabloCanvas')">파블로학습5_캔버스</a> |
      <a @click="go('/PabloStudy6')">파블로학습6_제출완료</a>
    </div>

    <div class="navigation pb-5">
      파블로레터 :
      <a @click="go('/MyGalleryMain')">학습메인_마이페이지</a> |
      <a @click="go('/myGallery')">마이갤러리(default)</a> |
      <a @click="go('/myGallery1')">마이갤러리_default 배경그림 설정 버튼 탭 시</a> |
      <a @click="go('/myGallery2')">마이갤러리_학습 중인 유저_배경그림 설정_스크롤 시</a> |
      <a @click="go('/myGallery3')">마이갤러리_학습 중인 유저_내 그림 탭_drawing</a> |
      <a @click="go('/myGallery4')">마이갤러리_내 그림 탭_classic</a><br/>
      <a @click="go('/myGallery5')">마이갤러리_내 그림 탭_canvas</a> |
      <a @click="go('/myGallery6')">마이갤러리_내 그림 탭_canvas_공개버튼 클릭시</a> |
      <a @click="go('/myGallery7')">마이갤러리_내 그림 탭_canvas_공개하기 클릭 시</a> |
      <a @click="go('/myGallery9')" >마이갤러리_공개한_그림</a> |
      <a @click="go('/myGallery10')">마이갤러리_내가 그린 그림 이미지</a> |
      <a @click="go('/myGallery11')">마이갤러리_내가 그린 그림 이미지_삭제하기 탭 시</a> |
      <a @click="go('/myGallery12')">마이갤러리_내가 그린 그림 이미지_오픈갤러리에 공개하기 탭 시</a>
      <a @click="go('/myGallery13')">마이갤러리_공개한 그림 이미지</a>
      <a @click="go('/myGallery14')">마이갤러리_공개한 그림 이미지_공개취소 탭 시</a>
      <a @click="go('/myGallery15')">마이갤러리_공개한 그림 이미지_삭제하기 탭 시</a>
      <a @click="go('/myGallery16')">마이갤러리_내 녹음 듣기_default</a>
      <a @click="go('/myGallery17')">마이갤러리_내 녹음 듣기_재생시</a>
      <a @click="go('/myGallery18')">마이갤러리_내 녹음 듣기_이미지 영역 롱프레스시</a>
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

  .navigation a {
    font-weight: bold;
    color: #2c3e50;
  }

  .navigation a.router-link-exact-active {
    color: #42b983;
  }
</style>
