<template>
    <div class="creditPoint_warp">
        <p>恭喜您本次扫码，获得<span class="creditPoint_money"> 100积分</span></p>
        <button @click="receive">立即兑换</button>
    </div>
</template>

<script>
import './creditPoint.css'
export default {
    name:"creditPoint",
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
           this.$router.push({name:"creditPoint_child"})
        }
    },
    created() {
        
    },
}
</script>

<style>

</style>
