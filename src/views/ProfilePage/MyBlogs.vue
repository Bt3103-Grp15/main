<template>
    <UserHeader :name="this.$store.state.username" imgpath=""/>
    <profile-nav/>
    <div class="container-blog">
        <div v-if="myblogs.length === 0" class="reminder-text">
            <p>
                You haven't write any blog yet!
            </p>
            <br>
            <p>
                <router-link to="/createblog">
                Upload your first blog now.</router-link>
            </p>
        </div>
        <div  v-else>
            
            <div v-for="blog in myblogs.slice(0,len)" :key="blog.id">
                <Blogs :blogs="blog" :delete="true" />
            </div>

            <div v-if="len < myblogs.length">
                <button class="readbtn" @click="len++">Read More</button> <br> <br> <br>
            </div>
            
        </div>
        
        
    </div>
        
</template>

<script>
import Blogs from "../../components/ProfileComponents/Blogs.vue";
import ProfileNav from "../../components/ProfileComponents/ProfileNav.vue";
import UserHeader from "../../components/ProfileComponents/UserHeader.vue";
import { ref } from "vue";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../firebase";
import { useStore } from "vuex";
import { computed} from "vue";


export default {
  components: { UserHeader, Blogs, ProfileNav },
  data() {
    return {
      len: 3,
      userid: this.$store.state.user.uid,
    };
  },
  setup() {
    const myblogs = ref([]);

    const load = async () => {
      const store = useStore();
      const uid = computed(() => store.state.user.uid);
      const dbRef = collection(db, "blogs");
      const q = query(dbRef, where("authorId", "==", uid.value));
      const res = await getDocs(q);
      myblogs.value = res.docs.map((doc) => {
        // console.log(doc.data())
        return { ...doc.data(), id: doc.id };
      });
    };
    load();
    return { myblogs };
  },
};
</script>

<style scoped>
.container-blog {
    padding-left: 5vw;
    padding-right:5vw;
    padding-top: 20px;
    background-size: 100% 100%;
    background-image: url(../../assets/image/bc3ec7bc825c4e6ca746c659189cea83.jpeg);

}

.reminder-text {
    padding: 100px;
    font-size: 20px; 
    height:70vh
}

.readbtn {
  width: 200px;
  height: 80px;
  border: none;
  outline: none;
  background: #2f2f2f;
  color: #fff;
  font-size: 22px;
  border-radius: 40px;
  text-align: center;
  box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
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
  box-shadow: 5px 5px 0 black, -5px -5px 0 black, -5px 5px 0 black,
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