<template>
  <!--彩种&期号---各期彩种注单结算管理  -->
  <div class="app-container table-fold geqi">
    <!-- 通用搜索框 -->
    <el-form v-if="showSearchBox" :model="searchForm">
      <div class="heard-search-box" v-if="showSearchBox">
        <ul class="heard-search">
          <li>
            <span class="rem_tit">代理商老板账号：</span>
            <span class="rem_con">
                <el-select v-model="searchForm.agentInfoIds" multiple collapse-tags placeholder="请选择">
                  <el-option v-for="item in agentInfoIdsArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">一级彩种名称：</span>
            <span class="rem_con">
                <el-select v-model="searchForm.parentLotteryId" value-key="name" placeholder="请选择" @change="changeKindAData">
                  <el-option v-for="item in kindAData" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">二级玩法：</span>
            <span class="rem_con">
                <el-select v-model="searchForm.playRuleId" value-key="name" @change="getRuleVal" :disabled="disabledRule" placeholder="请选择">
                  <el-option v-for="item in playRuleIdArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">开奖状态：</span>
              <span class="rem_con">
                <el-select v-model="searchForm.prizeStatus" value-key="name" placeholder="全部">
                  <el-option v-for="item in prizeStatusArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
        </ul>
        <ul class="heard-search">
          <li>
            <span class="rem_tit">游戏用户名称：</span>
            <span class="rem_con">
              <el-input v-model="searchForm.gameUserName" placeholder="游戏用户名称 " maxlength="15"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">二级彩种名称：</span>
            <span class="rem_con">
                <el-select v-model="searchForm.lotteryId" @change="getSecondVal" :disabled="disabledSecond" value-key="name" placeholder="请选择">
                  <el-option v-for="item in kindBData" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          
          <li>
            <span class="rem_tit">开奖期号：</span>
            <span class="rem_con">
              <el-input v-model="searchForm.gameNo" :disabled="disabledOpen" placeholder="请输入开奖期号" maxlength="15"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">结算状态：</span>
              <span class="rem_con">
                <el-select v-model="searchForm.settleStatus" value-key="name" placeholder="全部">
                  <el-option v-for="item in settleStatusArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
        </ul>
        <ul class="heard-search">
          <li  class="rem-li-a">
            <span class="rem_tit">总投注额：</span>
            <span class="rem_con">
                <el-input v-model="searchForm.totalBetBegin" placeholder="起始金额" type="number" maxlength="15"></el-input>
                <span>&nbsp;至&nbsp;</span>
                <el-input v-model="searchForm.totalBetEnd" placeholder="终止金额" type="number" maxlength="15"></el-input>
              </span>
          </li>
          <li  class="rem-li-b">
            <span class="rem_tit">未结算投注额：</span>
            <span class="rem_con">
                <el-input v-model="searchForm.totalUnSettleBegin" placeholder="起始金额" type="number" maxlength="15"></el-input>
                <span>&nbsp;至&nbsp;</span>
                <el-input v-model="searchForm.totalUnSettleEnd" placeholder="终止金额" type="number" maxlength="15"></el-input>
              </span>
          </li>
          <li  class="rem-li-a">
            <span class="rem_tit">派彩金额：</span>
            <span class="rem_con">
              <el-input v-model="searchForm.settleAmountBegin" placeholder="起始金额" type="number" maxlength="15"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchForm.settleAmountEnd" placeholder="终止金额" type="number" maxlength="15"></el-input>
            </span>
          </li>
          <li class="rem-li-b">
            <span class="rem_tit">输赢金额：</span>
            <span class="rem_con">
                <el-input v-model="searchForm.winLossBegin" placeholder="起始金额" type="number" maxlength="15"></el-input>
                <span>&nbsp;至&nbsp;</span>
                <el-input v-model="searchForm.winLossEnd" placeholder="终止金额" type="number" maxlength="15"></el-input>
              </span>
          </li>
        </ul>
        <ul class="heard-search">
          <li  class="rem-li-a">
            <span class="rem_tit">开奖时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="dateTime1"
                type="datetimerange"
                range-separator="至"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('开奖时间')"
                :picker-options="pickerOptions0"
              ></el-date-picker>
            </span>
          </li>
          <li  class="rem-li-b">
            <span class="rem_tit">结算时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="dateTime2"
                type="datetimerange"
                range-separator="至"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('结算时间')"
                :picker-options="pickerOptions0"
              ></el-date-picker>
            </span>
          </li>
        </ul>
      </div>
    </el-form>
    <div class="toggle-box">
      <el-form>
        <el-form-item class="operation-box">
          <el-button type="primary" icon="el-icon-search" size="mini" @click="search">查询</el-button>
          <el-button type="primary" icon="el-icon-lc-reset" size="mini" @click="reset">重置</el-button>
        </el-form-item>
        <el-button class="show-toggle" type="primary" @click="showToggle" :icon="showToggleIcon"></el-button>
      </el-form>
    </div>
    <!-- 数据表格 -->
    <div class="table-data">
      <el-table
        background
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        class="tableAutoToggle"
        :class="!showSearchBox?'tableAuto175':''"
        :height="currentPageSize*25 + 52"
        border
        v-loading="loading"
      >
        <el-table-column type="index" align="center" label="序号" width="50" show-overflow-tooltip></el-table-column>
        <el-table-column prop="lotteryName" width="120" align="center" label="一级彩种名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="parentLotteryName" width="120" align="center" label="二级彩种名称" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="gameNo" align="center" label="开奖期号" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="agentInfoName" align="center" label="代理商老板账号" width="120" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="gameUsername" align="center" label="游戏用户名称" width="130" show-overflow-tooltip>
          <template slot-scope="scope">
            <span> {{ scope.row.agenGameUserName ? scope.row.agenGameUserName : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column prop="betOnValue" align="center" label="二级玩法" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="prizeStatus" align="center" label="开奖状态" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="prizeTime" align="center" label="开奖时间" width="150" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="settleStatus" align="center" label="结算状态" show-overflow-tooltip> 
          <template slot-scope="scope">
            <span> {{ scope.row.settleStatus == 0 ? '未结算' : scope.row.settleStatus == 1 ? '结算中' : scope.row.settleStatus == 2 ? '未完全结算' : scope.row.settleStatus == 3 ? '已结算' : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column prop="totalBetNum" align="center" label="总注单数" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="totalUnSettleBetNum" align="center" width="120" label="未结算注单数" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="totalBet" align="center" label="总投注额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="totalUnSettleBet" align="center" width="120" label="未结算投注总额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="winLoss" align="center" label="输赢金额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="settleAmount" align="center" label="派彩金额" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="totalBetUser" align="center" width="120" label="下注总人数" show-overflow-tooltip></el-table-column>
        <el-table-column prop="settleTime" align="center" label="结算时间" width="150" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="terraceUser_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="pageSize"
        :total="allData_total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getList"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { agentInfoDropdownList,findByCode,lotteryDropdownList,playRuleDropdownList } from '@/api/select'
  export default {
    data() {
      return {
        disabledSecond:false, // 二级彩种下拉框
        disabledOpen:false, // 开奖期号下拉
        disabledRule:false, // 二级玩法
        loading:false, // Loading 加载
        showSearchBox: true, // 控制查询条件容器显示-隐藏
        showToggleIcon: 'el-icon-caret-top',
        kindAData:[], // 一级彩种下拉选择数据
        kindBData:[], // 二级彩种下拉选择数据
        playRuleIdArr: [], // 玩法下拉
        prizeStatusArr: [], // 开奖状态下拉
        settleStatusArr: [], // 结算状态下拉
        agentInfoIdsArr:[], // 代理商老板下拉
        searchForm: {
          gameUsername: '', // 游戏用户名称
          parentLotteryId: '', // 一级彩种ID
          lotteryId: '', // 二级彩种ID
          totalBetBegin: '', // 起始总投注额
          totalBetEnd: '', // 截止总投注额
          totalUnSettleBegin: '', // 起始未结算投注额
          totalUnSettleEnd: '', // 截止未结算投注额
          playRuleId: '', // 玩法id
          gameNo: '', // 期号
          settleAmountBegin: '', // 起始结算金额
          settleAmountEnd: '', // 截止结算金额
          winLossBegin: '', // 起始输赢金额
          winLossEnd: '', // 截止输赢金额
          prizeStatus: '', // 开奖状态
          settleStatus: '', // 结算状态
          agentInfoIds: [], // 代理商老板账号
        },
        dateTime1: { // 开奖时间
          sdate: "",
          edate: ""
        },
        dateTime2: { // 结算时间
          sdate: "",
          edate: ""
        },
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() >= Date.now();//如果没有后面的-8.64e6就是不可以选择今天的
          }
        },
      };
    },
    computed:{
      ...mapState({
        tableData: state =>state.lc_settlementManage.allData,
        allData_total: state => state.lc_settlementManage.allData_total,
        currentPageSize:state => state.lc_settlementManage.currentPageSize
      }),
      pageSize: {
        get(){
          return this.$store.state.lc_settlementManage.pageSize;
        },
        set(item){
          return  item;
        }
      },
      page: {
        get(){
          return this.$store.state.lc_settlementManage.page;
        },
        set(item){
          return  item;
        }
      }
    },
    methods:{
      search() {
        this.getList();
      },
      showToggle() { // 折叠查询条件容器
        this.showSearchBox = !this.showSearchBox;
        if(this.showSearchBox) {
          this.showToggleIcon = "el-icon-caret-top";
        }else {
          this.showToggleIcon = "el-icon-caret-bottom";
        }
      },
      getList(val){ // 获取表格数据
        if(!val) {
          val = 1;
        }
        this.loading = true; // 请求接口时loading启用
        
        this.searchForm.page = this.page - 1;
        this.searchForm.size = this.pageSize;

        this.searchForm.prizeTimeBegin = this.dateTime1.sdate; // 开奖起始时间
        this.searchForm.prizeTimeEnd = this.dateTime1.edate; // 开奖截止时间

        this.searchForm.settleTimeBegin = this.dateTime2.sdate; // 起始结算时间
        this.searchForm.settleTimeEnd = this.dateTime2.edate; // 截止结算时间

        this.$store.dispatch("getSettlementPage",parseInt(val))

        this.$store.dispatch("getNoteTheSingleSettlementManage",this.searchForm).then(res =>{
          
          let currentPageSize = 2;
          if(res.content.length > 0) {
            currentPageSize = res.content.length;
          }else {
            currentPageSize = 2;
          }
          this.$store.dispatch('getSettlementTableHeight', currentPageSize)
          this.loading = false; // 接口返回数据时，loading禁用
        })

      },
      reset() {  // 重置
      
        this.searchForm.gameUsername = '';
        this.searchForm.parentLotteryId = '';
        this.searchForm.lotteryId = '';
        this.searchForm.totalBetBegin = '';
        this.searchForm.totalBetEnd = '';
        this.searchForm.totalUnSettleBegin = '';
        this.searchForm.totalUnSettleEnd = '';
        this.searchForm.playRuleId = '';
        this.searchForm.gameNo = '';
        this.searchForm.settleAmountBegin = '';
        this.searchForm.settleAmountEnd = '';
        this.searchForm.winLossBegin = '';
        this.searchForm.winLossEnd = '';
        this.searchForm.prizeStatus = '';
        this.searchForm.settleStatus = '';
        this.searchForm.agentInfoIds = [];
        this.dateTime1 = {
          sdate: '',
          edate: ''
        };
        this.dateTime2 = {
          sdate: '',
          edate: ''
        };
      },
      handleCurrentChange(val){
        if(val != null){
          this.table_id = val.id;
        }
      },
      handleSizeChange(val){
        this.$store.dispatch('getSettlementPageSize', val);
        this.getList();
      },
      getDate(type){ // 获取时间控件方法
        if(type == '开奖时间') {
          if(this.dateTime1 != null) {
            this.dateTime1.sdate = this.dateForm(this.dateTime1[0],1);
            this.dateTime1.edate = this.dateForm(this.dateTime1[1],1);
            if(this.dateTime1.sdate == this.dateTime1.edate) {
              this.dateTime1.edate = this.dateTime1.edate.split(' ')[0] + ' 23:59:59'
            }
            if(this.dateTime1.edate.split(' ')[1] == '00:00:00') {
              this.dateTime1.edate = this.dateTime1.edate.split(' ')[0] + ' 23:59:59'
            }
          }
        }else if(type == '结算时间') {
          if(this.dateTime2 != null) {
            this.dateTime2.sdate = this.dateForm(this.dateTime2[0],1);
            this.dateTime2.edate = this.dateForm(this.dateTime2[1],1);
            if(this.dateTime2.sdate == this.dateTime2.edate) {
              this.dateTime2.edate = this.dateTime2.edate.split(' ')[0] + ' 23:59:59'
            }
            if(this.dateTime2.edate.split(' ')[1] == '00:00:00') {
              this.dateTime2.edate = this.dateTime2.edate.split(' ')[0] + ' 23:59:59'
            }
          }
        }
      },
      // 选中一级彩种名称 请求二级彩种数据
      changeKindAData(val){ 
        this.searchForm.lotteryId = ''; // 重置二级彩种
        if(!val){
          this.disabledSecond = true;  // // 二级彩种不可编辑
          this.disabledRule = true; // 二级玩法不可编辑
          this.disabledOpen = true;  // 开奖期号不可编辑
        }else{
          this.disabledSecond = false;
          lotteryDropdownList({parentId: val}).then(res => {
            let resData = res.data
            if(resData.success == 1) {
              this.kindBData = resData.content
            }else {
              this.$message.error(resData.respMsg)
            }
          })
        }
        
      },
      // 二级彩种选中事件 请求二级彩种下的玩法数据
      getSecondVal(val){
        this.searchForm.playRuleId = '';// 重置玩法数据
        if(!val) {
          this.disabledRule = true;
          this.disabledOpen = true
        }else{
          this.disabledRule = false;
          this.disabledOpen = false
        }
      },
      // 二级玩法选中事件 判断开奖期号编辑框是否可编辑
      getRuleVal(val){      
        if(!val){
          this.disabledOpen = true
        }else{
           this.disabledOpen = false
        }
      },
    },
    created() {
    if(this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)) {
      if(this.$store.getters.currentView == this.$route.name) {
        // 更新已关闭的菜单 数组状态
        let newalreadyClose = [] // 定义一个空数组存 过滤左侧点击的数据
        this.$store.getters.alreadyClose.forEach(value => {
          if(value != this.$store.getters.currentView){
            newalreadyClose.push(value)
          }
        })
        this.$store.dispatch("getSettlementTableHeight",newalreadyClose)

        this.$store.state.lc_settlementManage.allData = []
        this.$store.state.lc_settlementManage.allData_total = 0;
        this.$store.state.lc_settlementManage.page = 1;
        this.$store.state.lc_settlementManage.pageSize = 10;
        this.$store.dispatch('getLcFirstTableHeight', 2)
      }
    }else {
      if(this.$store.state.lc_settlementManage.allData.length > 0) {
        this.getList()
      }
    }
    
  },
  mounted() { 
      this.disabledRule = true;
      this.disabledOpen = true
      // 初始化下拉列表状态
      agentInfoDropdownList().then(res => { // 代理商老板账号
        let resData = res.data
        if(resData.success == 1) {
          this.agentInfoIdsArr = resData.content
        }else {
          this.$message.error(resData.respMsg)
        }
      })

      findByCode({code: 'PLAYRULE_CATEGORY,OPENING_PRIZESTATUS,OPENING_SETTLESTATUS'}).then(res => { // 初始化,二级玩法,开奖状态,盘口结算状态
        let resData = res.data
        if(resData.success == 1) {
          
          this.playRuleIdArr = resData.content['PLAYRULE_CATEGORY'];
          this.prizeStatusArr = resData.content['OPENING_PRIZESTATUS'];
          this.settleStatusArr = resData.content['OPENING_SETTLESTATUS'];
        }else {
          this.$message.error(resData.respMsg)
        }
      })

      lotteryDropdownList({parentId: 0}).then(res => { // 一级彩种下拉
        let resData = res.data
        if(resData.success == 1) {
          this.kindAData = resData.content
        }else {
          this.$message.error(resData.respMsg)
        }
      })
    }
  };
</script>
<style lang="scss" scope>
@import '@/styles/tableFold.scss';
.geqi {
  .tableAutoToggle { 
    max-height: calc(100vh - 320px);
    overflow: auto;
  }
}
@media screen and (max-width: 1460px) { 
  .geqi {
    .tableAutoToggle { 
      max-height: calc(100vh - 350px)!important;
      overflow: auto;
    }
    .tableAuto175 {
      // 查询条件折叠时 表格高度
      max-height: calc(100vh - 175px) !important;
      overflow: auto;
    }
  }
}
</style>
