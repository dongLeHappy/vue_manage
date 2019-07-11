<template>
  <!-- 全平台/游戏用户管理 -->
  <div class="app-container table-fold ag_gameuse_manage">
    <el-form v-show="showSearchBox">
      <ul class="heard-search">
        <li>
          <span class="rem_tit">代理商老板账号：</span>
          <span class="rem_con">
            <el-select
              v-model="searchEdition.agentInfoIds"
              multiple
              collapse-tags
              placeholder="全部"
              @change="handleChange"
              :disabled="agent_disableControl"
            >
              <el-option
                v-for="item in agentBossAccounts"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">游戏用户名称：</span>
          <span class="rem_con">
            <el-input v-model="searchEdition.username" placeholder="请输入游戏用户名称" maxlength="25" :disabled="disableControl"/>
          </span>
        </li>
        <li>
          <span class="rem_tit">平台游戏用户ID：</span>
          <span class="rem_con">
            <el-input
              v-model="searchEdition.gameUserId"
              placeholder="请输入平台游戏用户ID"
              maxlength="25"
              :disabled="disableControl"
            />
          </span>
        </li>
        <li>
          <span class="rem_tit">在线状态：</span>
          <span class="rem_con">
            <el-select v-model="searchEdition.online" value-key="name" placeholder="全部" :disabled="disableControl">
              <el-option
                v-for="item in onlineStatus"
                :key="item.value"
                :label="item.name"
                :value="item.value"
                
              ></el-option>
            </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">终端设备：</span>
          <span class="rem_con">
            <el-select v-model="searchEdition.device" value-key="name" placeholder="全部" :disabled="disableControl">
              <el-option
                v-for="item in terminalDevice"
                :key="item.value"
                :label="item.name"
                :value="item.value"
                
              ></el-option>
            </el-select>
          </span>
        </li>
        
        <li>
          <span class="rem_tit">平台状态：</span>
          <span class="rem_con">
            <el-select v-model="searchEdition.disable" value-key="name" placeholder="全部"  :disabled="disableControl">
              <el-option
                v-for="item in platFormStatus"
                :key="item.value"
                :label="item.name"
                :value="item.value"
               
              ></el-option>
            </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">代理商状态：</span>
          <span class="rem_con">
            <el-select v-model="searchEdition.agentDisable" value-key="name" placeholder="全部" :disabled="disableControl">
              <el-option
                v-for="item in agentBossStatus"
                :key="item.value"
                :label="item.name"
                :value="item.value"
                
              ></el-option>
            </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">最后登录时间：</span>
          <span class="rem_con">
            <el-date-picker
              v-model="searchEdition.dateTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="起始时间"
              :clearable="false"
              end-placeholder="结束时间"
              @change="getDate"
              :disabled="disableControl"
            ></el-date-picker>
          </span>
        </li>
        <li>
          <span class="rem_tit">创建时间：</span>
          <span class="rem_con">
            <el-date-picker
              v-model="searchEdition.creationTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              :clearable="false"
              end-placeholder="结束日期"
              @change="gecreationTimetDate"
              :disabled="disableControl"
            ></el-date-picker>
          </span>
        </li>
      </ul>
    </el-form>
    <div class="toggle-box">
    <el-form>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" @click.native.prevent="search" :disabled="disableControl">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" size="mini" @click.native.prevent="reset" :disabled="disableControl">
          <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" size="mini" @click.native.prevent="kickOut(148)" :disabled="disableControl">
          <svg-icon icon-class="tichu" />
          踢出</el-button>
        <el-button type="primary" size="mini" @click.native.prevent="startOrStop('start',148)" :disabled="disableControl">
          <svg-icon icon-class="qiyong1" />
          启用</el-button>
        <el-button type="primary" size="mini" @click.native.prevent="startOrStop('stop',148)" :disabled="disableControl">
          <svg-icon icon-class="jinyong1" />
          禁用</el-button>
      </el-form-item>
      <el-button class="show-toggle" type="primary" @click="showToggle" :icon="showToggleIcon"></el-button>
    </el-form>
    </div>
    <!-- 表格数据展示 -->
    <div class="admin_table">
      <div class="agent-info-preview">
        <span>会员总数：{{ statistic.totalUser }}</span>
        <span>当前在线会员数：{{ statistic.totalOnline }} (PC：{{ statistic.totalPc }}&nbsp;&nbsp;&nbsp;&nbsp;H5：{{ statistic.totalH5 }})</span>
        <span>当前会员钱包余额总数：{{ statistic.totalBalance }} 元</span>
      </div>
      <el-table
        :header-cell-style="tableHeaderColor"
        :cell-style="rowcellClass"
        :key="tableKey"
        :data="tempListData"
        ref="multipleTable"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%;"
        border
        class="tableAutoToggle"
        :class="!showSearchBox?'tableAuto175':''"
        :height="currentPageSize*25 + 50"
        v-loading="loading"
      >
        <el-table-column label width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index" align="center" width="50" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * size + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column label="平台游戏用户ID" prop="id" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.id ? scope.row.id : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="游戏用户名称" prop="username" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.username ? scope.row.username : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="余额" prop="balance" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.balance ? scope.row.balance : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="代理商老板ID" prop="agentInfoCode" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.agentInfoCode ? scope.row.agentInfoCode : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="所属代理商老板账号" prop="agentUsername" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.agentUsername ? scope.row.agentUsername : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="在线状态" prop="lineable" align="center" width="80" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.lineable ? '在线' : scope.row.lineable == 0 ? '未在线' : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="最后登录IP" prop="lastLoginIp" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.lastLoginIp ? scope.row.lastLoginIp : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="终端设备" prop="device" align="center"   show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.device ? 'H5' : scope.row.device == 0 ? 'PC' : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="平台状态" prop="disable" align="center" width="80" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.disable ? '禁用' : scope.row.disable == false ? '启用' : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="代理商状态" prop="agentDisable" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.agentDisable ? '禁用' : scope.row.agentDisable == false ? '启用' : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" prop="createdDate" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.createdDate ? scope.row.createdDate : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="最后登录时间" prop="lastLoginTime" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.lastLoginTime ? scope.row.lastLoginTime : '-' }}</span>
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
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="allData_total"
        @size-change="handleSizeChange"
        @current-change="getList"
      ></el-pagination>
    </div>
    <!-- 启用/禁用 -->
    <el-dialog :visible.sync="startStopUsingDialog" :title="title_Name" width="350px" :top="dialogMt" :close-on-click-modal="false">
      <p style="text-align:center;">
        是否确定{{title_Name}}
        <span style="color:red;">"{{table_row_data.agentUsername}}"</span>平台下玩家
        <span style="color:red;">"{{table_row_data.username}}"?</span>
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="okStartStopUsing">确 定</el-button>
        <el-button size="mini" @click="startStopUsingDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 踢出 -->
    <el-dialog :visible.sync="kickOutDialog" :title="title_Name" width="350px" :top="dialogMt" :close-on-click-modal="false">
      <p style="text-align:center;">
        是否确定将
        <span style="color:red;">"{{table_row_data.agentUsername}}"</span>平台下玩家
        <span style="color:red;">"{{table_row_data.username}}"</span>强制下线?
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="okKickOut">确 定</el-button>
        <el-button size="mini" @click="kickOutDialog = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { validatePwd } from "@/utils/validate";
import { findPage,statistic,kickOut,disable } from "@/api/operationManage/ag_gameUserManage";
import { agentInfoDropdownList,findByCode } from '@/api/select'
import { validNinedata_wholenineteen } from '@/utils/validate'
import Cookies from 'js-cookie'
import {serverTime } from '@/api/login'
export default {
  name: "ag_gameuser_manage",
  data() {
    return {
      lastDay:"", // 当月最后一天
      ServerTimes:"", // 服务器时间
      tempListData: [], // 临时渲染数组
      agent_disableControl: false, // 代理商老板账号按钮是否可用
      disableControl: false,
      showSearchBox: true, // 控制查询条件容器显示-隐藏
      showToggleIcon: 'el-icon-caret-top',
      loading: false, // Loading 加载
      agentName: "", // 代理商名称
      current_click_rowData: null,
      startStopUsingDialog: false,
      kickOutDialog: null,
      tableKey: 0,
      total: 0,
      onlineState: "",
      table_id: null, // 当前选中行ID
      table_row_data: '', // 当前选中行数据
      title_Name: "", // 启用-禁用标题
      // searchEdition: { // 搜索条件
      //   agentInfoIds:[""], 
      //   username: '',
      //   gameUserId: '',
      //   online: '',
      //   device: '',
      //   disable: '',
      //   agentDisable: ''
      // },
      statistic: {
        totalUser: '',
        totalOnline: '',
        totalPc: '',
        totalH5: '',
        totalBalance: ''
      },
      // dateTime: [], // 最后登录时间
      // creationTime: [], // 创建时间
      agentBossAccounts: [], // 代理商老板账号
      onlineStatus: [{ value: "",name: "全部"}], // 在线状态
      terminalDevice: [{ value: "",name: "全部"}], // 终端设备
      platFormStatus: [{ value: "",name: "全部"}], // 平台状态
      agentBossStatus: [{ value: "",name: "全部"}],// 代理商老板状态
      enableType: "",
      searchTimes: 0,
      dialogHeight: 0,
      dialogMt: this.dialogMt // 弹出框上边距
    };
  },
  computed: {
    ...mapState({
      allData: state => state.ag_gameUserManage.allData,
      allData_total: state => state.ag_gameUserManage.allData_total,
      currentPageSize: state => state.ag_gameUserManage.currentPageSize
    }),
    size: {
      get() {
        return this.$store.state.ag_gameUserManage.size;
      },
      set(item) {
        return item;
      }
    },
    page: {
      get() {
        return this.$store.state.ag_gameUserManage.page;
      },
      set(item) {
        return item;
      }
    },
    searchEdition:{
      get() {
        return this.$store.state.ag_gameUserManage.searchEdition;
      },
      set(item) {
        return item;
      }
    }
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
    judgeScree(val) {
      // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + "px";
    },
    handleChange(val) {
        let i = val.length;
        let arr = this.$store.state.ag_gameUserManage.searchEdition;
        if(val[i-1] == ""&&val.length == 1){
          arr.agentInfoIds = [""]
        }
        if(val[i-1] == ""){
          arr.agentInfoIds = [""]
        }
        const index = val.indexOf("")
        if(index != -1){
          arr.agentInfoIds.splice(index, 1) // 排除全选选项
        }

    },
    getList(val) {
      // 填充表格数据
      this.table_id = null;
      if (!val) {
        val = 1;
      }
      this.$store.dispatch("getGameUserPage", parseInt(val));  
      let arr = this.$store.state.ag_gameUserManage.searchEdition;
      if(arr.dateTime.length == 0 && arr.creationTime.length == 0){ //lastDay
        let setstate = new Date(this.ServerTimes) // 当前日期减去一天
        setstate.setDate(1); // 当月的第一天
        let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
        let endtate = new Date(this.ServerTimes);
        endtate.setDate(this.lastDay); // 当月的最后一天
        let edate =  this.dateForm(endtate).split(' ')[0] + ' 23:59:59';   // 结束时间
        this.$store.state.ag_gameUserManage.searchEdition.creationTime = [state,edate] 
      }
      this.$store.state.ag_gameUserManage.searchEdition.page = this.page - 1;
      this.$store.state.ag_gameUserManage.searchEdition.size = this.size;
      let gameUserId = arr.gameUserId;//平台游戏用户ID
      if(!validNinedata_wholenineteen(gameUserId)){ // 起始赔率与截止赔率 校验长短  
          this.$message.warning('请输入0-19位数字');
          return
      }
      this.loading = true; // 请求接口时loading启用
      this.disableControl = true;
      this.agent_disableControl = true;
      let that = this;
      if(arr.page== 0 ){
        statistic(this.$store.state.ag_gameUserManage.searchEdition).then(res => { // 列表眉头统计
          let resData = res.data;
          if(resData.success == 1) {
            this.statistic = resData.content
          }else {
            this.statistics = {depositAmount: 0,depositUser: 0,withdrawAmount:"0",withdrawUser: 0}
            this.loading = false; // 接口返回数据时，loading禁用
            this.disableControl = false;
            let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限  
            if(userType == 3 ||userType == 4) {  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
                this.agent_disableControl = true;
              }else{
                this.agent_disableControl = false;
              }
             this.$message.error(resData.respMsg)
              if(this.$store.state.ag_gameUserManage.searchEdition.agentInfoIds == ""){ 
              this.$store.state.ag_gameUserManage.searchEdition.agentInfoIds = [];
              this.$store.state.ag_gameUserManage.searchEdition.agentInfoIds[0] = ""
            }
          }
        }).catch(error => {
          that.$message.error("请求出现异常请联系管理员")
          that.loading = false; // 接口返回数据时，loading禁用
          that.disableControl = false;
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限  
          if(userType == 3 ||userType == 4) {  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
              that.agent_disableControl = true;
            }else{
              that.agent_disableControl = false;
            }
          if(that.$store.state.ag_gameUserManage.searchEdition.agentInfoIds == ""){ 
            that.$store.state.ag_gameUserManage.searchEdition.agentInfoIds = [];
            that.$store.state.ag_gameUserManage.searchEdition.agentInfoIds[0] = ""
          }
      });
      }  
      findPage(this.$store.state.ag_gameUserManage.searchEdition).then(res => { // 列表眉头统计
          let resData = res.data;
          let currentPageSize = 2;
          this.tempListData = [];
          if(resData.success == 1) {
            if (resData.content.content.length > 0) {
              currentPageSize = resData.content.content.length;
            } else {
              currentPageSize = 2;
            }
            resData.content.content.map(item => {
            this.agentBossAccounts.map(boseItem => {
              if(item.agentInfoId == boseItem.value+'') {
                item.agentUsername = boseItem.name
                this.tempListData.push(item)
              }
            })
            return item
          })
          //  this.tempListData = resData.content;

            this.$store.dispatch("getGameUserData",resData.content)
          }else {
            this.$message.error(resData.respMsg) 
             this.$store.dispatch("getGameUserData",{"content":[]})        
          }
          this.$store.dispatch("getGameUserTableHeight", currentPageSize);
          this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行
          this.loading = false; // 接口返回数据时，loading禁用
          this.disableControl = false;
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限  
          if(userType == 3 ||userType == 4) {  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
             this.agent_disableControl = true;
          }else{
             this.agent_disableControl = false;
          }
           if(this.$store.state.ag_gameUserManage.searchEdition.agentInfoIds == ""){ 
              this.$store.state.ag_gameUserManage.searchEdition.agentInfoIds = [];
              this.$store.state.ag_gameUserManage.searchEdition.agentInfoIds[0] = ""
            }
        }).catch(error => {  // 列表展示为初始化
          that.$message.error("请求出现异常请联系管理员")
          that.$store.state.ag_gameUserManage.allData = [];
          that.$store.state.ag_gameUserManage.allData_total =0;
          that.$store.state.ag_gameUserManage.currentPageSize = 2;
          that.loading = false; // 接口返回数据时，loading禁用
          that.disableControl = false;
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限  
          if(userType == 3 ||userType == 4) {  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
              that.agent_disableControl = true;
            }else{
              that.agent_disableControl = false;
            }
          if(that.$store.state.ag_gameUserManage.searchEdition.agentInfoIds == ""){ 
            that.$store.state.ag_gameUserManage.searchEdition.agentInfoIds = [];
            that.$store.state.ag_gameUserManage.searchEdition.agentInfoIds[0] = ""
          }
      });
    
    },
    getDate(val) {
      let arr = this.$store.state.ag_gameUserManage.searchEdition;
      if(val){
          arr.dateTime[0] = this.dateForm(arr.dateTime[0]).split(' ')[0] + ' 00:00:00';
          arr.dateTime[1] = this.dateForm(arr.dateTime[1]).split(' ')[0] + ' 23:59:59';
          if(arr.dateTime[0] == arr.dateTime[1]) {
            arr.dateTime[1] = arr.dateTime[1].split(' ')[0] + ' 23:59:59'
          }
        }else{
          arr.dateTime = [] 
        }
    },
    gecreationTimetDate(val) {
      let arr = this.$store.state.ag_gameUserManage.searchEdition;
      if(val){
          arr.creationTime[0] = this.dateForm(arr.creationTime[0]).split(' ')[0] + ' 00:00:00';
          arr.creationTime[1] = this.dateForm(arr.creationTime[1]).split(' ')[0] + ' 23:59:59';
          if(arr.creationTime[0] == arr.creationTime[1]) {
            arr.creationTime[1] = arr.creationTime[1].split(' ')[0] + ' 23:59:59'
          }
        }else{
          arr.creationTime = [] 
        }
    },
    reset() {
      // 重置查询条件
       this.$store.state.ag_gameUserManage.searchEdition = { // 搜索条件
        agentInfoIds: [""],
        username: '',
        gameUserId: '',
        online: '',
        device: '',
        disable: '',
        agentDisable: '',
        dateTime: [], // 最后登录时间
        creationTime: [], // 创建时间
        lastLoginTimeBegin:"",
        lastLoginTimeEnd:"",
        page:0,
        size:0,
      };
      let userType = Cookies.get('userType');
      if(userType == '3'||userType == '4'){
        this.$store.state.ag_gameUserManage.searchEdition.agentInfoIds[0] = this.agentBossAccounts[0].value;
      }
      let setstate = new Date(this.ServerTimes) // 当前日期减去一天
          setstate.setDate(1); // 当月的第一天
      let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
      let endtate = new Date(this.ServerTimes);
      endtate.setDate(this.lastDay); // 当月的最后一天
      let edate =  this.dateForm(endtate).split(' ')[0] + ' 23:59:59';   // 结束时间
      this.$store.state.ag_gameUserManage.searchEdition.creationTime = [state,edate] 

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
            let setstate = new Date(this.ServerTimes); // 当前日期减去一天
                setstate.setDate(1); // 当月的第一天
            let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间

            let endtate = new Date(this.ServerTimes);
            var currentMonth=endtate.getMonth();
            var nextMonth=++currentMonth;
            var nextMonthFirstDay=new Date(endtate.getFullYear(),nextMonth,1);
            var oneDay=1000*60*60*24;
            var lastTime = new Date(nextMonthFirstDay-oneDay);
            var month = parseInt(lastTime.getMonth()+1);
            var day = lastTime.getDate();
            this.lastDay = day;
            endtate.setDate(day); // 当月的最后一天
            let edate =  this.dateForm(endtate).split(' ')[0] + ' 23:59:59';   // 结束时间
            if(this.$store.state.ag_gameUserManage.searchEdition.creationTime.length == 0){
             this.$store.state.ag_gameUserManage.searchEdition.creationTime = [state,edate];
            }
          
          }else {
            this.$message.error(resData.respMsg)
          }
      }).catch(error => {  // 后台返回抛异常处理
                that.$message.error("请求出现异常请联系管理员")      
            });  
    },
    search() {
      // 查询方法

      this.getList();
    },
    startOrStop(type, h) {
      // 启用-禁用弹窗
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      let userType = Cookies.get('userType')
      if(userType == '2') { // 平台运营用户
        if (type == "start" && this.table_row_data.disable == false) {
          this.$message.warning("该数据已被启用，不可操作");
          return false;
        } else if (type == "stop" && this.table_row_data.disable) {
          this.$message.warning("该数据已被禁用，不可操作");
          return false;
        }
      }else if(userType == '3') { // 代理商老板
        if (type == "start" && this.table_row_data.agentDisable == false) {
          this.$message.warning("该数据已被启用，不可操作");
          return false;
        } else if (type == "stop" && this.table_row_data.agentDisable) {
          this.$message.warning("该数据已被禁用，不可操作");
          return false;
        }
      }
      
      if (this.table_id != null) {
        if (type == "start") {
          this.title_Name = "启用";
          this.enableType = 0;
        } else {
          this.title_Name = "禁用";
          this.enableType = 1;
        }

        this.startStopUsingDialog = true;
      } else {
        this.$message.warning("请选择一条数据");
        return false;
      }
    },
    okStartStopUsing() {
      // 确认启用-禁用
      let userType = Cookies.get('userType')
      let data = {}
      if(userType == '2') { // 平台用户
        data = {
          id: this.table_id,
          disable: !this.table_row_data.disable
        }
      }else if(userType == '3') { // 代理商老板
      
        data = {
          id: this.table_id,
          disable: !this.table_row_data.agentDisable
        }
      }
      let that = this;
      disable(data).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg);
          this.startStopUsingDialog = false;
          this.getList();
        }else {
          this.$message.error(resData.respMsg)
        }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
      
    },
    kickOut(h) {
      // 踢出
      if (!this.table_id) {
        this.$message.warning("请选择一条数据");
        return false;
      } 
      if(this.table_row_data.lineable == 0) { // 当前用户为 未在线
        this.$message.warning('请选择在线状态为“在线”的数据进行操作')
        return false;
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.title_Name = "踢出";
      this.kickOutDialog = true;
    },
    okKickOut() { // 踢出
     let that = this;
      kickOut({id: this.table_id}).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.kickOutDialog = false;
          this.getList();
        }
      }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
    },
    handleCurrentChange(val) { // 表格数据行切换方法
      if (val != null) {
        this.onlineState = val.onlineStatus;
        this.platFormStatus = val.platFormStatus;
        this.useingType = val.agentStatus;
        this.table_id = val.id;
        this.table_row_data = val
      }
    },
    handleSizeChange(val) { // 页码大小变化时
      this.$store.dispatch("getGameUserPageSize", val);
      this.getList();
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: rgb(247, 251, 254); padding: 4px 0;text-align:center;";
    },
    rowcellClass() {
      // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight); // 判断屏幕大小进行操作
    });
    window.onresize = () => {
      this.judgeScree(this.dialogHeight);
    };
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

        this.$store.state.ag_gameUserManage.allData = [];
        this.$store.state.ag_gameUserManage.allData_total = 0;
        this.$store.state.ag_gameUserManage.page = 1;
        this.$store.state.ag_gameUserManage.size = 10;
        this.$store.state.ag_gameUserManage.searchEdition = { // 搜索条件
          agentInfoIds: [""],
          username: '',
          gameUserId: '',
          online: '',
          device: '',
          disable: '',
          agentDisable: '',
          dateTime: [], // 最后登录时间
          creationTime: [], // 创建时间
          lastLoginTimeBegin:"",
          lastLoginTimeEnd:"",
          page:0,
          size:0,
        };
        this.$store.dispatch("getGameUserTableHeight", 2);
      }
    } else {
      if (this.$store.state.ag_gameUserManage.allData.length > 0) {
        this.getList();
      }
    }
    let that = this;
    // 初始化下拉列表
    agentInfoDropdownList().then(res => { // 代理商老板账号
      let par = this.$store.state.ag_gameUserManage.searchEdition;
      let resData = res.data
        if(resData.success == 1) {
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
          if(userType == 3 ||userType == 4) {  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
            this.agentBossAccounts = resData.content;
            par.agentInfoIds[0] = resData.content[0].value;
            this.agent_disableControl = true;
          }else{
            this.agentBossAccounts=[{ value: "",name: "全部"}] // 代理商老板账号下拉列表 
            let by_agentBossAccounts = resData.content;   
            by_agentBossAccounts.forEach(element => {
                this.agentBossAccounts.push(element);
            });
            this.agent_disableControl = false;
          }        
        }else {
          this.$message.error(resData.respMsg)
        }
         // 获取当前服务器时间
        this.getServerTime();



    }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });

    findByCode({code: 'DEVICE,DISABLE,USERlOGIN_ONLINE'}).then(res => {  // 初始化下拉数据
      let resData = res.data
      if(resData.success == 1) {
        let by_terminalDevice = resData.content['DEVICE'];// 终端设备
        let by_platFormStatus = resData.content['DISABLE']; // 平台状态 // 代理商状态
        let by_onlineStatus = resData.content['USERlOGIN_ONLINE']; // 在线状态
         by_terminalDevice.forEach(element => {
            this.terminalDevice.push(element);
        });
        by_platFormStatus.forEach(element => {
            this.platFormStatus.push(element);
            this.agentBossStatus.push(element);
        });
        by_onlineStatus.forEach(element => {
            this.onlineStatus.push(element);
        });
      }
    }).catch(error => {  // 后台返回抛异常处理
          that.$message.error("请求出现异常请联系管理员")      
      });
  }
};
</script>
<style lang="scss">
@import '@/styles/tableFold.scss';

.ag_gameuse_manage{
  .tableAutoToggle { 
    max-height: calc(100vh - 340px);
    overflow: auto;
  }
} 
@media screen and (max-width: 1460px) { 
  .ag_gameuse_manage {
    .tableAutoToggle { 
      max-height: calc(100vh - 390px)!important;
      overflow: auto;
    }
    .tableAuto175 {
      // 查询条件折叠时 表格高度
      max-height: calc(100vh - 205px) !important;
      overflow: auto;
    }
  }
}
.ag_gameuse_manage {
  .agent-info-preview {
    background: #ecf5ff;
    padding: 15px 20px;
    color: #606266;
    span {
      margin-right: 30px;
    }
  }
  .userAccount {
    width: 110px !important;
    margin-left: 0px !important;
  }
  .tableAuto216 {
    max-height: calc(100vh - 300px);
    min-height: calc(100vh - 400px);
  }
  // .heard-search {
  //   li {
  //     // 带时分秒的日期时间插件
  //     .el-date-editor--datetimerange.el-input__inner {
  //       width: 330px;
  //     }
  //     width: 330px;
  //     text-align: right;
  //     .rem_con {
  //       .el-input {
  //         width: 180px;
  //       }
  //     }

  //     &:last-child {
  //       width: 480px;
  //     }
  //   }
  // }
}
</style>
