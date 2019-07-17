<template>
  <div class="home">
    <div class="header">
      <img src="@/assets/header.jpg" alt="">
      <div class="title_wrap">
          <h5 class="title">旗欣活码<br />演示平台</h5>
          <!-- 输入 -->
          <div class="insert">
            <img src="@/assets/edit.png" alt="" class="edit">
            <input type="text" placeholder="请输入演示企业名称" v-model="title" class="input_name">
          </div>
      </div>
    </div>

    <!-- 选择功能 -->
    <div class="content">
      <div class="d_title">请选择有效时间&演示功能组合</div>
      <!-- 展示有效时间 -->
      <div class="select">
          <div class="date">
            <span :class="{select_date,select_date_active:select_active == item.value}" v-for="(item , index) in date"
             :key="index" @click="select_date(item.value)">{{item.name}}
            </span>
          </div>
       
      </div>
       <!-- 选择功能 -->
          <div class="function">
            <div v-for="(item,index) in data" :key="index" :class="[{function_active:select_function.indexOf(item.value)> -1}]"
             @click="select_method(item.value)">{{item.name}}
            </div>
          </div>
          <!-- 生成二维码 -->
          <div class="generate" @click="create">
            生成演示二维码
          </div>
    </div>
    <!-- 提示信息 -->
    <div class="tips">
         <transition name="fade">
            <div v-if="show" class="tips_content">
              <div class="tips_warp">
                   <img src="@/assets/loading.png" alt="" class="loading">
                   <h5>{{tipsText}}</h5>
              </div>
            </div>
         </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "./Home.css"
import qs from "qs"
export default {
  name: "home",
  data() {
    return {
      tipsText:"",
      show:false,
      title:null,
      select_active:null,
      select_function:[],
      arrays:new Set(),
      data:[
        {
          name:"防伪",
          value:"antiFake"
        },
        {
          name:"现金红包",
          value:"redPacket"
        },
        {
          name:"积分奖励",
          value:"creditPoint"
        },
        {
          name:"抽奖",
          value:"luckyDraw"
        },
        {
          name:"公益捐款",
          value:"commonweal"
        }
      ],
      date:[
        {
          name:"一天有效",
          value:"day"
        },
        {
          name:"一周有效",
          value:"week"
        },
         {
          name:"一月有效",
          value:"month"
        },
         {
          name:"长期有效",
          value:"long"
        }
      ]
    }
  },
  methods: {
    // 选择有效时间
    select_date(value){
      this.select_active = value
    },
    // 选择功能
    select_method(value){
      let array = this.arrays
      if(array.has(value)){
          array.delete(value)
      }else{
        // arrays.push(value)
        array.add(value)
      }
     this.select_function = [...array]
    },
    // 按生成二维码
    create(){
      this.tipsText = "生成中"
      this.show= true
      let data = {
        "title":this.title,
        "valid_date":this.select_active,//day,week,month,long
        "module":this.select_function
      }
      this.axios({
          method: 'post',
          url: '/api/v1.0/qrcode/add',
          data: data
      }).then(e=>{
        if(e.data.status == 200 && e.status == 200){
          this.show= false
          let source = e.data.data.qrcodeList
          this.$router.push({name:"qrcode",params:{qrcocd:source}})
        }
        else
        {
          this.tipsText = e.data.info
          setTimeout(() => { 
            this.show = false
          }, 1000);
        }
        
      })
    }
  },
  created() {
     document.title = "旗欣活码演示平台"
  },
  components: {

  }
};
</script>
<style scoped>


</style>

