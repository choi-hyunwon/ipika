<template>
  <div>
    <div class="wrap" v-if="isLoading">
      <div class="header d-flex">
        <div v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></div>
        <div class="box-close">
          <Confirm v-slot="slotProps"
                   :complete-text="`파블로 서비스를 </br> 종료하시겠습니까?`"
                   :cancelText="`아니요`"
                   :okText="`네`">
            <div class="btn-close" @click="globalUtils.confirm(slotProps,'checkRed')"><img
              src="@/assets/images/common/close@2x.png" alt=""></div>
          </Confirm>
        </div>
      </div>
      <div class="content">
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
        <div class="text-area">
          <p><img src="@/assets/images/temp/home-title@2x.png" style="width: 128rem"/></p>
          <p>모든 학습의 기본 파블로<br>질문하고 대화하는 미술 교육 서비스</p>
        </div>

        <div class="btn-group">
          <router-link v-if="resultCode==='0000'" to="/PabloMain" class="btn btn-dark">시작하기</router-link>
          <router-link v-else to="/TestInfo" class="btn btn-dark" :class="{'disabled': Config.isIE}">시작하기</router-link>
        </div>
      </div>
    </div>
    <b-modal id="ieAlert" centered title="ieAlert" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png"></div>
      </template>
      <p class="text" style="margin-bottom: 12px;">해당 브라우저를 지원하지 않습니다</p>
      <p class="text-sm">파블로는 최신 기술인 WebGL을 사용해서 만들어졌습니다<br>
        해당 브라우저는 WebGL을 지원하지 않습니다<br>
        <span class="f_blue">구글 크롬</span>, <span class="f_blue">사파리</span>, <span class="f_blue">파이어폭스</span> 또는 <span class="f_blue">엣지</span> 브라우저를 사용해 주세요
      </p>
      <template #modal-footer="{ cancel }">
        <b-button class="btn btn-black btn-block" @click="cancel()">닫기</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import Confirm from '@/components/popup/Confirm'

export default {
  name: 'Home',
  components: {
    Confirm
  },
  data() {
    return {
      resultCode: '',
      isLoading: false
    }
  },
  computed: {
    ...mapGetters({
      Config: 'getConfig'
    })
  },
  mounted () {

    this.loadAndroid()

    if (this.Config.isIE) {
      this.$bvModal.show('ieAlert')
    }
  },
  methods: {
    ...mapActions({
      getDiagnoseResult: 'getDiagnoseResult'
    }),
    ...mapMutations({
      setSession: 'setSession'
    }),
    fetchDiagnoseResult() {
      this.getDiagnoseResult()
        .then(result => {
          this.resultCode = result
          this.isLoading = true
        })
    },
    loadAndroid() {
      try {
        const Vari = this.Android.getInitVariables()
        const obj = JSON.parse(Vari)
        console.log(obj)
        this.setSession(obj)
      } catch (e) {
        console.log('this.Android.getInitVariables 에러')
      }
      this.fetchDiagnoseResult()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  .header {
    background-color: #fff;
    border: none;
    height: 8rem;

    .box-close {
      border: none;

      .btn-close {
        padding-top: 2rem;
        cursor: pointer;
      }
    }
  }

  .symbol {
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 2rem;
    left: 4rem;

    img {
      width: 100%;
      height: 100%;
    }

  }

  .content {
    width: 100%;
    height: calc(100% - 8rem);
    padding-top: 29.4rem;

    .text-area {

      text-align: center;
      margin-bottom: 5.4rem;

      p:nth-child(1) {
        font-family: 'Inter';
        font-size: 8rem;
        font-weight: bold;
        line-height: 13.6rem;
        letter-spacing: -0.03rem;
      }

      p:nth-child(2) {
        font-size: 2.4rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 4rem;
        letter-spacing: -0.03rem;
        text-align: center;
        color: var(--bold);
      }
    }

    .btn-group {
      text-align: center;
      display: block;
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
}

.modal-dialog {
  max-width: auto !important;
}
.btn-black {
  background-color: #141414;
}
.text-sm {
  color: #a5a5a5 !important;
}
.f_blue {
  color: #007bff !important;
}

</style>
