<template>
    <!-- 自定义赔率设置 -->
    <div class="app-container userdefine-odd-container">
        <!-- 彩种类型树 -->
        <div class="lottery-type-tree">
            <el-tree
                class="filter-tree"
                :data="tree_data"
                :props="defaultProps"
                default-expand-all
                ref="tree2"
                @node-click="handleNodeClick"
                v-loading="loadingObj.LoadingTree"
               >
            </el-tree>
        </div>
        <!-- 对应类型赔率详情 -->
         <div class="Userdefine-odd-content">
            <div class="Userdefine-odd-content-lefts">
                <el-radio-group class="Userdefine-odd-content-left-groups" v-model="currentWanfa"  v-loading="loadingObj.Loadingplay">
                <div class="showoverflowys">
                    <p v-for="item in wanfa_list" :key="item.id" :label="item" @change="changePriceData(item)">
                    <el-radio-button :label="item.playRuleId">{{item.betOnValue}}</el-radio-button>
                    </p>
                </div>
                </el-radio-group>
            </div>
            <div class="Userdefine-odd-content-rights">
                <p style="font-size: 12px;" >  {{setPlayingMethod}}</p>               
                <hongKongPlayConfiguration  v-if="childName.indexOf('六合彩') >= 0" :play="setPlayingMethod"></hongKongPlayConfiguration>
                <kuaiSanPlayConfiguration  v-if="childName.indexOf('快3') >= 0" :play="setPlayingMethod"></kuaiSanPlayConfiguration>
                <everyColorPlayConfiguration v-if="childName.indexOf('时时彩')>= 0" :play="setPlayingMethod"></everyColorPlayConfiguration>
                <elevenSelectFivePlayConfiguration v-if="childName.indexOf('11选5') >= 0" :play="setPlayingMethod"></elevenSelectFivePlayConfiguration>
                <HappyVeryPlayConfiguration  v-if="childName.indexOf('快乐10分') >= 0" :play="setPlayingMethod"></HappyVeryPlayConfiguration>
                <PKtenPlayConfiguration v-if="childName.indexOf('PK10') >= 0" :play="setPlayingMethod"></PKtenPlayConfiguration>
               <!-- !loadingObj.LoadingTable&& -->
            </div>
        </div> 
        
    


    </div>
</template>
<script>
import { findByLotteryId,findPlayRuleList } from "@/api/agentPlatForm/systemManage/ag_sm_userdefine_odd" // 玩法查询接口,查询对应赔率接口
import { mapState } from "vuex";
import { debounce } from '../../../../utils';
// import OddXianggangcai from './lotteryTemplates/odd_xianggangcai' // 赔率设置子组件
// import OddKuaisan from './lotteryTemplates/odd_kuaisan'
// import OddShishicai from './lotteryTemplates/odd_shishicai'
// import Odd11xuan5 from './lotteryTemplates/odd_11xuan5'
// import OddKuaile10fen from './lotteryTemplates/odd_kuaile10fen'
// import OddPk10 from './lotteryTemplates/odd_pk10'
// import OddTxfenfencai from './lotteryTemplates/odd_txfenfencai' 
import hongKongPlayConfiguration from "../../../lotteryCore/lc_config/hongKong_PlayConfiguration";
import everyColorPlayConfiguration from "../../../lotteryCore/lc_config/everyColor_PlayConfiguration";
import HappyVeryPlayConfiguration from "../../../lotteryCore/lc_config/HapyyVery_PalyConfiguration";
import PKtenPlayConfiguration from "../../../lotteryCore/lc_config/PKten_PlayConfiguration";
import kuaiSanPlayConfiguration from "../../../lotteryCore/lc_config/kuaiSan_PlayConfiguration";
import elevenSelectFivePlayConfiguration from "../../../lotteryCore/lc_config/elevenSelectFive_PlayConfiguration";
export default {
    data() {
        return {
            dialogMt:this.dialogMt, // 弹出框上边距
            childName: '六合彩', // 对应彩种名称
            childId: '', // 对应彩种ID
            defaultProps: { // 彩种树展示格式
                children: 'children',
                label: 'name'
            },
            
        }
    },
    components: {
        hongKongPlayConfiguration,
        everyColorPlayConfiguration,
        HappyVeryPlayConfiguration,
        PKtenPlayConfiguration,
        kuaiSanPlayConfiguration,
        elevenSelectFivePlayConfiguration
        // OddXianggangcai,
        // OddKuaisan,
        // OddShishicai,
        // Odd11xuan5,
        // OddKuaile10fen,
        // OddPk10,
        // OddTxfenfencai
    },
    computed: {
        ...mapState({
            tree_data: state => state.ag_sm_userdefine_odd.tree_data, // 彩种树
              loadingObj: state => state.ag_sm_userdefine_odd.loadingObj, // Loading对象 游戏管理/信息管理/赔率管理/各二级彩种赔率管理与【赔率设置】的 “查看赔率详情 是共用一个
            wanfa_list: state => state.ag_userdefine_odd.wanfa_list, // 玩法列表
        }),
        currentWanfa: { // 选中的玩法ID
            get() {
                return this.$store.state.ag_sm_userdefine_odd.currentWanfa;

            },
            set(item) {
              this.changeradio(item);
            }
        },
    setPlayingMethod: { //// 选中的玩法名称
      get() {
        return this.$store.state.ag_sm_userdefine_odd.setPlayingMethod;
      },
      set(item) {
       return item
      }
    },
    },
    methods: {
        judgeScree(val) { // 判断屏幕大小进行操作
            let a = document.body.offsetHeight - val;
            this.dialogMt = a / 2 + 'px';
        },
        handleNodeClick(data) { // 点击彩种树 获取对应玩法列表
            this.childName = data.name;
            this.childId =  data.verId; 
            if(data.parentId != "0") { // 点击一级彩种时，只做折叠，不请求接口
                this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTable = true;// 赔率页面loading
                this.$store.state.ag_sm_userdefine_odd.loadingObj.Loadingplay = true;
                this.$store.commit('SET_CURRENT_ODD_PAGE',data.verId) // 设置当前选中二级彩种id 
             //   let playRuleId = ''; // 对应玩法id
                findByLotteryId({lotteryId: data.id}).then(res => { // 根据二级彩种id 获取对应玩法列表
                    let resData = res.data
                    if(resData.success == 1) {
                       this.$store.state.ag_sm_userdefine_odd.setPlayingMethod =resData.content[0].betOnValue;  // 选中的玩法名称
                       this.$store.state.ag_sm_userdefine_odd.currentWanfa = resData.content[0].playRuleId
                       
                       this.$store.commit('SET_WANFA_LIST',resData.content)
                        findPlayRuleList({lotteryOddsVerId: data.verId, playRuleId: resData.content[0].playRuleId}).then(res => { // 每次切换拉取对应第一个玩法的赔率信息
                            let resData = res.data;
                            if(resData.success == 1) {

                                 this.$store.state.lc_detail.inputTemaData = resData.content; // 获取玩法列表中的赔率

                            }else {
                                this.$message.error(resData.respMsg);
                            }

                            this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTable = false;
                        })
                    }else {
                        this.$message.error(resData.respMsg)
                    }
                    this.$store.state.ag_sm_userdefine_odd.loadingObj.Loadingplay = false;
                })

                
           }
        },
        changePriceData(val){ // 玩法点击选中事件获取玩法名在赔率上面展示
            this.$store.state.ag_sm_userdefine_odd.setPlayingMethod =val.betOnValue; //选中后，设置 一个玩法 用来在赔率最上方展示  
        },
        changeradio(val) { // 改变玩法
            this.$store.state.ag_sm_userdefine_odd.currentWanfa = val;
            this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTable = true;// 赔率页面loading
            this.$store.state.lc_detail.inputTemaData = null; // 点击玩法时，清空右边的数据
            this.refreshPort(val)   // 刷新请求右边赔率数据接口 
        },
       refreshPort(val){ // 刷新接口
           findPlayRuleList({lotteryOddsVerId: this.childId,playRuleId: val}).then(res => { // 加载六合彩下 特码 玩法对应的赔率
                let resData = res.data;
                if (resData.success == 1) {
                     this.$store.state.lc_detail.inputTemaData = resData.content; // 获取玩法列表中的赔率    
                  //  this.$store.commit('SET_ODD_DETAIL_LIST',resData.content)
                    
                }else {
                    this.$message.error(resData.respMsg);
                }
                  this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTable = false;
              }) 

       }
    },
    created() { 
    },
}
</script>
<style lang="scss">
    .userdefine-tree-node {
        display: block;
        height: 26px;
        line-height: 26px;
        width: 100%;
        box-sizing: border-box;
        background: rgb(244,246,249);
    }
    .is-current {
        background: rgb(244,246,249)!important;
    }
.Userdefine-odd-content{
    display: flex;
    flex-direction: row;
    border: solid 1px #dcdfe6;
    border-left: none;
    padding: 10px 20px 0px 0px;
   .Userdefine-odd-content-lefts{  // 左边
      max-height: 70vh;
      margin: 0 5px 0 25px;
      width: 125px;
      .Userdefine-odd-content-left-groups{
          border: 1px solid #dcdfe6;
        >div{   
        >p{
           width:105px;
           height: 30px;
           line-height: 30px;       
           .el-radio-button{
            width: 100%;
            height: 100%;
           span{
            font-size: 12px;
            width: 100%;
            height: 100%;
            display: inline-block;
            line-height: 0%;
            border-radius: 0;
            border-top: none;
            background: #f2f2f2 ;
          }
          .el-radio-button__inner {
            border-right: none;
            border-left: none;
            width: 100% !important;
            height: 100%!important;
          }
        }
        .el-radio-button__orig-radio:checked+.el-radio-button__inner{
            background: rgb(161, 161, 161);
            border-color:#dcdfe6;
            color: #606266;
        }
        }
        }
      }
      .showoverflowys{
          width:100%;
          height:calc(69vh - 1px);
          overflow: hidden;
          overflow-y: auto;
          background: #f2f2f2 ;
       }
    } 

.Userdefine-odd-content-rights{  // 右边
    height: 69vh;
    width: 85%;
    margin-left: 10px;
    border: solid 1px #dcdfe6;
    p{
      height: 30px;
      line-height: 30px;
    }
   
  }


}
 @import '@/styles/lotteryCore/lc_config/detail.scss';
</style>

<style lang="scss" scoped>

.odd-detail-box {
    margin-left: 20px;
    width: 960px;
}
.userdefine-odd-container {
   display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    // width: calc(100% - 300px);
   // height: 75vh;
    .lottery-type-tree,.lottery-type-state,.lottery-type-option-box,.common-odd,.userdefine-odd {
        color: #606266;
        border: 1px solid #e0e0e0;
    }
    .lottery-type-tree {
        width: 215px;
        padding: 20px 20px 20px 0;
        overflow: auto;
        max-height: calc(100vh - 310px);
    }
    .lottery-type-odd-box {
        margin-left: 20px;
        width: 83%;
        max-width: 990px;
        max-height: calc(100vh - 110px);
        .lottery-type-state {
            line-height: 40px;
            padding-left: 20px;
            font-size: 14px;
        }
    }
    .lottery-type-option-box {
        margin-top: 10px;
        padding: 10px 20px;
        padding-bottom: 20px;
        .el-button {
            padding:4px 15px;
        }
        .blue-font {
            color: blue;
            font-style: normal;
        }
        .odd-state-box {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .common-odd,.userdefine-odd {
                line-height: 40px;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .common-odd {
                width: 40%;
            }
            .userdefine-odd {
                width: 58%;
            }
        }
        .odd-detail-box {
            margin-top: 10px;
            padding: 20px;
            padding-left: 0;
            max-height: calc(100vh - 265px);
            overflow: auto;
        }
    }
    
}

</style>


