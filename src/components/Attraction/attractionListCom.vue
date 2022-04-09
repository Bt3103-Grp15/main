<template>
  <div class="attraction-item">
    <div class="attraction-info">
      <div class="attraction-title">
        <div class="index">{{ attraction.attindex }}</div>
        <div class="index-title">
          <h2 @click="seeAttraction(attraction.id)">{{ attraction.name }}</h2>
        </div>
      </div>
      <div class="Central">
        {{ attraction.address }}
      </div>
      <div class="East" v-for="line in attraction.info" :key="line.index">
        <ul>
          <li>{{ line }}</li>
        </ul>
      </div>
    </div>
    <div class="imageList">
      <div class="ImagebyDanFreeman">
        <img :src="imgurls[0]" alt="" />
      </div>
      <div class="rightimg">
        <div>
          <img :src="imgurls[1]" alt="" />
        </div>
        <div>
          <img :src="imgurls[2]" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, getDownloadURL } from "firebase/storage";
import { ref as Ref } from "vue";
import { storage } from "../../firebase/index";
export default {
  name: "Attraction",
  props: ["attraction", "cityname"],
  methods: {
    seeAttraction(attid) {
      this.$router.push({
        name: "indivAttractionPage",
        params: { cityname: this.cityname, id: attid },
      });
    },
  },
  setup(props) {
    const imgurls = Ref([]);

    const load = async () => {
      props.attraction.images.forEach((img) => {
        console.log(img);
        getDownloadURL(ref(storage, img)).then((url) => {
          imgurls.value.push(url);
        });
      });
      console.log(imgurls.value);
    };

    load();

    return {
      imgurls,
    };
  },
};
</script>

<style lang="less" scoped>
.attraction-item {
  padding: 40px 30px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .imageList {
    display: flex;
    .ImagebyDanFreeman {
      margin-right: 10px;
      img {
        width: 375px;
        height: 250px;
      }
    }
    .rightimg {
      img {
        width: 124px;
        height: 124px;
      }
    }
  }
}
.attraction-title {
  display: flex;
  .index {
    height: 32px;
    width: 32px;
    background: #a3bad1;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: normal !important;
    margin-right: 20px;
    margin-top: 5px;
  }
  .index-title {
    h2 {
      cursor: pointer;
      font-size: 25px;
      color: rgb(41, 41, 41);
      // letter-spacing: normal !important;
      font-family: fantasy;
      font-weight: bold;
      text-align: left;
      &:hover {
        color: #3a70d8;
        // 如果要动，就用下面的
        //display: inline-block;
        //vertical-align: middle;
        //transform: perspective(1px) translateZ(0);
        //box-shadow: 0 0 1px transparent;
        //margin: 10px;
        //transition-duration: 0.3s;
        //transition-property: box-shadow, transform;
      }
    }
  }
}
.Central {
  font-size: 16px;
  letter-spacing: normal !important;
  padding-left: 55px;
  padding-top: 20px;
  text-align: left;
}
.East {
  font-size: 15px;
  color: rgb(105, 105, 105);
  padding-top: 20px;
  padding-left: 55px;
  text-align: left;
  ul {
    list-style: outside !important;
    padding-left: 20px;
    li {
      list-style: outside !important;
    }
  }
}
</style>