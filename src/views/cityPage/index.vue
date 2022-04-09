<template>
  <div class="cityPage">
    <div class="top-block" :style="{backgroundImage: 'url(' + require('../../assets/image/cities-main-img/'+cityinfo.cityname+'.jpg') + ')' }">
      <div class="city-name">
        <h1>{{cityinfo.cityname}}</h1>
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
              <svg-icon class="svg-icon" iconClass="shoucang" @click="jumpPage('attractionListPage')"></svg-icon>
            </div>
            <h2 @click="jumpAttraction()" >Attractions</h2>
          </li>
          <li>
            <div class="icon-block qianbi">
              <svg-icon class="svg-icon" iconClass="qianbi" @click="jumpPage('blogListPage')"></svg-icon>
            </div>
            <h2 @click="jumpBlogListing()">Blogs</h2>
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

    <!--地图部分从这里开始-->
    <div class="main-content">
      <div class="map-block">
        <div class="title-block">
          <h2>Classic Trip Plans in {{cityinfo.cityname}}</h2>
        </div>
        <div class="map-content">
          <div>
            <div class="hongTit">
              3 Days Trip Plan in {{cityinfo.cityname}}
            </div>
            <div class="mapmain">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7381.797921247366!2d114.16626071642457!3d22.319660701187885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400c62bc7810f%3A0x3ba12a5918081894!2z6aaZ5riv5pe66KeS!5e0!3m2!1szh-CN!2s!4v1648890556315!5m2!1szh-CN!2s"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div>
            <div class="hongTit">
              4 Days Trip Plan in {{cityinfo.cityname}}
            </div>
            <div class="mapmain">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7382.506566694534!2d114.18115757844798!3d22.306258767275114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400ddfd685b6f%3A0xa2dcb7a8a243b328!2z6aaZ5riv57qi56Oh!5e0!3m2!1szh-CN!2s!4v1648890620610!5m2!1szh-CN!2s"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>


      <div class="comments-block">
        <div class="title-block">
          <h2>Users' Comments on this City</h2>
          <div class="More" @click="jumpCommentListing">Read More ></div>
        </div>
        <div v-if="comments.length === 0">
          <h2>There is no comments now</h2>
        </div>
        <div class="commit-list">
          <Comments
            :comments="comment"
            v-for="comment in comments"
            :key="comment.date"
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
            v-model="commentarea"
            required=true
          ></textarea>
          <button class="btn-comments" @click="submitCom">Submit</button>
        </div>
      </div>
    </div>





  </div>
</template>

<script>
import Comments from "../../components/Comments.vue";
import { db } from "../../firebase/index";
import { collection, addDoc, query, orderBy, limit, getDocs, getDoc, doc } from "firebase/firestore";
import { ref } from "vue";
import { Timestamp } from "firebase/firestore";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      commentarea: "",
    };
  },
  components: {
    Comments,
  },
  props: ["cityname"],
  methods: {
    async submitCom() {
      if (!this.commentarea) {
        alert("Cannot submit empty comments")
        return;
      }
      try {
        await addDoc(collection(db, "cities/" + this.cityname + "/comments"), {
          date: Timestamp.fromDate(new Date()),
          username: this.$store.state.username,
          userId: this.$store.state.user.uid,
          content: this.commentarea,
        });
        this.load()
      } catch (err) {
        console.log(err);
      }

      alert("Comments successfully!");
      this.commentarea = "";
    },

    jumpAttraction() {
      this.$router.push({ name: "attractionListPage", params: {cityname: this.cityname}})
    },

    jumpBlogListing() {
      this.$router.push({ name: "blogListPage", params: {city: this.cityname}})
    },

    jumpCommentListing() {
      this.$router.push({ name: "commentslisting", params: {city: this.cityname}})
    }
  },
  setup(props) {
    const router = useRouter();
    const cityinfo = ref({});
    const loadcity = async() => {
      const res = await getDoc(doc(db, "cities/", props.cityname))
      cityinfo.value = res.data()
    }
    loadcity()
    const comments = ref([]);
    const dbRef = collection(db, "cities/" + props.cityname+"/comments")
    const load = async () => {
      const q = query(dbRef, orderBy("date", "desc"), limit(3));
      const res = await getDocs(q);
      comments.value = res.docs.map((doc) => {
        // console.log(doc.data());
        return { ...doc.data(), id: doc.id };
      });
    };
    load();

    const jumpPage = (name) => {
    router.push({
      name,
    });
  };

    return { comments, load, cityinfo, jumpPage };
  },
};

</script>

<style lang="less" scoped>
.cityPage {
  .top-block {
    // background: url(../../assets/image/63a0e8_b5538adaddce4208b3cf6dff62640d6e_mv2.jpeg)
    //   no-repeat;
    background-repeat: no-repeat;
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
        font-family: fantasy;
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
            cursor: pointer;
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
            cursor: pointer;
            background: #b84c1f;
            &:hover {
              background: none;
              .svg-icon {
                color: #b84c1f;
              }
            }
          }
          .qianbi {
            cursor: pointer;
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
            font-family: fantasy;
            font-weight: bold;
          }
        }
      }
      .title {
        padding: 50px 50px 40px;
        font-size: 25px;
        letter-spacing: normal !important;
        font-weight: bold;
      }
      .content {
        padding: 0 50px;
        font-size: 20px;
        letter-spacing: normal !important;
        line-height: 25px;
        text-align: left;

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
        padding: 30px ;
        &:first-child {
          margin-right: 20px;
        }
      }
      .mapmain {
        width: 100%;
        height: calc(100% - 40px);
      }
      .hongTit {
        padding-bottom: 10px;
        font-size: 18px;
        text-align: left;
        font-weight: bold;
      }
    }
    .title-block {
      padding: 50px 130px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-size: 35px;
        font-family: fantasy;
        font-weight: bold;
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
