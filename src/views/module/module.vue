<template>
    <div v-if="data">
       <growth />
       <antiFake :data="data" v-if="antiFake"/>
       <redPacket :data="data" v-if="redPacket"/>
       <creditPoint :data="data" v-if="creditPoint"/>
       <commonweal :data="data" v-if="commonweal"/>
       <luckyDraw  :data="data" v-if="luckyDraw"/>
    </div>
</template>

<script>
import getRequest from "../../utils/getRequest"
import antiFake from '@/components/antiFake/antiFake'//防伪
import redPacket from '@/components/redPacket/redPacket'//红包
import creditPoint from '@/components/creditPoint/creditPoint'//积分
import luckyDraw from '@/components/luckyDraw/luckyDraw'//抽奖
import commonweal from '@/components/commonweal/commonweal'//抽奖
import growth from '@/components/growth/growth'//裂变
export default {
    name:"module",
    data() {
        return {
            data:null,
            antiFake:false,
            redPacket:false,
            creditPoint:false,
            commonweal:false,
            luckyDraw:false
        }
    },

    methods: {
        
    },

    created() {
    //     let config_id = getRequest("config_id")
    //     this.axios({
    //       method: 'post',
    //       url: '/api/v1.0/qrcode/get',
    //       data: {
    //           "config_id":config_id
    //       }
    //   }).then(e=>{
    //     //   设置title
    //     if(e.data.status == 200){
    //         this.data = e.data;
    //         document.title = e.data.data.config.title
    //         let modules = e.data.data.config.module
    //         for (const key in modules) {
    //             if (modules.hasOwnProperty(key)) {
    //                 switch (key) {
    //                     case "antiFake": this.antiFake = true
    //                         break;
    //                     case "redPacket": this.redPacket = true
    //                         break;
    //                     case "creditPoint": this.creditPoint = true
    //                         break;
    //                     case "luckyDraw": this.luckyDraw = true
    //                         break;
    //                     case "commonweal": this.commonweal = true
    //                         break;
    //                 }
    //             }
    //         }
    //     }
    //     else{
    //         alert(e.data.info)
    //     }
        
    //   })
    },

    components:{
        antiFake,
        redPacket,
        creditPoint,
        luckyDraw,
        commonweal,
        growth
        
    }
}
</script>

<style>

</style>
