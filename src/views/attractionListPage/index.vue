<template>
  <div class="attraction-list-page">
    <div class="type-area">
      <div class="top-block">
        <div class="top-left-block">
          <div class="Planning">
            <h2>
              Trip Planning
              <br />
              - {{city.cityname}}
            </h2>
          </div>
          <div class="back-block">
            <svg-icon iconClass="fanhui" @click="jumpPage(city.cityname)"></svg-icon>
            <span @click="jumpPage(city.cityname)"> Learn more about {{city.cityname}} </span>
          </div>
        </div>
        <div class="top-right-block">
          <img src="../../assets/image/FLtJ2nDVEAAyZ2Y.jpeg" alt="" />
        </div>
      </div>
      <div
        class="attraction-list"
        v-for="attraction in attractions"
        :key="attraction.id"
      >
        <div class="attraction-item" >
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
              <img src="../../assets/image/ImagebyDanFreeman.jpeg" alt="" />
            </div>
            <div class="rightimg">
              <div>
                <img
                  src="../../assets/image/ImagebySébastienGoldberg.jpeg"
                  alt=""
                />
              </div>
              <div>
                <img src="../../assets/image/HongKongSkyline.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { db } from "../../firebase/index";
import { ref } from "vue";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
export default {
  props: ["cityname"],
  setup(props) {
    const router = useRouter();
    const attractions = ref([]);
    const city = ref("");
    const load = async () => {
      try {
        const res = await getDocs(
          collection(db, "cities/" + props.cityname +"/attractions")
        );
        var index = 0;
        attractions.value = res.docs.map((doc) => {
          // console.log(doc.data());
          index++;
          return { ...doc.data(), id: doc.id, attindex: index };
        });

        const cityres = await getDoc(
          doc(db, "cities", props.cityname)
        );
        city.value = cityres.data()
      } catch (err) {
        alert(err.message);
      }
    };

    const jumpPage = (cityname) => {
    router.push({
      name: 'cityPage', params: { cityname: cityname}
    });
  };

    load();
    return {
      attractions,
      jumpPage,
      city
    };
  },

  methods: {
    seeAttraction(attid) {
      this.$router.push({ name: "indivAttractionPage", params: { cityname: this.cityname, id: attid } });
    },
  },
};
</script>


<style lang="less" scoped>
.attraction-list-page {
  background: url(../../assets/image/63a0e8_b5538adaddce4208b3cf6dff62640d6e_mv2.jpeg);
  background-attachment: fixed;
  background-size: cover;
  .type-area {
    width: 980px;
    margin: 0 auto;
    .top-block {
      display: flex;
      width: 100%;
      background: rgba(255, 255, 255, 0.5);
      justify-content: space-between;
      padding: 20px;
      border-top: 2px solid #fff;
      border-bottom: 2px solid #fff;
      .top-left-block {
        .Planning {
          padding-top: 30px;
          h2 {
            color: rgb(41, 41, 41);
            letter-spacing: 6px !important;
            font-size: 30px !important;
            text-align: left;
            font-family: fantasy;
            font-weight: bold;
          }
        }
        .back-block {
          display: flex;
          align-items: center;
          padding: 20px 40px;
          color: rgba(41, 41, 41, 0.8);

          .svg-icon {
            height: 35px;
            width: 35px;
            margin-right: 10px;
          }
          span {
            font-size: 16px;
            border-bottom: 1px solid rgba(41, 41, 41, 0.8);
            line-height: 1;
            text-align: left;
            font-weight: bold;
          }
        }
      }
      .top-right-block {
        img {
          width: 448px;
          height: 236px;
        }
      }
    }
    .attraction-list {
      background: rgba(255, 255, 255, 0.5);
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
    }
  }
}
</style>
