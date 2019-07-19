<template>
    <div class="invitation_warp">
        <img src="@/assets/fileChild/invitation.jpg" alt="">
        <div class="invitation_title">
            <div class="zudui" v-if="invitation">
                <p>邀请1人组队</p>
                <p>轻松完成7件</p>
            </div>
            <div class="guafen" v-if="!invitation">
                <p>每周满7瓶</p>
                <p>瓜分100万</p>
            </div>
        </div>
        <div class="rule_contents">
            <div class="rule_content_title">
                <div>
                    <img src="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7ae807ebc695d143c576e22343f18296/0b7b02087bf40ad15a962c0b592c11dfa8ecceec.jpg" alt="">
                </div>
                <div>
                    <img src="@/assets/fileChild/add.png" alt="">
                </div>
            </div>
            <div class="invitation_rule" v-if="invitation">
                <h5>组队规则</h5> 
                <p>1.邀请1位好友好友一起参加百万达人挑战赛</p> 
                <p>2.组队后不再有资格冲击TOP2000</p>
                <p>3.组队2人完成7件后,其享一份奖金</p>
                <p>4.奖金将按照2人各自扫码件数的比例分配</p> 
                <p>5.一旦组队,本期活动内不得拆分</p> 
            </div>
            <div class="" v-if="!invitation">
                <h5>组队规则</h5>   
                <p>1.参与好友一起参加百万达人挑战赛</p>
                <p>2.组队后不再有资格冲击TOP2000</p>
                <p>3.组队2人完成7件后,其享一份奖金</p>
                <p>4.奖金将按照2人各自扫码件数的比例分配</p>
                <p>5.一旦组队,本期活动内不得拆分</p>
            </div>
        </div>
            
        <div class="btn_warp">
            <div class="friend" @click="friend" v-if="invitation">邀请好友</div>
            <div class="friend" @click="join" v-if="!invitation">立即加入</div>
            <div class="unwanted" @click="nox">暂不需要</div>
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
import "./invitation.css"
export default {
    name:"invitation",
    data() {
        return {
            show:false,
            invitation:true
        }
    },
    methods: {
        friend(){
            this.show = true
        },
        nox(){
            window.history.back(-1);
        },
        konw(){
            this.show = false
        },
        join(){

        }
    },
    created() {
        let state =decodeURIComponent(getRequest("state"))
        if(  "share" == state){
            this.invitation = false    
        }
        let url = window.location.href
        window.location.href = url + "?state=share"
    }
}
</script>

<style>


</style>
