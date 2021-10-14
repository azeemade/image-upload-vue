<template>
    <div>
        <!--Image attachment preview / Previous image section-->
            <div>
                <img :src="url_su_link" :class="img_su_style.border" 
                :height="img_su_style.height" :width="img_su_style.width">
            </div>

            <!--Image attachment upload section-->
            <div class="d-flex justify-content-between mt-1 align-items-baseline">
                <div>
                    <label for="file"  class="btn btn-sm text-primary fs-7" title="Change image">
                        <input type="file" id="file" name="masterImage" autocomplete="off" @change="attach_image" class="hidden">
                        {{img_su_title}}
                    </label>
                </div> 
                <div>   
                    <button class="btn text-danger" @click="deleteImage">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name: 'UpdateSingleUpload',
    props:{
        url_su_link: {
            type: String,
            default: ''
        },
        img_su_style: {
            type: Object,
            default(){
                return {
                    width:'160',
                    height: '160',
                    border: ""
                }
            }
        },
        img_su_title: {
            type: String,
            default: "Upload image",
        }
    },
    data(){
        return{
            preview: "",
        }
    },
    methods:{
        attach_image(e) {
            var files = e.target.files
            var files_ = files[0]
            console.log(files_)

            if (!files.length)
                return;
            this.createImage(files[0]);

            this.del = true;

            return files;
        },
        createImage(file) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.preview = e.target.result;
            };

            reader.readAsDataURL(file);
        },
        deleteImage(files){
            var file = Array.from(files);
            file.splice(0, 1);

            console.log(files);

            this.del = false;
            this.preview = "";
        }
    },
    computed: {
        init(){
            return require('@/assets/default.png');
        }
    }
}
</script>
<style scoped>
    .hidden{
        display: none;
    }
</style>