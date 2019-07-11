<template>
  <!-- 登录日志 -->
  <div class="app-container smAdmin">
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">用户名：</span>
          <span class="rem_con"><el-input v-model="userName" placeholder="请输入用户名"  maxlength="15"></el-input></span>
        </li>
        <li>
          <span class="rem_tit">登录时间：</span>
          <span class="rem_con">
            <el-date-picker 
              v-model="dateTime" 
              type="datetimerange" 
              range-separator="至" 
              start-placeholder="开始日期" 
              end-placeholder="结束日期" 
              @change="getDate"
              :picker-options="pickerOptions0"
            >
            </el-date-picker>
          </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" icon="el-icon-lc-check" size="mini" @click.native.prevent="search">查询</el-button>
        <el-button type="primary" icon=".el-icon-lc-reset" size="mini" @click.native.prevent="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格数据展示 -->
    <div class="admin_table">
      <el-table 
        :header-cell-style="tableHeaderColor" 
        :cell-style="rowcellClass" 
        :key="tableKey" 
        :data="allData" 
        highlight-current-row 
        style="width: 100%;" 
        border 
        class="tableAuto216"
        :height="currentPageSize*25 + 50"
      >
        <el-table-column label="序号" type="index" align="center" width="55" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{scope.$index+(page - 1) * pageSize + 1}} </span>
          </template>
        </el-table-column>
        <el-table-column label="用户编号" prop="userNum" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.userNum ? scope.row.userNum : '-' }} </span>
          </template>
        </el-table-column>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        <el-table-column label="用户名" prop="userName" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.userName ? scope.row.userName : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="登录IP" prop="loginIp" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.loginIp ? scope.row.loginIp : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="IP归属地(国家)" prop="loginIpNation" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.loginIpNation ? scope.row.loginIpNation : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="IP归属地(省)" prop="loginIpProvince" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.loginIpProvince ? scope.row.loginIpProvince : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="IP归属地(市)" prop="loginIpCity" align="center"  width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.loginIpCity ? scope.row.loginIpCity : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="IP归属地(区)" prop="loginIpRegion" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.loginIpRegion ? scope.row.loginIpRegion : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="IP说明" prop="ipDescription" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.ipDescription ? scope.row.ipDescription : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="登录状态" prop="loginStatus" align="center" width="80" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.loginStatus ? scope.row.loginStatus : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="登录时间" prop="loginTime" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.loginTime ? scope.row.loginTime : '-' }} </span>
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
        :page-size="pageSize" 
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
import { validateUserName,validatePwd } from "@/utils/validate";

export default {
  name: "sm_admin",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      userName: "", // 查询条件用户名
      current_click_rowData: null,
      dialogPvVisible: false,
      tableKey: 0,
      total: 0,
      oldPasswordType: 'password',
      newPasswordType: 'password',
      confirmPasswordType: 'password',
      isValidate: false,
      dateTime: { // 查询条件时间范围
        sdate:"",
        edate:""
      },
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() >= Date.now();//如果没有后面的-8.64e6就是不可以选择今天的
        }
      },
      searchTimes:0
    };
  },
  computed: {
    ...mapState({
      allData: state => state.sm_admin.allData,
      allData_total: state => state.sm_admin.allData_total,
      currentPageSize: state => state.sm_admin.currentPageSize
    }),
    pageSize: {
      get(){
        return this.$store.state.sm_admin.pageSize;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.sm_admin.page;
      },
      set(item){
        return  item;
      }
    }
  },
  methods: {
    getList(val) { // 填充表格数据
      if(!val){
        val = 1;
      }
      this.$store.dispatch('getPage',parseInt(val));

      let data = {};
      if(this.dateTime != null) {
        data = {
          userName: this.userName || null,
          page: this.page -1,
          pageSize: this.pageSize,
          startTime: this.dateTime.sdate || null,
          endTime: this.dateTime.edate || null
        };
      }else {
        data = {
          userName: this.userName || null,
          page: this.page,
          pageSize: this.pageSize
        };
      }

      this.$store.dispatch("getAdminData", data).then(res => {
        let currentPageSize = 2;
        if(res.data.data.length > 0) {
          currentPageSize = res.data.data.length;
        }else {
          currentPageSize = 2;
        }
        this.$store.dispatch('getAdminTableHeight', currentPageSize)
      });
    },
    getDate(){ // 获取时间控件方法
      if(this.dateTime != null) {
        this.dateTime.sdate = this.dateForm(this.dateTime[0],1);
        this.dateTime.edate = this.dateForm(this.dateTime[1],1);
        if(this.dateTime.sdate == this.dateTime.edate) {
          this.dateTime.edate = this.dateTime.edate.split(' ')[0] + ' 23:59:59'
        }
        if(this.dateTime.edate.split(' ')[1] == '00:00:00') {
          this.dateTime.edate = this.dateTime.edate.split(' ')[0] + ' 23:59:59'
        }
      }
    },
    showPwd(passtype) { // 显示-隐藏密码
      if(passtype == 1) {
        if (this.oldPasswordType === 'password') {
          this.oldPasswordType = ''
        } else {
          this.oldPasswordType = 'password'
        }
      }else if(passtype == 2) {
        if (this.newPasswordType === 'password') {
          this.newPasswordType = ''
        } else {
          this.newPasswordType = 'password'
        }
      }else if(passtype == 3) {
        if (this.confirmPasswordType === 'password') {
          this.confirmPasswordType = ''
        } else {
          this.confirmPasswordType = 'password'
        }
      }
    },
    search() { // 查询方法
      if(this.userName != '') {
        if(!validateUserName(this.userName)) {
          this.$message.error("仅支持15位中英文,数字");
          return false;
        }
      }
      this.getList()
    },
    reset() { // 重置查询条件
      this.userName = "";
      this.dateTime = {};
    },
    handleSizeChange(val) { // 页码大小变化时
      this.$store.dispatch('getPageSize', val)
      this.getList();
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: rgb(247, 251, 254); padding: 4px 0;text-align:center;";
    }, 
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
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

        this.$store.state.sm_admin.allData = []
        this.$store.state.sm_admin.allData_total = 0;
        this.$store.state.sm_admin.page = 1;
        this.$store.state.sm_admin.pageSize = 10;
        this.$store.dispatch('getAdminTableHeight', 2)
      }
    }else {
      if(this.$store.state.sm_admin.allData.length > 0) {
        this.getList()
      }
    }
  }
};
</script>
