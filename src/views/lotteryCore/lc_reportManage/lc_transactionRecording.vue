<template>
  <!-- 交易记录 -->
  <div class="app-container table-fold">
    <!-- 通用搜索框 -->
    <el-form>
      <ul class="heard-search">
         <li>
          <span class="rem_tit">代理商老板账号：</span>
          <span class="rem_con">
            <el-select v-model="searchEdition.agentInfoIds" multiple collapse-tags placeholder="全部" :disabled="disableControl" @change="handleChange">
              <el-option v-for="(item,index) in agentInfoIdsArr" :key="index" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </span>
         </li>
         <li>
          <span class="rem_tit">游戏用户名称：</span>
          <span class="rem_con">
            <el-input v-model="searchEdition.gameUsername" placeholder="游戏用户名称 " maxlength="25" :disabled="disabledALL"></el-input>
          </span>
         </li>
         <li>
          <span class="rem_tit">交易类型：</span>
          <span class="rem_con">
              <el-select v-model="searchEdition.tradeType" placeholder="请选择" :disabled="disabledALL">
                <el-option v-for="(item,index) in tradeTypeArr" :key="index" :label="item.name" :value="item.value"></el-option>
              </el-select>
            </span>
         </li>
          <li>
          <span class="rem_tit">操作时间（交易时间）：</span>
          <span class="rem_con">
            <el-date-picker
              v-model="searchEdition.dateTime"
              type="datetimerange"
              range-separator="至"
              :disabled="disabledALL"
              ref="dateTime_time"
              start-placeholder="年/月/日"
              :clearable="false"
              end-placeholder="年/月/日"
              @change="getDate"
            ></el-date-picker>
          </span>
         </li>        
         <li>
          <span class="rem_tit">平台交易流水号：</span>
          <span class="rem_con">
            <el-input v-model="searchEdition.tradeNo" placeholder="请输入平台交易流水号" maxlength="25" :disabled="disabledALL"></el-input>
          </span>
         </li>
         <li>
          <span class="rem_tit">代理商交易流水号：</span>
          <span class="rem_con">
            <el-input v-model="searchEdition.agentTradeNo" placeholder="请输入代理商交易流水号" maxlength="25" :disabled="disabledALL"></el-input>
          </span>
         </li>
          <li>
            <span class="rem_tit">交易异动金额：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.amountMin" :disabled="disabledALL" placeholder="起始金额" maxlength="12"></el-input>
              <span style="color: #868585">&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.amountMax" :disabled="disabledALL" placeholder="终止金额" maxlength="12"></el-input>
            </span>
          </li>
        
        
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" :disabled="disabledALL" size="mini" @click="search">
            <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" :disabled="disabledALL" size="mini" @click="resetForm">
            <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" :disabled="disabledALL" size="mini" @click="exportExcel">
            <svg-icon icon-class="daochu" />
          导出</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="editAndViewDetails(750)">
          <svg-icon icon-class="chakanxiangqing" />
          查看详情</el-button>
      </el-form-item>
    </el-form>
    <!-- 数据表格 -->
    <div class="table-data">
     <div class="transaction-head">统计：&nbsp;&nbsp;&nbsp;提现人数：{{ statistics.withdrawUser }} &nbsp;&nbsp;&nbsp;&nbsp;充值人数：{{ statistics.depositUser }}&nbsp;&nbsp;&nbsp;&nbsp;提现总金额：{{ statistics.withdrawAmount }}&nbsp;&nbsp;&nbsp;&nbsp;充值总金额：{{ statistics.depositAmount }}</div>
      <el-table
          background
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            highlight-current-row
            class="tableAuto296"
            :height="currentPageSize*25 + 50"
            @current-change="handleCurrentChange"
            border
            v-loading="exportType == 'table' ? loading : excelLoading"
            :element-loading-text="exportType == 'table' ? '' : '数据正在导出中.....'"   
          >
             <el-table-column lable show-overflow-tooltip width="35">
              <template slot-scope="scope">
                <el-radio :label="scope.row.id" v-model="rowDataID" class="hidTextRadio">&nbsp;</el-radio>
              </template>
            </el-table-column>
            <el-table-column label="序号" type="index" align="center" width="50" show-overflow-tooltip>
              <template slot-scope="scope">
                <span>{{scope.$index+(page-1) * size + 1}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="agentTradeNo" align="center" label="代理商交易流水号" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.agentTradeNo ? scope.row.agentTradeNo : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="tradeNo" align="center"  label="平台交易流水号" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.tradeNo ? scope.row.tradeNo : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="agentInfoId" align="center"  label="代理商老板账号" :formatter="formatter_agentInfoId" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="gameUsername" align="center" label="游戏用户名称" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tradeType" align="center" width="120" label="交易类型"  show-overflow-tooltip>
              <template slot-scope="scope"> 
                  <span> {{ scope.row.tradeType == 1 ? '充值' : scope.row.tradeType == 2 ? '提现' : scope.row.tradeType == 3 ? '下注扣款' : scope.row.tradeType == 4 ? '注单结算' : scope.row.tradeType == 5 ? '注单撤销' : '--'}}</span>
             </template> 
            </el-table-column>
            <el-table-column prop="amount" align="center" label="交易异动金额" show-overflow-tooltip></el-table-column>
            <el-table-column prop="beforeAmount" align="center"  label="交易异动前余额" show-overflow-tooltip> </el-table-column>
            <el-table-column prop="afterAmount" align="center"  label="交易异动后余额"  show-overflow-tooltip></el-table-column>
            <el-table-column prop="tradeTime" align="center" label="操作时间（交易时间）"  show-overflow-tooltip></el-table-column>
          </el-table>
    </div>
    <!-- 分页 -->
    <div class="terraceUser_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="size"
        :total="allData_total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getList"
      >
      </el-pagination>
    </div>
     <!-- 查看详情 -->
    <el-dialog :visible.sync="detailDialog" :title="titleName"  width="1100px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box transaction-checkDetail">
        <div class="detail-head">
          <p>代理商交易流水号：{{SeeDetails.agentTradeNo ?SeeDetails.agentTradeNo:"-"}}</p>
          <p>代理商老板账号：{{SeeDetails.agentInfoName?SeeDetails.agentInfoName:"-"}}</p>
          <p>游戏用户名称：{{SeeDetails.gameUsername?SeeDetails.gameUsername:"-"}}</p>
          <p>交易类型：{{SeeDetails.tradeTypeName?SeeDetails.tradeTypeName:"-"}}</p>
          <p>交易异动金额：{{SeeDetails.amount?SeeDetails.amount:"-"}}</p>
          <p>交易异动前余额：{{SeeDetails.beforeAmount?SeeDetails.beforeAmount:"-"}}</p>
          <p>交易异动后余额：{{SeeDetails.afterAmount?SeeDetails.afterAmount:"-"}}</p>
          <p style="width: 30%;">操作时间（交易时间）：{{SeeDetails.tradeTime?SeeDetails.tradeTime:"-"}}</p>
        </div>
      <div class="bettingStatus_sum">
        <p style="color: #797979;font-weight: bold;">以下展示当前平台交易流水号关联的所有相关注单信息</p>  
           <!-- 弹框表格 -->
        <div class="data-dialog-table">
          <el-table        
            :key="22"
            :height="307"
            :data="SeeDetailsAll"
            style="width: 100%;"
            border
            class = "tableAuto216"
            v-loading="dialogLoading"
          >
            <el-table-column label="序号" type="index" align="center" width="60" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{scope.$index + 1}} </span>
              </template>
            </el-table-column>
            <el-table-column label="注单号码" property="betNo" align="center" width="110" show-overflow-tooltip>
              <template slot-scope="scope">
                <span> {{ scope.row.betNo?scope.row.betNo:"-" }}</span>
              </template>
            </el-table-column>
            <el-table-column label="平台交易流水号【下注扣款】" property="betTradeNo" align="center" width="180" show-overflow-tooltip>
              <template slot-scope="scope">
                 <span> {{ scope.row.betTradeNo?scope.row.betTradeNo:"-" }}</span>
              </template>
            </el-table-column>
             <el-table-column label="平台交易流水号【注单结算】" property="settleTradeNo" align="center" width="180" show-overflow-tooltip>
              <template slot-scope="scope">
                   <span> {{ scope.row.settleTradeNo?scope.row.settleTradeNo:"-" }}</span>
              </template>
            </el-table-column>
            <el-table-column label="注单结算状态" property="settleStatus" align="center" width="100" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.settleStatus?scope.row.settleStatus:"-" }}</span>
              </template>
            </el-table-column>
            <el-table-column label="开奖期号" property="gameNo" align="center"  width="120" show-overflow-tooltip>     

            </el-table-column>
             <el-table-column label="一级彩种名称" property="parentLotteryName" align="center" width="100" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.parentLotteryName?scope.row.parentLotteryName:"-" }}</span>
              </template>
            </el-table-column>
             <el-table-column label="二级彩种名称" property="lotteryName" align="center" width="100" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.lotteryName?scope.row.lotteryName:"-" }}</span>
              </template>
            </el-table-column>
            <el-table-column label="一级玩法名称" property="menuplayRuleValue" align="center" width="100" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.menuplayRuleValue?scope.row.menuplayRuleValue:"-" }}</span>
              </template>
            </el-table-column>
            <el-table-column label="二级玩法名称" property="betOnValue" align="center" width="100" show-overflow-tooltip>
              <template slot-scope="scope">
                   <span> {{ scope.row.betOnValue?scope.row.betOnValue:"-" }}</span>
              </template>
            </el-table-column>
             <el-table-column label="下注选项" property="betValue" align="center" width="80" show-overflow-tooltip>
              <template slot-scope="scope">
                   <span> {{ scope.row.betValue?scope.row.betValue:"-" }}</span>
              </template>
            </el-table-column>
             <el-table-column label="赔率" property="settleOdds" align="center" width="80" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.settleOdds?scope.row.settleOdds:"-" }}</span>
              </template>
            </el-table-column>
             <el-table-column label="投注额" property="amount" align="center" width="100" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.amount?scope.row.amount:"-" }}</span>
              </template>
            </el-table-column>
             <el-table-column label="有效投注额" property="effectiveAmount" align="center" width="100" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.effectiveAmount?scope.row.effectiveAmount:"-" }}</span>
              </template>
            </el-table-column>

              <el-table-column label="输赢金额" property="winLossAmount" align="center" width="100" show-overflow-tooltip>
              <template slot-scope="scope">
                     <span> {{ scope.row.winLossAmount?scope.row.winLossAmount:"-" }}</span>
              </template>
            </el-table-column>
             <el-table-column label="结算金额" property="settleAmount" align="center" width="100" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.settleAmount?scope.row.settleAmount:"-" }}</span>
              </template>
            </el-table-column>
             <el-table-column label="代理商老板账号" property="agentInfoId" :formatter="formatter_agentInfoId" align="center" width="120" show-overflow-tooltip>
            
            </el-table-column>
             <el-table-column label="游戏用户名称" property="gameUsername" align="center" width="120" show-overflow-tooltip>
              <template slot-scope="scope">
                    <span> {{ scope.row.gameUsername?scope.row.gameUsername:"-" }}</span>
              </template>
            </el-table-column>
             <el-table-column label="终端设备" property="device" align="center" width="100" show-overflow-tooltip>
              <template slot-scope="scope">
                   <span> {{ scope.row.device?scope.row.device:"-" }}</span>
              </template>
            </el-table-column>
              <el-table-column label="下注IP" property="ip" align="center" width="120" show-overflow-tooltip>
              <template slot-scope="scope">
                 <span> {{ scope.row.ip?scope.row.ip:"-" }}</span>
              </template>
            </el-table-column>
             <el-table-column label="下注时间" property="betTime" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                   <span> {{ scope.row.betTime?scope.row.betTime:"-" }}</span>
              </template>
            </el-table-column>
             <el-table-column label="计算中奖时间（结算时间）" property="settleTime" align="center" width="170" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.settleTime?scope.row.settleTime:"-" }}</span>
              </template>
            </el-table-column>        
          </el-table>
        </div>
      <!-- 分页 -->
        <!-- <div class="admin_pagination">
          <el-pagination 
            :page-sizes="[10, 20, 50, 100]"
            :current-page.sync="SeeDetails.page"
            :page-size="SeeDetails.size"
            :total="SeeDetailsAllDataCount"
            background
            layout="total, prev, pager, next" 
             @current-change="SeeDetailsInfopage"         
          >
          </el-pagination>
        </div> -->
      
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" @click="confirmEdit" size="mini">确 定</el-button> -->
        <el-button @click="detailDialog = false" size="mini">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { agentInfoDropdownList,findByCode } from '@/api/select'
import { statistic } from '@/api/lotteryCore/lc_reportManage/lc_jiaoyi_record'
import { exportTable,findDetail } from '@/api/lotteryCore/lc_reportManage/lc_jiaoyi_record'
import {serverTime } from '@/api/login'
import Cookies from 'js-cookie'
import { debounce } from '../../../utils';
export default {
  data() {
    return {
      detailDialog:false, // 查看详情弹框控制
      dialogLoading:false,// 查看详情表格 Loading 加载
      dialogMt:this.dialogMt, // 弹出框上边距
      titleName:"",
      SeeDetails:{ // 查看详情页面请求数据
        tradeNo:"", // 平台交易流水号
        agentInfoName:"", // 代理商老板账号名称
        agentInfoId:"", // 代理商老板账号id
        gameUsername:"", // 游戏用户名称
        tradeType:"",//交易类型
        tradeTypeName:"",//交易类型名称
        amount:"",//交易异动金额
        beforeAmount:"",//交易异动前余额
        afterAmount:"",//交易异动后余额
        tradeTime:"",//操作时间（交易时间）
        id:"", // 
        page:0,
        size:10,
      },
      SeeDetailsAllDataCount:0, // 查看详情页面请求数据总条数
      SeeDetailsAll:[], // // 查看详情页面列表数据
      rowDataID:"", // 当前行数据ID
      rowDataList:"", // 当前行数据

      exportType: 'table' , // 默认为表格导出
      excelLoading: false, // 导出Loading
      ServerTimes:"", // 服务器时间
      disableControl:false,
      agentInfoIdsArr: [], // 代理商老板下拉
      tradeTypeArr: [{ value: "",name: "全部"}], // 交易类型下拉
      statistics:{
        withdrawUser: '', // 提现人数
        depositUser: '', // 充值人数
        withdrawAmount: '', // 提现金额
        depositAmount: '', // 充值金额
      },
      loading:false, // Loading 加载
      disabledALL:false, // 查询接口时，loading 是否可编辑    
    };
  },
  computed:{
    ...mapState({
      tableData:state => state.lc_jiaoyi_record.allData,
      allData_total:state => state.lc_jiaoyi_record.allData_total,
      currentPageSize:state => state.lc_jiaoyi_record.currentPageSize
    }),
    size: {
      get(){
        return this.$store.state.lc_jiaoyi_record.size;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.lc_jiaoyi_record.page;
      },
      set(item){
        return  item;
      }
    },
    searchEdition: {
      get(){
        return this.$store.state.lc_jiaoyi_record.searchEdition;
      },
      set(item){
        return  item;
      }
    }
  },
  methods:{
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    getDialogTableList(val){ 

    },
    search() {
      this.getList();
    },
    getList(val){ // 获取表格数据
      this.rowDataID = "";
      this.rowDataList = "";
      if(!val) {
        val = 1;
      }
      this.$store.dispatch("getJiaoYiPage", parseInt(val));
      this.loading = true; // 请求接口时loading启用
      this.disabledALL=true, // 查询接口时，loading 是否可编辑 
      this.disableControl = true;
      this.$store.state.lc_jiaoyi_record.searchEdition.page = this.page - 1;
      this.$store.state.lc_jiaoyi_record.searchEdition.size = this.size;

      if(this.$store.state.lc_jiaoyi_record.searchEdition.page== 0 ){
        statistic(this.$store.state.lc_jiaoyi_record.searchEdition).then(res => { // 列表眉头统计
          let resData = res.data;
          if(resData.success == 1) {
            this.statistics = resData.content
          }else {
            this.$message.error(resData.respMsg)
            this.statistics = {depositAmount: 0,depositUser: 0,withdrawAmount:"0",withdrawUser: 0}
            this.loading = false; // 接口返回数据时，loading禁用
            this.disabledALL= false; // 查询接口时，loading 是否可编辑 
            let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
            if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
              this.disableControl = true
            }else{
              this.disableControl = false
            }
            if(this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds == ""){ 
              this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds = [];
              this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds[0] = ""
            }
          }
        })
      } 

      this.$store.dispatch("getJiaoYiInfo",this.$store.state.lc_jiaoyi_record.searchEdition).then(res =>{
        if(res.success == 1){
          let currentPageSize = 2;
          if(res.content.content.length > 0) {
            currentPageSize = res.content.content.length;
          }else {
            currentPageSize = 2;
          }
          this.$store.dispatch('getJiaoYiTableHeight', currentPageSize)
          this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行
        }else{
          this.$message.error(res.respMsg);
        }
        this.loading = false; // 接口返回数据时，loading禁用
        this.disabledALL= false; // 查询接口时，loading 是否可编辑 
        let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
        if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
          this.disableControl = true
        }else{
           this.disableControl = false
        }
         if(this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds == ""){ 
          this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds = [];
          this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds[0] = ""
        }
      })
    },
    resetForm(){ // 重置
      this.$store.state.lc_jiaoyi_record.searchEdition={
        agentInfoIds:[""], // 代理商id列表
        gameUsername: '', // 游戏用户名称
        tradeType: '', // 交易类型
        tradeNo: '', // 平台交易流水号
        agentTradeNo: '', // 代理商交易流水号
        amountMin:"",//起始金额
        amountMax:"", //终止金额
        dateTime:[]
      }
      let userType = Cookies.get('userType');
      if(userType == '3'||userType == '4'){
        this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds[0] = this.agentInfoIdsArr[0].value;
      }
          // 下注时间默认显示7天
      let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
      let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
      let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
      this.$store.state.lc_jiaoyi_record.searchEdition.dateTime = [state,edate];
    },
    exportExcel(){
        // 导出

      let data = this.$store.state.lc_jiaoyi_record.searchEdition;
      this.exportType = 'excel'
      this.excelLoading = true
      exportTable(data).then(res => {      
      let resData = res.data
      if(resData.success == 1) {
        this.$message.success("导出成功（数据为查询条件最新数据）")
        window.location.href = '/api/cp4/common/file/taskDownload?model=ACCOUNT&taskId='+resData.content;
      }else {
        this.$message.error(resData.respMsg)
      }
        this.excelLoading = false;
        this.exportType = 'table';
        if(this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds == ""){
          this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds = [];
          this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds[0] = ""
        }
    })
    },
    handleCurrentChange(val){
      if(val != null){
        this.rowDataID = val.id;
        this.rowDataList = val;
      }
    },
    handleSizeChange(val){
      this.$store.dispatch('getJiaoYiPageSize', val);
      this.getList();
    },
    getDate(val){ // 获取时间控件方法
     // 获取时间控件方法
      if(!val||this.$store.state.lc_jiaoyi_record.searchEdition.dateTime != null) {
          this.$store.state.lc_jiaoyi_record.searchEdition.dateTime[0] = this.dateForm(this.$store.state.lc_jiaoyi_record.searchEdition.dateTime[0],1);
          this.$store.state.lc_jiaoyi_record.searchEdition.dateTime[1] = this.dateForm(this.$store.state.lc_jiaoyi_record.searchEdition.dateTime[1],1);        
          if(this.$store.state.lc_jiaoyi_record.searchEdition.dateTime[0] == this.$store.state.lc_jiaoyi_record.searchEdition.dateTime[1]) {
            this.$store.state.lc_jiaoyi_record.searchEdition.dateTime[1] = this.$store.state.lc_jiaoyi_record.searchEdition.dateTime[1].split(' ')[0] + ' 23:59:59'
          }
          if(this.$store.state.lc_jiaoyi_record.searchEdition.dateTime[1].split(' ')[1] == '00:00:00') {
            this.$store.state.lc_jiaoyi_record.searchEdition.dateTime[1] = this.$store.state.lc_jiaoyi_record.searchEdition.dateTime[1].split(' ')[0] + ' 23:59:59'
          }         
        }else{
            // 下注时间默认显示7天
          let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
          let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
          let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
          this.$store.state.lc_jiaoyi_record.searchEdition.dateTime = [state,edate];  
      }
    },
    handleChange(val) { // 切换代理商多选   
      let i = val.length; 
      if(val[i-1] == ""&&val.length == 1){
        this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds = [""]
      }
      if(val[i-1] == ""){
        this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds = [""]
      }
      const index = val.indexOf("")
      if(index != -1){
        this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds.splice(index, 1) // 排除全选选项
      }        
    },
    formatter_agentInfoId(val){// 代理商老板id 转换为名字
      let itme = "-";
      this.agentInfoIdsArr.forEach(element => {
        if(Number(val.agentInfoId) == element.value){
          itme =  element.name;
        }
      });
      console.log(itme)
      return itme
    },
    getServerTime(){
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
            let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
            let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
            let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
            if(this.$store.state.lc_jiaoyi_record.searchEdition.dateTime.length == 0){
                this.$store.state.lc_jiaoyi_record.searchEdition.dateTime = [state,edate];  
            }
          }else {
            this.$message.error(resData.respMsg)
          }
      })
    },
    editAndViewDetails(h){
      if(!this.rowDataID){
        this.$message.warning("请选择一条数据");
        return false;
      }
      // scope.row.tradeType == 1 ? '充值' : scope.row.tradeType == 2 ? '提现' : scope.row.tradeType == 3 ? '下注扣款' : scope.row.tradeType == 4 ? '注单结算' : scope.row.tradeType == 5 ? '注单撤销' : '--'
      this.SeeDetails = { // 查看详情页面请求数据
        tradeNo:this.rowDataList.tradeNo, // 代理商交易流水号
        agentInfoName:"", // 代理商老板账号名称
        agentInfoId:this.rowDataList.agentInfoId, // 代理商老板账号id
        gameUsername:this.rowDataList.gameUsername, // 游戏用户名称
        tradeType:this.rowDataList.tradeType,//交易类型
        tradeTypeName:"",//交易类型名称
        amount:this.rowDataList.amount,//交易异动金额
        beforeAmount:this.rowDataList.beforeAmount,//交易异动前余额
        afterAmount:this.rowDataList.afterAmount,//交易异动后余额
        tradeTime:this.rowDataList.tradeTime,//操作时间（交易时间）
        id:this.rowDataList.id, // 
       
      }
      this.tradeTypeArr.forEach(element => {
        if(this.rowDataList.tradeType == element.value){
          this.SeeDetails.tradeTypeName =  element.name;
        }
      });
      this.titleName = "查看详情   （平台交易流水号【"+this.SeeDetails.tradeTypeName +"】 "+this.SeeDetails.tradeNo+"  ）"
      this.SeeDetails.agentInfoName = this.formatter_agentInfoId(this.rowDataList);
      this.judgeScree(h);     
      if(this.rowDataList.tradeType == "1" || this.rowDataList.tradeType == "2"){
        this.$message.warning("该交易类型的数据暂无详情，请选择交易类型为“下注扣款”或“注单结算”的数据查看");
        return false;
      }
      this.detailDialog = true;
      this.dialogLoading = true;
      this.SeeDetailsInfo(this.SeeDetails);
    },
    SeeDetailsInfo(val){
      findDetail(val).then(res => {      
        let resData = res.data
        if(resData.success == 1) {
          if(resData.content.length >0){
            this.SeeDetailsAll = resData.content;
            // this.SeeDetailsAllDataCount = resData.content.totalElements;
          }else{
            this.SeeDetailsAll = [];
            this.SeeDetailsAllDataCount = 0;
          }

        }else {
          this.$message.error(resData.respMsg)
        }
        this.dialogLoading = false;
      })
    },
    // SeeDetailsInfopage(val){
    //   this.SeeDetails.page = val;
    //   this.SeeDetailsInfo(this.SeeDetails);

    // }
  },
  created() {
    if(this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)){
   //   debugger
    // 更新已关闭的菜单 数组状态
      let newalreadyClose = [] // 定义一个空数组存 过滤左侧点击的数据
      this.$store.getters.alreadyClose.forEach(value => {
        if(value != this.$store.getters.currentView){
          newalreadyClose.push(value)
        }
      })
      this.$store.dispatch("updataTabClose",newalreadyClose) 
      if(this.$store.getters.currentView == this.$route.name) { 
        this.$store.state.lc_jiaoyi_record.allData = []
        this.$store.state.lc_jiaoyi_record.allData_total = 0;
        this.$store.state.lc_jiaoyi_record.page = 1;
        this.$store.state.lc_jiaoyi_record.size = 10;
        this.$store.state.lc_jiaoyi_record.searchEdition={
          agentInfoIds:[""], // 代理商id列表
          gameUsername: '', // 游戏用户名称
          tradeType: '', // 交易类型
          tradeNo: '', // 平台交易流水号
          agentTradeNo: '', // 代理商交易流水号
          amountMin:"",//起始金额
          amountMax:"", //终止金额
          dateTime:[]
        }
        this.$store.dispatch('getJiaoYiTableHeight', 2)
      }
    }else {
      // debugger
      if(this.$store.state.lc_jiaoyi_record.allData.length > 0) {
        this.getList()
      }
    }
     this.getServerTime(); // 获取服务器时间
  },
  mounted(){
    
    // 初始化下拉列表状态
    agentInfoDropdownList().then(res => { // 代理商老板账号
      let resData = res.data
      if(resData.success == 1) {
        let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
        if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
          this.agentInfoIdsArr = resData.content;
          this.$store.state.lc_jiaoyi_record.searchEdition.agentInfoIds[0] = resData.content[0].value;
            this.disableControl = true;
        }else{
          this.agentInfoIdsArr=[{ value: "",name: "全部"}] // 代理商老板账号下拉列表 
          let by_agentInfoIdsArr = resData.content;
          by_agentInfoIdsArr.forEach(element => {
              this.agentInfoIdsArr.push(element);
          });
        }
      }else {
        this.$message.error(resData.respMsg)
      }
    })

    findByCode({code: "TRADE_TRADETYPE,"}).then(res => {  // 初始化下拉列表
          let resData = res.data;
          if(resData.success == 1) {
            let by_tradeTypeArr = resData.content['TRADE_TRADETYPE']; // 初始化 开奖状态;         
              by_tradeTypeArr.forEach(element => {
                  this.tradeTypeArr.push(element);
              }); 
          }
        })

  }
};
</script>
<style lang="scss" scope>
.bettingStatus_sum .el-table__empty-text{
    text-align: left;
    // float: left;
    // width: 62%;
}
  .transaction-head{
    background-color:#e3e8ec;
    color: #7b7c7c;
    height: 40px;
    padding-left: 10px;
    line-height: 40px ;
  }
.transaction-checkDetail {
    .detail-head{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      background: #F5F7FA;
      padding: 10px;
      p{
    width: 25%;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
      }
    }
    
}
</style>
