<template>
  <div class="listening-modal">
   <div class="dim-dark">
    </div>

    <div class="player_area">
      <div class="player_img">
        <img src="http://cdn.mcocoa.com/edu//study/20201207113508/study/캐릭터1.png" alt="">
        <div class="recode_button">
          <div class="recode_btn play"><img src="@/assets/images/common/record_play@2x.png" alt="재생" class="img-m"></div>
          <div class="recode_btn stop"><img src="@/assets/images/common/pause_dim@2x.png" alt="정지" class="img-m"></div>
          <!--      같은위치에 저장되어 있어요 play 재생 stop 저장-->
        </div>
      </div>
      <div class="player_name">
        <p>김정윤</p>
      </div>
    </div>

    <div class="record-area">
    <p>음성 파일 자막 내용 노출 영역입니다. 음성 파일 자막 내용 노출 영역입니다. 음성 파일 자막 내용 노출 영역입니다. 음성 파일 자막 내용 노출 영역입니다. 음성 파일 자막 내용 노출 영역입니다.</p>
    </div>
    <div class="close_box">
      <img src="@/assets/images/common/dim close@2x.png" alt="취소" class="img-m">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListeningPlay'
}
</script>

<style lang="scss" scoped>

.listening-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 192rem;
  height: 120rem;

  .dim-dark {
    width: 192rem;
    height: 120rem;
    opacity: 0.7;
    background-color: var(--gray-black);
    position: absolute;
    top: 0;
    left: 0;
  }

  .player_area {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .player_img{
      position: relative;
      .recode_btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10rem;
        height: 10rem;
      }
    }
  }
  .player_name{
    margin-top: 6rem;
    p{
    font-family:var(--gray-bold);
    font-size: 4rem;
    font-weight: bold;
    line-height: 5.6rem;
    letter-spacing: -0.03rem;
    text-align: center;
      color: var(--gray-white);
    }
  }
  .record-area{
    position: absolute;
    bottom: 10rem;
    p{
      font-family:var(--gray-bold);
      font-size: 4rem;
      line-height: 5.6rem;
      letter-spacing: -0.03rem;
      text-align: center;
      color: var(--gray-white);

      margin: 0 10rem;
    }
  }
  .close_box{
    position: absolute;
    width: 7.2rem;
    height: 7.2rem;
    top: 2.4rem;
    right: 2.4rem;
  }
}
</style>
