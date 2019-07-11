<template>
  <!--注单---注单结算详情管理  -->
  <div class="app-container table-fold zhudan-manage">
    <!-- 通用搜索框 -->
    <el-form v-if="showSearchBox" :model="searchForm">
      <div class="heard-search-box" v-if="showSearchBox">
        <ul class="heard-search">
          <li>
            <span class="rem_tit">代理商老板账号：</span>
            <span class="rem_con">
              <el-select v-model="searchForm.agentInfoIds" multiple collapse-tags placeholder="全部">
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
                <el-select v-model="searchForm.palyRuleId" @change="getRuleVal" :disabled="disabledRule" placeholder="请选择">
                  <el-option v-for="item in palyRuleIdArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">开奖状态：</span>
            <span class="rem_con">
                <el-select v-model="searchForm.prizeStatus" placeholder="全部">
                  <el-option v-for="item in prizeStatusArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
          <li>
            <span class="rem_tit">终端设备：</span>
            <span class="rem_con">
                <el-select v-model="searchForm.device" placeholder="全部">
                  <el-option v-for="item in deviceArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li>
        </ul>
        <ul class="heard-search">
          <li>
            <span class="rem_tit">游戏用户名称：</span>
            <span class="rem_con">
              <el-input v-model="searchForm.gameUsername" placeholder="游戏用户名称 " maxlength="15"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">注单号码：</span>
            <span class="rem_con">
              <el-input v-model="searchForm.betNo"  placeholder="请输入注单号码 " maxlength="15"></el-input>
            </span>
          </li>
          <li>
            <span class="rem_tit">二级彩种名称：</span>
            <span class="rem_con">
                <el-select v-model="searchForm.lotteryId" @change="getSecondVal" :disabled="disabledSecond"  value-key="name" placeholder="请选择">
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
          <li class="rem-li-c" >
            <span class="rem_tit">结算状态：</span>
            <span class="rem_con">
                <el-select v-model="searchForm.settleStatus" placeholder="全部">
                  <el-option v-for="item in settleStatusArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </span>
          </li> 
        </ul>
        <ul class="heard-search">
          <li class="rem-li-a">
            <span class="rem_tit">赔率：</span>
            <span class="rem_con">
              <el-input v-model="searchForm.oddsBegin" placeholder="起始赔率" type="number" maxlength="15"></el-input>
              <span>&nbsp;至&nbsp;</span>
              <el-input v-model="searchForm.oddsEnd" placeholder="终止赔率" type="number" maxlength="15"></el-input>
            </span>
          </li> 
          <li class="rem-li-a">
            <span class="rem_tit">投注金额：</span>
            <span class="rem_con">
                <el-input v-model="searchForm.betAmountBegin" placeholder="起始金额" type="number" maxlength="15"></el-input>
                <span>&nbsp;至&nbsp;</span>
                <el-input v-model="searchForm.betAmountEnd" placeholder="终止金额" type="number" maxlength="15"></el-input>
              </span>
          </li>
          
          <li class="rem-li-a">
            <span class="rem_tit">结算金额：</span>
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
          <li class="rem-li-b">
            <span class="rem_tit">有效投注金额：</span>
            <span class="rem_con">
                <el-input v-model="searchForm.effictiveBegin" placeholder="起始金额" type="number" maxlength="15"></el-input>
                <span>&nbsp;至&nbsp;</span>
                <el-input v-model="searchForm.effictiveEnd" placeholder="终止金额" type="number" maxlength="15"></el-input>
              </span>
          </li>
          <li class="rem-li-a">
            <span class="rem_tit">下注时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="dateTime1"
                type="datetimerange"
                range-separator="至"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('下注时间')"
                :picker-options="pickerOptions0"
              ></el-date-picker>
            </span>
          </li>
          <li class="rem-li-b">
            <span class="rem_tit">开奖时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="dateTime2"
                type="datetimerange"
                range-separator="至"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                @change="getDate('开奖时间')"
                :picker-options="pickerOptions0"
              ></el-date-picker>
            </span>
          </li>    
          <li class="rem-li-b">
            <span class="rem_tit">结算时间：</span>
            <span class="rem_con">
              <el-date-picker
                v-model="dateTime3"
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
          <el-button type="primary" size="mini" icon="el-icon-search" @click="search">查询</el-button>
          <el-button type="primary" size="mini" icon="el-icon-lc-reset" @click="reset">重置</el-button>
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
        @current-change="handleCurrentChange"
        border
           v-loading="loading"
      >
        <el-table-column prop="num" align="center" label="序号" width="50" show-overflow-tooltip>
          
        </el-table-column>
        <el-table-column prop="betNo" align="center" label="注单号码" width="120" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="gameNo" align="center" label="开奖期号" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="parentLotteryName" width="120" align="center" label="一级彩种名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="lotteryName" width="120" align="center" label="二级彩种名称" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="betOnValue" align="center" label="二级玩法" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="betValue" align="center" label="下注选项" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="odds" align="center" label="赔率" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="betAmount" align="center" label="投注额" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="effictiveAmount" width="120" align="center" label="有效投注额" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="winLoss" align="center" label="输赢金额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="settleAmount" align="center" label="结算金额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="betBefore" align="center" width="120" label="下注前余额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="betAfter" align="center" width="120" label="下注后余额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="settleBefore" align="center" width="120" label="结算前余额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="settleAfter" align="center" width="120" label="结算后余额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="prizeStatus" align="center" label="开奖状态" show-overflow-tooltip>
          <template slot-scope="scope">{{scope.row.prizeStatus == 0 ? "已开奖" : "未开奖"}}</template>
        </el-table-column>
        <el-table-column prop="settleStatus" align="center" label="结算状态" show-overflow-tooltip>
          <template slot-scope="scope">{{scope.row.settleStatus == 0 ? "已结算" : "未结算"}}</template>
        </el-table-column>
        <el-table-column prop="gameUsername" align="center" label="游戏用户名称" width="120" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="agentInfoId" align="center" label="代理商老板账号" width="120" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="ip" align="center" label="下注IP" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="device" align="center" label="终端设备" show-overflow-tooltip>
          <template slot-scope="scope">{{scope.row.device == 0 ? "PC" : "H5"}}</template>
        </el-table-column>
        <el-table-column prop="betTime" align="center" label="下注时间" width="150" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="prizeTime" align="center" label="开奖时间" width="150" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="settleTime" align="center" label="结算时间" width="150" show-overflow-tooltip> </el-table-column>
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
  import{ mapState } from 'vuex'
  import{ agentInfoDropdownList,findByCode,lotteryDropdownList } from '@/api/select'
  export default {
    data() {
      return {
        disabledSecond:false, // 二级彩种下拉
        disabledOpen:false, // 开奖期号
        disabledRule:false, // 二级玩法下拉
        loading:false, // Loading 加载
        showSearchBox: true, // 控制查询条件容器显示-隐藏
        showToggleIcon: 'el-icon-caret-top',
        searchForm:{ // 查询条件
          agentInfoIds: [], // 代理商老板id列表
          gameUsername: '', // 游戏用户名称
          device: '', // 终端设备
          betNo: '', // 注单号码
          oddsBegin: '', // 起始赔率
          oddsEnd: '', // 截止赔率
          parentLotteryId: '', // 一级彩种id
          lotteryId: '', // 二级彩种id
          betAmountBegin: '', // 起始投注金额
          betAmountEnd: '', // 截止投注金额
          effictiveBegin: '', // 起始有效投注金额
          effictiveEnd: '', // 截止有效投注金额
          palyRuleId: '', // 二级玩法id
          gameNo: '', // 开奖期号
          settleAmountBegin: '', // 起始结算金额【结算金额】
          settleAmountEnd: '', // 截止结算金额【结算金额】
          winLossBegin: '', // 起始输赢金额
          winLossEnd: '', // 截止输赢金额
          prizeStatus: '', // 开奖状态
          settleStatus: '', // 结算状态
        },
        dateTime1: { // 下注时间
          sdate: "",
          edate: ""
        },
        dateTime2: { // 开奖时间
          sdate: "",
          edate: ""
        },
        dateTime3: { // 结算时间
          sdate: "",
          edate: ""
        },
        kindAData:[], // 一级彩种下拉
        kindBData:[], // 二级彩种下拉
        agentInfoIdsArr: [], // 代理商老板账号下拉
        palyRuleIdArr: [], // 二级玩法下拉
        prizeStatusArr: [], // 开奖状态下拉
        deviceArr: [], // 终端设备下拉
        settleStatusArr: [], // 结算状态下拉
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() >= Date.now();//如果没有后面的-8.64e6就是不可以选择今天的
          }
        },
      };
    },
    computed:{
      ...mapState({
        tableData: state =>state.lc_noteTheSingleDetail.allData,
        allData_total: state => state.lc_noteTheSingleDetail.allData_total,
        currentPageSize:state => state.lc_noteTheSingleDetail.currentPageSize
      }),
      pageSize: {
        get(){
          return this.$store.state.lc_noteTheSingleDetail.pageSize;
        },
        set(item){
          return  item;
        }
      },
      page: {
        get(){
          return this.$store.state.lc_noteTheSingleDetail.page;
        },
        set(item){
          return  item;
        }
      }
    },
    methods: {
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

          this.searchForm.page = this.page - 1;
          this.searchForm.pageSize = this.pageSize;

          this.searchForm.betTimeBegin = this.dateTime1.sdate; // 下注起始时间
          this.searchForm.betTimeEnd = this.dateTime1.edate; // 下注截止时间

          this.searchForm.prizeTimeBegin = this.dateTime2.sdate; // 开奖起始时间
          this.searchForm.prizeTimeEnd = this.dateTime2.edate; // 开奖截止时间

          this.searchForm.settleTimeBegin = this.dateTime3.sdate; // 起始结算时间
          this.searchForm.settleTimeEnd = this.dateTime3.edate; // 截止结算时间
          
          this.$store.dispatch("getDetailPage",parseInt(val))
          this.$store.dispatch("getNoteTheSingleDetailManage",this.searchForm).then(res =>{
            let currentPageSize = 2;
            if(res.content.length > 0) {
              currentPageSize = res.content.length;
            }else {
              currentPageSize = 2;
            }
            this.$store.dispatch('getDetailTableHeight', currentPageSize)
            this.loading = false; // 接口返回数据时，loading禁用
          })

        },
        reset(){  // 重置
          this.searchForm.agentInfoIds = [];
          this.searchForm.gameUsername = '';
          this.searchForm.device = '';
          this.searchForm.betNo = '';
          this.searchForm.oddsBegin = '';
          this.searchForm.oddsEnd = '';
          this.searchForm.parentLotteryId = '';
          this.searchForm.lotteryId = '';
          this.searchForm.betAmountBegin = '';
          this.searchForm.betAmountEnd = '';
          this.searchForm.effictiveBegin = '';
          this.searchForm.effictiveEnd = '';
          this.searchForm.palyRuleId = '';
          this.searchForm.gameNo = '';
          this.searchForm.settleAmountBegin = '';
          this.searchForm.settleAmountEnd = '';
          this.searchForm.winLossBegin = '';
          this.searchForm.winLossEnd = '';
          this.searchForm.prizeStatus = '';
          this.searchForm.settleStatus = '';
          this.dateTime1 = {}
          this.dateTime2 = {}
          this.dateTime3 = {}
        },
        handleCurrentChange(val){
          if(val != null){
            this.info_table_rowDataId = val.id;
          }
        },
        handleSizeChange(val){
          this.$store.dispatch('getDetailPageSize', val);
          this.getList();
        },
        getDate(type) { // 获取时间控件方法
          if(type == '下注时间') {
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
          }else if(type == '开奖时间') {
            if(this.dateTime2 != null) {
              this.dateTime2.sdate = this.dateForm(this.dateTime2[0],1);
              this.dateTime1.edate = this.dateForm(this.dateTime2[1],1);
              if(this.dateTime2.sdate == this.dateTime2.edate) {
                this.dateTime2.edate = this.dateTime2.edate.split(' ')[0] + ' 23:59:59'
              }
              if(this.dateTime2.edate.split(' ')[1] == '00:00:00') {
                this.dateTime2.edate = this.dateTime2.edate.split(' ')[0] + ' 23:59:59'
              }
            }
          }else if(type == '结算时间') {
            if(this.dateTime3 != null) {
              this.dateTime3.sdate = this.dateForm(this.dateTime3[0],1);
              this.dateTime3.edate = this.dateForm(this.dateTime3[1],1);
              if(this.dateTime3.sdate == this.dateTime3.edate) {
                this.dateTime3.edate = this.dateTime3.edate.split(' ')[0] + ' 23:59:59'
              }
              if(this.dateTime3.edate.split(' ')[1] == '00:00:00') {
                this.dateTime3.edate = this.dateTime3.edate.split(' ')[0] + ' 23:59:59'
              }
            }
          }
      },
      changeKindAData(val){ // 选中一级彩种名称 请求二级彩种数据   
        this.kindBData  =[{ id: "",name: "请选择"}]
        if(!val) {
          this.disabledSecond = true;  // // 二级彩种不可编辑
          this.disabledRule = true; // 二级玩法不可编辑
          this.disabledOpen = true;  // 开奖期号不可编辑
        }else{
          lotteryDropdownList({parentId: val}).then(res => {
            let resData = res.data
            if(resData.success == 1) {
              this.kindBData = resData.content
            }else {
              this.$message.error(resData.respMsg)
            }
          })
          this.disabledSecond = false;
        }
            
      },
      // 二级彩种选中事件 请求二级彩种下的玩法数据
      getSecondVal(val){
        if(val == null || val == undefined || val == "" || val == 0){
          this.disabledRule = true;
          this.disabledOpen = true
          this.searchForm.openDateNum = ""; // 开奖期号 V-model数据
          this.searchForm.ruleEnable = ""; // 二级玩法V-model数据 

        }else{
          this.disabledRule = false;
            this.disabledOpen = false
        }
      },
      getRuleVal(val){ // 二级玩法下拉值改变
      
      },
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
          this.$store.state.lc_noteTheSingleDetail.allData = []
          this.$store.state.lc_noteTheSingleDetail.allData_total = 0;
          this.$store.state.lc_noteTheSingleDetail.page = 1;
          this.$store.state.lc_noteTheSingleDetail.pageSize = 10;
          this.$store.dispatch('getDetailTableHeight', 2)
        }
      }else {
        if(this.$store.state.lc_noteTheSingleDetail.allData.length > 0) {
          this.getList()
        }
      }
    },
    mounted() { 
      this.changeKindAData();
      this.disabledRule = true;
      this.disabledOpen = true
      // 初始化一级彩种接口调用数据 
      // 初始化下拉列表状态
      agentInfoDropdownList().then(res => { // 代理商老板账号
        let resData = res.data
        if(resData.success == 1) {
          this.agentInfoIdsArr = resData.content
        }else {
          this.$message.error(resData.respMsg)
        }
      })

      findByCode({code: 'PLAYRULE_CATEGORY,OPENING_PRIZESTATUS,OPENING_SETTLESTATUS,DEVICE'}).then(res => { // 初始化,二级玩法,开奖状态,盘口结算状态,终端设备
        let resData = res.data
        if(resData.success == 1) {
          
          this.palyRuleIdArr = resData.content['PLAYRULE_CATEGORY'];
          this.prizeStatusArr = resData.content['OPENING_PRIZESTATUS'];
          this.settleStatusArr = resData.content['OPENING_SETTLESTATUS'];
          this.deviceArr = resData.content['DEVICE'];
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
.zhudan-manage {
  .tableAutoToggle { 
    max-height: calc(100vh - 350px);
    overflow: auto;
  }
}
@media screen and (max-width: 1460px) { 
  .zhudan-manage {
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
