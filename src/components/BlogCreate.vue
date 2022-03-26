<template>
  <h1>{{value}}</h1>
  <div id="input">
    <QuillEditor theme="snow" toolbar="full" v-model:content="value"/>
  </div>
  <button onclick="submit()">submit</button>
</template>

<script>
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { ref } from 'vue';
import app from '@/firebase/index.js'
const db = getFirestore(app);

export default {
  setup() {
    const value = ref({});

    return {
      value
    }

  },
  async submit() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
    });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}


</script>

<style scoped>
button {
  float:left;

}
#input {
  align-content: center;
  padding:50px;
  height:500px;
}
</style>>
