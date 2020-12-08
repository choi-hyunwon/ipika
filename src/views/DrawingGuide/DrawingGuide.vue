<template>
  <div class="wrap">
  <GuideHeader></GuideHeader>
    <wacom></wacom>
    <div class="guide_bg"><img src="@/assets/images/common/guide@2x.png" alt="" class="img-m"></div>
  </div>
</template>

<script>
import GuideHeader from "@/components/letter/GuideHeader";
import Wacom from "@/components/Wacom";

export default {
  name: 'DrawingGuide',
  components: {Wacom, GuideHeader}
}
</script>

<style lang="scss" scoped>

.guide_bg{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>
