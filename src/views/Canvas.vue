<template>
  <div class="wrap bg-ivory">
    <div class="header canvas">
      <div class="timer red"><!-- 1분 미만일 경우, red 클래스 추가 -->
<!--        <div class="img"><img src="@/assets/images/common/timer-black@2x.png" alt=""></div>-->
        <div class="img"><img src="@/assets/images/common/timer@2x.png" alt=""></div> <!-- 1분 미만일 경우 -->
        <div class="time">02 : 00</div>
      </div>
      <div class="symbol">
        <span class="img"><img src="@/assets/images/common/Symbol@2x.png" alt=""></span>
        <span class="text">자유롭게 나무를 그려보세요</span>
      </div>
      <div class="box-close">
        <router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
      </div>
    </div>
    <nav v-if="isLoading" style="visibility: visible;position: absolute;bottom: 20px;left: 20px;z-index: 1;">
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
				<input type="color" value="#4A4A4A" class="Button" onchange="layout.selectColor(this);" title="canvas">
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
      <img id="paper_02" src="https://developer-demos.wacom.com/Images/btn_paper_02.jpg" class="Item Paper" alt="">
      <img id="paper_03" src="https://developer-demos.wacom.com/Images/btn_paper_03.jpg" class="Item Paper Selected" alt="">
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
    <div class="nav show"><!-- show/hide -->
      <div class="inner">
        <button class="btn-drawer"><img src="@/assets/images/common/slide_down@2x.png" alt=""></button>
        <div class="btn-wrap">
          <router-link to="/LoadingSpinnerWaiting" class="btn btn-dark btn-lg">
            다 그렸어요!<!-- 1분 미만일 경우 -->
          </router-link>
          <!--<b-button variant="dark" class="btn-lg">다 그렸어요!</b-button> &lt;!&ndash; 1분 미만일 경우 &ndash;&gt;-->
        </div>
      </div>
    </div>
    <div id="notifications" style="bottom: 127px;"></div>

    <!-- s 팝업  -->
    <b-button v-b-modal.normalPopup style="position: absolute; top: 200px; left: 50px;">진단테스트_3_시간 초과 시 1</b-button>
    <b-modal id="normalPopup" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/timer@2x.png" alt=""></div>
      </template>
      <p class="text">시간이 초과되었어요!<br/>
        제출하시겠어요?</p>
      <p class="text-sm">다시 그리면 먼저 그린 그림은 사라져요</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="blue" class="btn-half">다시 그릴래요!</b-button>
        <b-button variant="black" class="btn-half">제출할게요</b-button>
      </template>
    </b-modal>

    <b-button v-b-modal.normalPopup2 style="position: absolute; top: 200px; left: 200px;">진단테스트_3_시간 초과 시 2</b-button>
    <b-modal id="normalPopup2" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">다시 그리시겠어요?<br/>
        지금 그린 그림이 지워져요</p>
      <p class="text-sm">제출하면 파블로가 그림을 분석할 거예요 :)</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="blue" class="btn-half">제출할게요</b-button>
        <b-button variant="black" class="btn-half">다시 그릴게요!</b-button>
      </template>
    </b-modal>

    <b-button v-b-modal.normalPopup3 style="position: absolute; top: 200px; left: 350px;">진단테스트_3_제출팝업</b-button>
    <b-modal id="normalPopup3" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">다 그렸나요?<br/>
        제출하면 수정할 수 없어요!</p>
      <p class="text-sm">더 그리고 싶은 것은 없는지 생각해봐요</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half">제출할게요</b-button>
        <b-button variant="black" class="btn-half">더 그릴게요!</b-button>
      </template>
    </b-modal>

    <b-button v-b-modal.normalPopup4 style="position: absolute; top: 200px; left: 480px;">진단테스트_3_제출 완료 팝업</b-button>
    <b-modal id="normalPopup4" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_green@2x.png" alt=""></div>
      </template>
      <p class="text">성공적으로<br/>
        제출되었어요 :)</p>
      <p class="text-sm">결과를 확인해보세요!</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="black" class="btn-block">내 스테이지 확인하러 가기</b-button>
      </template>
    </b-modal>
    <!-- e 팝업  -->

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

<style lang="scss" scoped>
.Wrapper {
  width: 100% !important;
  height: 108rem !important;
}
#canvas {
  height: 100% !important;
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
      .btn-wrap {
        position: absolute;
        right: 4.9rem;
        bottom: 7rem;
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
    }
    .btn-wrap {
      display: none;
    }
  }
}
</style>
