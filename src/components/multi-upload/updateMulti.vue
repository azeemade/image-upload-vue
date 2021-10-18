<template>
    <div class="d-flex align-items-baseline">
        <div class="d-flex">
            <div v-for="(img, index) in url_mu_link" :key="index">
                <div class="me-1">
                    <img :src="img" :class="img_mu_style.border" 
                    :height="img_mu_style.height" :width="img_mu_style.width">
                </div>
                <!--<div class="d-flex justify-content-between mt-1 align-items-baseline">
                    <div>
                        <label for="mufile"  class="text-primary btn-sm btn fs-7" title="Upload image">
                            <input type="file" id="mufile" name="muImage" autocomplete="off" @change="changeImage" class="hidden">
                            <a class="img-text" v-text="del ?  'Change image': img_mu_title "></a>
                        </label>
                    </div>
                    <div>   
                        <button class="btn text-danger" @click="deleteImage(index)">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </div>
                </div>-->
            </div>
            <div v-for="(prev, index) in preview" :key="index">
                <div>
                    <img :src="prev" :class="img_mu_style.border" 
                    :height="img_mu_style.height" :width="img_mu_style.width">
                </div>
                <div class="d-flex justify-content-between mt-1 align-items-baseline">
                    <div>
                        <label for="mufile"  class="text-primary btn-sm btn fs-7" title="Upload image">
                            <input type="file" id="mufile" name="muImage" autocomplete="off" @change="changeImage" class="hidden">
                            <a class="img-text" v-text="del ?  'Change image': img_mu_title "></a>
                        </label>
                    </div>
                    <div v-show="del">   
                        <button class="btn text-danger" @click="deleteImage(index)">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="disinit">
            <div>
                <img :src="init" :class="img_mu_style.border" 
                :height="img_mu_style.height" :width="img_mu_style.width">
            </div>
            <div>
                <label for="mu_init"  class="text-primary btn-sm btn fs-7" title="Upload image">
                    <input type="file" id="mu_init" name="mu_init" autocomplete="off" @change="attachimage" class="hidden">
                    <a class="img-text" v-text="img_mu_title "></a>
                </label>
            </div>
        </div>
        <div>
            <button class="btn btn-primary" @click="addUpload">
                <i class="bi bi-plus"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'UpdateMultiUpload',
    props: {
        img_mu_style: {
            type: Object,
            default(){
                return {
                    width:'160',
                    height: '160',
                    border: ""
                }
            }
        },
        img_mu_title: {
            type: String,
            default: "Choose image",
        },
        url_mu_link:{
            type: Array,
        }
    },
    data(){
        return{
            preview: [],
            images: [],
            del: false,
            disinit: true,
            count: 0,
        }
    },
    methods:{
        attachimage(event) {
            var files = event.target.files
            this.createImage(files[0]);
            this.images.push(files[0]);

            this.count = this.images.length;   
            this.del = true
            this.disinit = false
        },
        changeImage(event, index){
            this.deleteImage(index);
            this.attachimage(event)

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
            this.disinit = true
        }
    },
    computed:{
        init(){
            return require('@/assets/default.png');
        }
    },
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