<template>
  <div class="wrap bg-ivory">
    <div class="error">
      <p class="text-lg">네트워크에 문제가 발생했습니다</p>
      <p class="text">네트워크 연결에 실패하였습니다.<br/>
        확인 후 다시 시도해 주세요.
      </p>
      <div class="btn-wrap">
        <button class="btn btn-gray">다시 시도</button>
        <button class="btn btn-black">종료</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style lang="scss" scoped>
.error {
  padding-top: 42.6rem;
  text-align: center;
  .text-lg {
    font-size: 5.6rem;
    font-weight: bold;
    line-height: 8rem;
    letter-spacing: -0.03rem;
    color: #000000;
    margin-bottom: 1.2rem;
  }
  .text {
    font-size: 3.2rem;
    line-height: 4.8rem;
    letter-spacing: -0.03rem;
    text-align: center;
    color: var(--gray-700);
    margin-bottom: 8rem;
  }
  .btn-wrap {
    .btn-gray {
      width: 23.4rem;
      height: 8rem;
      border-radius: 0.8rem;
      background-color: var(--gray-300);
      font-size: 2.4rem;
      font-weight: bold;
      line-height: 8rem;
      letter-spacing: -0.03rem;
      text-align: center;
      color: var(--greyish);
    }
    .btn-black {
      width: 23.4rem;
      height: 8rem;
      border-radius: 0.8rem;
      background-color: var(--gray-black);
      font-size: 2.4rem;
      font-weight: bold;
      line-height: 8rem;
      letter-spacing: -0.03rem;
      text-align: center;
      color: var(--gray-white);
      margin-left: 1.2rem;
    }
  }
}
</style>
