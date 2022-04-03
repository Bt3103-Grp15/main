<template>
  <!-- <editor-content class="eidtor" :editor="editor" /> -->
  <div class="editone">
    <div class="inputbox">
      <label>Your Title</label>
      <input placeholder="Enter your title" v-model="title" />
    </div>
    <div class="inputbox">
      <label>City</label>
      <input placeholder="Enter your city" v-model="city" />
    </div>
  </div>
  <div class="editcontainer">
    <QuillEditor
      ref="qeditor"
      class="editor"
      theme="snow"
      toolbar="Full"
      @ready="onEditorReady($event)"
    />
  </div>
  <button class="editbutton" v-on:click="upload()">Upload</button>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/index";

export default {
  components: {
    // EditorContent,
  },
  data() {
    return {
      editor: null,
      user: this.$store.user,
      title: null,
      city: null,
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
        if (!this.title) {
          alert("Please enter the title!");
          return;
        }

        await addDoc(collection(db, "blogs"), {
          author: this.$store.state.username,
          authorId: this.$store.state.user.uid,
          content: this.qeditor.root.innerHTML,
          city: this.city,
          title: this.title,
          likes: 0,
        });

        alert("Upload successfully!");
        this.title = null;
        this.city = null;
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

<style lang="less" scoped>
.editone {
  margin-top: 50px;
  .inputbox {
    margin: 20px;
  }
}
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

