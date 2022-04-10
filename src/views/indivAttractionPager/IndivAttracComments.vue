<template>
  <div class="mainComment">
      <br> <br>
      <div class="More" @click="$router.go(-1)"> Go back </div> <br> <br>
      <div class="commit-list">
          <Comments
          :comments="comment"
          v-for="comment in comments.slice(0,commentlen)"
          :key="comment.date"
          />
      </div>
      <button class="readbtn" @click="commentlen++">Read More</button> <br> <br> <br>
  </div>
</template>

<script>
import Comments from "../../components/Comments.vue";
import { collection, query, orderBy, getDocs, getDoc, doc } from "firebase/firestore";
import { ref } from "vue";
import { db } from "../../firebase/index";

export default {
    components: {
        Comments,
    },

    data() {
        return {
            commentlen: 2,
        }
    },

    props:["id","cityname"],

    setup(props) {
    const attraction = ref("");
    const load = async () => {
      try {
        const res = await getDoc(
          doc(db, "cities/" + props.cityname+"/attractions", props.id)
        );
        attraction.value = res.data();
        // console.log(res.data());
      } catch (err) {
        alert(err.message);
        console.log(err);
      }
    };
    const comments = ref([]);
    const dbRef = collection(
      db,
      "cities/"+ props.cityname + "/attractions/" + props.id + "/comments"
    );
    const loadComm = async () => {
      const q = query(dbRef, orderBy("date", "desc"));
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
      loadComm
    };
  },
}
</script>

<style lang="less" scoped>
.mainComment{
    background: url(../../assets/view.jpg);
}

.commit-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
}

.More {
    letter-spacing: normal !important;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        border: 0px solid #000000;
        background: rgba(255, 255, 255, 0);
        letter-spacing: 0.2em !important;
    }
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
    box-shadow: 0 6px 20px -5px gray;
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
	color: gray;
	background: white;
	border: 2px solid gray;
	box-shadow: 5px 5px 0 gray,
		-5px -5px 0 gray,
		-5px 5px 0 gray,
		5px -5px 0 gray;
	transition: 500ms ease-in-out;
}

.readbtn:hover {
	box-shadow: 20px 5px 0 gray, -20px -5px 0 gray;
}

.readbtn:focus {
	outline: none;
}
</style>