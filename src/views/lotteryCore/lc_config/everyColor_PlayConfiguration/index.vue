<template>
<!-- 时时彩玩法数据配置主页面， -->
    <div class="everyColor_PlayConfiguration" v-loading="loadingObj.LoadingTable">  
       <yidaowuqiu v-if="playYiDaoWuQiu('球')"></yidaowuqiu>
       <longhu v-if="playYiDaoWuQiu('龙虎')"></longhu>
       <zonghe v-if="playYiDaoWuQiu('总和')"></zonghe>
       <jinhua v-if="playYiDaoWuQiu('金花')"></jinhua>
       <!-- <yizizuhe v-if="playYiDaoWuQiu('一字组合')"></yizizuhe>
       <heshu v-if="playYiDaoWuQiu('和数')"></heshu>
       <erzizuhe v-if="playYiDaoWuQiu('二字组合')"></erzizuhe>
       <sanzizuhe v-if="playYiDaoWuQiu('三字组合')"></sanzizuhe>
       <erdingwei v-if="playYiDaoWuQiu('二定位')"></erdingwei> -->
    </div>
</template>
<script>
 import yidaowuqiu from './lc_yidaowuqiuC'  // 第一到第五球
 import longhu from './lc_longhu'  // 龙虎
 import zonghe from './lc_zonghe'  // 总和
//  import yizizuhe from './lc_yizizuhe'  // 一字组合
 import jinhua from './lc_jinhua'  // 金花
//  import heshu from './lc_heshu'  // 和数
//   import erzizuhe from './lc_erzizuhe'  // 金花  
//  import sanzizuhe from './lc_sanzizuhe'  // 三字组合
//   import erdingwei from './lc_erdingwei'  // 二定位
import { mapState } from "vuex";
export default {
    name: 'everyColor_PlayConfiguration',
    props:["play"],
    components:{
        yidaowuqiu,
        longhu,
        zonghe,
        jinhua,
        // yizizuhe,
        // heshu,
        // erzizuhe,
        // sanzizuhe,
        // erdingwei
     },
      computed: {
        ...mapState({
              loadingObj: state => state.ag_sm_userdefine_odd.loadingObj, // Loading对象 游戏管理/信息管理/赔率管理/各二级彩种赔率管理与【赔率设置】的 “查看赔率详情 是共用一个
        }),
    },
     methods:{
        playYiDaoWuQiu(val){
            let itme = null;
            if(val == "球"){
                itme =  this.play=="第一球" ||this.play=="第二球" ||this.play=="第三球" ||this.play=="第四球" ||this.play=="第五球" 
                if(itme){
                    return true
                }
                return false
            }else if(val == "龙虎"){
                itme =  this.play=="龙虎"
                if(itme){
                    return true
                }
                return false
            }else if(val == "总和"){
                itme =  this.play=="总和" 
                if(itme){
                    return true
                }
                return false
            } else if(val == "金花"){
                itme =  this.play=="前三" ||this.play=="中三" ||this.play=="后三" 
                if(itme){
                    return true
                }
                return false
             }
            // else if(val == "一字组合"){
            //     itme =  this.play=="一字组合_前三" ||this.play=="一字组合_中三" ||this.play=="一字组合_后三" ||this.play=="一字组合_全五" 
            //     if(itme){
            //         return true
            //     }
            //     return false
            // }else if(val == "二字组合"){
            //     itme =  this.play=="二字组合_前三" ||this.play=="二字组合_中三" ||this.play=="二字组合_后三"
            //     if(itme){
            //         return true
            //     }
            //     return false
            // }else if(val == "三字组合"){
            //     itme =  this.play=="三字组合_前三" ||this.play=="三字组合_中三" ||this.play=="三字组合_后三"
            //     if(itme){
            //         return true
            //     }
            //     return false
            // }else if(val == "二定位"){
            //     itme =  this.play=="二定位_万千" ||this.play=="二定位_万百" ||this.play=="二定位_万十" ||this.play=="二定位_万个" ||this.play=="二定位_千百"
            //      ||     this.play=="二定位_千十" ||this.play=="二定位_千个" ||this.play=="二定位_百十" ||this.play=="二定位_百个" ||
            //             this.play=="二定位_十个" 
            //     if(itme){
            //         return true
            //     }
            //     return false
            // }else if(val == "和数"){
            //     itme =  this.play=="和数_万千" ||this.play=="和数_万百" ||this.play=="和数_万十"||this.play=="和数_万个" ||this.play=="和数_千百" ||this.play=="和数_千十"
            //     ||this.play=="和数_千个" ||this.play=="和数_百十" ||this.play=="和数_百个"||this.play=="和数_十个"
            //     if(itme){
            //         return true
            //     }
            //     return false
            // }
            
        }
    },
     created() {
      },
    mounted() { 
      
    }
}
</script>

<style lang="scss">
.everyColor_PlayConfiguration{
    width: 100%;
    height: auto;
}

</style>