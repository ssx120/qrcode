<template>
    <div class="vote_warp">
        <div class="vote_top">
            <div class="vote_top_title">
                <div class="vote_top_text">
                    <p>选中你看好的球队</p>
                    <p>投票支持他</p>
                </div>
                <div class="vote_rule" @click="show = !show">
                    规则
                </div>
            </div>
            <h5 class="vote_title">
                即可瓜分100万元大奖
            </h5>
            <div class="vote_banner">
                <img class="" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=376578877,460533676&fm=26&gp=0.jpg" alt="">
            </div>
            
        </div>
        <!-- 投票 -->
        <div class="vote_list">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <div class="basket_warp">
                        <img class="basket_logo" :src="item.logo" alt="">
                        <div class="basket_info">
                            <h5>{{item.name}}<span class="res">推荐</span></h5>
                            <div class="basket_money">奖金指数：<span class="num">{{item.num}}</span> </div>
                        </div>
                    </div>
                    <div :class="['vote_btn',index == indexs?'blue':indexs?'novote':'']" disabled="false" @click.stop="onvote(index)">
                        <i class="iconfont" style="display:block">&#xe640;</i>
                        <span v-text="index==indexs?'已投':'投票'"></span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 弹窗规则 -->
         <transition name="fade">
           <div  v-if="show" class="rule_tips"  @click.self="show = !show">
            <div class="rule_content">
                <img  class="rule_close" src="@/assets/fileChild/Close.svg" alt="" @click="show = !show">
                <h5 class="rule_title">
                    奖金规则
                </h5>
                <div class="rule_text">
                    <br />
                 <p> 本次投票活动从8月8日开始,总奖金额100万元现金。</p>
                 <p> 凡是投票支持以下球队的消费者,可按 以下规则获得对应金额的红包:</p>
                   <p>1、投票支持冠军球队的,可按票数份额均分5万元</p>
                   <p>2、投票支持亚军球队的,可按票数份额均分3万元</p>
                   <p>3、投票支持季军球队的,可按票数份额均分2万元</p>
                   <p>4、投票支持“体育风尚”球队的,可按票数份额均分5万元</p>
                    <p>5、投票支持“直播最佳互动”球队的,可按票数份
                    额均分5万元</p>
                   <p>6、投票支持“最佳啦啦队”球队的,可按票数份额
                    均分5万元</p>
                    <p>7、同时投票支持前3名球队的,可按票数份额均分
                    25万元,单名消费者以5万元为限;如不足5位消费
                    者,则剩余金额由同时投票支持前2名球队的消费者
                    按票数份额均分</p>
                    <p>8、同时投票支持以上所有获奖球队的,可按票数份
                    额均分50万元,单名消费者以5万元为限;如不足10
                    位消费者,则刺余金顿按时投票支持获奖球队最多
                    的消费者依次分配5万元,分完为止</p>
                </div>
                 <br />
                 <h5 class="rule_title">
                    奖金指数
                </h5>
                <div class="rule_text">
                     <br />
                <p>奖金指数是实时变化的数字,按投系冠军球队的总金
                额除以实时累计投票票数确定,举例如下:</p>
                 <p>1、A球队奖金指数为1000,指实时累计有50票支持
                该球队,如该球队获得冠军,每票可获得1000元现
                金红包</p>
                 <p>2、B球队奖金指数为20,指实时累计有2500票支持
                该球队,如该球队获得冠军,每票可获得20元现金
                红包</p>
                <br />
                 <p>奖金指数从投票开始至冠军揭晓前会一直随投票情况
                而变化,投票指数低,说明该球队热门;投票指数
                高,说明该球队冷门。合理分配您的投票,最大化您
                的红包收益,考验您的策略能力哦</p>
                </div>
            </div>
        </div>
        </transition>  
    </div>
</template>

<script>
import '@/utils/font/iconfont.css'
import '@/utils/font/iconfont.js'
import getRequest from "../../utils/getRequest"
export default {
    name:"vote",
    data() {
        return {
            show:false,
            list:[
                {
                    logo:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=591012444,3681054439&fm=26&gp=0.jpg",
                    name:"雄鹿队",
                    num:142
                },
                {
                    logo:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1331756303,1671279831&fm=26&gp=0.jpg",
                    name:"太阳队",
                    num:245
                },
                {
                    logo:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=285997803,1127796189&fm=26&gp=0.jpg",
                    name:"公牛队",
                    num:321
                },
                {
                    logo:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2912161429,2191145585&fm=26&gp=0.jpg",
                    name:"森林狼",
                    num:152
                },
                {
                    logo:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4251428281,3601648655&fm=26&gp=0.jpg",
                    name:"灰熊队",
                    num:245
                },
            ],
            indexs:null
        }
    },
    created() {
        this.indexs=getRequest('index')
    },
    methods: {
        // 投票
        onvote(e){
            if(!this.indexs){
                this.$router.push({path:"/success",query:{index:e}})       
            }
            
        }
    },
}
import "./vote.css"
</script>

<style scoped>
.rule_tips .rule_text{
    font-size: .7rem;
}
</style>
