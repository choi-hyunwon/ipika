<template>
  <div class="bg_dim">
    <div class="modal_body">
        <div class="modal_gradation">
        <div class="modal_icon">
          <img src="@/assets/images/common/img_thum_stage_01@2x.png" alt="" class="img-m">
        </div>
        <p class="modal_name">이승아</p>
        </div>
        <div class="close_btn">
          <img src="@/assets/images/common/close_dim@2x.png" alt="" class="img-m">
        </div>
      <div class="icon_area d-flex align-items-center">
        <div class="icon like_bg"></div>
        <div class="desc">1,245</div>
        <div class="icon see_bg"></div>
        <div class="desc">3,882</div>
      </div>
      <div class="like_btn">
        <a href="#"><img src="@/assets/images/common/like_small default@2x.png" class="img-m"></a>
      </div>
      <div class="btn_group">
        <div class="btn btn-red">삭제하기</div>
        <div class="btn btn-dark">공개 취소</div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
name: "opengalleryDetail"
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
    left: 8rem;
    position: relative;
    width: 176rem;
    height: 98rem;
    background-image: url("~@/assets/images/temp/sample_img_02.png");
    background-size: contain;
    .modal_gradation{
      height: 15rem;
      width: 100%;
      z-index:1;
      background-image: linear-gradient(to top, rgba(20, 20, 20, 0.2), rgba(20, 20, 20, 0));
    }
    .close_btn{
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 7.2rem;
      height: 7.2rem;
      cursor: pointer;
      z-index:2
    }
    .modal_icon{
        position: absolute;
        width: 8rem;
        height: 8rem;
        top: 4rem;
        left: 4rem;
        z-index:2
      }
    .modal_name{
      font-size: 2.8rem;
      line-height: 4.4rem;
      letter-spacing: -0.03rem;
      font-family: 'Noto Sans CJK KR Bold';
      color: #fff;
      top: 5.8rem;
      left: 13.6rem;
      position: absolute;
      z-index:2
    }
    .icon_area{
      position: absolute;
      width: 29.4rem;
      height: 8rem;
      border-radius: 8px;
      background-color: var(--gray-black);
      opacity: 0.8;
      bottom: 4rem;
      left: 4rem;
      padding-left: 2.8rem;
      .icon{
        width: 3.2rem;
        height: 3.2rem;
        background-size: contain;
        margin-right: 1rem;
        &.like_bg{
          background-image: url("~@/assets/images/common/like@2x.png");
        }
        &.see_bg{
          background-image: url("~@/assets/images/common/view count@2x.png");
        }
      }
      .desc{
        color: var(--gray-white);
        font-size: 2.4rem;
        line-height: 4rem;
        letter-spacing: -0.03rem;
        font-family: 'Inter';
        margin-right: 2.4rem;
      }
    }
    .like_btn{
      position: absolute;
      width: 8rem;
      height: 8rem;
      bottom: 4rem;
      left: 34.6rem;
    }
    .btn_group{
      position: absolute;
      bottom: 4rem;
      right: 4rem;
      .btn-red{
        background-color: var(--red-500);
        font-family: 'Noto Sans CJK KR Bold';
        color: var(--gray-white);
        font-size: 2.4rem;
        margin-right: 1.2rem;
      }
    }
  }

}
</style>
