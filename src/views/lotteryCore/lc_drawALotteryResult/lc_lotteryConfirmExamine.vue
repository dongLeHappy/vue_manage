<template>
  <div class="app-container lotteryConfirmed">
    <!-- 遮罩层 mask-layer-->
     <div class="mask-layer" v-show="(this.checkRejectDialog||this.passCheckDialog)==true?true:false"></div>
    <!--开奖确认审核-->
    <el-form :model="formInline"> <!--表格监听数据-->
      <ul class="heard-search">
        <li>
          <span class="rem_tit">一级彩种名称：</span>
          <span class="rem_con">
          <el-select placeholder="请选择" value-key="name" :disabled="disabledALL" v-model="formInline.kindA" @change="changeKindAData">
            <el-option v-for="(item,index) in kindAData" :key="index+item.value" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">二级彩种名称：</span>
          <span class="rem_con">
          <el-select placeholder="请选择" value-key="name"  :disabled="formInline.disabledSecond" v-model="formInline.kindB">
            <el-option v-for="(item,index) in kindBData" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">开奖期号：</span>
          <span class="rem_con"><el-input :disabled="disabledALL"  placeholder="请输入开奖期号" maxlength="15"  v-model="formInline.issue"></el-input></span>
        </li>
        <li>
          <span class="rem_tit">官方开奖时间：</span>
          <span class="rem_con">
            <el-date-picker
              v-model="formInline.dateTime"
              type="datetimerange"
              :disabled="disabledALL"
              :clearable="false"
              ref="formInline_dateTime"
              range-separator="至"
              start-placeholder="年/月/日"
              end-placeholder="年/月/日"
              @change="getDate"
              :picker-options="pickerOptions"
            >
          </el-date-picker>
          </span>
        </li>
        <li>
          <span class="rem_tit">开奖状态：</span>
          <span class="rem_con">
          <el-select placeholder="全部" :disabled="disabledALL" value-key="name"  v-model="formInline.drawALottery">
            <el-option v-for="(item,index) in drawALotteryStatu" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li class="takeAPosition-select">
          <span class="rem_tit">盘口状态：</span>
          <span class="rem_con">
          <el-select placeholder="全部" value-key="name" :disabled="disabledALL"  v-model="formInline.takeAPosition">
            <el-option v-for="(item,index) in takeAPositionStatu" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">开奖审核状态：</span>
          <span class="rem_con">
          <el-select placeholder="全部" value-key="name" :disabled="disabledALL" v-model="formInline.takeAuditInfoval">
            <el-option v-for="item in TheLotteryWay" :key="item.value" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
         <li>
          <span class="rem_tit">有无开奖号码：</span>
          <span class="rem_con">
          <el-select placeholder="全部" value-key="name" :disabled="disabledALL" v-model="formInline.info">
            <el-option v-for="(item,index) in infoResult" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="getList('1')">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="reset">
          <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="examineWinResult(611)">
          <svg-icon icon-class="shouquan" />
          审核开奖结果</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格数据 -->
    <div class="role_table">
      <el-table
        :header-cell-style="tableHeaderColor"
        :cell-style="rowcellClass"
        :key="0"
        :data="tableData"
        highlight-current-row
        @current-change="ChangesRowData"
        style="width: 100%;"
        border
        ref="multipleTable"
        class="tableAuto296"
        :height="currentPageSize*25 +65"
        v-loading="loading"
      >
        <el-table-column width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_rowDataId" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column width="50" type="index"  label="序号" align="center" :show-overflow-tooltip="true" >
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column width="180" label="一级彩种名称" property="parentLotteryName" align="center" :show-overflow-tooltip="true"  >
        </el-table-column>
        <el-table-column  width="180" label="二级彩种名称" property="lotteryName" align="center" :show-overflow-tooltip="true" >
        </el-table-column>
        <el-table-column width="150" label="开奖期号" property="gameNo" align="center" :show-overflow-tooltip="true"  >       
        </el-table-column>       
        <el-table-column  width="150" label="官方开奖时间" property="govPrizeTime" align="center" :show-overflow-tooltip="true">       
        </el-table-column>
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
        <el-table-column width="150" label="审核状态" property="auditStatus" align="center"  :formatter="setAuditStatus" :show-overflow-tooltip="true" >          
        </el-table-column>
        <el-table-column width="150" label="提交人" property="submitUsername" align="center" :show-overflow-tooltip="true" >   
           <template slot-scope="scope">
            {{ scope.row.submitUsername?  scope.row.submitUsername : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="150" label="最后提交时间" property="submitTime" align="center"  :show-overflow-tooltip="true" >  
           <template slot-scope="scope">
            {{ scope.row.submitTime?  scope.row.submitTime : '-' }}
          </template>    
        </el-table-column>
        <el-table-column width="150" label="审核人" property="auditUsername" align="center"  :show-overflow-tooltip="true" > 
            <template slot-scope="scope">
            {{ scope.row.auditUsername?  scope.row.auditUsername : '-' }}
          </template>     
        </el-table-column>
        <el-table-column width="150" label="最后审核时间" property="auditTime" align="center"  :show-overflow-tooltip="true" >   
          <template slot-scope="scope">
            {{ scope.row.auditTime?  scope.row.auditTime : '-' }}
          </template>      
        </el-table-column>
        <el-table-column width="150" label="撤销说明" property="remark" align="center"  :show-overflow-tooltip="true" >   
           <template slot-scope="scope">
            {{ scope.row.remark?  scope.row.remark : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="150" label="驳回说明" property="rejectDesc" align="center" :show-overflow-tooltip="true" >  
           <template slot-scope="scope">
            {{ scope.row.rejectDesc?  scope.row.rejectDesc : '-' }}
          </template>     
        </el-table-column>
        <el-table-column  width="150" label="更新时间" property="lastModifiedDate" align="center" :show-overflow-tooltip="true" > 
            <template slot-scope="scope">
            {{ scope.row.lastModifiedDate?  scope.row.lastModifiedDate : '-' }}
          </template>       
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
    
    <!-- 审核开奖结果 -->
    <el-dialog :visible.sync="examineWinResultDialog" title="审核开奖结果" width="700px" class="dataProvidera-adddiialog" :top="dialogMt" :close-on-click-modal="false">
     
      <div class="dialog-box confrimSubmit">
        <div class="confirm-head">
          <span>开奖期号：{{table_rowData.gameNo}}</span>
          <span>一级彩种名称：{{table_rowData.parentLotteryName}}</span>
          <span>二级彩种名称：{{table_rowData.lotteryName}}</span>
        </div>
        <div class="open-data">
          <el-radio-group disabled v-model="radioSubmitWinningData" class="radio-group">
            <div class="suplier">
              <p class="everySuplier">各供应商开奖数据</p>
              <div class="supplier-list-group">
                  <div class="supplier-list" v-for="(item,index) in supplier" :key="index" >  
                  <el-radio class="radio-title" :label="item.id">{{item.name}}：</el-radio>
                  <p class="supplier-list-p">{{item.prizeNo}}</p>
                </div>     

              </div>           
             <div class="input-child">
                <el-radio  :label="revocationData[0].id"  class="radio-title btn-radio-title">手工录入开奖号码：</el-radio>
                <el-input v-model="revocationData[0].prizeNo" :disabled="true"></el-input>
              </div>
             
              <div class="input-child">
                <el-radio :label="revocationData[1].id"  class="radio-title btn-radio-title">撤销当期：</el-radio>
                <el-input  v-model="revocationData[1].remark" type="textarea" :disabled="true"></el-input>
              </div>

            </div>
          </el-radio-group>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="auditPass" size="mini" >审核通过</el-button>
        <el-button type="primary" @click="auditRejected" size="mini" >审核驳回</el-button>
        <el-button @click="examineWinResultDialog = false" size="mini">取消</el-button>
      </span>
    </el-dialog>
    <!-- 审核通过 -->
    <el-dialog :visible.sync="passCheckDialog" title="审核通过" width="350px" style="padding-top:300px" top="theConfirm" class="showlialog-zindex" :close-on-click-modal="false">
      <p style="text-align:center;">
        是否确定审核通过该数据?
        <!-- <span style="color:red">"{{start.data_Name}}"</span>？ -->
      </p>
      <div slot="footer" class="dialog-footer">
         <el-button type="primary" :loading="buttonLoaDing" @click="confirmPass(148)">确定</el-button>
        <el-button @click="passCheckDialog = false">取 消</el-button>
       
      </div>
    </el-dialog>
    <!-- 审核驳回 -->
    <el-dialog :visible.sync="checkRejectDialog" title="审核驳回"  style="padding-top:100px" class="showlialog-zindex" width="350px" :top="dialogMt" :close-on-click-modal="false">
      <p style="text-align:center;padding-left:30px;">
        是否确定驳回该数据?
        <!-- <span style="color:red">"{{start.data_Name}}"</span>？ -->
      </p>
      <p>
        <span class="dialog-label-item" style="margin-bottom:17px;">
          <span style="color:red">*</span>驳回说明:
        </span>
        <el-input v-model="reject" type="textarea" rows="4" style="width: 200px;" maxlength="100"/>
      </p>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" :loading="buttonLoaDing_b" @click="confirmReject(149)">确定</el-button>
        <el-button @click="checkRejectDialog = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import { lotteryDropdownList,findByCode } from '@/api/select'; // 所有的下拉框中的数据接口
  import { findPage,findSupplierPrizeNoList,auditSuccess,auditReject} from '@/api/lotteryCore/lc_drawALotteryResult/lc_historicalLotteryRecordsQuery';
  import {serverTime } from '@/api/login'
  export default {
    name: "lc_lotteryConfirmExamine",
    components: {},
    computed: {
      ...mapState({
        kindBData: state => state.lc_lotteryConfirmExamine.kindBData,
        datalist_total: state => state.lc_lotteryConfirmExamine.datalist_total,
        tableData: state => state.lc_lotteryConfirmExamine.tableData,
        currentPageSize: state => state.lc_lotteryConfirmExamine.currentPageSize // 列表数据多展示的高度
      }),
      pageSize: {
        get(){
          return this.$store.state.lc_lotteryConfirmExamine.pageSize;
        },
        set(item){ return  item;}
      },
      page: {
        get(){
          return this.$store.state.lc_lotteryConfirmExamine.page;
        },
        set(item){ return  item; }
      },
       formInline: {
        get(){
          return this.$store.state.lc_lotteryConfirmExamine.formInline;
        },
        set(item){ return  item; }
      },
    },
    data() {
      return {
        submitloading:false, // 控制不可编辑
        ServerTimes:"", // 服务器时间
        disabledALL:false, // 控制全局不可编辑
        loading:false, // Loading 加载   
        buttonLoaDing:false, // 按钮Loading 加载   
        buttonLoaDing_b:false, // 按钮Loading 加载   
        reject:'',
        checkRejectDialog:false, // 审核驳回弹框
        passCheckDialog:false, // 审核通过弹框
        examineWinResultDialog:false,  // 审核开奖结果弹框
        radioSubmitWinningData:"",// 监听选中哪个结果数据
        radios:"1",
        theConfirm:0,
        submitWinningDialog:false, // 确认开奖提交弹框
        inputOPenNum:'', // 手动录入开奖号码
        changeData:'', // 禁用input框
        lastList:{
          names:'',
          inputData:'',
          revokeThisName:'',
          revokeThis:''
        },
        disabledThis:true,
        revokeNameLable:'',
        revokeLable:'',
        inputData:'',
        revokeThis:'', // 撤销当期
        supplier:[], //各代理商数据
         revocationData:[{},{}], //  手工录入开奖号码与撤销当期：
        table_rowData:"",  // 当前行的数据
        table_rowDataId:"", // 当前行的ID
        CancellationSingleDialog:false,  // 撤销注单弹框
        artificial:"",  // 监听各供应商开奖数据
        kindAData:[  // 一级彩种下拉选择数据
         { value: "",name: "请选择"}
        ],
        drawALotteryStatu:[  // 开奖状态选择数据
          { value: "",name: "全部"}
        ],
        TheLotteryWay:[  // 开奖审核状态
          { value: "",name: "全部"}
        ],
        takeAPositionStatu:[  // 盘口状态
          { value: "",name: "全部"},
        ],
        infoResult:[  // 开奖号码
          { value: "",name: "全部"}
        ],
        pickerOptions: {
          disabledDate(time) {
            // return time.getTime() > Date.now() - 8.64e6; // 如果没有后面的-8.64e6就是不可以选择今天的
          }
        },
        dialogHeight:0,
        dialogMt:this.dialogMt, // 弹出框上边距
      }
    },
    methods: {
      setOpeningStatus(val){
        let itme = "";
        // let pankouStatus = this.$store.state.lc_lotteryConfirmed.pankouStatus;
        this.takeAPositionStatu.forEach(element => {
          if(element.value == val.openingStatus){
            itme = element.name;
          }
        });
      return itme;
      },
      setAuditStatus(val){
        let itme = "";
       this.TheLotteryWay.forEach(element => {
          if(element.value == val.auditStatus){
            itme = element.name;
          }
        });
      return itme;
      },
      getDate(val){ // 获取时间
         if(val||this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime != null) {
              this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[0] = this.dateForm(this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[0],1);
              this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[1] = this.dateForm(this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[1],1);        
              if(this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[0] == this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[1]) {
                this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[1] = this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[1].split(' ')[0] + ' 23:59:59'
              }
              if(this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[1].split(' ')[1] == '00:00:00') {
                this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[1] = this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[1].split(' ')[0] + ' 23:59:59'
              }         
          }else{
             
              let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去7天
          let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
          let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
          this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime = [state,edate] 
          }
      },
      judgeScree(val) { // 判断屏幕大小进行操作
        let a = document.body.offsetHeight - val;
        this.dialogMt = a / 2 + 'px';
      },
      tableHeaderColor() {
        // 修改row header的背景颜色与内边距
        return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
      },
      rowcellClass() {
        // 行的cell样式
        return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
      },
      getList(val){     
        this.table_rowData = "";
        this.table_rowDataId = "";
        this.bottonStatu = "全部";  //开奖数据的状态----查询时默认全部
        // 查询--分页方法请求
        if (!val) {
          val = 1;
        }
        this.$store.dispatch('getLotteryConfirmExaminePage',parseInt(val));  // 保存当前页到全局    
        let data = {}
        this.$store.state.lc_lotteryConfirmExamine.formInline.issue=this.$store.state.lc_lotteryConfirmExamine.formInline.issue.replace(/\s/g, "") // 前中后去空格
         if(this.$store.state.lc_lotteryConfirmExamine.formInline.takeAuditInfoval ==""){
           data ={
              page: val-1,
              size:this.pageSize,
              parentLotteryId:this.$store.state.lc_lotteryConfirmExamine.formInline.kindA ||"", // 一级彩种
              lotteryId:this.$store.state.lc_lotteryConfirmExamine.formInline.kindB ||"",// 二级彩种
              gameNo:this.$store.state.lc_lotteryConfirmExamine.formInline.issue ||"",// 开奖期号
              govPrizeTimeBegin:this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[0], //start官方开奖时间
              govPrizeTimeEnd:this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[1],// end官方开奖时间
              prizeStatus:this.$store.state.lc_lotteryConfirmExamine.formInline.drawALottery ||"",// 开奖状态
              auditStatusList:["2","3","4"], // 开奖审核状态
              prizeable:this.$store.state.lc_lotteryConfirmExamine.formInline.info ||"", // 开奖号码
              openingStatus:this.$store.state.lc_lotteryConfirmExamine.formInline.takeAPosition ||"" ,// 盘口状态
              sortField:"submitTime" //更具提交时间倒序排序
            } 
         }else {
           data ={
              page: val-1,
              size:this.pageSize,
              parentLotteryId:this.$store.state.lc_lotteryConfirmExamine.formInline.kindA ||"", // 一级彩种
              lotteryId:this.$store.state.lc_lotteryConfirmExamine.formInline.kindB ||"",// 二级彩种
              gameNo:this.$store.state.lc_lotteryConfirmExamine.formInline.issue ||"",// 开奖期号
              govPrizeTimeBegin: this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[0], //start官方开奖时间
              govPrizeTimeEnd:this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime[1], // end官方开奖时间
              prizeStatus:this.$store.state.lc_lotteryConfirmExamine.formInline.drawALottery ||"",// 开奖状态
              auditStatus:this.$store.state.lc_lotteryConfirmExamine.formInline.takeAuditInfoval, // 开奖审核状态
              prizeable:this.$store.state.lc_lotteryConfirmExamine.formInline.info ||"", // 开奖号码
              openingStatus:this.$store.state.lc_lotteryConfirmExamine.formInline.takeAPosition ||"",// 盘口状态
              sortField:"submitTime" //更具提交时间倒序排序
            }
         }
       
        if(data.sdate&&data.edate){
            let newSdate =  new Date(data.sdate).getTime(); // 开始时间的毫秒数
            let newEdate =  new Date(data.edate).getTime(); // 结束时间的毫秒数
            let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
            if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
                this.$message.warning('开奖时间的起始日期和结束日期的区间不得超过三个月');
                return
            }
        }
        this.loading = true; // 请求接口时loading启用
        this.disabledALL=true; // 控制全局不可编辑
        this.$store.state.lc_lotteryConfirmExamine.formInline.disabledSecond = true; // 强制为正 
         let that = this;
        // 查询接口
        findPage(data).then(resdata => {           
            let res = resdata.data;
            if(res.success == 1) {
              this.$store.dispatch("getLotteryConfirmExamineTableList",res.content) // 历史开奖记录查询列表【条件查询】
              let currentPageSize = 2;   
              if(res.content.content.length > 0) {
                currentPageSize = res.content.content.length;
              }else {
                currentPageSize = 2;
              }           
              this.$store.dispatch("getLotteryConfirmExamineTableHeight", currentPageSize); // 设置表格高度
               this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行
            }else {
              this.$message.error(res.respMsg)
            }
            this.loading = false; // 接口返回数据时，loading禁用
            this.disabledALL=false; // 控制全局不可编辑
            if(!this.$store.state.lc_lotteryConfirmExamine.formInline.kindA) { // 二级彩种名称是否可编辑
              this.$store.state.lc_lotteryConfirmExamine.formInline.disabledSecond = true;
            }else{
              this.$store.state.lc_lotteryConfirmExamine.formInline.disabledSecond = false;
            }
        }).catch(error => {  // 后台返回抛异常处理
              that.$message.error("请求出现异常请联系管理员")   
              that.loading = false; // 接口返回数据时，loading禁用
              that.disabledALL=false; // 控制全局不可编辑
              if(!that.$store.state.lc_lotteryConfirmExamine.formInline.kindA) { // 二级彩种名称是否可编辑
                that.$store.state.lc_lotteryConfirmExamine.formInline.disabledSecond = true;
              }else{
                that.$store.state.lc_lotteryConfirmExamine.formInline.disabledSecond = false;
              }
              that.$store.state.lc_lotteryConfirmExamine.currentPageSize = 2;
              that.$store.state.lc_lotteryConfirmExamine.tableData = [];
              that.$store.state.lc_lotteryConfirmExamine.datalist_total = 0;
      });   
      },
      handleSizeChange(val) { // 每页多少条数据调整方法  LotteryConfirmExamine
        this.$store.dispatch('getLotteryConfirmExaminePageSize', val)
        this.getList();
      },
      ChangesRowData(val) { // 选中一行数据的方法
        if(val){
          this.table_rowData = val;
          this.table_rowDataId = val.id;
        }
      },
      examineWinResult(h){  // 审核开奖结果
        this.dialogHeight = h;
        this.judgeScree(this.dialogHeight);
        if(!this.table_rowDataId){
            this.$message.warning("请选择一条数据");
             return;
        }
        // 正常使用时解除注释
        if(this.table_rowData.auditStatus!=2){
                this.$message.warning("请选择审核状态为”已提交，待审核“的数据进行操作");
              return;
          }
           let that = this;
          //  供应商【默认查询】接口
        findSupplierPrizeNoList({id:this.table_rowDataId}).then(resdata => {   
            this.supplier= []; // 各供应商开奖数据监听   
            this.revocationData=[]; //  手工录入开奖号码与撤销当期：     
            let res = resdata.data;
            if(res.success == 1) {
                this.supplier= []; // 各供应商开奖数据监听
                this.revocationData=[], //  手工录入开奖号码与撤销当期：
                this.radioSubmitWinningData =res.content.supplierInfoId;// 默认监听选中数据
                this.supplier =res.content.supplierInfos;  // 供应商
                this.revocationData[1]=res.content.cancelVo;// 撤销说明
                this.revocationData[0]=res.content.manualVo; // "手工录入开奖号码"
                this.examineWinResultDialog = true; // 确认开奖提交弹框
                this.reject = res.content.rejectDesc // 驳回说明
            }else {
              this.$message.error(res.respMsg)
            }
        }).catch(error => {  // 后台返回抛异常处理
            that.$message.error("请求出现异常请联系管理员")      
        }); 
      },
      auditPass(h){  // 审核通过   
        this.passCheckDialog = true;
        this.theConfirm = 310+'px';
        this.buttonLoaDing = false;
      },  
      confirmPass(){ //  确认审核通过
        this.buttonLoaDing = true; // 按钮防多点击
        let data = {
          id:this.table_rowDataId
        }
         let that = this;
        auditSuccess(data).then(response => {
          const datas = response.data
          if(datas.success == 1){
            this.$message.success("审核成功");
            this.getList();
            this.passCheckDialog = false;
            this.examineWinResultDialog = false; // 确认开奖提交弹框
            this.buttonLoaDing = false;// 按钮防多点击
          }else{
            this.$message.error(datas.respMsg);
            this.buttonLoaDing = false;// 按钮防多点击
          }
          this.submitloading = false;  
        }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
        
      },
      auditRejected(){  // 审核驳回
        this.checkRejectDialog = true;  
        this.buttonLoaDing_b = false;
      },
      confirmReject(h){  // 确认驳回审核
       if(this.reject == "" || this.reject == null) {
          this.$message.warning("驳回说明不能为空，请输入");
          return;
        }
        this.buttonLoaDing_b = true; // 按钮防多点击
        let data = {
          id:this.table_rowDataId,
          remark:this.reject
        }
         let that = this;
        auditReject(data).then(response => {
          const datas = response.data
          if(datas.success == 1){
            this.$message.success("驳回成功");
            this.getList();
            this.checkRejectDialog = false;
            this.examineWinResultDialog = false; // 确认开奖提交弹框
            this.buttonLoaDing_b = false; // 按钮防多点击
          }else{
            this.$message.error(datas.respMsg)
            this.buttonLoaDing_b = false; // 按钮防多点击
          }
        }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
      },

      reset(){ // 重置搜索数据
        this.$store.state.lc_lotteryConfirmExamine.formInline ={ // 查询条件
                disabledSecond:true,
                kindA:"", // 一级彩种
                kindB:"", // 二级彩种
                issue:"", // 期号
                dateTime:[],// 开奖日期
                drawALottery:"", // 开奖状态
                takeAPosition:"2",  // 盘口状态
                takeAuditInfoval:"2", //监听开奖审核状态
                info:""  // 开奖号码
              }
        let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
        let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime = [state,edate] 
      },
      changeKindAData(val){ // 选中一级彩种名称 请求二级彩种数据
        this.$store.state.lc_lotteryConfirmExamine.kindBData  =[{ value: "",name: "请选择"}];
        this.$store.state.lc_lotteryConfirmExamine.formInline.kindB = "";
        if(val == null || val == undefined || val == "" || val == 0){
          this.$store.state.lc_lotteryConfirmExamine.formInline.disabledSecond = true;        
        }else{
           let that = this;
            this.$store.state.lc_lotteryConfirmExamine.formInline.disabledSecond = false;              
            lotteryDropdownList({parentId:val}).then(res => { // 初始化二级彩种列表
              let resData = res.data;
              if(resData.success == 1) {
                let by = resData.content;
                by.forEach(element => {
                  this.$store.state.lc_lotteryConfirmExamine.kindBData.push(element);
                });
              }
            }).catch(error => {  // 后台返回抛异常处理
                that.$message.error("请求出现异常请联系管理员")      
            });  
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
              if(this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime.length == 0){
                this.$store.state.lc_lotteryConfirmExamine.formInline.dateTime = [state,edate]
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

          this.$store.state.lc_lotteryConfirmExamine.tableData = []
          this.$store.state.lc_lotteryConfirmExamine.datalist_total = 0;
          this.$store.state.lc_lotteryConfirmExamine.page = 1;
          this.$store.state.lc_lotteryConfirmExamine.pageSize = 10;
          this.$store.state.lc_lotteryConfirmExamine.formInline ={ // 查询条件
            disabledSecond:true,
            kindA:"", // 一级彩种
            kindB:"", // 二级彩种
            issue:"", // 期号
            dateTime:[],// 开奖日期
            drawALottery:"", // 开奖状态
            takeAPosition:"2",  // 盘口状态
            takeAuditInfoval:"2", //监听开奖审核状态
            info:""  // 开奖号码
          }
          this.$store.dispatch('getLotteryConfirmExamineTableHeight', 2)
        }
      }else {
        if(this.$store.state.lc_lotteryConfirmExamine.tableData.length > 0) {
          this.getList()
        }
      }
      // 获取当前服务器时间
        this.getServerTime();
    },
    mounted() {
      this.$nextTick(() => {
        this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
      })
      window.onresize = () =>{
        this.judgeScree(this.dialogHeight);
      };
       let that = this;
          // 初始化下拉列表
      lotteryDropdownList({parentId:'0'}).then(res => { // 初始化一级彩种列表
        let resData = res.data;
        if(resData.success == 1) {
            let by = resData.content;
            by.forEach(element => {
              this.kindAData.push(element);
            });
        }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });

        findByCode({code: "OPENING_PRIZESTATUS,OPENING_OPENINGSTATUS,RIZECONFIRM_AUDITSTATUS,PRIZE_PRIZEABLE"}).then(res => {  // 初始化下拉列表
          let resData = res.data;
          if(resData.success == 1) {
            let by_drawALotteryStatu = resData.content['OPENING_PRIZESTATUS']; // 初始化 开奖状态;
            let by_takeAPositionStatu = resData.content['OPENING_OPENINGSTATUS']; // 初始化盘口状态
            let by_TheLotteryWay = resData.content['RIZECONFIRM_AUDITSTATUS']; // 初始化审核状态
            let by_infoResult =resData.content['PRIZE_PRIZEABLE']; // 开奖号码
              by_drawALotteryStatu.forEach(element => {
                  this.drawALotteryStatu.push(element);
              });
              by_takeAPositionStatu.forEach(element => {
                  this.takeAPositionStatu.push(element);
              });    
              by_TheLotteryWay.forEach(element => {
                if(element.value != "1"){
                  this.TheLotteryWay.push(element);
                }
              }); 
              by_infoResult.forEach(element => {
                  this.infoResult.push(element);
              });
              this.$store.state.lc_lotteryConfirmExamine.formInline.takeAPosition="2"
             
          }
        }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
    }
  };
</script>
<style lang = "scss">
.dataProvidera-adddiialog,.dataProvideradddiialog{
z-index: 1040 !important;
}
.showlialog-zindex{
 z-index: 1200 !important;
}
.showlialog-zindex p{
  margin-left: -35px; 
  
}
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
    height: 35px;
    line-height: 35px;
    border: 1px solid gainsboro;
    span{
      margin-left: 30px;
    }
  }
    .open-data{
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
        line-height:30px;
      }
      .everySuplier{
         text-align: center;
         border: 1px solid gainsboro;
          border-bottom:none;
          height: 30px;
          line-height: 30px;
      }
      .open-data-content{
        text-align: center;
        line-height: 50px;
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
</style>
