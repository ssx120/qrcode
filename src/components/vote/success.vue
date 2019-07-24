<template>
    <div class="success_warp">
       <div class="success_top">
           <div class="success_banner">
                <img class="" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=376578877,460533676&fm=26&gp=0.jpg" alt="">
            </div>
           <h5>恭喜您投票成功！</h5>
       </div>

        <div class="success_centent">
            <div class="success_center">
                <div class="">
                    <p>目前您支持的</p>
                    <h5>5支球队</h5>
                    <p>正在冲击冠军中</p>
                </div>
                <div class="">
                    <p>目前已有</p>
                    <h5>13498票支持的球队</h5>
                    <p>正在冲击冠军中</p>
                </div>
            </div>
            <p class="ph">我的球队夺冠可能性排行</p>
             <progress id="pg" max="100" value="40"></progress>
            <div class="success_back" @click="back">返回</div>
        </div>

    </div>    
</template>
<style scoped="scoped">
.success_top{
    padding: 10% 5% 0;
    background: #f2f4f5;
    border-bottom-left-radius:1rem;
    border-bottom-right-radius: 1rem;
}
.success_banner{
    overflow: hidden;
    border-radius: 2rem;
    height: 10rem;
}
.success_top h5{
    line-height: 6rem;
    font-size: 1.5rem;
    font-weight: bold;
}
.success_centent{
    padding: 0 5%;
    margin-top: 2rem;
}
.success_center{
    display: flex;
    justify-content: space-between
}
.success_center>div{
    background: #f2f4f5;
    width: 48%;
    text-align: center;
    box-sizing: border-box;
    padding: 1rem;
}
.success_center h5{
    color: #e13939;
    font-weight: bold;
    /* font-size: .8rem; */
}
.success_back{
    width: 80%;
    margin: 0 auto;
    background: #2d5fff;
    color: #fff;
    text-align: center;
    height: 2.4rem;
    line-height: 2.4rem;
    border-radius: .3rem;
    margin-top: 20%;
}
.ph{
    margin: 2rem 0;
}
progress{
    -webkit-appearance: none;
    width: 100%;
    height: .5rem;
    border-radius:.5rem; 
 }
 ::-webkit-progress-bar{
     /* 获取progress */
     background-color: #e5e5e5;
     /* 进度条未被填充的背景颜色 */
 }
 ::-webkit-progress-value {
     background-color: #2d5fff;
     /* 进度条被填充部分的背景颜色 */
 }
 ::-webkit-progress-inner-element {
     /* border: 2px solid black; */
    /* 进度条的内边框，注意跟outline区分 */
 }

</style>
<script>
export default {
    name:"success",
    data() {
        return {
            
        }
    },
    created() {
        
    },
    methods: {
        back(){
            this.$router.back(-1)
        }
    },
}
</script>

