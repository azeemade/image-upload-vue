<template>
    <div>
        <div v-if="action_type == 'create'">
            <!--Image attachment preview section-->
            <div>
                <img :src="preview == '' ? init : preview" class="init">
            </div>

            <!--Image attachment upload section-->
            <div>
                <div>
                    <label for="file"  class="text-primary btn-sm btn fs-7" title="Upload image">
                        <input type="file" id="file" name="masterImage" autocomplete="off" @change="attach_image" class="hidden">
                        Add new image
                        <!--<i class="bi bi-plus grey"></i>-->
                    </label>
                </div> 
            </div>
        </div>

        <div v-else>
            <!--Image attachment preview / Previous image section-->
            <div>
                <img :src="url_link" class="url">
            </div>

            <!--Image attachment upload section-->
            <div class="d-flex justify-content-between">
                <div>
                    <label for="file"  class="btn btn-sm text-primary fs-7" title="Change image">
                        <input type="file" id="file" name="masterImage" autocomplete="off" @change="attach_image" class="hidden">
                        Change image
                    </label>
                </div> 
                <div>   
                    <button class="btn btn-sm btn-danger" @click="deleteImage">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'single-upload',
    props:{
        file_input_num: {
            type: Number,
            default: 1
        }, 
        action_type: {
            type: String,
            default: 'create'
        },
        url_link: {
            type: String,
            default: ''
        }
    }, 
    data(){
        return{
            preview: ""
        }
    },
    methods:{
        attach_image(e) {
            var files = e.target.files
            var files_ = files[0]
            //this.$store.commit('SET_MASTER_IMAGE', files_)
            console.log(files_)

            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.preview = e.target.result;
            };

            reader.readAsDataURL(file);
        },
    },
    computed:{
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