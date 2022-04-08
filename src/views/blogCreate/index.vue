<template>
  <!-- <editor-content class="eidtor" :editor="editor" /> -->
  <div class="page">
    <div class="editone">
      <div class="inputbox">
        <label>Your Title</label>
        <input placeholder="Enter your title" v-model="title" />
      </div>
      <div class="inputbox">
        <label>City</label>
        <input placeholder="Enter your city" v-model="city" />
      </div>
      <div class="inputbox">
        <label>Description</label>
        <input placeholder="Enter your description" v-model="des" />
      </div>
      <div class="inputbox">
        <label>Average Spending</label>
        <input placeholder="Enter the average spending" v-model="spend" />
      </div>
      <div class="inputbox">
        <label>Duration</label>
        <input placeholder="Enter your travel days" v-model="days" />
      </div>
      <div class="inputbox">
        <label>Year of Traveling</label>
        <input placeholder="Enter the year you went to travel" v-model="year" />
      </div>
      <div class="upload-file">
        <label for="blog-photo">Upload Cover Photo</label>
        <input
          type="file"
          ref="blogPhoto"
          id="blog-photo"
          @change="fileChange"
          accept=".png, .jpg, ,jpeg"
        />
        <!-- <button
          class="preview"
          :class="{ 'button-inactive': !this.fileURL }"
        >
          Preview Photo
        </button> -->
        <!-- <span>File Chosen: {{ this.fileName }}</span> -->
      </div>
    </div>
    <div class="editcontainer">
      <QuillEditor
        ref="qeditor"
        class="editor"
        theme="snow"
        toolbar="full"
        @ready="onEditorReady($event)"
      />
    </div>
    <button class="editbutton" v-on:click="upload()">Upload</button>
  </div>
</template>

<script>
import { collection, addDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db, storage } from "../../firebase/index";
import { ref, uploadBytes } from "firebase/storage";

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
      des: null,
      file: null,
      fileURL: null,
      fileName: null,
    };
  },

  mounted() {},

  computed: {
    qeditor() {
      return this.$refs.qeditor.getQuill();
    },
  },

  methods: {
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0];
      this.fileName = this.file.name;
      this.fileURL = URL.createObjectURL(this.file);
      // this.$store.commit("fileNameChange", fileName);
      // this.$store.commit("createFileURL", URL.createObjectURL(this.file));
    },
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

        if (!this.file) {
          alert("Please choose a cover photo");
        }

        const imgRef = ref(
          storage,
          "blogs/" + this.$store.state.user.uid + "/" + this.fileName
        );
        uploadBytes(imgRef, this.file).then((snapshot) => {
          console.log("Uploaded a blob or file!");
          console.log(snapshot);
        });

        const res = await addDoc(collection(db, "blogs"), {
          author: this.$store.state.username,
          authorId: this.$store.state.user.uid,
          content: this.qeditor.root.innerHTML,
          city: this.city,
          title: this.title,
          likes: 0,
          description: this.des,
          spending: this.spend,
          traveldays: this.days,
          yearoftravel: this.year,
          date: Timestamp.fromDate(new Date()),
          coverPhoto:
            "blogs/" + this.$store.state.user.uid + "/" + this.fileName,
        });

        // console.log(res.id)
        await setDoc(
          doc(db, "users/" + this.$store.state.user.uid + "/blogs", res.id),
          {
            id: res.id,
          }
        );

        alert("Upload successfully!");
        this.title = null;
        this.city = null;
        this.qeditor.setText("");
        this.qeditor.root.dataset.placeholder =
          "Please enter enter your blogs here...";
        
        this.$refs.blogPhoto.value = null;
        this.fileURL=null;
        this.des = null;
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Sth went wrong");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  background: url(../../assets/image/bc3ec7bc825c4e6ca746c659189cea83.jpeg);
  background-attachment: fixed;
  background-size: cover;
  padding-bottom: 50px;
  .editone {
    .inputbox {
      margin: 20px;
    }
  }
  .editcontainer {
    width: 80%;
    margin: 1% 10%;
    height: 1000px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    padding-bottom: 40px;
    align-items: center;
  }

  .editbutton {
    margin-top: 20px;
  }
  button.ql-bold {
    font: bold;
  }
}
</style>>

