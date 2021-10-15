<template>
        <div v-if="action_type == 'create'">
            <CreateSingleUpload :img_sc_style="img_style" :img_sc_title="img_title" />
        </div>

        <div v-else>
            <UpdateSingleUpload :url_su_link="url_link" :img_su_style="img_style" 
            :img_su_title="img_title"/>
        </div>
</template>
<script>
import CreateSingleUpload from './single-upload/createSingle.vue';
import UpdateSingleUpload from './single-upload/updateSingle.vue';
export default {
    name: 'single-upload',
    components: {CreateSingleUpload, UpdateSingleUpload },
    props:{
        action_type: {
            type: String,
            default: 'create'
        },
        url_link: {
            type: String,
            default: ''
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
        }
    },
}
</script>