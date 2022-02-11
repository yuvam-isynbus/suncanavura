<template>
  <div>
    <h1>Quill</h1>
    <QuillEditor v-model:content="content" contentType="html" />
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
  components: {
    QuillEditor
  },
  setup() {
      const content = ref("")
      return {
          content
      }
  },
};
</script>
