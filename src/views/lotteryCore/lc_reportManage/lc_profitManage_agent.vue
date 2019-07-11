<template>
  <!-- 盈亏报表-代理商 -->
  <div class="app-container table-fold profit-agent">
    <!-- 通用搜索框 -->
    <el-form v-show="showSearchBox">
      <div class="heard-search-box">
        <ul class="heard-search">
          <li>
            <span class="rem_tit">代理商老板账号：</span>
            <span class="rem_con">
              <el-select v-model="searchEdition.agentInfoIds" multiple collapse-tags placeholder="全部" :disabled="disableControl" @change="handleChange">
                <el-option
                  v-for="item in agentInfoIdsArr"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </span>
          </li>
          <li>
            <span class="rem_tit">一级彩种名称：</span>
            <span class="rem_con">
              <el-select
                v-model="searchEdition.parentLotteryId"
                @change="changeKindAData"
                placeholder="请选择" 
                :disabled="disabledALL"
              >
                <el-option
                  v-for="item in kindAData"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </span>
          </li>
          <li>
            <span class="rem_tit">二级彩种名称：</span>
            <span class="rem_con">
              <el-select
                v-model="searchEdition.lotteryId"
                @change="changeKindBData"
                :disabled="searchEdition.disabledSecond"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in kindBData"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </span>
          </li>
          <li>
            <span class="rem_tit">二级玩法：</span>
            <span class="rem_con">
              <el-select
                v-model="searchEdition.playRuleId"
                placeholder="请选择"
                :disabled="searchEdition.disabledRule"
              >
                <el-option
                  v-for="item in playRuleIdArr"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </span>
          </li>
          <li>
            <span class="rem_tit">开奖期号：</span>
            <span class="rem_con">
              <el-input
                v-model="searchEdition.gameNo"
                placeholder="开奖期号"
                maxlength="15"
                :disabled="disabledALL"
              ></el-input>
            </span>
          </li>
        </ul>
        <ul class="heard-search">
          <li>
            <span class="rem_tit">总投注额：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.betAmountBegin" :disabled="disabledALL" placeholder="起始金额" maxlength="10"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.betAmountEnd" :disabled="disabledALL" placeholder="终止金额" maxlength="10"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">有效投注额：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.effictiveBegin" :disabled="disabledALL" placeholder="起始金额" maxlength="10"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.effictiveEnd" :disabled="disabledALL" placeholder="终止金额" maxlength="10"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">输赢金额：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.winLossBegin" :disabled="disabledALL" placeholder="起始金额" maxlength="14"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.winLossEnd" :disabled="disabledALL" placeholder="终止金额" maxlength="14"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">总注单数：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.totalBetBegin" :disabled="disabledALL" placeholder="起始数量 " maxlength="9"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.totalBetEnd" :disabled="disabledALL" placeholder="终止数量 " maxlength="9"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">总下注人数：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.totalBetUserBegin" :disabled="disabledALL" placeholder="起始数量 " maxlength="9"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.totalBetUserEnd" :disabled="disabledALL" placeholder="终止数量 " maxlength="9"></el-input>
            </span>
          </li>
        </ul>
        <ul class="heard-search">
          <li>
            <span class="rem_tit">下注时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="searchEdition.BetOnTime"
                type="datetimerange"
                :disabled="searchEdition.enableBetsTime"
                range-separator="至"
                :clearable="false"
                ref="searchEdition_BetOnTime"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('下注时间')"
              ></el-date-picker>
            </span>
          </li>
          <li>
            <span class="rem_tit">开奖时间：</span>
            <span class="rem_con">
               <el-date-picker
                v-model="searchEdition.TheLotteryTime"
                :disabled="searchEdition.enableOpenTime"
                type="datetimerange"
                :clearable="false"
                ref="searchEdition_TheLotteryTime"
                range-separator="至"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('开奖时间')"
              ></el-date-picker>
            </span>
          </li>
          <li>
            <span class="rem_tit">结算时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="searchEdition.ClearingTime"
                type="datetimerange"
                :disabled="searchEdition.enableBillTime"
                ref="searchEdition_ClearingTime"
                :clearable="false"
                range-separator="至"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('结算时间')"
              ></el-date-picker>
            </span>
          </li>
        </ul>
      </div>
    </el-form>
    <div class="toggle-box">
      <el-form>
        <el-form-item class="operation-box">
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="search">
            <svg-icon icon-class="chaxun" /> 
            查询</el-button>
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="resetSearchForm">
            <svg-icon icon-class="zhongzhi" />
            重置</el-button>
          <el-button type="primary" size="mini" :disabled="disabledALL" @click="exportThis">
            <svg-icon icon-class="daochu" />
            导出</el-button>
        </el-form-item>
        <el-button class="show-toggle" type="primary" @click="showToggle" :icon="showToggleIcon"></el-button>
      </el-form>
    </div>
    <!-- 数据表格 -->
    <div class="table-data">
      <!-- <div class="profit-head">统计：下注人数：520    注单总数：5789     总投注额：89546.2     有效投注额：85987.2     输赢：798456.1。</div>-->
      <el-table
        background
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        class="tableAutoToggle"
        :class="!showSearchBox?'tableAuto175':''"
        :height="currentPageSize*25 + 34"
        border
        v-loading="exportType == 'table' ? loading : excelLoading"
       :element-loading-text="exportType == 'table' ? '' : '数据正在导出中.....'"   
      >
        <el-table-column  align="center" width="50" label="序号" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="agentInfoCode" align="center" label="代理商ID" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column prop="agentInfoName" align="center" width="120"  label="代理商老板账号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="winlowssAmount" align="center" :sortable="true" :sort-method="sortByAmount" label="输赢金额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="betNum" align="center" :sortable="true" :sort-method="sortByTotalSingle" label="总注单数" show-overflow-tooltip></el-table-column>
        <el-table-column prop="betAmount" align="center" :sortable="true" :sort-method="sortByTotalMount" label="总投注额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="effectiveAmount" align="center" :sortable="true" :sort-method="sortTotalEffectiveAmount" label="总有效投注额" ></el-table-column>
        <el-table-column prop="betUserNum" align="center" :sortable="true" :sort-method="sortTotalUserNumber" label="总下注人数" width="110" show-overflow-tooltip></el-table-column>
     
      </el-table>
    </div>
  
  </div>
</template>
<script>
import { mapState } from "vuex";
import { agentInfoDropdownList,lotteryDropdownList,findByCode,playRuleDropdownList} from "@/api/select";
import { validNinedata_nine,validNinedata_twelve ,validNinedata_thirteen_negative} from '@/utils/validate'
import { exportReportAgent } from '@/api/lotteryCore/lc_reportManage/lc_yingkui_agent'
import Cookies from 'js-cookie'
import {serverTime } from '@/api/login'
export default {
  data() {
    return {
      ServerTimes:"", // 服务器时间
      exportType: 'table' , // 默认为表格导出
      excelLoading: false, // 导出Loading
      disableControl:false, // 代理商老板账号是否可编辑
      disabledALL:false, // 查询接口时，loading 是否可编辑 
      loading:false, // Loading 加载
      showSearchBox: true, // 控制查询条件容器显示-隐藏
      showToggleIcon: 'el-icon-caret-top',
      agentNameArr: [],     
    };
  },
  computed: {
    ...mapState({
      tableData: state => state.lc_yingkui_agent.allData,
      allData_total: state => state.lc_yingkui_agent.allData_total,
      currentPageSize: state => state.lc_yingkui_agent.currentPageSize,
      agentInfoIdsArr: state => state.lc_yingkui_agent.agentInfoIdsArr, // // 代理商老板id
      kindAData: state => state.lc_yingkui_agent.kindAData, // 一级彩种下拉选择数据
      kindBData: state => state.lc_yingkui_agent.kindBData, // 二级彩种下拉选择数据
      playRuleIdArr: state => state.lc_yingkui_agent.playRuleIdArr, // 二级玩法下拉框
    }),
    size: {
      get() {
        return this.$store.state.lc_yingkui_agent.size;
      },
      set(item) {
        return item;
      }
    },
    page: {
      get() {
        return this.$store.state.lc_yingkui_agent.page;
      },
      set(item) {
        return item;
      }
    },
     searchEdition: { // 查询条件
      get(){
        return this.$store.state.lc_yingkui_agent.searchEdition;
      },
      set(item){
        return  item;
      }
    },
  },
  methods: {
    showToggle() { // 折叠查询条件容器
      this.showSearchBox = !this.showSearchBox;
      if(this.showSearchBox) {
        this.showToggleIcon = "el-icon-caret-top";
      }else {
        this.showToggleIcon = "el-icon-caret-bottom";
      }
    },
    search() {
      this.getList()
    },
    sortByAmount(a,b){ // 按输赢金额排序
      let val1 = a.winlowssAmount;
      let val2 = b.winlowssAmount;
      return val1 - val2;
    },
    sortByTotalSingle(a,b){ // 按总投注单数排序
      let val1 = a.betNum;
      let val2 = b.betNum;
      return val1 - val2;
    },
    sortByTotalMount(a,b){  // 按总投注额
      let val1 = a.betAmount;
      let val2 = b.betAmount;
      return val1 - val2;
    },
    sortTotalEffectiveAmount(a,b){ // 按总有效投注额
      let val1 = a.effectiveAmount;
      let val2 = b.effectiveAmount;
      return val1 - val2;
    },
    sortTotalUserNumber(a,b){  // 按总下注人数
      let val1 = a.betUserNum;
      let val2 = b.betUserNum;
      return val1 - val2;
    },
    getList(val) {
      if(!val) {
        val = 1;
      }
      this.$store.dispatch("getYingKuiPage", Number(val));
     
      let datainfo = this.$store.state.lc_yingkui_agent.searchEdition; 
      if(datainfo.BetOnTime.length == 0 && datainfo.TheLotteryTime.length == 0 && datainfo.ClearingTime.length == 0){
         // 下注时间默认显示7天
            let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
            let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
            let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
            this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime = [state,edate];  
            this.$store.state.lc_yingkui_agent.searchEdition.enableBillTime = true; // 禁用结算时间
            this.$store.state.lc_yingkui_agent.searchEdition.enableOpenTime = true; // 禁用开奖时间
      }
      //起始总注单数与截止总注单数 校验长短

      if(!validNinedata_nine(datainfo.totalBetBegin)||!validNinedata_nine(datainfo.totalBetEnd)){ 
        this.$message.warning('总注单数仅支持输入数字，限制长度9');
        return
      }
     
      //起始总下注人数与截止总下注人数 校验长短
      if(!validNinedata_nine(datainfo.totalBetUserBegin)||!validNinedata_nine(datainfo.totalBetUserEnd)){ 
        this.$message.warning('总下注人数仅支持输入数字，限制长度9');
        return
      }
      //起始 总投注额与截止 总投注额 校验长短 
      if(!validNinedata_twelve(datainfo.betAmountBegin)||!validNinedata_twelve(datainfo.betAmountEnd)){ 
        this.$message.warning('总投注额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
      //起始 有效投注金额与截止 有效投注金额 校验长短
      if(!validNinedata_twelve(datainfo.effictiveBegin)||!validNinedata_twelve(datainfo.effictiveEnd)){ 
        this.$message.warning('有效投注金额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
       //起始输赢金额与截止输赢金额 校验长短   

      if(!validNinedata_thirteen_negative(datainfo.winLossBegin)||!validNinedata_thirteen_negative(datainfo.winLossEnd)){ 
        this.$message.warning('输赢金额仅支持输入数字，金额的区间 是-100000000.00  -  100000000.00 （单位是元）');
        return
      }
      //输赢金额 || 总投注额 || 有效投注金额 校验大小
      if(datainfo.winLossBegin&&datainfo.winLossEnd||datainfo.betAmountBegin&&datainfo.betAmountEnd||datainfo.effictiveBegin&&datainfo.effictiveEnd){
        if(Number(datainfo.winLossBegin)>Number(datainfo.winLossEnd)||Number(datainfo.betAmountBegin)>Number(datainfo.betAmountEnd)||Number(datainfo.effictiveBegin)>Number(datainfo.effictiveEnd)){ 
          this.$message.warning('起始金额小于等于终止金额');
          return
        }  
      }
      //总注单数 || 总下注人数 校验大小
      if(datainfo.totalBetBegin&&datainfo.totalBetEnd||datainfo.totalBetUserBegin&&datainfo.totalBetUserEnd){
        if(Number(datainfo.totalBetBegin)>Number(datainfo.totalBetEnd)||Number(datainfo.totalBetUserBegin)>Number(datainfo.totalBetUserEnd)){
          this.$message.warning('起始数量小于等于终止数量');
          return
        } 
      } 

     // 下注起始时间   区间不得超过三个月
      if(datainfo.BetOnTime[0] && datainfo.BetOnTime[1]) {
        let newSdate =  new Date(datainfo.BetOnTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(datainfo.BetOnTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      // 开奖起始时间   区间不得超过三个月
      if(datainfo.TheLotteryTime[0] && datainfo.TheLotteryTime[1]){
        let newSdate =  new Date(datainfo.TheLotteryTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(datainfo.TheLotteryTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      // 结算起始时间   区间不得超过三个月
      if(datainfo.ClearingTime[0] && datainfo.ClearingTime[1]){
        let newSdate =  new Date(datainfo.ClearingTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(datainfo.ClearingTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      this.disableControl = true;// 代理商老板禁止输入
      this.loading = true; // 请求接口时loading启用
      this.disabledALL=true; // 控制全局不可编辑
      this.$store.state.lc_yingkui_agent.searchEdition.disabledSecond = true; // 二级彩种不可编辑
      this.$store.state.lc_yingkui_agent.searchEdition.disabledRule = true;  // 二级玩法不可编辑
      let that = this;
      this.$store.dispatch("getYingKuiAgentInfo", this.$store.state.lc_yingkui_agent.searchEdition).then(res => {
        if(res.success == 1){
          let currentPageSize = 2;
            if (res.content.length > 0) {
              currentPageSize = res.content.length;
            } else {
              currentPageSize = 2;
            }
           
            this.$store.dispatch("getYingKuiTableHeight", currentPageSize);
            this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行
        }else{
          this.$message.error(res.respMsg)
        }                      
        this.loading = false; // 接口返回数据时，loading禁用
        this.disabledALL=false; // 控制全局不可编辑
        let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
          if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑          
            this.disableControl = true;
          }else{
            this.disableControl = false;
          }
          // 判断一级彩种是否有数据
          if(this.$store.state.lc_yingkui_agent.searchEdition.parentLotteryId == ""){
              this.$store.state.lc_yingkui_agent.searchEdition.disabledSecond = true; 
               this.$store.state.lc_yingkui_agent.searchEdition.disabledRule = true; 
          }else{
              this.$store.state.lc_yingkui_agent.searchEdition.disabledSecond = false;
          }
          // 判断二级彩种是否有数据
          if(this.$store.state.lc_yingkui_agent.searchEdition.lotteryId == ""){
              this.$store.state.lc_yingkui_agent.searchEdition.disabledRule = true; 
          }else{
              this.$store.state.lc_yingkui_agent.searchEdition.disabledRule = false;
          }

      }).catch(error => {
          that.$message.error("请求出现异常请联系管理员")
          that.$store.state.lc_yingkui_agent.allData_total = [];  
          that.loading = false; // 接口返回数据时，loading禁用
          that.disabledALL=false; // 控制全局不可编辑
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
          if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑          
            that.disableControl = true;
          }else{
            that.disableControl = false;
          }
          // 判断一级彩种是否有数据
          if(that.$store.state.lc_yingkui_agent.searchEdition.parentLotteryId == ""){
              that.$store.state.lc_yingkui_agent.searchEdition.disabledSecond = true; 
               that.$store.state.lc_yingkui_agent.searchEdition.disabledRule = true; 
          }else{
              that.$store.state.lc_yingkui_agent.searchEdition.disabledSecond = false;
          }
          // 判断二级彩种是否有数据
          if(that.$store.state.lc_yingkui_agent.searchEdition.lotteryId == ""){
              that.$store.state.lc_yingkui_agent.searchEdition.disabledRule = true; 
          }else{
              that.$store.state.lc_yingkui_agent.searchEdition.disabledRule = false;
          }

      });
    },
    resetSearchForm() {// 重置
      this.$store.state.lc_yingkui_agent.searchEdition={
        agentInfoIds: [""], // 代理商老板id列表
        parentLotteryId: '', // 一级彩种编码
        lotteryId: '', // 二级彩种编码
        playRuleId: '', // 二级玩法Id
        gameNo: '', // 开奖期号
        betAmountBegin: '', // 起始总投注额
        betAmountEnd: '', // 截止总投注额
        effictiveBegin: '', // 起始有效投注金额
        effictiveEnd: '', // 截止有效投注金额
        winLossBegin: '', // 起始输赢金额
        winLossEnd: '', // 截止输赢金额
        totalBetBegin: '', // 起止总注单数
        totalBetEnd: '', // 截止总注单数
        totalBetUserBegin: '', // 起始总下注人数
        totalBetUserEnd: '', // 截止总下注人数
        BetOnTime: [], //下注时间 
        TheLotteryTime: [], //开奖时间
        ClearingTime: [], //结算时间
        enableBetsTime: false, // 禁用下注时间
        enableOpenTime: true, // 禁用开奖时间
        enableBillTime: true, // 禁用结算时间
        disabledSecond: true, // 二级彩种不可编辑
        disabledRule: true // 二级玩法
      }
      let userType = Cookies.get('userType');
      if(userType == '3'||userType == '4'){
        this.$store.state.lc_yingkui_agent.searchEdition.agentInfoIds[0] = this.agentNameArr[0].value;
      }
         // 下注时间默认显示7天
      let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
      let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
      let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
      this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime = [state,edate];  
        
    },
    handleSizeChange(val) {
      this.$store.dispatch("getYingKuiPageSize", val);
      this.getList();
    },

    exportThis() { // 导出
    
      let datainfo = this.$store.state.lc_yingkui_agent.searchEdition;  
      if(datainfo.BetOnTime.length == 0 && datainfo.TheLotteryTime.length == 0 && datainfo.ClearingTime.length == 0){
         // 下注时间默认显示7天
            let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
            let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
            let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
            this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime = [state,edate];  
            this.$store.state.lc_yingkui_agent.searchEdition.enableBillTime = true; // 禁用结算时间
            this.$store.state.lc_yingkui_agent.searchEdition.enableOpenTime = true; // 禁用开奖时间
      }
      //起始总注单数与截止总注单数 校验长短

      if(!validNinedata_nine(datainfo.totalBetBegin)||!validNinedata_nine(datainfo.totalBetEnd)){ 
        this.$message.warning('总注单数仅支持输入数字，限制长度9');
        return
      }
     
      //起始总下注人数与截止总下注人数 校验长短
      if(!validNinedata_nine(datainfo.totalBetUserBegin)||!validNinedata_nine(datainfo.totalBetUserEnd)){ 
        this.$message.warning('总下注人数仅支持输入数字，限制长度9');
        return
      }
      //起始 总投注额与截止 总投注额 校验长短 
      if(!validNinedata_twelve(datainfo.betAmountBegin)||!validNinedata_twelve(datainfo.betAmountEnd)){ 
        this.$message.warning('总投注额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
      //起始 有效投注金额与截止 有效投注金额 校验长短
      if(!validNinedata_twelve(datainfo.effictiveBegin)||!validNinedata_twelve(datainfo.effictiveEnd)){ 
        this.$message.warning('有效投注金额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
       //起始输赢金额与截止输赢金额 校验长短
      if(!validNinedata_thirteen_negative(datainfo.winLossBegin)||!validNinedata_thirteen_negative(datainfo.winLossEnd)){ 
        this.$message.warning('输赢金额仅支持输入数字，金额的区间 是-100000000.00 - 100000000.00 （单位是元）');
        return
      }
      //输赢金额 || 总投注额 || 有效投注金额 校验大小
      if(datainfo.winLossBegin&&datainfo.winLossEnd||datainfo.betAmountBegin&&datainfo.betAmountEnd||datainfo.effictiveBegin&&datainfo.effictiveEnd){
        if(Number(datainfo.winLossBegin)>Number(datainfo.winLossEnd)||Number(datainfo.betAmountBegin)>Number(datainfo.betAmountEnd)||Number(datainfo.effictiveBegin)>Number(datainfo.effictiveEnd)){ 
          this.$message.warning('起始金额小于等于终止金额');
          return
        }  
      }
      //总注单数 || 总下注人数 校验大小
      if(datainfo.totalBetBegin&&datainfo.totalBetEnd||datainfo.totalBetUserBegin&&datainfo.totalBetUserEnd){
        if(Number(datainfo.totalBetBegin)>Number(datainfo.totalBetEnd)||Number(datainfo.totalBetUserBegin)>Number(datainfo.totalBetUserEnd)){
          this.$message.warning('起始数量小于等于终止数量');
          return
        } 
      } 

     // 下注起始时间   区间不得超过三个月
      if(datainfo.BetOnTime[0] && datainfo.BetOnTime[1]) {
        let newSdate =  new Date(datainfo.BetOnTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(datainfo.BetOnTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      // 开奖起始时间   区间不得超过三个月
      if(datainfo.TheLotteryTime[0] && datainfo.TheLotteryTime[1]){
        let newSdate =  new Date(datainfo.TheLotteryTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(datainfo.TheLotteryTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      // 结算起始时间   区间不得超过三个月
      if(datainfo.ClearingTime[0] && datainfo.ClearingTime[1]){
        let newSdate =  new Date(datainfo.ClearingTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(datainfo.ClearingTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }

      this.exportType = 'excel';
      this.excelLoading = true;
      let that = this;
      exportReportAgent(this.$store.state.lc_yingkui_agent.searchEdition).then(res => {      
        let resData = res.data
        if(resData.success == 1) {
          this.$message.success("导出成功（数据为查询条件最新数据）")
          window.location.href = '/api/cp4/common/file/taskDownload?model=ORDER&taskId='+resData.content;
        }else {
          this.$message.error(resData.respMsg)
        }
         this.excelLoading = false;
         this.exportType = 'table'
        // this.updataButtonLoading = false;
      }).catch(error => {
          that.$message.error("请求出现异常请联系管理员")
          that.excelLoading = false;
          that.exportType = 'table'

      });
    },
    getServerTime(){ // 请求服务器时间
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
            let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
            let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
            let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间     
             if(this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime.length == 0 &&this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime.length == 0&&this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime.length == 0){             
                this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime = [state,edate];  
                this.$store.state.lc_yingkui_agent.searchEdition.enableBillTime = true; // 禁用结算时间
                this.$store.state.lc_yingkui_agent.searchEdition.enableOpenTime = true; // 禁用开奖时间
            }
          }else {
            this.$message.error(resData.respMsg)
          }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
    },
    getDate(type) { // 获取时间控件方法
      let searchEdition =this.$store.state.lc_yingkui_agent.searchEdition;
        if(type == '下注时间') {
          if(searchEdition.BetOnTime != null) {
                this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime[0] = this.dateForm(searchEdition.BetOnTime[0],1);
                this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime[1] = this.dateForm(searchEdition.BetOnTime[1],1);        
                if(this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime[0] == this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime[1]) {
                  this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime[1] = this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime[1].split(' ')[0] + ' 23:59:59'
                }
                if(this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime[1].split(' ')[1] == '00:00:00') {
                  this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime[1] = this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime[1].split(' ')[0] + ' 23:59:59'
                }   
               this.$store.state.lc_yingkui_agent.searchEdition.enableOpenTime = true; // 禁用开奖时间
               this.$store.state.lc_yingkui_agent.searchEdition.enableBillTime = true; // 禁用结算时间       
            }else{
                // 下注时间默认显示7天
              this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime = [];  // 下注时间清空
              this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime=[]; // 结算时间清空
              this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime=[]; //开奖时间清空
              this.$store.state.lc_yingkui_agent.searchEdition.enableBetsTime = false; // 启用下注时间
              this.$store.state.lc_yingkui_agent.searchEdition.enableOpenTime = false; // 启用开奖时间
              this.$store.state.lc_yingkui_agent.searchEdition.enableBillTime = false; // 启用结算时间
          }
        }else if(type == '开奖时间') {
          if(searchEdition.TheLotteryTime != null) {
            this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime[0] = this.dateForm(searchEdition.TheLotteryTime[0],1);
            this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime[1] = this.dateForm(searchEdition.TheLotteryTime[1],1);        
            if(this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime[0] == this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime[1]) {
              this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime[1] = this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime[1].split(' ')[0] + ' 23:59:59'
            }
            if(this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime[1].split(' ')[1] == '00:00:00') {
              this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime[1] = this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime[1].split(' ')[0] + ' 23:59:59'
            } 
              this.$store.state.lc_yingkui_agent.searchEdition.enableBetsTime = true; // 禁用下注时间
              this.$store.state.lc_yingkui_agent.searchEdition.enableBillTime = true; // 禁用结算时间        
          }else{
            this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime=[]; //开奖时间清空
            this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime = [];  // 下注时间清空
            this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime=[]; // 结算时间清空
            this.$store.state.lc_yingkui_agent.searchEdition.enableBetsTime = false; // 启用下注时间
            this.$store.state.lc_yingkui_agent.searchEdition.enableOpenTime = false; // 启用开奖时间
            this.$store.state.lc_yingkui_agent.searchEdition.enableBillTime = false; // 启用结算时间
          }
        }else if(type == '结算时间') {
          if(searchEdition.ClearingTime != null) {
              this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime[0] = this.dateForm(searchEdition.ClearingTime[0],1);
              this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime[1] = this.dateForm(searchEdition.ClearingTime[1],1);        
              if(this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime[0] == this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime[1]) {
                this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime[1] = this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime[1].split(' ')[0] + ' 23:59:59'
              }
              if(this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime[1].split(' ')[1] == '00:00:00') {
                this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime[1] = this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime[1].split(' ')[0] + ' 23:59:59'
              } 
              this.$store.state.lc_yingkui_agent.searchEdition.enableBetsTime = true; // 禁用下注时间
              this.$store.state.lc_yingkui_agent.searchEdition.enableOpenTime = true; // 禁用开奖时间      
          }else{
              this.$store.state.lc_yingkui_agent.searchEdition.ClearingTime=[]; // 结算时间清空
              this.$store.state.lc_yingkui_agent.searchEdition.BetOnTime = [];  // 下注时间清空
              this.$store.state.lc_yingkui_agent.searchEdition.TheLotteryTime=[]; //开奖时间清空
              this.$store.state.lc_yingkui_agent.searchEdition.enableBetsTime = false; // 启用下注时间
              this.$store.state.lc_yingkui_agent.searchEdition.enableOpenTime = false; // 启用开奖时间
              this.$store.state.lc_yingkui_agent.searchEdition.enableBillTime = false; // 启用结算时间
          }
        }
    },
    changeKindAData(val) {
      this.$store.state.lc_yingkui_agent.kindBData  =[{ value: "",name: "请选择"}];
      this.$store.state.lc_yingkui_agent.searchEdition.lotteryId = ''; // 清空二级玩法数据
      this.$store.state.lc_yingkui_agent.searchEdition.playRuleId = ''; // 二级玩法Id
      if(val == null || val == undefined || val == "" || val == 0){
        this.$store.state.lc_yingkui_agent.searchEdition.disabledSecond = true;// 二级彩种名称是否可输入
        this.$store.state.lc_yingkui_agent.searchEdition.disabledRule = true; // 默认二级玩法下拉不可操作
      }else{
         let that = this;
        // 二级彩种接口调用数据
        lotteryDropdownList({parentId: val}).then(res => { // 初始化一级彩种列表    
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.$store.state.lc_yingkui_agent.kindBData.push(element);
              });
                this.$store.state.lc_yingkui_agent.searchEdition.disabledSecond = false; // 二级彩种名称是否可输入
                this.$store.state.lc_yingkui_agent.searchEdition.disabledRule = true; // 默认二级玩法下拉不可操作
            }else {
              this.$message.error(resData.respMsg)
            }
        }).catch(error => {  // 后台返回抛异常处理
            that.$message.error("请求出现异常请联系管理员")      
        });
      } 
    },
    changeKindBData(val) {
        this.$store.state.lc_yingkui_agent.playRuleIdArr  =[{ value: "",name: "请选择"}];
        this.$store.state.lc_yingkui_agent.searchEdition.playRuleId = ''; // 二级玩法Id
        if(val == null || val == undefined || val == "" || val == 0){
          this.$store.state.lc_yingkui_agent.searchEdition.disabledRule = true; // 默认二级玩法下拉不可操作
        }else{
           let that = this;
          // 二级玩法
          playRuleDropdownList({lotteryId:val}).then(res => { // 初始化二级玩法列表    
              let resData = res.data;
              if(resData.success == 1) {
                let by = resData.content;
                by.forEach(element => {
                  this.$store.state.lc_yingkui_agent.playRuleIdArr.push(element);
                });
                this.$store.state.lc_yingkui_agent.searchEdition.disabledRule = false; // 二级彩种名称是否可输入
              }else {
                this.$message.error(resData.respMsg)
              }
          }).catch(error => {  // 后台返回抛异常处理
              that.$message.error("请求出现异常请联系管理员")      
          }); 
        } 
    },
    handleChange(val) { // 切换代理商多选   
      let i = val.length; 
      if(val[i-1] == ""&&val.length == 1){
        this.$store.state.lc_yingkui_agent.searchEdition.agentInfoIds = [""]
      }
      if(val[i-1] == ""){
        this.$store.state.lc_yingkui_agent.searchEdition.agentInfoIds = [""]
      }
      const index = val.indexOf("")
      if(index != -1){
        val.splice(index, 1) // 排除全选选项 this.$store.state.lc_yingkui_agent.agentInfoIdsArr;
      }        
    },
    initData(){
       let that = this;
      lotteryDropdownList({parentId: 0}).then(res => { // 一级彩种下拉
      this.$store.state.lc_yingkui_agent.kindAData = [{ value: "",name: "请选择"}];
        let resData = res.data
        if(resData.success == 1) {
          let by_kindAData = resData.content
           by_kindAData.forEach(element => {
              this.$store.state.lc_yingkui_agent.kindAData.push(element);
          });
        }else {
          this.$message.error(resData.respMsg)
        }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
      agentInfoDropdownList().then(res => {  // 初始化代理商老板账号
        this.$store.state.lc_yingkui_agent.agentInfoIdsArr = []
        let resData = res.data;
        if (resData.success == 1) {
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
          if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
            this.agentNameArr = resData.content;
            this.$store.state.lc_yingkui_agent.agentInfoIdsArr = resData.content;
            this.$store.state.lc_yingkui_agent.searchEdition.agentInfoIds[0] = resData.content[0].value;
              this.disableControl = true; // 代理商老板与代理商员工没权限
          }else{
            this.$store.state.lc_yingkui_agent.agentInfoIdsArr=[{ value: "",name: "全部"}] // 代理商老板账号下拉列表 
            let by_agentInfoIdsArr = resData.content;   
            by_agentInfoIdsArr.forEach(element => {
                this.$store.state.lc_yingkui_agent.agentInfoIdsArr.push(element);
            });
          }
        } else {
          this.$message.error(resData.respMsg);
        }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
    },
  },
  created() {
     if (this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)) {
      // 更新已关闭的菜单 数组状态
      let newalreadyClose = []; // 定义一个空数组存 过滤左侧点击的数据
      this.$store.getters.alreadyClose.forEach(value => {
        if (value != this.$store.getters.currentView) {
          newalreadyClose.push(value);
        }
      });
      this.$store.dispatch("updataTabClose", newalreadyClose);
      if (this.$store.getters.currentView == this.$route.name) {
        this.$store.state.lc_yingkui_agent.allData = [];
        this.$store.state.lc_yingkui_agent.allData_total = 0;
        // this.$store.state.lc_yingkui_agent.page = 1;
        // this.$store.state.lc_yingkui_agent.size = 10;
        this.$store.state.lc_yingkui_agent.searchEdition = {
            agentInfoIds: [""], // 代理商老板id列表
            parentLotteryId: '', // 一级彩种编码
            lotteryId: '', // 二级彩种编码
            playRuleId: '', // 二级玩法Id
            gameNo: '', // 开奖期号
            betAmountBegin: '', // 起始总投注额
            betAmountEnd: '', // 截止总投注额
            effictiveBegin: '', // 起始有效投注金额
            effictiveEnd: '', // 截止有效投注金额
            winLossBegin: '', // 起始输赢金额
            winLossEnd: '', // 截止输赢金额
            totalBetBegin: '', // 起止总注单数
            totalBetEnd: '', // 截止总注单数
            totalBetUserBegin: '', // 起始总下注人数
            totalBetUserEnd: '', // 截止总下注人数
            BetOnTime: [], //下注时间 
            TheLotteryTime: [], //开奖时间
            ClearingTime: [], //结算时间
            enableBetsTime: false, // 禁用下注时间
            enableOpenTime: true, // 禁用开奖时间
            enableBillTime: true, // 禁用结算时间
            disabledSecond: true, // 二级彩种不可编辑
            disabledRule: true // 二级玩法
        }
        this.$store.dispatch("getYingKuiTableHeight", 2);
      }
    } 
     this.getServerTime()   
  },
  mounted() {
    this.initData();// 初始化下拉框代码
  },
  destroyed: function () {
    //  
  }
};
</script>
<style lang="scss" scope>
@import '@/styles/tableFold.scss';
.profit-agent {
  .tableAutoToggle { 
    max-height: calc(100vh - 350px);
    overflow: auto;
  }
}
@media screen and (max-width: 1460px) { 
  .profit-agent {
    .tableAuto175 {
      // 查询条件折叠时 表格高度
      max-height: calc(100vh - 175px) !important;
      overflow: auto;
    }
  }
}
</style>
