<template>
<!--代理商用户管理-->
  <div class="app-container smUser">
    <el-form :model="smUserForm">
      <ul class="heard-search">
        <li>
          <span class="rem_tit">代理商员工账号：</span>
          <span class="rem_con"><el-input style="width:160px;" v-model="smUserForm.username" placeholder="请输入代理商员工账号" maxlength="15" :disabled="disableControl"/></span>
        </li>
       
        <li>
          <span class="rem_tit">状态：</span>
          <span class="rem_con">
            <el-select v-model="smUserForm.disable" value-key="name" placeholder="全部" :disabled="disableControl">
              <el-option label="全部" value=""></el-option>
              <el-option v-for="item in disableArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">创建日期：</span>
          <span class="rem_con">
              <el-date-picker 
                :disabled="disableControl"
                v-model="smUserForm.dateTime" 
                type="daterange" 
                range-separator="至" start-placeholder="开始日期" 
                end-placeholder="结束日期"
                @change="getDate"
                :picker-options="pickerOptions0"
              >
              </el-date-picker>
          </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="search" :disabled="disableControl">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="reset" :disabled="disableControl">
          <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="stop_start_using('start',148)" :disabled="disableControl">
          <svg-icon icon-class="qiyong1" />
          启用</el-button>
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="stop_start_using('stop',148)" :disabled="disableControl">
          <svg-icon icon-class="jinyong1" />
          禁用</el-button>
        <el-button type="primary" class="terraceUser_button" @click.native.prevent="addUser(314)" :disabled="disableControl">
          <svg-icon icon-class="xinzeng1" />
          新增</el-button>
        <el-button type="primary" class="terraceUser_button" @click.native.prevent="updateUserInfo('changePwd',251)" size="mini" :disabled="disableControl">
          <svg-icon icon-class="xiugai" />
          修改密码</el-button>
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="accredit(598)" :disabled="disableControl">
          <svg-icon icon-class="shouquan" />
          授权</el-button>
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="detailUser(571)" :disabled="disableControl">
          <svg-icon icon-class="chakanxiangqing" />
          查看用户详情</el-button>
      </el-form-item>
    </el-form>
    <!-- 数据表格 -->
    <div class="terraceUser_table">
      <el-table 
      :header-cell-style="tableHeaderColor" 
      :cell-style="rowcellClass" 
      :key="tableKey" 
      :data="allData" 
      highlight-current-row 
      @current-change="handleCurrentChange" 
      style="width: 100%;" 
      border 
      class="tableAuto216"
      :height="currentPageSize*25 + 34"
       v-loading="loading"
       ref="tableScroll"
      >
        <el-table-column label width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index" align="center" width="80" :index="indexMethod" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column sortable label="代理商员工ID" prop="code" width="150" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.code ? scope.row.code : '-' }}
          </template>
        </el-table-column>
        <el-table-column label="代理商员工账号" property="username" width="110" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.username ? scope.row.username : '-' }}
          </template>
        </el-table-column>
        <el-table-column label="最后登录IP" property="lastLoginIp" width="120" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.lastLoginIp ? scope.row.lastLoginIp : '-' }}
          </template>
        </el-table-column>
        <el-table-column sortable label="状态" property="disable" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.disable != null ? (scope.row.disable ? '禁用': '启用') : '-' }}
          </template>
        </el-table-column>
        <el-table-column  label="最后登录时间" property="lastLoginTime" width="140" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.lastLoginTime ? scope.row.lastLoginTime : '-' }}
          </template>
        </el-table-column>
        <el-table-column label="创建人" property="createdBy" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.createdBy ? scope.row.createdBy : '-' }}
          </template>
        </el-table-column>
        <el-table-column sortable label="创建时间" property="createdDate" align="center" width="140" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.createdDate ? scope.row.createdDate : '-' }}
          </template>
        </el-table-column>
        <el-table-column label="修改人" property="lastModifiedBy" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.lastModifiedBy ? scope.row.lastModifiedBy : '-' }}
          </template>
        </el-table-column>
        <el-table-column sortable label="修改时间" property="lastModifiedDate" align="center" width="140" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.lastModifiedDate ? scope.row.lastModifiedDate : '-' }}
          </template>
        </el-table-column>
      </el-table>
    </div>
   <!-- 分页    数据要是大于1000条时，把分页释放掉-->
    <!-- <div class="terraceUser_pagination">
      <el-pagination 
        :page-sizes="[10, 20, 50, 100]" 
        :current-page.sync="page" 
        :page-size="pageSize"
        background
        :total="allData_total"
        layout="total, sizes, prev, pager, next, jumper" 
        @size-change="handleSizeChange" 
        @current-change="getList"
      >
      </el-pagination>
    </div> -->
    <!--启用/禁用-->
    <el-dialog :visible.sync="startStopUsingDialog" :title="start.title_Name" width="350px" :top="dialogMt" :close-on-click-modal="false">
      <p style="text-align:center;">
        是否{{start.title_Name}}员工
        <span class="required">"{{start.data_Name}}"</span>？
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="okStartStopUsing(start.title_Name)">确 定</el-button>
        <el-button size="mini" @click="startStopUsingDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <!--新增-->
    <el-dialog :visible.sync="addUserDialog" title="新增" width="400px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item" style="width:120px;margin-left:-2px">
            <span class="required">*</span>代理商员工账号：
          </span>
          <el-input style="width: 200px;" v-model="add_userInfo.username"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>密码：
          </span>
          <el-input style="width: 200px;" v-model="add_userInfo.passwd" :type="newPasswordType"/>
          <span class="show-pwd" @click="showPwd(1)">
            <svg-icon :icon-class="newPasswordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>确认密码：
          </span>
          <el-input style="width: 200px;" v-model="add_userInfo.confirmPasswd" :type="confirmPasswdType"/>
          <span class="show-pwd" @click="showPwd(2)">
            <svg-icon :icon-class="confirmPasswdType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </p>
        <p style="padding: 6px 0px;">
          <span class="dialog-label-item">启用状态：</span>
          <el-input :disabled="true" style="width: 200px;" placeholder="启用"/>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAddUser" size="mini" :loading="syestemObj.confirmAdd">确 定</el-button>
        <el-button @click="addUserDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!--修改密码-->
    <el-dialog v-if="table_row_data" :visible.sync="updateUserDialog" title="修改密码" width="400px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box edirPwdDialog">
        <p>
          <span class="dialog-label-item" style="width:100px;margin-left:-2px;">代理商员工ID：</span>
          <el-input style="width: 200px;" :disabled="true" v-model="table_row_data.code"/>
        </p>
        <p>
          <span class="dialog-label-item" style="width:100px;margin-left:-2px;">代理商员工账号：</span>
          <el-input style="width: 200px;" :disabled="true" v-model="table_row_data.username"/>
        </p>
        <p>
          <span class="dialog-label-item" style="width: 70px;">
            <span class="required">*</span>新密码：
          </span>
          <el-input style="width: 200px;" v-model="update_userInfo.passwd" :type="newPasswordType"/>
          <span class="show-pwd" @click="showPwd(1)">
            <svg-icon :icon-class="newPasswordType === 'password' ? closeEyes : openEyes" />
          </span>
        </p>
        <p>
          <span class="dialog-label-item"  style="width: 70px;">
            <span class="required">*</span>确认密码：
          </span>
          <el-input style="width: 200px;" v-model="update_userInfo.confirmPasswd" :type="confirmPasswdType"/>
          <span class="show-pwd" @click="showPwd(2)">
            <svg-icon :icon-class="confirmPasswdType === 'password' ? closeEyes : openEyes" />
          </span>
        </p>
       
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okUpdateUserInfo" size="mini" :loading="syestemObj.confrimEdit">确 定</el-button>
        <el-button @click="cancelEdit" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 授权 -->
    <el-dialog v-if="table_row_data" :visible.sync="accreditDialog" title="授权" width="650" :top="dialogMt" class="ipConfig_dialog" :close-on-click-modal="false" >
      <div class="dialog-box">
        <!-- 弹框主内容表头 -->
        <div class="data-dialog-title">
          <div class="dialog-title-state">
            <span>代理商员工ID：{{ table_row_data.code }}</span>&nbsp;&nbsp;&nbsp;
            <span>代理商员工账号：{{ table_row_data.username }}</span>&nbsp;&nbsp;&nbsp;
            <span>当前状态：{{ table_row_data.disable != null ? (table_row_data.disable ? '禁用' : '启用') : '-' }}</span>
          </div>
        </div>
        <!-- 弹框表格 -->
        <div class="data-dialog-table">
          <el-table
            ref="multipleTable"
            :header-cell-style="tableHeaderColor"
            :cell-style="rowcellClass"
            :key="tableKey"
            :data="accreditTableData"
            highlight-current-row
            v-loading="syestemObj.authorization_table"
            style="width: 100%;"
            border
            :height="500"
            class = "tableAuto216"
            @selection-change="handleSelectChange"
          >
            <el-table-column type="selection" width="35">
            </el-table-column>
            <el-table-column label="序号" property="id" width="150" align="center" show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="代理商权限编号" property="code" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.code ? scope.row.code : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="代理商权限名称" property="name" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.name ? scope.row.name : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="父级名称" property="parentName" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.parentName ? scope.row.parentName : '-' }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 操作按钮 -->
        <div slot="footer" style="text-align:right;margin-top:10px;" class="dialog-footer">
          <el-button type="primary" @click="saveAccredit" :loading="syestemObj.confrimSave">保存</el-button>
          <el-button  @click="accreditDialog = false">关闭</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 查看用户详情 -->
    <el-dialog v-if="table_row_data" :visible.sync="detailUserDialog" title="查看用户详情" width="40%" :top="dialogMt" class="ipConfig_dialog" :close-on-click-modal="false">
      <div class="dialog-box">
        <!-- 弹框主内容表头 -->
        <div class="data-dialog-title">
          <div class="dialog-title-state">
            <span>代理商员工ID：{{ table_row_data.code }}</span>&nbsp;&nbsp;&nbsp;
            <span>代理商员工账号：{{ table_row_data.username }}</span>&nbsp;&nbsp;&nbsp;
            <span>当前状态：{{ table_row_data.disable != null ? (table_row_data.disable ? '禁用' : '启用') : '-' }}</span>
          </div>
        </div>
        <!-- 弹框表格 -->
        <div class="data-dialog-table">
          <el-table
            :header-cell-style="tableHeaderColor"
            :cell-style="rowcellClass"
            :key="tableKey"
            :data="accreditTableData"
            highlight-current-row
            style="width: 100%;"
            border
            v-loading="syestemObj.detailUserInfo_table" 
            :height="500"
            class = "tableAuto216"
          >
            <el-table-column label="序号" width="150" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                <span>{{scope.$index+1}}</span>
              </template>
            </el-table-column>
            <el-table-column label="代理商权限编号" property="code" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.code ? scope.row.code : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="代理商权限名称" property="name" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.name ? scope.row.name : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="父级名称" property="parentName" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.parentName ? scope.row.parentName : '-' }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { validateUserName,validatePwd } from '@/utils/validate.js'
import { persistAgentUser,disable,mergePasswd,agentUserAuthList,saveAgentUserPermission } from '@/api/agentPlatForm/systemManage/ag_sm_user'
import { findByCode } from '@/api/select'
export default {
  name: "ag_sm_user",
  computed: {
    ...mapState({
      allData: state => state.ag_sm_user.allData,
      allData_total: state => state.ag_sm_user.allDataCount,
      dialogTableData: state => state.ag_sm_user.dialogTableData,
      currentPageSize: state => state.ag_sm_user.currentPageSize,
      disableArr: state => state.ag_sm_user.disableArr,
    }),
    pageSize: {
      get(){
        return this.$store.state.ag_sm_user.pageSize;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.ag_sm_user.page;
      },
      set(item){
        return  item;
      }
    },
    smUserForm: {
      get(){
        return this.$store.state.ag_sm_user.smUserForm;
      },
      set(item){
        return  item;
      }
    },
  },
  data() {
    return {
      syestemObj:{
        confirmAdd:false,
        confrimEdit:false,
        confrimSave:false,
        detailUserInfo_table:false, // 查看用户详情Loading
        authorization_table:false, // 查看授权Loading
      },
      tempCheckedRow: [], // 保存当前选中的授权项
      disableControl: false,
      loading:false, // Loading 加载
      table_id: null,
      table_row_data:null,
      startStopUsingDialog: false,
      usingType:null,
      addUserDialog: false,
      updateUserDialog: false,
      detailUserDialog: false, // 查看用户详情
      accreditDialog: false, // 授权弹窗
      accreditTableData: [], // 授权弹窗表格数据
      multipleSelections: [], // 授权多选数组 
      tableKey: 0,
      lastChangeUserName:'',
      screenWidth: document.body.clientWidth, // 屏幕尺寸
      dialogMt: this.dialogMt, // 弹出框上边距
      newPasswordType: 'password',
      confirmPasswdType: 'password',
      closeEyes: "eye",
      openEyes: "eye-open",
      newPwd: "",
      confirmPassword: "",
      add_userInfo:{ // 新增用户数据
        username: "",
        passwd: "",
        confirmPasswd: ""
      },
      update_userInfo:{ // 修改用户数据
        username:"",
        passwd:"",
        confirmPasswd:""
      },
      start: {
        title_Name: null,
        data_Name: null
      },
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6;//如果没有后面的-8.64e6就是不可以选择今天的
        }
      },
      dialogHeight:0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
  },
  methods: {
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    getList(val) { // 填充表格数据
      this.loading = true; // 请求接口时loading启用
      this.disableControl = true;
      if(!val){
        val = 1;
      }
      this.$store.dispatch('getAgUserPage',parseInt(val));
      this.table_id = null;
      let par = this.$store.state.ag_sm_user.smUserForm;
      if(!par.dateTime){
         par.dateTime={
           sdate:"",
           edate:""
         }
      }
      let data = {
        username: par.username,
        disable: par.disable,
        createdDateBegin: par.dateTime.sdate,
        createdDateEnd: par.dateTime.edate,
        page: this.page - 1,
        pageSize: this.pageSize

      };

      this.$store.dispatch("getAgUserData", data).then( res => {
        let currentPageSize = 2;
        if(res.success == 1){
          if(res.content.content.length > 0) {
            currentPageSize = res.content.content.length;
          }else {
            currentPageSize = 2;
          }
        }else{
          this.$message.error(res.respMsg)
        }
       
        this.$refs.tableScroll.bodyWrapper.scrollTop = 0; 
        this.$store.dispatch('getAgUserTableHeight', currentPageSize)
        this.loading = false; // 接口返回数据时，loading禁用
        this.disableControl = false;
      });
    },
    getDate() { //获取开始时间  结束时间节点
      let t = this.$store.state.ag_sm_user.smUserForm.dateTime;
      if(t != null){
        t.sdate = this.dateForm(t[0],1);
        t.edate = this.dateForm(t[1],1).split(' ')[0] + ' 23:59:59';
        if(t.sdate == t.edate) {
          t.edate = t.edate.split(' ')[0] + ' 23:59:59'
        }
      }else{
        this.$store.state.ag_sm_user.smUserForm.dateTime={
          sdate:"",
          edate:""
        }
      }
    },
    showPwd(passtype) { // 显示-隐藏密码
      if(passtype == 1) {
        if (this.newPasswordType === 'password') {
          this.newPasswordType = ''
        } else {
          this.newPasswordType = 'password'
        }
      }else if(passtype == 2) {
        if (this.confirmPasswdType === 'password') {
          this.confirmPasswdType = ''
        } else {
          this.confirmPasswdType = 'password'
        }
      }
    },
    search() { // 查询
      // 相关查询条件校验
      this.getList()
    },
    reset() { // 重置查询条件
      this.$store.state.ag_sm_user.smUserForm = { 
        disable: "",
        username: "",
        dateTime:"",
      }
      this.createDate = null;
    },
    stop_start_using(type,h) { // 启用-禁用弹窗

      if (!this.table_id) {
        this.$message.warning('请选择一条数据!');
        return false;
      }
      if(type == 'start') {
        this.start.title_Name = "启用";
        this.usingType = 1;
      }else if(type =='stop') {
        this.start.title_Name = "禁用";
        this.usingType = 0;
      }
      if(type == 'start' && this.table_row_data.disable == false){
        this.$message.warning("该数据已被启用，不可操作");
        return false;
      }else if(type =='stop' && this.table_row_data.disable == true){
        this.$message.warning("该数据已被禁用，不可操作");
        return false;
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.startStopUsingDialog = true;
    },
    okStartStopUsing(val){ // 确认是否启用
      let data = {
        id: this.table_id,
        disable: !this.table_row_data.disable
      }

      disable(data).then(res => {
        let resData = res.data
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.startStopUsingDialog = false;
          this.getList();
        }else {
          this.$message.error(resData.respMsg)
        }
      })
     
    },
    addUser(h) { // 新增用户弹窗
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.add_userInfo.passwd = null; //置空上次新增用户保存的密码和确认密码
      this.add_userInfo.confirmPasswd = null;
      this.add_userInfo.username = null;
      this.addUserDialog = true;
    },
    updateUserInfo(type,h) { // 更新用户信息弹窗
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);

      if (!this.table_id) {
        this.$message.warning('请选择一条数据');
        return false;
      }

      this.update_userInfo.passwd = '';
      this.update_userInfo.confirmPasswd = '';
      this.start.data_Name = this.table_row_data.code;
      this.updateUserDialog = true;
    },
    okAddUser() { // 确定新增用户
    let data = {
        username: this.add_userInfo.username,
        passwd: this.$md5(this.add_userInfo.passwd),
        confirmPasswd: this.$md5(this.add_userInfo.confirmPasswd)
    }
      if(!this.add_userInfo.username){
        this.$message.warning('代理商员工账号不能为空')
        return false;
      }
      if(!this.add_userInfo.passwd){
        this.$message.warning('密码不能为空')
        return false;
      }
      if(!this.add_userInfo.confirmPasswd){
        this.$message.warning('确认密码不能为空')
        return false;
      }
      if(validateUserName(this.add_userInfo.username) == false) {
        this.$message.warning('代理商员工账号限制4-8位字符、首字母小写、纯字母或字母和数字组合')
        return false;
      }

      if(validatePwd(this.add_userInfo.passwd) == false) {
        this.$message.warning('密码限制4-15位字符,必须数字和字母组合')
        return false;
      }
      
      if(validatePwd(this.add_userInfo.confirmPasswd) == false) {
        this.$message.warning('确认密码限制4-15位字符,必须数字和字母组合')
        return false;
      }
      
      this.syestemObj.confirmAdd = true;
      if(this.add_userInfo.passwd == this.add_userInfo.confirmPasswd) {
        // this.add_userInfo.confirmPasswd = this.$md5(this.add_userInfo.confirmPasswd)
        // this.add_userInfo.passwd = this.$md5(this.add_userInfo.passwd)
        persistAgentUser(data).then(res => {
          let resData = res.data
          if(resData.success == 1) {
            this.$message.success(resData.respMsg)
            this.addUserDialog = false;
            this.getList();
          }else {
            this.$message.error(resData.respMsg)
            this.add_userInfo.passwd = '';
            this.add_userInfo.confirmPasswd = '';
          }
          this.syestemObj.confirmAdd = false;
        })
      }else{
        this.$message.warning('确认密码和新密码不一致');
        return false;
      }
    },
    okUpdateUserInfo() { //确认修改密码

      if(validatePwd(this.update_userInfo.passwd) == false) {
        this.$message.warning('密码限制4-15位字符,不可纯数字或纯字母,必须数字和字母组合');
        return false;
      }
  
      if(validatePwd(this.update_userInfo.confirmPasswd) == false) {
        this.$message.warning('确认密码限制4-15位字符,不可纯数字或纯字母,必须数字和字母组合');
        return false;
      }
      
      if(this.update_userInfo.passwd != this.update_userInfo.confirmPasswd) {
        this.$message.warning('两次输入不一致!请重新输入');
        return
      }
      
      this.syestemObj.confrimEdit = true;
      this.update_userInfo.id = this.table_row_data.id
      this.update_userInfo.passwd = this.$md5(this.update_userInfo.passwd)
      this.update_userInfo.confirmPasswd = this.$md5(this.update_userInfo.confirmPasswd)
      mergePasswd(this.update_userInfo).then(res => {
        let resData = res.data
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.updateUserDialog = false;
          this.getList()
        }else {
          this.$message.error(resData.respMsg)
        }
        this.syestemObj.confrimEdit = false;
      })
      
    },
    cancelEdit(){
      this.closeEyes = 'eye';
      this.newPasswordType = 'password';
      this.confirmPasswdType = 'password';
      this.updateUserDialog = false;
    },
    accredit(h) { // 授权
      if (!this.table_id) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      this.judgeScree(h);
      this.accreditDialog = true;
      this.syestemObj.authorization_table = true;
      let data = {
        id: this.table_id,
        optType: 1
      }
      agentUserAuthList(data).then(res => {
        let resData = res.data
        if(resData.success == 1) {

          this.accreditTableData = resData.content

          this.tempCheckedRow = resData.content.filter(item => {
            return item.checked == true
          })

          this.$nextTick(() => {
            this.tempCheckedRow.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row,true)
    
            })
          })
                   
        }else {
          this.$message.error(resData.respMsg)
        }
         this.syestemObj.authorization_table = false;
      })
    
      
    },
    saveAccredit() { // 保存授权操作
  //  debugger
      // if(this.multipleSelections.toString() == this.tempCheckedRow.toString()) {
      //   this.$message.warning('当前角色授权无任何变化')
      //   return false;
      // }
      let permissionIds = ''
      this.multipleSelections.map(item => {
        permissionIds += (item.id + ',')
      })
      let data = {
        id: this.table_id,
        permissionIds: permissionIds
      }
      this.syestemObj.confrimSave = true;
      saveAgentUserPermission(data).then(res => {
        let resData = res.data
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.accreditDialog = false;
        }else {
          this.$message.error(resData.respMsg)
        }
        this.syestemObj.confrimSave = false;
      })

    },   
    detailUser(h) { // 查看用户详情
      if (!this.table_id) {
        this.$message.warning('请选择一条数据!');
        return false;
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.detailUserDialog = true;
      this.syestemObj.detailUserInfo_table = true;
      let data = {
        id: this.table_id,
        optType: 2
      }
      agentUserAuthList(data).then(res => {
        let resData = res.data
        if(resData.success == 1) {

          this.accreditTableData = resData.content
        }else {
          this.$message.error(resData.respMsg)
        }
        this.syestemObj.detailUserInfo_table = false;
      })

     
      
    },
    indexMethod(index) { // 返回表格自增序列号
      return index;
    },
    handleSelectChange(selection) { // 选项切换事件
      this.multipleSelections = selection
    },
    handleSizeChange(val) { // 页码切换方法
      this.$store.dispatch('getAgUserPageSize', val)
      this.getList();
    },
    handleCurrentChange(val) { // 表格数据航切换方法
      if(val != null) {
        this.table_row_data = val;
        this.table_id = val.id; // 用户id
        this.start.data_Name = val.username; // 用户名
        this.lastChangeUserName = val.username; // 记住当前修改的用户名
      }
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color:rgb(247, 251, 254); padding: 4px 0;text-align:center;";
    },
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    }
  },
  created() {
    if(this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)){
    // 更新已关闭的菜单 数组状态
      let newalreadyClose = [] // 定义一个空数组存 过滤左侧点击的数据
      this.$store.getters.alreadyClose.forEach(value => {
        if(value != this.$store.getters.currentView){
          newalreadyClose.push(value)
        }
      })
      this.$store.dispatch("updataTabClose",newalreadyClose) 

      if(this.$store.getters.currentView == this.$route.name) { 
        this.$store.state.ag_sm_user.allData = []
        this.$store.state.ag_sm_user.allData_total = 0;
        this.$store.state.ag_sm_user.page = 1;
        this.$store.state.ag_sm_user.pageSize = 10;
        this.$store.state.ag_sm_user.smUserForm = { 
          disable: "",
          username: "",
          dateTime:"",
        }
        this.$store.state.ag_sm_user.dateTime = "";
        this.$store.dispatch('getAgUserTableHeight', 2)
      }
    }else {
      if(this.$store.state.ag_sm_user.allData.length > 0) {
        this.getList()
      }
    }

    findByCode({code: 'DISABLE'}).then(res => { // 初始化状态下拉列表数据
      let resData = res.data;
      if(resData.success == 1) {
        this.$store.state.ag_sm_user.disableArr = resData.content['DISABLE']
      }else {
        this.$message.error(resData.respMsg)
      }
    })
  }
};
</script>
<style lang="scss" scoped>

.dialog-title-state {
  padding: 0 0 8px 0;
}
.curbut{
  margin-right:8px;
  background:#409eff;
  line-height: 20px;
  border-radius:3px;
  text-align: center;
  color:#fff;
  float:left;
  padding:1px 8px;
}
.disbut{
  margin-right:8px;
  background:#a4a4a4;
  line-height: 20px;
  border-radius:3px;
  text-align: center;
  color:#eaeaea;
  float:left;
  padding:1px 8px;
  cursor: pointer;
}
.smUser {
  .dialog-box{
    p{
      .show-pwd{
        right:20%;
      }
    }
  }
  .edirPwdDialog{
    p{
      margin-left: 25px;
    }
  }
  .el-dialog {
    .el-dialog__body {
      .primission-box {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      }
      .sm-tree-box {
        border: 1px solid rgb(235, 238, 245);
        width: 20%;
        .el-tree-node__label {
          font-size: 12px;
        }
      }
      .el-table {
        width: 70%;
        margin-top: 0;
        border-left: 1px solid rgb(235, 238, 245);
      }
    }
  }
}
</style>




