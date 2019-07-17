<template>
    <div class="share_warp">
        <div class="share_top">
            <h5>{{decodeURIComponent(title)}}</h5>
            <p>累计为中国少儿慈善基金会捐赠</p>
            <h6>+789<span> 元</span></h6>
            <div>您是其中不可缺少的一份子！感谢您的付出</div>
        </div>

        <div class="share_bottom">
            <div class="bottom_content">

                <div class="share_bottom_nav">
                    <div class="record_title">捐款记录</div>
                </div>

                <div class="record_list">
                    <ul>
                        <li>
                            <div>小火苗为500名困境儿童捐赠温暖包</div>
                            <div class="record_money">2元</div>
                        </li>
                        <li>
                            <div>WANG.为500名困境儿童捐赠温暖包</div>
                            <div class="record_money">20元</div>
                        </li>
                        <li>
                            <div>Min为500名困境儿童捐赠温暖包</div>
                            <div class="record_money">50元</div>
                        </li>
                    </ul>
                </div>

                <div class="nin">
                   <p>您还可以</p> 
                </div>

                <div class="share_btn" @click="share_click">
                    分享
                </div>
            </div>
        </div>

        <div class="share_tips" v-if="show">
            <img src="@/assets/fileChild/solid.png" class="share_solid" alt="">
            <img src="@/assets/fileChild/click_share.png" class="click_share" alt="">
            <img src="@/assets/fileChild/share_btn.png" class="share_btns" @click="konw" alt="">
        </div>

    </div>
</template>

<script>
import getRequest from "../../utils/getRequest"
export default {
    naem:"commonweal_share",
    data() {
        return {
            data:{},
            show:false,
            title:null
        }
    },
    methods: {
        share_click(){
            this.show = true
        },
        konw(){
            this.show = false
        }
    },
    created() {
        this.title = getRequest("title")
    },
}
</script>

<style scoped>
@import url(./commonweal.css);
</style>
