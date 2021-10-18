<template>
    <div>
        <!--Image attachment preview / Previous image section-->
            <div>
                <img :src="preview == '' ? url_su_link : preview" :class="img_su_style.border" 
                :height="img_su_style.height" :width="img_su_style.width">
            </div>

            <!--Image attachment upload section-->
            <div class="d-flex justify-content-center mt-1 align-items-baseline">
                <div>
                    <label for="sufile"  class="btn btn-sm text-primary fs-7" title="Change image">
                        <input type="file" id="sufile" name="suImage" autocomplete="off" @change="attachimage" class="hidden">
                        {{img_su_title}}
                    </label>
                </div> 
                <div>   
                    <button class="btn text-danger" @click="delete_Image">
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
            default: "Choose image",
        }
    },
    data(){
        return{
            preview: "",
        }
    },
    methods:{
        attachimage(e) {
            var files = e.target.files

            if (!files.length)
                return;
            this.create_Image(files[0]);

            return files;
        },
        create_Image(file) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.preview = e.target.result;
            };

            reader.readAsDataURL(file);
        },
        delete_Image(files){
            var file = Array.from(files);
            file.splice(0, 1);

            this.preview = this.init;
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