<template>
  <div>
    <nav v-if="isLoading" style="visibility: visible;">
      <div>
        <img src="https://developer-demos.wacom.com/Images/btn_paper_02.jpg" title="Paper" class="Item Paper" onclick="dropDown.toggle('Papers')" alt="">
        <span class="CONFIGURATOR_HIDDEN">
				<img src="https://developer-demos.wacom.com/Images/btn_export.png" title="Export" onclick="WILL.exportPNG();" alt="">

				<img src="https://developer-demos.wacom.com/Images/btn_clear.png" title="Clear" onclick="WILL.clear(); " alt="">
				<img src="https://developer-demos.wacom.com/Images/btn_undo.png" title="Undo" onclick="WILL.undo(); " alt="">
				<img src="https://developer-demos.wacom.com/Images/btn_redo.png" title="Redo" onclick="WILL.redo(); " alt="">
			</span>

        <span class="ColorBox Delimiter" onclick="dropDown.toggle('Colors');" title="Color">
				<a href="javascript:void(0)" class="Item Color" style="background-color: #4A4A4A;"></a>
				<input type="color" value="#4A4A4A" class="Button" onchange="layout.selectColor(this);">
			</span>

        <span class="VECTOR CONFIGURATOR_HIDDEN">
				<img id="Pen" src="https://developer-demos.wacom.com/Images/btn_pen_selected.png" title="Pen" class="Tool Selected" alt="">
				<img id="Felt" src="https://developer-demos.wacom.com/Images/btn_feather.png" title="Felt" class="Tool" alt="">
				<img id="Brush" src="https://developer-demos.wacom.com/Images/btn_brush.png" title="Brush" class="Tool" alt="">
				<img id="Marker" src="https://developer-demos.wacom.com/Images/btn_marker.png" title="Marker" class="Tool" alt="">
			</span>

        <span class="RASTER CONFIGURATOR_HIDDEN">
				<img id="Pencil" src="https://developer-demos.wacom.com/Images/btn_pencil_selected.png" title="Pencil" class="Tool Selected" alt="">
				<img id="WaterBrush" src="https://developer-demos.wacom.com/Images/btn_water_brush.png" title="Water Brush" class="Tool" alt="">
				<img id="InkBrush" src="https://developer-demos.wacom.com/Images/btn_feather.png" title="Ink Brush" class="Tool" alt="">
				<img id="Crayon" src="https://developer-demos.wacom.com/Images/btn_crayon.png" title="Crayon" class="Tool" alt="">
			</span>

        <img src="https://developer-demos.wacom.com/Images/btn_clear.png" title="Clear" class="CONFIGURATOR" onclick="WILL.clear()" alt="">
        <img id="Eraser" src="https://developer-demos.wacom.com/Images/btn_eraser.png" class="Tool Eraser DelimiterLeft" title="Eraser" alt="">
        <img id="EraserWholeStroke" src="https://developer-demos.wacom.com/Images/btn_eraser_whole_stroke.png" class="Tool Eraser VECTOR" title="Whole Stroke Eraser" alt="">
        <img id="CustomTool" src="https://developer-demos.wacom.com/Images/btn_toolconfig_tool_selected.png" title="Custom Tool" class="Tool Selected CONFIGURATOR" alt="">

        <img id="Selector" src="https://developer-demos.wacom.com/Images/btn_selection.png" class="Tool DelimiterLeft CONFIGURATOR_HIDDEN" title="Selector" alt="">
        <img id="SelectorWholeStroke" src="https://developer-demos.wacom.com/Images/btn_selection_whole_stroke.png" class="Tool VECTOR" title="Whole Stroke Selector" alt="">
      </div>

      <div class="ToolConfig CONFIGURATOR">
        <img src="https://developer-demos.wacom.com/Images/btn_toolconfig.png" title="Tool Configurator" onclick="toolConfigurator.toggle()" alt="">
      </div>
    </nav>
    <div class="DropDown Papers" style="display: none;">
      <img src="https://developer-demos.wacom.com/Images/dropdown_arrow.png" class="Arrow" alt="">
      <img id="paper_01" src="https://developer-demos.wacom.com/Images/btn_paper_01.jpg" class="Item Paper" alt="">
      <img id="paper_02" src="https://developer-demos.wacom.com/Images/btn_paper_02.jpg" class="Item Paper Selected"
           alt="">
      <img id="paper_03" src="https://developer-demos.wacom.com/Images/btn_paper_03.jpg" class="Item Paper" alt="">
    </div>
    <div class="DropDown Colors" style="display: none;">
      <img src="https://developer-demos.wacom.com/Images/dropdown_arrow.png" class="Arrow" alt="">
      <a href="javascript:void(0)" class="Item Color" style="background-color: #BF0058;"></a>
      <a href="javascript:void(0)" class="Item Color" style="background-color: #0097d4;"></a>
      <a href="javascript:void(0)" class="Item Color" style="background-color: #89AE00;"></a>
      <a href="javascript:void(0)" class="Item Color" style="background-color: #E2B800;"></a>
      <a href="javascript:void(0)" class="Item Color Selected" style="background-color: #4A4A4A;"></a>
    </div>
    <div class="Wrapper" style="height: 100%;">
      <canvas id="canvas_images" oncontextmenu="event.preventDefault();"
              style="position: absolute; left: 0; top: 0; display: none;"></canvas>
      <canvas id="canvas2d" oncontextmenu="event.preventDefault();"
              style="position: absolute; left: 0; top: 0; display: none;"></canvas>
      <canvas id="canvas_transform" oncontextmenu="event.preventDefault();"
              style="position: absolute; left: 0; top: 0; display: none;"></canvas>
      <canvas id="canvas_image" oncontextmenu="event.preventDefault();"
              style="position: absolute; left: 0; top: 0; display: none;"></canvas>
      <canvas id="canvas" oncontextmenu="event.preventDefault();" width="100%" height="100%"></canvas>
      <div class="Selection" style="display: none;"
           oncontextmenu="WILL.contextMenu.show(event, WILL.contextMenu.Type.EDIT);">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             xml:space="preserve" version="1.1">
            <path stroke-miterlimit="1"></path>
          </svg>
        <div class="DragHandle">
          <img src="https://developer-demos.wacom.com/Images/btn_move.png" alt="">
        </div>
        <div class="RotateHandle Top">
          <img src="https://developer-demos.wacom.com/Images/btn_rotate_top.png" alt="">
        </div>
        <div class="RotateHandle Bottom">
          <img src="https://developer-demos.wacom.com/Images/btn_rotate_bottom.png" alt="">
        </div>
      </div>
    </div>
    <div id="notifications" style="bottom: 127px;"></div>
  </div>
</template>

<script>

export default {
  name: 'Canvas',
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    if (localStorage.getItem('isReload') === 'true') {
      window.location.reload()
      localStorage.setItem('isReload', false)
    } else this.isLoading = true
  }
}
</script>

<style scoped src="@/assets/css/Transform.css"></style>
<style scoped src="@/assets/css/all.css"></style>
<style scoped src="@/assets/css/a.css"></style>
<style scoped src="@/assets/css/Styles.css"></style>
<style scoped src="@/assets/css/Demo.Navigation.css"></style>
<style scoped src="@/assets/css/Selection.css"></style>
<style scoped src="@/assets/css/Footer.css"></style>
