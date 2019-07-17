<template>
    <div class="luckyDraw">
        <div id="gift-box">
            <ul>
                <li :class="[index==0?'active':'']">一等奖</li>
                <li :class="[index==1?'active':'']">二等奖</li>
                <li :class="[index==2?'active':'']">三等奖</li>
                <li :class="[index==7?'active':'','revers']">八等奖</li>
                <a :class="[{cur:curshow},'revers']" @click="startRoll">开始</a>
                <li :class="[index==3?'active':'','revers']">四等奖</li>
                <li :class="[index==6?'active':'','revers']">七等奖</li>
                <li :class="[index==5?'active':'','revers']">六等奖</li>
                <li :class="[index==4?'active':'','revers']">五等奖</li>
            </ul>
        </div>
          
        <transition name = "fade">
            <div class="animotion" 
           v-show = "giftopen"
              @click.self="giftopen = !giftopen">
                <div class="animotion_content">
                     <h5>恭喜你</h5>
                     <p>中了一份VIPJR一节免费试听课</p>
                     <div class="btn">
                         <div @click="receive(123)">立即领取</div>
                         <div @click.self="giftopen = !giftopen">再试一次</div>
                     </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
 let scrollTop
export default {
    name:"luckyDraw",
    data() {
        return {
            index: -1,// 当前转动到哪个位置，起点位置
            count: 8,//总共有多少位置
            timer: 0,//每次转动定时器
            speed: 200,//初始转动速度
            times: 0,// 转动次数
            cycle: 3,//转动基数：至少需要转动多少次再进入抽奖环节
            prize: 7,//中奖位置
            curshow:true,
            giftopen:false
        }
    },
    methods: {
         // 开始抽奖
       startRoll:function(){
           scrollTop = document.documentElement.scrollTop;
           clearTimeout(this.timer) //清除定时器，转动停止
           this.times += 1//转动次数
           this.oneRoll()// 转动过程调用的每一次转动方法，这里是第一次调用初始化
           this.usePrize()
       },
       // 转动的方法
       oneRoll:function(){
           let index = this.index //当前转动到的位置
           const count = 8 //总共的位置
           index += 1
           if(index >count - 1){
               index = 0
           }
           this.index = index
       },
       //判断是否转到中奖位置，如果是，停止，如果不是，继续转动
       usePrize:function(){
           // 判断是否达到转动次数要求且转到的位置是中奖位置
           if(this.times > this.cycle + 10 && this.prize === this.index) {
               clearTimeout(this.timer) //清除定时器，转动停止
               this.times = 0
               this.giftopen = true //显示开奖界面
               setTimeout(() => {
                if(this.giftopen){
                    document.body.style.height = '100vh'
		            document.body.style['overflow-y'] = 'hidden'
                }
               }, 100);
           }else {
               //否则继续转动
               if(this.times<this.cycle){
                   this.speed-=5
               }
               this.timer = setTimeout(this.startRoll, this.speed)
           }
       },
    //    领取奖励
        receive(e){
            window.location.href = "https://vj.yyang.net.cn/edu/#/siteid=1077_test"
        }
    },
    watch:{
        //监听开奖显示
        giftopen(e){
            if(!e){
              document.body.style.height = '100%'
              document.body.style['overflow-y'] = 'visible'
              document.documentElement.scrollTop = scrollTop
            }
        }
    },
    created() {
      
    },
}
</script>

<style scoped>
@import "./luckyDraw.css";
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
.animotion{
    width:100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(000,000,000,.6);
}
ul {
  width: 306px;
  height: 306px;
  list-style: none;
  background: #466cff;
  box-sizing: border-box;
}
ul li,
ul a {
  width: 100px;
  height: 100px;
  margin: 1px;
  float: left;
  text-decoration:none;
  text-align: center;
  line-height: 100px;
  background: #f5f6fa;
}
ul a:hover {
  cursor: pointer;
}
ul .active {
  background: #c0ccfc;
  color: #fff;
}
.cur {
  background-color: #466cff;
  color:#fff;
}
.animotion_content{
  box-sizing: border-box;
  background: #fff;
  width:80%;
  height: 13rem;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
 }
 .animotion_content h5{
     font-size: 1.5rem;
     font-weight: bold;
    
 }
 .animotion_content p{
     margin-top: 1rem;
     font-size: 1rem;
     color: #ff2a27;
 }
 .btn{
     margin-top: 1.2rem;
     display: flex;
     justify-content: space-around;
     font-size: .9rem;
 }
 .btn div:first-child{
     background: #466cff;
     color:#fff;
     width: 60%;
     height: 2rem;
     line-height: 2rem;
    border-radius: 5px;
 }
 .btn div:last-child{
     color:#466cff;
     width:30%;
     height: 2rem;
     line-height: 2rem;
     border-radius: 5px;
     border: 1px solid #466cff;
 }
</style>
