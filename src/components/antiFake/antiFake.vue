<template>
<div>
    <div class="antiFake">
        <img class="trophy" :src="imgUrl" alt="" >
        <div class="text_tips" v-if="zhengpin">此商品是正品，请放心使用</div>
        <div class="no_zp" v-if="!zhengpin">
            <div class="text_tips" >此商品可能不是正品，请验证扫码记录</div>
            <div class="record" @click="list">查看扫码记录</div>
        </div>
    </div>
    <!-- 扫码列表 -->
     <transition name="fade">
        <div v-if="show" class="list_warp" @click.self="show = !show">
            <img class="close" src="@/assets/fileChild/Close.png" alt="" @click.self="show = !show">
            <div class="list_w">
                <div class="list_title">
                    <h5>此二维码已被扫描<span class="red_title">{{num}}次</span></h5>
                    <p class="title_info">如果以下扫码记录中有不是您的操作，说明此商品可能是伪品，请联系厂家验证</p>
                </div>

    <!-- 列表记录 -->
                <ul class="item_warp">
                    <li class="list_item" v-for="(item,index) in lists" :key="index">
                        <img src="@/assets/scan.png" alt="" class="scan">
                        <span class="list_data">{{item.last_scan_time}}</span>
                        <span>被扫码第{{item.scan_num}}次</span>    
                    </li>
                </ul>
            </div>
        </div>
    </transition>
    
</div>
    
</template>

<script>
import getRequest from "../../utils/getRequest"
import "./antiFake.css"
import Trophy from "@/assets/Trophy.png"
import Trophy2 from "@/assets/Trophy2.png"
export default {
    name:"antiFake",
    props:{
        data:{
            type:Object,
        }
    },
    data() {
        return {
            imgUrl:Trophy,
            zhengpin:true,
            show:false,
            lists:null,
            num:null
        }
    },
    methods: {
        list(){
            let config_id = getRequest("config_id")
            this.show = true
            this.axios({//获取扫码记录
            method: 'post',
            url: '/api/v1.0/qrcode/scan/log',
            data: {
                config_id:config_id,
                page:1,
                page_size:50
            }
            }).then(e=>{
                if(e.data.status == 200){
                    this.lists = e.data.data.list
                }
                
            })
        }
    },
    created() {
         // 获取扫码次数
        this.num = this.data.data.config.module.antiFake.scan_num
        console.log(this.unm)
        //如果被扫描超过2次则不是正品
        if(this.num>1){
            this.zhengpin = false
            if(this.zhengpin == false){
                this.imgUrl = Trophy2 
            }
        }
        
    },
}
</script>

<style>

</style>
