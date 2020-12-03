<template>
  <div>
    <nav v-if="isLoading" style="visibility: visible;position: absolute;bottom: 20px;left: 20px;z-index: 1; display: none">
      <div>
        <img src="https://developer-demos.wacom.com/Images/btn_paper_02.jpg" title="Paper" class="Item Paper"
             onclick="dropDown.toggle('Papers')" alt="">
        <span class="CONFIGURATOR_HIDDEN">
    				<img src="https://developer-demos.wacom.com/Images/btn_export.png" title="Export"
                 onclick="WILL.exportPNG();" alt="">
    				<img src="https://developer-demos.wacom.com/Images/btn_clear.png" title="Clear" onclick="WILL.clear(); "
                 alt="">
    				<img src="https://developer-demos.wacom.com/Images/btn_undo.png" title="Undo" onclick="WILL.undo(); "
                 alt="">
    				<img src="https://developer-demos.wacom.com/Images/btn_redo.png" title="Redo" onclick="WILL.redo(); "
                 alt="">
    			</span>

        <span class="ColorBox Delimiter" onclick="dropDown.toggle('Colors');" title="Color">
    				<a href="javascript:void(0)" class="Item Color" style="background-color: #4A4A4A;"></a>
    				<input type="color" value="#4A4A4A" class="Button" onchange="layout.selectColor(this);" title="canvas">
    			</span>

        <span class="VECTOR CONFIGURATOR_HIDDEN">
    				<img id="Pen" src="https://developer-demos.wacom.com/Images/btn_pen_selected.png" title="Pen"
                 class="Tool Selected" alt="">
    				<img id="Felt" src="https://developer-demos.wacom.com/Images/btn_feather.png" title="Felt" class="Tool"
                 alt="">
    				<img id="Brush" src="https://developer-demos.wacom.com/Images/btn_brush.png" title="Brush" class="Tool"
                 alt="">
    				<img id="Marker" src="https://developer-demos.wacom.com/Images/btn_marker.png" title="Marker" class="Tool"
                 alt="">
    			</span>

        <span class="RASTER CONFIGURATOR_HIDDEN">
    				<img id="Pencil" src="https://developer-demos.wacom.com/Images/btn_pencil_selected.png" title="Pencil"
                 class="Tool Selected" alt="">
    				<img id="WaterBrush" src="https://developer-demos.wacom.com/Images/btn_water_brush.png" title="Water Brush"
                 class="Tool" alt="">
    				<img id="InkBrush" src="https://developer-demos.wacom.com/Images/btn_feather.png" title="Ink Brush"
                 class="Tool" alt="">
    				<img id="Crayon" src="https://developer-demos.wacom.com/Images/btn_crayon.png" title="Crayon" class="Tool"
                 alt="">
    			</span>

        <img src="https://developer-demos.wacom.com/Images/btn_clear.png" title="Clear" class="CONFIGURATOR"
             onclick="WILL.clear()" alt="">
        <img id="Eraser" src="https://developer-demos.wacom.com/Images/btn_eraser.png" class="Tool Eraser DelimiterLeft"
             title="Eraser" alt="">
        <img id="EraserWholeStroke" src="https://developer-demos.wacom.com/Images/btn_eraser_whole_stroke.png"
             class="Tool Eraser VECTOR" title="Whole Stroke Eraser" alt="">
        <img id="CustomTool" src="https://developer-demos.wacom.com/Images/btn_toolconfig_tool_selected.png"
             title="Custom Tool" class="Tool Selected CONFIGURATOR" alt="">

        <img id="Selector" src="https://developer-demos.wacom.com/Images/btn_selection.png"
             class="Tool DelimiterLeft CONFIGURATOR_HIDDEN" title="Selector" alt="">
        <img id="SelectorWholeStroke" src="https://developer-demos.wacom.com/Images/btn_selection_whole_stroke.png"
             class="Tool VECTOR" title="Whole Stroke Selector" alt="">
      </div>

      <div class="ToolConfig CONFIGURATOR">
        <img src="https://developer-demos.wacom.com/Images/btn_toolconfig.png" title="Tool Configurator"
             onclick="toolConfigurator.toggle()" alt="">
      </div>
    </nav>


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
    <div class="nav" :class="{'show': drawer === true, 'hide': drawer=== false}"><!-- show/hide -->
      <div class="inner">
        <button class="btn-drawer" @click="toggleDrawer">
          <img v-if="drawer === true" src="@/assets/images/common/slide_down@2x.png" alt="">
          <img v-else src="@/assets/images/common/slide_up@2x.png" alt="">
        </button>
        <div class="tool-wrap">
          <div class="background-color">
            <button class="color" id="paper_01" style="background-color: #ffffff"
                    @click="setBgColorSelect"
            ></button>
            <button class="color" id="paper_02" style="background-color: #2f2f2f"
                    @click="setBgColorSelect"
            ></button>
          </div>
          <div class="tool-box">
            <div class="pallet">
              <button class="color " style="background-color: #ff1c1c"
                      @click="setColorSelect"
              ></button>
              <button class="color" style="background-color: #ff871f"
                      @click="setColorSelect"
              ></button>
              <button class="color" style="background-color: #f6ba01"
                      @click="setColorSelect"
              ></button>
              <button class="color" style="background-color: #24a98d"
                      @click="setColorSelect"
              ></button>
              <button class="color" style="background-color: #2f71f1"
                      @click="setColorSelect"
              ></button>
              <button class="color" style="background-color: #1122b5"
                      @click="setColorSelect"
              ></button>
              <button class="color" style="background-color: #8551d3"
                      @click="setColorSelect"
              ></button>
              <button class="color selected" style="background-color: #444444"
                      @click="setColorSelect"
              ></button>
            </div>
            <div class="tool">
              <button id="Pencil" @click="setTool" class="tool-item pencil selected"><img src="@/assets/images/common/pencil@2x.png" alt=""></button>
              <button id="WaterBrush" @click="setTool" class="tool-item ballpen"><img src="@/assets/images/common/ballpen@2x.png" alt=""></button>
              <button id="InkBrush" @click="setTool" class="tool-item inkpen"><img src="@/assets/images/common/inkpen@2x.png" alt=""></button>
              <button id="Crayon" @click="setTool" class="tool-item marker"><img src="@/assets/images/common/marker@2x.png" alt=""></button>
              <button id="WaterBrush" @click="setTool" class="tool-item brush_style2"><img src="@/assets/images/common/brush_style2@2x.png" alt=""></button>
              <button id="WaterBrush" @click="setTool" class="tool-item brush_style2"><img src="@/assets/images/common/brush_style1@2x.png" alt=""></button>
              <button id="Eraser" @click="setTool" class="tool-item eraser"><img src="@/assets/images/common/eraser@2x.png" alt=""></button>
            </div>
            <div class="btn-tool">
              <button @click="undo"><img src="@/assets/images/common/btn_undo@2x.png" alt=""></button>
              <button @click="redo"><img src="@/assets/images/common/btn_redo@2x.png" alt=""></button>
              <button v-b-modal.clearAllPopup><img src="@/assets/images/common/btn_refresh@2x.png" alt=""></button>
            </div>
          </div>
          <div v-if="page==='diagnose'||'study'" class="btn-wrap">
            <b-button v-b-modal.normalPopup3 class="btn btn-blue btn-lg">다 그렸어요!</b-button>
          </div>
        </div>
      </div>
    </div>

    <div id="notifications" style="bottom: 127px;"></div>
  </div>
</template>

<script>
export default {
  name: "Wacom",
  props : {
    isLoading: {
      Boolean,
      default(){return false}
    },
    drawer: {
      Boolean,
      default(){return true}
    }
  },
  computed : {
    page() {
      return this.$router.currentRoute.query.page
    }
  },
  methods : {
    /**
     * 캔버스 툴 조작
     */
    setBgColorSelect(e){
      WILL.setBackground(e.target.id)
    },
    setColorSelect(e){
      Array.from(document.querySelectorAll('.pallet .color')).forEach((el) => el.classList.remove('selected'));
      e.target.classList.add('selected')
      dropDown.selectColor(e.target);
    },
    setTool(e){
      Array.from(document.querySelectorAll('.tool .tool-item')).forEach((el) => el.classList.remove('selected'));
      e.target.parentNode.classList.add('selected')
      WILL.setTool(e.target.parentNode.id)
    },
    redo(){
      WILL.redo()
    },
    undo(){
      WILL.undo()
    },
    toggleDrawer(){
      this.$EventBus.$emit('toggleDrawer', !this.drawer);
    }
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
<style lang="scss" scoped>
.Wrapper {
  width: 100% !important;
  height: 108rem !important;
  position: absolute;
  top: 80px;
}
.nav {
  &.show {
    position: absolute;
    width: 182.4rem;
    height: 22rem;
    border-radius: 2rem;
    border: solid 1px var(--ivory-500);
    background-color: var(--ivory-200);
    left: 4.8rem;
    bottom: 4.8rem;

    .inner {
      position: relative;
      width: 100%;
      height: 100%;

      .btn-drawer {
        position: absolute;
        width: 12rem;
        height: 4.8rem;
        background-color: var(--ivory-300);
        border-radius: 2rem 2rem 0 0;
        margin: 0 auto;
        top: -4.8rem;
        left: 50%;
        transform: translateX(-50%);

        img {
          width: 4.8rem;
          height: 4.8rem;
        }
      }

      .tool-wrap {
        height: 22rem;

        .background-color {
          position: relative;
          float: left;
          width: 22.9rem;
          padding-top: 8rem;
          padding-left: 4.9rem;
          line-height: initial;

          .color {
            display: inline-block;
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            box-shadow: inset 0 3px 3px 0 rgba(0, 0, 0, 0.12);
            border: solid 1px var(--ivory-500);
            background-color: var(--ivory-100);

            &:first-child {
              margin-right: 1.2rem;
            }
          }

          &::after {
            content: '';
            position: absolute;
            display: block;
            top: 4rem;
            right: 0;
            width: .1rem;
            height: 14rem;
            background-color: var(--ivory-500);
          }
        }

        .tool-box {
          position: relative;
          float: left;
          width: 129.7rem;
          margin-right: 5.5rem;
          height: calc(22rem - .2rem);
          line-height: 22rem;

          .pallet {
            float: left;
            padding-top: 6rem;
            padding-left: 4.7rem;
            width: 26rem;
            margin-right: 5.5rem;
            height: calc(22rem - .2rem);
            line-height: initial;

            .color {
              display: inline-block;
              width: 4.4rem;
              height: 4.4rem;
              border-radius: 50%;
              margin-right: 1.2rem;
              box-shadow: inset 0 .4rem .4rem 0 rgba(0, 0, 0, 0.16);
              margin-bottom: 1.2rem;
              float: left;

              &:nth-child(4n) {
                margin-right: 0;
              }

              &.selected {
                position: relative;

                &::after {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  border-radius: 50%;
                  width: 4.4rem;
                  height: 4.4rem;
                  border: .8rem solid rgba(20, 20, 20, .2);
                }
              }
            }
          }

          .tool {
            float: left;
            height: calc(22rem - .2rem);
            line-height: calc(22rem - .2rem);
            margin-right: 5.5rem;

            .tool-item {
              position: relative;
              display: inline-block;
              width: 8rem;
              height: 13rem;
              margin-right: 1.6rem;
              vertical-align: bottom;

              img, svg {
                width: 100%;
                height: 100%;
                opacity: .6;
                vertical-align: baseline;
              }

              &.pencil {
                &::before {
                  content: '';
                  position: absolute;
                  top: -2.2rem;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 2rem;
                  height: .2rem;
                  opacity: 0.6;
                  background-color: var(--ivory-500);
                }
              }

              &.ballpen {
                &::before {
                  content: '';
                  position: absolute;
                  top: -2.2rem;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 2rem;
                  height: .4rem;
                  opacity: 0.6;
                  background-color: var(--ivory-500);
                }
              }

              &.inkpen {
                &::before {
                  content: '';
                  position: absolute;
                  top: -2.8rem;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 1.2rem;
                  height: 1.2rem;
                  opacity: 0.6;
                  background-color: var(--ivory-500);
                }
              }

              &.marker {
                &::before {
                  content: '';
                  position: absolute;
                  top: -3rem;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 1.6rem;
                  height: 1.6rem;
                  opacity: 0.6;
                  background-color: var(--ivory-500);
                }
              }

              &.brush_style2 {
                &::before {
                  content: '';
                  position: absolute;
                  top: -3.2rem;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 2rem;
                  height: 2rem;
                  opacity: 0.6;
                  border-radius: 50%;
                  background-color: var(--ivory-500);
                }
              }

              &.eraser {
                &::before {
                  content: '';
                  position: absolute;
                  top: -3.2rem;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 2.8rem;
                  height: 2rem;
                  opacity: 0.6;
                  border-radius: 50%;
                  background-color: var(--ivory-500);
                }
              }

              &.brush_style1 {
                width: 8rem;
                height: 17.2rem;
              }

              &.selected {
                img, svg {
                  opacity: 1;
                }
              }

              &:last-child {
                margin-right: 0;
              }
            }
          }

          &::after {
            content: '';
            position: absolute;
            display: block;
            top: 4rem;
            right: 0;
            width: .1rem;
            height: 14rem;
            background-color: var(--ivory-500);
          }
        }

        .btn-tool {
          float: left;
          display: inline-block;

          button {
            display: inline-block;
            width: 6.4rem;
            height: 6.4rem;
            margin-right: 1.6rem;

            img {
              width: 100%;
              height: 100%;
            }

            &:last-child {
              margin-right: 0;
            }
          }
        }

        .btn-wrap {
          position: absolute;
          right: 4.9rem;
          bottom: 7rem;
          line-height: 4.8rem;
        }
      }
    }
  }

  &.hide {
    .btn-drawer {
      position: absolute;
      width: 12rem;
      height: 4.8rem;
      background-color: var(--ivory-300);
      border-radius: 2rem 2rem 0 0;
      margin: 0 auto;
      top: auto;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      img {
        width: 4.8rem;
        height: 4.8rem;
      }
    }

    .tool-wrap {
      display: none;
    }
  }
}
</style>
