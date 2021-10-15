<template>
    <div>
        <div>
            <div v-for="(prev, index) in preview" :key="index">
            
            <div>
                <img :src="prev" :class="img_mc_style.border" 
                :height="img_mc_style.height" :width="img_mc_style.width">
            </div>

           
            <div class="d-flex justify-content-between mt-1 align-items-baseline">
                <div>
                    <label for="mcfile"  class="text-primary btn-sm btn fs-7" title="Upload image">
                        <input type="file" id="mcfile" name="mcImage" autocomplete="off" @change="attachimage" class="hidden">
                        <a class="img-text" v-text="del ?  'Change image': img_mc_title "></a>
                    </label>
                </div>
                <div v-show="del">   
                    <button class="btn text-danger" @click="deleteImage(index)">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="d-grid justify-content-center">
            <div>
                <button class="btn btn-primary" @click="addUpload">
                    <i class="bi bi-plus"></i>
                </button>
            </div>
        </div>
        </div>
        <!--<div v-show="count == 0">
            
            <div>
                <img :src="init" :class="img_mc_style.border" 
                :height="img_mc_style.height" :width="img_mc_style.width">
            </div>

            
            <div class="d-flex justify-content-between mt-1 align-items-baseline">
                <div>
                    <label for="mcfile"  class="text-primary btn-sm btn fs-7" title="Upload image">
                        <input type="file" id="mcfile" name="mcImage[]" autocomplete="off" multiple @change="attachimage" class="hidden">
                        {{img_mc_title}}
                    </label>
                </div>
            </div>
        </div>

        <div v-for="(prev, index) in preview" :key="index">
            
            <div>
                <img :src="prev" :class="img_mc_style.border" 
                :height="img_mc_style.height" :width="img_mc_style.width">
            </div>

           
            <div class="d-flex justify-content-between mt-1 align-items-baseline">
                <div>
                    <label for="mcfile"  class="text-primary btn-sm btn fs-7" title="Upload image">
                        <input type="file" id="mcfile" name="mcImage[]" autocomplete="off" multiple @change="attachimage" class="hidden">
                        {{img_mc_title}}
                    </label>
                </div>
                <div v-show="del">   
                    <button class="btn text-danger" @click="deleteImage(index)">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="d-grid justify-content-center">
            <div>
                <button class="btn btn-primary" @click="addUpload">
                    <i class="bi bi-plus"></i>
                </button>
            </div>
        </div>-->
    </div>
</template>
<script>
export default {
    name: 'CreateMultiUpload',
    props: {
        img_mc_style: {
            type: Object,
            default(){
                return {
                    width:'160',
                    height: '160',
                    border: ""
                }
            }
        },
        img_mc_title: {
            type: String,
            default: "Upload image",
        }
    },
    data(){
        return{
            preview: [],
            images: [],
            del: false,
            count: 0
        }
    },
    methods:{
        attachimage(event, index) {
            var files = event.target.files
            this.preview.splice(index, 1);
            if (this.count == 1){
                this.images.splice(index, 1);
            }
            

            this.images.push(files[0]);
            this.createImage(files[0]);

            this.count = this.images.length;
            console.log(this.images)   

            this.del = true;
        },
        createImage(file) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.preview.push(e.target.result);
            };

            reader.readAsDataURL(file);
        },
        deleteImage(index){
            if (this.count == 1){
                this.addUpload();
            }
            this.images.splice(index, 1)
            this.preview.splice(index, 1)
            this.count = this.images.length
            this.del = false;

        },
        addUpload(){
            var frame =  require('@/assets/default.png');
            this.preview.push(frame);
        }
    },
    created(){
        this.addUpload();
    }
}
</script>
<style scoped>
    .hidden{
        display: none;
    }
    .img-text{
        all: unset;
    }
</style>