<template>
  <div class="wrap bg-ivory">
    <div class="header">
      <div class="symbol">
        <button><img src="@/assets/images/common/Symbol@2x.png" alt=""></button>
      </div>
      <div class="box-close">
        <button class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></button>
      </div>
    </div>
    <div class="wrap-a">
      <div class="box-all">
        <div class="title">약관동의</div>
        <div class="wrap-checkbox">
          <b-form-checkbox
            id="checkbox-1"
            v-model="i1"
            :class="{'checked': i1}"
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
            v-model="i2"
            :class="{'checked': i2}"
            name="checkbox-2"
          >서비스 이용약관(필수)
          </b-form-checkbox>
          <b-button variant="link">상세보기</b-button>
        </div>
      </div>
      <div class="box">
        <div class="tit">선택항목</div>
        <div class="desc">이번 글에서는 인도네시아, 인도, 한국의 배달 앱이 각 문화적 그리고 경제적 맥락을 고려하여 코로나 시기를 어떻게 최대한.</div>
        <div class="wrap-checkbox">
          <b-form-checkbox
            id="checkbox-3"
            v-model="i3"
            :class="{'checked': i3}"
            name="checkbox-3"
          >마케팅 관련 정보 수신 동의(선택)
          </b-form-checkbox>
          <button class="btn-link">상세보기</button>
        </div>
      </div>
      <div class="box-btn">
        <b-button block variant="gray" class="disabled">드로잉 테스트 시작하기</b-button><!-- disabled일 경우, disabled 클래스 추가  -->
      </div>
    </div>

    <b-button v-b-modal.marketing class="mx-4">마케팅 관련 정보 수신 동의</b-button>
    <b-modal id="marketing" centered title="마케팅 관련 정보 수신 동의" modal-class="marketing" scrollable ok-only ok-title="닫기" ok-variant="black btn-block">
      <p>
        싸인 이것이야말로 우리 앞이 피다. 몸이 못할 풍부하게 피가 사막이다. 불어 인간은 아니더면, 몸이 심장의 수 풀이 일월과 약동하다. 안고, 그들의 생명을 얼마나 이것이다. 온갖 봄날의 청춘 동력은
        어디 몸이 대중을 미인을 말이다. 고동을 없는 인간의 두기 이성은 가치를 가는 얼마나 때문이다. 꽃 그들은 광야에서 쓸쓸하랴? 못할 유소년에게서 넣는 끝에 황금시대다. 긴지라 우는 인간에 그들의 충분히
        날카로우나 하여도 사막이다. 청춘을 그들의 싸인 이것이다.
        가는 영락과 지혜는 없으면, 원질이 쓸쓸하랴 긴지라 우는 인간에 그들의 충분히 날카로우나 하여도 싸인 이것이야말로 우리 앞이 피다. 몸이 못할 풍부하게 피가 사막이다. 불어 인간은 아니더면, 몸이 심장의 수 풀이 일월과 약동하다. 안고, 그들의 생명을 얼마나 이것이다. 온갖 봄날의 청춘 동력은
        어디 몸이 대중을 미인을 말이다. 고동을 없는 인간의 두기 이성은 가치를 가는 얼마나 때문이다. 꽃 그들은 광야에서 쓸쓸하랴? 못할 유소년에게서 넣는 끝에 황금시대다. 긴지라 우는 인간에 그들의 충분히
        날카로우나 하여도 사막이다. 청춘을 그들의 싸인 이것이다.
        가는 영락과 지혜는 없으면, 원질이 쓸쓸하랴 긴지라 우는 인간에 그들의 충분히 날카로우나 하여도
      </p>
    </b-modal>

    <b-button v-b-modal.textPopup class="mr-4">진단 테스트_1_온보딩</b-button>
    <b-modal id="textPopup" centered title="마케팅 관련 정보 수신 동의" modal-class="textPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      </template>
      <p class="text">
        환영해요 정윤님!<br/>
        드로잉을 시작해볼까요?
      </p>
      <template #modal-footer="{ cancel }">
        <b-button size="sm" variant="black btn-block" @click="cancel()">네 그려볼게요!</b-button>
      </template>
    </b-modal>

    <b-button v-b-modal.textPopup2 class="mr-4">진단 테스트_1_토픽제시</b-button>
    <b-modal id="textPopup2" centered title="마케팅 관련 정보 수신 동의" modal-class="textPopup" scrollable ok-only ok-title="네 그려볼게요!" ok-variant="black btn-block">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      </template>
      <p class="text">2분안에 자유롭게<br/>
        나무를 그려보세요</p>
      <template #modal-footer="{ cancel }">
        <b-button size="sm" variant="black btn-block" @click="cancel()">알겠어요!</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'VIEW1',
  data () {
    return {
      i1: false,
      i2: false,
      i3: false
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
