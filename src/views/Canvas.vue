<template>
  <div class="wrap bg-ivory">

    <!-- s guide -->
<!--    <div class="guide"><img src="@/assets/images/common/test_guide@2x.png" alt=""></div>-->
    <!-- E guide -->

    <!-- 진단 테스트 -->
    <div v-if="page === 'diagnose'" class="header canvas">
      <div class="timer red"><!-- 1분 미만일 경우, red 클래스 추가 -->
        <!--        <div class="img"><img src="@/assets/images/common/timer-black@2x.png" alt=""></div>-->
        <div class="img"><img src="@/assets/images/common/timer@2x.png" alt=""></div> <!-- 1분 미만일 경우 -->
        <div class="time">{{timeRemains}}</div>
      </div>
      <div class="symbol">
        <span class="img"><img src="@/assets/images/common/Symbol@2x.png" alt=""></span>
        <span class="text">자유롭게 나무를 그려보세요</span>
      </div>
      <div class="box-close">
        <!--<router-link to="/" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>-->

        <!-- TODO: inline-style 추가함 확인 필요 -->
        <button @click="close" style="padding-top: 0;" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></button>

      </div>
    </div>

    <!-- 학습 -->
    <div v-if="page === 'study'" class="header ivory">

      <!--<router-link to="/thoughtRecords" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></router-link>-->
      <button @click="goBack" class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></button>

      <div class="btn-wrap">
        <button><img src="@/assets/images/common/img_delete@2x.png" alt=""></button>
        <button><img src="@/assets/images/common/img_invisible@2x.png" alt=""></button>
        <div class="time">{{ timeRemains }}</div>
      </div>
      <div class="flex-box">
        <button v-b-modal.videoReviewPopup class="btn-right" @click="popUpOpen" >
          <span class="img"><img src="@/assets/images/common/ic-play@2x.png" alt=""></span>
          <span class="tit">영상보기</span>
        </button>

        <button v-b-modal.watchSubject class="btn-right" @click="popUpOpen">
          <span class="img"><img src="@/assets/images/common/drawing@2x.png" alt=""></span>
          <span class="tit">주제보기</span>
        </button>
        <button v-b-modal.studyBookPopup class="btn-right" @click="popUpOpen">
          <span class="img"><img src="@/assets/images/common/ic-img@2x.png" alt="" ></span>
          <span class="tit">배경교재</span>
        </button>
        <div class="box-close">
          <!--<router-link to="" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>-->

          <!-- TODO: inline-style 추가함 확인 필요 -->
          <button @click="close" style="padding-top: 0;" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></button>
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

    <!-- 진단 테스트 -->
    <!-- s 팝업  -->
<!--    <b-button v-if="page === 'diagnose'"  v-b-modal.normalPopup style="position: absolute; top: 200px; left: 50px;">진단테스트_3_시간 초과 시 1</b-button>-->
    <b-modal v-if="page === 'diagnose'" :visible="timeOver" id="clearPopup" centered title="전체 지우기 팝업" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/timer@2x.png" alt=""></div>
      </template>
      <p class="text">시간이 초과되었어요!<br/>
        제출하시겠어요?</p>
      <p class="text-sm">다시 그리면 먼저 그린 그림은 사라져요</p>
      <template #modal-footer="{ cancel }">
        <b-button @click="clear" variant="blue" class="btn-half">다시 그릴래요!</b-button>
        <b-button @click="cancel" variant="black" class="btn-half">제출할게요</b-button>
      </template>
    </b-modal>

<!--    <b-button v-if="page === 'diagnose'" v-b-modal.normalPopup2 style="position: absolute; top: 200px; left: 200px;">진단테스트_3_시간 초과 시 2</b-button>-->
    <b-modal v-if="page === 'diagnose'||'study'" @show="popUpOpen" @hide="hideInfo" id="clearAllPopup" centered title="진단테스트 : 전체 그림 지우기" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">다시 그리시겠어요?<br/>
        지금 그린 그림이 지워져요</p>
      <p class="text-sm">제출하면 파블로가 그림을 분석할 거예요 :)</p>
      <template #modal-footer="{ cancel }">
        <b-button @click="cancel" variant="blue" class="btn-half">제출할게요</b-button>
        <b-button @click="clear" variant="black" class="btn-half">다시 그릴게요!</b-button>
      </template>
    </b-modal>

<!--    <b-button v-if="page === 'diagnose'" v-b-modal.normalPopup3 style="position: absolute; top: 200px; left: 350px;">진단테스트_3_제출팝업</b-button>-->
    <b-modal v-if="page === 'diagnose'||'study'" @hide="timerStart" @show="popUpOpen" id="normalPopup3" centered title="마케팅 관련 정보 수신 동의" modal-class="normalPopup">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/check_red@2x.png" alt=""></div>
      </template>
      <p class="text">다 그렸나요?<br/>
        제출하면 수정할 수 없어요!</p>
      <p class="text-sm">더 그리고 싶은 것은 없는지 생각해봐요</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="gray" class="btn-half" @click="cancel">제출할게요</b-button>
        <b-button variant="black" class="btn-half" @click=cancel() >더 그릴게요!</b-button>
      </template>
    </b-modal>

    <!-- s 팝업  -->

<!--    <b-button v-if="page === 'study'" v-b-modal.studyBookPopup style="position: absolute; top: 200px; left: 500px;" @click="popUpOpen">배경교제</b-button>-->
    <b-modal v-if="page === 'study'" :visible="true" @show="popUpOpen" @hide="hideInfo" id="studyBookPopup" centered hide-footer modal-class="studyBookPopup">
      <template #default="{ hide,cancel }">
        <button class="btn-close" @click="hide()"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
        <div class="content">
          <div class="c-header">
            <p class="title">배경교재 선택하기</p>
            <p class="desc">그리고 싶은 배경교재를 선택하고, 캔버스에서 그려보세요!</p>
          </div>
          <div class="c-body">
            <ul class="scroll">
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
              <li>
                <div @click="cancel">
                  <span class="img"><img src="@/assets/images/temp/sample_img_02.png" alt=""></span>
                  <span class="tit-sm">배경교재1</span>
                  <span class="tit">사람들이 오늘은 무슨 신발을 신었을까?</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </b-modal>
    <!-- e 팝업  -->

    <b-modal v-if="page==='diagnose'" :visible="true" @show="popUpOpen" @hide="timerStart" id="oderPopup" centered title="안내" modal-class="textPopup" scrollable ok-only ok-title="네 그려볼게요!" ok-variant="black btn-block">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/Symbol@2x.png" alt=""></div>
      </template>
      <p class="text">2분안에 자유롭게<br/>
        나무를 그려보세요</p>
      <template #modal-footer="{ cancel }">
        <button size="sm" variant="btn black btn-block" @click="cancel()">알겠어요!</button>
      </template>
    </b-modal>
<!--주제보기-->
    <b-modal id="watchSubject" centered modal-class="normalPopup" @hide="hideInfo">
      <template #modal-header>
        <div class="symbol"><img src="@/assets/images/common/drawing@2x.png" alt=""></div>
      </template>
      <p class="text text-md">학습 주제 영역입니다.<br/>
        학습 주제는 최대 세 문장까지<br/>
        가능합니다.</p>
      <p class="text-sm">생각 제시하는 생각 과제 제시하는 텍스트<br/>
        영역으로 최대 두줄 이상을 생각합니다.</p>
      <template #modal-footer="{ cancel }">
        <b-button class="btn btn-block btn-black" @click="cancel()">닫기</b-button>
      </template>
    </b-modal>

<!--    영상보기-->
    <b-modal id="videoReviewPopup" centered hide-footer modal-class="videoReviewPopup" @hide="hideInfo">
      <template #default="{ hide }">
        <div class="bg"><img src="@/assets/images/temp/sample_img_02.png" alt=""></div>
        <div class="full-screen dim"><!-- 전체 화면시 dim 제거 -->
          <div class="inner">
            <div class="video">
              <p class="text">생각 제시하는 생각 과제 제시하는 텍스트 영역입니다.</p>
              <button class="btn-close" @click="hide()"><img src="@/assets/images/common/close_dim@2x.png" alt=""></button>
              <!-- s 전체 화면시 hide -->
              <div class="play-wrap">
                <button class="btn-rewind"><img src="@/assets/images/common/5s_rewind@2x.png" alt=""></button>
                <button class="btn-pause"><img src="@/assets/images/common/pause@2x.png" alt=""></button>
                <button class="btn-play"><img src="@/assets/images/common/btn_play@2x.png" alt=""></button>
                <button class="btn-forward"><img src="@/assets/images/common/5s_forward@2x.png" alt=""></button>
              </div>
              <div class="progress-wrap">
                <div class="inner">
                  <span class="time">2:40</span>
                  <div class="progress-inner">
                    <span class="bar" style="width: 30%"></span>
                  </div>
                  <span class="playtime">2:40</span>
                  <button class="btn-full-screen"><img src="@/assets/images/common/btn_full_screen@2x.png" alt="">
                  </button>
                </div>
              </div>
              <!-- e 전체 화면시 hide -->
            </div>
          </div>
          <!-- e 영상 재생 중_화면 탭 시 -->

        </div>
      </template>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: 'Canvas',
  data () {
    return {
      isLoading: false,
      timeInitVal: 60*2,
      time: 60*2, // TODO: default 60*2
      timer: null,
      timeOver : false,

      color:{
        size : 5
      }



    }
  },
  mounted () {
    if (localStorage.getItem('isReload') === 'true' || localStorage.getItem('isReload') === undefined) window.location.reload()
    else this.isLoading = true
    this.timerStart()

  },
  computed: {
    page() {
      return this.$router.currentRoute.query.page
    },

    timeRemains() {
      let mm = Math.floor(this.time / 60)
      mm = mm < 10 ? '0' + mm : mm
      let ss = this.time % 60
      ss = ss < 10 ? '0' + ss : ss
      return `${mm} : ${ss}`
    },

  },
  methods: {
    reload(){
      window.location.reload()
    },
    timerStart() {
      this.timeOver=false
      this.timer = setInterval(() => {
        if (this.time === 0) {
          this.timeOver=true
          clearInterval(this.timer)
          // if (this.page === 'diagnose') {
          //   this.$router.push('/LoadingSpinnerWaiting')
          // }
          if (this.page === 'study') {
            this.$router.push('/PabloStudy6')
          }
        }
        if(this.time>0){
          this.time--
        }

      }, 1000)
    },
    reset() {
      this.time = this.timeInitVal
      clearInterval(this.timer)
      this.timer = null
    },
    goNext() {
      this.reset()
      if (this.page === 'diagnose') {
        this.$router.push('/LoadingSpinnerWaiting')
      }
      else if (this.page === 'study') {
        this.$router.push('/PabloStudy6')
      }
    },
    goBack(){
      this.reset()
      if (this.page === 'study') {
        this.$router.push('/peopleThinking')
      }
    },
    close(){
      this.reset()
      this.$router.push('/')
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
    clear(){
      WILL.clear()
      this.$bvModal.hide('clearAllPopup')
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
  position: absolute;
  top: 140px;
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
