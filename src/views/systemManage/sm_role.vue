<template>
  <!--角色管理-->
  <div class="app-container smRole">
    <!-- 操作栏 -->
    <el-form :model="formInline">
      <ul class="heard-search">
        <li>
          <span class="rem_tit">角色名称：</span>
          <span class="rem_con">
            <el-input v-model="formInline.name" placeholder="请输入角色名称" maxlength="20" :disabled="disableControl"></el-input>
          </span>
        </li>
        <li>
          <span class="rem_tit">状态：</span>
          <span class="rem_con">
            <el-select v-model="formInline.disable" value-key="name" placeholder="全部" :disabled="disableControl">
              <el-option v-for="item in disableArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" @click="search" :disabled="disableControl">
          <svg-icon icon-class="chaxun" />
          查询
        </el-button>
        <el-button type="primary" size="mini" @click="resetData" :disabled="disableControl">
          <svg-icon icon-class="zhongzhi" />
          重置
        </el-button>
        <el-button type="primary" size="mini" @click="startOrStop('start',148)" :disabled="disableControl">
          <svg-icon icon-class="qiyong1" />
          启用
        </el-button>
        <el-button type="primary" size="mini" @click="startOrStop('stop',148)" :disabled="disableControl">
          <svg-icon icon-class="jinyong1" />
          禁用
        </el-button>
        <el-button type="primary" size="mini" @click="roleAdd(266)" :disabled="disableControl">
          <svg-icon icon-class="xinzeng1" />
          新增
        </el-button>
        <el-button type="primary" size="mini" @click="roleAccredit(696)" :disabled="disableControl">
          <svg-icon icon-class="shouquan" />
          授权
        </el-button>
        <el-button type="primary" size="mini" @click="assignUser(449)" :disabled="disableControl">
          <svg-icon icon-class="fenpei" />
          分配用户
        </el-button>
        <el-button type="primary" size="mini" @click="detailUserInfo(648)" :disabled="disableControl">
          <svg-icon icon-class="chakanxiangqing" />
          查看角色详情
        </el-button>
      </el-form-item>
    </el-form>
    <!-- 数据表格 -->
    <div class="role_table">
      <el-table
        :header-cell-style="tableHeaderColor"
        :cell-style="rowcellClass"
        :key="0"
        :data="allData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%;"
        border
        class="tableAuto216"
        :height="currentPageSize*25 + 34"
        v-loading="loading"
      >
        <el-table-column width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column type="index" label="序号" width="50" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+(page-1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column sortable label="角色编号"  property="code" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="角色名称"   property="name" align="center" show-overflow-tooltip>
        </el-table-column>>
        <el-table-column sortable label="状态"  property="disable" width="80" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.disable ? '禁用': '启用' }}
          </template>
        </el-table-column>
        <el-table-column label="备注" property="remark" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.remark ? scope.row.remark : '-' }}
          </template>
        </el-table-column>
        <el-table-column label="创建人" property="createdBy" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.createdBy ? scope.row.createdBy : '-' }}
          </template>
        </el-table-column>
        <el-table-column  sortable label="创建时间"  property="createdDate" width="150" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.createdDate ? scope.row.createdDate : '-' }}
          </template>
        </el-table-column>
        <el-table-column label="修改人" property="lastModifiedBy" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.lastModifiedBy ? scope.row.lastModifiedBy : '-' }}
          </template>
        </el-table-column>
        <el-table-column  sortable label="最后修改时间" property="lastModifiedDate" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.lastModifiedDate ? scope.row.lastModifiedDate : '-' }}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页    数据要是大于1000条时，把分页释放掉-->
    <!-- <div class="role_pagination">
      <el-pagination
        background
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="pageSize"
        :total="allData_total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getList"
      ></el-pagination>
    </div> -->
    <!--启用与禁用-->
    <el-dialog :visible.sync="startOrStopDialog" :title="set_start.title_Name" width="350px" class="role_dialog" top="35vh" :close-on-click-modal="false">
      <div class="dialog-box">
        <p style="text-align: center;">
          是否确定{{set_start.title_Name}}角色
          <span class="required">“{{set_start.role}}”</span>？
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="confirmEnableOrDisbled(set_start.title_Name)">确 定</el-button>
        <el-button @click="startOrStopDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>


 <!-- 新增-->
    <!-- <el-dialog :visible.sync="addDialogVisible" title="新增" width="380px" class="ipConfig_dialog" :close-on-click-modal="false" :top="dialogMt">
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>IP地址：
          </span>
          <el-input style="width: 200px;" v-model="addData.address" maxlength="40" @input="validateIpInput('新增')"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required ">*</span>类型：
          </span>
          <el-select v-model="addData.category" value-key="name" placeholder="请选择">
            <el-option v-for="item in addIpTypeArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
          </el-select>
        </p>
        <p>
          <span class="dialog-label-item input-description-span">IP说明：</span>
          <el-input style="width: 200px;" type="textarea" :autosize="{ minRows: 2}" v-model="addData.description" maxlength="50"/>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAdd" size="mini" :loading="loadingObj.ipAdd">确 定</el-button>
        <el-button @click="addDialogVisible = false" size="mini">取 消</el-button>
      </span>
    </el-dialog> -->



    <!--新增-->
    <el-dialog :visible.sync="diialogAdd" title="新增" width="390px" class="role_dialog" top="35vh" :close-on-click-modal="false">
      <div class="dialog-box dialog-box-role">
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span> 角色名称：
          </span>
          <el-input v-model="addData.name" maxlength="20" width="120px"/>
        </p>
        <p style="padding: 6px 0px;">
          <span class="dialog-label-item">状态：</span>
          <el-input disabled="disabled" placeholder="启用"/>
        </p>
        <p>
          <span class="dialog-label-item input-remark-span" maxlength="50">备注：</span>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2}"
            v-model="addData.remark"
            maxlength="50"
          />
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAdd" size="mini" :loading="loadingObj.roleAdd">确 定</el-button>
        <el-button @click="diialogAdd = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>

    <!--授权-->
    <el-dialog :visible.sync="diialogAccredit" title="授权" width="80%" class="role_dialog_ Accredit" top="10vh" :close-on-click-modal="false">
      <div class="dialog-box">
        <ul class="heard-search dialog-search">
          <li>
            <span class="rem_tit">角色编号：</span>
            <span class="rem_con">{{ table_row_data ? table_row_data.code : '' }}</span>
          </li>
          <li>
            <span class="rem_tit">角色名称：</span>
            <span class="rem_con">{{ table_row_data ? table_row_data.name : '' }}</span>
          </li>
        </ul>
      </div>
      <div class="accredit-content" style="height:540px; margin-top: 15px;display:flex;justify-content: space-between;">
        <div class="tree_css">
          <el-tree
            default-expand-all
            node-key="id"
            :default-checked-keys="treeCheckedKeys"
            ref="tree"
            :highlight-current="true"
            :data="accreditTreeData"
            show-checkbox
            :props="defaultProps"
            @check="handleCheckChange"
            @node-click="handleNodeClick1"
          ></el-tree>
        </div>
        <div style="width: 80%;height: 100%;">
          <el-table                                      
            :header-cell-style="tableHeaderColor"                                      
            :cell-style="rowcellClass"                                                                          
            :data="accreditTableData"                                      
            highlight-current-row                                      
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
                  <span> {{ scope.row.mainDataName ? scope.row.mainDataName : '-' }} </span>
              </template>
            </el-table-column>
            <el-table-column label="权限所属对象" property="owner" align="center"  show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="页面权限" property="permissionable" align="center"  show-overflow-tooltip>
                <!-- <template slot-scope="scope">
                    <span> {{ scope.row.pagePermission ? '有' : '无' }} </span>
                </template> -->
            </el-table-column>
          </el-table>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okSavePermission" size="mini" :loading="loadingObj.roleAuthor">保 存</el-button>
        <el-button @click="diialogAccredit = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>

    <!--分配用户-->
    <el-dialog :visible.sync="diialogAllocationUser" title="分配用户" width="565px" class="role_dialog AllocationUser" :close-on-click-modal="false">
      <div class="dialog-box">
        <ul class="heard-search dialog-search">
          <li>
            <span class="rem_tit">角色编号：</span>
            <span class="rem_con">{{ table_row_data ? table_row_data.code : '-' }}</span>
          </li>
          <li>
            <span class="rem_tit">角色名称：</span>
            <span class="rem_con">{{ table_row_data ? table_row_data.name : '-'}}</span>
          </li>
        </ul>
      </div>
      <div class="dialog-box" style="margin-top:20px;">
        <el-transfer
          class="sm_role_transfer"
          :titles="[ '未分配用户','已分配用户']"
          :data="unassignList"
          v-model="assignList"
          @change="handleChange"
        ></el-transfer>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAssignUser(rowRoleData.roleId)" :loading="loadingObj.roleDistribution" size="mini">保 存</el-button>
        <el-button @click="diialogAllocationUser = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>

    <!--查看角色详情-->
    <el-dialog :visible.sync="diialogDetails" title="查看角色详情" width="80%" class="role_dialog_ Details" :close-on-click-modal="false">
      <div class="dialog-box">
        <ul class="heard-search dialog-search">
          <li>
            <span class="rem_tit">角色编号：</span>
            <span class="rem_con">{{ table_row_data ? table_row_data.code : '-' }}</span>
          </li>
          <li>
            <span class="rem_tit">角色名称：</span>
            <span class="rem_con">{{ table_row_data ? table_row_data.name : '-' }}</span>
          </li>
          <li>
            <span class="rem_tit">角色拥有用户数：</span>
            <span class="rem_con">{{ userNum }}</span>
          </li>
          <li>
            <span class="rem_tit">创建时间：</span>
            <span class="rem_con">{{ table_row_data ? table_row_data.createdDate : '-' }}</span>
          </li>
          <li>
            <span class="rem_tit">当前状态：</span>
            <span class="rem_con">{{ table_row_data ? (table_row_data.disable ? '禁用' : '启用') : '-' }}</span>
          </li>
        </ul>
      </div>
      <div class="dialog_content_box">
        <!-- 树结构 -->
        <div class="tree_css">
          <el-tree 
            default-expand-all 
            :data="treeData"  
            :props="defaultProps" 
            :highlight-current="true"
            node-key="id"
            v-loading="loadingObj.detailUserInfo_tree"
            @node-click="handleNodeClick2"
          >
          </el-tree>
        </div>
       <!-- 联动表格 -->
        <div class="mytablecss">
          <el-table                                      
            :header-cell-style="tableHeaderColor"                                      
            :cell-style="rowcellClass"                                                                
            :data="tableData"                                      
            highlight-current-row                                      
            style="width: 100%;"                                      
            height="540"   
            v-loading="loadingObj.detailUserInfo_table"                                   
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
import "@/styles/systemManage/smRole.scss";
import { mapState } from "vuex";
import { findPage,disable,add,treeAndList,permissionAuthList,permission,savePermission,findRoleUser,saveRoleUser,permissionTree } from "@/api/systemManage/sm_role";
import { findByCode } from '@/api/select'
import { validateCommonUserName } from "@/utils/validate";
export default {
  name: "sm_role",
  computed: {
    ...mapState({
      allData: state => state.sm_role.allData,
      allData_total: state => state.sm_role.allData_count,
      currentPageSize: state => state.sm_role.currentPageSize,
    }),
    pageSize: {
      get() {
        return this.$store.state.sm_role.pageSize;
      },
      set(item) {
        return item;
      }
    },
    page: {
      get() {
        return this.$store.state.sm_role.page;
      },
      set(item) {
        return item;
      }
    },
    formInline: {
      get(){
        return this.$store.state.sm_role.formInline;
      },
      set(item){
        return  item;
      }
    }
  },
  data() {
    return {
      loadingObj:{
        roleAdd:false, // 新增确定
        roleAuthor:false,
        roleDistribution:false,
        detailUserInfo_tree:false, // 查看详情 树
        detailUserInfo_table:false, // 查看详情 table
      },
      userNum: '',// 角色拥有用户数量
      disableControl: false,
      assignList: [], // transfer数据源
      unassignList: [], // transfer 绑定数据
      saveAssignList: [], // 存储当前已分配用户的数组
      tempAssignList: [], // 用户保存时比较的临时数组
      permissionIdList: [], // 选中的权限节点集合
      treeCheckedKeys: [], // 默认选中的节点
      accreditTreeData: [], // 授权树数据
      accreditTableData: [], // 授权权限列表数据
      tableData: [], // 联动表格初始化数据
      treeData: [], // 权限树初始化数据
      loading:false, // Loading 加载
      startOrStopDialog: false, // 弹框---启用与禁用
      diialogAdd: false, // 弹框新增
      diialogUpdata: false, // 弹框修改
      diialogAccredit: false, // 弹框授权
      diialogAllocationUser: false, // 弹框分配用户
      diialogDetails: false, //弹框查看角色详情
      diialogDetails_preview: false, // 预览查看详情
      diialogDetails_show: true, // 查看角色详情  条件是否展示
      table_row_data: null, // 一行的数据
      table_id: null, // 单选选中的按钮id
      assUserList: [], // 已分配数据
      tableKey: 0,
      noCheckUserList: [], // 未分配数据
      dialogMt:this.dialogMt, // 弹出框上边距
      defaultProps: { // 树插件数据格式
        children: 'children',
        label: 'name',
      },
      disableArr: [{ value: "",name: "全部"}], // 状态下拉列表
      addData: { // 新增数据
        name: "",
        remark: ""
      },
      updata: { // 修改数据
        roleId: "",
        roleName: "",
        remark: ""
      },
      rowRoleData: { // 授权数据与分配数据
        name: "", // 角色名称
        code: "" // 角色编号
      },
      set_start: { // 启用禁用获取数据
        title_Name: null,
        data_Name: null,
        type: null,
        role: null
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6; // 如果没有后面的-8.64e6就是不可以选择今天的
        }
      },
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
    };
  },
  mounted(){
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
    findByCode({code: 'DISABLE'}).then(res => { // 初始化状态下拉列表
      let resData = res.data;
      if(resData.success == 1) {
        let by_disableArr = resData.content['DISABLE']
         by_disableArr.forEach(element => {
            this.disableArr.push(element);
          });
      }else {
        this.$message.error(resData.respMsg)
      }
    })

  },
  methods: {
    search() {
      this.getList();
    },
    getList(val) {
      if(!val) {
        val = 1
      }
      this.table_row_data = "";
      this.table_id = "";
      this.$store.dispatch("getRolePage", val);

      let data = {
        name: this.$store.state.sm_role.formInline.name || null, // 角色名称
        disable: this.$store.state.sm_role.formInline.disable || null, //状态
        page: this.page - 1,
        size: this.pageSize
      };
      
      this.loading = true; // 请求接口时loading启用
      this.disableControl = true;

      this.$store.dispatch("getRoleinfo", data).then(res => {
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
        
        this.$store.dispatch("getRoleTableHeight", currentPageSize);
        this.loading = false; // 接口返回数据时，loading禁用
        this.disableControl = false;
      });
    },
    resetData(value) {  // 重置查询的数据    
      this.$store.state.sm_role.formInline.name = null,
      this.$store.state.sm_role.formInline.disable = null
    },
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    startOrStop(val,h) { // 启用/禁用弹框
      if(!this.table_id) {
        this.$message.warning("请选择一条数据");
        return false;
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      if(val === "start") {
        this.set_start.title_Name = "启用";
      }else if (val === "stop") {
        this.set_start.title_Name = "禁用";
      }
      if(val == "start" && this.table_row_data.disable == false){
        this.$message.warning("该数据已被启用，不可操作");
        return false;
      }else if(val == "stop" && this.table_row_data.disable == true){
        this.$message.warning("该数据已被禁用，不可操作");
        return false;
      }
      this.set_start.role = this.table_row_data.name;
      this.startOrStopDialog = true;
    },
    confirmEnableOrDisbled(val){ // 确认启用-禁用
      let data = {
        id: this.table_row_data.id,
        disable: !this.table_row_data.disable
      }
      disable(data).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.startOrStopDialog = false;
          this.getList()
        }else {
          this.$message.error(resData.respMsg);
        }
      })
    },
    roleAdd(h) { // 新增的方法
      this.addData = {
        roleName: "",
        start: "启用",
        remark: ""
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.diialogAdd = true;
    },
    okAdd(){  // 确认新增
      let data = {
        name: this.addData.name,
        remark:this.addData.remark
      };
      if (!validateCommonUserName(this.addData.name)) {
        this.$message.warning("角色名称仅支持输入2-20个字符，中文，字母与数字的组合");
        return false;
      }
      this.loadingObj.roleAdd = true;
      add(data).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg);
          this.diialogAdd = false;
          this.getList();
        }else {
          this.$message.error(resData.respMsg)
        }
        this.loadingObj.roleAdd = false;
      })

    },
    roleAccredit(val,h) { // 授权
      if(!this.table_id) {
        this.$message.warning("请选择一条数据");
        return false;
      }
      if(this.table_row_data.id==1||this.table_row_data.name == "超级管理员"){
          this.$message.warning("该角色不允许授权操作");
          return false;
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
    
      treeAndList({id: this.table_id}).then(res => { // 初始化授权树
        let resData = res.data;
        if(resData.success == 1) {
          this.diialogAccredit = true;
          this.accreditTreeData = resData.content.treeList;
          this.treeCheckedKeys = resData.content.permissionIdList; // 已授权页面
          this.permissionIdList = this.treeCheckedKeys;
          if(this.$refs.tree){
            this.$refs.tree.setCheckedKeys(this.treeCheckedKeys)
          }
        }else {
          this.$message.error(resData.respMsg);
        }
      })
      permissionAuthList({id: this.table_id,permissionId:""}).then(res => { // 初始化权限列表
        let resData = res.data;
        if(resData.success == 1) {
          this.accreditTableData = resData.content;
        }
      })
    },
    okSavePermission(value, res) { // 保存授权
      this.permissionIdList
      
      if(this.treeCheckedKeys.sort().toString() == this.permissionIdList.sort().toString()) {
        this.$message.warning('角色'+this.table_row_data.code+'无发生任何操作异动')
        return false;
      }
      let data = {
        id: this.table_id,
        permissionIdList: this.permissionIdList
      }
      this.loadingObj.roleAuthor = true;
      savePermission(data).then(res => {
        
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.diialogAccredit = false;
          this.getList();
        }
        this.loadingObj.roleAuthor = false;
      })
    },
    handleCheckChange(treeData,currentChooseData) { // 授权窗口 点击复选框事件      
      this.permissionIdList = [];
      this.permissionIdList = currentChooseData.checkedKeys.concat(currentChooseData.halfCheckedKeys)
    },
    handleNodeClick1(val) { // 授权界面 节点点击事件
      permissionAuthList({id:this.table_id,permissionId: val.id}).then(res => {       
        let resData = res.data;
        if(resData.success == 1) {
          this.accreditTableData = resData.content;
        }
      })
    },
    handleNodeClick2(val) { // 查看详情 节点点击事件
      permission({id: this.table_id,permissionId: val.id}).then(res => {       
        let resData = res.data;
        if(resData.success == 1) {
          this.tableData = resData.content;
        }
      })
    },
    assignUser(val,h) { // 分配用户的方法
      if(!this.table_id) {
        this.$message.warning("请选择一条数据");
        return;
      }
      // if(this.table_row_data.id==1||this.table_row_data.name == "超级管理员"){
      //     this.$message.warning("该角色不允许分配用户");
      //     return false;
      // }
      this.dialogHeight = h;;
      this.judgeScree(this.dialogHeight);
      this.unassignList = []; // 每次加载弹窗初始化本地未授权数组
      this.assignList = []; // 每次加载弹窗初始化本地已授权数组
      findRoleUser({id: this.table_id}).then(res => {
        
        let resData = res.data;
        if(resData.success == 1) {
          if(resData.content.assignList.length) {
            // 展示已分配的用户
            resData.content.assignList.map(item => { 
              this.assignList.push(parseInt(item.id)) 
              this.saveAssignList.push(parseInt(item.id))
            })
          }

          // 展示未分配用户
          let arr = resData.content.unassignList.concat(resData.content.assignList)
          arr.map(item => {
            this.unassignList.push({"key": parseInt(item.id),"label": item.name,"disabled": false}) 
          })
        }else {
          this.$message.error(resData.respMsg)
        }
      })
      this.diialogAllocationUser = true;
      
    },
    okAssignUser(val) { // 保存分配用户
      // 比较当前
      if(this.saveAssignList.sort().toString() == this.tempAssignList.sort().toString()) {
        this.$message.warning(this.table_row_data.name+'无发生任何操作异动');
      }else {
        let data = {
          id: this.table_id,
          userIdList: this.assignList.length >= 1 ? this.assignList : []
        }
        this.loadingObj.roleDistribution = true;
        saveRoleUser(data).then(res => {
          let resData = res.data;
          
          if(resData.success == 1) {
            this.$message.success(resData.respMsg);
            this.diialogAllocationUser = false;
            this.getList()
          }else {
            this.$message.error(resData.respMsg)
          }
          this.loadingObj.roleDistribution = false;
        })
      }
    },
    detailUserInfo(val,h) { // 查看详情
      if(!this.table_id) {
        this.$message.warning("请选择一条数据");
        return;
      }
       // 分查看角色详情的方法
      this.diialogDetails = true;
      this.loadingObj.detailUserInfo_tree = true;
      this.loadingObj.detailUserInfo_table = true;
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);

      permissionTree({id: this.table_id}).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.treeData = resData.content;
        }else {
          this.$message.error(resData.respMsg)
        }
        this.loadingObj.detailUserInfo_tree = false;
      })
       permission({id: this.table_id,permissionId:this.table_row_data.permissionId}).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.tableData = resData.content;
         
        }else {
          this.$message.error(resData.respMsg)
        }
        this.loadingObj.detailUserInfo_table = false;
      })
 
      findRoleUser({id: this.table_id}).then(res => { // 计算当前角色拥有用户数量
        let resData = res.data;
        if(resData.success == 1) {
          this.userNum = resData.content.assignList.length;
          // resData.content.unassignList
        }else {
          this.$message.error(resData.respMsg)
        }
      })
      
    },
    handleChange(a,b,c) {
      this.tempAssignList = this.assignList // 存储临时已授权用户列表
    },
    handleCurrentChange(val) { // 选中一行数据的方法
      if(val) {
        this.table_row_data = val;
        this.table_id = val.id;
      }
    },
    handleSizeChange(val) { // 切换页码方法
      this.$store.dispatch("getRolePageSize", val);
      this.getList();
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
    },
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
  },
  created() { // 初始化数据
    if(this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)) {
      if(this.$store.getters.currentView == this.$route.name) {
        this.$store.state.sm_role.allData = [];
        this.$store.state.sm_role.allData_count = 0;
        this.$store.state.sm_role.pageSize = 10;
        this.$store.state.sm_role.formInline = {
          name: null,
          disable: "",
        }
        this.$store.state.sm_role.page = 1;
        this.$store.dispatch("getRoleTableHeight", 2);
      }
    }else {
      if (this.$store.state.sm_role.allData.length > 0) {
        this.getList();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.el-transfer-panel__item.el-checkbox .el-checkbox__label {
  width: 160px;
}
.el-transfer-panel__list {
    flex-direction: column!important;
    display: flex!important;
}
.mytablecss {
  width: calc(100% - 250px);
  margin-left: 20px;
}
.el-date-editor .el-range-separator {
  width: 7%;
  line-height: 21px;
}
.el-tree-node__label {
  font-size: 12px;
}
.accredit-content{
  display:flex;
  flex-direction:row;
}
.smRole .role_dialog .el-dialog__body p{
  // margin-left: -12px;
}
.roleForm p .el-dialog .el-dialog__body .el-input{
  width: 160px!important;
}
.dialog_content_box{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>


