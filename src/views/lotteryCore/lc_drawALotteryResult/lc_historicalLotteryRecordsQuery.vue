<template>
  <div class="app-container historicalLotteryRecordsQuery">
    <!--开奖结果管理----历史开奖记录（系统确认)-->
    <el-form :model="formInline"> <!--表格监听数据-->
      <ul class="heard-search">
        <li>
          <span class="rem_tit">一级彩种名称：</span>
          <span class="rem_con">
          <el-select placeholder="请选择" :disabled="disabledALL" value-key="name" v-model="formInline.kindA" @change="changeKindAData">
            <el-option  v-for="(item,index) in kindAData" :key="item.name+index" :label="item.name" :value="item.value"></el-option>
          </el-select>          
          </span>
        </li>
        <li>
          <span class="rem_tit">二级彩种名称：</span>
          <span class="rem_con">
          <el-select placeholder="请选择" value-key="name" :disabled="formInline.disabledSecond" v-model="formInline.kindB">
            <el-option  v-for="(item,index) in kindBData" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">开奖期号：</span>
          <span class="rem_con"><el-input :disabled="disabledALL" placeholder="请输入开奖期号" maxlength="15" v-model="formInline.issue"></el-input></span>
        </li>
        <li>
          <span class="rem_tit">开奖时间：</span>
          <span class="rem_con">
            <!-- type="daterange" -->
            <el-date-picker
              v-model="formInline.dateTime"
              :disabled="disabledALL"
              type="datetimerange"
              ref="formInline_dateTime"
              range-separator="至"
              start-placeholder="年/月/日"
              :clearable="false"
              end-placeholder="至今"
              @change="getDate"
            >
          </el-date-picker>
          </span>
        </li>
        <li>
          <span class="rem_tit">开奖状态：</span>
          <span class="rem_con">
          <el-select placeholder="全部" value-key="name" :disabled="disabledALL"  v-model="formInline.drawALottery">
            <el-option  v-for="(item,index) in drawALotteryStatu" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">开奖号码：</span>
          <span class="rem_con">
          <el-select placeholder="全部" value-key="name" :disabled="disabledALL"  v-model="formInline.lotterWay">
            <el-option  v-for="(item,index) in lotterWay" :key="index" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="getList('1')">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" :disabled ="disabledALL" size="mini" @click="reset">
          <svg-icon icon-class="zhongzhi" />
          重置</el-button>
      
      </el-form-item>
    </el-form>
    
    <div class="role_table">
      <el-table
        :header-cell-style="tableHeaderColor"
        :cell-style="rowcellClass"
        :key="0"
        :data="tableData"
        highlight-current-row
        ref="multipleTable"
        @current-change="ChangesRowData"
        style="width: 100%;"
        border
        @sort-change='sortChange'
        class="tableAuto256"
        :height="currentPageSize*25 + 60"
        v-loading="loading"
      >   
        <el-table-column width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_rowDataId" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column type="index"  label="序号" align="center" :show-overflow-tooltip="true" width="50">
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column label="一级彩种名称" property="parentLotteryName" width="120" align="center" :show-overflow-tooltip="true" >
        </el-table-column>
        <el-table-column label="二级彩种名称" property="lotteryName" width="120" align="center" :show-overflow-tooltip="true" >
        </el-table-column>
        <el-table-column label="开奖期号" property="gameNo" align="center" :show-overflow-tooltip="true" width="100" >
        </el-table-column>
        <el-table-column label="平台开奖时间" sortable='custom'   property="prizeTime" align="center" width="150" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column label="开奖号码" property="prizeNo" align = "center" :show-overflow-tooltip="true">
           <template slot-scope="scope">
           {{scope.row.prizeNo?  scope.row.prizeNo : '-' }}
          </template>    
        </el-table-column>
        <el-table-column label="开奖状态" property="prizeStatus" align="center" width="100" :show-overflow-tooltip="true" >   
           <template slot-scope="scope">
            <span v-if="scope.row.prizeStatus == 0">未开奖</span>
            <span v-if="scope.row.prizeStatus == 1">已开奖</span>
          </template>    
        </el-table-column>
        <el-table-column label="提交人" property="submitUsername" align="center" width="120" :show-overflow-tooltip="true" >         
        </el-table-column>
        <el-table-column label="最后提交时间" property="submitTime" width="150" align="center" :show-overflow-tooltip="true" >        
        </el-table-column>
        <el-table-column label="审核人" property="auditUsername" align="center" width="120" :show-overflow-tooltip="true" >
        </el-table-column>
         <el-table-column label="最后审核时间" property="auditTime" width="150" align="center" :show-overflow-tooltip="true" >         
        </el-table-column>
         <el-table-column label="更新时间" property="lastModifiedDate" align="center" width="150" :show-overflow-tooltip="true" >
          <!-- <template slot-scope="scope">
            {{ scope.row.remarks?  scope.row.remarks : '-' }}
          </template> -->
        </el-table-column>
      </el-table>
    </div>
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

  </div>
</template>

<script>
  import { mapState } from "vuex";
  import { lotteryDropdownList,findByCode } from '@/api/select'; // 所有的下拉框中的数据接口
  import { findPage} from '@/api/lotteryCore/lc_drawALotteryResult/lc_historicalLotteryRecordsQuery';
  import {serverTime } from '@/api/login'
  export default {
    name: "lc_historicalLotteryRecordsQuery",
    components: {
    
    },
    computed: {
      ...mapState({
        datalist_total: state => state.lc_historicalLotteryRecordsQuery.datalist_total,
        tableData: state => state.lc_historicalLotteryRecordsQuery.tableData,
        currentPageSize: state => state.lc_historicalLotteryRecordsQuery.currentPageSize, // 列表数据多展示的高度 
        kindAData: state => state.lc_historicalLotteryRecordsQuery.kindAData,
        kindBData: state => state.lc_historicalLotteryRecordsQuery.kindBData,
        drawALotteryStatu: state => state.lc_historicalLotteryRecordsQuery.drawALotteryStatu,
        lotterWay: state => state.lc_historicalLotteryRecordsQuery.lotterWay,
      }),
      pageSize: {
        get(){
          return this.$store.state.lc_historicalLotteryRecordsQuery.pageSize;
        },
        set(item){ return  item;}
      },
      page: {
        get(){
          return this.$store.state.lc_historicalLotteryRecordsQuery.page;
        },
        set(item){ return  item; }
      },
      formInline: {
        get(){
          return this.$store.state.lc_historicalLotteryRecordsQuery.formInline;
        },
        set(item){ return  item; }
      }
    },
    data() {
      return {
        ServerTimes:"", // 服务器时间
        disabledALL:false, // 控制全局不可编辑
        loading:false, // Loading 加载       
        table_rowData:"",  // 当前行选中的数据
        table_rowDataId:"", // 当前行的ID
      }
    },
    methods: {
      getDate(val){ // 获取时间
        if(val||this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime != null) {
              this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[0] = this.dateForm(this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[0],1);
              this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[1] = this.dateForm(this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[1],1);        
              if(this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[0] == this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[1]) {
                this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[1] = this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[1].split(' ')[0] + ' 23:59:59'
              }
              if(this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[1].split(' ')[1] == '00:00:00') {
                this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[1] = this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[1].split(' ')[0] + ' 23:59:59'
              }         
          }else{
             
              let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*2; // 当前日期减去7天
          let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
          let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
          this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime = [state,edate] 
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
      getList(val){      
         this.table_rowData = "";
         this.table_rowDataId = "";  // 选中当前行id 清空
        // 查询--分页方法请求
        if (!val) {
          val = 1;
        }         
      
        this.$store.dispatch('getHistoricalRecordsPage',parseInt(val));  // 保存当前页到全局  
         this.$store.state.lc_historicalLotteryRecordsQuery.formInline.issue = this.$store.state.lc_historicalLotteryRecordsQuery.formInline.issue.replace(/\s/g, "") // 前中后去空格
          let data ={
            page: val-1,
            size:this.pageSize,
            parentLotteryId:this.$store.state.lc_historicalLotteryRecordsQuery.formInline.kindA||"",// 一级彩种id
            lotteryId:this.$store.state.lc_historicalLotteryRecordsQuery.formInline.kindB||"", //二级彩种id
            gameNo:this.$store.state.lc_historicalLotteryRecordsQuery.formInline.issue||"", // 开奖期号
            prizeTimeBegin:this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[0], // 开始时间
            prizeTimeEnd:this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime[1], // 结束时间
            prizeStatus:this.$store.state.lc_historicalLotteryRecordsQuery.formInline.drawALottery||"", //开奖状态
            prizeable:this.$store.state.lc_historicalLotteryRecordsQuery.formInline.lotterWay||"", // 开奖号码
            auditStatus:4 ,// 固定查询审核通过的数据  （写死传后台）
            sortField:this.$store.state.lc_historicalLotteryRecordsQuery.formInline.sortField, 
            sortType:this.$store.state.lc_historicalLotteryRecordsQuery.formInline.sortType,   
          }
          if(data.prizeTimeBegin&&data.prizeTimeEnd){
            let newSdate =  new Date(data.prizeTimeBegin).getTime(); // 开始时间的毫秒数
            let newEdate =  new Date(data.prizeTimeEnd).getTime(); // 结束时间的毫秒数
            let tian = 24*60*60*1000*90 ; // 90天的毫秒数           
            if((newEdate-newSdate)>tian){  // 结束时间减去开始时间 大于90天时，
                this.$message.warning('开奖时间的起始日期和结束日期的区间不得超过三个月');
                return
            }
          }
            this.loading = true; // 请求接口时loading启用
            this.disabledALL=true; // 控制全局不可编辑 
            this.$store.state.lc_historicalLotteryRecordsQuery.formInline.disabledSecond = true; // 强制为正 
             let that = this;
           // 查询接口
          findPage(data).then(resdata => {           
              let res = resdata.data;
              if(res.success == 1) {
                  this.$store.dispatch("getHistoricalRecordsTableList",res.content) // 历史开奖记录查询列表【条件查询】
                  let currentPageSize = 2;
                  if(res.content.content.length > 0) {
                    currentPageSize = res.content.content.length;
                  }else {
                    currentPageSize = 2;
                  }               
                  this.$store.dispatch("getHistoricalRecordsTableHeight", currentPageSize); // 设置表格高度
                  this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行
              }else {
                 this.$message.error(res.respMsg)
              }
               this.loading = false; // 接口返回数据时，loading禁用
                  this.disabledALL=false; // 控制全局不可编辑
                  if(this.$store.state.lc_historicalLotteryRecordsQuery.formInline.kindA == "") { // 二级彩种名称是否可编辑
                    this.$store.state.lc_historicalLotteryRecordsQuery.formInline.disabledSecond = true;
                  }else{
                    this.$store.state.lc_historicalLotteryRecordsQuery.formInline.disabledSecond = false;
                  }
          }).catch(error => {  // 后台返回抛异常处理
              that.$message.error("请求出现异常请联系管理员")   
              that.loading = false; // 接口返回数据时，loading禁用
              that.disabledALL=false; // 控制全局不可编辑
              if(that.$store.state.lc_historicalLotteryRecordsQuery.formInline.kindA == "") { // 二级彩种名称是否可编辑
                that.$store.state.lc_historicalLotteryRecordsQuery.formInline.disabledSecond = true;
              }else{
                that.$store.state.lc_historicalLotteryRecordsQuery.formInline.disabledSecond = false;
              }
              that.$store.state.lc_historicalLotteryRecordsQuery.currentPageSize = 2;
              that.$store.state.lc_historicalLotteryRecordsQuery.tableData = [];
              that.$store.state.lc_historicalLotteryRecordsQuery.datalist_total = 0;
      }); 
      },
      handleSizeChange(val) { // 每页多少条数据调整方法
        this.$store.dispatch('getHistoricalRecordsPageSize', val)
        this.getList();
      },
      ChangesRowData(val) { // 选中一行数据的方法
        if(val){
          this.table_rowData = val;
          this.table_rowDataId = val.id; // 选中当前行id
        }
      },
      reset(){ // 重置搜索数据
        this.$store.state.lc_historicalLotteryRecordsQuery.formInline ={ // 查询条件
          disabledSecond:true,
          kindA:"", // 一级彩种
          kindB:"", // 二级彩种
          issue:"", // 期号'
          dateTime:[], // 默认时间      
          drawALottery:"", // 开奖状态       
          lotterWay:"",  // 开奖号码
          sortType:"",//asc升序 desc降序
          sortField:""//排序字段govPrizeTime、beginTime、endTime
        }
        let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*2; // 当前日期减去一天
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
        let edate =  this.dateForm(new Date(this.ServerTimes)).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime = [state,edate]
      },
      changeKindAData(val){ // 选中一级彩种名称 请求二级彩种数据
        this.$store.state.lc_historicalLotteryRecordsQuery.kindBData  =[{ value: "",name: "请选择"}];
        this.$store.state.lc_historicalLotteryRecordsQuery.formInline.kindB = "";
        if(val == null || val == undefined || val == "" || val == 0){
          this.$store.state.lc_historicalLotteryRecordsQuery.formInline.disabledSecond = true;// 二级彩种名称是否可输入
        }else{
           let that = this;
            //  // 二级彩种接口调用数据
          lotteryDropdownList({parentId: val}).then(res => { // 初始化一级彩种列表    
              let resData = res.data;
              if(resData.success == 1) {
                let by = resData.content;
                by.forEach(element => {
                  this.$store.state.lc_historicalLotteryRecordsQuery.kindBData.push(element);
                });
                this.$store.state.lc_historicalLotteryRecordsQuery.formInline.disabledSecond = false; // 二级彩种名称是否可输入
              }else {
                this.$message.error(resData.respMsg)
              }
          }).catch(error => {  // 后台返回抛异常处理
              that.$message.error("请求出现异常请联系管理员")      
          }); 
        }     
      },
      sortChange(column, prop, order){ // 排序列表
        if (column.order === 'descending') {
            this.$store.state.lc_historicalLotteryRecordsQuery.formInline.sortField = column.prop
            this.$store.state.lc_historicalLotteryRecordsQuery.formInline.sortType = 'desc'
          } else {
            this.$store.state.lc_historicalLotteryRecordsQuery.formInline.sortField = column.prop
            this.$store.state.lc_historicalLotteryRecordsQuery.formInline.sortType = 'asc'
          }
        this.getList();
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
              let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*2; // 当前日期减去一天
              let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
              let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
              if(this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime.length == 0){
                this.$store.state.lc_historicalLotteryRecordsQuery.formInline.dateTime = [state,edate]
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
          this.$store.state.lc_historicalLotteryRecordsQuery.tableData = []
          this.$store.state.lc_historicalLotteryRecordsQuery.datalist_total = 0;
          this.$store.state.lc_historicalLotteryRecordsQuery.page = 1;
          this.$store.state.lc_historicalLotteryRecordsQuery.pageSize = 10;
          this.$store.state.lc_historicalLotteryRecordsQuery.formInline = { // 查询条件
            disabledSecond:true,
            kindA:"", // 一级彩种
            kindB:"", // 二级彩种
            issue:"", // 期号'
            dateTime:[], // 默认时间      
            drawALottery:"", // 开奖状态       
            lotterWay:"",  // 开奖号码
            sortType:"",//asc升序 desc降序
            sortField:""//排序字段govPrizeTime、beginTime、endTime
          }
          this.$store.dispatch('getHistoricalRecordsTableHeight', 2)
        }
      }else {
        if(this.$store.state.lc_historicalLotteryRecordsQuery.tableData.length > 0) {         
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
      this.$store.state.lc_historicalLotteryRecordsQuery.kindAData =[ { value: "",name: "请选择"}]
        let resData = res.data;    
        if(resData.success == 1) {      
          let by = resData.content;
          by.forEach(element => {
           this.$store.state.lc_historicalLotteryRecordsQuery.kindAData.push(element);
          }); 
        }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
  
      findByCode({code: "OPENING_PRIZESTATUS,PRIZE_PRIZEABLE"}).then(res => {  // 初始化下拉列表
        this.$store.state.lc_historicalLotteryRecordsQuery.drawALotteryStatu =[{ value: "",name: "全部"}];
        this.$store.state.lc_historicalLotteryRecordsQuery.lotterWay=[{ value: "",name: "全部"}];
        let resData = res.data;
        if(resData.success == 1) {
          let by_drawALotteryStatu = resData.content['OPENING_PRIZESTATUS']; // 初始化 开奖状态;
          let by_lotterWay = resData.content['PRIZE_PRIZEABLE']; // 初始化开奖结果
                  by_drawALotteryStatu.forEach(element => {
                    this.$store.state.lc_historicalLotteryRecordsQuery.drawALotteryStatu.push(element);
                  });
                  by_lotterWay.forEach(element => {
                   this.$store.state.lc_historicalLotteryRecordsQuery.lotterWay.push(element);
                  });    
        }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
    }
  };
</script>
<style >

.dialog-search-details{
  border: none;margin-top: 0px !important;
}

.dialog-search-details li{
  width: 100%;
  margin-bottom: 0px;
   text-align: center;
  /* height: 35px;  */
  
}
.dialog-search-details li span{
  width: 50%;
  display: inline-block;
  text-align: center;
  border: solid 1px #dcdfe6;
   margin: 0px;float: left;
   border-bottom: none;
}
.dialog-search-details li:last-child{
   border-bottom: solid 1px #dcdfe6;
}
.details_tit{
  background-color:#f2f2f2;
  border-right: none !important;
  width: 40% !important;
}
.details_con{
   width: 60% !important;
}

</style>
