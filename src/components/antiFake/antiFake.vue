<template>
    <div class="antiFake">
        <img src="" alt="">
        <div class="text_tips">此商品是正品，请放心使用</div>
        <div class="text_tips">此商品可能不是正品，请验证扫码记录</div>
        <div class="record">查看扫码记录</div>
    </div>
</template>

<script>
import "./antiFake.css"
export default {
    name:"antiFake",
    props:{
        data:{
            type:Object,
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    created() {
        console.log(this.data)
    },
}
</script>

<style>

</style>
