<template>
  <div class="app-container allLotteryType">
    <div class="border-solid-none-a">
      <el-radio-group v-loading='elgroupLoading' v-model="parentLotteryId" size="mini" @change="firstLotteryChange">
        <el-radio-button v-for="item in firstLotteryList" :key="item.id" :label="item.id">{{item.name}}</el-radio-button>
      </el-radio-group>
    </div>
    <div class="border-solid-none-b">
      <el-radio-group v-model="currentConfigId" size="mini" >
        <el-radio-button v-for="item in configItemList" :key="item.id" :label="item.id">{{item.name}}</el-radio-button>
      </el-radio-group>
    </div>
    <div>
      <!--游戏玩法管理-->
      <WanfaManage :childPageTableLoading="childPageTableLoading" v-if="currentConfigId >= 1 && currentConfigId <= 7" @my-event="myEventChange" ></WanfaManage>
      <!--游戏玩法下注值管理-->
      <WanfaBetManage :childPageTableLoading="childPageTableLoading" v-else-if="currentConfigId >= 8 && currentConfigId <= 14"></WanfaBetManage>
      <!--通用盘口金额限制配置-->
      <!-- <PankouLimit v-else @my-event="myEventChange"></PankouLimit> -->
      
      <!-- <PricePanagement v-if="ishongkongdata()" :getColorName="getname1" :allocationName="getname"></PricePanagement> -->
      
      
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import WanfaManage from "./lc_wanfa_manage";
import WanfaBetManage from "./lc_wanfa_bet_manage";
import PankouLimit from "./lc_pankou_limit";
import { findMenuList,getTableData } from '@/api/lotteryCore/lc_info/lc_detail'
// import PricePanagement from "./lc_PricePanagement";
export default {
  name: "lc_detail",
  components: {
    WanfaManage,
    WanfaBetManage,
    // PricePanagement,
    PankouLimit
  },
  computed: {
    ...mapState({
    }),
    currentConfigId: { //// 选中的玩法名称
      get() {
        return this.$store.state.lc_detail.currentConfigId;
      },
      set(item) {
      //  return item
      this.conigItemChange(item)
      }
    },
  },
  data() {
    return {
      firstLotteryList: [], // 一级彩种列表
      configItemList: [], // 配置项列表
      parentLotteryId: '1', // 一级彩种id 默认为 选中 香港彩
      elgroupLoading: false, // 头部一级彩种loading
      childPageTableLoading:false,// 游戏玩法管理和游戏玩法下注值下面切换彩种时的loading
    };
  },
  methods: {
    firstLotteryChange(val) { // 点击彩种列表
       this.$store.state.lc_detail.currentConfigId = val; // 每次切换彩种 默认 游戏玩法管理 为选中状态

      // 重置当前子组件数据
      this.$store.commit('SET_GAMEPLAY_INFO',[]) 
      this.$store.commit('SET_BOTTOMPOUR_INFO',[])

      this.configItemList = this.firstLotteryList.filter(item => { // 获取对应的配置项列表
        return item.id == val;
      })[0].children;

      this.setTableData()
    },
    conigItemChange(val) { // 点击配置列表
      this.$store.state.lc_detail.currentConfigId = val
      this.setTableData();
    },
    myEventChange(msg) { // 传到子组件调用列表刷新方法
      this.setTableData();
    },
    setTableData() { // 设置 选中配置项对应的表格数据
      this.dataLoading = true;
      let url = this.configItemList.filter(item => {  // 从当前配置项集合中 返回 id和当前选中id 匹配的url
        return item.id == this.$store.state.lc_detail.currentConfigId
      })[0].url;
      this.childPageTableLoading = true;
      getTableData(url).then(res => { 
        let resData = res.data;
        if(resData.success == 1) {
          if(this.$store.state.lc_detail.currentConfigId >= 1 && this.$store.state.lc_detail.currentConfigId <= 7 ) { // 渲染游戏玩法管理表格
            this.$store.commit('SET_GAMEPLAY_INFO',resData.content)
          }else if(this.$store.state.lc_detail.currentConfigId >= 8 && this.$store.state.lc_detail.currentConfigId <= 14) { // 渲染游戏玩法下注值管理
            this.$store.commit('SET_BOTTOMPOUR_INFO',resData.content)
          }
        }
      this.childPageTableLoading = false;
      })
    }
  },
  created() {
    // 请求对应玩法列表
    this.elgroupLoading = true;
    findMenuList().then(res => {
      let resData = res.data;
      if(resData.success == 1) {
        this.firstLotteryList = resData.content // 初始化一级彩种列表
        this.configItemList = this.firstLotteryList[0].children;  
        this.$store.state.lc_detail.currentConfigId = this.configItemList[0].id;

        this.setTableData()
        this.elgroupLoading = false;
      }else {
        this.$message.error(resData.respMsg);
      }
    })

  },
  
};
</script>
<style >
.border-solid-none-a {
  margin: 10px 0px 8px 0px;
  border: #dcdfe6 1px solid;
  line-height: 45px;
  height: 45px;
}
.border-solid-none-a .el-radio-button__inner {
  border: none;
  border-right: #dcdfe6 1px solid;
  border-radius: 0% !important;
}
.border-solid-none-a
  .el-radio-button__orig-radio:checked
  + .el-radio-button__inner {
  background-color: #fff;
  color: #409eff;
  border-color: #dcdfe6 !important;
  font-weight: bold;
  -webkit-box-shadow: -1px 0 0 0 #dcdfe6;
  box-shadow: -1px 0 0 0 #dcdfe6;
}
.border-solid-none-a .el-radio-button:first-child .el-radio-button__inner,
.border-solid-none-b .el-radio-button:first-child .el-radio-button__inner {
  border-left: none;
}
.border-solid-none-b
  .el-radio-button__orig-radio:checked
  + .el-radio-button__inner {
  background-color: #fff;
  color: #409eff;
  font-weight: bold;
  -webkit-box-shadow: -1px 0 0 0 #fff;
  box-shadow: -1px 0 0 0 #fff;
}

.border-solid-none-b {
  margin: 10px 0px 8px 0px;
  border: #dcdfe6 1px solid;
  line-height: 35px;
  height: 35px;
}
.border-solid-none-b .el-radio-button__inner {
  border: none;
}

</style>

