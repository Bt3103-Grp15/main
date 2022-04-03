<template>
  <h1>{{ attraction.name }}</h1>
  <h1>{{ attraction.address }}</h1>
  <h1>{{ attraction.info }}</h1>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { ref } from 'vue'
import { db } from "../../firebase/index"
export default {
  props: ["id"],
  setup(props) {
    const attraction = ref("");
    const load = async () => {
      try {
        const res = await getDoc(
          doc(db, "cities/Hong-Kong/attractions", props.id)
        );
        attraction.value = res.data()
        console.log(res.data())
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

<style>
</style>