<template>
<!-- 11选5玩法数据配置主页面， -->
    <div class="elevenSelectFive_PlayConfiguration" v-loading="loadingObj.LoadingTable">  
       <yidaowuqiu v-if="playYiDaoWuQiu('球')"></yidaowuqiu>
       <yidaobazhong v-if="playYiDaoWuQiu('中一')"></yidaobazhong>
       <longhu v-if="play=='龙虎'"></longhu>
       <zonghe v-if="play=='总和'"></zonghe>
       <qiansanzhixuan v-if="play=='前三直选'"></qiansanzhixuan>
       <qianerzhixuan v-if="play=='前二直选'"></qianerzhixuan>
    </div>
</template>
<script>
    import yidaowuqiu from './lc_yidaowuqiue'  // 第一到第五球
    import yidaobazhong from './lc_yidaobazhong'  // 一中一 到前三组选
    import longhu from './lc_longhu'  // 龙虎
    import zonghe from './lc_zonghe'  // 总和 
    import qiansanzhixuan from './lc_qiansanzhixuan'  //  前三直选
    import qianerzhixuan from './lc_qianerzhixuan'  //  前二直选
    import { mapState } from "vuex";
export default {
    name: 'elevenSelectFive_PlayConfiguration',
    props:["play"],
    components:{
        yidaowuqiu,
        yidaobazhong,
        longhu,
        zonghe,
        qiansanzhixuan,
        qianerzhixuan
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
            } else if(val == "中一"){
                itme =  this.play=="一中一" ||this.play=="二中二" ||this.play=="三中三" ||this.play=="四中四" ||this.play=="五中五" 
                  ||this.play=="六中五" ||this.play=="七中五" ||this.play=="八中五" ||this.play=="前二组选" ||this.play=="前三组选"
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
.elevenSelectFive_PlayConfiguration{
    width: 100%;
    height: auto;
}

</style>