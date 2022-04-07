<template>
  <div class="blog-main">
    <div class="top-block">
      <div class="top-main">
        <div class="top-left">
          <div class="last-btn">
            Country >
          </div>
          <div class="last-btn">
            Season >
          </div>
          <div class="last-btn">
            City >
          </div>
          <div class="input-block">
            <input placeholder="Enter search term" type="text">
            <button class="searchbtn" @click="searchforcityblog()">
            <svg-icon class="svg-icon" iconClass="sousuo"></svg-icon>
            </button>
          </div>
        </div>

        <div class="top-right">
          <div @click="previous" class="left-icon">
            <svg-icon class="svg-icon" iconClass="zuoj"></svg-icon>
          </div>
          <div @click="next" class="right-icon">
            <svg-icon class="svg-icon" iconClass="youj"></svg-icon>
          </div>
          <div class="indicate">
            <div v-for="(item, dot) in list" :key="dot" :class="{ active: dot === index }"></div>
          </div>
          <img :src="currImg" alt="">
        </div>

      </div>
      <div class="bottom-main">
        <div class="title">
          <h3>
            Recommends Blogs
          </h3>
        </div>
        <div class="img-list">
          <div>
            <img src="../../assets/image/9_8.jpeg" alt="">
            <div class="read-more">Read More</div>
            <div class="diming">3 Days in Taipei</div>
          </div>
          <div>
            <img src="../../assets/image/9_4.jpeg" alt="">
            <div class="read-more">Read More</div>
            <div class="diming">5 Days in Singapore</div>
          </div>
          <div>
            <img src="../../assets/image/9_9.jpeg" alt="">
            <div class="read-more">Read More</div>
            <div class="diming">7 Days in Seoul</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "@vue/reactivity"
import {useRouter} from "vue-router";

const router = useRouter();

const searchforcityblog = () => {
  let searchresult = document.querySelector("input[name=q]").value;
  router.push({
    name: 'blogListPage', params: {city : searchresult}
  });
};

const list = [
  require('../../assets/image/b_1.jpeg'),
  require('../../assets/image/b_2.jpeg'),
  require('../../assets/image/b_4.jpeg')
]
const currImg = ref(list[2])
let index = ref(0)
const next = () => {
  if (index.value >= list.length - 1) {
    index.value = list.length - 1
    return
  }
  currImg.value = list[++index.value]
}
const previous = () => {
  if (index.value <= 0) {
    index.value = 0
    return
  }
  currImg.value = list[--index.value]

}
</script>

<style lang="less" scoped>
.blog-main {
  background: url(../../assets/image/63a0e8_b5538adaddce4208b3cf6dff62640d6e_mv2.jpeg) no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .top-block {
    width: 980px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.5);
    min-height: 1120px;
    overflow: hidden;
    padding: 30px;

    .top-main {
      display: flex;
    }

    .top-left {
      padding-right: 30px;

      .last-btn {
        width: 300px;
        height: 40px;
        background: #f2f2f2;
        border: 1px solid #f2f2f2;
        color: #000;
        text-align: center;
        line-height: 40px;
        font-size: 17px;
        margin-bottom: 20px;

        &:first-child {
          margin-top: 80px;
        }

        &:hover {
          background: #3c72d3;
        }
      }

      .input-block {
        width: 300px;
        height: 46px;
        padding: 0 50px 0 20px;
        background: #fff;
        border-radius: 20px;
        position: relative;

        input {
          /*去除阴影*/
          box-shadow: none;
          /*聚焦input的蓝色边框*/
          outline: none;
          /*textarea 禁止拖拽*/
          resize: none;
          /*去除边框*/
          border: none;
          /*常用于IOS下移除原生样式*/
          -webkit-appearance: none;
          /*点击高亮的颜色*/
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          width: 100%;
          height: 100%;
        }

        .svg-icon {
          height: 21px;
          width: 21px;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    .top-right {
      width: 600px;
      height: 370px;
      background: red;
      position: relative;

      .left-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;

        svg {
          height: 30px;
          color: #fff;
        }
      }

      .right-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;

        svg {
          height: 30px;
          color: #fff;
        }
      }

      .indicate {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: center;

        div {
          height: 10px;
          width: 10px;
          background: #fff;
          border-radius: 50%;
          margin-right: 10px;
          cursor: pointer;

          &.active {
            background: #000;
            border: 1px solid #fff;
          }
        }
      }

      img {
        height: 100%;
        width: 100%;
      }
    }

    .bottom-main {
      height: 30px;
      width: 100%;
      padding-top: 130px;

      .title {
        border-bottom: 2px solid #000;
        width: 500px;

        h3 {
          font-family: fantasy;
          text-align: left;
          font-size: 42px;
          letter-spacing: normal !important;
        }
      }

      .img-list {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;

        > div {
          position: relative;

          img {
            width: 277px;
            height: 400px;
          }

          .read-more {
            position: absolute;
            width: 105px;
            height: 33px;
            border: 1px solid #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: normal !important;
            right: 20px;
            top: 20px;
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            &:hover {
              background: #fff;
              color: #000;
            }
          }

          .diming {
            position: absolute;
            letter-spacing: normal !important;
            left: 50%;
            transform: translateX(-50%);
            bottom: 80px;
            color: #fff;
            font-size: 27px;
            width: 100%;
            padding-left: 20px;
            font-weight: bold;
            font-family: fantasy;
          }
        }
      }
    }
  }
}
</style>
