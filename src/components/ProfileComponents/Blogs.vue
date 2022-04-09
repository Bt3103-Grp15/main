<template>
  <div id="container">
    <div class="blog-details">
      <h1 @click="seeblog(blogs.id)">{{ blogs.title }}</h1>
      <p class="information">{{ blogs.description.substring(0, 100) }} ...</p>
    </div>

    <div class="blog-image">
      <!-- <img src="@/assets/hongkong1.jpeg" /> -->
      <img id="myimg" v-bind:src=imgurl />
      <!-- <img :src="require(`@/assets/${blogs.bimage}`)" alt="" /> -->

      <div class="info">
        <h2>Description</h2>
        <ul>
          <!-- <li><strong>Post Time : </strong> {{blogs.date}} </li> -->
          <li><strong>Travel Days : </strong> {{blogs.traveldays}} </li>
          <li><strong>Average Spending: </strong> {{blogs.spending}} </li>
          <li><strong>Likes: </strong> {{blogs.likes}} </li>
          <li><strong>Destination: </strong> {{blogs.city}} </li>
        </ul>
      </div>
    </div>
    <svg-icon class="icon" iconClass="bin" @click="deleteBlog(blogs.id)"></svg-icon>
  </div>
</template>

<script>
import { getDownloadURL, ref } from '@firebase/storage';
import { db } from "../../firebase/index";
import { storage } from '../../firebase';
import { ref as Ref } from 'vue';
import {deleteDoc, doc} from "firebase/firestore";

export default {
  props: ["blogs"],
  methods: {
    async deleteBlog(id) {
        //delete from blog collection 
        await deleteDoc(doc(db, "blogs", id ))
        this.$router.go()
    },
    seeblog(bid) {
      this.$router.push({ name: "indivBlogPage", params: { id: bid } });
    }
  },
  setup(props) {
    const imgurl = Ref("");
    // const img = document.getElementById("myimg");
    const load = async () => {
      getDownloadURL(ref(storage, props.blogs.coverPhoto)).then((url) => {
      imgurl.value = url
    });
    }
    load()
    return { imgurl }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&family=EB+Garamond:ital,wght@0,500;1,800&display=swap");
.icon {
  width: 16px;
  position: relative;
  top:-20px;
  left:30px;
  cursor: pointer;
}

#container {
  box-shadow: 0 15px 30px 1px grey;
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  height: 350px;
  width: 700px;
}

.blog-details {
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 40%;
}

#container .blog-details h1 {
  font-family: "Bebas Neue", cursive;
  display: inline-block;
  position: relative;
  font-size: 30px;
  color: #344055;
  margin: 0;
}

#container .blog-details h1:before {
  position: absolute;
  content: "";
  right: 0%;
  top: 0%;
  transform: translate(25px, -15px);
  font-family: "Bree Serif", serif;
  display: inline-block;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
  color: white;
  margin: 0;
  animation: chan-sh 6s ease infinite;
}

.hint-star {
  display: inline-block;
  margin-left: 0.5em;
  color: gold;
  width: 50%;
}

#container .blog-details > p {
  font-family: "EB Garamond", serif;
  text-align: left;
  font-size: 18px;
  color: #7d7d7d;
}

.control {
  position: absolute;
  bottom: 20%;
  left: 10%;
}

.blog-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  float: right;
  width: 45%;
  display: inline-block;
}

#container img {
  width: 100%;
  height: 100%;
}

.info {
  background: rgba(27, 26, 26, 0.9);
  font-family: "Bree Serif", serif;
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  line-height: 1.8;
  text-align: left;
  font-size: 105%;
  cursor: no-drop;
  color: #fff;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.info h2 {
  text-align: center;
}
.blog-image:hover .info {
  transform: translateX(0);
}

.info ul li {
  transition: 0.3s ease;
}
.info ul li:hover {
  transform: translateX(50px) scale(1.3);
}

.blog-image:hover img {
  transition: all 0.3s ease-out;
}
.blog-image:hover img {
  transform: scale(1.2, 1.2);
}
</style>