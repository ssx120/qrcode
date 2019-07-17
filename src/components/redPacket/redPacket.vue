<template>
    <div class="redPacket_warp">
        <p>恭喜您获得红包<span class="redPacket_money"> 0.80元</span></p>
        <button @click="receive">点击领取</button>
    </div>
</template>

<script>
import './redPacket.css'
export default {
    name:"redPacket",
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
        receive(){
            this.$router.push({name:"redPacket_child"})
        }
    },
    created() {
        
    },
}
</script>

<style scoped>

</style>
