<template>
  <div class="wrap bg-ivory">
    <LetterHeader/>
    <div class="row">
      <div class="col col-6">
        <div class="symbol-wrap">
          <div class="symbol"><img src="@/assets/images/common/Vector@2x.png" alt=""></div>
          <span class="text">Part {{letter.stageId}} Clear!</span></div>
        <div class="title" v-html="letter.completeText"></div>
        <div class="btn-group">
          <router-link to="/MyGallery" class="btn btn-dark mr">마이갤러리</router-link>
          <router-link to="/PabloMain" class="btn btn-gray">메인으로</router-link>
        </div>
      </div>
      <div class="col col-6">
        <div class="img"><img :src="letter.stepCompleteImageUrl" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import LetterHeader from '@/components/letter/LetterHeader'
import { mapGetters } from 'vuex'

export default {
  name: 'Completion',
  components: {LetterHeader},
  computed:{
    ...mapGetters({
      letter: 'getLetter'
    })
  },
  created() {
    this.$EventBus.$on('back',this.goBack)
  },
  methods : {
    goBack () {
      this.$router.push('/PabloMain')
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  > .row {
    height: calc(120rem - 8rem);
  }
  .col {
    height: 100%;
  }
  .symbol-wrap {
    position: absolute;
    left: 10.4rem;
    top: 10.4rem;
    .symbol {
      display: inline-block;
      width: 4rem;
      height: 4rem;
      vertical-align: middle;
      margin-right: 0.8rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      display: inline-block;
      vertical-align: middle;
      font-family: var(--Inter);
      font-size: 3.2rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: -0.3px;
      text-align: left;
      color: var(--gray-black);
    }
  }

  .title {
    font-family: var(--bold);
    font-size: 5.6rem;
    font-weight: bold;
    line-height: 8rem;
    letter-spacing: -0.03rem;
    color: var(--gray-900);
    padding-top: 18rem;
    padding-left: 10rem;
    margin-bottom: 2rem;
  }

  .btn-group {
    position: absolute;
    left: 10rem;
    bottom: 10rem;
    .mr {
      margin-right: 1.2rem;
    }
    .btn-gray {
      height: 8rem;
      line-height: 7.8rem;
      background-color: var(--gray-300);
      color: var(--gray-600);
    }
  }

  .img {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>


