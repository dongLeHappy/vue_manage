<template>
<!-- 快乐十分玩法数据配置主页面， -->
    <div class="HappyVery_PlayConfiguration" v-loading="loadingObj.LoadingTable">  
       <zonghe v-if="play=='总和'"></zonghe>
       <yidaosiqiu v-if="playYe('一')"></yidaosiqiu>
       <wudaobaqiu v-if="playYe('五')"></wudaobaqiu>
       <zhengma v-if="play=='正码'"></zhengma>
    </div>
</template>
<script>
  import zonghe from './lc_zonghe'  // 总和
  import yidaosiqiu from './lc_yidaosiqiu'  // 第一球-第四球  
  import wudaobaqiu from './lc_wudaobaqiu'  // 第五球-第八球
  import zhengma from './lc_zhengma'  // 正码
  import { mapState } from "vuex";
export default {
    name: 'HappyVery_PlayConfiguration',
    props:["play"],
    components:{
         zonghe,
         yidaosiqiu,
         wudaobaqiu,
         zhengma
     },
      computed: {
        ...mapState({
             loadingObj: state => state.ag_sm_userdefine_odd.loadingObj, // Loading对象 游戏管理/信息管理/赔率管理/各二级彩种赔率管理与【赔率设置】的 “查看赔率详情 是共用一个
        }),
    },
     methods:{
        playYe(val){
            let itme = null;
            if(val == "一"){
                itme =  this.play=="第一球" ||this.play=="第二球" ||this.play=="第三球" ||this.play=="第四球" 
                if(itme){
                    return true
                }
                return false
            }else if(val == "五"){
                itme =  this.play=="第五球" ||this.play=="第六球" ||this.play=="第七球" ||this.play=="第八球" 
                if(itme){
                    return true
                }
                return false
            }
            
        }
    },
     created() {
      },
    mounted() { 
      
    }
}
</script>

<style lang="scss">
.HappyVery_PlayConfiguration{
    width: 100%;
    height: auto;
}

</style>