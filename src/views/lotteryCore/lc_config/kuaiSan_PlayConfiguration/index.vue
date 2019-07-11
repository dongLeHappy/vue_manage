<template>
<!-- 快3玩法数据配置主页面， -->
    <div class="HappyVery_PlayConfiguration" v-loading="loadingObj.LoadingTable">  
     <sanjun v-if="playTema()"></sanjun>
     <duanpai v-if="play=='短牌'"></duanpai>
     <weitou v-if="play=='围骰、全骰'"></weitou>
     <changpai v-if="play=='长牌'"></changpai>
     <dianshu v-if="play=='点数'"></dianshu>
    </div>
</template>
<script>
    import sanjun from './lc_sanjun'  // 三军
    import duanpai from './lc_duanpai'  // 短牌
    import weitou from './lc_weitou'  // 围骰/全骰
     import changpai from './lc_changpai'  //长牌 
     import dianshu from './lc_dianshu'  // 点数
import { mapState } from "vuex";
export default {
    name: 'HappyVery_PlayConfiguration',
    props:["play"],
    components:{
         sanjun,
         duanpai,
         weitou,
         changpai,
         dianshu,
     },
      computed: {
        ...mapState({
            loadingObj: state => state.ag_sm_userdefine_odd.loadingObj, // Loading对象 游戏管理/信息管理/赔率管理/各二级彩种赔率管理与【赔率设置】的 “查看赔率详情 是共用一个
        }),
    },
     methods:{ // play=='三军'
        playTema(){
            if(this.play=="三军"){
                return true
            }else{
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