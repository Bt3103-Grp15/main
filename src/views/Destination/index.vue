<template>
  <div class="index">
      <div class="top-search">
          <div>
              <div class="top-text">
                  <h2>
                    Where to?
                  </h2>
              </div>
              <!-- <div class="input-block">
                  <input type="text" placeholder="Search for a city">
              </div> -->
              <div class="input-block">
                <form id="form" role="search" >
                <input id="query" name="q" placeholder="Search here..." aria-label="Search through site content">
                <button class="searchbtn" @click="updatedestination">
                <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 
                36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 
                0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 
                408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 
                218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
                </button>
                </form>
            </div>
          </div>
      </div>
      <div class="blog-list">
          <div class="blog-list-grouping" v-for="item in list" :key="item.id">
             <div class="grouping-name">
                {{ item.groupingName }}
             </div>
             <div class="blog-list-main">
                 <div class="blog-list-item" v-for="cityInfo in item.child" :key="cityInfo.id" :style="background">
                     <div class="city-name">{{ cityInfo.cityName }}</div>
                   <div class="read-more" v-if="cityInfo.id === 1-3" @click="jumpPage('cityPage')">Read More</div>
                   <div class="read-more" v-if="cityInfo.id !== 1-3">Read More</div>
                 </div>
             </div>
          </div>
      </div>
      <div class="bot-list">
          <div>
            <div class="featured">
                As featured in
            </div>
            <div>
                <div>travel</div>
                <div>blog</div>
            </div>
            <div>
                PLANETOUR
            </div>
            <div>
                WORLD
                    TRAVEL
            </div>
            <div>
                skycloud
            </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const list = [
    {
        groupingName: 'Top Destinations Recently',
        id: 1,
        child: [
            {
                cityName: 'Kuala Lumpur',
                id: 1-1,
                picUrl: "../../assets/image/63a0e8_950d68896707457a8e53f332ee0c1024_mv2.jpeg",
            },
            {
                cityName: 'Kuala Lumpur',
                id: 1-2,
                picUrl: "../../assets/image/63a0e8_950d68896707457a8e53f332ee0c1024_mv2.jpeg",
            },
            {
                cityName: 'Hong Kong',
                id: 1-3,
                picUrl: "../../assets/image/63a0e8_b5538adaddce4208b3cf6dff62640d6e_mv2.jpeg",
            }
        ]
    },
    {
        groupingName: 'Top Destinations Recently',
        id: 2,
        child: [
            {
                cityName: 'Kuala Lumpur',
                id: 2-1,
                picUrl: "../../assets/image/63a0e8_950d68896707457a8e53f332ee0c1024_mv2.jpeg",
            },
            {
                cityName: 'Kuala Lumpur',
                id: 2-2,
                picUrl: "../../assets/image/63a0e8_950d68896707457a8e53f332ee0c1024_mv2.jpeg",
            },
            {
                cityName: 'Kuala Lumpur',
                id: 2-3,
                picUrl: "../../assets/image/63a0e8_b5538adaddce4208b3cf6dff62640d6e_mv2.jpeg",
            }
        ]
    }
]



const wordKey = ref("1");
const jumpPage = (name, index) => {
  router.push({
    name,
  });
  wordKey.value = index;
};



</script>

<style lang="less" scoped>
.index {
    background: #fff;
    .top-search{
        height: 500px;
        width: 100%;
        background: url(../../assets/image/5bfb6f_26f1a5c736e544e09c63c82a4c792645_mv2_d_3839_1306_s_2.jpeg);
        background-size: cover;
        padding-top: 56px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .top-text {
            font-family: avenir-lt-w01_85-heavy1475544,avenir-lt-w05_85-heavy,sans-serif;
            font-size: 30px;
            color: #fff;
            text-align: center;
            font-weight: 400;
            padding-bottom: 20px;
        }
        .input-block {
            width: 456px;
            height: 68px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 5px;
            border: 1px solid rgb(61 155 233);
            display: flex;
            align-items: center;
            padding-right: 50px;
            padding-left: 10px;
        }
        form {
            width: 600px;
            height: 44px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
        }
        input {
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
            background: none;
            font-size: 20px;
            display: block;
            flex: 1
        }.searchbtn {
            all: unset;
            cursor: pointer;
            width: 44px;
            height: 44px;
        }
    }
    .blog-list {
        width: 980px;
        margin: 0 auto;
        padding-bottom: 90px;
        background: #fff;
        .blog-list-grouping {
            .grouping-name {
                padding: 57px 0 32px 32px;
                font-size: 36px;
                letter-spacing: 0 !important;
                background: #fff;
            }
            .blog-list-main {
                display: flex;
                flex-wrap: wrap;
                .blog-list-item {
                    height: 318px;
                    width: 318px;
                    margin-right: 13px;
                    background: url(../../assets/image/63a0e8_950d68896707457a8e53f332ee0c1024_mv2.jpeg);
                    // padding-bottom: 10px;
                    padding-top: 178px;
                    padding-left: 30px;
                    color: #fff;
                    flex-shrink: 0;
                    &:nth-child(3n) {
                        margin-right: 0;
                    }
                    .city-name {
                        font-size: 30px;
                        font-weight: bold;
                        margin-bottom: 5px;
                    }
                    .read-more {
                        width: 105px;
                        height: 33px;
                        border: 1px solid #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &:hover {
                            background: #fff;
                            color: #000;
                        }
                    }
                }
            }
        }
    }
    .bot-list {
        height: 130px;
        background: #f2f2f2;
        display: flex;
        align-items: center;
        > div {
            display: flex;
            width: 980px;
            margin: 0 auto;
            display: flex;
            .featured {
                border-right: 1px solid #000;
                padding-left: 0;
            }
            >div {
                padding: 0 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }
        }
    }
}
</style>
