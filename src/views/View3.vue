<template>
  <div>
    <div>VIEW3</div>
    <div class="text-center my-3">
      <b-button v-b-tooltip.hover title="Tooltip directive content">
        Hover Me
      </b-button>

      <b-button id="tooltip-target-1">
        Hover Me
      </b-button>
      <b-tooltip target="tooltip-target-1" triggers="hover">
        I am tooltip <b>component</b> content!
      </b-tooltip>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VIEW3'
}
</script>
