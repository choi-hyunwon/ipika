<template>
  <div>
    <div class="bg_dim">
      <div class="modal_body">
        <div class="like_header">
        <div class="close_btn">
          <img src="@/assets/images/common/close_dim@2x.png" alt="" class="img-m">
        </div>
        <div class="like_bg"></div>
        <h2 class="title">좋아요 리스트</h2>
        <p class="desc">이 그림을 좋아요 한 친구들이에요</p>
        </div>
        <ul class="like_list">
          <li class="like d-flex align-items-center">
            <div class="list_icon">
              <img src="@/assets/images/common/img_thum_stage_02.png" alt="" class="img-m">
            </div>
            <div class="list_desc">김정훈</div>
          </li>
          <li class="like d-flex align-items-center">
            <div class="list_icon">
              <img src="@/assets/images/common/img_thum_stage_01@2x.png" alt="" class="img-m">
            </div>
            <div class="list_desc">한서희</div>
          </li>
          <li class="like d-flex align-items-center">
            <div class="list_icon">
              <img src="@/assets/images/common/img_thum_stage_03@2x.png" alt="" class="img-m">
            </div>
            <div class="list_desc">혜리</div>
          </li>
          <li class="like d-flex align-items-center">
            <div class="list_icon">
              <img src="@/assets/images/common/img_thum_stage_04@2x.png" alt="" class="img-m">
            </div>
            <div class="list_desc">아이린</div>
          </li>
          <li class="like d-flex align-items-center">
            <div class="list_icon">
              <img src="@/assets/images/common/img_thum_stage_05@2x.png" alt="" class="img-m">
            </div>
            <div class="list_desc">조보아</div>
          </li>
          <li class="like d-flex align-items-center">
            <div class="list_icon">
              <img src="@/assets/images/common/img_thum_stage_02.png" alt="" class="img-m">
            </div>
            <div class="list_desc">김정훈</div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "openGalleryLikelist"
}
</script>

<style scoped lang="scss">
.bg_dim{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: rgba(20,20,20,.6);
  .modal_body{
    top: 8rem;
    margin: 0 auto;
    position: relative;
    width: 57.6rem;
    height: 96rem;
    background-color: var(--gray-white);
    border-radius: 1.6rem;
    .like_header{
      position: relative;
      width: 100%;
      height: 29.2rem;
      .close_btn{
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 7.2rem;
        height: 7.2rem;
        cursor: pointer;
      }
      .like_bg{
        position: absolute;
        width: 6.4rem;
        height: 6.4rem;
        background-image: url("~@/assets/images/common/like@2x.png");
        background-size: contain;
        margin-left: 4.8rem;
        margin-top: 4.8rem;
      }
      .title{
        position: absolute;
        margin-top: 13.6rem;
        margin-left: 4.8rem;
        font-family: 'Noto Sans CJK KR Bold';
        font-size: 4rem;
        line-height: 5.6rem;
        letter-spacing: -0.03rem;
      }
      .desc{
        position: absolute;
        font-size: 2.4rem;
        line-height: 4rem;
        letter-spacing: -0.03rem;
        color: var(--greyish);
        margin-top: 20rem;
        margin-left: 4.8rem;
        font-family: 'Noto Sans CJK KR Bold';
        margin-bottom: 4.8rem;
      }
    }
    .like_list{
      margin:0 4.8rem;
      height: calc(100% - 29.2rem);
      overflow-y: auto;
      .like{
        border-bottom: 1px solid var(--gray-300);
        padding: 2rem 0;
        .list_icon{
          width: 8rem;
          height: 8rem;
          margin-right: 1.6rem;
        }
        .list_desc{
          font-family: 'Noto Sans CJK KR Bold';
          font-size:2rem;
          line-height: 3.6rem;
          letter-spacing: -0.03rem;
          color: var(--gray-black);

        }
      }
    }
  }

}
</style>
