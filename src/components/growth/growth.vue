<template>
    <div class="growth_warp">
        <img class="growth_bg" src="@/assets/fileChild/growth.jpg" alt="">
        <h5 class="growth_title">本周您已扫码1瓶</h5>
        <div class="growth_content">
            <div class="growth_time">
                <p>开奖倒计时</p>
                <span>（周日21:00分开将）</span>
            </div>
            <div class="growth_date">{{date}}</div>
            <p class="growth_money">上周获得<span>39.13元 </span>已提现</p>
            <p class="growth_f">上周共有123万人开奖瓜分100万</p>
            <div class="add_btn" @click="scan">
                再扫一次
            </div>
            <div class="invitation" @click="invitation">
                邀请组队
            </div>
        </div>
        <div class="growth_rule" @click="show = !show">
            活动规则
        </div>
         <transition name="fade">
           <div  v-if="show" class="rule_tips" @click.self="show = !show">
            <div class="rule_content">
                <img  class="rule_close" src="@/assets/fileChild/Close.svg" alt="" @click="show = !show">
                <h5 class="rule_title">
                    活动规则
                </h5>
                <div class="rule_text">
                  <p>本次活动从8月18日开始,分10期进行,每期100万元现金,分为60万+40万两类。每周一00:00活动开始,周日晚2100开奖。具体规则为</p>  
                  <p> 1、每周累积扫码7件及以上商品的用户,即可瓜分100万现金红包,其中:A.每周扫码商品数量排名前2000名的用户,每人200元现金 红包;B.每周扫码完成7件及以上商品数的所
                      有用户,均分60万现金红包。
                  </p> 
                  <p>2、每周用户可邀请1名好友共同参与此活动,如邀请好友成功,则按2人每周扫码累计商品数量参与上述活动,所得现金红包按2人扫码产品价格比例分配给2人。</p>  
                </div>
            </div>
        </div>
        </transition>  
    </div>    
</template>
<script>
var wx = require('weixin-js-sdk');
export default {
    name:"growth",
    data() {
        return {
            show:false,
            date:"6天23:59:59",
        }
    },
    methods: {
        invitation(){
            this.$router.push({name:"invitation"})
        },
        scan(){
            this.axios({
                method: 'POST',
                url: '/api/v1.0/qrcode/scan/active',
                data:{"url":encodeURIComponent(location.href.split('#')[0])}
            })
            .then(e=>{
                let data = e.data.data
                let appId = data.appId
                let timestamp = data.timestamp
                let nonceStr = data.noncestr
                let signature = data.sign
                wx.config({
                    debug : false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId :appId, // 必填，公众号的唯一标识
                    timestamp : timestamp, // 必填，生成签名的时间戳
                    nonceStr : nonceStr, // 必填，生成签名的随机串
                    signature : signature,// 必填，签名，见附录1
                    jsApiList : [ 'scanQRCode' ]
                    // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                })
                wx.ready(function () {
                    wx.scanQRCode({
                            desc: 'scanQRCode desc',
                            needResult : 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                            scanType : [ "qrCode", "barCode" ], // 可以指定扫二维码还是一维码，默认二者都有
                            success : function(res) {
                               var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                            //    var RegUrl = new RegExp();
                                // RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");
                                // if(RegUrl.test(result)){
                                    window.location.href = result
                                // }else{
                                //     alert(result)
                                // }
                            },
                        });
                })
                
        }
    },
    created() {
                var oldtime = new Date(); //传入的时间
                oldtime = oldtime.setDate(oldtime.getDate() + 7);//模拟24小时后的时间
                //时间换算
                function timer(oldtime) {
                    var newtime = new Date();
                    var time = (oldtime - newtime) / 1000;
                    var d = parseInt(time / (60 * 60 * 24));
                    var h = parseInt(time / 60 / 60 % 24);
                    var m = parseInt(time / 60 % 60);
                    var s = parseInt(time % 60);
                    return d + "天" + h + ":" + m + ":" + s ;
                }
                setInterval(()=>{                   　　　　　　
                    this.date = timer(oldtime);
                }, 1000)
            
    },
}
</script>

<style>
@import url("./growth.css");
</style>