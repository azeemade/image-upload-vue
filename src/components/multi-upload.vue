<template>
        <div v-if="action_type == 'create'">
            <CreateMultiUpload :img_mc_style="img_style" :img_mc_title="img_title" 
            :upload_mc_type="upload__type" />
        </div>

        <div v-else>
            <UpdateMultiUpload :url_mu_link="url_link" :img_mu_style="img_style" 
            :img_mu_title="img_title" :upload_mu_type="upload__type" />
        </div>
</template>
<script>
import CreateMultiUpload from './multi-upload/createMulti.vue';
import UpdateMultiUpload from './multi-upload/updateMulti.vue';
export default {
    name: 'multi-upload',
    components: {CreateMultiUpload, UpdateMultiUpload },
    props:{
        action_type: {
            type: String,
            default: 'create'
        },
        url_link: {
            type: Array,
        },
        img_style: {
            type: Object,
            default(){
                return {
                    width:'160',
                    height: '160',
                    border: ""
                }
            }
        },
        img_title: {
            type: String,
            default: "Choose image",
        },
        upload__type: {
            type: String,
            default: 'single',
        }
    },
}
</script>