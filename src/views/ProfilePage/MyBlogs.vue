<template>
    <UserHeader :name="this.$store.state.username" imgpath=""/>
    <profile-nav/>
    <div class="container">
        <div  v-for="blog in myblogs" :key="blog.id">
        <Blogs :blogs="blog" />
    </div>

    </div>
    
</template>

<script>
import Blogs from '../../components/ProfileComponents/Blogs.vue'
import ProfileNav from '../../components/ProfileComponents/ProfileNav.vue'
import UserHeader from "../../components/ProfileComponents/UserHeader.vue"
import { ref } from "vue";
import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '../../firebase';
// import {useStore} from "vuex"
// import { computed } from 'vue'

export default {
  components: { UserHeader, Blogs, ProfileNav },
  data () {
        return {
            bloglist: [
                { bimage: "hongkong1.jpeg", title: "First Blog" , description: "the thhhdhdhd description of my first trip to Hong Kong", date: "Dec 11 2022", username: "Dora Zhu", place: "HongKong", likes: 1000, state: false},
                { bimage: "hongkong2.jpeg", title: "Second Blog", description: "the detailed description of my second trip to Hong Kong", date: "Jan 23 2021", username: "Kelly Zhou", place: "HongKong", likes: 1300, state: true},
            ],
        }
    },
    setup() {
        const myblogs = ref([]);
        // const store = useStore();
        // const user = computed(() => store.state.user)
        const load = async () => {
            const dbRef = collection(db, "blogs");
            const q = query(dbRef, where("authorId","==","l4BenEYfTaMPUyRlE52I7yxQbBN2"))
            const res = await getDocs(q);
            myblogs.value = res.docs.map(doc => {
                // console.log(doc.data())
                return { ...doc.data(),id:doc.id }
            })
        }
        load()
        return { myblogs}
    }

}
</script>

<style>
.container {
    padding-left: 5vw;
    padding-right:5vw;
}

</style>