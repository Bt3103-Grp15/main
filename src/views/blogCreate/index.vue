<template>
  <!-- <editor-content class="eidtor" :editor="editor" /> -->
  <div>
    <label>Your Title</label>
    <input placeholder="Enter your title" v-model="title" />
  </div>
  <QuillEditor ref="qeditor" class="editor" theme="snow" toolbar="full" @ready="onEditorReady($event)" />
  <button class="editbutton" v-on:click="upload()">Upload</button>
</template>

<script>
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "@/firebase/index.js";

const db = getFirestore(app);

export default {
  components: {
    // EditorContent,
  },
  data() {
    return {
      editor: null,
      user: this.$store.user,
      title: null,
      isEditing: true
    };
  },

  mounted() {},

  computed: {
    qeditor() {
      return this.$refs.qeditor.getQuill()
    }
  },

  methods: {
    onEditorReady() {
      console.log(this.qeditor)
      // this.qeditor.setText("Please enter enter your blogs here...")
      this.qeditor.root.dataset.placeholder = "Please enter enter your blogs here..."
    },

    async upload() {
      try {
        const auth = getAuth();
        const fbuser = auth.currentUser.email;
        if (!this.title) {
          alert("Please enter the title!")
          return
        }

        await setDoc(doc(db, String(fbuser), this.title), {
          Name: this.title,
          Content: this.qeditor.root.innerHTML,
        });
        alert("Upload successfully!")
        this.title = null;
        this.qeditor.setText("")
        this.qeditor.root.dataset.placeholder = "Please enter enter your blogs here..."
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Sth went wrong")
      }
    },
  },
};
</script>

<style scoped>
.editor {
  width: 80%;
  height: 100px;
  border-style: solid;
  border-width: 2px;
  border-color: blue;
  margin-left: 20px;
  padding-bottom: 40px;
}
</style>>

