<template>
  <div class="wrap">
    <header class="header d-flex">
      <div class="btn_back">
        <a href="#"><img src="@/assets/images/common/arrow_left@2x.png" alt="뒤로가기" class="img-m"></a>
      </div>
      <div class="header_title">
        <h1>Open Gallery</h1>
      </div>
      <div class="btn_close">
        <a href="#"><img src="@/assets/images/common/close@2x.png" alt="종료하기" class="img-m"></a>
      </div>
    </header>
    <div class="scroll_content">
    <div class="recommend_section">
      <p class="title">오늘의 친구들 그림 추천</p>
      <ul class="picturelist d-flex">
        <li class="pictures">
          <div class="picture">
            <img src="@/assets/images/temp/sample_img_02.png" alt="이미지" class="img-m">
            <div class="like_btn">
              <a href="#"><img src="@/assets/images/common/like_small default@2x.png" alt="좋아요버튼" class="img-m"></a>
            </div>
          </div>
          <p class="picture_stage">Curious Stage 3</p>
          <p class="picture_title">최초의 사람은 어떤 사람이었을까요?</p>
          <div class="icon_area d-flex">
            <div class="icon like_bg"></div>
            <div class="desc like_number">1,123</div>
            <div class="icon see_bg"></div>
            <div class="desc see_number">13,882</div>
          </div>
        </li>
        <li class="pictures">
          <div class="picture">
            <img src="@/assets/images/temp/sample_img_02.png" alt="이미지" class="img-m">
            <div class="like_btn">
              <a href="#"><img src="@/assets/images/common/like_small active@2x.png" alt="좋아요버튼" class="img-m"></a>
            </div>
          </div>
          <p class="picture_stage">Curious Stage 3</p>
          <p class="picture_title">최초의 사람은 어떤 사람이었을까요?</p>
          <div class="icon_area d-flex">
            <div class="icon like_bg"></div>
            <div class="desc like_number">1,123</div>
            <div class="icon see_bg"></div>
            <div class="desc see_number">13,882</div>
          </div>
        </li>
        <li class="pictures">
          <div class="picture">
            <img src="@/assets/images/temp/sample_img_02.png" alt="이미지" class="img-m">
            <div class="like_btn">
              <a href="#"><img src="@/assets/images/common/like_small active@2x.png" alt="좋아요버튼" class="img-m"></a>
            </div>
          </div>
          <p class="picture_stage">Curious Stage 3</p>
          <p class="picture_title">최초의 사람은 어떤 사람이었을까요?</p>
          <div class="icon_area d-flex">
            <div class="icon like_bg"></div>
            <div class="desc like_number">1,123</div>
            <div class="icon see_bg"></div>
            <div class="desc see_number">13,882</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="picture_section">
      <div class="btn_group clearfix">
        <ul class="btn_left float-left d-flex">
          <li class="btn active">
            <div class="all_icon">
              <img src="@/assets/images/common/all@2x.png" class="img-m">
            </div>
            ALL(100)</li>
          <li class="btn"><span>Pablo Letter(20)</span></li>
          <li class="btn">Pablo Classic(20)</li>
          <li class="btn">Pablo Sea(20)</li>
          <li class="btn">Free Drawing(20)</li>
        </ul>
        <div class="float-right btn_right">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
      </div>
      <ul class="picture_list clearfix">
        <li class="picture float-left">
          <div class="picture_header d-flex align-items-center">
            <div class="picture_icon">
              <img src="@/assets/images/common/img_thum_stage_02@2x.png" alt="아이콘" class="img-m">
            </div>
          <p class="picture_title">해리</p>
            <div class="picture_btn">
              <a href="#"><img src="@/assets/images/common/hide@2x.png" alt="메뉴바" class="img-m"></a>
            </div>
          </div>
          <div class="picture_img">
            <img src="@/assets/images/temp/sample_img_01.jpg" alt="이미지" class="img-m">
            <div class="like_btn">
              <a href="#"><img src="@/assets/images/common/like_small default@2x.png" alt="좋아요버튼" class="img-m"></a>
            </div>
          </div>
          <p class="picture_stage">Curious Stage 3</p>
          <p class="picture_title">최초의 사람은 어떤 사람이었을까요?</p>
          <div class="picture_desc d-flex">
            <div class="icon like_bg"></div>
            <div class="desc like_number">1,123</div>
            <div class="icon see_bg"></div>
            <div class="desc see_number">13,882</div>
          </div>
        </li>
        <li class="picture float-left">
          <div class="picture_header d-flex align-items-center">
            <div class="picture_icon">
              <img src="@/assets/images/common/img_thum_stage_04@2x.png" alt="아이콘" class="img-m">
            </div>
            <p class="picture_title">harrying</p>
            <div class="picture_btn">
              <a href="#"><img src="@/assets/images/common/hide@2x.png" alt="메뉴바" class="img-m"></a>
            </div>
          </div>
          <div class="picture_img">
            <img src="@/assets/images/temp/sample_img_01.jpg" alt="이미지" class="img-m">
            <div class="like_btn">
              <a href="#"><img src="@/assets/images/common/like_small active@2x.png" alt="좋아요버튼" class="img-m"></a>
            </div>
          </div>
          <p class="picture_stage">Curious Stage 3</p>
          <p class="picture_title">최초의 사람은 어떤 사람이었을까요?</p>
          <div class="picture_desc d-flex">
            <div class="icon like_bg"></div>
            <div class="desc like_number">1,123</div>
            <div class="icon see_bg"></div>
            <div class="desc see_number">13,882</div>
          </div>
        </li>
        <li class="picture float-left">
          <div class="picture_header d-flex align-items-center">
            <div class="picture_icon">
              <img src="@/assets/images/common/img_thum_stage_05@2x.png" alt="아이콘" class="img-m">
            </div>
            <p class="picture_title">slah</p>
            <div class="picture_btn">
              <a href="#"><img src="@/assets/images/common/hide@2x.png" alt="메뉴바" class="img-m"></a>
            </div>
          </div>
          <div class="picture_img">
            <img src="@/assets/images/temp/sample_img_01.jpg" alt="이미지" class="img-m">
            <div class="like_btn">
              <a href="#"><img src="@/assets/images/common/like_small active@2x.png" alt="좋아요버튼" class="img-m"></a>
            </div>
          </div>
          <p class="picture_stage">Curious Stage 3</p>
          <p class="picture_title">최초의 사람은 어떤 사람이었을까요?</p>
          <div class="picture_desc d-flex">
            <div class="icon like_bg"></div>
            <div class="desc like_number">1,123</div>
            <div class="icon see_bg"></div>
            <div class="desc see_number">13,882</div>
          </div>
        </li>
        <li class="picture float-left">
          <div class="picture_header d-flex align-items-center">
            <div class="picture_icon">
              <img src="@/assets/images/common/img_thum_stage_01@2x.png" alt="아이콘" class="img-m">
            </div>
            <p class="picture_title">아이린</p>
            <div class="picture_btn">
              <a href="#"><img src="@/assets/images/common/hide@2x.png" alt="메뉴바" class="img-m"></a>
            </div>
          </div>
          <div class="picture_img">
            <img src="@/assets/images/temp/sample_img_01.jpg" alt="이미지" class="img-m">
            <div class="like_btn">
              <a href="#"><img src="@/assets/images/common/like_small default@2x.png" alt="좋아요버튼" class="img-m"></a>
            </div>
          </div>
          <p class="picture_stage">Curious Stage 3</p>
          <p class="picture_title">최초의 사람은 어떤 사람이었을까요?</p>
          <div class="picture_desc d-flex">
            <div class="icon like_bg"></div>
            <div class="desc like_number">1,123</div>
            <div class="icon see_bg"></div>
            <div class="desc see_number">13,882</div>
          </div>
        </li>
        <li class="picture float-left">
          <div class="picture_header d-flex align-items-center">
            <div class="picture_icon">
              <img src="@/assets/images/common/img_thum_stage_01@2x.png" alt="아이콘" class="img-m">
            </div>
            <p class="picture_title">이승아</p>
            <div class="picture_btn">
              <a href="#"><img src="@/assets/images/common/hide@2x.png" alt="메뉴바" class="img-m"></a>
            </div>
          </div>
          <div class="picture_img">
            <img src="@/assets/images/temp/sample_img_01.jpg" alt="이미지" class="img-m">
            <div class="like_btn">
              <a href="#"><img src="@/assets/images/common/like_small active@2x.png" alt="좋아요버튼" class="img-m"></a>
            </div>
          </div>
          <p class="picture_stage">Curious Stage 3</p>
          <p class="picture_title">최초의 사람은 어떤 사람이었을까요?</p>
          <div class="picture_desc d-flex">
            <div class="icon like_bg"></div>
            <div class="desc like_number">1,123</div>
            <div class="icon see_bg"></div>
            <div class="desc see_number">13,882</div>
          </div>
        </li>
        <li class="picture float-left">
          <div class="picture_header d-flex align-items-center">
            <div class="picture_icon">
              <img src="@/assets/images/common/img_thum_stage_04@2x.png" alt="아이콘" class="img-m">
            </div>
            <p class="picture_title">Ben</p>
            <div class="picture_btn">
              <a href="#"><img src="@/assets/images/common/hide@2x.png" alt="메뉴바" class="img-m"></a>
            </div>
          </div>
          <div class="picture_img">
            <img src="@/assets/images/temp/sample_img_01.jpg" alt="이미지" class="img-m">
            <div class="like_btn">
              <a href="#"><img src="@/assets/images/common/like_small active@2x.png" alt="좋아요버튼" class="img-m"></a>
            </div>
          </div>
          <p class="picture_stage">Curious Stage 3</p>
          <p class="picture_title">최초의 사람은 어떤 사람이었을까요?</p>
          <div class="picture_desc d-flex">
            <div class="icon like_bg"></div>
            <div class="desc like_number">1,123</div>
            <div class="icon see_bg"></div>
            <div class="desc see_number">13,882</div>
          </div>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Opengallery",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: '최신순' },
        { value: 'a', text: '오래된 순' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    height: 7.8rem;
    background-color: var(--ivory-200);
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.2rem solid var(--ivory-500);
    .btn_back{
      width: 4rem;
      height: 4rem;
      margin-left: 4rem;
    }
    .header_title{
      font-size: 2.4rem;
      font-family: 'Inter';
    }
    .btn_close{
      height: 100%;
      line-height: 8rem;
      border-left: 2px solid var(--ivory-500);
      padding-left: 4.2rem;
      a{
        display: inline-block;
        width: 2.77rem;
        height: 2.77rem;
        margin-right: 4.62rem;
      }
    }
  } //header
  .scroll_content{
    height: calc(100% - 8rem);
    overflow-y: auto;
    overflow-x: hidden;
    .recommend_section{
      padding-left: 6.4rem;
      padding-bottom: 8rem;
      border-bottom: 1px solid  var(--gray-300);
      .title{
        margin-top: 6.4rem;
        margin-bottom: 2.4rem;
        font-size: 2.8rem;
        line-height: 4.4rem;
        letter-spacing: -0.03rem;
        color: var(--gray-black);
        font-family: 'Inter ';
        font-weight: 700;
      }
      .picturelist{
        overflow: hidden;
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar{
          display: none;
        }
        .pictures{
          .picture{
            position: relative;
            width: 74.6rem;
            height: 42rem;
            .like_btn{
              position: absolute;
              width: 6.4rem;
              height: 6.4rem;
              right: 2rem;
              top: 2rem;
            }
          }
          .picture_stage{
            margin-top: 2.4rem;
            font-family: 'Inter';
            font-size: 2rem;
            line-height: 3.6rem;
            letter-spacing: -0.03rem;
            color: var(--gray-black);
          }
          .picture_title{
            font-size: 2.4rem;
            line-height: 4rem;
            font-family: 'Noto Sans CJK KR Bold';
            margin-top: 0.2rem;
            letter-spacing: -0.03rem;
            color: var(--gray-black);
          }
          .icon_area{
            align-items: center;
            margin-top: 2rem;
            .icon{
              background-size: contain;
              width: 3.2rem;
              height: 3.2rem;
              margin-right: 1rem;
              &.like_bg{
                background-image: url("~@/assets/images/common/like@2x.png");
              }
              &.see_bg{
                background-image: url("~@/assets/images/common/view count@2x.png");
              }
            }
            .desc{
              margin-right: 3rem;
              font-family: 'Inter';
              font-size: 2.4rem;
              font-weight: normal;
              line-height: 4rem;
              letter-spacing: -0.03rem;
              color: var(--gray-900);
            }
          }
        }
      }
    }//picture_recommend
    .picture_section{
      margin-top: 8rem;
      margin-left: 6.4rem;
      margin-right: 6.4rem;
      .btn_group{
        margin-bottom: 5.6rem;
        .btn_left{
          .btn{
            background-color: var(--gray-200);
            margin-right: 1.2rem;
            color: var(--gray-500);
            min-width: auto;
            font-weight: 600;
            border: none;
            padding: 1.6rem 2rem;
            height: 6.8rem;
            font-size: 2rem;
            line-height: 3.4rem;
            font-family: 'Inter';
            &.active{
              color: var(--gray-white);
              background-color: var(--gray-900);
            }
            .all_icon{
              width: 2rem;
              height: 2rem;
              margin-right: 1rem;
              display: inline-block;
            }
          }
        }
        .btn_right {
          .custom-select {
            border-radius: 0.8rem;
            border: solid 0.2rem var(--gray-400);
            width: 14.4rem;
            height: 6.8rem;
            background-image: url('~@/assets/images/common/arrow_down@2x.png');
            background-repeat: no-repeat;
            background-size: 2rem 2rem;
            background-position: 10.4rem;
            font-size: 2rem;
            font-weight: 600;
            line-height: 3.6rem;
            letter-spacing: -0.03rem;
            text-align: center;
            color: var(--gray-700);
            padding: 0;
            padding-left: 2rem;

            option {
              padding: 0;
            }
          }
        }
      }
      .picture_list{
        width: 101%;
        .picture{
          width: calc(100% / 3);
          height: 56.2rem;
          margin-bottom: 12rem;
          .picture_header{
            height: 5.6rem;
            position: relative;
            .picture_icon{
              position:absolute;
              width: 5.6rem;
              height: 5.6rem;
              margin-right: 1.6rem;
            }
            .picture_title{
              position:absolute;
              left: 7.2rem;
              font-family: 'Noto Sans CJK KR Bold';
              font-size: 2rem;
              line-height: 3.6rem;
              letter-spacing: -0.03rem;

            }
            .picture_btn{
              right: 2rem;
              position:absolute;
              width: 4rem;
              height: 4rem;
            }
          }
          .picture_img{
            border-radius: 1.2rem;
            overflow: hidden;
            margin-top: 2.4rem;
            width: 57.6rem;
            height: 32.4rem;
            position: relative;
            .like_btn{
              position: absolute;
              width: 6.4rem;
              height: 6.4rem;
              top: 2rem;
              right: 2rem;
            }
          }
          .picture_stage{
            margin-top: 2.4rem;
            font-family: 'Inter';
            font-size: 2rem;
            line-height: 3.6rem;
            letter-spacing: -0.03rem;
            color: var(--gray-black);
          }
          .picture_title{
            font-size: 2.4rem;
            line-height: 4rem;
            font-family: 'Noto Sans CJK KR Bold';
            margin-top: 0.2rem;
            letter-spacing: -0.03rem;
            color: var(--gray-black);
          }
          .picture_desc{
            margin-top: 2.4rem;
              .icon{
                background-size: contain;
                width: 3.2rem;
                height: 3.2rem;
                margin-right: 1rem;
                &.like_bg{
                  background-image: url("~@/assets/images/common/like@2x.png");
                }
                &.see_bg{
                  background-image: url("~@/assets/images/common/view count@2x.png");
                }
              }
              .desc{
                margin-right: 3rem;
                font-family: 'Inter';
                font-size: 2.4rem;
                font-weight: normal;
                line-height: 4rem;
                letter-spacing: -0.03rem;
                color: var(--gray-900);
              }
            }
        }
      }
    }//picture_section
  }
</style>
