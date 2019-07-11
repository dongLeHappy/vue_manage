<template>
  <!-- 盈亏报表-用户 -->
  <div class="app-container table-fold profit-user">
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
                  :key="item.id"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </span>
          </li>
          <li>
            <span class="rem_tit">游戏用户名称：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.gameUsername" :disabled="disabledALL" placeholder="请输入游戏用户名称 " maxlength="25"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">一级彩种名称：</span>
            <span class="rem_con">
              <el-select
                :disabled="disabledALL"
                v-model="searchEdition.parentLotteryId"
                @change="changeKindAData"
                placeholder="请选择"
              >
                <el-option label="请选择" value=""></el-option>
                <el-option
                  v-for="item in kindAData"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </span>
          </li>
        </ul>
        <ul class="heard-search">
          <li>
            <span class="rem_tit">二级彩种名称：</span>
            <span class="rem_con">
              <el-select
                v-model="searchEdition.lotteryId"
                @change="getSecondVal"
                :disabled="searchEdition.disabledSecond"
                placeholder="请选择"
              >
               <el-option label="请选择" value=""></el-option>
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
                v-model="searchEdition.palyRuleId"
                placeholder="请选择"
                :disabled="searchEdition.disableWanfa"
              >
               <el-option label="请选择" value=""></el-option>
                <el-option
                  v-for="item in palyRuleIdArr"
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
                :disabled="disabledALL"
                placeholder="请输入开奖期号 "
                maxlength="15"
              ></el-input>
            </span>
          </li>
        </ul>
        <ul class="heard-search">
          
           <li>
            <span class="rem_tit">输赢金额：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.winLossBegin" :disabled="disabledALL" placeholder="起始金额 " maxlength="15"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.winLossEnd" :disabled="disabledALL" placeholder="终止金额" maxlength="15"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">总投注额：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.totalBetBegin" :disabled="disabledALL" placeholder="起始金额 " maxlength="15"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.totalBetEnd" :disabled="disabledALL" placeholder="终止金额 " maxlength="15"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">有效投注金额：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.effectiveAmountBegin" :disabled="disabledALL" placeholder="起始金额 " maxlength="15"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.effectiveAmountEnd" :disabled="disabledALL" placeholder="终止金额 " maxlength="15"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">总注单数：</span>
            <span class="rem_con">
              <el-input v-model="searchEdition.totalBetNumBegin" :disabled="disabledALL" placeholder="起始数量 " maxlength="15"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchEdition.totalBetNumEnd" :disabled="disabledALL" placeholder="终止数量 " maxlength="15"></el-input>
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
                range-separator="至"
                :disabled="searchEdition.enableBetsTime"
                :clearable="false"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('下注时间')"
                ref="lc_yingkui_user"
              ></el-date-picker>
            </span>
          </li>
          <li>
            <span class="rem_tit">开奖时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="searchEdition.TheLotteryTime"
                type="datetimerange"
                range-separator="至"
                :disabled="searchEdition.enableOpenTime"
                :clearable="false"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('开奖时间')"
                ref="searchEdition_TheLotteryTime"
              ></el-date-picker>
            </span>
          </li>
          <li>
            <span class="rem_tit">结算时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="searchEdition.ClearingTime"
                type="datetimerange"
                range-separator="至"
                :disabled="searchEdition.enableBillTime"
                :clearable="false"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('结算时间')"
                ref="searchEdition_ClearingTime"
              ></el-date-picker>
            </span>
          </li>
        </ul>
      </div>
    </el-form>
    <div class="toggle-box">
      <el-form>
        <el-form-item class="operation-box">
          <el-button type="primary" :disabled="disabledALL" size="mini" @click="search">
            <svg-icon icon-class="chaxun" /> 
            查询</el-button>
          <el-button type="primary" :disabled="disabledALL" size="mini" @click="reset">
            <svg-icon icon-class="zhongzhi" />
            重置</el-button>
          <el-button type="primary" :disabled="disabledALL" size="mini" @click="exportThis">
            <svg-icon icon-class="daochu" />
            导出</el-button>
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
        :height="currentPageSize*25 + 34"
        @current-change="handleCurrentChange"
        @sort-change='sortChange'
        border
        v-loading="exportType == 'table' ? loading : excelLoading"
        :element-loading-text="exportType == 'table' ? '' : '数据正在导出中.....'"   
      >
        
        <el-table-column prop="num" align="center" width="50" label="序号" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="agentInfoCode"
          align="center"
          label="代理商老板ID"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="agentInfoName"
          align="center"
          label="代理商老板账号"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="gameUsername"
          align="center"
          label="游戏用户名称"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="gameUserId"
          align="center"
          label="平台游戏用户ID"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column sortable='custom' prop="winlowssAmount" align="center" label="输赢金额" show-overflow-tooltip></el-table-column>
        <el-table-column sortable='custom' prop="betNum" align="center" label="总注单数" show-overflow-tooltip></el-table-column>
        <el-table-column sortable='custom' prop="betAmount" align="center" label="总投注额" show-overflow-tooltip></el-table-column>
        <el-table-column sortable='custom' prop="effectiveAmount" align="center" label="总有效投注额" show-overflow-tooltip></el-table-column>
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
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import {serverTime } from '@/api/login'
import { mapState } from "vuex";
import { agentInfoDropdownList,findByCode,lotteryDropdownList,playRuleDropdownList } from '@/api/select'
import { findOrderUser,exportReportUser } from '@/api/lotteryCore/lc_reportManage/lc_yingkui_user'
import { validUserNameLen_zhudan_Number,validNinedata_nine,validNinedata_ten,validNinedata_twelve,validNinedata_thirteen_negative } from '@/utils/validate'
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      table_id: '',
      excelLoading: false, // 导出Loading
      exportType: 'table' , // 默认为表格导出
      disableControl:false, // 代理商老板禁止输入
      disabledALL:false, // 查询接口时，loading 是否可编辑 
      loading:false, // Loading 加载
      showSearchBox: true, // 控制查询条件容器显示-隐藏
      showToggleIcon: 'el-icon-caret-top',
      kindAData: [], // 一级彩种下拉选择数据
      agentInfoIdsArr: [], // 代理商老板账号下拉
    };
  },
  computed: {
    ...mapState({
      tableData: state => state.lc_yingkui_user.allData,
      allData_total: state => state.lc_yingkui_user.allData_total,
      currentPageSize: state => state.lc_yingkui_user.currentPageSize,
      kindBData: state => state.lc_yingkui_user.kindBData,
      palyRuleIdArr: state => state.lc_yingkui_user.palyRuleIdArr
    }),
    size: {
      get() {
        return this.$store.state.lc_yingkui_user.size;
      },
      set(item) {
        return item;
      }
    },
    page: {
      get() {
        return this.$store.state.lc_yingkui_user.page;
      },
      set(item) {
        return item;
      }
    },
    searchEdition: { // 查询条件
      get(){
        return this.$store.state.lc_yingkui_user.searchEdition;
      },
      set(item){
        return  item;
      }
    },
  },
  methods: {
    // getUserAccount(val){ // 用id转换代理商老板账号
    //   let itme = "";
    //   this.agentInfoIdsArr.forEach(element => {
    //     if(element.value == val.agentInfoId){
    //       itme = element.name;
    //     }
    //   });
    //   return itme;
    // },
    search() {
      this.getList()
    },
    sortByWinloss(a,b){
      
    },
    showToggle() { // 折叠查询条件容器
      this.showSearchBox = !this.showSearchBox;
      if(this.showSearchBox) {
        this.showToggleIcon = "el-icon-caret-top";
      }else {
        this.showToggleIcon = "el-icon-caret-bottom";
      }
    },
    getList(val) {
      if (!val) {
        val = 1;
      }
      this.$store.dispatch("getYingKuiUserPage", Number(val));
      let data = this.$store.state.lc_yingkui_user.searchEdition;
      if(data.BetOnTime.length == 0 && data.TheLotteryTime.length == 0 && data.ClearingTime.length == 0){
              // 下注时间默认显示7天
                  let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
                  let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
                  let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
                  this.$store.state.lc_yingkui_user.searchEdition.BetOnTime = [state,edate];  
                  this.$store.state.lc_yingkui_user.searchEdition.enableBillTime = true; // 禁用结算时间
                  this.$store.state.lc_yingkui_user.searchEdition.enableOpenTime = true; // 禁用开奖时间
        }
        this.$store.state.lc_yingkui_user.searchEdition.page = this.page; // 当前页
        this.$store.state.lc_yingkui_user.searchEdition.size = this.size; // 当前每页条数

      if(!validNinedata_twelve(data.effectiveAmountBegin)||!validNinedata_twelve(data.effectiveAmountEnd)){ // 起始有效投注金额与截止有效投注金额 校验长短
        this.$message.warning('有效投注金额仅支持输入数字,金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
      if(data.effectiveAmountBegin&&data.effectiveAmountEnd){
        if(Number(data.effectiveAmountBegin)>Number(data.effectiveAmountEnd)){ // 起始有效投注金额与截止有效投注金额  校验大小
          this.$message.warning('有效投注金额起始金额小于等于终止金额');
          return
        }
      }
      if(!validNinedata_thirteen_negative(data.winLossBegin)||!validNinedata_thirteen_negative(data.winLossEnd)){ // 起始输赢金额与截止输赢金额 校验长短
        this.$message.warning('输赢金额仅支持输入数字,金额的区间 是-100000000.00  - 100000000.00 （单位是元）');
        return
      }
      if(data.winLossBegin&&data.winLossEnd){
        if(Number(data.winLossBegin)>Number(data.winLossEnd)){ // 起始输赢金额与截止输赢金额  校验大小
          this.$message.warning('输赢金额起始金额小于等于终止金额');
          return
        }
     }
      if(!validNinedata_ten(data.totalBetBegin)||!validNinedata_twelve(data.totalBetEnd)){ //起始总投注额与截止总投注额 校验长短
        this.$message.warning('总投注额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
      if(data.totalBetBegin&&data.totalBetEnd){
        if(Number(data.totalBetBegin)>Number(data.totalBetEnd)){ // 起始总投注金额与截止总投注金额  校验大小
          this.$message.warning('总投注额起始金额小于等于终止金额');
          return
        }
      }
     if(data.totalBetNumBegin&&data.totalBetNumEnd){
      if(!validNinedata_nine(data.totalBetNumBegin)||!validNinedata_nine(data.totalBetNumEnd)){ //起始总投注额与截止总投注额 校验长短
        this.$message.warning('总注单数仅支持输入数字，限制长度9');
        return
      }
     }
      if(data.totalBetNumBegin&&data.totalBetNumEnd){
        if(Number(data.totalBetNumBegin)>Number(data.totalBetNumEnd)){ // 起始总投注金额与截止总投注金额  校验大小
          this.$message.warning('起始总注单数应小于等于终止总注单数');
          return
        }
      }
      // 下注起始时间   区间不得超过三个月
      if(data.BetOnTime[0] && data.BetOnTime[1]) {
        let newSdate =  new Date(data.BetOnTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(data.BetOnTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      // 开奖起始时间   区间不得超过三个月
      if(data.TheLotteryTime[0] && data.TheLotteryTime[1]){
        let newSdate =  new Date(data.TheLotteryTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(data.TheLotteryTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      // 结算起始时间   区间不得超过三个月 
      if(data.ClearingTime[0] && data.ClearingTime[1]){
        let newSdate =  new Date(data.ClearingTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(data.ClearingTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      this.loading = true; // 请求接口时loading启用
      this.disabledALL=true; // 控制全局不可编辑
      this.disableControl = true;// 代理商老板禁止输入
      this.$store.state.lc_yingkui_user.searchEdition.disabledSecond = true; // 强制为正 默认二级彩种下拉不可操作
      this.$store.state.lc_yingkui_user.searchEdition.disableWanfa = true; // 强制为正  默认二级玩法下拉不可操作
      //  查询接口
     let that =  this;
      findOrderUser(data).then(resdata => {
          let res = resdata.data;
          if(res.success == 1) {
            this.$store.dispatch("getYingKuiUserInfo",res.content)
              let currentPageSize = 2;
              if(res.content.content.length > 0) {
                currentPageSize = res.content.content.length;
              }else {
                currentPageSize = 2;
              }        
              this.$store.dispatch('getYingKuiUserTableHeight', currentPageSize)  
               this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行      
          }else {
            this.$message.error(res.respMsg)
          }
          this.loading = false; // 接口返回数据时，loading禁用                    
          this.disabledALL=false; // 控制全局不可编辑
          if(!this.$store.state.lc_yingkui_user.searchEdition.parentLotteryId) { // 如果一级彩种没有，二级彩种名称不可编辑
              this.$store.state.lc_yingkui_user.searchEdition.disabledSecond = true; 
              this.$store.state.lc_yingkui_user.searchEdition.disableWanfa = true;
          }else{
              this.$store.state.lc_yingkui_user.searchEdition.disabledSecond = false;
          }
          if(!this.$store.state.lc_yingkui_user.searchEdition.lotteryId) { // 如果二级彩种名称没有,二级玩法不可编辑
              this.$store.state.lc_yingkui_user.searchEdition.disableWanfa = true;
          }else{
              this.$store.state.lc_yingkui_user.searchEdition.disableWanfa = false;
          }
          
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
          if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑          
            this.disableControl = true;
          }else{
            this.disableControl = false;
          }
      }).catch(error => {
          that.$message.error("请求出现异常请联系管理员")
          that.loading = false; // 接口返回数据时，loading禁用                    
          that.disabledALL=false; // 控制全局不可编辑
          that.$store.state.lc_yingkui_user.allData = []; // 列表数据为空
          that.$store.state.lc_yingkui_user.allData_total = 0; // 列表数据总条数为0
          that.$store.state.lc_yingkui_user.currentPageSize = 2; // 列表数据高度为2

          if(!that.$store.state.lc_yingkui_user.searchEdition.parentLotteryId) { // 如果一级彩种没有，二级彩种名称不可编辑
              that.$store.state.lc_yingkui_user.searchEdition.disabledSecond = true; 
              that.$store.state.lc_yingkui_user.searchEdition.disableWanfa = true;
          }else{
              that.$store.state.lc_yingkui_user.searchEdition.disabledSecond = false;
          }
          if(!that.$store.state.lc_yingkui_user.searchEdition.lotteryId) { // 如果二级彩种名称没有,二级玩法不可编辑
              that.$store.state.lc_yingkui_user.searchEdition.disableWanfa = true;
          }else{
              that.$store.state.lc_yingkui_user.searchEdition.disableWanfa = false;
          }         
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
          if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑          
            that.disableControl = true;
          }else{
            that.disableControl = false;
          }
      });

    },
    sortChange(column){ // 排序事件
      if (column.order === 'descending') {
          this.$store.state.lc_yingkui_user.searchEdition.sortType = 'desc';
          this.$store.state.lc_yingkui_user.searchEdition.sortField = column.prop;          
        } else {
          this.$store.state.lc_yingkui_user.searchEdition.sortType = 'asc';
          this.$store.state.lc_yingkui_user.searchEdition.sortField = column.prop;
        }
      this.getList();
    },
    reset() {
      // 重置
      this.$store.state.lc_yingkui_user.searchEdition = {
        agentInfoIds: [""], // 代理商老板id列表
        parentLotteryId: '', // 一级彩种名称  
        playRuleId: '', // 二级玩法Id
        gameUsername: '', // 游戏用户名称
        betNo: '', // 注单号码
        lotteryId: '', // 二级彩种名称
        gameNo: '', // 开奖期号
        totalBetBegin: '', // 起始投注金额
        totalBetEnd: '', // 截止投注金额
        winLossBegin: '', // 起始输赢金额
        winLossEnd: '', // 截止输赢金额
        effectiveAmountBegin: '', // 起始有效投注金额
        effectiveAmountEnd: '', // 截止有效投注金额 
        BetOnTime:[],//下注时间 
        TheLotteryTime:[],//开奖时间
        ClearingTime:[],//结算时间
        enableBetsTime:false,  // 禁用下注时间
        enableOpenTime:true,  // 禁用开奖时间
        enableBillTime:true,  // 禁用结算时间
        disabledSecond: true, // 默认二级彩种下拉不可操作
        disableWanfa: true, // 默认二级玩法下拉不可操作
      }
      let userType = Cookies.get('userType');
      if(userType == '3'||userType == '4'){
        this.$store.state.lc_yingkui_user.searchEdition.agentInfoIds[0] = this.agentInfoIdsArr[0].value;
      }
        // 下注时间默认显示7天
      let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
      let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
      let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
      this.$store.state.lc_yingkui_user.searchEdition.BetOnTime = [state,edate];  
    },
    handleSizeChange(val) {
      this.$store.dispatch("getYingKuiUserPageSize", val);
      this.getList();
    },
    handleCurrentChange(val) {
      if (val != null) {
        this.detail = val;
        this.table_id = val.num;
      }
    },
    exportThis() {
     let data = this.$store.state.lc_yingkui_user.searchEdition;
      if(data.BetOnTime.length == 0 && data.TheLotteryTime.length == 0 && data.ClearingTime.length == 0){
              // 下注时间默认显示7天
                  let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
                  let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
                  let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
                  this.$store.state.lc_yingkui_user.searchEdition.BetOnTime = [state,edate];  
                  this.$store.state.lc_yingkui_user.searchEdition.enableBillTime = true; // 禁用结算时间
                  this.$store.state.lc_yingkui_user.searchEdition.enableOpenTime = true; // 禁用开奖时间
        }
     
      
      if(!validNinedata_twelve(data.effectiveAmountBegin)||!validNinedata_twelve(data.effectiveAmountEnd)){ // 起始有效投注金额与截止有效投注金额 校验长短
        this.$message.warning('有效投注金额仅支持输入数字,金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
      if(data.effectiveAmountBegin&&data.effectiveAmountEnd){
        if(Number(data.effectiveAmountBegin)>Number(data.effectiveAmountEnd)){ // 起始有效投注金额与截止有效投注金额  校验大小
          this.$message.warning('有效投注金额起始金额小于等于终止金额');
          return
        }
      }
      if(!validNinedata_thirteen_negative(data.winLossBegin)||!validNinedata_thirteen_negative(data.winLossEnd)){ // 起始输赢金额与截止输赢金额 校验长短
        this.$message.warning('输赢金额仅支持输入数字,金额的区间 是-100000000.00  - 100000000.00 （单位是元）');
        return
      }
      if(data.winLossBegin&&data.winLossEnd){
        if(Number(data.winLossBegin)>Number(data.winLossEnd)){ // 起始输赢金额与截止输赢金额  校验大小
          this.$message.warning('输赢金额起始金额小于等于终止金额');
          return
        }
     }
      if(!validNinedata_ten(data.totalBetBegin)||!validNinedata_twelve(data.totalBetEnd)){ //起始总投注额与截止总投注额 校验长短
        this.$message.warning('总投注额仅支持输入数字，金额的区间 是 0.01-100000000.00 （单位是元）');
        return
      }
      if(data.totalBetBegin&&data.totalBetEnd){
        if(Number(data.totalBetBegin)>Number(data.totalBetEnd)){ // 起始总投注金额与截止总投注金额  校验大小
          this.$message.warning('总投注额起始金额小于等于终止金额');
          return
        }
      }
      if(!validNinedata_nine(data.totalBetNumBegin)||!validNinedata_nine(data.totalBetNumEnd)){ //起始总投注额与截止总投注额 校验长短
        this.$message.warning('总注单数仅支持输入数字，限制长度9');
        return
      }
      if(data.totalBetNumBegin&&data.totalBetNumEnd){
        if(Number(data.totalBetNumBegin)>Number(data.totalBetNumEnd)){ // 起始总投注金额与截止总投注金额  校验大小
          this.$message.warning('起始总注单数应小于等于终止总注单数');
          return
        }
      }
      // 下注起始时间   区间不得超过三个月
      if(data.BetOnTime[0] && data.BetOnTime[1]) {
        let newSdate =  new Date(data.BetOnTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(data.BetOnTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      // 开奖起始时间   区间不得超过三个月
      if(data.TheLotteryTime[0] && data.TheLotteryTime[1]){
        let newSdate =  new Date(data.TheLotteryTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(data.TheLotteryTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      // 结算起始时间   区间不得超过三个月
      if(data.ClearingTime[0] && data.ClearingTime[1]){
        let newSdate =  new Date(data.ClearingTime[0]).getTime(); // 开始时间的毫秒数
        let newEdate =  new Date(data.ClearingTime[1]).getTime(); // 结束时间的毫秒数
        let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
        if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
            this.$message.warning('起始日期和结束日期的区间不得超过90天');
            return
        }
      }
      // 代理商老板id列表为全部时
      if(data.agentInfoIds[0] == ""){
        data.agentInfoIds = ""
      }
      this.exportType = 'excel'
      this.excelLoading = true
      let that = this;
      // this.updataButtonLoading = true;
      exportReportUser(data).then(res => {      
        let resData = res.data
        if(resData.success == 1) {
          this.$message.success("导出成功（数据为查询条件最新数据）")
          window.location.href = '/api/cp4/common/file/taskDownload?model=ORDER&taskId='+resData.content;
        }else {
          this.$message.error(resData.respMsg)
        }
         this.excelLoading = false;
         this.exportType = 'table'
      }).catch(error => {
          that.$message.error("请求出现异常请联系管理员")
          that.excelLoading = false;
          that.exportType = 'table'
      });
    },
    getDate(type){ // 获取时间控件方法
      let searchEdition =this.$store.state.lc_yingkui_user.searchEdition;
      if(type == '下注时间') {
        if(searchEdition.BetOnTime != null) {
              this.$store.state.lc_yingkui_user.searchEdition.BetOnTime[0] = this.dateForm(searchEdition.BetOnTime[0],1);
              this.$store.state.lc_yingkui_user.searchEdition.BetOnTime[1] = this.dateForm(searchEdition.BetOnTime[1],1);        
              if(this.$store.state.lc_yingkui_user.searchEdition.BetOnTime[0] == this.$store.state.lc_yingkui_user.searchEdition.BetOnTime[1]) {
                this.$store.state.lc_yingkui_user.searchEdition.BetOnTime[1] = this.$store.state.lc_yingkui_user.searchEdition.BetOnTime[1].split(' ')[0] + ' 23:59:59'
              }
              if(this.$store.state.lc_yingkui_user.searchEdition.BetOnTime[1].split(' ')[1] == '00:00:00') {
                this.$store.state.lc_yingkui_user.searchEdition.BetOnTime[1] = this.$store.state.lc_yingkui_user.searchEdition.BetOnTime[1].split(' ')[0] + ' 23:59:59'
              }         
          }else{
            // 下注时间默认显示7天
              this.$store.state.lc_yingkui_user.searchEdition.BetOnTime = [];  // 下注时间清空
               this.$store.state.lc_yingkui_user.searchEdition.ClearingTime=[]; // 结算时间清空
                 this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime=[]; //开奖时间清空
              this.$store.state.lc_yingkui_user.searchEdition.enableBetsTime = false; // 启用下注时间
              this.$store.state.lc_yingkui_user.searchEdition.enableOpenTime = false; // 启用开奖时间
              this.$store.state.lc_yingkui_user.searchEdition.enableBillTime = false; // 启用结算时间
        }
      }else if(type == '开奖时间') {
        if(searchEdition.TheLotteryTime != null) {
          this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime[0] = this.dateForm(searchEdition.TheLotteryTime[0],1);
          this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime[1] = this.dateForm(searchEdition.TheLotteryTime[1],1);        
          if(this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime[0] == this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime[1]) {
            this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime[1] = this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime[1].split(' ')[0] + ' 23:59:59'
          }
          if(this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime[1].split(' ')[1] == '00:00:00') {
            this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime[1] = this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime[1].split(' ')[0] + ' 23:59:59'
          }   
          this.$store.state.lc_yingkui_user.searchEdition.enableBetsTime = true; // 禁用下注时间
          this.$store.state.lc_yingkui_user.searchEdition.enableBillTime = true; // 禁用结算时间       
        }else{
          this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime=[]; //开奖时间清空
          this.$store.state.lc_yingkui_user.searchEdition.BetOnTime = [];  // 下注时间清空
           this.$store.state.lc_yingkui_user.searchEdition.ClearingTime=[]; // 结算时间清空
          this.$store.state.lc_yingkui_user.searchEdition.enableBetsTime = false; // 启用下注时间
          this.$store.state.lc_yingkui_user.searchEdition.enableOpenTime = false; // 启用开奖时间
          this.$store.state.lc_yingkui_user.searchEdition.enableBillTime = false; // 启用结算时间
        }
      }else if(type == '结算时间') {
        if(searchEdition.ClearingTime != null) {
          this.$store.state.lc_yingkui_user.searchEdition.ClearingTime[0] = this.dateForm(searchEdition.ClearingTime[0],1);
          this.$store.state.lc_yingkui_user.searchEdition.ClearingTime[1] = this.dateForm(searchEdition.ClearingTime[1],1);        
          if(this.$store.state.lc_yingkui_user.searchEdition.ClearingTime[0] == this.$store.state.lc_yingkui_user.searchEdition.ClearingTime[1]) {
            this.$store.state.lc_yingkui_user.searchEdition.ClearingTime[1] = this.$store.state.lc_yingkui_user.searchEdition.ClearingTime[1].split(' ')[0] + ' 23:59:59'
          }
          if(this.$store.state.lc_yingkui_user.searchEdition.ClearingTime[1].split(' ')[1] == '00:00:00') {
            this.$store.state.lc_yingkui_user.searchEdition.ClearingTime[1] = this.$store.state.lc_yingkui_user.searchEdition.ClearingTime[1].split(' ')[0] + ' 23:59:59'
          } 
          this.$store.state.lc_yingkui_user.searchEdition.enableBetsTime = true; // 禁用下注时间
          this.$store.state.lc_yingkui_user.searchEdition.enableOpenTime = true; // 禁用开奖时间          
        }else{
          this.$store.state.lc_yingkui_user.searchEdition.ClearingTime=[]; // 结算时间清空
          this.$store.state.lc_yingkui_user.searchEdition.BetOnTime = [];  // 下注时间清空
          this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime=[]; //开奖时间清空
          this.$store.state.lc_yingkui_user.searchEdition.enableBetsTime = false; // 启用下注时间
          this.$store.state.lc_yingkui_user.searchEdition.enableOpenTime = false; // 启用开奖时间
          this.$store.state.lc_yingkui_user.searchEdition.enableBillTime = false; // 启用结算时间
        }
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
            let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
            let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
            let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
            if(this.$store.state.lc_yingkui_user.searchEdition.BetOnTime.length == 0 &&this.$store.state.lc_yingkui_user.searchEdition.TheLotteryTime.length == 0&&this.$store.state.lc_yingkui_user.searchEdition.ClearingTime.length == 0){             
                this.$store.state.lc_yingkui_user.searchEdition.BetOnTime = [state,edate];  
                this.$store.state.lc_yingkui_user.searchEdition.enableOpenTime = true;
                this.$store.state.lc_yingkui_user.searchEdition.enableBillTime = true;
            } 
          }else {
            this.$message.error(resData.respMsg)
          }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
    },
    changeKindAData(val) {
      // 选中一级彩种名称 请求二级彩种数据
      this.$store.state.lc_yingkui_user.kindBData = [];
      this.$store.state.lc_yingkui_user.searchEdition.lotteryId = ""
      this.$store.state.lc_yingkui_user.searchEdition.palyRuleId = ""
      if (!val) {
        this.$store.state.lc_yingkui_user.searchEdition.disabledSecond = true;
        this.$store.state.lc_yingkui_user.searchEdition.disableWanfa = true; // 二级玩法
        
      } else {
        this.$store.state.lc_yingkui_user.searchEdition.disabledSecond = false;
        this.$store.state.lc_yingkui_user.searchEdition.disableWanfa = true; // 二级玩法
         let that = this;
        lotteryDropdownList({parentId: val}).then(res => {
          let resData = res.data
          if(resData.success == 1) {
            this.$store.state.lc_yingkui_user.kindBData = resData.content
          }else {
            this.$message.error(resData.respMsg)
          }
        }).catch(error => {  // 后台返回抛异常处理
            that.$message.error("请求出现异常请联系管理员")      
        });
      }
     
    },
    getSecondVal(val) {
       this.$store.state.lc_yingkui_user.searchEdition.palyRuleId = ""
      if (val == null || val == undefined || val == "" || val == 0) {
        this.$store.state.lc_yingkui_user.searchEdition.disableWanfa = true;
       
      } else {
        let that = this;
       // 二级玩法
          playRuleDropdownList({lotteryId:val}).then(res => { // 初始化二级玩法列表  
          this.$store.state.lc_yingkui_user.palyRuleIdArr =[]
              let resData = res.data;
              if(resData.success == 1) {
                let by = resData.content;
                by.forEach(element => {
                  this.$store.state.lc_yingkui_user.palyRuleIdArr.push(element);
                });
                 this.$store.state.lc_yingkui_user.searchEdition.disableWanfa = false;
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
        this.$store.state.lc_yingkui_user.searchEdition.agentInfoIds = [""]
      }
      if(val[i-1] == ""){
        this.$store.state.lc_yingkui_user.searchEdition.agentInfoIds = [""]
      }
      const index = val.indexOf("")
      if(index != -1){
       val.splice(index, 1) // 排除全选选项
      }        
    },
  },
  created() {
    if (
      this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)
    ) {
      // 更新已关闭的菜单 数组状态
      let newalreadyClose = []; // 定义一个空数组存 过滤左侧点击的数据
      this.$store.getters.alreadyClose.forEach(value => {
        if (value != this.$store.getters.currentView) {
          newalreadyClose.push(value);
        }
      });
      this.$store.dispatch("updataTabClose", newalreadyClose);

      if (this.$store.getters.currentView == this.$route.name) {
        this.$store.state.lc_yingkui_user.allData = [];
        this.$store.state.lc_yingkui_user.allData_total = 0;
        this.$store.state.lc_yingkui_user.page = 1;
        this.$store.state.lc_yingkui_user.size = 10;
         this.$store.state.lc_yingkui_user.searchEdition = {
            agentInfoIds: [""], // 代理商老板id列表
            parentLotteryId: '', // 一级彩种名称  
            playRuleId: '', // 二级玩法Id
            gameUsername: '', // 游戏用户名称
            betNo: '', // 注单号码
            lotteryId: '', // 二级彩种名称
            gameNo: '', // 开奖期号
            totalBetBegin: '', // 起始投注金额
            totalBetEnd: '', // 截止投注金额
            winLossBegin: '', // 起始输赢金额
            winLossEnd: '', // 截止输赢金额
            effectiveAmountBegin: '', // 起始有效投注金额
            effectiveAmountEnd: '', // 截止有效投注金额 
            BetOnTime:[],//下注时间 
            TheLotteryTime:[],//开奖时间
            ClearingTime:[],//结算时间
            enableBetsTime:false,  // 禁用下注时间
            enableOpenTime:true,  // 禁用开奖时间
            enableBillTime:true,  // 禁用结算时间
            disabledSecond: true, // 默认二级彩种下拉不可操作
            disableWanfa: true, // 默认二级玩法下拉不可操作
        }
        this.$store.dispatch("getYingKuiUserTableHeight", 2);
      }
    } else {
      if (this.$store.state.lc_yingkui_user.allData.length > 0) {
        this.getList();
      }
    }
     this.getServerTime() 
  },
  mounted() {
    let that = this;
    // 初始化下拉列表状态
    agentInfoDropdownList().then(res => { // 代理商老板账号
      let resData = res.data
      if(resData.success == 1) {
        let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
        if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
          this.agentInfoIdsArr = resData.content;
          this.$store.state.lc_yingkui_user.searchEdition.agentInfoIds[0] = resData.content[0].value;
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
    }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });

    lotteryDropdownList({parentId: 0}).then(res => { // 一级彩种下拉
      let resData = res.data
      if(resData.success == 1) {
        this.kindAData = resData.content
      }else {
        this.$message.error(resData.respMsg)
      }
    }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
  }
};
</script>
<style lang="scss" scope>
@import '@/styles/tableFold.scss';
.profit-user {
  .tableAutoToggle { 
    max-height: calc(100vh - 320px);
    overflow: auto;
  }
}
@media screen and (max-width: 1460px) { 
  .profit-user {
    .tableAutoToggle { 
      max-height: calc(100vh - 390px)!important;
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
