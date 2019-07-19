<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <router-view/>
  </div>
</template>

<style>
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
