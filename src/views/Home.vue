<template>
  <div>
    <div>HOME</div>
    <div class="a">
      scss 테스트 : $aColor <span class="b">scss 테스트 : $bColor</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/list';
  .a{
    color: $aColor ;
    .b {
      color: $bColor ;
    }
  }
</style>



