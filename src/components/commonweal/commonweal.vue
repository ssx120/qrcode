<template>
    <div class="commonweal">
        <img class="redbag" src="@/assets/commonweal.png" alt="">
        <div class="commonweal_tips">
            <h5>您本次消费</h5>
            <p>为中国少儿慈善基金会捐款￥1.22元</p>
        </div>
        <div class="share" @click="share(data)">
            分享
        </div>
    </div>
</template>

<script>
import getRequest from "../../utils/getRequest"
export default {
    name:"commonweal",
    props:{
        data:{
            type:Object
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        share(e){
            console.log(this.data)
            this.$router.push({path:"/commonweal_share",query:{share_data:this.data,config_id:getRequest("config_id"),title:this.data.data.config.title}})
        }
    },
    created() {
        
    },
}
</script>

<style scoped>
@import url(./commonweal.css);
</style>
