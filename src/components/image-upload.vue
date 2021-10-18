<template>
  <div>
    <div v-if="upload_type == 'single'">
      <single-upload :action_type="action" :url_link="url" 
      :img_style="image_style" :img_title="title"
      />
    </div>
    <div v-else>
      <multi-upload
        :upload__type="upload_type"
        :action_type="action"
        :url_link="urls"
        :img_style="image_style"
      />
    </div>
  </div>
</template>

<script>
import MultiUpload from "./multi-upload.vue";
import singleUpload from "./single-upload.vue";

export default {
  components: { singleUpload, MultiUpload },
  name: "image-upload",
  props: {
    action: {
      type: String,
      default: "create",
    },
    url: {
      type: String,
      default: "",
    },
    urls: {
      type: Array,
    },
    image_style: {
      type: Object,
      default(){
            return {
                width:'160',
                height: '160',
                border:""
            }
        }
    },
    title: {
      type: String,
      default: "Choose image",
    },
    upload_type: {
      type: String,
      default: 'single',
    }
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
@import "../assets/css/app.css";
</style>
