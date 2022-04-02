<template>
  <div class="indiv-blog-page">
    <div class="bg">
      <video id="pageBackground_jkx4t_video" class="_3vVMz" role="presentation" crossorigin="anonymous" playsinline="" preload="auto" muted="" loop="" autoplay="" tabindex="-1" width="100%" height="100%" src="../../assets/image/file.mp4" style="width: 100%; height: 100%; object-position: center center; opacity: 1; object-fit: cover;"></video>
    </div>
    <div class="type-area">
      <div class="header-title">
        <h2>My First Trip to Hong Kong</h2>
      </div>
      <div class="top-content">
        This is a Paragraph. Click on "Edit Text" or double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.
      </div>
      <div class="top-option">
        <div class="user">
          <svg-icon class="svg-icon" iconClass="dingwei"></svg-icon>
          <h2>Dora Zhu</h2>
          <div>follow me</div>
        </div>
        <div class="text-like">
          <div class="like">
            <svg-icon class="svg-icon" iconClass="dingwei"></svg-icon>
            <h2>Like this Blog</h2>
          </div>
          <div class="Share">
            <svg-icon class="svg-icon" iconClass="dingwei"></svg-icon>
            <h2>Share</h2>
          </div>
          <div class="Archive">
            <svg-icon class="svg-icon" iconClass="dingwei"></svg-icon>
            <h2>Archive</h2>
          </div>
        </div>
      </div>
      <div class="img-list">
        <div class="filst-img">
          <img src="../../assets/image/4bc7041ef2e94013a1802911c4c70070.jpeg" alt="">
        </div>
        <div class="secand-img">
          <div class="s-left-img">
            <img src="../../assets/image/4bc7041ef2e94013a1802911c4c70070.jpeg" alt="">
          </div>
          <div class="s-right-img">
            <img src="../../assets/image/4bc7041ef2e94013a1802911c4c70070.jpeg" alt="">
          </div>
        </div>
        <div class="last-img">
          <div class="l-left-img">
            <img src="../../assets/image/4bc7041ef2e94013a1802911c4c70070.jpeg" alt="">
          </div>
          <div class="l-right-img">
            <img src="../../assets/image/4bc7041ef2e94013a1802911c4c70070.jpeg" alt="">
          </div>
        </div>
      </div>
      <div class="secand-title">
        <h2>
          Section Title
        </h2>
      </div>
      <div class="top-content">
        Every website has a story, and your visitors want to hear yours. This space is a great opportunity to give a full background on who you are, what your team does and what your site has to offer. Double click on the text box to start editing your content and make sure to add all the relevant details you want site visitors to know.
      </div>
      <div class="top-content last-coent">
        Every website has a story, and your visitors want to hear yours. This space is a great opportunity to give a full background on who you are, what your team does and what your site has to offer. Double click on the text box to start editing your content and make sure to add all the relevant details you want site visitors to know.
      </div>
      <div class="secand-title">
        <h2>
          Comments
        </h2>
      </div>
      <div class="iframe-block">
        <iframe class="iframe-content" src="https://app.commentsplugin.com/widget-wix?pageId=jkx4t&compId=comp-kzz12u9t&viewerCompId=comp-kzz12u9t&siteRevision=126&viewMode=site&deviceType=desktop&locale=en&tz=Asia%2FSingapore&regionalLanguage=en&width=653&height=150&instance=xYyxXlflwyp4sCawSnt_w8QjMmjJjU9yg5s4Qbk_sMA.eyJpbnN0YW5jZUlkIjoiMTJlOTQzNjgtZjc0YS00M2FjLTk4MzQtMzlmY2NlOWQyMTNhIiwiYXBwRGVmSWQiOiIxMzAxNjU4OS1hOWViLTQyNGEtOGE2OS00NmNiMDVjZTBiMmMiLCJzaWduRGF0ZSI6IjIwMjItMDMtMjNUMTM6MDk6MDMuOTA4WiIsImRlbW9Nb2RlIjpmYWxzZSwiYWlkIjoiZGU3ODhhNDgtNjc1Ni00NzBlLThjYTgtMDljZDZjZDRiMzRmIiwic2l0ZU93bmVySWQiOiI2M2EwZTg2OC03Yzk1LTQwZDEtYWZkMy1lMWJjZDg0NDU0OGMifQ&currency=SGD&currentCurrency=SGD&commonConfig=%7B%22brand%22%3A%22wix%22%2C%22bsi%22%3A%22c6c8cc6e-1407-4846-8420-c5e92f645044%7C8%22%2C%22BSI%22%3A%22c6c8cc6e-1407-4846-8420-c5e92f645044%7C8%22%7D&vsi=cd8342e3-a6cf-4822-8870-1cc1cd911588" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.indiv-blog-page {
  min-height: 100%;
  .type-area {
    width: 980px;
    margin: 0 auto;
    position: relative;
    z-index: 99999;
    background: rgba(255, 255, 255, 0.5);
    // padding: 30px;
  }
  .bg {
    width: 100%;
    min-height: 100%;
    position: fixed;
    top: 0;
  }
  .header-title {
    padding-top: 50px;
    padding-bottom: 30px;
    h2 {
      font-size: 50px;
      letter-spacing: normal !important;
    }
  }
  .top-content {
    font-size: 14px;
    width: 70%;
    line-height: 2.5;
    color: rgb(105,105,105);
  }
  .top-option {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    padding-right: 70px;
    .user {
      display: flex;
      align-items: center;
      h2 {
        margin-left: 10px;
        margin-right: 20px;
        font-size: 16px;
      }
      svg {
        height: 40px;
        width: 40px;
      }
      div {
        height: 40px;
        width: 125px;
        text-align: center;
        // line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #000;
        border-radius: 20px;
        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }
    .text-like {
      display: flex;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
        padding-right: 20px;
        &.like {
          color: #d32e6f;
        }
        &.Share {
          color: #5581b0;
        }
      }
      svg {
        height: 40px;
        width: 40px;
        margin-right: 10px;
      }
    }
  }
  .img-list {
    padding-top: 60px;
    .filst-img {
      padding-bottom: 10px;
      img {
        height: 300px;
        width: 980px;
      }
    }
    .secand-img {
      padding-bottom: 10px;
      display: flex;
      .s-left-img {
        img {
          height: 300px;
          width: 580px;
          margin-right: 10px;
        }
      }
      .s-right-img {
        img {
          height: 300px;
          width: 390px;
        }
      }
    }
    .last-img {
      padding-bottom: 10px;
      display: flex;
      .l-left-img {
        img {
          height: 300px;
          width: 390px;
          margin-right: 10px;
        }
      }
      .l-right-img {
        img {
          width: 580px;
          height: 300px;
        }
      }
    }
  }
  .secand-title {
    h2 {
      padding: 40px 0;
      font-size: 30px;
      letter-spacing: normal !important;
    }
  }
  .last-coent {
    padding-top: 30px;
  }
}
.iframe-block {
  height: 470px;
  width: 653px;
  .iframe-content {
    width: 100%;
    height: 100%;
  }
}
</style>
