<template>
  <div class="page">
    <div class="area">
      <div class="top-block">
        <div class="top-left-block">
          <div class="Planning">
            <h2>
              Attraction
              <br />
              {{ attraction.name }}
            </h2>
          </div>
          <div class="back-block">
            <svg-icon iconClass="fanhui"></svg-icon>
            <span> Learn more about {{ attraction.name }} </span>
          </div>
        </div>
        <div class="top-right-block">
          <img src="../../assets/image/FLtJ2nDVEAAyZ2Y.jpeg" alt="" />
        </div>
      </div>

      <h1>{{ attraction.name }}</h1>
      <h1>{{ attraction.address }}</h1>
      <h1>{{ attraction.info }}</h1>
    </div>
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";
import { db } from "../../firebase/index";
export default {
  props: ["id"],
  setup(props) {
    const attraction = ref("");
    const load = async () => {
      try {
        const res = await getDoc(
          doc(db, "cities/Hong-Kong/attractions", props.id)
        );
        attraction.value = res.data();
        console.log(res.data());
      } catch (err) {
        alert(err.message);
      }
    };

    load();
    return {
      attraction,
    };
  },
};
</script>

<style lang="less" scoped>
.page {
  background: url(../../assets/image/63a0e8_b5538adaddce4208b3cf6dff62640d6e_mv2.jpeg);
  background-attachment: fixed;
  background-size: cover;
  .area {
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
  }
}
</style>