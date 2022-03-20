<template>
  <div class="layout">
    <header><Header/></header>
    <section class="content">
      <router-view></router-view>
    </section>

    <footer>
      <h2>
        <div>
          <div class="item">About World Explorer</div>
          <div class="item">Do Business With Us</div>
          <div class="item">Explore</div>
        </div>
        <div class="second">
          <div class="item">About Us</div>
          <div class="item">Owners</div>
          <div class="item">Write a Review</div>
        </div>
        <div class="second">
          <div class="item">Trust&Safety</div>
          <div class="item">Business Advantage</div>
          <div class="item">Join</div>
        </div>
        <div class="second">
          <div class="item">Resources&Policies</div>
          <div class="item">Sponsored Placements</div>
          <div class="item">Help Centre</div>
        </div>
      </h2>
      <div class="bot-logo">
        <div class="left-log">
          <img src="../assets/image/chongwutubiao04.png" mode="" />
        </div>
        <div>
          <h2>
            WExplorer
          </h2>
        </div>
        <div class="logo-list">
          <img src="../assets/image/01ab6619093f45388d66736ec22e5885.png" alt="">
          <img src="../assets/image/23fd2a2be53141ed810f4d3dcdcd01fa.png" alt="">
          <img src="../assets/image/81af6121f84c41a5b4391d7d37fce12a.png" alt="">
          <img src="../assets/image/9c486556465843c5850fabfd68dfae49.png" alt="">
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.layout {
  background: #ccc;
  height: 100%;
  padding-top: 105px;
  header {
    height: auto;
    width:100%;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
  }

  footer {
    padding: 56px calc((100% - 980px) * 0.5);
    padding-bottom: 0;
    background: #5581b0;
    height: 279px;
    color: #fff;
    font-family: avenir-lt-w01_85-heavy1475544,avenir-lt-w05_85-heavy,sans-serif;
    // font-weight: 700;
    letter-spacing: 0.2em;
    h2 {
      > div {
        display: flex;
        padding-bottom: 5px;
        &.second{
          > div.item {
            font-size: 15px !important;
          }
        }
        > div.item {
          flex-shrink: 0;
          margin-right: 100px;
          width: 287px;
          font-size: 20px;
        }
      }
    }
    .bot-logo {
      display: flex;
      align-items: center;
      .left-log {
        img {
          height: 61px;
          width: 61px;
          margin-right: 10px;
        }

      }
      h2 {
        font-size: 25px;
        letter-spacing: 0.2em;
      }
      .logo-list {
        margin-left: 40px;
        img {
          height: 21px;
          width: 21px;
          margin-right: 3px;
        }
      }
    }
  }
}
</style>
