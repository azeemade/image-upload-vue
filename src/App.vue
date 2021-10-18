<template>
  <div>
    <div class="d-flex justify-content-center mb-5">
      <h3>Image Upload App</h3>
      <a href="https://github.com/azeemade/image-upload-vue" class="btn border-bottom border-primary border-0">
        <i class="bi bi-github"></i>
      </a>
    </div>
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <h5>Single create</h5>
          <image-upload action="create" title="Choose image"
          :image_style="{
            border: 'rounded-circle',
            height: '100',
            width: '100'
            }" 
          />
          <button type="submit" @click="uploadCreateSingle" class="btn btn-sm btn-success">Upload</button>
        </div>
        <div class="col-md-8 d-grid justify-content-center">
          <h5>Multi create</h5>
          <image-upload :upload_type="'multi'" action="create"/>
          <button type="submit" @click="uploadCreateMulti" class="btn btn-sm btn-success">Upload</button>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <h5>Single edit</h5>
          <image-upload action="edit" :url="require('@/assets/disco.png')"
          title="Change image" :image_style="{
            height: '100',
            width: '100'
            }"/>
            <button type="submit" @click="uploadEditSingle" class="btn btn-sm btn-success">Upload</button>
        </div>
        <div class="col-md-8 d-grid justify-content-center">
          <h5>Multi edit</h5>
          <image-upload :upload_type="'multi'" action="edit" :urls="images" :image_style="{
            height: '100',
            width: '100'
            }" />
            <button type="submit" @click="uploadEditMulti" class="btn btn-sm btn-success">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imageUpload from './components/image-upload.vue'
import {mapGetters} from 'vuex'
export default {
  components: { imageUpload },
  name: "App",
  data(){
    return{
      images: [require("@/assets/disco.png"), 
      "https://github.com/azeemade/image-upload-vue/blob/main/src/assets/mood.png?raw=true" 
      ]
    }
  },

  methods:{
    uploadCreateSingle(){
      let formData = new FormData();
      formData.append("createSingle", this.createSingle);
      console.log(formData);
      /*axios.post(``, formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(response => {
        console.log(response.data);
      })*/
    },

    uploadCreateMulti(){
      let formData = new FormData();
      for(const i of Object.keys(this.createMulti)){
        formData.append(`createMulti`, this.createMulti[i]);
      }
      
      /*axios.post(``, formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(response => {
          console.log(response.data);
      })*/
    },

    uploadEditSingle(){
      let formData = new FormData();
      formData.append("updateSingle", this.updateSingle);
      /*axios.post(``, formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(response => {
          console.log(response.data);
      })*/
    },

    uploadEditMulti(){
      let formData = new FormData();
      for(const i of Object.keys(this.updateMulti)){
        formData.append(`updateMulti`, this.updateMulti[i]);
      }
      /*axios.post(``, formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(response => {
          console.log(response.data);
      })*/
    }
  },

  computed:{
    ...mapGetters([
      "createSingle", "updateSingle", "createMulti", "updateMulti"
    ]
    )
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
