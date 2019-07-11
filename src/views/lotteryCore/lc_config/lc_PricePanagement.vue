<template>
  <!-- 香港彩---通用赔率管理 -->
  <div class="app-container PricePanagement-allocation">
    <el-form v-if="this.$store.state.lc_detail.onKeyInput == 'edit'">
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" @click="editTheseRule">
        <svg-icon icon-class="bianji" /> 
        启用编辑</el-button>
        <el-button type="primary" size="mini" @click="savaTheseRule" :disabled="HongKongTheEdit">
        <svg-icon icon-class="baocun" /> 
        保存</el-button>
      </el-form-item>
    </el-form>
    <div class="PricePanagement-content">
      <div class="PricePanagement-content-lefts">
        <el-radio-group
          v-model="PrimaryColorKind"
          v-loading="loadingObj.Loadingplay"
          class="PricePanagement-content-left-groups"
        >
          <div class="showoverflowys">
            <p v-for="(itme,index) in pricePanagementInfo" :key="index+itme.playRuleId" @change="changePriceData(itme)">
              <el-radio-button :label="itme.playRuleId">{{itme.betOnValue}}</el-radio-button>
            </p>
          </div>
        </el-radio-group>
      </div>
      <div class="PricePanagement-content-rights">
        <p style="font-size: 12px;">{{setPlayingMethod}}</p>
        <!-- props: ["play"] 中的play 是所有玩法中选中的某一个数据 -->
        <hongKongPlayConfiguration v-if="getgetname1('香港彩')" :play="setPlayingMethod"></hongKongPlayConfiguration>
        <everyColorPlayConfiguration v-if="getgetname1('时时彩')" :play="setPlayingMethod"></everyColorPlayConfiguration>
        <HappyVeryPlayConfiguration v-if="getgetname1('快乐10分')" :play="setPlayingMethod"></HappyVeryPlayConfiguration>
        <PKtenPlayConfiguration v-if="getgetname1('PK10')" :play="setPlayingMethod"></PKtenPlayConfiguration>
        <kuaiSanPlayConfiguration  v-if="getgetname1('快3')" :play="setPlayingMethod"></kuaiSanPlayConfiguration>
        <elevenSelectFivePlayConfiguration v-if="getgetname1('11选5')" :play="setPlayingMethod"></elevenSelectFivePlayConfiguration>
        <div class="PricePanagements-inputing" v-if="this.$store.state.lc_detail.onKeyInput == 'edit'">
          <!-- <div> -->
            <span>一键输入：</span>
            <el-input  ref="allinput" v-model="onKeyInputData" :disabled="HongKongTheEdit"></el-input>&nbsp;
          <!-- </div> -->
          <!-- <div> -->
            <el-button type="primary" size="mini" @click="allInputOK">确定</el-button>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import hongKongPlayConfiguration from "./hongKong_PlayConfiguration";
import everyColorPlayConfiguration from "./everyColor_PlayConfiguration";
import HappyVeryPlayConfiguration from "./HapyyVery_PalyConfiguration";
import PKtenPlayConfiguration from "./PKten_PlayConfiguration";
import kuaiSanPlayConfiguration from "./kuaiSan_PlayConfiguration";
import elevenSelectFivePlayConfiguration from "./elevenSelectFive_PlayConfiguration";
import { validNinedata } from "@/utils/validate";

import {findPlayRuleList,mergePlayOdds} from "@/api/lotteryCore/lc_percentConfig/lc_everySecondLotteryManage";
export default {
  name: "lc_PricePanagement",
  components: {
    hongKongPlayConfiguration,
    everyColorPlayConfiguration,
    HappyVeryPlayConfiguration,
    PKtenPlayConfiguration,
    kuaiSanPlayConfiguration,
    elevenSelectFivePlayConfiguration
  },
  props: ["getlotteryOddsVerId","thisLottery"],
  computed: {
    ...mapState({
        pricePanagementInfo: state => state.lc_detail.pricePanagementInfo,  
        HongKongTheEdit: state => state.lc_detail.HongKongTheEdit,
        loadingObj: state => state.ag_sm_userdefine_odd.loadingObj, // Loading对象 游戏管理/信息管理/赔率管理/各二级彩种赔率管理与【赔率设置】的 “查看赔率详情 是共用一个
    }),
    onKeyInputData: {
      get() {
        return this.$store.state.lc_detail.onKeyInputData;

      },
      set(item) {
         this.changeonKeyInputData(item);
        return item 
      }
    },
    PrimaryColorKind: {
      get() {
        return this.$store.state.lc_detail.PrimaryColorKind;

      },
      set(item) {
        this.changeradio(item);
      }
    },
    setPlayingMethod: {
      get() {
        return this.$store.state.lc_detail.setPlayingMethod;
      },
      set(item) {
       return item
      }
    },
  },
  data() {
    return {
      // Editinfo:true // 所有数据
    };
  },
  methods: {
    changePriceData(val){ // 玩法点击选中事件
      this.$store.state.lc_detail.setPlayingMethod =val.betOnValue; //选中后，设置 一个玩法 用来在赔率最上方展示  
    },
    refreshgetDataOdds(val) { // 刷新请求右边数据接口(赔率列表)       
     // 根据玩法的第一个 查询玩法赔率列表【findPlayRuleList】
      findPlayRuleList({lotteryOddsVerId:this.getlotteryOddsVerId,playRuleId:val}).then(res => { // 玩法列表
        let resData = res.data;    
        if(resData.success == 1) {      
          let by = resData.content; 
            this.$store.state.lc_detail.inputTemaData = by; // 获取玩法列表中的赔率    
        }else{
          this.$message.error(resData.respMsg)
        }
        this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTable = false;// 赔率页面loading
      })
    },
    editTheseRule(val) { //启用编辑    
         this.$store.dispatch('seteditTheseRule',false);
        //  this.Editinfo = false;
    },
    savaTheseRule() {
     if(this.$store.state.lc_detail.HongKongTheEdit){
        this.$message.warning("请编辑后再保存");
            return
      } 
      //保存  // 记得还要再校验只能输入数字     
      let allData = this.$store.state.lc_detail.inputTemaData; // 监听右边赔率的所有数据
        for(let i in allData){
          if(!validNinedata(allData[i].odds)){
            // this.$message.warning("号码   "+allData[i].betValue+" 请输入数字类型，支持小数点2位");
             this.$message.warning("号码 "+allData[i].betValue+" 请输入范围在大于0小于20000支持2位小数的数字");
            return
          }
          if(!allData[i].odds|| Number(allData[i].odds)==0|| Number(allData[i].odds) > 20000){
           this.$message.warning("号码 "+allData[i].betValue+" 请输入范围在大于0小于20000支持2位小数的数字");
            return
          } 
        }   
        let parent = {
            "lotteryOddsVerId":this.getlotteryOddsVerId, // 版本ID号
            "playRuleId": this.$store.state.lc_detail.PrimaryColorKind,// 玩法ID
            "playOddsMap":allData
            };
      // 调用保存接口
        mergePlayOdds(parent).then(res => { 
          let resData = res.data;    
          if(resData.success == 1) {      
            this.$message.success("保存成功")
            this.$store.dispatch('seteditTheseRule',true);
            this.$store.state.lc_detail.onKeyInputData = ""; // 保存成功后，清空一建输入
            // this.Editinfo = true;
          }else{
            this.$message.error(resData.respMsg)
          }
        })
    },
    changeradio(val) { // 改变玩法
      this.$store.state.lc_detail.PrimaryColorKind = val;  // 左侧栏玩法赋值监听
      this.$store.state.lc_detail.HongKongTheEdit = true;  //全局的启用编辑控制，初始化为不可编辑
      this.$store.state.lc_detail.inputTemaData = null; // 点击玩法时，清空右边的数据
      if(this.$store.state.lc_detail.onKeyInput == 'edit'){ // 判断有eu一键输入,有的话就清空
        this.$refs.allinput.currentValue = "";  // 保存成功后清空一键输入
        this.$store.state.lc_detail.onKeyInputData = ""; // 选择玩法时，清空一建输入
      }
      this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTable = true;// 赔率页面loading
      this.refreshgetDataOdds(val)   // 刷新请求右边数据接口 
    },
    changeonKeyInputData(val){// 一键输入数据改变
        this.$store.state.lc_detail.onKeyInputData = val;
    },
    allInputOK() { // 一键输入确定
      if (this.HongKongTheEdit) {
        this.$message.warning("请先启用编辑");
        return;
      }
     
      let data = this.$store.state.lc_detail.inputTemaData;
      let allInputData = this.$store.state.lc_detail.onKeyInputData;
       if(!validNinedata(Number(allInputData))){
         this.$message.warning("请输入数字类型，支持小数点2位");
          return
       } 
       if(Number(allInputData)<=0||Number(allInputData)>20000){
          this.$message.warning("请输入大于0小于20000的数字");
          return
       }
       
      for (let i in data) {
        data[i].odds = allInputData;
      }
  
    },
    getgetname1(val){
      if(val == "香港彩"){
        if(this.thisLottery == "香港彩" || this.thisLottery == "1"){ 
          return true         
        }
         return false
      }else if(val == "时时彩"){
        if(this.thisLottery == "时时彩"|| this.thisLottery == "2"){
          return true
        }
        return false
      }else if(val == "11选5"){
        if(this.thisLottery == "11选5"|| this.thisLottery == "3"){
          return true
        }
        return false
      }else if(val == "快乐10分"){
        if(this.thisLottery == "快乐10分"|| this.thisLottery == "4"){
          return true
        }
        return false
      }else if(val == "PK10"){
        if(this.thisLottery == "PK10" || this.thisLottery == "5"){
          return true
        }
        return false
      }else if(val == "快3"){
        if(this.thisLottery== "快3" || this.thisLottery == "6"){
          return true
        }
        return false
      } 
    }
  },
  mounted() {
  }
};
</script>
 <style lang="scss">
 .PricePanagement-allocation { 
   padding: 0px !important;
   min-width: 0;
  .PricePanagement-content{
    display: flex;
    flex-direction: row;
    .PricePanagement-content-lefts{  // 左边
      max-height: 67vh;
      
      .PricePanagement-content-left-groups{
          border: 1px solid #dcdfe6;
          // border-top: 1px solid #dcdfe6;
        >div{   
        >p{
          width:135px;
          height: 30px;
          line-height: 30px;       
          .el-radio-button{
            width: 100%;
            height: 100%;
          >span{
            font-size: 12px;
            width: 100%;
            height: 100%;
            display: inline-block;
            line-height: 0%;
            border-radius: 0;
            border-top: none;
            background: rgb(242, 242, 242);
          }
          >.el-radio-button__inner {
            border-right: none;
            border-left: none;
          }
        }
        .el-radio-button__orig-radio:checked+.el-radio-button__inner{
         background: rgb(161, 161, 161);
         border-color:#dcdfe6;
         color: #606266;
        }
      }
      }
      .showoverflowys{
          width:100%;
          height:calc(67vh - 1px);
          overflow: hidden;
          overflow-y: auto;
          background: rgb(242, 242, 242);
      }
    }
  }
  .PricePanagement-content-rights{  // 右边
    height: 67vh;
    width: 87%;
    margin-left: 10px;
    border: solid 1px #dcdfe6;
    >p{
      height: 30px;
      line-height: 30px;
      padding-left: 18px;
    }
  }
}
}
.PricePanagements-inputing{
  // width: 40%;
  float: right;
  height: 28px;
  margin: 35px 65px 0 0;
  display: flex;
  flex-direction: row;
  >span{
    display:inline-block;
    width: 100px;
    float: left;
    height: 100%;
    line-height: 27px;
  }
  .el-input{
    float: left;
    width: 30%;
    height: 27px;
    input{
      height: 100%;
    }
    .el-input__inner{
      height:28px!important;
    }
  }
  
}
@media (min-width:1399px) and (max-width:1800px) {
}
  @media (min-width:700px) and (max-width:1400px) {
    // .PricePanagement-allocation {
        .PricePanagement-content{
             height:67vh !important;
        }
         .PricePanagement-content-lefts{
           width: 15% !important;
         }
         .PricePanagement-content-rights{  // 右边
            
             margin-left: 10px;
         }
        // .PricePanagements-inputing{
        //    margin-top:20px;
        //    width: 47.5% !important;
        //    >span{
        //     width: 26%;
        //   }
        //   .el-input{
        //     width: 33%;
        //   }
        // }
        .showoverflowys{
          //  height:67vh !important;
        }
      // }  
  }
@import '@/styles/lotteryCore/lc_config/detail.scss';
</style>