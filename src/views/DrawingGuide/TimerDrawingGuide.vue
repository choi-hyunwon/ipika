<template>
  <div class="wrap">
    <GuideHeader></GuideHeader>
    <wacom></wacom>
    <div class="guide_bg"><img src="@/assets/images/common/test_guide@2x.png" alt="" class="img-m"></div>
  </div>
</template>

<script>
import GuideHeader from "@/components/diagnose/GuideHeader";
import Wacom from "@/components/Wacom";
export default {
  name: 'TimerDrawingGuide',
  components: {Wacom, GuideHeader}
}
</script>

<style scoped>

.guide_bg{
  position: absolute;
  top: 0;
  left:0;
  z-index: 999;
}
</style>
