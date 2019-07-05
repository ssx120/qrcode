<template>
    <div class="qrcoede_warp">
        <div class="qrcode_item" v-for="item in imgSrc" :key="item">
            <img :src="item" alt="">
        </div>
    </div>    
</template>

<script>
import './qrcode.css'
export default {
    name:"qrcode",
    data() {
        return {
            imgSrc:null
        }
    },
    methods:{

    },
    created() {
        this.imgSrc = this.$route.params.qrcocd
    },
}
</script>


