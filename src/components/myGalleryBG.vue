<template>
  <div>
    <div class="bgc-section">
      <div class="bg">
<!--        <div class="img-m" style="width:192rem; height: 40rem; background-color:#eee9e3;" :style="{backgroundImage: 'url(' + galleryInfo.backgroundImage + ')'}"></div>-->
        <div class="img-m" style="width:192rem; height: 40rem; background-color:#eee9e3;" :style="{backgroundImage: 'url(https://kr.vuejs.org/images/stdlib.png)'}"></div>
      </div>
      <div class="setting-img">
        <img src="@/assets/images/common/setting_default.png" alt="세팅" class=" img-m" @click="$emit('popup')">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'myGalleryBG',
  data () {
    return {
      galleryInfo: {}
    }
  },
  computed: {
  },
  mounted () {
    this.fetchUesrGallery()
  },

  methods: {
    ...mapActions({
      getUesrGallery: 'getUesrGallery'
    }),
    fetchUesrGallery () {
      this.getUesrGallery()
        .then(result => {
          console.log('fetchUesrGallery :', result)
          if (result !== undefined) this.galleryInfo = result
        })
    }
  }
}
</script>

<style scoped>

</style>
