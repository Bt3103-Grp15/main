<template>
  <div class="indiv-blog-page">
    <div class="bg">
      <video
        id="pageBackground_jkx4t_video"
        class="_3vVMz"
        role="presentation"
        crossorigin="anonymous"
        playsinline=""
        preload="auto"
        muted=""
        loop=""
        autoplay=""
        tabindex="-1"
        width="100%"
        height="100%"
        src="../../assets/image/file.mp4"
        style="
          width: 100%;
          height: 100%;
          object-position: center center;
          opacity: 1;
          object-fit: cover;
        "
      ></video>
    </div>
    <div class="type-area">
      <div class="header-title">
        <h2>{{ post.title }}</h2>
      </div>
      <div class="top-content">{{ post.description }}</div>
      <div class="top-option">
        <div class="user">
          <svg-icon class="svg-icon" iconClass="yinzhang1"></svg-icon>
          <h2>{{ post.author }}</h2>
          <div>follow me</div>
        </div>
        <div class="text-like">
          <div class="like" @click="likeBlog">
            <svg-icon class="svg-icon" iconClass="aixin1"></svg-icon>
            <h2>{{ post.likes }} Like this Blog</h2>
          </div>
          <div class="Share">
            <svg-icon class="svg-icon" iconClass="fenxiang"></svg-icon>
            <h2>Share</h2>
          </div>
          <div class="Archive">
            <svg-icon class="svg-icon" iconClass="Archive"></svg-icon>
            <h2>Archive</h2>
          </div>
        </div>
      </div>
      <div class="img-list">
        <div class="filst-img">
          <img :src="imgurl" alt="" />
        </div>
        <div class="secand-img">
          <div class="s-left-img">
            <img src="../../assets/image/c_l.jpeg" alt="" />
          </div>
          <div class="s-right-img">
            <img src="../../assets/image/c_r.jpeg" alt="" />
          </div>
        </div>
        <div class="last-img">
          <div class="l-left-img">
            <img src="../../assets/image/b_l.jpeg" alt="" />
          </div>
          <div class="l-right-img">
            <img src="../../assets/image/t_r.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div class="secand-title">
        <h2>{{ post.title }}</h2>
      </div>
      <div class="top-content">
        <div v-html="post.content" class="top-content"></div>
      </div>
      <!-- <div class="top-content last-coent">
        <div v-html="post.content" class="top-content"></div>
      </div> -->
      <!-- <div class="secand-title">
        <h2>Comments</h2>
      </div> -->
      <!-- <div class="iframe-block">
        <iframe
          class="iframe-content"
          src="https://app.commentsplugin.com/widget-wix?pageId=jkx4t&compId=comp-kzz12u9t&viewerCompId=comp-kzz12u9t&siteRevision=126&viewMode=site&deviceType=desktop&locale=en&tz=Asia%2FSingapore&regionalLanguage=en&width=653&height=150&instance=xYyxXlflwyp4sCawSnt_w8QjMmjJjU9yg5s4Qbk_sMA.eyJpbnN0YW5jZUlkIjoiMTJlOTQzNjgtZjc0YS00M2FjLTk4MzQtMzlmY2NlOWQyMTNhIiwiYXBwRGVmSWQiOiIxMzAxNjU4OS1hOWViLTQyNGEtOGE2OS00NmNiMDVjZTBiMmMiLCJzaWduRGF0ZSI6IjIwMjItMDMtMjNUMTM6MDk6MDMuOTA4WiIsImRlbW9Nb2RlIjpmYWxzZSwiYWlkIjoiZGU3ODhhNDgtNjc1Ni00NzBlLThjYTgtMDljZDZjZDRiMzRmIiwic2l0ZU93bmVySWQiOiI2M2EwZTg2OC03Yzk1LTQwZDEtYWZkMy1lMWJjZDg0NDU0OGMifQ&currency=SGD&currentCurrency=SGD&commonConfig=%7B%22brand%22%3A%22wix%22%2C%22bsi%22%3A%22c6c8cc6e-1407-4846-8420-c5e92f645044%7C8%22%2C%22BSI%22%3A%22c6c8cc6e-1407-4846-8420-c5e92f645044%7C8%22%7D&vsi=cd8342e3-a6cf-4822-8870-1cc1cd911588"
          frameborder="0"
        ></iframe>
      </div> -->
      <div class="comments">
        <hr />
        <div class="comments-block">
          <div class="title-block">
            <h2>Users' Comments on this Blog</h2>
            <div class="More" @click="jumpCommentListing">Read More ></div>
          </div>
          <div class="commit-list">
            <Comments
              :comments="comment"
              v-for="comment in comments"
              :key="comment.date"
            />
            <h2 v-if="comments.length === 0">There is no comments for this blog now.</h2>
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
    </div>
  </div>
</template>

<script>
import { ref as Ref } from "vue";
import { db } from "@/firebase/index.js";
import { query, orderBy, limit, getDocs } from "firebase/firestore";
import Comments from "../../components/Comments.vue";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { getDownloadURL, ref } from '@firebase/storage';
import { storage } from '../../firebase';
export default {
  props: ["id"],
  data() {
    return {
      commentarea: null
    }
  },
  components: {
    Comments,
  },
  setup(props) {
    const post = Ref("");
    const imgurl = Ref("")

    const load = async () => {
      try {
        const res = await getDoc(doc(db, "blogs", props.id));
        post.value = res.data();
        // console.log(res.data().coverPhoto)
        getDownloadURL(ref(storage, res.data().coverPhoto)).then((url) => {
          imgurl.value = url;
        })
      } catch (err) {
        alert(err.message);
      }
    };
    load();

    const comments = Ref([]);
    const dbRef = collection(db, "blogs/" + props.id + "/comments");
    const loadComm = async () => {
      const q = query(dbRef, orderBy("date", "desc"), limit(3));
      const res = await getDocs(q);
      comments.value = res.docs.map((doc) => {
        // console.log(doc.data());
        return { ...doc.data(), id: doc.id };
      });
    };
    loadComm();

    return { post, load, loadComm, comments, imgurl };
  },
  methods: {
    async likeBlog() {
      const docu = await getDoc(
        doc(db, "users/" + this.$store.state.user.uid + "/likes", this.id)
      );
      if (docu.data()) {
        alert("You have liked this post");
      } else {
        const dbRef = doc(db, "blogs/" + this.id);
        const res = await getDoc(dbRef);
        const like = res.data().likes;
        console.log(like);
        await updateDoc(dbRef, { likes: like + 1 });
        await setDoc(
          doc(db, "users/" + this.$store.state.user.uid + "/likes/" + this.id),
          {
            likedate: 1,
          }
        );
      }

      this.load();
    },
    jumpCommentListing() {
      this.$router.push({ name: "indivblogcomment", params: {id: this.id}})
    },
    async submitCom() {
      if (!this.commentarea) {
        alert("Cannot submit empty comments");
        return;
      }
      try {
        await addDoc(collection(db, "blogs/" + this.id + "/comments"), {
          date: Timestamp.fromDate(new Date()),
          username: this.$store.state.username,
          userId: this.$store.state.user.uid,
          content: this.commentarea,
        });
        this.loadComm();
      } catch (err) {
        console.log(err);
      }

      alert("Comments successfully!");
      this.commentarea = null;
    },
  },
};
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
    text-align: left;
    margin-left: 30px;
    h2 {
      font-size: 50px;
      letter-spacing: normal !important;
    }
  }
  .top-content {
    margin-left: 30px;
    font-size: 14px;
    width: 70%;
    line-height: 2.5;
    color: rgb(105, 105, 105);
    text-align: justify;
    text-justify: inter-word;
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
          cursor: pointer;
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
  margin: auto;
  .iframe-content {
    width: 100%;
    height: 100%;
  }
}
.textAre-block {
  height: 265px;
  width: 800px;
  border: 2px solid rgb(145, 145, 145;);
  margin: auto;
  textarea {
    padding: 10px;
    height: 100%;
    width: 100%;
    margin-bottom: 50px;
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

hr {
  margin-top: 50px;
  width: 100%;
  color: rgb(9, 9, 9);
  size: 2;
  align-content: center;
}

.title-block {
  padding: 50px 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 25px;
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

.comments {
  padding-bottom: 100px;
  .commit-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
}
</style>
