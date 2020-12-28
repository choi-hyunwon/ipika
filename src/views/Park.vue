<template>
  <transition name="fade">
  <div class="park" v-if="isLoading">
    <div class="header ivory bg-ivory d-flex">
      <a href="#" @click="goBack" v-b-modal.goBackPopup class="symbol">
        <img src="@/assets/images/common/arrow_left@2x.png" alt="">
      </a>
      <div class="gallery-title">
          <span class="title-center">Pablo Park</span>
      </div>
      <div class="box-close">
        <Confirm v-slot="slotProps"
                 :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`"
                 :cancelText="`아니요`"
                 :okText="`네`">
          <button @click="globalUtils.confirm(slotProps,'checkRed')" style="padding-top: 0;" class="btn-close"><img
            src="@/assets/images/common/close@2x.png" alt=""></button>
        </Confirm>
      </div>
    </div>
    <iframe src="https://pablo.cmiscm.com/rain" frameborder="0"></iframe>
  </div>
  </transition>
</template>

<script>
import Confirm from '@/components/popup/Confirm'

export default {
  components: { Confirm },
  name: 'Park',
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    this.isLoading = true
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.park {
  width: 1280px;
  height: 800px;

  iframe {
    width: 100%;
    height: 720px;
  }
}

.header {
  .btn-wrap {
    position: absolute;
    display: inline-block;
    top: 3rem;
    left: 12rem;

    button {
      display: inline-block;
      width: 12.7rem;
      height: 6rem;

      img {
        width: 100%;
        height: 100%;
      }

      &:first-child {
        margin-right: 1.2rem;
      }
    }
  }
}
</style>
