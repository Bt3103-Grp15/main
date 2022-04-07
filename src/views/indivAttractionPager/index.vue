<template>
  <div class="indiv-attraction-pager">
    <div class="top-bg">
      <div class="Victoria">Victoria Peak</div>
      <div class="Webinar">
        A Free Webinar on How to Unleash Your Inner Entrepreneur.
      </div>
    </div>
    <div class="image-list">
      <div class="mbx">
        <span @click="jumpPage('index')">destination</span> > <span @click="jumpPage('trip-plan-list')">Hongkong</span> > <span>attraction</span>
      </div>
      <div class="image-main">
        <img src="../../assets/image/4bc7041ef2e94013a1802911c4c70070.jpeg" alt="">
      </div>
      <div class="desc-main">
        <h2>
          Victoria Peak (Tai Ping Shan in Chinese), also known as Mount Austin, or locally as The Peak. It is the highest hill on Hong Kong Island with an elevation of 552m. With around 7 million visitors per year, the Peak is a major tourist attraction of Hong Kong. It has views of the city and its waterfront.
        </h2>
        <div class="Ticket">
          Buy The Ticket
        </div>
      </div>
    </div>
    <div class="comments-block">
      <div class="title-block">
        <h2>
          Users' Comments on this City
        </h2>
        <div @click="Readmore" class="More">
          Read More >
        </div>
      </div>
        在这里放comments的展示
    </div>
    <div>
      <div class="title-block">
        <h2>
          Add your Comment
        </h2>
      </div>
      <div class="textAre-block">
        <textarea placeholder="How can we do better next time?" name="" id=""></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.indiv-attraction-pager {
  background: url(../../assets/image/bc3ec7bc825c4e6ca746c659189cea83.jpeg) no-repeat;
    background-attachment:fixed;
    background-size: cover;
    padding-bottom: 30px;
    .top-bg {
      background: url(../../assets/image/bigimg.jpeg) no-repeat;
      background-size: 100% 100%;
      height: 560px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .Victoria {
        font-size: 80px;
        letter-spacing: normal !important;
        color: #fff;
        text-align: center;
        font-weight: bold;
      }
      .Webinar {
        color: #fff;
        font-weight: bold;
        text-align: center;
        font-size: 20px;
        letter-spacing: normal !important;
      }
    }
    .image-list {
      margin: 0 auto;
      width: 980px;
      position: relative;
      margin-bottom: 100px;
      .mbx {
        font-size: 20px;
        padding: 10px 0;
        span {
          font-size: 20px;
          cursor: pointer;
        }
      }
      .image-main {
        width: 590px;
        height: 483px;
        z-index: 10;
        position: relative;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .desc-main {
        width: 600px;
        height: 444px;
        background: #fff;
        position: absolute;
        right: -210px;
        bottom: -80px;
        padding: 20px;
        padding-top: 80px;
        h2 {
          font-size: 16px;
          line-height: 1.8;
        }
        .Ticket {
          width: 190px;
          height: 40px;
          margin-top: 90px;
          margin-left: 110px;
          background: #3c72d3;
          line-height: 40px;
          text-align: center;
          color: #fff;
          cursor: pointer;
          &:hover {
            background: #fff;
            color: #3c72d3;
          }
        }
      }
    }
  .title-block{
      padding: 50px 130px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-size: 30px;
      }
      .More {
        letter-spacing:normal !important;
        font-size: 20px;
        cursor: pointer;
        &:hover {
          border: 0px solid #000000;
          border-bottom: 1px solid #000000;
          background: rgba(255, 255, 255, 0);
          letter-spacing: 0.2em !important;
        }
      }
    }

    .textAre-block {
      height: 265px;
      width: 980px;
      border: 2px solid rgb(145,145,145;);
      margin: 0 auto;
      textarea {
        padding: 10px;
        height: 100%;
        width: 100%;
        border: none;
        /*去除阴影*/
        box-shadow:none;
        /*聚焦input的蓝色边框*/
        outline: none;
        /*textarea 禁止拖拽*/
        resize: none;
        /*去除边框*/
        border: none;
        /*常用于IOS下移除原生样式*/
        -webkit-appearance: none;
        /*点击高亮的颜色*/
        -webkit-tap-highlight-color:rgba(0,0,0,0);
      }

    }
}
</style>
