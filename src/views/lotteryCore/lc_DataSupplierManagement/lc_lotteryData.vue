<template>
  <div class="app-container providerdraw-a-lottery-results-query">
    <!--数据供应商管理 ----开奖数据管理（供应商）-->
    <el-form :model="formInline">
      <!--表格监听数据-->
      <ul class="heard-search">
        <li>
          <span class="rem_tit">数据供应商名称：</span>
          <span class="rem_con">
            <el-select
              placeholder="请选择"
              value-key="name"
              multiple
              collapse-tags
              @change="changeData"
              :disabled="disabledALL"
              v-model="formInline.formInlineDataSuppliers"
            >
              <el-option
                v-for="item in dataSupplierArr"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select>
          </span>
        </li>
        <li></li>
        <li>
          <span class="rem_tit">一级彩种名称：</span>
          <span class="rem_con">
            <el-select
              placeholder="请选择"
              value-key="name"
              v-model="formInline.kindA"
              :disabled="disabledALL"
              @change="changeKindAData"
            >
              <el-option
                v-for="item in firstLotterySelect"
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
              placeholder="请选择"
              value-key="name"
              :disabled="formInline.disabledSecond"
              v-model="formInline.kindB"
            >
              <el-option
                v-for="item in secondLotterySelect"
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
            <el-input placeholder="请输入开奖期号" v-model="formInline.issue" :disabled="disabledALL"></el-input>
          </span>
        </li>
        <li>
          <span class="rem_tit">官方开奖时间：</span>
          <span class="rem_con">
            <el-date-picker
              v-model="formInline.dateTime"
              type="datetimerange"
              ref="formInline_dateTime"
              range-separator="至"
              :clearable="false"
              :disabled="disabledALL"
              @change="getDate"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="search">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="reset">
          <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="checkDetail(515)">
          <svg-icon icon-class="chakanxiangqing" />
          查看详情</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="exportTable">
          <svg-icon icon-class="daochu" />
          导出</el-button>
      </el-form-item>
    </el-form>
    <!-- 数据表格 -->
    <div class="role_table">
      <el-table
        :header-cell-style="tableHeaderColor"
        :cell-style="rowcellClass"
        :key="0"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%;"
        border
        @sort-change='sortChange'
        ref="multipleTable"
        class="tableAuto256"
        :default-sort = "{prop: 'date', order: 'descending'}"
        :height="currentPageSize*25 + 60"
        v-loading="exportType == 'table' ? loading : excelLoading"
       :element-loading-text="exportType == 'table' ? '' : '数据正在导出中.....'"    
      >
        <el-table-column width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column
          type="index"
          label="序号"
          align="center"
          :show-overflow-tooltip="true"
          width="50"
        >
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="数据供应商编号"
          property="supplierInfoCode"
          align="center"
          width="150"
          :show-overflow-tooltip="true"
        ></el-table-column>
        <el-table-column
          label="供应商名称"
          property="supplierInfoName"
          align="center"
          width="120"
          :show-overflow-tooltip="true"
        ></el-table-column>
        <el-table-column
          label="一级彩种名称"
          property="parentLotteryName"
          align="center"
          width="150"
          :show-overflow-tooltip="true"
        ></el-table-column>
        <el-table-column
          label="二级彩种名称"
          property="lotteryName"
          align="center"
          width="150"
          :show-overflow-tooltip="true"
        ></el-table-column>
        <el-table-column
          label="开奖期号"
          property="gameNo"
          align="center"
          :show-overflow-tooltip="true"
        ></el-table-column>
        <el-table-column
          label="官方开奖时间"
          property="openTime"
          sortable='custom'
          align="center"
          width="150"
          :show-overflow-tooltip="true"
        ></el-table-column>
        <el-table-column
          label="开奖号码"
          property="prizeNo"
          align="center"
          :show-overflow-tooltip="true"
        ></el-table-column>
        <el-table-column
          label="开奖状态"
          property="prizeStatus"
          align="center"
          :show-overflow-tooltip="true"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.prizeStatus == 0">未开奖</span>
            <span v-if="scope.row.prizeStatus == 1">已开奖</span>
            <span v-if="scope.row.prizeStatus == -1">-</span>
          </template>  
        </el-table-column>
        <el-table-column
          label="盘口状态"
          property="openingStatus"
          align="center"
          width="150"
          :show-overflow-tooltip="true"
        >   
        <template slot-scope="scope">
            <span v-if="scope.row.openingStatus == -1">-</span>
            <span v-if="scope.row.openingStatus == 0">已就绪，暂未允许投注</span>
            <span v-if="scope.row.openingStatus == 1">已开盘，允许接受投注</span>
            <span v-if="scope.row.openingStatus == 2">已封盘，停止接受投注</span>
            <span v-if="scope.row.openingStatus == 3">已开奖，进入结算环节</span>
            <span v-if="scope.row.openingStatus == 4">已关盘，结算处理完成</span>
          </template>      
      
      
        </el-table-column>
        <el-table-column
          label="数据获取时间"
          property="obtainTime"
          align="center"
          sortable='custom'
          width="150"
          :show-overflow-tooltip="true"
        ></el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="role_pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="getList"
        background
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="datalist_total"
      ></el-pagination>
    </div>
    <!-- 查看详情 -->
    <el-dialog
      :visible.sync="checkDetailDialog"
      title="查看详情"
      width="540px"
      class="dataProvider-Informationdiialog"
      top="18vh"
      :close-on-click-modal="false"
    >
      <div class="dialog-box">
        <div class="check-head">
          <span>开奖期号： {{table_row_data.gameNo}}</span>
          <span>一级彩种名称：{{table_row_data.parentLotteryName}}</span>
          <span>二级彩种名称：{{table_row_data.lotteryName}}</span>
        </div>
        <div class="this-agentData">
          <p class="lottery-head" style="line-height: 22px !important;">当前供应商开奖数据</p>
          <div class="lottery-box">
            <span>{{table_row_data.supplierInfoName}}：</span>
            <span>{{table_row_data.prizeNo}}</span>
            <!-- <span>供应商1：</span><span>7,1,8,10,2,5,3,6,9,4</span> -->
          </div>
        </div>
        <div class="other-agentData">
          <p class="lottery-head" style="line-height: 22px !important;">其他供应商开奖数据</p>
          <div class="other-agentContent">
            <div class="lottery-box" v-for="(itme,index) in detailInfo.detail" :key="index+'rests'">
              <span>{{itme.name}}：</span>
              <span>{{itme.prizeNo}}</span>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { findSupplierPrizeNoList,exportExcel,findPage } from "@/api/lotteryCore/lc_DataSupplierManagement/lc_lotteryData";
import { lotteryDropdownList, findDropdownList,taskDownload } from "@/api/select";
import {serverTime } from '@/api/login'
export default {
  name: "lc_lotteryData",
  computed: {
    ...mapState({
      datalist_total: state => state.lc_lotteryData.datalist_total,
      tableData: state => state.lc_lotteryData.tableData,
      currentPageSize: state => state.lc_lotteryData.currentPageSize, // 列表数据多展示的高度
      firstLotterySelect: state => state.lc_lotteryData.firstLotterySelect,
      secondLotterySelect: state => state.lc_lotteryData.secondLotterySelect,
      dataSupplierArr: state => state.lc_lotteryData.dataSupplierArr,
    }),
    pageSize: {
      get() {
        return this.$store.state.lc_lotteryData.pageSize;
      },
      set(item) {
        return item;
      }
    },
    page: {
      get() {
        return this.$store.state.lc_lotteryData.page;
      },
      set(item) {
        return item;
      }
    },
    formInline: {
      get() {
        return this.$store.state.lc_lotteryData.formInline;
      },
      set(item) {
        return item;
      }
    },
  },
  data() {
    return {
      disabledALL:false, // 控制全局不可编辑
      exportType: 'table' , // 默认为表格导出
      excelLoading: false, // 导出Loading
      loading: false, // Loading 加载
      table_row_data: "", // 当前行所有的数据
      table_id: "", // 当前行的ID
      checkDetailDialog: false,
      detailInfo: {}, // 查看详情数据
      dialogHeight: 0,
      dialogMt: this.dialogMt, // 弹出框上边距
      ServerTimes:"", // 服务器时间
    };
  },
  methods: {
    getDate(val){ // 获取时间控件方法   
          if(val||this.$store.state.lc_lotteryData.formInline.dateTime != null) {
              this.$store.state.lc_lotteryData.formInline.dateTime[0] = this.dateForm(this.$store.state.lc_lotteryData.formInline.dateTime[0],1);
              this.$store.state.lc_lotteryData.formInline.dateTime[1] = this.dateForm(this.$store.state.lc_lotteryData.formInline.dateTime[1],1);        
              if(this.$store.state.lc_lotteryData.formInline.dateTime[0] == this.$store.state.lc_lotteryData.formInline.dateTime[1]) {
                this.$store.state.lc_lotteryData.formInline.dateTime[1] = this.$store.state.lc_lotteryData.formInline.dateTime[1].split(' ')[0] + ' 23:59:59'
              }
              if(this.$store.state.lc_lotteryData.formInline.dateTime[1].split(' ')[1] == '00:00:00') {
                this.$store.state.lc_lotteryData.formInline.dateTime[1] = this.$store.state.lc_lotteryData.formInline.dateTime[1].split(' ')[0] + ' 23:59:59'
              }         
          }else{
              let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*2; // 当前日期减去一天
              let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
              let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
              this.$store.state.lc_lotteryData.formInline.dateTime = [state,edate] 
          }
      },
    exportTable() {
      let data = {
        supplierInfoIds: this.$store.state.lc_lotteryData.formInline.formInlineDataSuppliers, // 供应商id集合
        parentLotteryId: this.$store.state.lc_lotteryData.formInline.kindA, // 一级彩种ID
        lotteryId: this.$store.state.lc_lotteryData.formInline.kindB, // 二级彩种Id
        gameNo: this.$store.state.lc_lotteryData.formInline.issue, // 开奖期号
        prizeTimeBegin: this.$store.state.lc_lotteryData.formInline.dateTime[0]||"", // 起始开奖时间
        prizeTimeEnd:this.$store.state.lc_lotteryData.formInline.dateTime[1]||"" // 截止开奖时间
      }
       // 代理商老板id列表为全部时
      if(data.supplierInfoIds[0] == ""){
        data.supplierInfoIds = ""
      }
      this.exportType = 'excel'
      this.excelLoading = true
      exportExcel(data).then(res => {
        let resData = res.data
        if(resData.success == 1) {
          taskDownload({model: 'SUPPLIER',taskId:resData.content}).then(res => {
            window.location.href = res.request.responseURL
            this.excelLoading = false;
            this.exportType = 'table'
          })
          
        }else {
          this.$message.error(resData.respMsg)
        }
      })
    },
    search() {
      this.getList();
    },
    tableHeaderColor() {
      // 修改row header的背景颜色与内边距
      return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
    },
    rowcellClass() {
      // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
    judgeScree(val) {
      // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + "px";
    },
    getList(val) {
      this.loading = true;
      this.disabledALL=true; // 控制全局不可编辑
      this.$store.state.lc_lotteryData.formInline.disabledSecond = true;
         
      this.table_row_data = ""; // 当前行所有的数据
      this.table_id = "";
      // 查询--分页方法请求
      if (!val) {
        val = 1;
      }
      this.$store.dispatch("getALotteryResultsQueryPage", parseInt(val)); // 保存当前页到全局
      let data = {
        page: val - 1,
        size: this.pageSize,
        parentLotteryId: this.$store.state.lc_lotteryData.formInline.kindA||"",
        lotteryId: this.$store.state.lc_lotteryData.formInline.kindB||"",
        gameNo: this.$store.state.lc_lotteryData.formInline.issue||"",
        prizeTimeBegin:this.$store.state.lc_lotteryData.formInline.dateTime[0],
        prizeTimeEnd:this.$store.state.lc_lotteryData.formInline.dateTime[1],
        supplierInfoIds: this.$store.state.lc_lotteryData.formInline.formInlineDataSuppliers ||null, // 数据供应商
        sortField:this.$store.state.lc_lotteryData.formInline.sortField, 
        sortType:this.$store.state.lc_lotteryData.formInline.sortType,  
      };
       // 代理商老板id列表为全部时
      if(data.supplierInfoIds[0] == ""){
          data.supplierInfoIds = ""
      }
       // 获取列表数据请求方法
      findPage(data).then(res => {
        let resData = res.data;
        if (resData.success == 1) {
            // 列表接口数据请求方法
          let currentPageSize = 2;
          if (resData.content.content.length > 0) {
            currentPageSize = resData.content.content.length;
          } else {
            currentPageSize = 2;
          }
          this.$store.dispatch( "getALotteryResultsQueryTableHeight",currentPageSize); // 设置表格高度
          this.$store.dispatch("getALotteryResultsQueryTableList", resData.content)
          this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行 
         
        } else {
            this.$message.error(resData.respMsg)
        }
        this.loading = false; 
        this.disabledALL=false; // 控制全局不可编辑
        if(!this.$store.state.lc_lotteryData.formInline.kindA){
          this.$store.state.lc_lotteryData.formInline.disabledSecond = true;
        }else{
          this.$store.state.lc_lotteryData.formInline.disabledSecond = false;
        }
      });
    },
    checkDetail(h) {
      // 查看详情
      if (!this.table_id) {
        this.$message.warning("请选择一条数据!");
        return;
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.detailInfo = {
        openDataTime: this.table_row_data.prizeNo, // 开奖号码
        firstLottery: this.table_row_data.parentLotteryName, // 一级彩种名称
        secondLottery: this.table_row_data.lotteryName, // 二级彩种名称
        thisAgentDataName: this.table_row_data.supplierInfoName // 当前供应商名字
      };
      let data = {
        supplierInfoId: this.table_row_data.supplierInfoId,
        lotteryId: this.table_row_data.lotteryId,
        gameNo: this.table_row_data.gameNo
      };
      // 获取供应商开奖数据
      findSupplierPrizeNoList(data).then(res => {
        let resData = res.data;
        if (resData.success == 1) {
          this.detailInfo = resData.content;
          this.checkDetailDialog = true;
        } else {
          this.$message.error(resData.respMsg)
        }
      });
    
    },
    handleSizeChange(val) {
      // 每页多少条数据调整方法
      this.$store.dispatch("getALotteryResultsQueryPageSize", val);
      this.getList();
    },
    handleCurrentChange(val) {
      // 选中一行数据的方法
      if (val) {
        this.table_row_data = val; // 当前行所有的数据
        this.table_id = val.id;
      }
    },
    reset() {
      // 重置搜索数据
      this.$store.state.lc_lotteryData.formInline = { // 查询条件
        formInlineDataSuppliers:[""], // 数据供应商名称多选监听
        disabledSecond: true,
        kindA: "", // 一级彩种
        kindB: "", // 二级彩种
        issue: "", // 期号
        dateTime: [],
        drawALottery: "", // 开奖状态
        takeAPosition: "", // 开盘状态
        sortType:"",//asc升序 desc降序
        sortField:""//排序字段govPrizeTime、beginTime、endTime
    };
      let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*2; // 当前日期减去一天
      let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
      let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
      this.$store.state.lc_lotteryData.formInline.dateTime = [state,edate] 
    },
    changeKindAData(val) {
      // 选中一级彩种名称 请求二级彩种数据
      this.$store.state.lc_lotteryData.secondLotterySelect = [{ value: "",name: "请选择"}];
      this.$store.state.lc_lotteryData.formInline.kindB = "";
      if (val == null || val == undefined || val == "") {
        this.$store.state.lc_lotteryData.formInline.disabledSecond = true;
      } else {
        lotteryDropdownList({ parentId: val }).then(res => {
        // 初始化二级彩种下拉列表
        let resData = res.data;
        if (resData.success == 1) {
         let by_secondLotterySelect = resData.content;
              by_secondLotterySelect.forEach(element => {
                  this.$store.state.lc_lotteryData.secondLotterySelect.push(element);
              });
         this.$store.state.lc_lotteryData.formInline.disabledSecond = false; // 开启二级彩种下拉选框
        } else {
          this.$message.error(resData.respMsg);
        }
      });
      }
      
    },
    changeData(val,e){
      let i = val.length;    
      if(val[i-1] == ""){
         this.$store.state.lc_lotteryData.formInline.formInlineDataSuppliers = [""]
      }
      const index = val.indexOf("")
      if(index != -1){      
        val.splice(index, 1)  // 排除全选选项
      }
    },
    getServerTime(){ // 获取后台服务器时间
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
            let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*2; // 当前日期减去一天
            let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
            let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
            if(this.$store.state.lc_lotteryData.formInline.dateTime.length == 0){
              this.$store.state.lc_lotteryData.formInline.dateTime = [state,edate]
            }
           
          }else {
            this.$message.error(resData.respMsg)
          }
      })
    },
    sortChange(column, prop, order){ // 排序列表
      if (column.order === 'descending') {
          this.$store.state.lc_lotteryData.formInline.sortField = column.prop
          this.$store.state.lc_lotteryData.formInline.sortType = 'desc'
        } else {
          this.$store.state.lc_lotteryData.formInline.sortField = column.prop
          this.$store.state.lc_lotteryData.formInline.sortType = 'asc'
        }
      this.getList();
    }
  },
  created() {
    if (
      this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)
    ) {
      if (this.$store.getters.currentView == this.$route.name) {
        // 更新已关闭的菜单 数组状态
        let newalreadyClose = []; // 定义一个空数组存 过滤左侧点击的数据
        this.$store.getters.alreadyClose.forEach(value => {
          if (value != this.$store.getters.currentView) {
            newalreadyClose.push(value);
          }
        });
        this.$store.dispatch("updataTabClose", newalreadyClose);
        this.$store.state.lc_lotteryData.tableData = [];
        this.$store.state.lc_lotteryData.datalist_total = 0;
        this.$store.state.lc_lotteryData.page = 1;
        this.$store.state.lc_lotteryData.pageSize = 10;
        this.$store.state.lc_lotteryData.formInline = { // 查询条件
          formInlineDataSuppliers:[""], // 数据供应商名称多选监听
          disabledSecond: true,
          kindA: "", // 一级彩种
          kindB: "", // 二级彩种
          issue: "", // 期号
          dateTime: [],
          drawALottery: "", // 开奖状态
          takeAPosition: "", // 开盘状态
          sortType:"",//asc升序 desc降序
          sortField:""//排序字段govPrizeTime、beginTime、endTime
      };
        this.$store.dispatch("getALotteryResultsQueryTableHeight", 2);
      }
    } else {
      if (this.$store.state.lc_lotteryData.tableData.length > 0) {
        this.getList();
      }
    }
  },
  mounted() {
    this.getServerTime(); // 获取后台服务器时间
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight); // 判断屏幕大小进行操作
    });
    window.onresize = () => {
      this.judgeScree(this.dialogHeight);
    };
    lotteryDropdownList({ parentId: 0 }).then(res => {
      this.$store.state.lc_lotteryData.firstLotterySelect = [{ value: "",name: "请选择"}]
      // 初始化一级彩种下拉列表
      let resData = res.data;
      if (resData.success == 1) {
        let by_firstLotterySelect = resData.content;
           by_firstLotterySelect.forEach(element => {
             this.$store.state.lc_lotteryData.firstLotterySelect.push(element);
            });
      } else {
        this.$message.error(resData.respMsg);
      }
    });

    findDropdownList().then(res => {
      this.$store.state.lc_lotteryData.dataSupplierArr = [{ value: "",name: "请选择"}]
      // 初始化数据供应商下拉列表     
      let resData = res.data;
      if (resData.success == 1) {
         let by_dataSupplierArr = resData.content;
           by_dataSupplierArr.forEach(element => {
              this.$store.state.lc_lotteryData.dataSupplierArr.push(element);
            });
      } else {
        this.$message.error(resData.respMsg);
      }
    });
  }
};
</script>
<style lang="scss" scope>
.dataProvider-Informationdiialog .el-dialog {
  overflow: auto;
}
.providerdraw-a-lottery-results-query .takeAPosition-select .el-input {
  /**开盘状态输入框样式调整*/
  width: 160px;
}
.el-message-box__status.el-icon-warning {
  margin-left: 28% !important;
}
.el-message-box__status + .el-message-box__message {
  text-align: center !important;
}
.check-head {
  height: 40px;
  span {
    margin-right: 13px;
  }
}
.this-agentData {
  border: 1px solid gainsboro;

  padding: 5px 10px 0px 10px;
  //  margin-bottom: 10px;
}
.lottery-head {
  //  width: 97%;
  border: 1px solid gainsboro;
  padding: 5px;
  text-align: center;
  height: 30px;
  line-height: 22px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}
.lottery-box {
  height: 35px;
  line-height: 28px;
  text-align: center;
  display: flex;
  span {
    display: inline-block;
  }
  span:first-child {
    width: 100px;
    text-align: center;
  }
  span:last-child {
    display: inline-block;
    border: 1px solid gainsboro;
    height: 25px;
    width: calc(100% - 100px);
    line-height: 25px;
    text-align: center;
  }
}
.other-agentData {
  border: 1px solid gainsboro;
  padding: 5px 10px 0px 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  // .other-agentContent{
  // padding:0px 10px;
  // }
}
.lottery-box {
  // display: flex;
}
.heard-search {
  .el-date-editor.el-range-editor.el-input__inner {
    width: 330px;
  }
}
</style>
