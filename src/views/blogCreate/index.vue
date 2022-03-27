<template>
  <!-- <editor-content class="eidtor" :editor="editor" /> -->
  <div class="editone">
    <label>Your Title</label>
    <input placeholder="Enter your title" v-model="title" />
  </div>
  <div class="editcontainer">
    <QuillEditor
      ref="qeditor"
      class="editor"
      theme="snow"
      toolbar="Full"
      @ready="onEditorReady($event)"
    />
    <button class="editbutton" v-on:click="upload()">Upload</button>
  </div>
</template>

<script>
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
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
      isEditing: true,
    };
  },

  mounted() {},

  computed: {
    qeditor() {
      return this.$refs.qeditor.getQuill();
    },
  },

  methods: {
    onEditorReady() {
      console.log(this.qeditor);
      // this.qeditor.setText("Please enter enter your blogs here...")
      this.qeditor.root.dataset.placeholder =
        "Please enter enter your blogs here...";
    },

    async upload() {
      try {
        const auth = getAuth();
        if (!this.title) {
          alert("Please enter the title!");
          return;
        }

        await addDoc(collection(db, "users/" + auth.currentUser.uid + "/blog"), {
          Name: this.title,
          Content: this.qeditor.root.innerHTML,
        });


        alert("Upload successfully!");
        this.title = null;
        this.qeditor.setText("");
        this.qeditor.root.dataset.placeholder =
          "Please enter enter your blogs here...";
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Sth went wrong");
      }
    },
  },
};
</script>

<style scoped>
.editcontainer {
  width: 80%;
  margin: 1% 10%;
  height: 500px;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  padding-bottom: 40px;
  align-items: center;
}

.editbutton {
  margin-top: 20px;
}

</style>>

