<template>
  <div class="blog-itme" @click="seeblog(bloglistingitem.id)">
    <div class="blog-img">
      <img v-bind:src="imgurl" />
    </div>
    <div class="blog-right">
      <div class="title-block">
        <h2>{{ bloglistingitem.title }}</h2>
      </div>
      <div class="content">
        <p id="list-content"></p>
        <p>{{ description }}</p>
      </div>
      <div class="option">
        <div class="user">
          <svg-icon class="svg-icon" iconClass="touxiang"></svg-icon>
          <h2>{{ bloglistingitem.author }}</h2>
        </div>
        <div class="right-icon">
          <div class="weizhi">
            <svg-icon class="svg-icon" iconClass="dingwei"></svg-icon>
            <p>{{ bloglistingitem.city }}</p>
          </div>
          <div class="weizhi">
            <svg-icon class="svg-icon" iconClass="shoucang"></svg-icon>
            <p>{{ bloglistingitem.likes }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref as Ref } from "vue";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase/index";

export default {
  name: "bloglistindex",
  props: ["bloglistingitem"],
  setup(props) {
    const imgurl = Ref("");
    const loadimg = async () => {
      getDownloadURL(ref(storage, props.bloglistingitem.coverPhoto)).then(
        (url) => {
          imgurl.value = url;
        }
      );
    };
    loadimg();
    const description = Ref("");
    description.value =
      props.bloglistingitem.description.substring(0, 200) + "...";

    return { description, imgurl };
  },

  methods: {
    seeblog(bid) {
      this.$router.push({ name: "indivBlogPage", params: { id: bid } });
    },
  },
};
</script>

<style lang='less' scoped>
.blog-itme {
  height: 317px;
  width: 100%;
  background: #fff;
  padding: 30px;
  display: flex;
  margin-bottom: 30px;
  .blog-img {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 338px;
      height: 204px;
    }
  }
  .blog-right {
    padding-left: 30px;
    position: relative;
    .title-block {
      padding: 0;
    }
    .content {
      font-size: 15px;
      padding-top: 20px;
      letter-spacing: normal !important;
    }
    .option {
      position: absolute;
      bottom: 8px;
      margin-top: 30px;
      height: 60px;
      display: flex;
      align-items: center;
      .user {
        display: flex;
        align-items: center;
        svg {
          margin-right: 10px;
          height: 35px;
          width: 35px;
          color: #5581b0;
        }
      }
      .right-icon {
        display: flex;
        .weizhi {
          display: flex;
          align-items: center;
          color: #5581b0;
          &:first-child {
            margin-right: 40px;
          }
          svg {
            margin-right: 10px;
            height: 23px;
            width: 17px;
          }
        }
      }
    }
  }
}
</style>