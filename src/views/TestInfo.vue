<template>
  <div class="wrap">
    <div class="header ivory bg-ivory d-flex">
      <a href="#" v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/Symbol@2x.png"
                                                            alt=""></a>
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
    <div class="contents bg-ivory testinfo">
      <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" style="width: 8rem;"></div>
      <div class="title"><img src="@/assets/images/common/img_testinfo_title@2x.png" style="width: 67rem"></div>
      <div class="desc"><img src="@/assets/images/common/img_testinfo_desc@2x.png" style="width: 86.8rem"></div>
      <div class="desc_detail"><img src="@/assets/images/common/img_testinfo_freedate@2x.png" style="width: 69rem"></div>
      <div class="btn-group clearfix" v-if="shortStory">
        <input type="text" class="form-control active" v-model="onlyNumber" maxlength="2" placeholder="나이를 입력해주세요">
        <a href="#" class="btn btn-block btn-dark btn-start" @click="checkAge">AI 입회 테스트 시작하기</a>
      </div>
      <div class="btn-group" v-else>
        <router-link to="/canvas?page=diagnose" class="btn btn-block btn-dark">AI 입회 테스트 시작하기
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Confirm from '@/components/popup/Confirm'
import {mapGetters} from "vuex";

export default {
  name: 'TestInfo',
  components: {
    Confirm
  },
  data() {
    return {
      onlyNumber: null,
      shortStory: true
    }
  },
  computed: {
    ...mapGetters({
      session: 'getSession'
    }),

  },
  methods: {
    setLog() {
      this.Android.setLog('action=NavigatedTo&depth1=진단테스트&execute=Y&edApp=파블로')
    },
    checkAge(){
      const age = Number(this.onlyNumber)
      console.log(this.onlyNumber);

      if (age < 3 || age > 13) {
        alert('잘못된 나이를 입력하셨습니다.')
      } else {
        this.$router.push('/canvas?page=diagnose')
      }
    },
    checkE(e){
      console.log(e);
    },

  },
  watch: {
    onlyNumber () {
      return this.onlyNumber = this.onlyNumber.replace(/[^0-9]/g, '')
    }
  }
}

</script>

<style lang="scss" scoped>
.bg-ivory {
  background-color: #f7f4f1;
}

.testinfo {
  position: relative;
  padding-top: 15.4rem;
  height: calc(100% - 8rem);


  .symbol {
    text-align: center;
    margin-bottom: 5rem;
  }

  .title {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  .desc {
    text-align: center;
    margin-bottom: 5rem;
  }
  .desc_detail{
    text-align: center;
    margin-bottom: 3.2rem;
  }

  .btn-group {
    width: 60rem;
    display: block;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .btn-group .form-control{
    width: 30.6rem;
    height: 8rem;
    float: left;
    margin-right: 1rem;
    border-radius: 0.8rem;
    padding: 2rem 1.28rem;
    font-size: 2.4rem;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
  }
  .form-control:focus{
    box-shadow: none;
  }
  .btn-group input::placeholder {
    color: #a5a5a5;
  }
  .btn-group .btn-start{
    width: 28.2rem ;
    float: left;
  }
}

</style>
