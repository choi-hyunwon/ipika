<template>
  <div>
    <div class="Wrapper" style="height: 100%;">
      <canvas id="canvas_images" oncontextmenu="event.preventDefault();"
              style="position: absolute; left: 0; top: 0; display: none;"></canvas>
      <canvas id="canvas2d" oncontextmenu="event.preventDefault();"
              style="position: absolute; left: 0; top: 0; display: none;"></canvas>
      <canvas id="canvas_transform" oncontextmenu="event.preventDefault();"
              style="position: absolute; left: 0; top: 0; display: none;"></canvas>
      <canvas id="canvas_image" oncontextmenu="event.preventDefault();"
              style="position: absolute; left: 0; top: 0; display: none;"></canvas>
      <canvas id="canvas" oncontextmenu="event.preventDefault();" width="100%" height="100%" style="position: relative; z-index: 10;"></canvas>
      <div class="layer_bg" style="width: 100%;height: 100%; position:absolute;top: 0;left: 0; z-index: 1"></div>
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
    <nav class="nav" :class="{'show': drawer === true, 'hide': drawer=== false, 'visible': isLoadingGuide=== true}" style="z-index: 100; opacity:0"><!-- show/hide -->
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
              <button class="color" style="background-color: #8551d3"
                      @click="setColorSelect"
              ></button>
              <button class="color selected" style="background-color: #444444"
                      @click="setColorSelect"
              ></button>
              <button class="color colorpicker"
                      @click='setColorSelect($event); isPickerOpen()'
              ></button>
            </div>
            <div class="tool">
              <button id="Pencil" @click="setTool" class="tool-item pencil selected">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="172" fill="none" viewBox="0 0 80 172">
                  <g filter="url(#filter0_i)">
                    <path fill="url(#paint0_linear)" d="M19 92.941V91.06l13.176-48.941h15.06l13.176 48.94v1.883H19z"/>
                  </g>
                  <path fill="url(#paint1_linear)" d="M19 91.059h41.412V172H19V91.059z"/>
                  <mask id="l02p61p25a" width="42" height="160" x="19" y="12" maskUnits="userSpaceOnUse">
                    <path fill="url(#paint2_linear)" d="M19 91.059l13.176-48.941L39.706 12l7.53 30.118 13.176 48.94V172H19V91.059z"/>
                  </mask>
                  <g mask="url(#l02p61p25a)">
                    <g filter="url(#filter1_f)">
                      <path fill="#F4F4F4" d="M30 95.5c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5V172H30V95.5z"/>
                    </g>
                    <g filter="url(#filter2_if)">
                      <path fill="#E1E1E1" d="M19 91.5c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5V172H19V91.5z"/>
                    </g>
                    <g filter="url(#filter3_if)">
                      <path fill="url(#paint3_linear)" d="M49 91.5c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5V172H49V91.5z"/>
                    </g>
                    <path fill="#181818" d="M32.176 42.118l6.56-26.237c.252-1.01 1.687-1.01 1.94 0l6.56 26.237h-15.06z"/>
                    <path class="topColor" fill="url(#paint4_linear)" d="M32.176 42.118l6.56-26.237c.252-1.01 1.687-1.01 1.94 0l6.56 26.237h-15.06z"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear" x1="19" x2="60.412" y1="95.636" y2="95.636" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="19" x2="60.412" y1="95.636" y2="95.636" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="19" x2="60.412" y1="95.636" y2="95.636" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear" x1="46.25" x2="61.833" y1="128" y2="128" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E7E7E7"/>
                      <stop offset="1" stop-color="#E7E7E7"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear" x1="32.176" x2="47.235" y1="28.732" y2="28.732" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#1D1D1D"/>
                      <stop offset=".497" stop-color="#585858"/>
                      <stop offset="1" stop-color="#313131"/>
                    </linearGradient>
                    <filter id="filter0_i" width="42.412" height="51.824" x="19" y="42.118" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dx="1" dy="1"/>
                      <feGaussianBlur stdDeviation=".5"/>
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"/>
                      <feBlend in2="shape" result="effect1_innerShadow"/>
                    </filter>
                    <filter id="filter1_f" width="21" height="88" x="29" y="85" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur" stdDeviation=".5"/>
                    </filter>
                    <filter id="filter2_if" width="13" height="88" x="18" y="85" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dx="-1"/>
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
                      <feBlend in2="shape" result="effect1_innerShadow"/>
                      <feGaussianBlur result="effect2_foregroundBlur" stdDeviation=".5"/>
                    </filter>
                    <filter id="filter3_if" width="13" height="88" x="48" y="85" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dx="-1"/>
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
                      <feBlend in2="shape" result="effect1_innerShadow"/>
                      <feGaussianBlur result="effect2_foregroundBlur" stdDeviation=".5"/>
                    </filter>
                  </defs>
                </svg>
              </button>
              <button id="Felt" @click.capture="setTool"  class="tool-item ballpen">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="172" fill="none" viewBox="0 0 80 172">
                  <path fill="url(#paint0_linear20)" d="M18 94H62V172H18z"/>
                  <path fill="url(#paint1_linear20)" d="M37.52 13.941L18.274 91.755C18.092 92.489 18 93.243 18 94h44c0-.757-.092-1.511-.274-2.246L42.48 13.94C42.198 12.802 41.175 12 40 12s-2.198.801-2.48 1.941z"/>
                  <mask id="atd5oj4r7a20" width="44" height="82" x="18" y="12" maskUnits="userSpaceOnUse">
                    <path fill="url(#paint2_linear20)" d="M37.52 13.941L18.274 91.755C18.092 92.489 18 93.243 18 94h44c0-.757-.092-1.511-.274-2.246L42.48 13.94C42.198 12.802 41.175 12 40 12s-2.198.801-2.48 1.941z"/>
                  </mask>
                  <g mask="url(#atd5oj4r7a20)">
                    <path class="topColor" fill="#181818" d="M30 7h20v19H30V7z"/>
                    <path class="topColor" fill="url(#paint3_linear20)" d="M30 7h20v19H30V7z"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear20" x1="18" x2="62" y1="158.409" y2="158.409" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2E2E2E"/>
                      <stop offset=".047" stop-color="#393939"/>
                      <stop offset=".146" stop-color="#212121"/>
                      <stop offset=".573" stop-color="#5A5A5A"/>
                      <stop offset=".906" stop-color="#2C2C2C"/>
                      <stop offset="1" stop-color="#363636"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear20" x1="18" x2="62" y1="62.182" y2="62.182" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear20" x1="18" x2="62" y1="62.182" y2="62.182" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear20" x1="30" x2="50" y1="17.556" y2="17.556" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#1D1D1D"/>
                      <stop offset=".497" stop-color="#585858"/>
                      <stop offset="1" stop-color="#313131"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <button id="InkBrush" @click.capture="setTool"  class="tool-item inkpen">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="172" fill="none" viewBox="0 0 80 172">
                  <g filter="url(#filter0_d30)">
                    <path class="topColor" fill="url(#paint0_linear30)" d="M41.408 10.971c-.357-.775-1.459-.775-1.816 0L19 55.659 27.875 101H53.126L62 55.658 41.408 10.971zm-.36 59.55c-4.208 0-7.593-3.48-7.593-7.807 0-4.328 3.385-7.808 7.594-7.808 4.208 0 7.594 3.48 7.594 7.808 0 4.327-3.386 7.808-7.594 7.808z"/>
                  </g>
                  <path fill="url(#paint1_linear30)" d="M26.5 94h28l6.75 36L64 172H16l3.25-42 7.25-36z"/>
                  <defs>
                    <linearGradient id="paint0_linear30" x1="19" x2="62" y1="57.091" y2="57.091" gradientUnits="userSpaceOnUse">
                      <stop offset=".089" stop-color="#CFCFCF"/>
                      <stop offset=".214" stop-color="#EBEBEB"/>
                      <stop offset=".396" stop-color="#D5D5D5"/>
                      <stop offset=".599" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#E6E6E6"/>
                      <stop offset="1" stop-color="#DBDBDB"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear30" x1="16" x2="64" y1="158.409" y2="158.409" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2E2E2E"/>
                      <stop offset=".047" stop-color="#393939"/>
                      <stop offset=".146" stop-color="#212121"/>
                      <stop offset=".573" stop-color="#5A5A5A"/>
                      <stop offset=".906" stop-color="#2C2C2C"/>
                      <stop offset="1" stop-color="#363636"/>
                    </linearGradient>
                    <filter id="filter0_d30" width="51" height="100.611" x="15" y="10.389" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="6"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </button>
              <button id="Marker" @click.capture="setTool"  class="tool-item marker">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="172" fill="none" viewBox="0 0 80 172">
                  <path fill="#E7686F" d="M27 25.694V38h24V13.647c0-.75-.796-1.233-1.461-.887L28.077 23.92c-.662.344-1.077 1.028-1.077 1.774z"/>
                  <path class="topColor" fill="url(#paint0_linear40)" d="M27 25.694V38h24V13.647c0-.75-.796-1.233-1.461-.887L28.077 23.92c-.662.344-1.077 1.028-1.077 1.774z"/>
                  <path fill="url(#paint1_linear40)" d="M17 85.187V172h44V85.187c0-2.089-.545-4.14-1.581-5.954l-4.838-8.466C53.545 68.954 53 66.902 53 64.813V38H25v26.813c0 2.089-.545 4.14-1.581 5.954l-4.838 8.466C17.545 81.046 17 83.098 17 85.187z"/>
                  <path fill="url(#paint2_linear40)" d="M17 94H61V106H17z"/>
                  <defs>
                    <linearGradient id="paint0_linear40" x1="27" x2="51" y1="26.444" y2="26.444" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#202020"/>
                      <stop offset=".497" stop-color="#555"/>
                      <stop offset="1" stop-color="#363636"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear40" x1="17" x2="61" y1="74.591" y2="74.591" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear40" x1="17" x2="61" y1="103.909" y2="103.909" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2E2E2E"/>
                      <stop offset=".047" stop-color="#393939"/>
                      <stop offset=".146" stop-color="#212121"/>
                      <stop offset=".573" stop-color="#5A5A5A"/>
                      <stop offset=".906" stop-color="#2C2C2C"/>
                      <stop offset="1" stop-color="#363636"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <button id="WaterBrush" @click.stop="setTool"  class="tool-item brush_style2">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="173" fill="none" viewBox="0 0 80 173">
                  <path class="topColor" fill="url(#paint0_linear50)" d="M51.85 47.794l-1.753-8.99C48.178 30.307 45.007 20.99 40 12c-5.007 8.99-8.178 18.306-10.097 26.805l-1.753 8.99c-1.168 7.845-1.252 14.22-1.085 17.815.418 8.335 1.92 16.59 3.505 24.762.584 3.023 1.252 6.047 2.754 8.499 1.753 2.697 4.34 4.331 6.676 6.129 2.337-1.798 4.923-3.432 6.676-6.13 1.502-2.45 2.17-5.475 2.754-8.498 1.585-8.172 3.087-16.427 3.505-24.762.166-3.596.083-9.97-1.085-17.816z"/>
                  <path fill="url(#paint1_linear50)"
                        d="M55.9 168.814c-.1-.3-.1-.5-.3-.8l-2-3.7-1.2-2.2c-.2-.5-.3-1-.3-1.5s.1-1.1.3-1.5l2.4-4.2c.1-.3.2-.7.3-1 0-.2.1-.4.1-.7 0-.5-.1-1.1-.4-1.5l-2.6-4.9c-.2-.5-.4-1-.4-1.5v-.2c.1-.4.2-.8.4-1.1l2.3-4.4.8-1.5v-1.3-3.8c.1-5.7 0-5.3-.1-16.1-.2-21-.6-24.3-1.5-32.2-.1-1-.2-1.6-.3-2-.1-.2-.3-.5-.6-.8-2.3-2.1-5.4-4.1-12.8-3.9-7.4-.1-10.5 1.9-12.8 3.9-.3.3-.5.6-.6.8-.1.4-.2 1.1-.3 2-1 7.9-1.4 9.2-1.5 32.2-.1 10.8-.2 10.4-.1 16.1v5.1l.8 1.5 2.3 4.4c.2.3.3.7.4 1.1v.2c0 .5-.1 1-.4 1.5l-2.6 4.9c-.2.5-.4 1-.4 1.5 0 .2 0 .4.1.7 0 .4.1.7.3 1l2.4 4.2c.2.5.3 1 .3 1.5s-.1 1.1-.3 1.5l-1.2 2.2-2 3.7c-.1.3-.2.5-.3.8-.1.3-.1.5-.1.8 0 1.3.6 2.5 1.5 2.5h29c.9 0 1.5-1.2 1.5-2.5 0-.3 0-.6-.1-.8z"/>
                  <mask id="ml36yyb4ba" width="32" height="95" x="24" y="78" maskUnits="userSpaceOnUse">
                    <path fill="url(#paint2_linear50)"
                          d="M55.9 168.814c-.1-.3-.1-.5-.3-.8l-2-3.7-1.2-2.2c-.2-.5-.3-1-.3-1.5s.1-1.1.3-1.5l2.4-4.2c.1-.3.2-.7.3-1 0-.2.1-.4.1-.7 0-.5-.1-1.1-.4-1.5l-2.6-4.9c-.2-.5-.4-1-.4-1.5v-.2c.1-.4.2-.8.4-1.1l2.3-4.4.8-1.5v-1.3-3.8c.1-5.7 0-5.3-.1-16.1-.2-21-.6-24.3-1.5-32.2-.1-1-.2-1.6-.3-2-.1-.2-.3-.5-.6-.8-2.3-2.1-5.4-4.1-12.8-3.9-7.4-.1-10.5 1.9-12.8 3.9-.3.3-.5.6-.6.8-.1.4-.2 1.1-.3 2-1 7.9-1.4 9.2-1.5 32.2-.1 10.8-.2 10.4-.1 16.1v5.1l.8 1.5 2.3 4.4c.2.3.3.7.4 1.1v.2c0 .5-.1 1-.4 1.5l-2.6 4.9c-.2.5-.4 1-.4 1.5 0 .2 0 .4.1.7 0 .4.1.7.3 1l2.4 4.2c.2.5.3 1 .3 1.5s-.1 1.1-.3 1.5l-1.2 2.2-2 3.7c-.1.3-.2.5-.3.8-.1.3-.1.5-.1.8 0 1.3.6 2.5 1.5 2.5h29c.9 0 1.5-1.2 1.5-2.5 0-.3 0-.6-.1-.8z"/>
                  </mask>
                  <g mask="url(#ml36yyb4ba50)" opacity=".4">
                    <g clip-path="url(#clip050)" opacity=".2">
                      <path fill="url(#paint3_linear50)"
                            d="M23.695 11.036c-1.135 4.97-2.27 120.653-1.702 129.626 0 .415.142.691.284 1.105l2.836 5.108c.425.69.425 1.932 0 2.622l-2.411 4.28c-.425.828-.425 1.933 0 2.761l2.127 3.727c.426.828.426 1.933 0 2.761l-2.836 5.384c-.71 1.518-.142 3.589.993 3.589h34.178c1.276 0 1.843-2.209.993-3.727l-2.979-5.384c-.425-.828-.425-2.071 0-2.761l2.128-3.865c.425-.828.425-1.933 0-2.761l-2.411-4.28c-.426-.828-.426-1.932 0-2.622l2.836-5.108c.142-.276.284-.69.284-1.105.567-9.111-.284-124.794-1.844-129.626-1.276-3.727-31.625-3.59-32.476.276z"/>
                      <path fill="url(#paint4_linear50)" d="M56.739 154.882c-.71 0-2.695-5.798-3.688-6.212-2.41-1.104-24.109-.69-25.81 0-1.277.552-4.113 3.727-4.68 5.798-.142 2.071 11.061.828 34.178.414z"/>
                      <path fill="url(#paint5_linear50)" d="M25.68 168.963c1.702.276 26.946-.414 31.484-.276-.142-.828-2.695-6.074-3.687-6.488-2.411-1.105-24.677-.69-26.237 0-1.276.552-3.403 2.347-3.97 4.555-.426 1.933 1.276 2.071 2.41 2.209z"/>
                      <path fill="url(#paint6_linear50)" d="M57.59 140.939c-3.688 2.209-26.237 2.623-35.03.553 2.127 3.727 5.106 6.35 7.233 6.488 5.672.138 19.854-.138 23.258.276 1.418-.276 2.27-4.418 4.538-7.317z" opacity=".4"/>
                      <path fill="url(#paint7_linear50)" d="M55.887 155.987c-.709-.967-1.843-.829-2.836-.829-8.51.553-20.706 1.243-30.066.691-2.41-.138 4.539 4.555 6.666 4.555 5.814.138 20.564-.552 21.982-.276.425.138.85.138 1.418 0 1.418-.276 2.269-2.209 2.836-4.141z" opacity=".4"/>
                      <g fill="#fff" opacity=".7">
                        <g opacity=".7">
                          <path d="M36.458 152.812c-5.247 0-10.21.138-14.89.138-.143 1.104-.285 2.07-.426 3.175 4.821 0 10.069.138 15.458.138 7.942 0 14.89-.138 21.414-.276.142-.967.284-2.071.568-2.899-6.382-.138-14.04-.276-22.124-.276z" opacity=".016"/>
                          <path d="M36.458 152.949c-5.247 0-10.21.138-14.89.138-.143.966-.285 2.07-.426 3.037 4.821 0 9.927.138 15.458.138 7.942 0 14.89-.138 21.556-.276.142-.967.284-1.933.567-2.899-6.381-.138-14.181-.138-22.265-.138z" opacity=".033"/>
                          <path d="M36.458 152.949c-5.247 0-10.353.138-14.89.138-.143.966-.285 2.07-.426 3.037 4.821 0 9.927.138 15.458.138 7.942 0 15.032-.138 21.556-.276.142-.967.284-1.933.567-2.761-6.381-.138-14.181-.276-22.265-.276z" opacity=".049"/>
                          <path d="M36.458 152.949c-5.247 0-10.353.138-14.89.138-.143.966-.285 1.932-.426 2.899 4.821 0 9.927.138 15.458.138 7.942 0 15.032-.138 21.556-.276.142-.967.284-1.795.567-2.761-6.381 0-14.181-.138-22.265-.138z" opacity=".066"/>
                          <path d="M36.458 152.949c-5.247 0-10.353.138-14.89.138-.143.966-.285 1.932-.426 2.899 4.821 0 9.927.138 15.458.138 7.942 0 15.032-.138 21.556-.276.142-.967.284-1.795.567-2.623-6.381-.138-14.181-.276-22.265-.276z" opacity=".082"/>
                          <path d="M36.458 153.088c-5.247 0-10.353.138-14.89.138-.143.966-.285 1.932-.426 2.899 4.821 0 9.927.138 15.458.138 7.942 0 15.032-.138 21.556-.276.142-.967.284-1.795.426-2.623-6.24-.276-14.04-.276-22.124-.276z" opacity=".098"/>
                          <path d="M36.458 153.088c-5.39 0-10.353.138-14.89.138-.143.966-.285 1.794-.426 2.761 4.68 0 9.927.138 15.458.138 8.083 0 15.174-.138 21.556-.276.142-.829.284-1.795.426-2.485-6.24-.276-14.04-.276-22.124-.276z" opacity=".115"/>
                          <path d="M36.458 153.088c-5.39 0-10.353.138-14.89.138-.143.966-.285 1.794-.426 2.761 4.68 0 9.927.138 15.458.138 8.083 0 15.174-.138 21.556-.276l.426-2.485c-6.24-.138-13.899-.276-22.124-.276z" opacity=".131"/>
                          <path d="M36.458 153.088c-5.39 0-10.353.138-14.89.138-.143.966-.285 1.794-.426 2.623 4.68 0 9.927.138 15.458.138 8.083 0 15.174-.138 21.556-.276.142-.829.284-1.657.426-2.347-6.099-.138-13.899-.276-22.124-.276z" opacity=".147"/>
                          <path d="M36.458 153.088c-5.39 0-10.353.138-14.89.138-.143.828-.285 1.656-.426 2.623 4.68 0 9.927.138 15.458.138 8.083 0 15.316-.138 21.556-.276.142-.829.284-1.657.426-2.347-6.099-.138-13.899-.276-22.124-.276z" opacity=".164"/>
                          <path d="M36.458 153.088c-5.39 0-10.353.138-14.89.138-.143.828-.285 1.656-.426 2.485 4.68 0 9.927.138 15.316.138 8.084 0 15.316-.138 21.556-.277.142-.828.284-1.518.426-2.208-5.957-.138-13.757-.276-21.982-.276z" opacity=".18"/>
                          <path d="M36.458 153.226c-5.389.138-10.352.138-15.032.138L21 155.848c4.68 0 9.785.139 15.316.139 8.226 0 15.459-.139 21.557-.277.142-.69.283-1.518.425-2.208-5.814-.276-13.614-.276-21.84-.276z" opacity=".197"/>
                          <path d="M36.458 153.226c-5.389 0-10.352 0-15.032.138-.142.828-.284 1.656-.426 2.346 4.68.138 9.785.138 15.316.138 8.226 0 15.459-.138 21.557-.276.142-.69.283-1.518.425-2.07-5.814-.138-13.473-.276-21.84-.276z" opacity=".213"/>
                          <path d="M36.458 153.226c-5.389 0-10.352 0-15.032.138-.142.828-.284 1.518-.426 2.346 4.68.138 9.785.138 15.316.138 8.226 0 15.6-.138 21.557-.276.142-.69.283-1.38.283-2.07-5.53-.138-13.33-.276-21.698-.276z" opacity=".23"/>
                          <path d="M36.458 153.226c-5.39 0-10.495 0-15.033.138-.142.69-.283 1.518-.283 2.208 4.68.138 9.785.138 15.316.138 8.367 0 15.6-.138 21.556-.276.142-.69.284-1.38.284-1.932-5.673-.138-13.473-.276-21.84-.276z" opacity=".246"/>
                          <path d="M36.458 153.226c-5.39 0-10.495 0-15.033.138-.142.69-.283 1.518-.283 2.208 4.68.138 9.785.138 15.316.138 8.367 0 15.742-.138 21.556-.276.142-.69.284-1.38.284-1.932-5.673-.138-13.473-.276-21.84-.276z" opacity=".262"/>
                          <path d="M36.458 153.364c-5.39 0-10.495 0-15.033.138-.142.69-.283 1.38-.283 2.209 4.538.138 9.785.138 15.316.138 8.367 0 15.742-.138 21.556-.276.142-.553.284-1.243.284-1.795-5.53-.276-13.33-.414-21.84-.414z" opacity=".279"/>
                          <path d="M36.458 153.364c-5.39 0-10.495.138-15.033.138-.142.69-.283 1.38-.283 2.071 4.538.138 9.785.138 15.316.138 8.367 0 15.884-.138 21.556-.277.142-.552.142-1.242.284-1.794-5.53-.138-13.33-.276-21.84-.276z" opacity=".295"/>
                          <path d="M36.458 153.364c-5.39 0-10.495.138-15.033.138-.142.69-.283 1.38-.283 2.071 4.538.138 9.785.138 15.316.138 8.51 0 15.884-.138 21.556-.277.142-.552.142-1.104.284-1.656-5.39-.276-13.33-.414-21.84-.414z" opacity=".311"/>
                          <path d="M36.458 153.364c-5.53 0-10.495 0-15.033.138-.142.69-.283 1.38-.283 1.932 4.538.139 9.643.139 15.316.139 8.51 0 16.025-.139 21.556-.415.142-.552.142-1.104.284-1.518-5.39-.138-13.19-.276-21.84-.276z" opacity=".328"/>
                          <path d="M36.458 153.502c-3.829 0-7.516 0-10.92.138-1.418 0-2.694 0-3.97.138-.143.69-.284 1.242-.284 1.932 1.418 0 2.836 0 4.396.138 3.404 0 7.091 0 10.92.139 8.651 0 16.167-.138 21.556-.415.142-.552.142-1.104.284-1.518-5.389-.414-13.33-.552-21.982-.552z" opacity=".344"/>
                          <path d="M36.458 153.502c-3.97 0-7.8 0-11.204.138-1.276 0-2.552.138-3.829.138-.142.552-.283 1.242-.283 1.794 1.276 0 2.694.138 4.112.138 3.404 0 7.233 0 11.204.139 8.65 0 16.31-.139 21.698-.415.142-.552.142-.966.284-1.38-5.247-.414-13.19-.552-21.982-.552z" opacity=".361"/>
                          <path d="M36.458 153.502c-3.829 0-7.516 0-10.92.138-1.418 0-2.694.138-3.97.138-.143.552-.284 1.104-.284 1.794 1.418 0 2.836.138 4.396.138 3.404 0 7.091 0 10.92.139 8.793 0 16.451-.139 21.698-.415.142-.414.142-.966.284-1.38-5.247-.414-13.331-.552-22.124-.552z" opacity=".377"/>
                          <path d="M36.458 153.502c-5.53 0-10.778.138-15.033.138 0 .552-.142 1.104-.283 1.794 4.396.138 9.643.138 15.316.138 8.793 0 16.593-.138 21.698-.414.142-.414.142-.828.284-1.242-4.964-.276-13.047-.414-21.982-.414z" opacity=".393"/>
                          <path d="M36.458 153.502c-5.53 0-10.778.138-15.033.138 0 .552-.142 1.104-.283 1.656 4.396.138 9.643.138 15.316.138 8.934 0 16.876-.138 21.698-.414 0-.414.142-.828.142-1.104-4.68-.276-12.764-.414-21.84-.414z" opacity=".41"/>
                          <path d="M36.458 153.502c-5.673 0-10.778.138-15.033.138 0 .552-.142 1.104-.283 1.518 4.254.138 9.501.138 15.316.138 9.076 0 17.018-.138 21.698-.414.142-.276.142-.69.142-1.104-4.538 0-12.622-.276-21.84-.276z" opacity=".426"/>
                          <path d="M36.458 153.64c-5.673 0-10.778.138-15.033.138 0 .552-.142.966-.283 1.518 4.254.138 9.501.138 15.316.138 9.36 0 17.302-.138 21.698-.552.142-.276.142-.69.142-.966-4.255-.138-12.338-.276-21.84-.276z" opacity=".443"/>
                          <path d="M36.458 153.64c-5.673 0-10.92.138-15.033.138 0 .552-.142.966-.283 1.38 4.254.138 9.501.276 15.316.276 9.502 0 17.727-.276 21.698-.552 0-.276.142-.552.142-.828-3.97-.276-12.196-.414-21.84-.414z" opacity=".459"/>
                          <path d="M36.458 153.64c-5.673 0-10.92.138-15.033.138 0 .414-.142.966-.283 1.38 4.112.138 9.36.138 15.316.138 9.785 0 18.01-.276 21.698-.552 0-.276.142-.414.142-.69-3.546-.138-11.913-.414-21.84-.414z" opacity=".475"/>
                          <path d="M36.458 153.64c-5.815 0-10.92.138-15.033.276 0 .414-.142.828-.283 1.242 4.112.138 9.36.276 15.316.276 10.21 0 18.72-.276 21.698-.552 0-.138 0-.414.142-.552-2.836-.414-11.487-.69-21.84-.69z" opacity=".492"/>
                          <path d="M36.458 153.64c-5.815 0-11.062.138-15.033.276 0 .414-.142.828-.283 1.242 3.97.138 9.36.276 15.174.276 10.778 0 19.571-.276 21.698-.69v-.276c-1.702-.414-10.636-.828-21.556-.828z" opacity=".508"/>
                          <path d="M36.458 153.778c-5.815 0-11.204.138-15.033.276 0 .414-.142.69-.283 1.104 3.829.138 9.218.276 15.174.276 11.913 0 21.415-.414 21.415-.828.283-.552-9.36-.828-21.273-.828z" opacity=".525"/>
                          <path d="M36.458 153.778c-5.814 0-10.92.138-14.607.276h-.284c0 .414-.142.69-.283 1.104h.567c3.83.138 8.934.276 14.607.276 11.488 0 20.706-.414 20.706-.828.142-.552-9.218-.828-20.706-.828z" opacity=".541"/>
                          <path d="M36.458 153.778c-5.53 0-10.494.138-14.182.276h-.85c0 .276-.142.69-.142.966 3.687.138 9.076.276 15.174.276 11.062 0 19.997-.276 19.997-.69.141-.414-8.935-.828-19.997-.828z" opacity=".557"/>
                          <path d="M36.458 153.778c-6.098 0-11.487.138-15.032.276 0 .276-.142.552-.142.966 3.545.138 8.934.276 15.174.276 10.637 0 19.288-.276 19.288-.69 0-.414-8.651-.828-19.288-.828z" opacity=".574"/>
                          <path d="M36.458 153.916c-6.24 0-11.629.138-15.032.276 0 .276-.142.552-.142.828 3.403.138 8.934.276 15.174.276 10.211 0 18.578-.276 18.578-.69 0-.414-8.225-.69-18.578-.69z" opacity=".59"/>
                          <path d="M36.458 153.916c-6.382 0-11.912.138-15.032.276 0 .276-.142.414-.142.69 3.12.138 8.792.276 15.174.276 9.786 0 17.87-.276 17.87-.69 0-.276-7.943-.552-17.87-.552z" opacity=".607"/>
                          <path d="M36.458 153.916c-6.523 0-12.196.138-15.032.276 0 .138-.142.414-.142.552 2.836.138 8.509.276 15.174.276 9.36 0 17.16-.276 17.16-.69 0-.138-7.658-.414-17.16-.414z" opacity=".623"/>
                          <path d="M36.458 153.916c-6.807 0-12.622.138-15.032.414 0 .138-.142.276-.142.414 2.41.276 8.225.414 15.174.414 9.077 0 16.31-.276 16.31-.552s-7.233-.69-16.31-.69z" opacity=".639"/>
                          <path d="M36.458 153.916c-7.232 0-13.33.138-15.032.414 0 .138 0 .138-.142.276 1.701.276 7.8.414 15.174.414 8.651 0 15.6-.276 15.6-.552.142-.276-6.949-.552-15.6-.552z" opacity=".656"/>
                          <path d="M21.567 154.606c0-.276 6.666-.552 14.891-.552 8.226 0 14.891.276 14.891.552s-6.665.552-14.89.552c-8.226 0-14.892-.276-14.892-.552z" opacity=".672"/>
                          <path d="M22.276 154.606c0-.276 6.382-.552 14.182-.552 7.8 0 14.182.276 14.182.552s-6.382.552-14.182.552c-7.8 0-14.182-.276-14.182-.552z" opacity=".689"/>
                          <path d="M22.985 154.606c0-.276 5.957-.552 13.473-.552 7.516 0 13.473.276 13.473.552s-5.957.552-13.473.552c-7.374-.138-13.473-.276-13.473-.552z" opacity=".705"/>
                          <path d="M23.694 154.606c0-.276 5.673-.552 12.764-.552 7.09 0 12.764.276 12.764.552s-5.673.414-12.764.414c-6.95 0-12.764-.138-12.764-.414z" opacity=".721"/>
                          <path d="M24.545 154.606c0-.276 5.39-.414 12.055-.414s12.054.138 12.054.414c0 .276-5.389.414-12.054.414-6.807 0-12.055-.276-12.055-.414z" opacity=".738"/>
                          <path d="M25.254 154.606c0-.276 5.106-.414 11.204-.414 6.24 0 11.204.138 11.204.414 0 .276-5.106.414-11.204.414-6.24 0-11.204-.276-11.204-.414z" opacity=".754"/>
                          <path d="M25.963 154.606c0-.276 4.68-.414 10.495-.414 5.815 0 10.495.138 10.495.414 0 .276-4.68.414-10.495.414-5.815-.138-10.495-.276-10.495-.414z" opacity=".77"/>
                          <path d="M26.673 154.606c0-.276 4.396-.414 9.785-.414 5.39 0 9.786.138 9.786.414 0 .138-4.397.414-9.786.414-5.389-.138-9.785-.276-9.785-.414z" opacity=".787"/>
                          <path d="M27.382 154.606c0-.138 4.113-.414 9.076-.414 4.964 0 9.077.138 9.077.414 0 .138-4.113.276-9.077.276-4.963 0-9.076-.138-9.076-.276z" opacity=".803"/>
                          <path d="M28.09 154.606c0-.138 3.688-.276 8.368-.276s8.367.138 8.367.276-3.687.276-8.367.276c-4.538 0-8.367-.138-8.367-.276z" opacity=".82"/>
                          <path d="M28.942 154.606c0-.138 3.404-.276 7.658-.276 4.255 0 7.658.138 7.658.276s-3.403.276-7.658.276c-4.255 0-7.658-.138-7.658-.276z" opacity=".836"/>
                          <path d="M29.65 154.606c0-.138 3.12-.276 6.808-.276 3.83 0 6.95.138 6.95.276s-3.12.276-6.95.276c-3.829-.138-6.807-.138-6.807-.276z" opacity=".853"/>
                          <path d="M30.36 154.606c0-.138 2.694-.276 6.098-.276s6.24.138 6.24.276-2.694.276-6.24.276c-3.404-.138-6.098-.138-6.098-.276z" opacity=".869"/>
                          <path d="M31.07 154.606c0-.138 2.41-.276 5.388-.276 2.979 0 5.39.138 5.39.276s-2.411.138-5.39.138c-2.978 0-5.389-.138-5.389-.138z" opacity=".885"/>
                          <path d="M31.778 154.606c0-.138 2.128-.138 4.68-.138 2.553 0 4.68.138 4.68.138s-2.127.138-4.68.138c-2.552 0-4.68-.138-4.68-.138z" opacity=".902"/>
                          <path d="M32.487 154.606c0-.138 1.844-.138 3.971-.138 2.27 0 3.971.138 3.971.138 0 .138-1.702.138-3.97.138-2.128 0-3.972-.138-3.972-.138z" opacity=".918"/>
                          <path d="M33.196 154.606c0-.138 1.419-.138 3.262-.138 1.844 0 3.262 0 3.262.138 0 0-1.418.138-3.262.138-1.702 0-3.262-.138-3.262-.138z" opacity=".934"/>
                          <path d="M33.905 154.606c0-.138 1.135-.138 2.553-.138s2.553 0 2.553.138c0 0-1.135.138-2.553.138-1.418-.138-2.553-.138-2.553-.138z" opacity=".951"/>
                          <path d="M34.756 154.605s.851-.137 1.844-.137c.993 0 1.844 0 1.844.137h-3.688z" opacity=".967"/>
                        </g>
                        <g opacity=".7">
                          <path d="M59.716 168.824c0-.276-.142-.69-.283-1.104-1.986 0-4.113-.138-6.382-.138-5.247-.138-11.062-.138-17.16 0-5.247.138-10.211.276-14.891.552.142.69.142 1.519.284 2.209 4.538-.138 9.502-.276 14.749-.414 6.098-.138 11.913-.138 17.16-.276H60c-.142-.277-.284-.553-.284-.829z" opacity=".016"/>
                          <path d="M59.716 168.825c0-.276-.142-.69-.283-1.104-2.127-.138-4.397-.138-6.666-.276-5.247-.138-10.92-.138-16.876 0-5.247.138-10.211.276-14.891.552.142.69.142 1.38.284 2.209 4.538-.139 9.502-.277 14.607-.415 5.956-.138 11.629-.138 16.876-.138h7.091c0-.276-.142-.552-.142-.828z" opacity=".033"/>
                          <path d="M59.716 168.825c0-.276-.142-.69-.283-1.104-2.127-.138-4.538-.138-6.95-.276-5.105-.138-10.777-.138-16.592 0-5.247.138-10.211.276-14.891.552.142.69.142 1.38.142 2.07 4.68-.138 9.502-.276 14.749-.414 5.956-.138 11.487-.138 16.593-.138H59.858c0-.138-.142-.414-.142-.69z" opacity=".049"/>
                          <path d="M59.716 168.825c0-.276-.142-.69-.283-1.104h-.142c-2.27 0-4.68-.138-7.091-.276-4.964-.138-10.495-.138-16.31 0-5.246.138-10.21.276-14.89.552 0 .69.142 1.38.142 2.07 4.538-.138 9.502-.276 14.749-.414 5.815-.138 11.203-.138 16.309-.138H59.858c0-.138-.142-.414-.142-.69z" opacity=".066"/>
                          <path d="M59.716 168.825c0-.276-.142-.552-.142-1.104h-.567c-2.127-.138-4.538-.138-6.949-.276-4.964-.138-10.353-.138-16.026 0-5.247.138-10.21.276-14.89.552 0 .69.141 1.38.141 2.07 4.539-.138 9.502-.276 14.75-.414 5.672-.138 11.061-.138 16.025-.276h7.8s-.142-.276-.142-.552z" opacity=".082"/>
                          <path d="M59.716 168.825c0-.276-.142-.552-.142-.966h-.992c-2.128-.138-4.397-.138-6.808-.138-4.822-.138-10.21-.138-15.742 0-5.247.138-10.21.276-14.89.552 0 .69.141 1.38.141 1.933 4.539-.138 9.502-.277 14.75-.415 5.53-.138 10.92-.138 15.741-.276h8.084c0-.276-.142-.414-.142-.69z" opacity=".098"/>
                          <path d="M59.716 168.824c0-.138-.142-.552-.142-.966-.425 0-.85 0-1.418-.138-2.127 0-4.396-.138-6.807-.138-4.68-.138-9.927-.138-15.458 0-5.247.138-10.211.276-14.891.552 0 .69.142 1.242.142 1.933 4.538-.138 9.502-.276 14.749-.414 5.53-.139 10.636-.139 15.458-.139h8.367c.142-.276 0-.414 0-.69z" opacity=".115"/>
                          <path d="M59.716 168.824c0-.276-.142-.69-.283-1.104-6.382 0-14.75-.414-23.542-.138-5.247.138-10.211.276-14.891.552 0 .69.142 1.242.142 1.933 4.538-.138 9.502-.277 14.749-.415 5.389-.138 10.495-.138 15.175-.138h8.792c0-.276-.142-.414-.142-.69z" opacity=".131"/>
                          <path d="M59.716 168.825c0-.138-.142-.552-.142-.966-6.381-.138-14.607-.414-23.541-.138-5.248.138-10.211.276-14.891.552 0 .552.141 1.242.141 1.794 4.539-.138 9.502-.276 14.75-.414 9.076-.276 17.16-.138 23.825-.276 0-.138-.142-.414-.142-.552z" opacity=".147"/>
                          <path d="M59.716 168.825c0-.138-.142-.552-.142-.966-6.381-.276-14.607-.414-23.683-.276-5.247.138-10.353.276-14.891.552 0 .552.142 1.242.142 1.795 4.538-.139 9.502-.277 14.749-.415 9.076-.276 17.302-.276 23.825-.276.142 0 0-.138 0-.414z" opacity=".164"/>
                          <path d="M59.716 168.825c0-.138-.142-.552-.142-.966-6.381-.276-14.607-.414-23.683-.276-5.39.138-10.353.276-14.891.552 0 .552.142 1.104.142 1.795 4.538-.139 9.502-.277 14.749-.415 9.218-.276 17.444-.276 23.825-.276.142 0 0-.138 0-.414z" opacity=".18"/>
                          <path d="M59.716 168.825c0-.138-.142-.552-.142-.828-6.381-.276-14.607-.414-23.683-.276-5.39.138-10.353.276-14.891.552 0 .552.142 1.104.142 1.656 4.538-.138 9.502-.276 14.749-.414 9.218-.138 17.444-.276 23.825-.276.142 0 0-.138 0-.414z" opacity=".197"/>
                          <path d="M59.716 168.825c0-.138-.142-.552-.142-.828-6.24-.276-14.465-.414-23.683-.276-5.39.138-10.353.276-14.891.552 0 .552.142 1.104.142 1.656 4.538-.138 9.36-.276 14.749-.414 9.218-.138 17.585-.276 23.825-.276.142 0 0-.276 0-.414z" opacity=".213"/>
                          <path d="M59.716 168.825c0-.138-.142-.552-.142-.828-6.24-.276-14.465-.414-23.683-.276-5.39.138-10.353.276-14.891.552 0 .552.142 1.104.142 1.656 4.538-.138 9.36-.276 14.749-.414 9.218-.138 17.585-.276 23.825-.276.142 0 0-.276 0-.414z" opacity=".23"/>
                          <path d="M59.716 168.825c0-.138-.142-.552-.142-.828-6.098-.276-14.465-.414-23.683-.276-5.39.138-10.353.276-14.891.552 0 .552.142 1.104.142 1.656 4.538-.138 9.36-.276 14.749-.414 9.36-.138 17.727-.138 23.825-.276.142-.138 0-.276 0-.414z" opacity=".246"/>
                          <path d="M59.716 168.825c0-.138-.142-.552-.142-.828h-.142c-5.956-.276-14.323-.414-23.4-.276-5.389.138-10.352.276-14.89.552 0 .552.141.966.141 1.518 4.539-.138 9.36-.276 14.75-.414 9.076-.138 17.443-.138 23.4-.276h.425c-.142 0-.142-.138-.142-.276z" opacity=".262"/>
                          <path d="M59.716 168.825c0-.138-.142-.552-.142-.69h-.709c-5.814-.276-14.04-.414-22.974-.276-5.39.138-10.353.276-14.891.552 0 .552.142.966.142 1.519 4.396-.138 9.36-.277 14.749-.415 8.934-.138 17.018-.138 22.833-.276h.992v-.414z" opacity=".279"/>
                          <path d="M59.716 168.825c0-.138-.142-.414-.142-.69-.425 0-.709 0-1.276-.138-5.673-.276-13.614-.414-22.407-.276-5.39.138-10.353.276-14.891.552 0 .552.142.966.142 1.518 4.396-.138 9.36-.276 14.749-.414 8.793-.138 16.593-.138 22.407-.276h1.418v-.276z" opacity=".295"/>
                          <path d="M59.716 168.825c0-.138-.142-.414-.142-.69-.567 0-1.134-.138-1.701-.138-5.531-.276-13.331-.414-21.84-.138-5.39.138-10.495.276-14.891.552 0 .552.141.966.141 1.38 4.397-.138 9.36-.276 14.75-.414 8.509-.138 16.309-.276 21.84-.276h1.985c-.142 0-.142-.138-.142-.276z" opacity=".311"/>
                          <path d="M59.716 168.825c0-.138-.142-.414-.142-.69-.709 0-1.418-.138-2.268-.138-5.531-.276-13.048-.414-21.415-.138-5.39.138-10.495.276-14.891.552 0 .414.142.966.142 1.38 4.396-.138 9.36-.276 14.749-.414 8.367-.138 15.884-.276 21.415-.276h2.41v-.276z" opacity=".328"/>
                          <path d="M59.716 168.825c0-.138-.142-.414-.142-.69-.85 0-1.843-.138-2.836-.138-5.389-.276-12.764-.276-20.847-.138-5.39.138-10.495.414-14.891.552 0 .414.142.828.142 1.38 4.396-.138 9.218-.276 14.749-.414 8.084-.138 15.458-.276 20.847-.276h2.978v-.276z" opacity=".344"/>
                          <path d="M59.716 168.825c0-.138-.142-.414-.142-.552-.992-.138-2.127-.138-3.403-.276-5.247-.276-12.338-.276-20.28-.138-3.971.138-7.658.276-11.204.414-1.276.138-2.41.138-3.687.276 0 .414.142.828.142 1.242 1.134 0 2.269-.138 3.545-.138 3.404-.138 7.233-.138 11.204-.276 7.942-.138 15.033-.276 20.28-.276h3.545v-.276z" opacity=".361"/>
                          <path d="M59.716 168.825c0-.138-.142-.414-.142-.552-1.134-.138-2.41-.138-3.828-.138-5.106-.276-12.055-.276-19.855-.138-5.39.138-10.636.276-14.891.552 0 .414.142.828.142 1.243 4.254-.139 9.36-.277 14.749-.415 7.658-.138 14.749-.138 19.855-.276 1.56 0 2.836 0 3.97-.276 0 .138 0 .138 0 0z" opacity=".377"/>
                          <path d="M59.716 168.825c0-.138-.142-.414-.142-.552-1.276-.138-2.694-.138-4.396-.276-4.963-.276-11.77-.276-19.287-.138-5.531.138-10.495.414-14.891.69 0 .414.142.828.142 1.242 4.254-.138 9.218-.276 14.749-.414 10.353-.276 19.145-.138 23.825-.552z" opacity=".393"/>
                          <path d="M59.716 168.825c0-.138-.142-.276-.142-.414-1.276-.138-2.836-.276-4.963-.276-4.822-.138-11.487-.276-18.72-.138-5.531.138-10.636.414-14.891.69 0 .414.142.828.142 1.105 4.254-.139 9.218-.277 14.749-.415 7.375-.138 13.898-.276 18.72-.276 2.127 0 3.687 0 5.105-.276 0 0 0 .138 0 0z" opacity=".41"/>
                          <path d="M59.716 168.825c0-.138-.142-.276-.142-.414-1.276-.138-3.12-.276-5.389-.276-4.68-.138-11.203-.276-18.294-.138-5.531.138-10.636.414-14.891.69 0 .414.142.69.142 1.105 4.113-.139 9.218-.277 14.749-.415 7.09-.138 13.614-.276 18.294-.276 2.411 0 4.255-.138 5.531-.276 0 0 0 .138 0 0z" opacity=".426"/>
                          <path d="M59.716 168.825c0-.138-.142-.276-.142-.414-1.276-.138-3.261-.276-5.956-.414-4.538-.138-10.778-.276-17.727-.138-5.531.138-10.636.414-14.891.69 0 .276.142.69.142 1.104 4.113-.138 9.218-.276 14.749-.414 6.949-.138 13.189-.276 17.727-.276 2.837 0 4.822 0 6.098-.138z" opacity=".443"/>
                          <path d="M59.716 168.549c-.992-.138-3.261-.276-6.523-.414-4.397-.138-10.495-.276-17.302-.138-5.531.138-10.778.276-14.891.69 0 .276.142.69.142.966 4.113-.138 9.218-.276 14.749-.414 6.665-.138 12.764-.276 17.16-.276 3.262 0 5.53-.138 6.523-.138.142 0 .142-.276.142-.276z" opacity=".459"/>
                          <path d="M52.625 168.135c-4.254-.138-10.21-.138-16.734-.138-5.673.138-10.778.414-14.75.69 0 .276 0 .69.142.966 4.113-.138 9.219-.276 14.75-.276 6.523-.138 12.48-.276 16.734-.276 4.255 0 6.95-.138 6.95-.276-.143-.276-2.695-.552-7.092-.69z" opacity=".475"/>
                          <path d="M52.2 168.135c-4.113-.138-9.927-.276-16.167-.138-5.673.138-10.778.414-14.75.69 0 .276 0 .552.142.966 3.971-.138 9.077-.276 14.75-.276 6.381-.138 12.054-.276 16.167-.276 4.113-.138 6.665-.138 6.665-.276-.142-.276-2.694-.552-6.807-.69z" opacity=".492"/>
                          <path d="M56.454 168.411c-1.134 0-2.694-.138-4.822-.276-3.97-.138-9.501-.138-15.741 0-5.673.138-10.92.414-14.75.69 0 .276 0 .552.142.828 3.971-.138 9.077-.138 14.75-.276 6.098-.138 11.629-.276 15.741-.276 3.971-.138 6.524-.138 6.524-.276-.142-.276-.85-.414-1.844-.414z" opacity=".508"/>
                          <path d="M55.745 168.411c-1.134 0-2.694-.138-4.538-.276-3.829-.138-9.218-.138-15.174 0-5.815.138-10.92.414-14.75.69 0 .276 0 .552.142.828 3.83-.138 9.077-.138 14.75-.276 5.956-.138 11.203-.276 15.174-.276 3.83-.138 6.24-.138 6.24-.276-.142-.276-.85-.414-1.843-.414z" opacity=".525"/>
                          <path d="M50.64 168.135c-3.829-.138-8.934-.138-14.607 0s-10.92.414-14.608.69h-.141c0 .276 0 .552.142.69h.141c3.83-.138 8.935-.138 14.608-.276 5.672-.138 10.92-.138 14.607-.276 3.687-.138 6.098-.138 6.098-.276-.142-.276-2.553-.414-6.24-.552z" opacity=".541"/>
                          <path d="M50.073 168.135c-3.546-.138-8.651-.138-14.182 0-5.531.138-10.495.414-14.182.69H21c0 .276 0 .552.142.69 3.687 0 8.934-.276 14.749-.276 5.53-.138 10.495-.276 14.182-.276 3.687-.138 5.814-.138 5.814-.276 0-.276-2.127-.414-5.814-.552z" opacity=".557"/>
                          <path d="M49.647 168.135c-3.545-.138-8.367-.138-13.614 0-5.39.138-10.07.276-13.615.552-.425 0-.85.138-1.134.138 0 .276 0 .414.142.69h1.134c3.546-.138 8.367-.138 13.615-.276 5.389-.138 10.069-.276 13.614-.276 3.546-.138 5.673-.138 5.673-.276-.284-.276-2.411-.414-5.815-.552z" opacity=".574"/>
                          <path d="M49.08 168.135c-3.404-.138-7.942-.138-13.047 0-5.106.138-9.786.276-13.19.552-.567 0-1.134.138-1.701.138 0 .138 0 .414.141.552h1.702c3.404 0 7.942-.138 13.047-.276 5.106-.138 9.786-.138 13.048-.276 3.403-.138 5.389-.138 5.389-.276s-1.986-.276-5.39-.414z" opacity=".59"/>
                          <path d="M48.513 168.273c-3.262-.138-7.658-.138-12.622 0-4.964.138-9.36.276-12.622.552-.85 0-1.56.138-2.269.138v.552h2.27c3.26-.138 7.657-.138 12.62-.276 4.965-.138 9.36-.138 12.623-.276 3.262-.138 5.247-.138 5.247-.276 0-.276-1.985-.414-5.247-.414z" opacity=".607"/>
                          <path d="M51.633 168.411c-.851 0-2.128-.138-3.688-.138-3.12-.138-7.374-.138-12.054 0-4.68.138-8.935.276-12.055.552-1.134.138-1.985.138-2.694.276v.414h2.694c3.12-.138 7.375-.138 12.055-.276s8.934-.138 12.054-.276c3.12-.138 4.964-.138 4.964-.276.142-.138-.284-.276-1.276-.276z" opacity=".623"/>
                          <path d="M51.066 168.411c-.852 0-1.986-.138-3.546-.138-2.978-.138-7.09-.138-11.63 0-4.537.138-8.65.276-11.628.552-1.418.138-2.411.138-3.262.276v.414h3.262c2.978 0 7.09-.138 11.629-.276 4.538-.138 8.509-.138 11.629-.276 2.978-.138 4.822-.138 4.822-.276s-.567-.276-1.276-.276z" opacity=".639"/>
                          <path d="M46.953 168.273c-2.837-.138-6.666-.138-11.062 0-4.397.138-8.226.276-11.062.414-1.702.138-2.978.276-3.687.276v.276h3.687c2.836-.138 6.665-.138 11.062-.276 4.254-.138 8.225-.138 11.062-.276 2.836-.138 4.538-.138 4.538-.276.142 0-1.702-.138-4.538-.138z" opacity=".656"/>
                          <path d="M46.527 168.273c-2.694 0-6.382-.138-10.494 0-4.113.138-7.8.276-10.495.414-2.553.138-3.97.276-4.254.414.283.138 1.843.138 4.254.138 2.695 0 6.382-.138 10.495-.138 4.112-.138 7.8-.138 10.494-.276 2.695-.138 4.397-.138 4.397-.276-.142-.138-1.702-.276-4.397-.276z" opacity=".672"/>
                          <path d="M21.851 169.101c0-.138 1.56-.276 4.113-.414 2.553-.138 6.098-.276 10.069-.414 3.97-.138 7.516-.138 10.069 0 2.553 0 4.113.138 4.113.276 0 0-.426.138-1.135.138-.709 0-1.702.138-2.978.138-2.553.138-6.098.138-10.07.276-3.97.138-7.515.138-10.068.138s-4.113 0-4.113-.138z" opacity=".689"/>
                          <path d="M22.56 169.101c0-.138 1.56-.276 3.971-.414 2.41-.138 5.815-.276 9.502-.414 3.687-.138 7.09-.138 9.502 0 2.41.138 3.97.138 3.97.276s-1.56.138-3.97.276c-2.411 0-5.815.138-9.502.276-3.688 0-7.091.138-9.502.138-2.553 0-3.97 0-3.97-.138z" opacity=".705"/>
                          <path d="M23.269 169.101c0-.138 1.418-.276 3.687-.414 2.27-.138 5.531-.276 8.935-.414 3.545-.138 6.665-.138 8.934 0 2.27 0 3.688.138 3.688.276s-1.419.138-3.688.276c-2.269 0-5.53.138-8.934.276-3.546 0-6.666.138-8.935.138s-3.687-.138-3.687-.138z" opacity=".721"/>
                          <path d="M23.978 169.101c0-.138 1.276-.276 3.545-.276 2.128-.138 5.106-.276 8.51-.276 3.261-.138 6.24-.138 8.509 0 1.134 0 1.985.138 2.552.138.568 0 .993.138.993.138 0 .138-1.276.138-3.545.276-2.128.138-5.106.138-8.51.276-3.261 0-6.24.138-8.508.138-2.27-.414-3.546-.414-3.546-.414z" opacity=".738"/>
                          <path d="M24.688 168.963c0-.138 1.276-.138 3.261-.276 1.986-.138 4.822-.138 7.942-.276h7.942c1.985 0 3.262.138 3.262.138 0 .138-1.277.138-3.262.276-1.986 0-4.822.138-7.942.138s-5.956.138-7.942.138c-1.985 0-3.262 0-3.262-.138z" opacity=".754"/>
                          <path d="M25.396 168.963c0-.138 1.135-.138 3.12-.276 1.844-.138 4.539-.138 7.517-.276h7.374c1.844 0 3.12.138 3.12.138 0 .138-1.134.138-3.12.138-1.843 0-4.538.138-7.374.138-2.978 0-5.531.138-7.517.138-1.843.138-3.12.138-3.12 0z" opacity=".77"/>
                          <path d="M26.105 168.963c0-.138 1.135-.138 2.837-.276 1.843-.138 4.254-.138 6.949-.276h6.949c1.702 0 2.836.138 2.836.138s-1.134.138-2.836.138c-1.844 0-4.255.138-6.95.138-2.694 0-5.105.138-6.948.138-1.702.138-2.837.138-2.837 0z" opacity=".787"/>
                          <path d="M26.956 168.963c0-.138.993-.138 2.695-.276 1.702 0 3.971-.138 6.382-.276h6.382c1.702 0 2.694.138 2.694.138s-.992.138-2.694.138-3.83.138-6.382.138c-2.553 0-4.822.138-6.382.138h-2.695z" opacity=".803"/>
                          <path d="M27.666 168.963c0-.138.992-.138 2.41-.276 1.56 0 3.546-.138 5.957-.276h5.956c1.56 0 2.411.138 2.411.138 0 .138-.993.138-2.41.138-1.56 0-3.546.138-5.957.138-2.27 0-4.397.138-5.957.138h-2.41z" opacity=".82"/>
                          <path d="M28.375 168.825c0-.138.85-.138 2.269-.276 1.418 0 3.261-.138 5.389-.138h5.389c1.418 0 2.269.138 2.269.138 0 .138-.851.138-2.27.138-1.417 0-3.261.138-5.388.138-2.128 0-3.971.138-5.39.138-1.418 0-2.268 0-2.268-.138z" opacity=".836"/>
                          <path d="M29.084 168.825s.709-.138 1.985-.138c1.276 0 2.978-.138 4.822-.138h4.822c1.276 0 1.985.138 1.985.138s-.71.138-1.985.138c-1.277 0-2.979.138-4.822.138-1.844 0-3.546.138-4.822.138-1.276-.138-1.985-.138-1.985-.276z" opacity=".853"/>
                          <path d="M29.793 168.825s.71-.138 1.844-.138c1.134 0 2.694-.138 4.396-.138h4.396c1.135 0 1.844 0 1.844.138 0 0-.71.138-1.844.138-1.134 0-2.694.138-4.396.138h-4.396c-1.135-.138-1.844-.138-1.844-.138z" opacity=".869"/>
                          <path d="M30.502 168.825s2.41-.276 5.389-.276c2.978-.138 5.39 0 5.39 0s-2.412.138-5.39.276h-5.389z" opacity=".885"/>
                          <path d="M31.21 168.825s2.128-.138 4.68-.276c2.554-.138 4.68 0 4.68 0s-2.126.138-4.68.138c-2.552.138-4.68.138-4.68.138z" opacity=".902"/>
                          <path d="M32.062 168.824s1.844-.137 3.97-.137h3.972s-1.844.137-3.971.137h-3.971z" opacity=".918"/>
                          <path d="M32.771 168.687s1.418-.138 3.262-.138h3.262s-1.419.138-3.262.138c-1.844.138-3.262 0-3.262 0z" opacity=".934"/>
                          <path d="M33.48 168.687s1.135-.138 2.553-.138h2.552s-1.134.138-2.552.138c-1.419.138-2.553 0-2.553 0z" opacity=".951"/>
                          <path d="M34.189 168.686s.85-.137 1.844-.137h1.843s-.85.137-1.843.137h-1.844z" opacity=".967"/>
                        </g>
                      </g>
                    </g>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear50" x1="39.983" x2="39.983" y1="18.769" y2="102.126" gradientUnits="userSpaceOnUse">
                      <stop/>
                      <stop offset=".106" stop-color="#1A0D00"/>
                      <stop offset=".305" stop-color="#442301"/>
                      <stop offset=".499" stop-color="#653401"/>
                      <stop offset=".683" stop-color="#7D4002"/>
                      <stop offset=".855" stop-color="#8B4702"/>
                      <stop offset="1" stop-color="#904A02"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear50" x1="24" x2="56" y1="117.744" y2="117.744" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear50" x1="24" x2="56" y1="117.744" y2="117.744" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear50" x1="23.009" x2="55.897" y1="89.974" y2="89.974" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".242" stop-color="#99979B"/>
                      <stop offset=".4" stop-color="#BFBEC1"/>
                      <stop offset=".616" stop-color="#BFBEC1"/>
                      <stop offset=".668" stop-color="#898989"/>
                      <stop offset=".737" stop-color="#727174"/>
                      <stop offset=".802" stop-color="#5E5E60"/>
                      <stop offset=".869" stop-color="#A6A6A6"/>
                      <stop offset=".938" stop-color="#CDCDCD"/>
                      <stop offset="1" stop-color="#FCFCFC"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear50" x1="24.153" x2="54.374" y1="151.76" y2="151.76" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear50" x1="24.597" x2="54.802" y1="165.223" y2="165.223" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear50" x1="24.028" x2="55.13" y1="144.548" y2="144.548" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".031" stop-color="#E3E2E4"/>
                      <stop offset=".084" stop-color="#B9B7BA"/>
                      <stop offset=".142" stop-color="#939196"/>
                      <stop offset=".204" stop-color="#747177"/>
                      <stop offset=".27" stop-color="#5A575E"/>
                      <stop offset=".342" stop-color="#47434B"/>
                      <stop offset=".424" stop-color="#39353D"/>
                      <stop offset=".525" stop-color="#302C35"/>
                      <stop offset=".695" stop-color="#2E2A33"/>
                      <stop offset=".835" stop-color="#302C35"/>
                      <stop offset=".885" stop-color="#36333B"/>
                      <stop offset=".921" stop-color="#423E45"/>
                      <stop offset=".95" stop-color="#524F54"/>
                      <stop offset=".975" stop-color="#676568"/>
                      <stop offset=".997" stop-color="gray"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear50" x1="23.828" x2="53.56" y1="157.737" y2="157.737" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".031" stop-color="#E3E2E4"/>
                      <stop offset=".084" stop-color="#B9B7BA"/>
                      <stop offset=".142" stop-color="#939196"/>
                      <stop offset=".204" stop-color="#747177"/>
                      <stop offset=".27" stop-color="#5A575E"/>
                      <stop offset=".342" stop-color="#47434B"/>
                      <stop offset=".424" stop-color="#39353D"/>
                      <stop offset=".525" stop-color="#302C35"/>
                      <stop offset=".695" stop-color="#2E2A33"/>
                      <stop offset=".835" stop-color="#302C35"/>
                      <stop offset=".885" stop-color="#36333B"/>
                      <stop offset=".921" stop-color="#423E45"/>
                      <stop offset=".95" stop-color="#524F54"/>
                      <stop offset=".975" stop-color="#676568"/>
                      <stop offset=".997" stop-color="gray"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <clipPath id="clip050">
                      <path fill="#fff" d="M0 0H39V164H0z" transform="translate(21 8)"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button id="Crayon" @click.stop="setTool"  class="tool-item brush_style2">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="172" fill="none" viewBox="0 0 80 172">
                  <g filter="url(#filter0_d60)">
                    <path class="topColor" fill="url(#paint0_linear60)" d="M63 19.5c-.451-3.04-46.774-3.103-47 .5 0 6 5.554 37.66 6.005 44.527 0 .45.113.9.226 1.35.339.789 1.129.789 1.693 1.014l32.163 3.152C57.554 60.811 63.45 22.54 63 19.5z"/>
                  </g>
                  <path fill="url(#paint1_linear60)"
                        d="M52.902 143.444c.1-.3.3-.7.3-1 .5-7.6 4.9-51.7 4.8-72.1 0-1.4 0-2.5-.1-3.1 0-.7-.1-1.2-.2-1.5-.7-2.4-2.9-3.2-6.9-3.5-.9-.1-1.8-.2-2.7-.2h-4.5c-.1-.1-4.2 0-8.4 0h.2-4.5c-.9 0-1.8.1-2.7.2-4 .3-6.2 1.1-6.9 3.5-.1.2-.1.8-.2 1.5 0 .7-.1 1.7-.1 3.1-.1 20.4 4.4 64.6 4.8 72.1 0 .4.1.8.3 1l2.6 4.8c.4.7.4 1.7 0 2.5l-2.2 4.1c-.4.8-.4 1.8 0 2.6l2 3.5c.4.7.4 1.8 0 2.6l-2.6 5c-.8 1.3-.3 3.4.9 3.4h25.5c1.2 0 1.7-2.1.9-3.4l-2.6-5c-.4-.8-.4-2 0-2.6l2-3.5c.4-.8.4-1.8 0-2.6l-2.2-4.1c-.4-.8-.4-1.8 0-2.5l2.5-4.8z"/>
                  <g opacity=".06">
                    <mask id="df5olicq4a" width="38" height="110" x="21" y="62" maskUnits="userSpaceOnUse">
                      <path fill="url(#paint2_linear60)"
                            d="M52.902 143.444c.1-.3.3-.7.3-1 .5-7.6 4.9-51.7 4.8-72.1 0-1.4 0-2.5-.1-3.1 0-.7-.1-1.2-.2-1.5-.7-2.4-2.9-3.2-6.9-3.5-.9-.1-1.8-.2-2.7-.2h-4.5c-.1-.1-4.2 0-8.4 0h.2-4.5c-.9 0-1.8.1-2.7.2-4 .3-6.2 1.1-6.9 3.5-.1.2-.1.8-.2 1.5 0 .7-.1 1.7-.1 3.1-.1 20.4 4.4 64.6 4.8 72.1 0 .4.1.8.3 1l2.6 4.8c.4.7.4 1.7 0 2.5l-2.2 4.1c-.4.8-.4 1.8 0 2.6l2 3.5c.4.7.4 1.8 0 2.6l-2.6 5c-.8 1.3-.3 3.4.9 3.4h25.5c1.2 0 1.7-2.1.9-3.4l-2.6-5c-.4-.8-.4-2 0-2.6l2-3.5c.4-.8.4-1.8 0-2.6l-2.2-4.1c-.4-.8-.4-1.8 0-2.5l2.5-4.8z"/>
                    </mask>
                    <g mask="url(#df5olicq4a)">
                      <path fill="url(#paint3_linear60)"
                            d="M35.545 47.118c-2.637 0-5.035-.122-8.152.244-3.237.365-6.594.61-7.433 4.024-.96 4.39 3.836 85.247 4.316 93.052 0 .366.12.61.24.976l2.397 4.512c.36.61.36 1.586 0 2.317l-2.038 3.781c-.36.732-.36 1.707 0 2.439l1.799 3.293c.36.732.36 1.707 0 2.439l-2.398 4.634c-.6 1.22-.12 3.171.959 3.171h28.653c1.079 0 1.558-1.951.839-3.171l-2.398-4.634c-.36-.732-.36-1.829 0-2.439l1.798-3.293c.36-.732.36-1.707 0-2.439l-2.038-3.781c-.36-.731-.36-1.707 0-2.317l2.398-4.512c.12-.244.24-.61.24-.976.48-7.927 5.515-89.637 4.196-93.906-.96-3.292-4.915-3.414-12.948-3.292-.12-.122-6.593-.122-10.43-.122z"/>
                      <path fill="url(#paint4_linear60)"
                            d="M53.767 68.826c.24-.366.24-13.293.84-18.537.12-.976.24-2.196-.36-3.05-.48-.73-1.319-.975-2.158-1.097-4.076-.732-7.673-1.707-11.629-.732-2.038.488-4.196.488-6.234.123-2.158-.366-5.395.243-7.433 1.707 7.553.366 25.296.122 25.895 1.463.36.732.48 13.903.48 18.66 0 .61-.36 1.097-.84 1.097-8.391-.122-16.304-.366-24.696 0 0 0 2.278 1.098 11.27 2.317 5.155.732 7.792 4.147 7.433 11.464-.24 3.78-1.32 46.465-3.237 59.88-.24 1.83-1.32 3.171-2.638 3.415-.959.122-2.158.244-2.997.244-.48 0-.84 0-1.199-.244-1.319-.732-1.558-3.293-1.558-5.244-.24-10.488-4.676-58.783-6.354-65.246 0-.122-.12-.244-.12-.366-.48-.732-2.158-3.659-3.357-5.244-.24-.244-.36-.61-.36-1.098.12-3.049.6-15.122.72-20.732 0-1.22-.72-1.83-1.559-1.342-.48.244-.72.732-.72 1.342.12 5.122 0 19.513-.12 21.342v.488c.72 3.536 7.314 33.172 7.794 72.563 0 1.342-.84 1.952-1.679 2.074-1.319.122-.452.447-1.65.081-1.44-.488-.72 2.683-.72 2.683 1.079.854-.028.772 1.171.65 6.834-.365 13.547-.609 20.38-.975.6 0 1.08-.122 1.56-.488.359-.488 8.631-97.077 8.272-97.93-.36-.976-2.158-2.074-2.158-.976.599 7.317-7.553 96.955-7.433 97.808 0 .122-.48.122-1.08.122-.599 0-.719-1.341-.719-2.317.48-11.952 4.316-69.27 7.194-73.905z"/>
                      <path fill="url(#paint5_linear60)"
                            d="M53.767 68.826c.24-.366.24-13.293.84-18.537.12-.976.24-2.196-.36-3.05-.48-.73-1.319-.975-2.158-1.097-4.076-.732-7.673-1.707-11.629-.732-2.038.488-4.196.488-6.234.123-2.158-.366-5.395.243-7.433 1.707 7.553.366 25.296.122 25.895 1.463.36.732.48 13.903.48 18.66 0 .61-.36 1.097-.84 1.097-8.391-.122-16.304-.366-24.696 0 0 0 2.278 1.098 11.27 2.317 5.155.732 7.792 4.147 7.433 11.464-.24 3.78-1.32 46.465-3.237 59.88-.24 1.83-1.32 3.171-2.638 3.415-.959.122-2.158.244-2.997.244-.48 0-.84 0-1.199-.244-1.319-.732-1.558-3.293-1.558-5.244-.24-10.488-4.676-58.783-6.354-65.246 0-.122-.12-.244-.12-.366-.48-.732-2.158-3.659-3.357-5.244-.24-.244-.36-.61-.36-1.098.12-3.049.6-15.122.72-20.732 0-1.22-1.559-1.342-1.559-1.342s-.72.732-.72 1.342c.12 5.122 0 19.513-.12 21.342v.488c.72 3.536 7.314 33.172 7.794 72.563 0 1.342-.84 1.952-1.679 2.074-1.34 0-.685-.095-1.808 0-1.686.477-.72 2.683-.72 2.683 1.08.853.13.853 1.33.731 6.833-.365 13.546-.609 20.38-.975.6 0 1.079-.122 1.558-.488.36-.488 8.632-97.077 8.273-97.93-.36-.976-2.158-2.074-2.158-.976.599 7.317-7.553 96.955-7.433 97.808 0 .122-.48.122-1.08.122-.599 0-.719-1.341-.719-2.317.48-11.952 4.316-69.27 7.194-73.905z"
                            opacity=".8"/>
                      <path fill="url(#paint6_linear60)" d="M53.648 156.878c-.12-.61-2.278-5.123-3.117-5.488-2.038-.976-20.26-.61-21.58 0-1.079.487-2.877 1.951-3.236 3.78-.36 1.83 20.74-2.561 27.933 1.708z"/>
                      <path fill="url(#paint7_linear60)" d="M27.512 169.195c1.44.244 22.54-.366 26.375-.244-.12-.732-2.277-5.366-3.117-5.732-2.038-.975-20.74-.61-22.059 0-1.079.488-2.877 2.073-3.237 4.025-.36 1.707 1.08 1.829 2.038 1.951z"/>
                      <path fill="url(#paint8_linear60)" d="M52.569 146.999c-.6-.853-1.559-.731-2.398-.61-7.912.976-15.945 1.586-23.857 1.952.96 2.195 2.877 2.561 4.675 2.561 4.796.122 16.785-.488 18.103-.244.36 0 .72.122 1.08 0 1.198-.488 1.918-2.195 2.397-3.659z" opacity=".5"/>
                      <path fill="url(#paint9_linear60)" d="M52.929 157.853c-.6-.853-1.559-.731-2.398-.731-8.152.975-16.304 1.585-24.457 1.951.96 2.195 2.997 2.683 4.796 2.683 4.915.122 17.143-.488 18.462-.244.36.122.72.122 1.08 0 1.198-.244 1.917-2.073 2.517-3.659z" opacity=".5"/>
                      <path fill="url(#paint10_linear60)" d="M25.715 47.483c-.24 6.464-.72 20.733-.6 20.977.12.122 3.956 4.512 4.796 9.268.36 2.317 5.634 62.32 6.353 64.759.72 2.317 2.758 1.951 4.077 1.585.839-.244 1.678-.732 2.158-1.707.48-1.098 2.397-25.611 2.997-44.636.36-11.342.719-21.098-1.439-23.415-4.196-4.39-11.39-4.269-16.904-5.61 8.032-.732 16.664-.976 24.697-.61.6 0 1.079-.488 1.079-1.22.48-4.268 0-16.83-.12-18.05-6.834-.365-26.255-1.463-27.094-1.34z"/>
                      <path fill="url(#paint11_linear60)" d="M25.715 47.483c-.24 6.464-.72 20.733-.6 20.977.12.122 3.956 4.512 4.796 9.268.36 2.317 5.634 62.32 6.353 64.759.72 2.317 2.758 1.951 4.077 1.585.839-.244 1.678-.732 2.158-1.707.48-1.098 2.397-25.611 2.997-44.636.36-11.342.719-21.098-1.439-23.415-4.196-4.39-11.39-4.269-16.904-5.61 8.032-.732 16.664-.976 24.697-.61.6 0 1.079-.488 1.079-1.22.48-4.268 0-16.83-.12-18.05-6.834-.365-26.255-1.463-27.094-1.34z"/>
                    </g>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear60" x1="46.831" x2="36.368" y1="63.586" y2="11.543" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#904A02"/>
                      <stop offset=".145" stop-color="#8B4702"/>
                      <stop offset=".26" stop-color="#7D4002"/>
                      <stop offset=".38" stop-color="#653401"/>
                      <stop offset=".573" stop-color="#442301"/>
                      <stop offset=".708" stop-color="#1A0D00"/>
                      <stop offset="1"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear60" x1="18" x2="61.003" y1="137.02" y2="137.02" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear60" x1="18" x2="61.003" y1="137.02" y2="137.02" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear60" x1="39.495" x2="39.495" y1="52.186" y2="163.127" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset=".737" stop-color="#49464D"/>
                      <stop offset=".802" stop-color="#4D4A51"/>
                      <stop offset=".869" stop-color="#59575B"/>
                      <stop offset=".938" stop-color="#6C6B6D"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear60" x1="19.721" x2="54.009" y1="96.317" y2="96.317" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#666"/>
                      <stop offset=".658" stop-color="#AEAEAE"/>
                      <stop offset="1" stop-color="#D3D3D3"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear60" x1="19.721" x2="54.009" y1="96.317" y2="96.317" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#EBEBEB"/>
                      <stop offset=".658" stop-color="#3E3B43"/>
                      <stop offset="1" stop-color="#3B3840"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear60" x1="26.816" x2="51.558" y1="153.877" y2="153.877" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear60" x1="26.533" x2="51.868" y1="165.98" y2="165.98" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint8_linear60" x1="27.346" x2="50.663" y1="148.655" y2="148.655" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset=".695" stop-color="#2E2A33"/>
                      <stop offset=".764" stop-color="#312E36"/>
                      <stop offset=".827" stop-color="#3C3840"/>
                      <stop offset=".886" stop-color="#4D4B50"/>
                      <stop offset=".944" stop-color="#666467"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint9_linear60" x1="27.096" x2="50.918" y1="159.488" y2="159.488" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset=".516" stop-color="#5C5960"/>
                      <stop offset=".695" stop-color="#2E2A33"/>
                      <stop offset=".764" stop-color="#312E36"/>
                      <stop offset=".827" stop-color="#3C3840"/>
                      <stop offset=".886" stop-color="#4D4B50"/>
                      <stop offset=".944" stop-color="#666467"/>
                      <stop offset="1" stop-color="#858584"/>
                    </linearGradient>
                    <linearGradient id="paint10_linear60" x1="39.123" x2="39.123" y1="48.31" y2="138.861" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset="1" stop-color="#CCC"/>
                    </linearGradient>
                    <linearGradient id="paint11_linear60" x1="39.123" x2="39.123" y1="48.31" y2="138.861" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"/>
                      <stop offset="1" stop-color="#BBB"/>
                    </linearGradient>
                    <filter id="filter0_d60" width="55.025" height="60.787" x="12" y="17.256" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
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
              <button id="Eraser" @click.stop="setTool"  class="tool-item eraser">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="172" fill="none" viewBox="0 0 80 172">
                  <g filter="url(#filter0_i70)">
                    <path fill="#E9A29E" d="M18 17c0-2.761 2.239-5 5-5h34c2.761 0 5 2.239 5 5v33H18V17z"/>
                    <path fill="url(#paint0_linear70)" d="M18 17c0-2.761 2.239-5 5-5h34c2.761 0 5 2.239 5 5v33H18V17z"/>
                  </g>
                  <path fill="url(#paint1_linear70)" d="M18 50H62V88H18z"/>
                  <path fill="url(#paint2_linear70)" d="M18 88H62V172H18z"/>
                  <g filter="url(#filter1_i70)">
                    <path fill="#E9A29E" d="M45.314 76.142c.78.781 2.047.781 2.828 0 .781-.78.781-2.047 0-2.828l-4.95-4.95 4.95-4.95c.781-.78.781-2.047 0-2.828-.78-.781-2.047-.781-2.828 0l-4.95 4.95-4.95-4.95c-.78-.781-2.047-.781-2.828 0-.781.78-.781 2.047 0 2.828l4.95 4.95-4.95 4.95c-.781.78-.781 2.047 0 2.828.78.781 2.047.781 2.828 0l4.95-4.95 4.95 4.95z"/>
                    <path fill="#DD9795" d="M45.314 76.142c.78.781 2.047.781 2.828 0 .781-.78.781-2.047 0-2.828l-4.95-4.95 4.95-4.95c.781-.78.781-2.047 0-2.828-.78-.781-2.047-.781-2.828 0l-4.95 4.95-4.95-4.95c-.78-.781-2.047-.781-2.828 0-.781.78-.781 2.047 0 2.828l4.95 4.95-4.95 4.95c-.781.78-.781 2.047 0 2.828.78.781 2.047.781 2.828 0l4.95-4.95 4.95 4.95z"/>
                  </g>
                  <path fill="#D8D8D8" d="M18 88H62V90H18z"/>
                  <defs>
                    <linearGradient id="paint0_linear70" x1="62" x2="18" y1="32" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#D18784"/>
                      <stop offset=".219" stop-color="#E9A29E"/>
                      <stop offset=".523" stop-color="#E9A8A4"/>
                      <stop offset=".863" stop-color="#CC7F7A"/>
                      <stop offset=".946" stop-color="#D89490"/>
                      <stop offset="1" stop-color="#D28B87"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear70" x1="18" x2="62" y1="69.864" y2="69.864" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear70" x1="18" x2="62" y1="131.909" y2="131.909" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DBDBDB"/>
                      <stop offset=".064" stop-color="#EBEBEB"/>
                      <stop offset=".178" stop-color="#DADADA"/>
                      <stop offset=".488" stop-color="#F6F6F6"/>
                      <stop offset=".757" stop-color="#EFEFEF"/>
                      <stop offset="1" stop-color="#DDD"/>
                    </linearGradient>
                    <filter id="filter0_i70" width="44" height="39" x="18" y="12" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="1"/>
                      <feGaussianBlur stdDeviation="1"/>
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                      <feColorMatrix values="0 0 0 0 0.795833 0 0 0 0 0.506305 0 0 0 0 0.497396 0 0 0 1 0"/>
                      <feBlend in2="shape" result="effect1_innerShadow"/>
                    </filter>
                    <filter id="filter1_i70" width="16.728" height="17.728" x="32" y="60" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="1"/>
                      <feGaussianBlur stdDeviation=".5"/>
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                      <feColorMatrix values="0 0 0 0 0.766667 0 0 0 0 0.447461 0 0 0 0 0.437639 0 0 0 1 0"/>
                      <feBlend in2="shape" result="effect1_innerShadow"/>
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
            <div class="btn-tool">
              <Confirm v-if="page==='diagnose'"
                        v-slot="slotProps"
                       :completeText="'다시 그리시겠어요? </br> 조금 전 그림은 사라져요 '"
                       :cancelText="'아니요'"
                       :okText="'네'">
              <button @click="undo"><img src="@/assets/images/common/btn_undo@2x.png" alt=""></button>
              <button @click="redo"><img src="@/assets/images/common/btn_redo@2x.png" alt=""></button>
              <button @click="globalUtils.confirm(slotProps,'refresh')"><img src="@/assets/images/common/btn_refresh@2x.png" alt=""></button>
              </Confirm>
              <Confirm v-if="page==='letter'"
                       v-slot="slotProps"
                       :completeText="'다시 그리시겠어요? </br> 조금 전 그림은 사라져요 '"
                       :cancelText="'아니요'"
                       :okText="'네'">
                <button @click="undo"><img src="@/assets/images/common/btn_undo@2x.png" alt=""></button>
                <button @click="redo"><img src="@/assets/images/common/btn_redo@2x.png" alt=""></button>
                <button @click="globalUtils.confirm(slotProps,'refresh-letter')"><img src="@/assets/images/common/btn_refresh@2x.png" alt=""></button>
              </Confirm>
            </div>
          </div>
          <div class="btn-wrap">
            <Confirm  v-if="page==='diagnose'"
                      v-slot="slotProps"
                      :completeText="'다 그렸나요? </br> 제출하면 수정할 수 없어요!'"
                      :cancelText = "'아니요'"
                      :okText = "'제출하기'">
              <b-button  @click="globalUtils.confirm(slotProps,'diagnose')" class="btn btn-blue btn-lg">완료</b-button>
            </Confirm>
            <b-button v-else-if="page==='letter'" @click="setEvent" class="btn btn-blue btn-lg" :class="{'disabled' : !bg.imageId}">완료</b-button>
            <!--프리드로잉-->
            <b-button v-else @click="$EventBus.$emit('freeName')" class="btn btn-blue btn-lg">완료</b-button>
          </div>
        </div>
      </div>
    </nav>
    <chrome-picker v-show="isOpen" v-model="colors"/>
    <div id="notifications" style="bottom: 127px;"></div>

  </div>
</template>

<script>
import Confirm from '@/components/popup/Confirm'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { Chrome } from 'vue-color'

export default {
    name: 'Wacom',
    components: {
      Confirm,
      'chrome-picker': Chrome
    },
    data () {
      return {
        showConfirm: false,
        type: '',
        colour: '#000000',
        message: 'hello',
        colors: {
          'hex': '#000000',
          'source': 'hex'
        },
        updateValue: '',
        hex: '',
        isOpen: false,
        isLoadingGuide : false
      }
  },
  props : {
    drawer: {
      Boolean,
      default(){return true}
    }
  },
  created(){
    this.$EventBus.$on('setBg', (bg, reset) => {
      this.setLayerBgSelect(bg.tabletImageUrl)
      if(reset) {
        this.getLetter()
          .then( result => {
            this.setBg({reset : true})
          })
      } else this.setBg({...bg, ...{active : true} })
    });
    this.$EventBus.$on('visibleBg', () => {
      if(!this.bg.isShow) this.setLayerBgSelect(this.bg.tabletImageUrl)
      else WILL.setBackground('paper_01')
      //this.setLayerBgSelect('https://colorate.azurewebsites.net/SwatchColor/FFFFFF')
    });

    this.$EventBus.$on('showToolBar', () => {
      this.isLoadingGuide = true;
    });
  },
  computed : {
    ...mapGetters({
      bg : 'getBg'
    }),
    page() {
      return this.$router.currentRoute.query.page
    }
  },
  methods : {
    ...mapMutations({
      setBg: 'setBg',
      setLetter : 'setLetter'
    }),
    ...mapActions({
      getLetter : 'getLetter'
    }),
    setLayerBgSelect (img) {
      WILL.setBackground(img, 'url')
    },
    /**
     * 캔버스 툴 조작
     */
    setBgColorSelect (e) {
      WILL.setBackground(e.target.id)
    },
    setColorSelect (e) {
      Array.from(document.querySelectorAll('.pallet .color')).forEach((el) => el.classList.remove('selected'))
      e.currentTarget.classList.add('selected')
      dropDown.selectColor(e.currentTarget)
      let color = e.currentTarget.style.backgroundColor
      Array.from(document.querySelectorAll('.topColor')).forEach((el) => el.style.fill = color)
    },
    setTool (e) {
      Array.from(document.querySelectorAll('.tool .tool-item')).forEach((el) => el.classList.remove('selected'))
      e.currentTarget.classList.add('selected')
      WILL.setTool(e.currentTarget.id)
    },
    redo () {
      WILL.redo()
    },
    undo () {
      WILL.undo()
    },
    toggleDrawer () {
      this.$EventBus.$emit('toggleDrawer', !this.drawer)
    },
    toggleConfirm (type, topic) {
      this.showConfirm = !this.showConfirm
      this.type = type
    },
    isPickerOpen () {
      this.isOpen = !this.isOpen
    },
    colorPicker() {
      this.setColorSelect()
      this.isPickerOpen()
    },
    setEvent(){
      this.$EventBus.$emit('next')
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
  > div {
    padding: 0 !important;
  }
  &.visible {
    opacity: 1 !important;
  }
  &.show {
    position: absolute;
    width: 182.4rem;
    height: 22rem;
    border-radius: 2rem;
    border: solid 1px var(--ivory-500);
    background-color: var(--ivory-200);
    left: 4.8rem;
    bottom: 4.8rem;
    transform: translateY(0px);

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
              &.colorpicker {
                background: url("~@/assets/images/common/ico_colorpicker.png") no-repeat 0 0;
                background-size: cover
              }
            }
          }

          .tool {
            float: left;
            height: calc(22rem - .2rem);
            line-height: calc(22rem - .2rem);
            margin-right: 5.5rem;
            > span {
              display: inline-block;
            }
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

              &.selected {
                height: 16rem;
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
    //transform: translateY(670px);
    //transition: transform 1s;
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
      z-index: 100;

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


.vc-chrome {
  position: absolute;
  left: 169px;
  top: 450px;
  z-index: 200
}



</style>
