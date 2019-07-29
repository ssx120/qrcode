<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <router-view/>
  </div>
</template>

<style>
/* 规则 */
.rule_tips{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0,0,0,.6);
}
.rule_content{
    box-sizing: border-box;
    background: #fff;
    width: 80%;
    height: 60%;
    position: absolute;
    top: 20%;
    left: 10%;
    border-radius: 1rem;
    padding: 5%;
    overflow-y: scroll;
}
.rule_title{
    border-bottom: solid 1px #ccc;
    padding: .8rem 0;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
}
.rule_text{
    line-height: 1.3rem;
}
.rule_close{
    width: 1.5rem;
    position: fixed;
    top: 22%;
    right: 13%;
}
/* 分享遮罩层 */
.share_tips{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(0,0,0,0.8);
}
.share_solid{
    width: 15%;
    position: absolute;
    top: .3rem;
    right: 1.5rem;
}
.click_share{
    width: 50%;
    position: absolute;
    top: 20%;
    left: 25%;
}
.share_btns{
    width: 30%;
    position: absolute;
    top: 70%;
    left:35%;
}
</style>
