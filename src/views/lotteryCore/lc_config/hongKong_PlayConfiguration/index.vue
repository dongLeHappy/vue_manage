<template>
<!-- 香港彩玩法数据配置主页面， -->
    <div class="hongKong_PlayConfiguration" v-loading="loadingObj.LoadingTable">  
        <tema v-if="playTema()"  ref="mychild"></tema>
        <zonghe v-if="playTotal()" ></zonghe>
        <zhongyi v-if="playkhgg()" ></zhongyi>
        <texiao v-if="playTexiao()" ></texiao>
        <yixiaobuzhong v-if="playYiXiaoZhong('不中')" ></yixiaobuzhong>
        <weishu v-if="playWeiShu('中')"></weishu>
        <wuxing v-if="play=='五行'"></wuxing>
        <banbo v-if="play == '半波'"></banbo>
        <tematouwei v-if="play=='特码头尾'" ></tematouwei>
        <qima v-if="play == '七码'" ></qima>
        <yixiao v-if="playYiXiaoZhong('中')"></yixiao>
        <weishubuzhong v-if="playWeiShu('不中')"></weishubuzhong>
    </div>
</template>
<script>
  import tema from './lc_tema'  // 特码-
  import zonghe from './zonghe' // 总和-
  import zhongyi from './lc_zhongyi' // <!-- 正码 五选中一 /六选中一七选中一/八选中一九选中一/十选中一/特平中一/特平中二/特平中三/特平中四/特平中五 --> -
  import texiao from './lc_texiao' // 特肖-
  import tematouwei from './lc_tematouwei' // 特码头尾
  import qima from './lc_qima' // 七码
  import wuxing from './lc_wuxing' // 五行
  import banbo from './lc_banbo' // 半波
  import yixiao from './lc_yixiao' // 一肖
  import yixiaobuzhong from './lc_yixiaobuzhong' // 一肖不中

  import weishu from './lc_weishu' // 尾数
  import weishubuzhong from './lc_weishubuzhong' // 尾数

import { mapState } from "vuex";
  
export default {
    name: 'hongKong_PlayConfiguration',
    props:["play"],
    components:{
      tema,
      zonghe,
      zhongyi,
      texiao,
      yixiaobuzhong,
      weishu,
      wuxing,
      tematouwei,
      qima,
      banbo,
      yixiao,
      weishubuzhong
     },
      computed: {
        ...mapState({   loadingObj: state => state.ag_sm_userdefine_odd.loadingObj, // Loading对象 游戏管理/信息管理/赔率管理/各二级彩种赔率管理与【赔率设置】的 “查看赔率详情 是共用一个  loadingObj: state => state.ag_sm_userdefine_odd.loadingObj, // Loading对象
        }),
    },
     methods:{
        playTema(){   // 展示tema 组件的  
            let Tema = this.play=="特码" ||this.play=="正1特" ||this.play=="正2特" ||this.play=="正3特" ||this.play=="正4特" ||this.play=="正5特" ||
            this.play=="正6特"
            if(Tema){
               
                return true
            //  this.$refs.mychild.getTemaData();
            }else{
                return false
            }
        },
        playTotal(){     // 展示zhengma 组件的         
            let Total = this.play=="总和"
            if(Total){
                return true
            }else{
                return false
            }
        },
        playTexiao(){   // 展示lc_texiao 12生肖 组件的  
            let texiao = this.play=="特肖" ||this.play=="二肖" ||this.play=="三肖" ||this.play=="四肖" ||this.play=="五肖" ||this.play=="六肖"
            if(texiao){
                return true
            }else{
                return false
            }
        },
        playYiXiaoZhong(val){   // 展示lc_yixiaozhong 组件的   
            if(val=='中'){
                let texiao = this.play=="一肖" ||this.play=="二肖连-中" ||this.play=="三肖连-中" ||this.play=="四肖连-中" ||this.play=="五肖连-中" 
                if(texiao){
                    return true
                }else{
                    return false
                }     
            }else if(val=='不中'){
                let texiao = this.play=="一肖不中" ||this.play=="二肖连-不中" ||this.play=="三肖连-不中" ||this.play=="四肖连-不中" ||this.play=="五肖连-不中" 
                if(texiao){
                    return true
                }else{
                    return false
                }    
            }
           
        },
        playWeiShu(val){   // 展示 尾数 组件的    
             if(val=='中'){
                let weishu = this.play=="尾数" ||this.play=="二尾连-中" ||this.play=="三尾连-中" ||this.play=="四尾连-中" 
                if(weishu){
                    return true
                }else{
                    return false
                }
            }else if(val=='不中'){
                 let weishu = this.play=="尾数不中" ||this.play=="二尾连-不中" ||this.play=="三尾连-不中" ||this.play=="四尾连-不中" 
                if(weishu){
                    return true
                }else{
                    return false
                }   
            }
        },
        playkhgg(){           
            let kngg = this.play=="正码" || this.play=="二全中" || this.play=="特串" ||this.play=="三全中" ||this.play=="五不中" ||
            this.play=="六不中" ||this.play=="七不中" ||this.play=="八不中" || this.play=="九不中" ||this.play=="十不中"||
            this.play=="五选中一" ||this.play=="六选中一" ||this.play=="七选中一" ||this.play=="八选中一" ||this.play=="九选中一" ||this.play=="十选中一" ||
            this.play=="一粒任中" ||this.play=="二粒任中" ||this.play=="三粒任中" ||this.play=="四粒任中" ||this.play=="五粒任中" 
            
            if(kngg){
                return true
            }else{
                return false
            }
           
        }   
  },
}
</script>

<style lang="scss">
.hongKong_PlayConfiguration{
    width: 100%;
    height: auto;
}
</style>