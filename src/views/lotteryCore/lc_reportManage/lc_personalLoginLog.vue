<template>
  <!-- 工作人员登录日志 -->
  <div class="app-container">
    <!-- 通用搜索框 -->
    <el-form>
      <ul class="heard-search loginLogForm">
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
          <span class="rem_tit">登录用户账号：</span>
          <span class="rem_con">
            <el-input v-model="searchEdition.username" placeholder="请输入查询账号" maxlength="25" :disabled="disabledALL"></el-input>
          </span>
        </li>
        <!-- <li>
          <span class="rem_tit">代理商员工账号：</span>
          <span class="rem_con">
            <el-input v-model="searchEdition.agentUsername" placeholder="请输入代理商员工账号" maxlength="15" :disabled="disabledALL"></el-input>
          </span>
        </li> -->
         <li>
          <span class="rem_tit">操作时间：</span>
          <span class="rem_con">
            <el-date-picker
              v-model="searchEdition.dateTime"
              type="datetimerange"
              range-separator="至"
              ref="dateTime_time"
              :disabled="disabledALL"
              start-placeholder="年/月/日"
              :clearable="false"
              end-placeholder="年/月/日"
              @change="getDate"
            ></el-date-picker>
          </span>
        </li>    
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" :disabled="disabledALL" size="mini" @click="search">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" :disabled="disabledALL" size="mini" @click="resetSearchForm">
            <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" :disabled="disabledALL" size="mini" @click="exportExcel">
            <svg-icon icon-class="daochu" />
          导出</el-button>
      </el-form-item>
    </el-form>
    <!-- 数据表格 -->
    <div class="table-data">
      <!--      <div class="profit-head">统计：下注人数：520    注单总数：5789     总投注额：89546.2     有效投注额：85987.2     输赢：798456.1。</div>-->
      <el-table
        background
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        class="tableAuto216"
        :height="currentPageSize*25 + 34"
        @current-change="handleCurrentChange"
        border
        v-loading="exportType == 'table' ? loading : excelLoading"
        :element-loading-text="exportType == 'table' ? '' : '数据正在导出中.....'"   
      >
        <el-table-column  align="center" label="序号" width="50" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * size + 1}}</span>
          </template>
        </el-table-column>
       <el-table-column prop="agentInfoCode" align="center" label="代理商老板ID" width="100" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.agentInfoCode ? scope.row.agentInfoCode : '-' }}</span>
          </template>
       </el-table-column>
        <el-table-column prop="agentInfoUsername" align="center" label="代理商老板账号" width="130" show-overflow-tooltip >
           <template slot-scope="scope">
            <span>{{ scope.row.agentInfoUsername ? scope.row.agentInfoUsername : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="code" align="center" label="登录用户ID"  show-overflow-tooltip ></el-table-column>
        <el-table-column prop="username" align="center" label="登录用户账号"  show-overflow-tooltip ></el-table-column>

        <el-table-column prop="ip" align="center" label="登录IP" show-overflow-tooltip>
           <template slot-scope="scope">
            <span>{{ scope.row.ip ? scope.row.ip : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="description" align="center" label="IP说明" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.description ? scope.row.description : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="loginType" align="center" label="登录情况" width="80" show-overflow-tooltip>
          <!-- <template slot-scope="scope">{{ scope.row.loginType == 0 ? '登录': scope.row.loginType == 1 ? '登出' : '超时' }}</template> -->
        </el-table-column>
        <el-table-column
          prop="operateTime" align="center" label="操作时间" width="150" show-overflow-tooltip></el-table-column>
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
import { mapState } from "vuex";
import { agentInfoDropdownList } from "@/api/select";
import { exportTable } from '@/api/lotteryCore/lc_reportManage/lc_worker_log'
import Cookies from 'js-cookie'
import {serverTime } from '@/api/login'
export default {
  data() {
    return {
      exportType: 'table' , // 默认为表格导出
      excelLoading: false, // 导出Loading
      ServerTimes:"", // 服务器时间
      disableControl:false,
      disabledALL:false, // 查询接口时，loading 是否可编辑 
      loading: false, // Loading 加载
      agentInfoIdsArr: [], // 代理商老板账号下拉
    };
  },
  computed: {   
    ...mapState({
      tableData: state => state.lc_worker_log.allData,
      allData_total: state => state.lc_worker_log.allData_total,
      currentPageSize: state => state.lc_worker_log.currentPageSize
    }),
    size: {
      get() {
        return this.$store.state.lc_worker_log.size;
      },
      set(item) {
        return item;
      }
    },
    page: {
      get() {
        return this.$store.state.lc_worker_log.page;
      },
      set(item) {
        return item;
      }
    },
    searchEdition: {
      get() {
        return this.$store.state.lc_worker_log.searchEdition;
      },
      set(item) {
        return item;
      }
    }
  },
  methods: {
    search() {
      this.getList();
    },
    getList(val) {
      // 获取表格数据
      if (!val) {
        val = 1;
      }

      this.$store.dispatch("getWorkLogPage", parseInt(val));
      this.loading = true; // 请求接口时loading启用
      this.disabledALL=true, // 查询接口时，loading 是否可编辑 
      this.disableControl = true;
      this.$store.state.lc_worker_log.searchEdition.page = this.page - 1;
      this.$store.state.lc_worker_log.searchEdition.size = this.size;
      let that = this;
      this.$store.dispatch("getWorkLogInfo", this.$store.state.lc_worker_log.searchEdition).then(res => {
        let currentPageSize = 2;
        if (res.content.length > 0) {
          currentPageSize = res.content.length;
        } else {
          currentPageSize = 2;
        }
        let that = this;
        this.$store.dispatch("getWorkLogTableHeight", currentPageSize);
        this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行
        this.loading = false; // 接口返回数据时，loading禁用
        this.disabledALL=false; // 查询接口时，loading 是否可编辑 
        let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
        if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
          this.disableControl = true
        }else{
           this.disableControl = false
        }
        if(this.$store.state.lc_worker_log.searchEdition.agentInfoIds == ""){
          this.$store.state.lc_worker_log.searchEdition.agentInfoIds = [];
          this.$store.state.lc_worker_log.searchEdition.agentInfoIds[0] = ""
        }
      }).catch(error => {
          that.$message.error("请求出现异常请联系管理员")
          // 列表数据为初始状态
          that.$store.state.lc_yingkui_agent.allData = [];  
          that.$store.state.lc_yingkui_agent.allData_total = 0;  
          that.$store.state.lc_yingkui_agent.currentPageSize = 2;  
          that.loading = false; // 接口返回数据时，loading禁用
          that.disabledALL=false; // 查询接口时，loading 是否可编辑 
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
          if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
            that.disableControl = true
          }else{
            that.disableControl = false
          }
          if(that.$store.state.lc_worker_log.searchEdition.agentInfoIds == ""){
            that.$store.state.lc_worker_log.searchEdition.agentInfoIds = [];
            that.$store.state.lc_worker_log.searchEdition.agentInfoIds[0] = ""
          }

      });
    },
    resetSearchForm() {
      // 重置
      this.$store.state.lc_worker_log.searchEdition={
        agentInfoIds:[""], // 代理商id列表
        username: "" ,
        dateTime: []   
      }
      let userType = Cookies.get('userType');
      if(userType == '3'||userType == '4'){
        this.$store.state.lc_worker_log.searchEdition.agentInfoIds[0] = this.agentInfoIdsArr[0].value;
      }
        // 下注时间默认显示7天
      let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
      let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
      let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
      this.$store.state.lc_worker_log.searchEdition.dateTime = [state,edate];
    },
    exportExcel() {
      // 导出
      
      let data = this.$store.state.lc_worker_log.searchEdition;
      this.exportType = 'excel'
      this.excelLoading = true;
      let that = this;
      exportTable(data).then(res => {      
      let resData = res.data
      if(resData.success == 1) {
        this.$message.success("导出成功（数据为查询条件最新数据）")
        window.location.href = '/api/cp4/common/file/taskDownload?model=LOGIN&taskId='+resData.content;
      }else {
        this.$message.error(resData.respMsg)
      }
        this.excelLoading = false;
        this.exportType = 'table';
        if(this.$store.state.lc_worker_log.searchEdition.agentInfoIds == ""){
          this.$store.state.lc_worker_log.searchEdition.agentInfoIds = [];
          this.$store.state.lc_worker_log.searchEdition.agentInfoIds[0] = ""
        }
      }).catch(error => {
          that.$message.error("请求出现异常请联系管理员")
          that.excelLoading = false;
          that.exportType = 'table';
          if(that.$store.state.lc_worker_log.searchEdition.agentInfoIds == ""){
            that.$store.state.lc_worker_log.searchEdition.agentInfoIds = [];
            that.$store.state.lc_worker_log.searchEdition.agentInfoIds[0] = ""
          }
      });
    },
    handleSizeChange(val) {
      console.log("页码：",val)
      this.$store.dispatch("getWorkLogPageSize", val);
      this.getList();
    },
    handleCurrentChange(val) {
      if (val != null) {
        this.detail = val;
        this.personalLogin_table_rowDataId = val.id;
      }
    },
    exportThis() {
      let indexId = this.info_table_rowDataId;
      if (!indexId) {
        this.$message.warning("请选择一条数据!");
        return false;
      }
    },
    getDate() {
    // 获取时间控件方法
      if(this.$store.state.lc_worker_log.searchEdition.dateTime != null) {
          this.$store.state.lc_worker_log.searchEdition.dateTime[0] = this.dateForm(this.$store.state.lc_worker_log.searchEdition.dateTime[0],1);
          this.$store.state.lc_worker_log.searchEdition.dateTime[1] = this.dateForm(this.$store.state.lc_worker_log.searchEdition.dateTime[1],1);        
          if(this.$store.state.lc_worker_log.searchEdition.dateTime[0] == this.$store.state.lc_worker_log.searchEdition.dateTime[1]) {
            this.$store.state.lc_worker_log.searchEdition.dateTime[1] = this.$store.state.lc_worker_log.searchEdition.dateTime[1].split(' ')[0] + ' 23:59:59'
          }
          if(this.$store.state.lc_worker_log.searchEdition.dateTime[1].split(' ')[1] == '00:00:00') {
            this.$store.state.lc_worker_log.searchEdition.dateTime[1] = this.$store.state.lc_worker_log.searchEdition.dateTime[1].split(' ')[0] + ' 23:59:59'
          }         
        }else{
            // 下注时间默认显示7天
          let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*6; // 当前日期减去一天
          let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
          let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
          this.$store.state.lc_worker_log.searchEdition.dateTime = [state,edate];  
      }
    },
    handleChange(val) { // 切换代理商多选 
      let i = val.length; 
      if(val[i-1] == ""&&val.length == 1){
        this.$store.state.lc_worker_log.searchEdition.agentInfoIds = [""]
      }
      if(val[i-1] == ""){
        this.$store.state.lc_worker_log.searchEdition.agentInfoIds = [""]
      }
      const index = val.indexOf("")
      if(index != -1){
        this.$store.state.lc_worker_log.searchEdition.agentInfoIds.splice(index, 1) // 排除全选选项
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
             if(this.$store.state.lc_worker_log.searchEdition.dateTime.length==0){
              this.$store.state.lc_worker_log.searchEdition.dateTime = [state,edate];  
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
        this.$store.state.lc_worker_log.allData = [];
        this.$store.state.lc_worker_log.allData_total = 0;
        this.$store.state.lc_worker_log.page = 1;
        this.$store.state.lc_worker_log.size = 10;
        this.$store.dispatch("getWorkLogTableHeight", 2);
        this.$store.state.lc_worker_log.searchEdition={
        agentInfoIds:[""], // 代理商id列表
        username: "" ,
        dateTime: []   
      }
      }
    } else {
      if (this.$store.state.lc_worker_log.allData.length > 0) {
        this.getList();
      }
    }
    this.getServerTime()// 获取服务器时间
  },
  mounted() {
    let that = this;
    agentInfoDropdownList().then(res => {
      // 代理商老板账号
      let resData = res.data;
      if (resData.success == 1) {
        let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
        if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
          this.agentInfoIdsArr = resData.content;
          this.$store.state.lc_worker_log.searchEdition.agentInfoIds[0] = resData.content[0].value;
          this.disableControl = true;
        }else{
          this.agentInfoIdsArr=[{ value: "",name: "全部"}] // 代理商老板账号下拉列表 
          let by_agentInfoIdsArr = resData.content;   
          by_agentInfoIdsArr.forEach(element => {
              this.agentInfoIdsArr.push(element);
          });
        }
      } else {
        this.$message.error(resData.respMsg);
      }
    }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
  }
};
</script>
<style lang="scss" scope>
.profirForm {
  height: 120px;
  overflow: auto;
  /*overflow-y: scroll;*/
}
.profit-head {
  background-color: #e3e8ec;
  color: #7b7c7c;
  height: 40px;
  padding-left: 10px;
  line-height: 40px;
}
</style>
