<template>
  <div class="indiv-attraction-pager">
    <div class="top-bg" :style="{backgroundImage: 'url(' + require('../../assets/image/cities-main-img/'+this.cityname+'.jpg') + ')' }">
      <div class="Victoria">{{ attraction.name }}</div>
      <div class="Webinar">
        A Free Webinar on How to Unleash Your Inner Entrepreneur.
      </div>
    </div>
    <div class="image-list">
      <div class="mbx">
        <!-- <span @click="jumpPage('index')">destination</span> > <span @click="jumpPage('trip-plan-list')">Hongkong</span> > <span>attraction</span> -->
      </div>
      <div class="image-main">
        <img
          :src="imgurl"
          alt=""
        />
      </div>
      <div class="desc-main">
        <h2>
          {{attraction.des.substring(0,300)}} ...
        </h2>
        <div class="Ticket">Buy The Ticket</div>
      </div>
    </div>
    <div class="comments-block">
      <div class="title-block">
        <h2>Users' Comments on this City</h2>
        <div class="More" @click="jumpCommentListing">Read More ></div>
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
          required="true"
        ></textarea>
        <button class="btn-comments" @click="submitCom">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  doc,
  getDoc,
  addDoc,
  collection,
  Timestamp,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { ref as Ref } from "vue";
import { db, storage } from "../../firebase/index";
import Comments from "../../components/Comments.vue";
import { getDownloadURL, ref } from '@firebase/storage';
export default {
  props: ["id", "cityname"],
  data() {
    return {
      commentarea: "",
    };
  },
  components: {
    Comments,
  },
  setup(props) {
    const attraction = Ref("");
    const imgurl = Ref("");
    const load = async () => {
      try {
        const res = await getDoc(
          doc(db, "cities/" + props.cityname+"/attractions", props.id)
        );
        attraction.value = res.data();
        getDownloadURL(ref(storage, res.data().images[0])).then((url) => {
          imgurl.value = url;
        })
      } catch (err) {
        alert(err.message);
        console.log(err);
      }
    };
    const comments = Ref([]);
    const dbRef = collection(
      db,
      "cities/"+ props.cityname + "/attractions/" + props.id + "/comments"
    );
    const loadComm = async () => {
      const q = query(dbRef, orderBy("date", "desc"), limit(3));
      const res = await getDocs(q);
      comments.value = res.docs.map((doc) => {
        // console.log(doc.data());
        return { ...doc.data(), id: doc.id };
      });
    };

    load();
    loadComm();
    return {
      attraction,
      comments,
      loadComm,
      imgurl
    };
  },
  methods: {
    async submitCom() {
      if (!this.commentarea) {
        alert("Cannot submit empty comments");
        return;
      }
      try {
        await addDoc(
          collection(
            db,
            "cities/" + this.cityname + "/attractions/" + this.id + "/comments"
          ),
          {
            date: Timestamp.fromDate(new Date()),
            username: this.$store.state.username,
            userId: this.$store.state.user.uid,
            content: this.commentarea,
          }
        );
        this.loadComm();
      } catch (err) {
        console.log(err);
      }

      alert("Comments successfully!");
      this.commentarea = "";
    },
    jumpCommentListing() {
      this.$router.push({ name: "indivattraccomments", params: {id: this.id, cityname: this.cityname}})
    },
  },
};
</script>

<style lang="less" scoped>
.indiv-attraction-pager {
  background: url(../../assets/image/bc3ec7bc825c4e6ca746c659189cea83.jpeg)
    no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding-bottom: 30px;
  .top-bg {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
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
      font-display: justify;
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
.commit-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
</style>
