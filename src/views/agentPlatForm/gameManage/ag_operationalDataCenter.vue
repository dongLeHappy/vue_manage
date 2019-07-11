<template>
  <!-- 全平台/运营数据中心 -->
  <div class="app-container ag_operationalDataCenter">
    <el-form>
      <ul class="heard-search">
        <li>
            <span class="rem_tit">代理商老板账号：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.agentInfoIds" @change="getDetail" multiple collapse-tags placeholder="全部" :disabled="disableControl_agentInfoIds">
                  <el-option label="全部" value=""></el-option>
                  <el-option v-for="item in agentInfoIdsArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
            </span>
        </li>
        <li>
            <span class="rem_tit">是否显示明细：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.showDetail" placeholder="否" :disabled="disabledDetal">
                  <el-option v-for="item in showDetailArr" :key="item.id" :label="item.name" :value="item.value"></el-option>
                </el-select>
            </span>
        </li>
        <li>
          <span class="rem_tit">数据获取时间：</span>
          <span class="rem_con">
            <el-date-picker 
              v-model="searchEdition.dateTime" 
              type="datetimerange" 
              range-separator="至" 
              start-placeholder="开始日期" 
              end-placeholder="结束日期" 
              @change="getDate"
              :disabled="disableControl"
            >
            </el-date-picker>
          </span>
        </li>
      </ul>
      <div class="search-edition-box">
          <el-form-item class="short-cut-search">
            <el-button :type="btnType == 'today' ? 'primary' : ''" @click="shortCutSearch('today')" :disabled="disableControl">今日</el-button>
            <el-button :type="btnType == 'yesterday' ? 'primary' : ''"  @click="shortCutSearch('yesterday')" :disabled="disableControl">昨日</el-button>
            <el-button :type="btnType == 'recentlythreeday' ? 'primary' : ''" @click="shortCutSearch('recentlythreeday')" :disabled="disableControl">近三日</el-button>
            <el-button :type="btnType == 'currentweek' ? 'primary' : ''" @click="shortCutSearch('currentweek')" :disabled="disableControl">本周</el-button>
            <el-button :type="btnType == 'lastweek' ? 'primary' : ''" @click="shortCutSearch('lastweek')" :disabled="disableControl">上周</el-button>
            <el-button :type="btnType == 'currentmonth' ? 'primary' : ''" @click="shortCutSearch('currentmonth')" :disabled="disableControl">本月</el-button>
        </el-form-item>
        <el-radio-group>

        </el-radio-group>
        <el-form-item class="operation-box">
          <el-button type="primary" size="mini" @click.native.prevent="search" :disabled="disableControl">
            <svg-icon icon-class="chaxun" /> 
            查询</el-button>
          <el-button type="primary" size="mini" @click.native.prevent="resetData" :disabled="disableControl">
            <svg-icon icon-class="zhongzhi" />
            重置</el-button>
        </el-form-item>
      </div>
    </el-form>
    <!-- 表格数据展示 -->
    <div class="admin_table">
      <el-table 
        :header-cell-style="tableHeaderColor" 
        :cell-style="rowcellClass" 
        :key="tableKey" 
        :data="allData" 
        ref="multipleTable"
        highlight-current-row 
        style="width: 100%;" 
        border 
        class="tableAuto216"
        :height="currentPageSize*25 + 50"
        v-loading="loading"
      >
        <el-table-column label="序号" type="index" align="center" width="50" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{scope.$index+(page - 1) * size + 1}} </span>
          </template>
        </el-table-column>
        <el-table-column label="代理商老板账号" prop="agentInfoId" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span v-if="scope.row.agentInfoId == 0"> 全部 </span>
              <span v-if="scope.row.agentInfoId != 0"> {{ scope.row.agentInfoId ? scope.row.agentInfoId : '-' }} </span>
          </template>
        </el-table-column>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        <el-table-column label="数据获取时间" prop="obtainTime" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.obtainTime ? scope.row.obtainTime : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前平台游戏会员总数" prop="totalUser" align="center" width="160" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.totalUser == false ? 0 : scope.row.totalUser ? scope.row.totalUser : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前在线会员总数" prop="currentOnLine" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currentOnLine == false ? 0 : scope.row.currentOnLine ? scope.row.currentOnLine : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前PC端在线会员总数" prop="currenOnlinetPC" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currenOnlinetPC == false ? 0 : scope.row.currenOnlinetPC ? scope.row.currenOnlinetPC : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前H5端在线会员总数" prop="currentOnlineH5" align="center"  width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currentOnlineH5 == false ? 0 : scope.row.currentOnlineH5 ? scope.row.currentOnlineH5 : '--' }} </span>
          </template>
        </el-table-column>
        
        <el-table-column label="当前下注会员总数" prop="currentBetsTotals" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currentBetsTotals == false ? 0 : scope.row.currentBetsTotals ? scope.row.currentBetsTotals : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前提现会员总数" prop="currentWithdrawTotals" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currentWithdrawTotals == false ? 0 : scope.row.currentWithdrawTotals ? scope.row.currentWithdrawTotals : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前总注单数" prop="currentTotalBets" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currentTotalBets == false ? 0 : scope.row.currentTotalBets ? scope.row.currentTotalBets : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前投注总金额" prop="currentBetsTotalAmount" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currentBetsTotalAmount == false ? 0 : scope.row.currentBetsTotalAmount ? scope.row.currentBetsTotalAmount : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前有效投注总金额" prop="currentEffectiveBetsTotals" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currentEffectiveBetsTotals == false ? 0 : scope.row.currentEffectiveBetsTotals ? scope.row.currentEffectiveBetsTotals : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前输赢总金额" prop="currentWinLossTotal" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currentWinLossTotal == false ? 0 : scope.row.currentWinLossTotal ? scope.row.currentWinLossTotal : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前结算总金额" prop="currentSentLotteryTotals" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currentSentLotteryTotals == false ? 0 : scope.row.currentSentLotteryTotals ? scope.row.currentSentLotteryTotals : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前会员充值总金额" prop="currenDepositAmount" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currenDepositAmount == false ? 0 : scope.row.currenDepositAmount ? scope.row.currenDepositAmount : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前会员提现总金额" prop="currentWithdrawAmount" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currentWithdrawAmount == false ? 0 : scope.row.currentWithdrawAmount ? scope.row.currentWithdrawAmount : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当日新增会员数" prop="dayIncrease" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.dayIncrease == false ? 0 : scope.row.dayIncrease ? scope.row.dayIncrease : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当日充值会员数" prop="dayDeposit" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.dayDeposit == false ? 0 : scope.row.dayDeposit ? scope.row.dayDeposit : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当日最高在线会员数" prop="dayMaxOnline" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.dayMaxOnline == false ? 0 : scope.row.dayMaxOnline ? scope.row.dayMaxOnline : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当日次充会员数" prop="daySecondDeposit" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.daySecondDeposit == false ? 0 : scope.row.daySecondDeposit ? scope.row.daySecondDeposit : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前次充会员总数" prop="currenSecondDeposit" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.currenSecondDeposit == false ? 0 : scope.row.currenSecondDeposit ? scope.row.currenSecondDeposit : '--' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="当前会员总余额" prop="totalBalance" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.totalBalance == false ? 0 : scope.row.totalBalance ? scope.row.totalBalance : '--' }} </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="admin_pagination">
      <el-pagination 
        :page-sizes="[10, 20, 50, 100]" 
        :current-page.sync="page"
        background
        :page-size="size" 
        layout="total, sizes, prev, pager, next, jumper" 
        :total="allData_total"
        @size-change="handleSizeChange" 
        @current-change="getList" 
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { findPage } from "@/api/operationManage/ag_operationDataCenter";
import { agentInfoDropdownList,findByCode } from '@/api/select'
import Cookies from 'js-cookie'
import {serverTime } from '@/api/login'
export default {
  name: "ag_operationalDataCenter",
  data() {
    return {
      ServerTimes:"", // 服务器时间
      tempArr: [], // 临时数组 用于存放过滤后的新数组
      disableControl_agentInfoIds: false, // 代理商老板账号是否可编辑
      disableControl: false,
      loading:false, // Loading 加载
      chooseEdition:'', // 当前选中的快捷查询条件
      disabledDetal:false, // 是否显示明细下拉框
      agentInfoIdsArr:[], // 代理商老板账号
      showDetailArr: [], // 是否显示明细下拉
      agentName: "", // 代理商名称
      detailVal:"",
      current_click_rowData: null,
      dialogPvVisible: false,
      tableKey: 0,
      total: 0,
      searchTimes:0
    };
  },
  computed: {
    ...mapState({
      allData: state => state.ag_operationDataCenter.allData,
      allData_total: state => state.ag_operationDataCenter.allData_total,
      currentPageSize: state => state.ag_operationDataCenter.currentPageSize,
      btnType: state => state.ag_operationDataCenter.btnType
    }),
    size: {
      get(){
        return this.$store.state.ag_operationDataCenter.size;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.ag_operationDataCenter.page;
      },
      set(item){
        return  item;
      }
    },
    searchEdition:{
      get(){
        return this.$store.state.ag_operationDataCenter.searchEdition;
      },
      set(item){
        return  item;
      }
    }
  },
  methods: {
    resetData() { // 重置查询条件
      this.$store.state.ag_operationDataCenter.searchEdition = {
        agentInfoIds: [""],
        showDetail:"",
        dateTime:[state,edate]
      }
      this.$store.state.ag_operationDataCenter.btnType = ""
      let userType = Cookies.get('userType');
      this.disabledDetal = false;
      if(userType == '3'||userType == '4'){
        this.$store.state.ag_operationDataCenter.searchEdition.agentInfoIds[0] = this.agentInfoIdsArr[0].value;
        this.disabledDetal = true;
      }
      let setstate = new Date(this.ServerTimes).getTime(); // 当前日期减去一天
      let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
      let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
     
    },
    getList(val) { // 填充表格数据
      this.loading = true; // 请求接口时loading启用
      this.disableControl = true;
      this.disabledDetal = true;
      this.disableControl_agentInfoIds = true;
      if(!val){
        val = 1;
      }
      this.$store.dispatch('getOperationPage',parseInt(val));
      let searchForm = this.$store.state.ag_operationDataCenter.searchEdition;

      searchForm.page = this.page - 1;
      searchForm.size = this.size;
       let that = this;
      this.$store.dispatch("getOperationData", this.$store.state.ag_operationDataCenter.searchEdition).then(res => {
      //  res.content
        res.content.map(item => {
          this.agentInfoIdsArr.map(agentItem => {
            if(agentItem.value == item.agentInfoId) {
              item.agentInfoId = agentItem.name
            }
          })
          this.tempArr.push(item)
        })
        
        let currentPageSize = 2;
        if(res.content.length > 0) {
          currentPageSize = res.content.length;
        }else {
          currentPageSize = 2;
        }
        this.$store.dispatch('getOperationTableHeight', currentPageSize)
         this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行
        this.loading = false; 
        this.disableControl = false;
        let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限  
         if(userType == 3 ||userType == 4) {  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
            this.disableControl_agentInfoIds = true;
          }else{
            this.disableControl_agentInfoIds = false;
          }
          if(this.$store.state.ag_operationDataCenter.searchEdition.agentInfoIds == ""){
            this.$store.state.ag_operationDataCenter.searchEdition.agentInfoIds = [];
            this.$store.state.ag_operationDataCenter.searchEdition.agentInfoIds[0] = ""
          }
          if(this.$store.state.ag_operationDataCenter.searchEdition.agentInfoIds[0] == ""){
            this.disabledDetal = false;
          }else{
            this.disabledDetal = true;
          }
      }).catch(error => {
          that.$message.error("请求出现异常请联系管理员")
          // 列表展示为初始化
          that.$store.state.ag_operationDataCenter.allData = [];
          that.$store.state.ag_operationDataCenter.allData_total =0;
          that.$store.state.ag_operationDataCenter.currentPageSize = 2;
          that.loading = false; 
          that.disableControl = false;
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限  
          if(userType == 3 ||userType == 4) {  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
            that.disableControl_agentInfoIds = true;
          }else{
            that.disableControl_agentInfoIds = false;
          }
          if(that.$store.state.ag_operationDataCenter.searchEdition.agentInfoIds == ""){
            that.$store.state.ag_operationDataCenter.searchEdition.agentInfoIds = [];
            that.$store.state.ag_operationDataCenter.searchEdition.agentInfoIds[0] = ""
          }
          if(that.$store.state.ag_operationDataCenter.searchEdition.agentInfoIds[0] == ""){
            that.disabledDetal = false;
          }else{
            that.disabledDetal = true;
          }
      });
      //   allData: state => state.ag_operationDataCenter.allData,
      // allData_total: state => state.ag_operationDataCenter.allData_total,
      // currentPageSize: state => state.ag_operationDataCenter.currentPageSize,
    },
    getDate(val) {
      let par = this.$store.state.ag_operationDataCenter.searchEdition;
       if(val || par.dateTime != null) {
            par.dateTime[0] = this.dateForm(par.dateTime[0],1);
            par.dateTime[1] = this.dateForm(par.dateTime[1],1);        
            if(par.dateTime[0] == par.dateTime[1]) {
              par.dateTime[1] = par.dateTime[1].split(' ')[0] + ' 23:59:59'
            }
            if(par.dateTime[1].split(' ')[1] == '00:00:00') {
              par.dateTime[1] = par.dateTime[1].split(' ')[0] + ' 23:59:59'
            }         
        }else{
          let setstate = new Date(this.ServerTimes).getTime(); //
          let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
          let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
          par.dateTime = [state,edate] 
        }   
      this.$store.state.ag_operationDataCenter.btnType = ""
    },
    search() { // 查询方法
      this.getList()
    },
    // shortCutSearch(type) { // 快捷查询
    //   this.chooseEdition = type;
    //     let currentDate = new Date();
    //     switch(type) {
    //         case 'today':
    //             this.searchByDate(currentDate,'today')
    //             this.$store.state.ag_operationDataCenter.btnType = 'today'
    //             break;
    //         case 'yesterday':
    //             this.searchByDate(currentDate,'yesterday')
    //             this.$store.state.ag_operationDataCenter.btnType = 'yesterday'
    //             break;
    //         case 'recentlythreeday':
    //             this.searchByDate(currentDate,'recentlythreeday')
    //             this.$store.state.ag_operationDataCenter.btnType = 'recentlythreeday'
    //             break;
    //         case 'currentweek':
    //             this.searchByDate(currentDate,'currentweek')
    //             this.$store.state.ag_operationDataCenter.btnType = 'currentweek'
    //             break;
    //         case 'lastweek':
    //             this.searchByDate(currentDate,'lastweek')
    //             this.$store.state.ag_operationDataCenter.btnType = 'lastweek'
    //             break;
    //         case 'currentmonth':
    //             this.searchByDate(currentDate,'currentmonth')
    //             this.$store.state.ag_operationDataCenter.btnType = 'currentmonth'
    //             break;
    //     }
    // },
    shortCutSearch(type) {
       this.$store.state.ag_operationDataCenter.btnType = type;
      if(type == 'today') {
        let setstate = new Date(this.ServerTimes).getTime(); // 今日的数据
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
        let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.$store.state.ag_operationDataCenter.searchEdition.dateTime = [state,edate]
      }else if(type == 'yesterday') {
        let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000; // 昨天的数据
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
         let teday = new Date(this.ServerTimes).getTime()-24*60*60*1000; // 昨天的数据
        let edate =  this.dateForm(new Date(teday)).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.$store.state.ag_operationDataCenter.searchEdition.dateTime = [state,edate]   
      }else if(type == 'recentlythreeday') {
        let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*2; // 昨天的数据
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
        let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.$store.state.ag_operationDataCenter.searchEdition.dateTime = [state,edate]   
      }else if(type == 'currentweek') {           
        let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*(new Date(this.ServerTimes).getDay()-1); // 本周的数据
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
        let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.$store.state.ag_operationDataCenter.searchEdition.dateTime = [state,edate]
     }else if(type == 'lastweek') {
        let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*(new Date(this.ServerTimes).getDay()-1+7); // 上周的数据
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
        let week =  new Date(this.ServerTimes).getTime()-24*60*60*1000*(new Date(this.ServerTimes).getDay());
        let edate =  this.dateForm(new Date(week)).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.$store.state.ag_operationDataCenter.searchEdition.dateTime = [state,edate]
     }else if(type == 'currentmonth') {
        let setstate = new Date(this.ServerTimes) // 当前日期
          setstate.setDate(1); // 当月的第一天
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 当月的第一天 开始时间
        let endtate = new Date(this.ServerTimes);
        var currentMonth=endtate.getMonth();
        var nextMonth=++currentMonth;
        var nextMonthFirstDay=new Date(endtate.getFullYear(),nextMonth,1);
        var oneDay=1000*60*60*24;
        var lastTime = new Date(nextMonthFirstDay-oneDay);
        var month = parseInt(lastTime.getMonth()+1);
        var day = lastTime.getDate();
        endtate.setDate(day); // 当月的最后一天
        let edate =  this.dateForm(endtate).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.$store.state.ag_operationDataCenter.searchEdition.dateTime = [state,edate]   
      }
      this.getList()  
    },
    handleSizeChange(val) { // 页码大小变化时
      this.$store.dispatch('getOperationPageSize', val)
      this.getList();
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: rgb(247, 251, 254); padding: 4px 0;text-align:center;";
    }, 
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
    getDetail(val) { 
      let par = this.$store.state.ag_operationDataCenter.searchEdition;
      let i = val.length; 
        this.disabledDetal = true;
        if(val[i-1] == ""&&val.length == 1){
        par.agentInfoIds = [""]
        this.disabledDetal = false;
      }
      if(val[i-1] == ""){
        par.agentInfoIds = [""]
        this.disabledDetal = false;
      }
      const index = val.indexOf("")
      if(index != -1){
        par.agentInfoIds.splice(index, 1) // 排除全选选项
      }
         
    },
    getServerTime(){
       let that = this;
      serverTime().then(res => {
          let resData = res.data
          let tempStr = ""
          if(resData.success == 1) {
            tempStr = resData.content.serverTime.split(' ')[0] + ' ' + resData.content.serverTime.split(' ')[1]
            tempStr = tempStr.substring(0,19);
            tempStr = tempStr.replace(/-/g,'/');
            let cd = new Date(tempStr).getTime();
            this.ServerTimes = new Date(cd);
            // 下注时间默认显示7天
            let setstate = new Date(this.ServerTimes).getTime(); // 当前日期减去一天
            let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
            let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
         
            if( this.$store.state.ag_operationDataCenter.searchEdition.dateTime.length == 0){
              this.$store.state.ag_operationDataCenter.searchEdition.dateTime = [state,edate] 
            }
             
          }else {
            this.$message.error(resData.respMsg)
          }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
    }
  },
  
  created() {
    if(this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)){
      if(this.$store.getters.currentView == this.$route.name) { 
        // 更新已关闭的菜单 数组状态
        let newalreadyClose = [] // 定义一个空数组存 过滤左侧点击的数据
        this.$store.getters.alreadyClose.forEach(value => {
          if(value != this.$store.getters.currentView){
            newalreadyClose.push(value)
          }
        })
        this.$store.dispatch("updataTabClose",newalreadyClose) 
        this.$store.state.ag_operationDataCenter.btnType = "";
        this.$store.state.ag_operationDataCenter.allData = []
        this.$store.state.ag_operationDataCenter.allData_total = 0;
        this.$store.state.ag_operationDataCenter.page = 1;
        this.$store.state.ag_operationDataCenter.size = 10;
        this.$store.state.ag_operationDataCenter.searchEdition={
            agentInfoIds: [""], // 代理商id列表
            showDetail: '', // 是否显示详情
            dateTime: [],
            obtainTimeBegin: "",
            obtainTimeEnd: "",
            page: 0,
            size: 0,
        },
        this.disabledDetal = false;
        this.$store.dispatch('getOperationTableHeight', 2)
      }
    }else {
      if(this.$store.state.ag_operationDataCenter.allData.length > 0) {
        this.getList()
      }
     
    }
     this.getServerTime();
     // 获取当前服务器时间
      let that = this;
    // 初始化下拉列表
    agentInfoDropdownList().then(res => { // 代理商老板账号
      let resData = res.data;
      let par = this.$store.state.ag_operationDataCenter.searchEdition;
      if(resData.success == 1) {
        let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
          if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
            this.agentInfoIdsArr = resData.content;
            par.agentInfoIds[0] = resData.content[0].value;
            this.disableControl_agentInfoIds = true;
             this.disabledDetal = true;
          }else{
            this.agentBossAccounts=[{ value: "",name: "全部"}] // 代理商老板账号下拉列表 
            let by_agentBossAccounts = resData.content;   
            by_agentBossAccounts.forEach(element => {
                this.agentInfoIdsArr.push(element);
            });
          } 
      }else {
        this.$message.error(resData.respMsg)
      }
    }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });

    findByCode({code: 'STATISTIC_SHOWDETAIL'}).then(res => { // 初始化下拉列表是否显示明细
      let resData = res.data
      if(resData.success == 1) {
        this.showDetailArr = resData.content['STATISTIC_SHOWDETAIL'];
      }else {
        this.$message.error(resData.respMsg)
      }
    }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
  }
};
</script>
<style lang="scss">
.ag_operationalDataCenter {
    .search-edition-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .short-cut-search {
            margin-bottom: 8px;
        }
    }
    .el-date-editor.el-range-editor.el-input__inner {
      width: 330px;
    }
}
.choose-class {
  background-color: #409EFF;
  border-color: #409eFF; 
}
</style>
