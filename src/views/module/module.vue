<template>
    <div>
       <antiFake :data="data"/>
    </div>
</template>

<script>
import getRequest from "../../utils/getRequest"
import antiFake from '@/components/antiFake/antiFake'
export default {
    name:"module",
    data() {
        return {
            data:null
        }
    },
    methods: {
        
    },
    created() {
        let config_id = getRequest("config_id")
        this.axios({
          method: 'post',
          url: '/api/v1.0/qrcode/get',
          data: {
              "config_id":config_id
          }
      }).then(e=>{
          console.log(e)
        this.data = e.data
      })
    },
    components:{
        antiFake
    }
}
</script>

<style>

</style>
