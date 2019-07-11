<template>
  <div class="app-container lotteryConfirmed">
    <!--开奖确认提交-->
    <el-form :model="formInline"> <!--表格监听数据-->
      <ul class="heard-search">
        <li>
          <span class="rem_tit">一级彩种名称：</span>
          <span class="rem_con">
          <el-select placeholder="请选择" value-key="name" :disabled="disabledALL" v-model="formInline.parentLotteryId" @change="handleKindAChange">
            <el-option v-for="(item,index) in kindAData" :key="index+item.value" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">二级彩种名称：</span>
          <span class="rem_con">
          <el-select placeholder="请选择" value-key="name"  v-model="formInline.kindB" @change="getSecondVal" :disabled="formInline.disabledSecond">
            <el-option v-for="(item,index) in kindBData" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">开奖期号：</span>
          <span class="rem_con"><el-input :disabled="disabledALL" placeholder="请输入开奖期号" maxlength="15" v-model="formInline.gameNo"></el-input></span>
        </li>
         <li>
          <span class="rem_tit">官方开奖时间：</span>
          <span class="rem_con">
            <el-date-picker
              v-model="formInline.dateTime"
              type="datetimerange"
              :disabled="disabledALL"
              range-separator="至"
              ref="formInline_dateTime"
              @change="getDate"
              :clearable="false"
            >
          </el-date-picker>
          </span>
        </li>
        <li>
          <span class="rem_tit">开奖状态：</span>
          <span class="rem_con">
          <el-select placeholder="全部"  value-key="name" :disabled="disabledALL"  v-model="formInline.prizeStatus">
            <el-option v-for="(item,index) in drawALotteryStatu" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li class="takeAPosition-select">
          <span class="rem_tit">盘口状态：</span>
          <span class="rem_con">
          <el-select placeholder="全部" value-key="name" :disabled="disabledALL"  v-model="formInline.openingStatusVal">
            <el-option v-for="(item,index) in pankouStatus" :key="item.value+index" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li class="multiple-select">
          <span class="rem_tit">开奖审核状态：</span>
          <span class="rem_con">
          <el-select placeholder="全部" multiple  collapse-tags  @change="handleChange"  :disabled="disabledALL"  v-model="formInline.allstate"> 
            <el-option v-for="item in shenheStatus" :key="item.value" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
         <li>
          <span class="rem_tit">无开奖号码：</span>
          <span class="rem_con">
          <el-select placeholder="全部" value-key="name" :disabled="disabledALL"  v-model="formInline.prizeable">
            <el-option v-for="(item,index) in infoResult" :key="item.value+index" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
       
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="getTableData">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button> 
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="reset">
            <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="winningConfrim">
            <svg-icon icon-class="qiyong1" />
          确认开奖提交</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格数据 -->
    <div class="role_table">
      <el-table
        :header-cell-style="tableHeaderColor"
        :cell-style="rowcellClass"
        :key="0"
        :data="tableData"
        ref="multipleTable"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%;"
        border
        class="tableAuto296"
        :height="currentPageSize*25 +52"
        v-loading="loading"
      >      
        <el-table-column width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column width="50" type="index"  label="序号" align="center" :show-overflow-tooltip="true" >
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column width="180" label="一级彩种名称" property="parentLotteryName" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column  width="180" label="二级彩种名称" property="lotteryName" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column width="150" label="开奖期号" property="gameNo" align="center" :show-overflow-tooltip="true"></el-table-column>       
        <el-table-column  width="150" label="官方开奖时间" property="govPrizeTime" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column width="150" label="开奖号码" property="prizeNo" align = "center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
           {{scope.row.prizeNo?  scope.row.prizeNo : '-' }}
          </template>   
        </el-table-column>
        <el-table-column width="170" label="盘口状态" property="openingStatus" align="center" :formatter="setOpeningStatus"  :show-overflow-tooltip="true" >
        </el-table-column>
        <el-table-column width="150" label="开奖状态" property="prizeStatus" align="center" :show-overflow-tooltip="true" >        
          <template slot-scope="scope">
            <span v-if="scope.row.prizeStatus == 0">未开奖</span>
            <span v-if="scope.row.prizeStatus == 1">已开奖</span>
          </template>
        </el-table-column>
        <el-table-column width="150" label="审核状态" property="auditStatus" align="center" :formatter="setAuditStatus"  :show-overflow-tooltip="true" >   
          <!-- <template slot-scope="scope">
            <span v-if="scope.row.auditStatus == 1">未提交,，未审核</span>
            <span v-if="scope.row.auditStatus == 2">已提交，待审核</span>
            <span v-if="scope.row.auditStatus == 3">已驳回，待提交</span>
            <span v-if="scope.row.auditStatus == 4">已审核，已通过</span>
          </template>          -->
        </el-table-column>
        <el-table-column width="150" label="提交人" property="submitUsername" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column width="150" label="最后提交时间" property="submitTime" align="center"  :show-overflow-tooltip="true"></el-table-column>
        <el-table-column width="150" label="审核人" property="auditUsername" align="center"  :show-overflow-tooltip="true"></el-table-column>
        <el-table-column width="150" label="最后审核时间" property="auditTime" align="center"  :show-overflow-tooltip="true"></el-table-column>
        <el-table-column width="150" label="撤销说明" property="remark" align="center"  :show-overflow-tooltip="true">
           <template slot-scope="scope">
           {{scope.row.remark?  scope.row.remark : '-' }}
          </template> 
        </el-table-column>
        <el-table-column width="150" label="驳回说明" property="rejectDesc" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
           {{scope.row.rejectDesc?  scope.row.rejectDesc : '-' }}
          </template> 
        </el-table-column>
        <el-table-column  width="150" label="更新时间" property="lastModifiedDate" align="center" :show-overflow-tooltip="true" >        
        </el-table-column>
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
      >
      </el-pagination>
    </div>
    <!-- 开奖提交 -->
    <el-dialog :visible.sync="submitWinningDialog" title="确认开奖提交" width="700px" class="dataProvidera-adddiialog" top="18vh" :close-on-click-modal="false">
      <div class="dialog-box confrimSubmit">
        <div class="confirm-head">
          <span>开奖期号：{{table_row_data.gameNo}}</span>
          <span>一级彩种名称：{{table_row_data.parentLotteryName}}</span>
          <span>二级彩种名称：{{table_row_data.lotteryName}}</span>
        </div>
        <div class="confrimSubmit-open-data">
          <el-radio-group v-model="radioSubmitWinningData" class="radio-group">
            <div class="suplier">
              <p class="everySuplier">各供应商开奖数据</p>
              <div class="supplier-list-group">              
                <div  class="supplier-list" v-for="(item,index) in supplier" :key="index" >  
                  <el-radio class="radio-title" :label="item.id">{{item.name}}：</el-radio>
                  <p class="supplier-list-p">{{item.prizeNo}}</p>
                </div>             
                <p v-if="supplier.length ==0" style="line-height:35px;text-align: center;">暂无数据</p>
              </div>             
              <div class="input-child">
                <el-radio  :label="revocationData[0].id"  class="radio-title btn-radio-title">手工录入开奖号码：</el-radio>
                <el-input v-model="revocationData_prizeNo" :disabled="radioSubmitWinningData==revocationData[0].id?false:true"></el-input>
              </div>
             
              <div class="input-child">
                <el-radio :label="revocationData[1].id" style="line-height: 10px !important;"  class="radio-title btn-radio-title">撤销当期：</el-radio>
                <el-input  v-model="revocationData_remark" type="textarea" :disabled="radioSubmitWinningData==revocationData[1].id?false:true"></el-input>
              </div>
            </div>
          </el-radio-group>

        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitWinning" size="mini" >提交</el-button>
        <el-button @click="submitWinningDialog = false" size="mini">取消</el-button>
      </span>
    </el-dialog>
    <!-- 确认提交 -->
    <el-dialog :visible.sync="confirmDialog" title="确认提交" width="300px" class="dataProvideradddiialog" top="35vh" :close-on-click-modal="false">
      <p style="text-align:center;">
        是否确认提交？
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="yes" size="mini" :loading="submitloading">确认</el-button>
        <el-button @click="confirmDialog = false" size="mini">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import { lotteryDropdownList,findByCode } from '@/api/select'; // 所有的下拉框中的数据接口
  import {serverTime } from '@/api/login'
  import { findPage,findSupplierPrizeNoList,comfirmPrizeNo} from '@/api/lotteryCore/lc_drawALotteryResult/lc_historicalLotteryRecordsQuery';
  export default {
    name: "lc_lotteryConfirmed",
    components: {

    },
    computed: {
      ...mapState({
        datalist_total: state => state.lc_lotteryConfirmed.datalist_total,
        tableData: state => state.lc_lotteryConfirmed.tableData,
        currentPageSize: state => state.lc_lotteryConfirmed.currentPageSize, // 列表数据多展示的高度
        kindAData: state => state.lc_lotteryConfirmed.kindAData, // 一级彩种下拉选择数据
        kindBData: state => state.lc_lotteryConfirmed.kindBData,// 二级彩种下拉选择数据
        drawALotteryStatu: state => state.lc_lotteryConfirmed.drawALotteryStatu,// 开奖状态选择数据
        shenheStatus: state => state.lc_lotteryConfirmed.shenheStatus,// 开奖审核状态
        pankouStatus: state => state.lc_lotteryConfirmed.pankouStatus, // 盘口状态
        infoResult: state => state.lc_lotteryConfirmed.infoResult,// 开奖号码（暂时缺少接口）
      }),
      //   this.$store.state.lc_lotteryConfirmed.infoResult
      pageSize: {
        get(){
          return this.$store.state.lc_lotteryConfirmed.pageSize;
        },
        set(item){ return  item;}
      },
      page: {
        get(){
          return this.$store.state.lc_lotteryConfirmed.page;
        },
        set(item){ return  item; }
      },
      formInline: {
        get(){
          return this.$store.state.lc_lotteryConfirmed.formInline;
        },
        set(item){ return  item; }
      },
    },
    data() {
      return {
        confirmDialog:false, // 确认提交
        ServerTimes:"", // 服务器时间
        submitloading:false, // 控制不可编辑
        disabledALL:false, // 控制全局不可编辑
        loading:false, // Loading 加载
        radioSubmitWinningData:'', // 监听选中哪个结果数据
        revocationData_prizeNo:'', // 监听手工录入开奖号码数据
        revocationData_remark:'', // 监听撤销当期数据

        submitWinningDialog:false, // 确认开奖提交弹框
        inputOPenNum:'', // 手动录入开奖号码
        disabledThis:true,
        inputData:'',
        revokeThis:'', // 撤销当期
        supplier:[], //各代理商数据
        setsupplier:[], //各代理商数据
        revocationData:[{},{}], //  手工录入开奖号码与撤销当期：
        Allsupplier:[], //所有的各代理商数据
        table_row_data:"",  // 当前行的数据
        table_id:"", // 当前行的ID
        artificial:"",  // 监听各供应商开奖数据
        confirmData:{},// 确认按钮参数
      }
    },
    methods: {
      setOpeningStatus(val){
        let itme = "";
        let pankouStatus = this.$store.state.lc_lotteryConfirmed.pankouStatus;
        pankouStatus.forEach(element => {
          if(element.value == val.openingStatus){
            itme = element.name;
          }
        });
      return itme;
      },
      setAuditStatus(val){
        let itme = "";
        let shenheStatus = this.$store.state.lc_lotteryConfirmed.shenheStatus;
        shenheStatus.forEach(element => {
          if(element.value == val.auditStatus){
            itme = element.name;
          }
        });
      return itme;
      },
      getTableData(){ 
        this.getList();
      },
      getList(val){     
        this.table_row_data = "";
        this.table_id = "";
        this.bottonStatu = "全部";  // 开奖数据的状态----查询时默认全部
        // 查询--分页方法请求
        if (!val) {
          val = 1;
        }     
        this.$store.dispatch('getLotteryConfirmedPage',parseInt(val));  // 保存当前页到全局
        this.$store.state.lc_lotteryConfirmed.formInline.gameNo=this.$store.state.lc_lotteryConfirmed.formInline.gameNo.replace(/\s/g, "") // 前中后去空格
        let data ={
          page: this.page-1,
          size: this.pageSize,
          parentLotteryId: this.$store.state.lc_lotteryConfirmed.formInline.parentLotteryId ||"",// 一级彩种id
          lotteryId: this.$store.state.lc_lotteryConfirmed.formInline.kindB ||"",// 二级彩种id
          gameNo: this.$store.state.lc_lotteryConfirmed.formInline.gameNo || "",// 开奖期号
          govPrizeTimeBegin:this.$store.state.lc_lotteryConfirmed.formInline.dateTime[0],
          govPrizeTimeEnd: this.$store.state.lc_lotteryConfirmed.formInline.dateTime[1],
          prizeStatus: this.$store.state.lc_lotteryConfirmed.formInline.prizeStatus || "",// 开奖状态
          openingStatus: this.$store.state.lc_lotteryConfirmed.formInline.openingStatusVal ||"",// 盘口状态
          auditStatusList: this.$store.state.lc_lotteryConfirmed.formInline.allstate || null,// 开奖审核状态
          prizeable: this.$store.state.lc_lotteryConfirmed.formInline.prizeable || "", // 开奖号码
          sortField:"govPrizeTime" // 默认按官方开奖时间倒序排序
        }
        if(data.auditStatusList[0] == ""){
            data.auditStatusList =  ["1","2","3","4"]
        } 
        if(data.govPrizeTimeBegin&&data.govPrizeTimeEnd){
            let newSdate =  new Date(data.govPrizeTimeBegin).getTime(); // 开始时间的毫秒数
            let newEdate =  new Date(data.govPrizeTimeEnd).getTime(); // 结束时间的毫秒数
            let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
            if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
                this.$message.warning('开奖时间的起始日期和结束日期的区间不得超过三个月');
                return
            }
        }
        this.loading = true; // 请求接口时loading启用 
        this.disabledALL=true; // 控制全局不可编辑
        this.$store.state.lc_lotteryConfirmed.formInline.disabledSecond = true; // 强制为正 
         let that = this;
        // 查询接口
        findPage(data).then(resdata => {           
          let res = resdata.data;
          if(res.success == 1) {
              this.$store.dispatch("getLotteryConfirmedTableList",res.content) // 历史开奖记录查询列表【条件查询】
              let currentPageSize = 2;           
              if(res.content.content.length > 0) {
                currentPageSize = res.content.content.length;
              }else {
                currentPageSize = 2;
              }
              
              this.$store.dispatch("getLotteryConfirmedTableHeight", currentPageSize); // 设置表格高度
              this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行
          }else {             
            this.$message.error(res.respMsg)
          }
              this.loading = false; // 接口返回数据时，loading禁用
              this.disabledALL=false; // 控制全局不可编辑
              if(this.$store.state.lc_lotteryConfirmed.formInline.parentLotteryId =="") { // 二级彩种名称是否可编辑
              
                this.$store.state.lc_lotteryConfirmed.formInline.disabledSecond = true;
              }else{
                this.$store.state.lc_lotteryConfirmed.formInline.disabledSecond = false;
              }
        }).catch(error => {  // 后台返回抛异常处理
            that.$message.error("请求出现异常请联系管理员")   
            that.loading = false; // 接口返回数据时，loading禁用
            that.disabledALL=false; // 控制全局不可编辑
            if(that.$store.state.lc_lotteryConfirmed.formInline.parentLotteryId =="") { // 二级彩种名称是否可编辑
              that.$store.state.lc_lotteryConfirmed.formInline.disabledSecond = true;
            }else{
              that.$store.state.lc_lotteryConfirmed.formInline.disabledSecond = false;
            }
            that.$store.state.lc_lotteryConfirmExamine.currentPageSize = 2;
            that.$store.state.lc_lotteryConfirmExamine.tableData = [];
            that.$store.state.lc_lotteryConfirmExamine.datalist_total = 0;


        }); 
      },
      getDate(val){ // 获取时间
        if(val||this.$store.state.lc_lotteryConfirmed.formInline.dateTime != null) {
          this.$store.state.lc_lotteryConfirmed.formInline.dateTime[0] = this.dateForm(this.$store.state.lc_lotteryConfirmed.formInline.dateTime[0],1);
          this.$store.state.lc_lotteryConfirmed.formInline.dateTime[1] = this.dateForm(this.$store.state.lc_lotteryConfirmed.formInline.dateTime[1],1);        
          if(this.$store.state.lc_lotteryConfirmed.formInline.dateTime[0] == this.$store.state.lc_lotteryConfirmed.formInline.dateTime[1]) {
            this.$store.state.lc_lotteryConfirmed.formInline.dateTime[1] = this.$store.state.lc_lotteryConfirmed.formInline.dateTime[1].split(' ')[0] + ' 23:59:59'
          }
          if(this.$store.state.lc_lotteryConfirmed.formInline.dateTime[1].split(' ')[1] == '00:00:00') {
            this.$store.state.lc_lotteryConfirmed.formInline.dateTime[1] = this.$store.state.lc_lotteryConfirmed.formInline.dateTime[1].split(' ')[0] + ' 23:59:59'
          }         
        }else{
            
          let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去7天
          let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
          let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
          this.$store.state.lc_lotteryConfirmed.formInline.dateTime = [state,edate] 
        }

      },
      reset() { // 重置搜索数据
        this.$store.state.lc_lotteryConfirmed.formInline = {
          disabledSecond:true, // 二级彩种名称是否可编辑
          parentLotteryId:"", // 一级彩种
          kindB:"", // 二级彩种
          gameNo:"", // 开奖期号
          prizeStatus:"", // 开奖状态
          openingStatus:"",  // 盘口状态
          auditStatus:[],  // 开奖审核状态
          prizeable:"",  // 开奖号码
          dateTime:[] ,// 开奖日期    
          openingStatusVal:"2",// 盘口状态默认值
          allstate:["1","3"]
        }
        let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去7天
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
        let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.$store.state.lc_lotteryConfirmed.formInline.dateTime = [state,edate] 

      },
      handleKindAChange(val) { // 一级彩种下拉切换
        this.$store.state.lc_lotteryConfirmed.kindBData = [{ value: "",name: "请选择"}];
        this.$store.state.lc_lotteryConfirmed.formInline.kindB = "";
        if(!val){
          this.$store.state.lc_lotteryConfirmed.formInline.disabledSecond = true; // 二级彩种名称不可编辑
        }else{
          let that = this;
          this.$store.state.lc_lotteryConfirmed.formInline.disabledSecond = false; // 二级彩种名称可编辑
          lotteryDropdownList({parentId:val}).then(res => { // 初始化二级彩种列表
            let resData = res.data;
            if(resData.success == 1) {
              let by = resData.content;
              by.forEach(element => {
                this.$store.state.lc_lotteryConfirmed.kindBData.push(element);
              });
            }
          }).catch(error => {  // 后台返回抛异常处理
              that.$message.error("请求出现异常请联系管理员")      
          });  
         }
   
      },
      getSecondVal(val){
      // this.$store.state.lc_lotteryConfirmed.formInline.issue = "";// 清空开奖期号
      },
      handleSizeChange(val) { // 每页多少条数据调整方法
        this.$store.dispatch('getLotteryConfirmedPageSize', val)
        this.getList();
      },
      handleCurrentChange(val) { // 选中一行数据的方法
        if(val){
          this.table_row_data = val;
          this.table_id = val.id;
        }
      },
      submitWinning(){ // 确认提交
        if(!this.radioSubmitWinningData||this.radioSubmitWinningData== ""){
            this.$message.warning("请选择一条数据再提交");
            return;
        }
        let data = []; // 合并两个数组----把各供应商开奖数据与手工录入开奖号码和撤销当期合成一个数据，
                               //然后再for循环查找与radioSubmitWinningData的值相同的ID，一样的，就把当前id下的对像传给后端   
        data = JSON.parse(JSON.stringify(this.setsupplier))
        this.revocationData[0].prizeNo = this.revocationData_prizeNo;// 监听手工录入开奖号码
        this.revocationData[1].remark = this.revocationData_remark;// 监听撤销说明
        data.push(this.revocationData[0]);
        data.push(this.revocationData[1]);
        let databy =null;
        for(let i =0;i<data.length;i++){
            if(data[i].id==this.radioSubmitWinningData){
                databy = data[i];
            }
        }  
        let info = {
          id:this.table_row_data.id,//开奖确认管理ID
          prizeNo:databy.prizeNo,//开奖号码
          remark:databy.remark||"",//撤销说明
          supplierInfoId:this.radioSubmitWinningData //供应商id【0手动开奖】【-1撤销说明】
        }
        if(this.supplierInfoId == -1 && info.remark == ""){ // 撤销说明
          this.$message.warning("撤销当期不能为空，请输入");
          return;
        }

        if(info.supplierInfoId == 0 && info.prizeNo == ""){ // 手动开奖
          this.$message.warning("手工录入开奖号码不能为空，请输入");
          return;
        }
        if(databy.prizeNo == "未获得数据"){
          this.$message.warning("供应商未获得数据，请重新选择");
          return;
        }
        this.confirmData = info;
        this.confirmDialog = true; 
      },
      yes(){
        this.submitloading = true;
        let that = this;
        //  提交【按钮】
        comfirmPrizeNo(this.confirmData).then(resdata => {   
            let res = resdata.data;           
            if(res.success == 1) {     
                this.submitloading = false;  
                this.submitWinningDialog = false; // 确认开奖提交弹框
                this.$message.success("提交成功")
                this.getList();                   
            }else {
              this.submitloading = false;
              this.$message.error(res.respMsg)
            }
            
        }).catch(error => {  // 后台返回抛异常处理
            that.$message.error("请求出现异常请联系管理员")      
        });
        this.confirmDialog = false;
      },
      winningConfrim() { // 确认开奖提交弹框按钮
        if(!this.table_id){
            this.$message.warning("请选择一条数据");
             return;
        }
       // 判断状态，符合条件才可以展示弹框
        let boleinfo = this.table_row_data.openingStatus=="2"&&this.table_row_data.prizeStatus=="0"&&(this.table_row_data.auditStatus=="1"||this.table_row_data.auditStatus=="3")
      // 正常使用时解除注释
       if(!boleinfo){
              this.$message.warning("请选择盘口状态为”已封盘，停止接受投注“且开奖状态为”未开奖“且审核状态为”未提交，未审核“或者”已驳回，待提交的数据进行操作");
             return;
        }       
        //  供应商【默认查询】接口
        findSupplierPrizeNoList({id:this.table_row_data.id}).then(resdata => {   
            this.supplier= []; // 各供应商开奖数据监听 
            this.setsupplier =[]; // 各供应商开奖数据监听
            this.revocationData=[]; //  手工录入开奖号码与撤销当期：     
            let res = resdata.data;
            if(res.success == 1) {
                this.supplier= []; // 各供应商开奖数据监听
                this.revocationData=[], //  手工录入开奖号码与撤销当期：
                this.radioSubmitWinningData =res.content.supplierInfoId;// 默认监听选中数据
                this.supplier =res.content.supplierInfos;  // 供应商                
                this.revocationData[1]=res.content.cancelVo;// 撤销说明
                this.revocationData_remark = res.content.cancelVo.remark; //监听撤销说明
                this.revocationData[0]=res.content.manualVo; // "手工录入开奖号码"
                this.revocationData_prizeNo = res.content.manualVo.prizeNo; //监听手工录入开奖号码
                this.setsupplier=this.supplier;
                this.submitWinningDialog = true; // 确认开奖提交弹框
                this.submitloading = false;
            }else {
              this.$message.error(res.respMsg)
            }
        }) 
      },   
      publishOK() {  // 确认公布
        if(!this.artificial) {
          this.$message.warning("请选择供应商");
          return;
        }
      },
      tableHeaderColor() {
        // 修改row header的背景颜色与内边距
        return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
      },
      rowcellClass() {
        // 行的cell样式
        return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
      }, 
      handleChange(val,e){
        let i = val.length;    
        if(val[i-1] == ""){
          this.$store.state.lc_lotteryConfirmed.formInline.allstate = [""]
        }
        const index = val.indexOf("")
        if(index != -1){
          val.splice(index, 1) // 排除全选选项
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
              if(this.$store.state.lc_lotteryConfirmed.formInline.dateTime.length == 0){
                this.$store.state.lc_lotteryConfirmed.formInline.dateTime = [state,edate]
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

          this.$store.state.lc_lotteryConfirmed.tableData = []
          this.$store.state.lc_lotteryConfirmed.datalist_total = 0;
          this.$store.state.lc_lotteryConfirmed.page = 1;
          this.$store.state.lc_lotteryConfirmed.pageSize = 10;
          this.$store.state.lc_lotteryConfirmed.formInline = {
          disabledSecond:true, // 二级彩种名称是否可编辑
          parentLotteryId:"", // 一级彩种
          kindB:"", // 二级彩种
          gameNo:"", // 开奖期号
          prizeStatus:"", // 开奖状态
          openingStatus:"",  // 盘口状态
          auditStatus:[],  // 开奖审核状态
          prizeable:"",  // 开奖号码
          dateTime:[] ,// 开奖日期    
          openingStatusVal:"2",// 盘口状态默认值
          allstate:["1","3"]
        }
          this.$store.dispatch('getLotteryConfirmedTableHeight', 2)
        }
      }else {
        if(this.$store.state.lc_lotteryConfirmed.tableData.length > 0) {
          this.getList()
        }
      }
        // 获取当前服务器时间
        this.getServerTime();


    },
     mounted() {
        let that = this;     
       // 初始化下拉列表
      lotteryDropdownList({parentId:'0'}).then(res => { // 初始化一级彩种列表
      this.$store.state.lc_lotteryConfirmed.kindAData=[{ value: "",name: "请选择"}]
        let resData = res.data;
        if(resData.success == 1) {
            let by = resData.content;
            by.forEach(element => {
              this.$store.state.lc_lotteryConfirmed.kindAData.push(element);
            });
        }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
        findByCode({code: "OPENING_PRIZESTATUS,OPENING_OPENINGSTATUS,RIZECONFIRM_AUDITSTATUS,PRIZE_PRIZEABLE"}).then(res => {  // 初始化下拉列表
        this.$store.state.lc_lotteryConfirmed.drawALotteryStatu = [{ value: "",name: "全部"}];
        this.$store.state.lc_lotteryConfirmed.shenheStatus = [{ value: "",name: "全部"}];
        this.$store.state.lc_lotteryConfirmed.pankouStatus = [{ value: "",name: "全部"}];
        this.$store.state.lc_lotteryConfirmed.infoResult = [{ value: "",name: "全部"}];
          let resData = res.data;
          if(resData.success == 1) {
            let by_drawALotteryStatu = resData.content['OPENING_PRIZESTATUS']; // 初始化 开奖状态;
            let by_pankouStatus = resData.content['OPENING_OPENINGSTATUS']; // 初始化盘口状态
            let by_shenheStatus = resData.content['RIZECONFIRM_AUDITSTATUS']; // 初始化审核状态
            let by_infoResult =resData.content['PRIZE_PRIZEABLE']; // 开奖号码
              by_drawALotteryStatu.forEach(element => {
                  this.$store.state.lc_lotteryConfirmed.drawALotteryStatu.push(element);
              });
              by_pankouStatus.forEach(element => {
                  this.$store.state.lc_lotteryConfirmed.pankouStatus.push(element);
              });    
              by_shenheStatus.forEach(element => {
                 this.$store.state.lc_lotteryConfirmed.shenheStatus.push(element);
              }); 
              by_infoResult.forEach(element => {
                  this.$store.state.lc_lotteryConfirmed.infoResult.push(element);
              }); 
          }
        }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });

    }
  };
</script>
<style lang = "scss">
.lotteryConfirmed .el-form .operation-box{
    margin: 10px 0px 10px 0px!important;
}
.providerdraw-a-lottery-results-query .takeAPosition-select .el-input{ /**开盘状态输入框样式调整*/
  width: 160px;
}
.dialog-search-Confirmation{
  border: none;margin-top: 0px;
}
.heard-search-Confirmation{
  width: 100%;
  height: 45vh;
 padding-left: 2.5%;
}
.heard-search-CancellationSingle{
  height: 35vh;
}
.Confirmation-details{
  border: 1px solid #dcdfe6;
  width: 48%;
  float: left;
  margin-left: 0.5%;
  height: 100%;
}
.Confirmation-details p{
  margin-top:10px;
  height: 35px;
  line-height: 35px !important;
  border: 1px solid #dcdfe6;
  text-align: center;
  width: 94%;
  margin-left: 3%;
  margin-bottom: 10px;
}
.serem-radio{
  width: 100%;
  height: 24px;
  line-height: 30px !important;
  padding-left: 30%;
  margin-top: 10px
}
.confirmation-details-div{
  height: 360px;
    overflow: hidden;
    overflow-y: auto;
}
.bottons-statu{
  display:inline-block;
  float: left;
  padding-left: 10px;
  font-size: 12px;
  color: #868585;
  .el-radio-button__inner{
    border: none;
    border-right: #dcdfe6 1px solid;
    border-radius: 0% !important;
    height: 21px;
   }
   .el-radio-button__orig-radio:checked+.el-radio-button__inner{
    background-color: #fff;
    color:blue;
    border-color: #dcdfe6 !important;
    font-weight: bold;
    -webkit-box-shadow: -1px 0 0 0 #dcdfe6;
    box-shadow: -1px 0 0 0 #dcdfe6;

  }
.el-radio-button:first-child .el-radio-button__inner{
   border-left: none;
  }

}
.confrimSubmit{
  /*.el-input.is-disabled .el-input__inner{*/
  /*  background-color: #ff4d51;*/
  /*}*/

  .confirm-head{
    text-align:center;
    height: 35px;
    line-height: 35px;
    border: 1px solid gainsboro;
    span{
      margin-left: 30px;
    }
  }
    .confrimSubmit-open-data{
      margin-top: 10px;
      .suplier{
        margin-bottom: 10px;
        .supplier-list-group{
          padding: 5px 0 8px 0;
          border: 1px solid gainsboro;
          max-height: 300px;
          overflow: hidden;
          overflow-y: auto;
        }
      }
      .supplier-list{
        padding-left: 70px !important;
        line-height: 30px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
      }
      .everySuplier{
         text-align: center;
         border: 1px solid gainsboro;
          border-bottom:none;
          height: 30px;
          line-height: 30px;
      }
      .radio-title{
        width: 150px;
          height: 30px;
          line-height: 30px;
      }
      .supplier-list-p{
        height: 30px;
        border: 1px solid gainsboro;
        width:390px ;
        text-align: center;
        line-height: 30px;
        background-color: #f5f7fa;
      }
      .btn-radio-title{
           height: 30px;
      }
      .radio-group{
         width: 100%;
        .el-radio__label{
         float: right;
        }
        div{
          padding: 2px;
          line-height: 25px;
        }
        .input-child{
          margin-top: 10px;
          padding-left: 70px;
          border: 1px solid gainsboro;
         
          .el-input,.el-textarea__inner{
              width: 390px;
          }
       
        }
        .input-data{
          border: 1px solid gainsboro;
          padding: 12px 0 12px 0;
        }
        .revoke{
          border: 1px solid gainsboro;
          padding: 5px 0 5px 0;
          margin-top: 10px;
        }
      }
    }
  }
.changeColor{
  border: 1px solid red;
  background-color: #DDDDDD;
}
.multiple-select{
  .el-input{
    width: 200px !important;
  }
}
.lotteryConfirmed .el-dialog__wrapper{
  background: #3333!important;
}

</style>
