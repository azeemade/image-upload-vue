<template>
    <div>
        <!--Image attachment preview section-->
        <div>
            <img :src="preview == '' ? init : preview" :class="img_sc_style.border" 
            :height="img_sc_style.height" :width="img_sc_style.width">
        </div>

        <!--Image attachment upload section-->
        <div class="d-flex justify-content-center mt-1 align-items-baseline">
            <div>
                <label for="scfile"  class="text-primary btn-sm btn fs-7" title="Upload image">
                    <input type="file" id="scfile" name="scImage" autocomplete="off" @change="attachimage" 
                    class="hidden">
                    {{img_sc_title}}
                </label>
            </div>
            <div v-show="del">   
                <button class="btn text-danger" @click="deleteImage">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CreateSingleUpload',
    props: {
        img_sc_style: {
            type: Object,
            default(){
                return {
                    width:'160',
                    height: '160',
                    border: ""
                }
            }
        },
        img_sc_title: {
            type: String,
            default: "Choose image",
        }
    },
    data(){
        return{
            preview: "",
            del: false,
        }
    },
    methods:{
        attachimage(e) {
            e.preventDefault();
            var files = e.target.files

            if (!files.length)
                return;
            this.createImage(files[0]);

            this.del = true;
            this.$store.commit('addCreateSingle', files[0])
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

            this.del = false;
            this.preview = "";
            this.$store.commit('delCreateSingle')
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