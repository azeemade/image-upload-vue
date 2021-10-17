<template>
  <div>
    
    <h3 class="">Image Upload App</h3>
    <div class="d-flex justify-content-evenly">
      <div>
        <h5>CREATE</h5>

        <!-- For single upload num_upload can be null or 1 -->
        <div class="mb-3">
          <image-upload action="create" title="Upload new image"
          :image_style="{
            border: 'rounded-circle',
            height: '100',
            width: '100'
            }" 
          />
          <button type="submit" @click="uploadCreateSingle" class="btn btn-sm btn-success">Upload</button>
        </div>
        
        <div>
          <image-upload :upload_type="'multi'" action="create"/>
          <button type="submit" @click="uploadCreateMulti" class="btn btn-sm btn-success">Upload</button>
        </div>
      </div>
      <div>
        <h5>EDIT</h5>
        
        <!-- For single upload num_upload can be null or 1 -->
        <div class="mb-3">
          <image-upload action="edit" :url="require('@/assets/disco.png')"
          title="Change image" :image_style="{
            height: '100',
            width: '100'
            }"/>
            <button type="submit" @click="uploadEditSingle" class="btn btn-sm btn-success">Upload</button>
        </div>
        
        <div>
          <image-upload :upload_type="'multi'" action="edit" :urlm="images" :image_style="{
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
      images: ["disco.png", "mood.png" ]
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
