<template>
  <Letter v-if="page === 'letter'" ></Letter>
  <Diagnose v-else-if="page === 'diagnose'"></Diagnose>
</template>

<script>
import Letter from '@/components/letter/CanvasHeader'
import Diagnose from '@/components/diagnose/CanvasHeader'

export default {
  name: 'CanvasHeader',
  components : {Letter, Diagnose},
  computed: {
    page () {
      return this.$router.currentRoute.query.page
    }
  },
  props:{
    timer : {
      Number,
      default(){return null}
    }
  }
}
</script>


<style lang="scss" scoped>
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
