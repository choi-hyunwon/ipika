<template>
  <div class="header canvas">
    <div class="timer red"><!-- 1분 미만일 경우, red 클래스 추가 -->
      <!--        <div class="img"><img src="@/assets/images/common/timer-black@2x.png" alt=""></div>-->
      <div class="img"><img src="@/assets/images/common/timer@2x.png" alt=""></div> <!-- 1분 미만일 경우 -->
      <div class="time">시간 노출 필요</div>
    </div>
    <div class="symbol">
      <span class="img"><img src="@/assets/images/common/Symbol@2x.png" alt=""></span>
      <span class="text">주제 노출 필요</span>
    </div>
    <div class="box-close">
      <!--<router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>-->
      <!-- TODO: inline-style 추가함 확인 필요 -->
      <button @click="close" style="padding-top: 0;" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CanvasHeader'
}
</script>

<style scoped>

</style>
