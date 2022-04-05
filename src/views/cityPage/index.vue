<template>
  <div class="cityPage">
    <div class="top-block">
      <div class="city-name">
        <h1>Hong Kong</h1>
      </div>
      <div class="Routes-block">
        <ul>
          <li>
            <div class="icon-block">
              <svg-icon class="svg-icon" iconClass="dingwei"></svg-icon>
            </div>
            <h2>Travel Routes</h2>
          </li>
          <li>
            <div class="icon-block shoucang">
              <svg-icon class="svg-icon" iconClass="shoucang"></svg-icon>
            </div>
            <h2>Attractions</h2>
          </li>
          <li>
            <div class="icon-block qianbi">
              <svg-icon class="svg-icon" iconClass="qianbi"></svg-icon>
            </div>
            <h2>Blogs</h2>
          </li>
          <li>
            <div class="icon-block shouji">
              <svg-icon class="svg-icon" iconClass="shouji"></svg-icon>
            </div>
            <h2>Design Routes</h2>
          </li>
        </ul>
        <div class="title">
          A vibrant harbour city with an unbeatable food scene
        </div>
        <div class="content">
          Delectable dim sum, floating islands, and a one-of-a-kind skyline are
          just some of Hong Kong’s enchanting features. Eat your way across
          Temple Street Night Market with its fish balls and stinky tofu, or
          settle in for dim sum at Michelin-starred venues like Tim Ho Wan. For
          traditional Chinese architecture, head to Ngong Ping Village, then
          take the tram to the tippity-top of Victoria Peak for skyscraper
          views. The gentle hills of Nan Lian Garden will deliver serenity, but
          a detour through the city’s cocktail bars will bring back Hong Kong’s
          urban buzz.
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="map-block">
        <div class="title-block">
          <h2>Classic Trip Plans in Hong Kong</h2>
        </div>
        <div class="map-content">
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="comments-block">
        <div class="title-block">
          <h2>Users' Comments on this City</h2>
          <div class="More">Read More ></div>
        </div>
        <div class="commit-list">
          <Comments
            :comments="comment"
            v-for="comment in comments"
            :key="comment.id"
          />
        </div>
      </div>
      <div>
        <div class="title-block">
          <h2>Add your Comment</h2>
        </div>
        <div class="textAre-block">
          <textarea
            placeholder="How can we do better next time?"
            name=""
            id=""
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comments from "../../components/Comments.vue";
import { db } from "../../firebase/index";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";

export default {
  data() {
    return {
      // commentslist: [
      //   {
      //     date: "Date: 2022.02.22",
      //     comment:
      //       "I really like the food in Hong Kong!! My favourite restaurant is near to the Victoria Harbour and the dim sum there ...",
      //   },
      //   {
      //     date: "Date: 2022.02.20",
      //     comment:
      //       "I really like the food in Hong Kong!! My favourite restaurant is Poly Canteen ...",
      //   },
      // ],
    };
  },
  components: {
    Comments,
  },
  setup() {
    const comments = ref([]);
    const load = async () => {
      const res = await getDocs(collection(db, "cities/Hong-Kong/comments"));
      comments.value = res.docs.map((doc) => {
        console.log(doc.data());
        return { ...doc.data(), id: doc.id };
      });
    };
    load();
    return { comments };
  },
};
</script>

<style lang="less" scoped>
.cityPage {
  .top-block {
    background: url(../../assets/image/63a0e8_b5538adaddce4208b3cf6dff62640d6e_mv2.jpeg)
      no-repeat;
    background-attachment: fixed;
    background-size: cover;
    .city-name {
      padding-top: 130px;
      text-align: center;
      h1 {
        font-size: 150px;
        color: #fff;
        letter-spacing: -0.03em !important;
        font-weight: bold;
        line-height: 1.2;
        text-align: center;
      }
    }
    .Routes-block {
      width: 980px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.8);
      margin-top: 80px;
      height: 420px;
      ul {
        display: flex;
        padding: 20px;
        align-items: center;
        justify-content: space-between;
        li {
          display: flex;
          align-items: center;
          .icon-block {
            height: 62px;
            width: 62px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
            background: #4d7484;
            &:hover {
              background: none;
              .svg-icon {
                color: #4d7484;
              }
            }
            .svg-icon {
              font-size: 21px;
              height: 21px;
              width: 21px;
              color: #fff;
            }
          }
          .shoucang {
            background: #b84c1f;
            &:hover {
              background: none;
              .svg-icon {
                color: #b84c1f;
              }
            }
          }
          .qianbi {
            background: #3a70d8;
            &:hover {
              background: none;
              .svg-icon {
                color: #3a70d8;
              }
            }
          }
          .shouji {
            background: #eda53a;
            &:hover {
              background: none;
              .svg-icon {
                color: #eda53a;
              }
            }
          }
          h2 {
            font-size: 18px;
          }
        }
      }
      .title {
        padding: 50px 50px 40px;
        font-size: 25px;
        letter-spacing: normal !important;
      }
      .content {
        padding: 0 50px;
        font-size: 18px;
        letter-spacing: normal !important;
        line-height: 25px;
      }
    }
  }
  .main-content {
    background: url(../../assets/image/bc3ec7bc825c4e6ca746c659189cea83.jpeg);
    background-attachment: fixed;
    background-size: cover;
    padding-bottom: 50px;
    .map-content {
      display: flex;
      margin: 0 auto;
      justify-content: center;
      > div {
        height: 416px;
        width: 572px;
        background: #fff;
        flex-shrink: 0;
        &:first-child {
          margin-right: 20px;
        }
      }
    }
    .title-block {
      padding: 50px 130px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-size: 30px;
      }
      .More {
        letter-spacing: normal !important;
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
    .commit-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
    }

    .textAre-block {
      height: 265px;
      width: 980px;
      border: 2px solid rgb(145, 145, 145;);
      margin: 0 auto;
      textarea {
        padding: 10px;
        height: 100%;
        width: 100%;
        border: none;
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
      }
    }
  }
}
</style>
