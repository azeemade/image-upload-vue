<template>
    <div>
       <div v-if="action_type == 'create'">
           <img src="" alt="">
        </div>
        <div v-else>
            
        </div> 
    </div>
</template>
<script>
export default {
    name: 'multi-upload',
    props:{
        file_input_num: {
            type: Number,
            default: 1
        }, 
        action_type: {
            type: String,
            default: 'create'
        }
    }
}
</script>