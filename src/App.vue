<template>
  <div>
    
    <h4>Image Upload App</h4>
    <div class="d-flex justify-content-evenly">
      <div>
        <h5>CREATE</h5>

        <!-- For single upload num_upload can be null or 1 -->
        <div>
          <image-upload action="create"/>
        </div>
        
        <div>
          <image-upload :num_upload="4" action="create"/>
        </div>
      </div>
      <div>
        <h5>EDIT</h5>
        
        <!-- For single upload num_upload can be null or 1 -->
        <div>
          <image-upload action="edit" :url="require('@/assets/disco.png')"/>
        </div>
        
        <div>
          <image-upload :num_upload="4" action="create"/>
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
