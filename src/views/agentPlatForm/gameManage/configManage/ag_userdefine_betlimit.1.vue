<template>
    <!-- 自定义投注上限设置 -->
    <div class="app-container userdefine-odd-container">
        <div class="lottery-type-head">
            <p>投注上限版本名称：</p>
            <p>
                <el-select v-model="SelectTheVersionID" placeholder="请选择" @change="SelectTheVersion">
                    <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                    </el-option>
                </el-select>
            </p>
            <p><el-input disabled="disabled" v-model="visonName" style="width:870px;" placeholder="请输入内容"></el-input></p>
        </div>
        <div class="lottery-type-content">
            <!-- 彩种类型树 -->
            <div class="lottery-type-tree">
                <el-tree
                    class="filter-tree"
                    :data="tempLotteryType"
                    :props="defaultProps"
                    default-expand-all
                    ref="tree2"
                    @node-click="handleNodeClick"
                    :render-content="renderContent"
                    v-loading="loadingObj.LoadingTree">
                </el-tree>
            </div>
            <!-- 对应类型赔率详情 -->
            <div class="lottery-type-odd-box">
                <div class="lottery-type-state">
                    <span>一级彩种名称：{{ parentName }}</span>    
                    <span>二级彩种名称：{{ childName }}</span>    
                </div>
                <div class="lottery-type-option-box">
                    <!-- 投注上限设置详情 -->
                     <!-- <div class="odd-detail-box" v-loading="loadingObj.LoadingTable"> -->
                        <!-- 香港彩 -->
                        <!-- <BetXianggangcai v-if="!loadingObj.LoadingTable&&childName.indexOf('六合彩') >= 0"></BetXianggangcai> -->
                        <!-- 快三 -->
                        <!-- <BetKuaisan v-if="!loadingObj.LoadingTable&&childName.indexOf('快3') >= 0"></BetKuaisan> -->
                        <!-- 时时彩 -->
                        <!-- <BetShishicai v-if="!loadingObj.LoadingTable&&childName.indexOf('时时彩') >= 0"></BetShishicai> -->
                        <!-- 11选5 -->
                        <!-- <Bet11xuan5 v-if="!loadingObj.LoadingTable&&childName.indexOf('11选5') >= 0"></Bet11xuan5> -->
                        <!-- 快乐10分 -->
                        <!-- <BetKuaile10fen v-if="!loadingObj.LoadingTable&&childName.indexOf('快乐10') >= 0"></BetKuaile10fen> -->
                        <!-- Pk10 -->
                        <!-- <BetPk10 v-if="!loadingObj.LoadingTable&&childName.indexOf('PK10') >= 0"></BetPk10> -->
                    <!-- </div> -->
                    <div class="pencent-content">
                        <PankouLimit :thisLottery="edit_View_Details.titleName" :getlotteryOddsVerId="SelectTheVersionID"></PankouLimit>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import { lotteryTree,findByLotteryId,visonNamelist } from '@/api/agentPlatForm/systemManage/ag_sm_userdefine_limit'
import PankouLimit from "../../../lotteryCore/lc_config/lc_pankou_limit"; // 通用盘口金额限制配置 页面


import { validNinedatayi } from '@/utils/validate'
import BetXianggangcai from './betLimitTemplates/betlimit_xianggangcai' // 投注上限设置子组件
import BetKuaisan from './betLimitTemplates/betlimit_kuaisan'
import BetShishicai from './betLimitTemplates/betlimit_shishicai'
import Bet11xuan5 from './betLimitTemplates/betlimit_11xuan5'
import BetKuaile10fen from './betLimitTemplates/betlimit_kuaile10fen'
import BetPk10 from './betLimitTemplates/betlimit_pk10'
export default {
    data() {
        return {
            edit_View_Details:{
                titleName:"查看详情"
            },
            SelectTheVersionID:"", // 版本ID
            loadingObj:{
                LoadingTree:false,
                LoadingTable:false,
            },
            defaultProps: { 
                children: 'children',
                label: 'label'
            },
            tempLotteryType: [], // 临时树结构数据
            seriesName: '', // 彩种系列名称
            parentName:"香港彩",
            childName: '六合彩', // 对应彩种名称（默认为香港六合彩）
            currentLotteryId: '8', // 当前彩种id（默认为香港六合彩id）
            // currentCategory: '', // 当前赔率类型
            // currentCheckBetType: '', // 当前查看的投注上限类型
            saveBtnUsable: true, // 保存按钮是否可用
            // isStartAble: '', // 启用按钮是否可用
            // isSyncAble: false, // 是否显示 同步通用设置
            isValidate: true, // 是否通过校验可以保存
            visonNum:"",
            options:[]// 版本名称下拉
        }
    },
    props:[
        'tableId',
        'visonName'
    ],
    components: {
       PankouLimit, 

        BetXianggangcai,
        BetKuaisan,
        BetShishicai,
        Bet11xuan5,
        BetKuaile10fen,
        BetPk10
    },
    computed: {
        ...mapState({
            bet_data_common: state => state.ag_userdefine_bet.bet_data_common,
            // currentBetType: state => state.ag_userdefine_bet.currentBetType, // 当前投注上限类型
            isEdit: state => state.ag_userdefine_bet.isEdit
        }),
    },
    methods: {
        SelectTheVersion(val){
           this.options.forEach(element => {
               if(element.id == val){
                    this.visonName = element.name;
                }
           });
           
           this.$store.state.ag_userdefine_bet.bet_data_common = []
           this.loadingObj.LoadingTable = true;
           this.getList("8");
        },
        handleNodeClick(data,node,store) { // 点击树节点方法(彩种切换)
          //  this.$slots.state.ag_userdefine_bet.bet_data_common.detailList = [];
            this.parentName = node.parent.data.name;
            this.saveBtnUsable = true; // 每次切换彩种保存按钮置为不可用状态
            this.currentLotteryId = data.id; // 当前彩种Id
           
             if(data.id == "8"){  // 点击香港彩 通用盘口限制配置 增加对应的眉头样式
                    this.$store.commit('SET_PADDING_16',true)
                }else{
                    this.$store.commit('SET_PADDING_16',false)
                }
            if(node.childNodes.length == 0) { 
                this.loadingObj.LoadingTable = true;
                this.childName = data.name;
                findByLotteryId({id: this.SelectTheVersionID,lotteryId: data.id}).then(res => { // 获取盘口数据
               
                    let resData = res.data
                    if(resData.success == 1) {
                     //   this.$store.commit('SET_BET_DATA',resData.content)
                        this.$store.commit('SET_LIMITAMOUT_INFO',resData.content.detailList)
                    }else {
                        this.$message.error(resData.respMsg)
                    }
                     this.loadingObj.LoadingTable = false;
                })
            
            }
        },
        renderContent(h,{ node,data,store}) { // 自定义节点内容
            if(data.category != undefined) {
                if(data.category == 1) {
                    return (
                        // <span><i style="color:green;font-style:normal;">【自】</i>{data.name}</span>
                        <span><i style="color:green;font-style:normal;"></i>{data.name}</span>
                    )
                }else if(data.category == 0) {
                    if(node.childNodes.length == 0) {
                        return (
                            // <span><i style="color:red;font-style:normal;">【通】</i>{data.name}</span>
                            <span><i style="color:red;font-style:normal;"></i>{data.name}</span>
                        )
                    }
                }
            }else {
                return (
                    <span>{data.name}</span>
                )
            }
        },
        getList(val){
            if(val == "8"){  // 点击香港彩 通用盘口限制配置 增加对应的眉头样式
                this.$store.commit('SET_PADDING_16',true)
            }else{
                this.$store.commit('SET_PADDING_16',false)
            }
            let category = ''; // 临时保存香港六合彩  投注上限类型
            this.loadingObj.LoadingTree = true;

            lotteryTree().then(res => { // 彩种树初始化
                let resData = res.data
                category = resData.content[0].children[0].category // 香港六合彩 赔率类型
                this.currentCheckBetType = category ? '自定义设置' : '通用设置'
                if(this.currentCheckBetType == '自定义设置') {
                    this.isStartAble = false;
                }else {
                    this.isStartAble = true;
                }
                if(resData.success == 1) {
                    this.tempLotteryType = resData.content;
                
                }else {
                    this.$message.error(resData.respMsg);
                }
                this.loadingObj.LoadingTree = false;
            }).then(() => {
               
                this.loadingObj.LoadingTable = true;
                findByLotteryId({id: this.SelectTheVersionID,lotteryId: val}).then(res => {
                    let resData = res.data
                    if(resData.success == 1) {
                        // debugger
                        // this.$store.commit('SET_BET_DATA',resData.content)
                        this.$store.commit('SET_LIMITAMOUT_INFO',resData.content.detailList)
                        this.$store.state.lc_detail.allowEdit_pankoulimit = true; //盘口金额限制配置 input 不可编辑
                    }else {
                        this.$message.error(resData.respMsg)
                    }
                this.loadingObj.LoadingTable = false;
                })
            })
            
            visonNamelist().then(res => {
                if(res.data.success == 1){
                    this.options = res.data.content;
                }else{
                    this.$message.error(res.data.respMsg)
                }
            })
            }
    },
    mounted() {
        this.SelectTheVersionID =  this.tableId;      
        this.getList("8")
    },
    created() {
      
    },
    // watch:{
    //     tableId(newVal,oldVal){
    //         if(newVal != oldVal){
    //             visonNamelist().then(res => {
    //                 if(res.data.success == 1){
    //                     this.options = res.data.content;
    //                 }else{
    //                     this.$message.error(res.data.respMsg)
    //                 }
    //             })
    //         }
    //     }
    // }
}
</script>
<style lang="scss" >
.userdefine-odd-container {
    // .lottery-type-tree,.lottery-type-state,.common-odd,.userdefine-odd,.odd-detail-box {
    //     color: #606266;
    //     border: 1px solid #e0e0e0;
    // }
    .lottery-type-head{
        width: 100%;
        display: flex;
        flex-direction: row;
        p:nth-child(2){
            width: 80px;
            margin-right: 48px;
            .el-input{
                width: 110px!important;
            }
        }
        p:nth-child(3){
            width: 480px;
        }
        
    }
    .lottery-type-content{
        display: flex;
        flex-direction: row;
    }
    .lottery-type-tree {
        width: 215px;
        overflow: auto;
        max-height: calc(60vh - 58px);
        min-height: calc(58vh);
    }
    .lottery-type-odd-box {
        width: 78%;
        max-width: 990px;
        margin-left: 20px;
        .lottery-type-state {
            line-height: 40px;
            padding-left: 20px;
            font-size: 14px;
            span{
                margin-right: 30px;
            }
        }
    }
    .lottery-type-option-box {
        position: relative;
        margin-top: 10px;
        // overflow: hidden;
        // overflow-y: auto;
        // padding: 10px 20px;
        // height: calc(100vh - 160px);
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
        // .odd-detail-box {
        //     margin-top: 10px;
        //     padding: 20px;
        //     max-height: calc(100vh - 300px);
        //     width: 100%;
        //     // overflow-y: auto;
             
        // }
        .set-bet-box {
            position: absolute;
            right: 0;
            bottom:10px;
            width: 100%;
            text-align: right;
            padding-right: 20px;
            background: #fff;
        }
    }
    
}
</style>


