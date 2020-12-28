<template>
  <div>
    <swiper class="swiper" :options="swiperOption" >
      <swiper-slide><div class="box">1</div></swiper-slide>
      <swiper-slide><div class="box">2</div></swiper-slide>
      <swiper-slide><div class="box">3</div></swiper-slide>
      <swiper-slide><div class="box">4</div></swiper-slide>
      <swiper-slide><div class="box">5</div></swiper-slide>
      <swiper-slide><div class="box">6</div></swiper-slide>
      <swiper-slide><div class="box">7</div></swiper-slide>
      <swiper-slide><div class="box">8</div></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Testscroll',
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #f00;
  font-size: 50px;
  color: #ffffff;
  line-height: 100px;
  text-align: center;
}
</style>
