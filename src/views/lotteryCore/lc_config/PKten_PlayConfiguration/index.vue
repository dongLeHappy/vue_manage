<template>
<!-- 快乐十分玩法数据配置主页面， -->
    <div class="HappyVery_PlayConfiguration" v-loading="loadingObj.LoadingTable">  
     <yidaowuming v-if="playShow('一')"></yidaowuming>
     <wudaoshiming v-if="playShow('二')"></wudaoshiming>
     <guanyahe v-if="play=='冠亚和'"></guanyahe>
    </div>
</template>
<script>
 import yidaowuming from './lc_yidaowuming'  // 第一到五名
  import wudaoshiming from './lc_wudaoshiming'  // 第六到十名
 import guanyahe from './lc_guanyahe'  // 冠亚和 
import { mapState } from "vuex";
export default {
    name: 'HappyVery_PlayConfiguration',
    props:["play"],
    components:{
         yidaowuming,
         wudaoshiming,
         guanyahe

     },
    computed: {
        ...mapState({
              loadingObj: state => state.ag_sm_userdefine_odd.loadingObj, // Loading对象 游戏管理/信息管理/赔率管理/各二级彩种赔率管理与【赔率设置】的 “查看赔率详情 是共用一个
        }),
    },
     methods:{
        playShow(val){
           
            let itme = null;
            if(val == "一"){
                itme =  this.play=="冠军" ||this.play=="亚军" ||this.play=="第三名" ||this.play=="第四名" ||this.play=="第五名" 
                if(itme){
                        return true                
                }
                return false
            }else if(val == "二"){
                 itme =  this.play=="第六名" ||this.play=="第七名" ||this.play=="第八名" ||this.play=="第九名" ||this.play=="第十名" 
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