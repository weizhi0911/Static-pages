<template>
    <div>
        <Nolog />
    </div>
</template>
<script>
import Nolog from "@/components/Nolog.vue";
export default {
    data(){
        return {
            
        }
    },
    components: {
        Nolog
    },
    created(){
        this.$store.state.cur_num = 2;
    }
}
</script>
<style lang="scss" scoped>

</style>


