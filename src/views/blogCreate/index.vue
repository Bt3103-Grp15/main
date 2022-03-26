<template>
  <editor-content :editor="editor"/>
  <button v-on:click="upload()">Upload</button>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "@/firebase/index.js";

const db = getFirestore(app);

export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: null,
      user: this.$store.user,
    };
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [StarterKit],
    });
  },

  methods: {
    async upload() {
      try {
        const auth = getAuth();
        const fbuser = auth.currentUser.email;

        await setDoc(doc(db, String(fbuser), "shld-be-blog-id"), {
          Name: "test",
          Content: this.editor.getHTML(),
        });

        console.log("Document written");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style>
</style>