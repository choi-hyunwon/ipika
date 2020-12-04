<template>
  <div class="wrap bg-ivory">
    <div class="header">
      <div class="symbol">
        <router-link to="/"><img src="@/assets/images/common/Symbol@2x.png" alt=""></router-link>
      </div>
      <div class="box-close">
        <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
      </div>
    </div>
      <div class="wrap-a">
      <div class="box-all">
        <div class="title">약관동의</div>
        <div class="wrap-checkbox">
          <b-form-checkbox
            id="checkbox-1"
            v-model="checkAll"
            :class="{'checked': checkAll}"
            name="checkbox-1"
          >모두 동의합니다
          </b-form-checkbox>
        </div>
      </div>
      <div class="box">
        <div class="tit">필수항목</div>
        <div class="desc">이번 글에서는 인도네시아, 인도, 한국의 배달 앱이 각 문화적 그리고 경제적 맥락을 고려하여 코로나 시기를 어떻게 최대한.</div>
        <div class="wrap-checkbox">
          <b-form-checkbox
            id="checkbox-2"
            v-model="check.essential"
            :class="{'checked': check.essential}"
            name="checkbox-2">서비스 이용약관(필수)</b-form-checkbox>
          <Alert v-slot="slotProps"
                 :boldText="`서비스 이용약관`"
                 :text="`서비스 이용약관 안내 문구`">
            <button class="btn btn-link" @click="showPopup.alert(slotProps,'agreement1')">상세보기</button>
          </Alert>
        </div>
      </div>
      <div class="box">
        <div class="tit">선택항목</div>
        <div class="desc">이번 글에서는 인도네시아, 인도, 한국의 배달 앱이 각 문화적 그리고 경제적 맥락을 고려하여 코로나 시기를 어떻게 최대한.</div>
        <div class="wrap-checkbox">
          <b-form-checkbox
            id="checkbox-3"
            v-model="check.optional"
            :class="{'checked': check.optional}"
            name="checkbox-3">마케팅 관련 정보 수신 동의(선택)</b-form-checkbox>
          <Alert v-slot="slotProps"
                 :boldText="`마케팅 관련 정보 수신 동의`"
                 :text="`마케팅 관련 정보 수신 동의 안내 문구`">
          <button class="btn btn-link" @click="showPopup.alert(slotProps,'agreement1')">상세보기</button>
          </Alert>
        </div>
      </div>
      <div class="box-btn">
        <Alert v-slot="slotProps"
               :boldText="``"
               :text="`환영해요 길동아! </br> 드로잉을 시작해볼까요?`">
        <span class="btn btn-gray btn-block"
              :class="{'disabled': !check.essential}"
              @click=" !check.essential ? '' : showPopup.alert(slotProps,'agreement2')">드로잉 테스트 시작하기</span>
        </Alert>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/popup/Alert'

export default {
  name: 'Agreement',
  components: {Alert},
  data () {
    return {
      checkAll: false,
      check: {
        essential: false,
        optional: false
      }
    }
  },
  computed: {
    name () {
      return this.$store.state.userinfo.name
    }
  },
  watch: {
    "checkAll": function (val) {
      this.check.essential = val
      this.check.optional = val
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap-a {
  width: 68rem;
  margin: 0 auto;
  padding-top: 7.4rem;

  .box-all {
    margin-bottom: .8rem;

    > .title {
      font-family: var(--bold);
      font-size: 4rem;
      font-weight: bold;
      line-height: 5.6rem;
      letter-spacing: -0.03rem;
      color: var(--gray-black);
      margin-bottom: 4rem;
    }
  }

  .wrap-checkbox {
    position: relative;
    width: 100%;
    height: 8.8rem;
    background-color: var(--gray-white);
    border-radius: .8rem;

    .btn-link {
      position: absolute;
      min-width: auto;
      height: 100%;
      text-decoration: underline;
      color: var(--green-500);
      right: 3.2rem;
      top: 0;
      z-index: 1;
    }
  }

  .box {
    padding-top: 4rem;

    .tit {
      font-size: 2.4rem;
      font-family: var(--bold);
      font-weight: bold;
      line-height: 4rem;
      letter-spacing: -0.03rem;
      margin-bottom: .8rem;
    }

    .desc {
      font-size: 2rem;
      line-height: 3.6rem;
      letter-spacing: -0.03rem;
      color: var(--gray-700);
      margin-bottom: 2.4rem;
    }
  }

  .box-btn {
    padding-top: 7.2rem;
  }
}
</style>
