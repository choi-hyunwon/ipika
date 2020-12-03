<template>
  <div class="wrap">
    <div class="row">
      <div class="col col-6 left">
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
        <ul class="dot-list" v-if="slider">
          <li class="on"><router-link to=""></router-link></li>
          <li><router-link to=""></router-link></li>
          <li><router-link to=""></router-link></li>
          <li><router-link to=""></router-link></li>
          <li><router-link to=""></router-link></li>
          <li><router-link to=""></router-link></li>
        </ul>
        <ul class="title-list">
          <li class="active"><!-- badge-new / badge-start -->
            <router-link to="/PabloStudy1">
              <span class="num">01</span>
              <span class="title">Pablo Letter</span>
            </router-link>
          </li>
          <li>
            <span>
              <span class="num">02</span>
              <span class="title">Pablo Classic</span>
            </span>
          </li>
          <li class="active">
            <router-link to="/canvas">
              <span class="num">03</span>
              <span class="title">Canvas</span>
            </router-link>
          </li>
          <li class="active">
            <router-link to="/MainGallery">
              <span class="num">04</span>
              <span class="title">My Gallery</span>
            </router-link>
          </li>
          <li>
            <span>
              <span class="num">05</span>
              <span class="title">Open Gallery</span>
            </span>
          </li>
          <li>
            <span>
              <span class="num">06</span>
              <span class="title">My Page</span>
            </span>
          </li>
        </ul>
        <div class="message" v-if="message">
          <span class="symbol"><img src="@/assets/images/common/Symbol-white@2x.png" alt=""></span>
          <span class="text">새로운 학습이 도착했어요! 지금 바로 시작해보세요 😃</span>
          <router-link to="/" class="btn-close"></router-link>
        </div>
      </div>
      <div class="col col-6 right">
        <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
        <div class="img"><img src="@/assets/images/temp/sample_img_01.jpg" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PabloMain',
  data () {
    return {
      message: false,
      slider: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  .left {
    position: relative;
    .symbol {
      position: absolute;
      width: 4rem;
      height: 4rem;
      top: 4rem;
      left: 4rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .dot-list {
      position: absolute;
      left: 4rem;
      top: 50%;
      transform: translateY(-50%);
      li {
        position: relative;
        width: 0.8rem;
        height: 0.8rem;
        margin-bottom: 0.8rem;
        a {
          display: block;
          &::after {
            content: '';
            position: absolute;
            width: 0.8rem;
            height: 0.8rem;
            font-size: 0;
            border-radius: 50%;
            background-color: rgba(20, 20, 20,.2);
            left: 0;
            top: 0;
          }
        }
        &.on {
          a {
            &::after {
              background-color: var(--gray-black);
            }
          }
        }
      }
    }
    .title-list {
      padding-left: 19.5rem;
      padding-top: 24.2rem;
      li {
        position: relative;
        line-height: 9.6px;
        margin-bottom: 2.8rem;
        > a, >span {
          display: inline-block;
          .num {
            display: none;
            position: absolute;
            top: 0;
            left: -30px;
            line-height: 4rem;
            font-family: var(--Inter);
            font-size: 2.4rem;
            font-weight: bold;
            letter-spacing: -0.03rem;
          }
          .title {
            display: inline-block;
            font-family: var(--Taviraj);
            font-size: 8rem;
            line-height: 9.6rem;
            letter-spacing: -0.03rem;
            vertical-align: middle;
            color: rgba(20, 20, 20, .1);
          }
        }
        &.active {
          a {
            .num {
              display: inline-block;
            }
            .title {
              color: var(--gray-black);
            }
          }
        }
        &.badge-start {
          a {
            position: relative;
            &::after {
              content: 'Start';
              position: absolute;
              display: inline-block;
              right: -47px;
              top: 0;
              border-radius: 10rem;
              background-color: var(--blue-500);
              font-family: var(--Inter);
              font-size: 2rem;
              font-weight: 600;
              line-height: 4.9rem;
              padding: 0 1.8rem;
              letter-spacing: -0.03rem;
              text-align: center;
              color: var(--gray-white);
            }
          }
        }
        &.badge-new {
          a {
            position: relative;
            &::after {
              content: 'New';
              position: absolute;
              display: inline-block;
              right: -47px;
              top: 0;
              border-radius: 10rem;
              background-color: var(--green-500);
              font-family: var(--Inter);
              font-size: 2rem;
              font-weight: 600;
              line-height: 4.9rem;
              padding: 0 1.8rem;
              letter-spacing: -0.03rem;
              text-align: center;
              color: var(--gray-white);
            }
          }
        }
      }
    }
    .message {
      position: absolute;
      width: 84rem;
      height: 9.6rem;
      border-radius: 1.6rem;
      background-color: var(--green-500);
      left: 6rem;
      bottom: 6rem;
      padding-top: 2.8rem;
      padding-left: 3.2rem;
      padding-right: 3.8rem;
      .symbol {
        position: initial;
        display: inline-block;
        vertical-align: middle;
        width: 3.2rem;
        height: 3.2rem;
        margin-right: 1.6rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        display: inline-block;
        font-family: var(--medium);
        font-size: 2.4rem;
        font-weight: 500;
        letter-spacing: -0.03rem;
        text-align: left;
        color: var(--gray-white);
        line-height: 4rem;
        vertical-align: middle;
      }
      .btn-close {
        position: relative;
        float: right;
        display: inline-block;
        width: 3.6rem;
        height: 3.6rem;
        border-radius: 10rem;
        background-color: rgba(20,20,20,.1);
        vertical-align: middle;
        img {
          width: 100%;
          height: 100%;
        }
        &::after {
          content: '';
          display: inline-block;
          width: 1.8rem;
          height: 1.8rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          background-image: url("~@/assets/images/common/close-sm@2x.png");
          background-size: cover;
        }
      }
    ;
    }
  }
  .right {
    position: relative;
    .img {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .btn-close {
      position: absolute;
      width: 4rem;
      height: 4rem;
      right: 4rem;
      top: 4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
