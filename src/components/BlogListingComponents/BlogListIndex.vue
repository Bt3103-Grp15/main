<template>
  <div class="blog-itme" @click="seeblog(bloglistingitem.id)">
    <div class="blog-img">
      <img src="../../assets/image/FLtJ2nDVEAAyZ2Y.jpeg" alt="" />
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
          <svg-icon class="svg-icon" iconClass="dingwei"></svg-icon>
          <h2>{{ bloglistingitem.author }}</h2>
        </div>
        <div class="right-icon">
          <div class="weizhi">
            <svg-icon class="svg-icon" iconClass="dingwei"></svg-icon>
            <p>{{ bloglistingitem.city }}</p>
          </div>
          <div class="weizhi">
            <svg-icon class="svg-icon" iconClass="dingwei"></svg-icon>
            <p>{{ bloglistingitem.likes }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "bloglistindex",
  props: ["bloglistingitem"],
  setup(props) {
    const description = ref("")
    description.value = props.bloglistingitem.description.substring(0, 200) + "...";

    return { description };
  },

  methods: {
    seeblog(bid) {
      this.$router.push({name: 'indivBlogPage', params: { id: bid}})
    }
  }
};
</script>

<style lang='less'>
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
    .title-block {
      padding: 0;
    }
    .content {
      font-size: 15px;
      padding-top: 20px;
      letter-spacing: normal !important;
    }
    .option {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
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