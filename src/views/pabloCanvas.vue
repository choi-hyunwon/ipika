<template>
  <div class="wrap bg-ivory">

    <!-- s guide -->
<!--    <div class="guide"><img src="@/assets/images/common/canvas_guide@2x.png" alt=""></div>-->
    <!-- E guide -->

    <div class="header ivory">

      <router-link to="/thoughtRecords" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></router-link>
      <div class="btn-wrap">
        <button><img src="@/assets/images/common/img_delete@2x.png" alt=""></button>
        <button><img src="@/assets/images/common/img_invisible@2x.png" alt=""></button>
          <div class="time">{{ timeRemains }}</div>
      </div>
      <div class="flex-box">
        <router-link to="/" class="btn-right">
          <span class="img"><img src="@/assets/images/common/ic-play@2x.png" alt=""></span>
          <span class="tit">영상보기</span>
        </router-link>
        <router-link to="/" class="btn-right">
          <span class="img"><img src="@/assets/images/common/drawing@2x.png" alt=""></span>
          <span class="tit">주제보기</span>
        </router-link>
        <router-link to="/" class="btn-right">
          <span class="img"><img src="@/assets/images/common/ic-img@2x.png" alt=""></span>
          <span class="tit">배경교재</span>
        </router-link>
        <div class="box-close">
          <router-link to="" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
        </div>
      </div>
    </div>

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
    <div class="DropDown Papers" style="display: none;">
      <img src="https://developer-demos.wacom.com/Images/dropdown_arrow.png" class="Arrow" alt="">
      <img id="paper_01" src="https://developer-demos.wacom.com/Images/btn_paper_01.jpg" class="Item Paper" alt="">
      <img id="paper_02" src="https://developer-demos.wacom.com/Images/btn_paper_02.jpg" class="Item Paper" alt="">
      <img id="paper_03" src="https://developer-demos.wacom.com/Images/btn_paper_03.jpg" class="Item Paper Selected"
           alt="">
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
        <div class="tool-wrap">
          <div class="background-color">
            <button class="color" style="background-color: #ffffff"></button>
            <button class="color" style="background-color: #2f2f2f"></button>
          </div>
          <div class="tool-box">
            <div class="pallet">
              <button class="color selected" style="background-color: #ff1c1c"></button>
              <button class="color" style="background-color: #ff871f"></button>
              <button class="color" style="background-color: #f6ba01"></button>
              <button class="color" style="background-color: #24a98d"></button>
              <button class="color" style="background-color: #2f71f1"></button>
              <button class="color" style="background-color: #1122b5"></button>
              <button class="color" style="background-color: #8551d3"></button>
              <button class="color" style="background-color: #2fff65"></button>
            </div>
            <div class="tool">
              <button class="tool-item pencil"><img src="@/assets/images/common/pencil@2x.png" alt=""></button>
              <button class="tool-item ballpen"><img src="@/assets/images/common/ballpen@2x.png" alt=""></button>
              <button class="tool-item inkpen"><img src="@/assets/images/common/inkpen@2x.png" alt=""></button>
              <button class="tool-item marker"><img src="@/assets/images/common/marker@2x.png" alt=""></button>
              <button class="tool-item brush_style2"><img src="@/assets/images/common/brush_style2@2x.png" alt="">
              </button>
              <button class="tool-item brush_style1 selected">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="172" fill="none" viewBox="0 0 80 172">
                  <g filter="url(#filter0_d)">
                    <!-- 색상 변경 시, fill 색상값 변경-->
                    <path fill="#FF002B"
                          d="M63 19.244c-.451-3.04-46.774-3.103-47 .5 0 6 5.554 37.659 6.005 44.526 0 .45.113.901.226 1.351.339.788 1.129.788 1.693 1.014l32.163 3.152C57.554 60.555 63.45 22.283 63 19.244z"/>
                  </g>
                  <path fill="url(#paint0_linear)"
                        d="M52.902 143.444c.1-.3.3-.7.3-1 .5-7.6 4.9-51.7 4.8-72.1 0-1.4 0-2.5-.1-3.1 0-.7-.1-1.2-.2-1.5-.7-2.4-2.9-3.2-6.9-3.5-.9-.1-1.8-.2-2.7-.2h-4.5c-.1-.1-4.2 0-8.4 0h.2-4.5c-.9 0-1.8.1-2.7.2-4 .3-6.2 1.1-6.9 3.5-.1.2-.1.8-.2 1.5 0 .7-.1 1.7-.1 3.1-.1 20.4 4.4 64.6 4.8 72.1 0 .4.1.8.3 1l2.6 4.8c.4.7.4 1.7 0 2.5l-2.2 4.1c-.4.8-.4 1.8 0 2.6l2 3.5c.4.7.4 1.8 0 2.6l-2.6 5c-.8 1.3-.3 3.4.9 3.4h25.5c1.2 0 1.7-2.1.9-3.4l-2.6-5c-.4-.8-.4-2 0-2.6l2-3.5c.4-.8.4-1.8 0-2.6l-2.2-4.1c-.4-.8-.4-1.8 0-2.5l2.5-4.8z"/>
                  <g opacity=".06">
                    <mask id="fj2a19h53a" width="38" height="110" x="21" y="62" maskUnits="userSpaceOnUse">
                      <path fill="url(#paint1_linear)"
                            d="M52.902 143.444c.1-.3.3-.7.3-1 .5-7.6 4.9-51.7 4.8-72.1 0-1.4 0-2.5-.1-3.1 0-.7-.1-1.2-.2-1.5-.7-2.4-2.9-3.2-6.9-3.5-.9-.1-1.8-.2-2.7-.2h-4.5c-.1-.1-4.2 0-8.4 0h.2-4.5c-.9 0-1.8.1-2.7.2-4 .3-6.2 1.1-6.9 3.5-.1.2-.1.8-.2 1.5 0 .7-.1 1.7-.1 3.1-.1 20.4 4.4 64.6 4.8 72.1 0 .4.1.8.3 1l2.6 4.8c.4.7.4 1.7 0 2.5l-2.2 4.1c-.4.8-.4 1.8 0 2.6l2 3.5c.4.7.4 1.8 0 2.6l-2.6 5c-.8 1.3-.3 3.4.9 3.4h25.5c1.2 0 1.7-2.1.9-3.4l-2.6-5c-.4-.8-.4-2 0-2.6l2-3.5c.4-.8.4-1.8 0-2.6l-2.2-4.1c-.4-.8-.4-1.8 0-2.5l2.5-4.8z"/>
                    </mask>
                    <g mask="url(#fj2a19h53a)">
                      <path fill="url(#paint2_linear)"
                            d="M35.546 47.117c-2.638 0-5.036-.121-8.153.244-3.236.366-6.593.61-7.433 4.025-.959 4.39 3.837 85.247 4.316 93.052 0 .366.12.61.24.976l2.398 4.512c.36.61.36 1.586 0 2.317l-2.038 3.781c-.36.732-.36 1.707 0 2.439l1.798 3.293c.36.732.36 1.707 0 2.439l-2.398 4.634c-.6 1.22-.12 3.171.96 3.171h28.652c1.08 0 1.559-1.951.84-3.171l-2.398-4.634c-.36-.732-.36-1.829 0-2.439l1.798-3.293c.36-.732.36-1.707 0-2.439l-2.038-3.781c-.36-.731-.36-1.707 0-2.317l2.398-4.512c.12-.244.24-.61.24-.976.479-7.927 5.514-89.637 4.195-93.906-.959-3.292-4.915-3.414-12.947-3.292-.12-.123-6.594-.123-10.43-.123z"/>
                      <path fill="url(#paint3_linear)"
                            d="M53.769 68.826c.24-.366.24-13.293.839-18.537.12-.976.24-2.196-.36-3.05-.48-.73-1.319-.975-2.158-1.097-4.076-.732-7.673-1.707-11.629-.732-2.038.488-4.196.488-6.234.123-2.158-.366-5.395.243-7.433 1.707 7.553.366 25.296.122 25.896 1.463.36.732.479 13.903.479 18.66 0 .61-.36 1.097-.84 1.097-8.391-.122-16.304-.366-24.696 0 0 0 2.278 1.098 11.27 2.317 5.155.732 7.792 4.147 7.433 11.464-.24 3.78-1.32 46.465-3.237 59.88-.24 1.83-1.32 3.171-2.638 3.415-.959.122-2.158.244-2.997.244-.48 0-.84 0-1.199-.244-1.319-.732-1.558-3.293-1.558-5.244-.24-10.488-4.676-58.783-6.354-65.246 0-.122-.12-.244-.12-.366-.48-.732-2.158-3.659-3.357-5.244-.24-.244-.36-.61-.36-1.098.12-3.049.6-15.122.72-20.732 0-1.22-.72-1.83-1.559-1.342-.48.244-.72.732-.72 1.342.12 5.122 0 19.513-.12 21.342v.488c.72 3.536 7.314 33.172 7.794 72.563 0 1.342-.84 1.952-1.679 2.074-1.319.122-.452.447-1.65.081-1.44-.488-.72 2.683-.72 2.683 1.079.854-.028.772 1.171.65 6.834-.365 13.547-.609 20.38-.975.6 0 1.08-.122 1.56-.488.359-.488 8.631-97.077 8.272-97.93-.36-.976-2.159-2.074-2.159-.976.6 7.317-7.552 96.955-7.432 97.808 0 .122-.48.122-1.08.122-.599 0-.719-1.341-.719-2.317.48-11.952 4.316-69.27 7.194-73.905z"/>
                      <path fill="url(#paint4_linear)"
                            d="M53.769 68.826c.24-.366.24-13.293.839-18.537.12-.976.24-2.196-.36-3.05-.48-.73-1.319-.975-2.158-1.097-4.076-.732-7.673-1.707-11.629-.732-2.038.488-4.196.488-6.234.123-2.158-.366-5.395.243-7.433 1.707 7.553.366 25.296.122 25.896 1.463.36.732.479 13.903.479 18.66 0 .61-.36 1.097-.84 1.097-8.391-.122-16.304-.366-24.696 0 0 0 2.278 1.098 11.27 2.317 5.155.732 7.792 4.147 7.433 11.464-.24 3.78-1.32 46.465-3.237 59.88-.24 1.83-1.32 3.171-2.638 3.415-.959.122-2.158.244-2.997.244-.48 0-.84 0-1.199-.244-1.319-.732-1.558-3.293-1.558-5.244-.24-10.488-4.676-58.783-6.354-65.246 0-.122-.12-.244-.12-.366-.48-.732-2.158-3.659-3.357-5.244-.24-.244-.36-.61-.36-1.098.12-3.049.6-15.122.72-20.732 0-1.22-1.559-1.342-1.559-1.342s-.72.732-.72 1.342c.12 5.122 0 19.513-.12 21.342v.488c.72 3.536 7.314 33.172 7.794 72.563 0 1.342-.84 1.952-1.679 2.074-1.34 0-.685-.095-1.808 0-1.685.477-.72 2.683-.72 2.683 1.08.853.13.853 1.33.731 6.833-.365 13.546-.609 20.38-.975.6 0 1.079-.122 1.558-.488.36-.488 8.632-97.077 8.273-97.93-.36-.976-2.159-2.074-2.159-.976.6 7.317-7.552 96.955-7.432 97.808 0 .122-.48.122-1.08.122-.599 0-.719-1.341-.719-2.317.48-11.952 4.316-69.27 7.194-73.905z"
                            opacity=".8"/>
                      <path fill="url(#paint5_linear)"
                            d="M53.648 156.878c-.12-.61-2.278-5.123-3.117-5.488-2.038-.976-20.26-.61-21.58 0-1.079.487-2.877 1.951-3.236 3.78-.36 1.83 20.74-2.561 27.933 1.708z"/>
                      <path fill="url(#paint6_linear)"
                            d="M27.514 169.195c1.438.244 22.538-.366 26.374-.244-.12-.732-2.277-5.366-3.117-5.732-2.038-.975-20.74-.61-22.059 0-1.079.488-2.877 2.073-3.237 4.025-.36 1.707 1.08 1.829 2.038 1.951z"/>
                      <path fill="url(#paint7_linear)"
                            d="M52.57 146.999c-.6-.854-1.559-.732-2.398-.61-7.913.976-15.945 1.586-23.857 1.952.958 2.195 2.877 2.561 4.675 2.561 4.795.122 16.784-.488 18.103-.244.36 0 .72.122 1.079 0 1.199-.488 1.918-2.195 2.398-3.659z"
                            opacity=".5"/>
                      <path fill="url(#paint8_linear)"
                            d="M52.929 157.853c-.6-.853-1.559-.731-2.398-.731-8.152.975-16.304 1.585-24.457 1.951.96 2.195 2.997 2.683 4.796 2.683 4.915.122 17.143-.488 18.462-.244.36.122.72.122 1.08 0 1.198-.244 1.917-2.073 2.517-3.659z"
                            opacity=".5"/>
                      <path fill="url(#paint9_linear)"
                            d="M25.715 47.483c-.24 6.464-.72 20.733-.6 20.977.12.122 3.957 4.512 4.796 9.268.36 2.317 5.635 62.32 6.354 64.759.72 2.317 2.757 1.951 4.076 1.585.84-.244 1.678-.732 2.158-1.707.48-1.098 2.398-25.611 2.997-44.636.36-11.342.72-21.098-1.438-23.415-4.196-4.39-11.39-4.269-16.904-5.61 8.032-.732 16.664-.976 24.696-.61.6 0 1.08-.488 1.08-1.22.479-4.268 0-16.83-.12-18.05-6.834-.365-26.256-1.463-27.095-1.34z"/>
                      <path fill="url(#paint10_linear)"
                            d="M25.715 47.483c-.24 6.464-.72 20.733-.6 20.977.12.122 3.957 4.512 4.796 9.268.36 2.317 5.635 62.32 6.354 64.759.72 2.317 2.757 1.951 4.076 1.585.84-.244 1.678-.732 2.158-1.707.48-1.098 2.398-25.611 2.997-44.636.36-11.342.72-21.098-1.438-23.415-4.196-4.39-11.39-4.269-16.904-5.61 8.032-.732 16.664-.976 24.696-.61.6 0 1.08-.488 1.08-1.22.479-4.268 0-16.83-.12-18.05-6.834-.365-26.256-1.463-27.095-1.34z"/>
                    </g>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear" x1="18" x2="61.003" y1="137.02" y2="137.02"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="18" x2="61.003" y1="137.02" y2="137.02"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="39.495" x2="39.495" y1="52.186" y2="163.127"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset=".737" stop-color="#49464D"/>
                      <stop offset=".802" stop-color="#4D4A51"/>
                      <stop offset=".869" stop-color="#59575B"/>
                      <stop offset=".938" stop-color="#6C6B6D"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear" x1="19.722" x2="54.01" y1="96.317" y2="96.317"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#666"/>
                      <stop offset=".658" stop-color="#AEAEAE"/>
                      <stop offset="1" stop-color="#D3D3D3"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear" x1="19.722" x2="54.01" y1="96.317" y2="96.317"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#EBEBEB"/>
                      <stop offset=".658" stop-color="#3E3B43"/>
                      <stop offset="1" stop-color="#3B3840"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear" x1="26.816" x2="51.558" y1="153.877" y2="153.877"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear" x1="26.534" x2="51.869" y1="165.98" y2="165.98"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear" x1="27.346" x2="50.664" y1="148.655" y2="148.655"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset=".695" stop-color="#2E2A33"/>
                      <stop offset=".764" stop-color="#312E36"/>
                      <stop offset=".827" stop-color="#3C3840"/>
                      <stop offset=".886" stop-color="#4D4B50"/>
                      <stop offset=".944" stop-color="#666467"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint8_linear" x1="27.096" x2="50.918" y1="159.488" y2="159.488"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset=".695" stop-color="#2E2A33"/>
                      <stop offset=".764" stop-color="#312E36"/>
                      <stop offset=".827" stop-color="#3C3840"/>
                      <stop offset=".886" stop-color="#4D4B50"/>
                      <stop offset=".944" stop-color="#666467"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint9_linear" x1="39.124" x2="39.124" y1="48.31" y2="138.861"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset="1" stop-color="#CCC"/>
                    </linearGradient>
                    <linearGradient id="paint10_linear" x1="39.124" x2="39.124" y1="48.31" y2="138.861"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset="1" stop-color="#BBB"/>
                    </linearGradient>
                    <filter id="filter0_d" width="55.025" height="60.787" x="12" y="17"
                            color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feColorMatrix values="0 0 0 0 0.295833 0 0 0 0 0.013559 0 0 0 0 0.013559 0 0 0 0.16 0"/>
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </button>
              <button class="tool-item eraser"><img src="@/assets/images/common/eraser@2x.png" alt=""></button>
            </div>
            <div class="btn-tool">
              <button><img src="@/assets/images/common/btn_undo@2x.png" alt=""></button>
              <button><img src="@/assets/images/common/btn_redo@2x.png" alt=""></button>
              <button><img src="@/assets/images/common/btn_refresh@2x.png" alt=""></button>
            </div>
          </div>
          <div class="btn-wrap">
            <!--          <button class="btn btn-dark btn-lg">다 그렸어요!</button>-->
            <!--          <button class="btn btn-white btn-lg">다 그렸어요!</button>-->
            <button class="btn btn-blue btn-lg" v-on:click="reset()">다 그렸어요!</button>
          </div>
        </div>
      </div>
    </div>
    <div id="notifications" style="bottom: 127px;"></div>

    <!-- s 팝업  -->
    <b-button v-b-modal.studySubjectPopup style="position: absolute; top: 200px; left: 50px;">시청 완료시/뒤로가기</b-button>
    <b-modal id="studySubjectPopup" centered modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/drawing@2x.png" alt=""></div>
      </template>

      <p class="text text-md">배경교재 학습 주제 영역입니다.<br/>
        학습 주제는 최대 세 문장까지<br/>
        가능합니다.</p>
      <p class="text-sm">생각 제시하는 생각 과제 제시하는 텍스트<br/>
        영역으로 최대 두줄 이상을 생각합니다.</p>
      <template #modal-footer="{ cancel }">
        <b-button class="btn btn-block btn-black" @click="cancel()">닫기</b-button>
      </template>
    </b-modal>

    <b-button v-b-modal.refreshPopup style="position: absolute; top: 200px; left: 200px;" v-on:click="popUpOpen">새로고침 시</b-button>
    <b-modal @hide="hideInfo" id="refreshPopup" centered modal-class="normalPopup" >
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">다시 그리시겠어요?<br/>
        지금 그린 그림이 지워져요</p>
      <p class="text-sm">지워진 그림은 복구할 수 없어요</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" v-on:click="reWrite" @click="cancel()">다시 그릴게요</b-button>
        <b-button variant="black" class="btn-half" @click="cancel()">계속 그릴래요!</b-button>
      </template>
    </b-modal>

    <b-button v-b-modal.normalPopup3 style="position: absolute; top: 200px; left: 350px;" v-on:click="popUpOpen">캔버스_제출하기</b-button>
    <b-modal id="normalPopup3" centered modal-class="normalPopup" @hide="hideInfo">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">다 그렸나요?<br/>
        제출하면 수정할 수 없어요!</p>
      <p class="text-sm">더 그리고 싶은 것은 없는지 생각해봐요</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" v-on:click="go('/')">제출할게요</b-button>
        <b-button variant="black" class="btn-half"  @click="cancel()">더 그릴게요!</b-button>
      </template>
    </b-modal>

    <b-button v-b-modal.studyBookPopup style="position: absolute; top: 200px; left: 500px;" @click="popUpOpen">배경교제</b-button>
    <b-modal @hide="hideInfo"id="studyBookPopup" centered hide-footer modal-class="studyBookPopup">
      <template #default="{ hide }">
        <button class="btn-close" @click="hide()"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
        <div class="content">
          <div class="c-header">
            <p class="title">배경교재 선택하기</p>
            <p class="desc">그리고 싶은 배경교재를 선택하고, 캔버스에서 그려보세요!</p>
          </div>
          <div class="c-body">
            <ul class="scroll">
              <li>
                <router-link to="">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?사람들이 오늘은 무슨 신발을 신었을까?</span>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </b-modal>
    <!-- e 팝업  -->

  </div>
</template>

<script>

export default {
  name: 'pabloCanvas',
  data () {
    return {
      isLoading: false,
      timeInitVal : 60*2,
      time : 60*2,
      timer:null,
    }
  },
  mounted () {
    if (localStorage.getItem('isReload') === 'true' || localStorage.getItem('isReload') === undefined) window.location.reload()
    else this.isLoading = true

    this.timerStart();
  },
  computed :{
    timeRemains(){
      let mm=Math.floor(this.time/60)
      mm = mm<10 ? '0'+mm : mm
      let ss=this.time % 60
      ss = ss<10 ? '0'+ss : ss

      return `${mm} : ${ss}`
    }
  },
  methods:{
    timerStart(){
      this.timer=setInterval(()=>{
        if(this.time===0){
          clearInterval(this.timer)
          this.$router.push('/')
        }
        this.time--
      },1000)
    },
    reset(){
      this.time=this.timeInitVal
      clearInterval(this.timer)
      this.timer=null
    },
    go(to){
      this.reset()
      this.$router.push(to)
    },
    popUpOpen(){
      clearInterval(this.timer)
    },
    reWrite(){
      this.reset()
      this.timerStart()
    },
    hideInfo(e){
      if(e.trigger==="backdrop"||"esc"){
        this.timerStart()
      }
    },
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
.guide {
  position: absolute;
  width: 192rem;
  height: 120rem;
  top: 0;
  left: 0;
  z-index: 1111;
  img {
    width: 100%;
    height: 100%;
  }
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
            box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.12);
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

              &:nth-child(4n) {
                margin-right: 0;
              }

              &.selected {
                position: relative;

                &::after {
                  content: '';
                  display: inline-block;
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
