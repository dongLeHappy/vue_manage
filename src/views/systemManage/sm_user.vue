<template>
<!--系统管理-用户管理-->
  <div class="app-container smUser">
    <el-form :model="smUserForm" class="searchFrom">
      <ul class="heard-search">
        <li>
          <span class="rem_tit">运营用户账号：</span>
          <span class="rem_con"><el-input v-model="smUserForm.username" placeholder="请输入运营用户账号" maxlength="20" :disabled="disableControl"/></span>
        </li>
        <li>
          <span class="rem_tit">状态：</span>
          <span class="rem_con">
            <el-select v-model="smUserForm.disable" value-key="name" placeholder="启用" :disabled="disableControl">
              <el-option label="全部" value=""></el-option>
              <el-option v-for="item in disableArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="search" :disabled="disableControl">
          <svg-icon icon-class="chaxun" /> 
          查询
        </el-button>
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="reset" :disabled="disableControl">
          <svg-icon icon-class="zhongzhi" />
          重置
        </el-button>
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="stop_start_using('start',148)" :disabled="disableControl">
          <svg-icon icon-class="qiyong1" />
          启用</el-button>
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="stop_start_using('stop',148)" :disabled="disableControl">
          <svg-icon icon-class="jinyong1" />
          禁用</el-button>
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="addUser(314)" :disabled="disableControl">
          <svg-icon icon-class="xinzeng1" />
          新增</el-button>
        <el-button type="primary" class="terraceUser_button" @click.native.prevent="updateUserInfo('changePwd',302)" size="mini" :disabled="disableControl">
          <svg-icon icon-class="xiugai" />
          修改密码</el-button>
        <el-button type="primary" class="terraceUser_button" size="mini" @click.native.prevent="detailUser(641)" :disabled="disableControl">
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
        style="width: 100%;"
        border
        @current-change="handleCurrentChange"
        class="tableAuto216"
        :height="currentPageSize*25 + 38"
        v-loading="loading"
        @sort-change ="sortChange"
        :default-sort ="sortRule"
      >
        <el-table-column label width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index" align="center" width="50" :index="indexMethod" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+(page-1) * size + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column  sortable label="运营用户ID" prop="code" align="center" width="115" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="运营用户账号" property="username" align="center" width="100" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.username ? scope.row.username : '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="最后登录IP" property="lastLoginIp" align="center" width="130" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.lastLoginIp ? scope.row.lastLoginIp : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column  sortable label="状态" property="disable" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.disable ?  '禁用': '启用' }}
          </template>
        </el-table-column>
        <el-table-column sortable  label="最后登录时间" property="lastLoginTime" align="center" width="150" show-overflow-tooltip>
          <!-- <template slot-scope="scope">
              <span> {{ scope.row.lastLoginTime ? scope.row.lastLoginTime : '-' }} </span>
          </template> -->
        </el-table-column>
        <el-table-column label="创建人" property="createdBy" align="center" show-overflow-tooltip>
           <template slot-scope="scope">
            <span> {{ scope.row.createdBy ? scope.row.createdBy : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column  sortable label="创建时间" property="createdDate" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.createdDate ? scope.row.createdDate : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="修改人" property="lastModifiedBy" align="center" show-overflow-tooltip>
           <template slot-scope="scope">
            <span> {{ scope.row.lastModifiedBy ? scope.row.lastModifiedBy : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column  sortable label="修改时间" property="lastModifiedDate" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.lastModifiedDate ? scope.row.lastModifiedDate : '-' }} </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 数据要是大于1000条时，把分页释放掉- -->
    <!-- <div class="terraceUser_pagination">
        <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :page-size="size"
        @size-change="handleSizeChange"
        :total="allData_total"
        @current-change="getList"
      >
      </el-pagination>
    </div> -->
    <!--启用/禁用-->
    <el-dialog :visible.sync="startStopUsingDialog" :title="start.title_Name" width="350px" top="35vh" :close-on-click-modal="false">
      <p style="text-align:center;">
        是否{{start.title_Name}}运营用户
        <span class="required">"{{currentUserName}}"</span>？
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
          <span class="dialog-label-item userAccount">
            <span class="required ">*</span>运营用户账号：
          </span>
          <el-input style="width: 200px;" v-model="addData.username"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>密码：
          </span>
          <el-input style="width: 200px;" v-model="addData.passwd" :type="newPasswordType"/>
          <span class="show-pwd" @click="showPwd(1)">
            <svg-icon :icon-class="newPasswordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>确认密码：
          </span>
          <el-input style="width: 200px;" v-model="addData.confirmPasswd" :type="confirmPasswdType"/>
          <span class="show-pwd" @click="showPwd(2)">
            <svg-icon :icon-class="confirmPasswdType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </p>
        <p style="padding: 6px 0px;">
          <span class="dialog-label-item">默认状态：</span>
          <el-input :disabled="true" style="width: 200px;" placeholder="启用"/>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAddUser" size="mini" :loading="loadingObj.confirmAdd">确 定</el-button>
        <el-button @click="addUserDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!--修改-->
    <el-dialog v-if="table_row_data" :visible.sync="updateUserDialog" title="修改密码" width="400px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item">运营用户ID：</span>
          <el-input style="width: 200px;" :disabled="true" v-model="table_row_data.code"/>
        </p>
        <p>
          <span class="dialog-label-item userAccount">运营用户账号：</span>
          <el-input style="width: 200px;" :disabled="true" v-model="currentUserName"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>新密码：
          </span>
          <el-input style="width: 200px;" v-model="updateData.passwd" :type="newPasswordType"/>
          <span class="show-pwd" @click="showPwd(1)">
            <svg-icon :icon-class="newPasswordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>确认密码：
          </span>
          <el-input style="width: 200px;" v-model="updateData.confirmPasswd" :type="confirmPasswdType"/>
          <span class="show-pwd" @click="showPwd(2)">
            <svg-icon :icon-class="confirmPasswdType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okUpdateUserInfo" size="mini" :loading="loadingObj.confrimUpData">确 定</el-button>
        <el-button @click="updateUserDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 查看用户详情 -->
    <el-dialog :visible.sync="detailUserDialog" title="查看用户详情" width="80%" :top="dialogMt"  :close-on-click-modal="false">
      <!-- 用户信息 -->
      <ul class="heard-search dialog-search" ref="user-info-box" v-if="detailUserInfo != null">
        <li>
          <span class="rem_tit">运营用户ID：</span>
          <span class="rem_con">{{ detailUserInfo.code }}</span>
        </li>
        <li>
          <span class="rem_tit">运营用户账号：</span>
          <span class="rem_con">{{ detailUserInfo.username}}</span>
        </li>
        <li>
          <span class="rem_tit">角色名称：</span>
          <span class="rem_con">{{ detailUserInfo.roleName ? detailUserInfo.roleName : '-' }}</span>
        </li>
        <li>
          <span class="rem_tit">创建时间：</span>
          <span class="rem_con">{{ detailUserInfo.createdDate }}</span>
        </li>
        <li>
          <span class="rem_tit">当前状态：</span>
          <span class="rem_con">{{ detailUserInfo.disable ? '禁用' : '启用' }}</span>
        </li>
      </ul>
      <div class="primission-box">
        <!-- 树结构 -->
        <div class="tree_css">
          <el-tree 
            default-expand-all 
            :data="treeData"  
            :props="defaultProps" 
            :highlight-current="true"
            node-key="id"
            @node-click="handleNodeClick"
             v-loading="loadingObj.detailUserInfo_tree"        
          >
          </el-tree>
        </div>
        <!-- 联动表格 -->
        <div style="float:right;overflow:hidden;" class="mytablecss">
          <el-table                                      
            :header-cell-style="tableHeaderColor"                                      
            :cell-style="rowcellClass"                                      
            :key="tableKey"                                      
            :data="tableData"                                      
            highlight-current-row       
            v-loading="loadingObj.detailUserInfo_table"                                       
            style="width: 100%;"                                      
            height="540"                                      
            border  
            class="tableAuto170"
            >
            <el-table-column label="序号" type="index" align="center" width="50" show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="权限编号" property="code" align="center" show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="权限名称" property="name" align="center"  show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="父级名称" property="parentName" align="center" show-overflow-tooltip>
                <template slot-scope="scope">
                <span>{{ scope.row.parentName ? scope.row.parentName : '平台后台' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="页面地址" property="mainDataName" align="center"  show-overflow-tooltip>
                <template slot-scope="scope">
                <span>{{ scope.row.mainDataName ? scope.row.mainDataName : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="权限所属对象" property="owner" align="center"  show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex";
import { detailUserInfo,getTreeData,getPermission,disable,persist,adminMergePasswd } from "@/api/systemManage/sm_user";
import { findByCode } from '@/api/select'
import { validateUserName,validatePwd,validateCommonUserName} from '@/utils/validate.js'
export default {
  name: "sm_user",
  computed: {
    ...mapState({
      allData: state => state.sm_user.allData,
      allData_total: state => state.sm_user.allData_total,
      currentPageSize: state => state.sm_user.currentPageSize
    }),
    size: {
      get(){
        return this.$store.state.sm_user.size;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.sm_user.page;
      },
      set(item){
        return  item;
      }
    },
    smUserForm: {
      get(){
        return this.$store.state.sm_user.smUserForm;
      },
      set(item){
        return  item;
      }
    }
  },
  data() {
    return {
      sortRule:{prop:null,order:null},
      tabData:[],
      disableControl: false, // 列表未返回数据前，操作按钮均不可用
      tableData: [], // 联动表格初始化数据
      treeData: [], // 权限树初始化数据
      loading:false, // Loading 加载
      statetype: "2", //  查询上的--输入状态获取的值
      table_id: null, // 表格数据id
      table_row_data:null,
      startStopUsingDialog: false, // 启用-禁用弹窗
      currentUserName: null, // 当前选中数据行用户名
      currentDisable: null, // 当前选中数据行状态
      usingType:null,
      addUserDialog: false,
      updateUserDialog: false,
      detailUserDialog: false,
      detailUserInfo: null,
      tableKey: 0,
      total: 0,
      screenWidth: document.body.clientWidth, // 屏幕尺寸
      screenHeight: document.body.offsetHeight , // 屏幕尺寸
      newPasswordType: 'password',
      confirmPasswdType: 'password',
      newPwd:"",
      confirmPasswd:"",
      updateType: '',
      disableArr: [{ value: "",name: "全部"}], // 状态下拉列表
      start: { // 启用-禁用
        title_Name: null,
        data_Name: null
      },
      defaultProps: { // 树插件数据格式
        children: 'children',
        label: 'name',
        parentId:""
      },
      addData:{
        username:"",
        passwd:"",
        confirmPasswd:"",
      },
      updateData:{
        username:"",
        passwd:"",
        confirmPasswd:""
      },
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6;//如果没有后面的-8.64e6就是不可以选择今天的
      }
      },
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
      loadingObj:{
        confirmAdd:false,
        confrimUpData:false,
        detailUserInfo_tree:false,
        detailUserInfo_table:false,
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
    findByCode({code: 'DISABLE'}).then(res => {
      let resData = res.data;
      if(resData.success == 1) {
        this.disableArr = resData.content['DISABLE']
      }else {
        this.$message.error(resData.respMsg)
      }
    })
  },
  methods: {
    getList(val) { // 填充表格数据
      if(!val) {
        val = 1
      }
      this.loading = true; // 请求接口时loading启用
      this.disableControl = true;
      this.$store.dispatch('getUserPage',val);
      this.table_id = null;
      let data = {
        page: this.page - 1,
        size: this.size,
        username: this.$store.state.sm_user.smUserForm.username,
        disable: this.$store.state.sm_user.smUserForm.disable != null ? this.$store.state.sm_user.smUserForm.disable : 'false'
      };
      
      this.$store.dispatch("getUserInfo", data).then( res => {
        if(res.success == 1){
          let currentPageSize = 2;
          this.tabData = res.content.content;
          if(res.content.content.length > 0) {
            currentPageSize = res.content.content.length;
          }else {
             currentPageSize = 2;
          }
          this.$store.dispatch('getUserTableHeight', currentPageSize)
        }else {
          this.$message.error(res.respMsg)
        }
        this.loading = false; // 接口返回数据时，loading禁用
        this.disableControl = false;
      });
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
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    search() { // 查询
      this.getList()
    },
    reset() { // 重置查询条件
      this.$store.state.sm_user.smUserForm= { // 查询条件
            username: null,
            disable: "0"
          }
    },
    stop_start_using(type,h) { // 启用-禁用弹窗
      if (!this.table_id) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.start.data_Name = this.lastChangeUserName;
      if(type == 'start') {
        this.start.title_Name = "启用";
        this.usingType = 1;
      }else if(type =='stop') {
        this.start.title_Name = "禁用";
        this.usingType = 2;
      }
      if(type == 'start' && this.currentDisable == false){
        this.$message.warning("该数据已被启用，不可操作");
        return false;
      }else if(type =='stop' && this.currentDisable == true){
        this.$message.warning("该数据已被禁用，不可操作");
        return false;
      }
      this.startStopUsingDialog = true;
    },
    addUser(h) { // 新增用户弹窗
      //置空上次新增用户保存的密码和确认密码
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.addData.passwd = null;
      this.addData.confirmPasswd = null;
      this.addData.username = null;
      this.addUserDialog = true;
    },
    okAddUser() { // 确定新增用户
      let data = {
        username:this.addData.username,
        passwd: this.$md5(this.addData.passwd),
        confirmPasswd: this.$md5(this.addData.confirmPasswd) // 暂时不加密($md5)
      }
      
      if(!validateUserName(this.addData.username)) {
        this.$message.warning('运营用户账号限制4-8位字符、首字母小写；纯小字母或小写字母和数字组合')
        return false;
      }
      if(!validatePwd(this.addData.passwd)) {
        this.$message.warning('密码限制4-15位字符,必须数字和字母组合')
        return false;
      }
      if(!validatePwd(this.addData.confirmPasswd)) {
        this.$message.warning('确认密码限制4-15位字符,必须数字和字母组合')
        return false;
      }
      this.loadingObj.confirmAdd = true;
      if(this.addData.passwd == this.addData.confirmPasswd) {
        persist(data).then(res => {
          let resData = res.data;
          if(resData.success == 1) {
            this.$message.success(resData.respMsg)
            this.addUserDialog = false;
            this.getList()
          }else {
            this.$message.error(resData.respMsg)
          }
          this.loadingObj.confirmAdd = false;
        })
      }else{
        this.$message.warning('确认密码和新密码不一致');
        return false;
      }
    },
    updateUserInfo(type,h) { // 修改密码
      if (!this.table_id) {
        this.$message.warning('请选中一条数据')
        return;
      }
      this.updateData.passwd = '';
      this.updateData.confirmPasswd = '';
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.updateUserDialog = true;
    },
    okUpdateUserInfo() { //确认修改密码
      let data = {
        id:this.table_id,
        passwd:this.updateData.passwd ? this.$md5(this.updateData.passwd) : null,
        confirmPasswd:this.updateData.confirmPasswd ? this.$md5(this.updateData.confirmPasswd) : null
      }
      
      if(!validatePwd(this.updateData.passwd)) {
        this.$message.warning('新密码限制4-15位字符,不可纯数字或纯字母,必须数字和字母组合');
        return false;
      }

      if(!validatePwd(this.updateData.confirmPasswd)) {
        this.$message.warning('确认密码限制4-15位字符,不可纯数字或纯字母,必须数字和字母组合');
        return false;
      }
     
      if(this.updateData.passwd != this.updateData.confirmPasswd) {
        this.$message.warning('两次输入不一致!请重新输入');
        return
      }
      this.loadingObj.confrimUpData = true;
      adminMergePasswd(data).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.updateUserDialog = false;
          this.getList();
        }else{
          this.$message.success(resData.respMsg)
        }
        this.loadingObj.confrimUpData = false;
      })
    },
    okStartStopUsing(type){ // 确认是否启用
      let data = {
        id: this.table_id,
        disable: null
      }
      if(type == "启用") {
        data.disable = false
      }else if(type == "禁用") {
        data.disable = true
      }
      disable(data).then(res => {
        
        let resData = res.data;
        if(resData.success == 1) { // 成功
          this.$message.success(resData.respMsg);
          this.getList()
        }else {
          this.$message.error(resData.respMsg);
        }
      })
      this.startStopUsingDialog = false;
    },
    detailUser(h) { // 查看用户详情
      if (!this.table_id) {
        this.$message.warning('请选择一条数据');
        return;
      }
      this.detailUserDialog = true;
      this.loadingObj.detailUserInfo_tree = true;
      this.loadingObj.detailUserInfo_table = true;
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);

      getPermission({"id": this.table_id,"permissionId": ""}).then(res => {
        let resData = res.data
        if(resData.success == 1) {
          this.tableData = resData.content
        }else {
          // this.$message('数据异常')
           this.$message.error(esData.respMsg);
        }
        this.loadingObj.detailUserInfo_table = false;
      })
      detailUserInfo({"id": this.table_id}).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.detailUserInfo = res.data.content;
        }else {
          // this.$message('数据异常');
           this.$message.error(esData.respMsg);
        }
         
      })
      
      getTreeData({"id": this.table_id}).then(res => {
        
        let resData = res.data;
        if(resData.success == 1) {
          this.treeData = resData.content;
        }else {
          // this.$message('数据异常');
           this.$message.error(esData.respMsg);
        }
        this.loadingObj.detailUserInfo_tree = false;
      })
    
    },
    indexMethod(index) { // 返回表格自增序列号
      return index;
    },
    handleNodeClick(val) {
      getPermission({"id": this.table_id,"permissionId": val.id}).then(res => {
        let resData = res.data
        if(resData.success == 1) {
          this.tableData = resData.content
        }else {
          // this.$message('数据异常')
          this.$message.error(esData.respMsg);
        }
      })
    },
    handleSizeChange(val) { // 页码切换方法
      this.$store.dispatch('getUserPageSize', val)
      this.getList();
    },
    handleCurrentChange(val) { // 表格数据航切换方法
      if(val != null) {
        this.table_row_data = val;
        this.table_id = val.id; // 数据唯一id
        this.currentUserName = val.username; // 当前操作 数据的用户名
        this.currentDisable = val.disable; // 当前操作 数据的状态 
      }
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color:rgb(247, 251, 254); padding: 4px 0;text-align:center;";
    },
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
    sortChange(column){     
     if(column.order !==null&&column.prop ==="lastLoginTime"){
       let data = [];
       for(let i = 0;i<this.allData.length;i++){
         if(!this.allData[i].lastLoginTime){
           data.push(this.allData[i])
         }else{
            data.unshift(this.allData[i])
         }
       }
      this.allData = data;     
     }
     // 如果不排序了，就回复到最初末排序的状态
     if(!column.order){
       this.allData = this.tabData;
     }
     // 把当前排序规则记录下来，给翻页提供默认排序条件
     this.sortRule.order = column.order;
     this.sortRule.prop = column.prop;
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
        this.$store.state.sm_user.allData = []
        this.$store.state.sm_user.allData_total = 0;
        this.$store.state.sm_user.page = 1;
        this.$store.state.sm_user.size = 10;
        this.$store.state.sm_user.smUserForm= { // 查询条件
            username: null,
            disable: "0"
        }
        this.$store.dispatch('getUserTableHeight', 2)
      }
    }else {
      if(this.$store.state.sm_user.allData.length > 0) {
        this.getList()
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.mytablecss {
  width: calc(100% - 250px);
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
.searchFrom{
  .el-input{
    width: 155px;
  }
}

.smUser {
  .dialog-box{
    p{
      .show-pwd{
        right:20%;
      }
    }
    .userAccount{
      width: 110px;
      margin-left: 10px;
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




