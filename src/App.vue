<template>
  <div>
    
    <h3 class="">Image Upload App</h3>
    <div class="d-flex justify-content-evenly">
      <div>
        <h5>CREATE</h5>

        <!-- For single upload num_upload can be null or 1 -->
        <div>
          <image-upload action="create" title="Upload new image"
          :image_style="{
            border: 'rounded-circle',
            height: '100',
            width: '100'
            }" 
          />
        </div>
        
        <div>
          <image-upload :upload_type="'multi'" action="create"/>
        </div>
      </div>
      <div>
        <h5>EDIT</h5>
        
        <!-- For single upload num_upload can be null or 1 -->
        <div>
          <image-upload action="edit" :url="require('@/assets/disco.png')"
          title="Change image" :image_style="{
            height: '100',
            width: '100'
            }"/>
        </div>
        
        <div>
          <image-upload :upload_type="'multi'" action="edit" :urlm="images" :image_style="{
            height: '100',
            width: '100'
            }" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imageUpload from './components/image-upload.vue'

export default {
  components: { imageUpload },
  name: "App",
  data(){
    return{
      images: ["disco.png", "mood.png" ]
    }
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
