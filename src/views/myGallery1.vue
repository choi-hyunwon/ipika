<template>
  <div class="wrap">
      <div class="header ivory bg-ivory d-flex">
        <div v-b-modal.goBackPopup class="symbol"><img src="@/assets/images/common/arrow_left@2x.png" alt=""></div>
        <div class="gallery-title">
          <router-link to="/">
            <span class="title-center">My Gallery</span>
          </router-link>
        </div>
        <div class="box-close">
          <router-link to="/PabloMain" class="btn-close"><img src="@/assets/images/common/close@2x.png" alt=""></router-link>
        </div>
      </div>
    <div class="contents">
      <div class="bgc-section">
        <div class="img-m bg">
          <img src="@/assets/images/temp/sample_img_02.png" alt="" class="img-m">
        </div>
      </div>
      <div class="info-section">
        <ul class="infomation">
          <li class="info">
            <div>내 그림</div>
            <div>47</div>
          </li>
          <li class="info">
            <div>공개한 그림</div>
            <div>32</div>
          </li>
          <li class="info">
            <div>조회수</div>
            <div>64K</div>
          </li>
          <li class="info">
            <div>좋아요 수</div>
            <div>1728</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="contents">
      <div>
        <b-tabs content-class="mt-3" fill justified>
          <b-tab title="내 그림" active>
            <div>
              <div class="menu-section">
                <div class="button-left">
                  <b-button variant="light">ALL</b-button>
                  <b-button variant="light">Pablo Drawing</b-button>
                  <b-button variant="light">Pablo Classic</b-button>
                  <b-button variant="light">Canvas</b-button>
                </div>
                <div class="right-button">
                  <ul>
                    <li>최신순</li>
                    <li>오래된순</li>
                  </ul>
                </div>
              </div>
              <div class="section-gallery">
                <div class="">
                  <ul>
                    <li>
                      <div class="img"><img src=""></div>
                      <div>Curious Stage 3</div>
                      <div>최초의 사람은 어떤 사람이었을까요?</div>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div class="img"><img src=""></div>
                      <div>Curious Stage 3</div>
                      <div>최초의 사람은 어떤 사람이었을까요?</div>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div class="img"><img src=""></div>
                      <div>Curious Stage 3</div>
                      <div>최초의 사람은 어떤 사람이었을까요?</div>
                    </li>
                  </ul>
                </div>
                <div class="">
                  <ul>
                    <li>
                      <div class="img"><img src=""></div>
                      <div>Curious Stage 14</div>
                      <div>최초의 사람은 어떤 사람이었을까요?</div>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div class="img"><img src=""></div>
                      <div>Curious Stage 13</div>
                      <div>최초의 사람은 어떤 사람이었을까요?</div>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div class="img"><img src=""></div>
                      <div>Curious Stage 12</div>
                      <div>최초의 사람은 어떤 사람이었을까요?</div>
                    </li>
                  </ul>
                </div>
                <div class="">
                  <ul>
                    <li>
                      <div class="img"><img src=""></div>
                      <div>Curious Stage 12</div>
                      <div>최초의 사람은 어떤 사람이었을까요?</div>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div class="img"><img src=""></div>
                      <div>Curious Stage 12</div>
                      <div>최초의 사람은 어떤 사람이었을까요?</div>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div class="img"><img src=""></div>
                      <div>Curious Stage 12</div>
                      <div>최초의 사람은 어떤 사람이었을까요?</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab title="공개된 그림">
          </b-tab>
          <b-tab title="내 녹음 듣기">
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'myGallery1'
}
</script>

<style lang="scss" scoped>

</style>
