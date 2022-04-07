<template>
  <div class="blogListPage">
    <div class="type-area">
      <!-- <div class="form-div">
        <form id="form" role="search" @submit.prevent="index">
          <input
            id="query"
            name="q"
            placeholder="Search here..."
          />
          <button class="searchbtn" @click="updatedestination()">
            <svg viewBox="0 0 1024 1024">
              <path
                class="path1"
                d="M848.471 928l-263.059-263.059c-48.941 
            36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 
            0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 
            408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 
            218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"
              ></path>
            </svg>
          </button>
        </form>
      </div> -->
      <div class="title-block">
        <h2>All Results for {{city}} </h2>
      </div>
      <div class="selects-box">
        <DropDown
          class="select-block"
          :options="arrayOfObjects1"
          :selected="object1"
          v-on:updateOption="methodToRunOnSelect"
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean"
          @updateOption ="updateinfo($event)"
        >
        </DropDown>

        <DropDown
          class="select-block"
          :options="arrayOfObjects2"
          :selected="object2"
          v-on:updateOption="methodToRunOnSelect"
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean"
          @updateOption ="updateinfo($event)"
        >
        </DropDown>

        <DropDown
          class="select-block"
          :options="arrayOfObjects3"
          :selected="object3"
          v-on:updateOption="methodToRunOnSelect"
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean"
          @updateOption ="updateinfo($event)"
        >
        </DropDown>

        <DropDown
          class="select-block"
          :options="arrayOfObjects4"
          :selected="object4"
          v-on:updateOption="methodToRunOnSelect"
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean"
          @updateOption ="updateinfo($event)"
        >
        </DropDown>
      </div>

      <div v-for="post in posts.slice(0,listlen)" :key="post.id">
        <BlogListIndex :bloglistingitem="post" />
      </div>
      
    </div>

    <button class="readbtn" @click="listlen++">Read More</button> 
  </div>
</template>

<script>
import BlogListIndex from "../../components/BlogListingComponents/BlogListIndex.vue";
import DropDown from "../../components/BlogListingComponents/DropDown.vue";
import {ref} from "vue"
import { db } from '@/firebase/index'
import { collection, getDocs, where, query } from 'firebase/firestore';

export default {
    name: 'blogListPage',
    props: ["city"],
    data () {
        return {
            arrayOfObjects1: [{name: "Most Viewed"}, {name: "Most Popular Blog"}],
            arrayOfObjects2: [{name: "2022"}, {name: "2021"}],
            arrayOfObjects3: [{name: "10 days"}, {name: "20 days"}],
            arrayOfObjects4: [{name: "1000HKD"}, {name: "2000HKD"}],
            object1: {  name: 'Category', },
            object2: {  name: 'Depature Time', },
            object3: {  name: 'Travel Days', },
            object4: {  name: 'Average Spending', },
        }
    },
    components: {
        DropDown,
        BlogListIndex,
    },
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    },
    async updatedestination() {
      try{
        this.destination = document.querySelector("input[name=q]").value;
        this.load()
      } catch (err) {
        console.log(err);
      }
    },
    updateinfo(x){
      alert(x.name)
    }
  },

  setup(props) {
    const posts = ref([]);
    const error = ref(null);
    const dbRef = collection(db, 'blogs')

    const load = async () => {
      try{
        const q = query(dbRef, where("city", "==", props.city));
        const res = await getDocs(q);
        posts.value = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
      }
      catch (err) {
        error.value = err.message
        alert(error.value)
      }
    }
    load();
    return { posts, load, error };
  },
};
</script>

<style lang="less" scoped>
.blogListPage {
  background: url(../../assets/image/11062b_61151d0087ad418fa801687a88c78716_mv2.jpeg);
  --background-size: cover, contain;
  position: relative;
  height: 2000px;
  padding-top: 50px;
  .type-area {
    width: 980px;
    margin: 0 auto;
  }
  .search-block {
    width: 500px;
    height: 64px;
    background: #fff;
    border-radius: 30px;
    display: flex;
    padding-left: 20px;
    padding-right: 80px;
    margin: 0 auto;
    input {
      height: 100%;
      font-size: 20px;
      flex: 1;
      background: #fff;
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
      // background: red;
    }
  }
  .selects-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .select-block {
      height: 46px;
      width: 212px;
      display: flex;
      background: #fff;
      border: 2px solid rgba(0, 0, 0, 0.4);
      &:hover {
        border: 2px solid rgb(0, 0, 0);
      }
      select {
        padding-left: 10px;
        padding-right: 40px;
        flex: 1;
        width: 100%;
        height: 100%;
        border: none;
        font-size: 14px;
        letter-spacing: normal !important;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        word-break: break-all;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
    }
  }
}

.form-div {
  display: flex;
  justify-content: center;
}

form {
  background-color: #f1f1f1;
  width: 600px;
  height: 44px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

input {
  all: unset;
  font: 16px system-ui;
  color: black;
  height: 100%;
  width: 100%;
  text-align: left;
  padding: 6px 10px;
}

::placeholder {
  color: black;
  opacity: 0.7;
}

.searchbtn {
  all: unset;
  cursor: pointer;
  width: 44px;
  height: 44px;
}

.readbtn{
    width: 200px;
    height: 80px;
    border: none;
    outline: none;
    background: #2f2f2f;
    color: #fff;
    font-size: 22px;
    border-radius: 40px;
    text-align: center;
    box-shadow: 0 6px 20px -5px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.readbtn {
	width: 150px;
	height: 50px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	color: black;
	background: white;
	border: 2px solid black;
	box-shadow: 5px 5px 0 black,
		-5px -5px 0 black,
		-5px 5px 0 black,
		5px -5px 0 black;
	transition: 500ms ease-in-out;
}

.readbtn:hover {
	box-shadow: 20px 5px 0 black, -20px -5px 0 black;
}

.readbtn:focus {
	outline: none;
}
</style>
