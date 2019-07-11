<template>
  <!--权限管理-->
  <div class="app-container smPermissions">
    <!-- 操作栏 -->
    <el-form :model="formInline">
      <ul class="heard-search">
        <li>
          <span class="rem_tit">权限名称：</span>
          <span class="rem_con">
            <el-input
              v-model="formInline.name"
              placeholder="请输入权限名称"
              maxlength="25"
              :disabled="disableControl"
            />
          </span>
        </li>
        <li>
          <span class="rem_tit">权限所属对象：</span>
          <span class="rem_con">
            <el-select
              v-model="formInline.owner"
              value-key="name"
              placeholder="全部"
              :disabled="disableControl"
            >
             <el-option label="全部" value="" ></el-option>
              <el-option
                v-for="item in permissionOwner"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">创建日期：</span>
          <span class="rem_con">
            <el-date-picker
              v-model="formInline.dateTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              @change="getDate"
              :disabled="disableControl"
            ></el-date-picker>
          </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" class="permissions_button" size="mini" @click.stop="search" :disabled="disableControl">
          <svg-icon icon-class="chaxun" />
          查询
        </el-button>
        <el-button type="primary" class="permissions_button" size="mini" @click="resetData" :disabled="disableControl">
          <svg-icon icon-class="zhongzhi" />
          重置
        </el-button>
        <el-button type="primary" class="permissions_button" size="mini" @click="deletePermission" :disabled="disableControl">
          <svg-icon icon-class="shanchu" />
          删除
        </el-button>
        <el-button type="primary" class="permissions_button" size="mini" @click="addOrUpdatePermission('新增')" :disabled="disableControl">
          <svg-icon icon-class="xinzeng1" />
          新增
        </el-button>
        <el-button type="primary" class="permissions_button" @click="addOrUpdatePermission('修改')" size="mini" :disabled="disableControl">
          <svg-icon icon-class="xiugai" />
          修改
        </el-button>
      </el-form-item>
    </el-form>
    <!-- 树结构 -->
    <div class="permissions_table">
      <div class="tree_css permissions-tree">
        <el-tree
          default-expand-all
          :data="tree_data"
          :highlight-current="true"
          :props="defaultProps"
          @node-click="handleNodeClick"
          class="tableAuto170"
          v-loading="loading_tree"
        ></el-tree>
      </div>
      <!-- 联动表格 -->
      <div class="mytablecss">
        <el-table
          :header-cell-style="tableHeaderColor"
          :cell-style="rowcellClass"
          :data="permissionData"
          @current-change="handleCurrentChange"
          highlight-current-row
          style="width: 100%;"
          height="calc(100vh - 208px)"
          border
          class="tableAuto170"
          v-loading="loading"
        >
          <el-table-column width="35" align="center" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-radio :label="scope.row.id" v-model="table_id">&nbsp;</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="序号" type="index" align="center" width="50" show-overflow-tooltip></el-table-column>
          <el-table-column label="权限编号" property="code" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column
            label="权限名称"
            property="name"
            width="120"
            align="center"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            label="父级名称"
            property="parentName"
            align="center"
            width="120"
            show-overflow-tooltip
          >
           <template slot-scope="scope">
              <span>{{ scope.row.parentName ? scope.row.parentName : '平台后台' }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="页面地址"
            property="mainDataName"
            align="center"
            width="120"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span>{{ scope.row.mainDataName ? scope.row.mainDataName : '-' }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="权限所属对象"
            property="owner"
            width="100"
            align="center"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span>{{ scope.row.owner == 0 ? '平台' : scope.row.owner == 1 ? '代理商' : scope.row.owner == 2 ? '公用' : '-' }}</span>
            </template>
          </el-table-column>
          <el-table-column label="排序" width="50" property="orderSeq" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column label="备注" property="remark" align="center" show-overflow-tooltip>
            <template slot-scope="scope">
              <span>{{ scope.row.remark ? scope.row.remark : '-' }}</span>
            </template>
          </el-table-column>
          <el-table-column label="创建人" property="createdBy" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column
            label="创建时间"
            property="createdDate"
            align="center"
            width="140"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            label="修改人"
            property="lastModifiedBy"
            align="center"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            label="最后修改时间"
            property="lastModifiedDate"
            align="center"
            width="165"
            show-overflow-tooltip
          ></el-table-column>
        </el-table>
      </div>
    </div>
    <!--新增-->
    <el-dialog
      :visible.sync="addPermissionDialog"
      title="新增"
      width="350px"
      :top="dialogMt"
      class="permissions_add_updata_dialog"
      :close-on-click-modal="false"
    >
      <div class="dialog-box addOrEdit">
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>权限名称：
          </span>
          <el-input v-model="addData.name" style="width: 200px;" maxlength="50"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>父级名称：
          </span>
          <el-input v-model="addData.parentName" :disabled="true" style="width: 120px;"/>
          <el-button style="padding: 6px 10px 6px 15px;" size="mini" @click="showTree('add')">点击选择</el-button>
        </p>
        <p>
          <span class="dialog-label-item">
            页面地址：
          </span>
          <el-select v-model="addData.mainDataId" value-key="name" placeholder="请选择">
            <el-option
              label="空链接"
              value=""
            ></el-option>
            <el-option
              v-for="item in pageUrlList"
              :label="item.name"
              :value="item.value"
              :key="item.value"
            ></el-option>
          </el-select>
        </p>
        <p>
          <span class="dialog-label-item userAccount">
            &nbsp;
            <span class="required">*</span>
            权限所属对象：
          </span>
          <el-select v-model="addData.owner" value-key="name" placeholder="请选择">
            <el-option
              v-for="item in updatapermissionOwner"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </p>
        <p>
          <span class="dialog-label-item">
            &nbsp;
            <span class="required">*</span> 排序：
          </span>
          <el-input v-model="addData.orderSeq" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span> 选择图标：
          </span>
          <el-input v-model="addData.icon" :disabled="true" style="width: 120px;"/>
          <el-button
            :disabled="chooseIconDisable"
            style="padding: 6px 10px 6px 15px;"
            size="mini"
            @click="chooseIcon(500,'add')"
          >点击选择</el-button>
        </p>
        <p>
          <span class="dialog-label-item input-remark-span">备注：</span>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2}"
            v-model="addData.remark"
            maxlength="50"
            style="width: 200px;"
          />
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAddOrUpdate('add')" :loading="loadingObj.permissionsAdd" size="mini">确 定</el-button>
        <el-button @click="addPermissionDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!--修改-->
    <el-dialog
      :visible.sync="updatePermissionDialog"
      title="修改"
      width="350px"
      :top="dialogMt"
      class="permissions_add_updata_dialog"
      :close-on-click-modal="false"
    >
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item">权限编号：</span>
          <el-input :disabled="true" v-model="updateData.code" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span> 权限名称：
          </span>
          <el-input v-model="updateData.name" style="width: 200px;" maxlength="15"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span> 父级名称：
          </span>
          <el-input v-model="updateData.parentName" :disabled="true" style="width: 120px;"/>
          <el-button class="smPermissions-treebutton" size="mini" @click="showTree('update')">点击选择</el-button>
        </p>
        <p>
          <span class="dialog-label-item">
            页面地址：
          </span>
          <el-select v-model="updateData.mainDataId" value-key="name" placeholder="请选择">
            <el-option
              label="空链接"
              value=""
            ></el-option>
            <el-option
              v-for="(item,index) in pageUrlList"
              :label="item.name"
              :value="item.value"
              :key="index"
            ></el-option>
          </el-select>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>权限所属对象：
          </span>
          <el-select v-model="updateData.owner" value-key="name" placeholder="请选择">
            <el-option
              v-for="item in updatapermissionOwner"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </p>
        <p>
          <span class="dialog-label-item">
            &nbsp;
            <span class="required">*</span> 排序：
          </span>
          <el-input type="number" v-model="updateData.orderSeq" style="width: 200px;"/>
        </p>

        <p>
          <span class="dialog-label-item">
            <span class="required">*</span> 选择图标：
          </span>
          <el-input v-model="updateData.icon" :disabled="true" style="width: 120px;"/>
          <el-button
            :disabled="chooseIconDisable"
            style="padding: 6px 10px 6px 15px;"
            size="mini"
            @click="chooseIcon(500,'update')"
          >点击选择</el-button>
        </p>
        <p>
          <span class="dialog-label-item input-remark-span">备注：</span>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2}"
            v-model="updateData.remark"
            maxlength="50"
            style="width: 200px;"
          />
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAddOrUpdate('update')" :loading="loadingObj.permissionsEdit" size="mini">确 定</el-button>
        <el-button @click="updatePermissionDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 删除 -->
    <el-dialog
      :visible.sync="deletePermissionDialog"
      title="删除"
      width="350px"
      top="35vh"
      :close-on-click-modal="false"
    >
      <p style="text-align:center;">
        是否确定删除权限页面
        <span class="required">"{{name}}"</span>？
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="okDelete" :loading="loadingObj.permissionsDelete">确 定</el-button>
        <el-button size="mini" @click="deletePermissionDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <!--父级权限-->
    <el-dialog
      :visible.sync="parentPermissionDialog"
      :modal="false"
      title="父级权限"
    
      width="22%"
      :top="dialogMt"
      class="permissions_add_updata_dialog"
      :close-on-click-modal="false"
    >
      <div class="dialog-box" style="height:340px; overflow: auto">
        <div class="tree_diialogTreeInfo_css" width="90%">
          <el-tree
            default-expand-all
            :data="parent_tree_data"
            :highlight-current="true"
            ref="parentpermissiontree"
            :props="defaultProps"
            @node-click="handleParentNodeClick"
            class="tableAuto170"
            v-loading="loading_parent_tree"
          ></el-tree>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okParentPermission" size="mini">确 定</el-button>
        <el-button @click="parentPermissionDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 图标库  -->
    <el-dialog
      :visible.sync="iconDialog"
      title="选择图标"
      width="230px"
      :top="dialogMt"
      class="permissions_add_updata_dialog"
      :close-on-click-modal="false"
    >
      <div class="dialog-box" style="height:150px; overflow: auto">
        <div class="tree_diialogTreeInfo_css" width="90%">
          <div class="icon-group">
            <ul>
              <li
                v-for="(item,index) in iconGroup"
                :key="index"
                :class="temp_icon_name == item.icon ? 'active-icon' : ''"
              >
                <svg-icon
                  :icon-class="item.icon"
                  class="this-icon"
                  @click="handleChooseIcon(item.icon)"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okIcon" size="mini">确 定</el-button>
        <el-button @click="iconDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import icons from "./sm_icons";
import { getPermissionTree,findList,remove,add,parentTree,merge } from "@/api/systemManage/sm_permissions";
import { findByCode, permissionUrlDropdownList } from "@/api/select";
import { pageUrl,validsevendata,permissionName ,validNinedata_wholeFour} from "@/utils/validate";
import { validateCommonUserName,validSort2 } from '@/utils/validate.js'
export default {
  name: "smpermissions",
  computed: {
    ...mapState({
      // permissionsRowData: state => state.sm_permissions.permissionsRowData,
      // iconNames: state => state.sm_permissions.iconName,
      // permissionsRowData_permissions: state =>
      //   state.sm_permissions.permissionsRowData_permissions,
      // permissionsListData: state => state.sm_permissions.permissionsListData,
      // treeParentId: state => state.sm_permissions.treeParentId
    }),
    formInline: {
      get(){
        return this.$store.state.sm_user.formInline;
      },
      set(item){
        return  item;
      }
    }
  },
  components: {
    icons
  },
  data() {
    return {
      rowdata:"", // 一行数据
      chooseIconDisable: false, // 权限
      disableControl: false,
      permissionData: [], // 初始化联动表格 数据
      tree_data: [], // 初始化权限树 数据
      parent_tree_data: [], // 初始化父级权限树 数据
      loading_tree: false, // Loading 树加载
      loading_parent_tree: false, // Loading 父级权限树加载
      loading: false, // Loading 加载
      table_id: null, // 选中表格数据Id
      name: null, // 权限名称
      temp_parent:{// 临时父级权限数据
        temp_parent_id:"",
        temp_parent_name:"",
        temp_parent_parentId:"",
        temp_parent_owner:""
      },
      // temp_parent_name: "", // 临时父级权限名称
      temp_icon_name: "", // 临时icon名称
      operate_type: "", // 操作类型(新增、修改)
      is_last_child_node: null, // 是否为末级节点
      addPermissionDialog: false, // 新增权限 弹窗
      updatePermissionDialog: false, // 修改权限 弹窗
      deletePermissionDialog: false, // 删除权限 弹窗
      parentPermissionDialog: false, // 父级权限 弹窗
      iconDialog: false, // 选择图标 弹窗
      isdisabled: true,
      defaultProps: {
        // 树插件数据格式
        children: "children",
        label: "name",
        parentId: ""
      },
      addData: { // 保存新增数据
          parentId: "",
          name:"",
          mainDataId:"",
          owner:"",
          orderSeq: "",
          icon: "",
          remark: "",
          parentName: "",
      },
      updateData: {// 保存修改数据
        code: "",
        id: "",
        name: "",
        parentId: "",
        mainDataId: "",
        owner: "",
        orderSeq: "",
        icon: "",
        remark: ""
      },
      iconGroup: [
        { icon: "banner_1" },
        { icon: "baobiao_1" },
        { icon: "baobiao_2" },
        { icon: "baobiao_3" },
        { icon: "ceshi_1" },
        { icon: "ceshi_2" },
        { icon: "dailishang_1" },
        { icon: "dailishang_2" },
        { icon: "jiesuan_1" },
        { icon: "jiesuan_2" },
        { icon: "jiesuan_3" },
        { icon: "kaijiang_2" },
        { icon: "kaijiang_1" },
        { icon: "kaijiang_3" },
        { icon: "kaipan_1" },
        { icon: "kaipan_2" },
        { icon: "peizhi_1" },
        { icon: "peizhi-2" },
        { icon: "shuju_1" },
        { icon: "shuju_2" },
        { icon: "xiaoxi_1" },
        { icon: "xiaoxi_2" },
        { icon: "xitongpeizhi_1" },
        { icon: "xitongpeizhi_2" },
        { icon: "xitongpeizhi_3" },
        { icon: "youxi_1" },
        { icon: "youxi_2" },
        { icon: "yunying_1" },
        { icon: "yunying_2" }
      ],
      permissionOwner: [], // 权限所属对象
      updatapermissionOwner: [], // 修改权限所属对象
      allOwner:[], // 存权限的
      pageUrlList: [], // 页面权限
      pageUrlListAll: [], // 页面权限
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6; //如果没有后面的-8.64e6就是不可以选择今天的
        }
      },
      dialogMt: this.dialogMt, // 弹出框上边距
      dialogHeight: 0, // 弹框的高度
      loadingObj:{
        permissionsAdd:false,
        permissionsEdit:false,
        permissionsDelete:false,
      },
      treedata:"" // 判断弹框是新增还是修改
    };
  },
  methods: {
    judgeScree(val) {  // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + "px";
      if( a <= 0){
        this.dialogMt = 0 + "px";
      }
    },
    search() {
      this.getList();
    },
    getList() {
      this.loading = true; // 请求接口时loading启用
      this.disableControl = true;
      this.table_id = "";
      let data = {
        name: this.$store.state.sm_user.formInline.name || null, //权限名称
        owner: this.$store.state.sm_user.formInline.owner || null, //权限所属对象
        createdDateBegin: this.$store.state.sm_user.formInline.dateTime ? this.$store.state.sm_user.formInline.dateTime.sdate : null, //开始时间
        createdDateEnd: this.$store.state.sm_user.formInline.dateTime ? this.$store.state.sm_user.formInline.dateTime.edate : null //结束时间
      };
      findList(data).then(res => {
        let resData = res.data;
        if (resData.success == 1) {
          if (resData.content.length == 0) {
          }
          this.permissionData = resData.content;        
        } else {
          this.$message.error(resData.respMsg);
        }
        this.loading = false;
        this.disableControl = false;
      });
    },
    getDate() { // 获取时间控件方法
      if (this.$store.state.sm_user.formInline.dateTime != null) {
        this.$store.state.sm_user.formInline.dateTime.sdate = this.dateForm(this.$store.state.sm_user.formInline.dateTime[0], 1);
        this.$store.state.sm_user.formInline.dateTime.edate = this.dateForm(this.$store.state.sm_user.formInline.dateTime[1], 1);
        if (this.$store.state.sm_user.formInline.dateTime.sdate == this.$store.state.sm_user.formInline.dateTime.edate) {
          this.$store.state.sm_user.formInline.dateTime.edate = this.$store.state.sm_user.formInline.dateTime.edate.split(" ")[0] + " 23:59:59";
        }
        if (this.$store.state.sm_user.formInline.dateTime.edate.split(" ")[1] == "00:00:00") {
          this.$store.state.sm_user.formInline.dateTime.edate = this.$store.state.sm_user.formInline.dateTime.edate.split(" ")[0] + " 23:59:59";
        }
      }else{
        this.$store.state.sm_user.formInline.dateTime= {
          // 查询条件时间范围
          sdate: "",
          edate: ""
        }
      }
    },
    resetData(value) {
      // 重置查询的数据
      this.$store.state.sm_user.formInline.name = "";
      this.$store.state.sm_user.formInline.owner = "";
      this.$store.state.sm_user.formInline.dateTime = null;
    },
    deletePermission() { // 删除权限
      if (!this.table_id) {
        this.$message.warning("请选择一条数据");
        return false;
      }
      this.deletePermissionDialog = true;
    },
    okDelete() { // 确认删除权限  
      this.loadingObj.permissionsDelete = true;
      remove({ id: this.table_id }).then(res => {
        let resData = res.data;
        if (resData.success == 1) {
          this.$message.success(resData.respMsg);
          this.deletePermissionDialog = false;
          this.getList();
          this.getPermissionTreeData();
        } else {
          this.$message.error(resData.respMsg);
        }
        this.loadingObj.permissionsDelete = false;
      });
    },
    addOrUpdatePermission(type) {     // 新增-修改  弹框事件  
      this.pageUrlList = this.pageUrlListAll;  // 页面地址下拉框中的数据显示所有链接，
      this.updateData = {
        code:this.rowdata.code,
        id: this.rowdata.id,
        parentId: this.rowdata.parentId,
        name: this.rowdata.name,
        mainDataId: this.rowdata.mainDataId?Number(this.rowdata.mainDataId):"",
        owner: this.rowdata.owner,
        orderSeq: this.rowdata.orderSeq,
        icon: this.rowdata.icon,
        remark: this.rowdata.remark,
        parentName: this.rowdata.parentName,
      }
      // 新增-修改
      if (type == "新增") {
        this.chooseIconDisable = false;
        this.addData = {       
          parentId: "",
          name:"",
          mainDataId:"",
          owner:"",
          orderSeq: "",
          icon: "",
          remark: "",
          parentName: "",
        };
        this.dialogHeight = 444;
        this.judgeScree(this.dialogHeight);
        this.addPermissionDialog = true;

      } else if (type == "修改") {
        if (!this.table_id) {
          this.$message.warning("请选择一条数据");
          return false;
        }
        this.dialogHeight = 444;
        this.judgeScree(this.dialogHeight);
        if(!this.updateData.parentName){
          this.updateData.parentName = "平台后台"
          this.updateData.parentId = 0
          this.chooseIconDisable = false; // 可以选择图标，且图标为必填项
          this.pageUrlList = [];  // 如果父级是平台后台，页面地址下拉框中的数据只显示空链接，
       
        }else {
          this.chooseIconDisable = true; // 非平台后台权限，图标按钮不可操作
        }
        // 判断权限所属对象下拉值
        if(this.updateData.owner == 0 ||this.updateData.owner == "0"){ // 如果是平台 权限所属对象为平台
            this.updatapermissionOwner = [{name: "平台", value: "0"}]    
        }else if(this.updateData.owner == 1||this.updateData.owner == "1"){  // 如果是代理商 代理商
          this.updatapermissionOwner = [{name: "代理商", value: "1"}]  

        }else if(this.updateData.owner == 2||this.updateData.owner == "2"){  // 如果是公用 权限所属对象为公用
            this.updatapermissionOwner = [{name: "公用", value: "2"}]  
        } 

        this.updatePermissionDialog = true;
      }
    },
    okAddOrUpdate(type) { //  新增 - 修改 确认事件
      if (type == "add") {
        if(!this.addData.name){
          this.$message.warning('权限名称不能为空')
          return false;
        }
        if (this.addData.name.length < 2 || this.addData.name.length > 25 ) {
          this.$message.warning("权限名称请输入2-25位字符，中文，字母与数字的组合，大小写不限，其他不支持，");
          return false;
        }
       
        if(this.addData.parentId === null || this.addData.parentId === undefined || this.addData.parentId === '') {
          this.$message.warning('父级名称不能为空')
          return false;
        }
        if(!this.addData.owner) {
          this.$message.warning('权限所属对象不能为空')
          return false;
        }
        if(!this.addData.orderSeq) {
          this.$message.warning('排序不能为空')
          return false;
        }   
       if(this.addData.parentName == "平台后台" || this.addData.parentId == 0){
        if(!this.addData.icon && !this.chooseIconDisable) { // 如果当前图标选择按钮可用
            this.$message.warning('图标不能为空')
            return false;
          }       
       } 

        this.loadingObj.permissionsAdd = true;
        add(this.addData).then(res => {
          let resData = res.data;
          if (resData.success == 1) {
            this.$message.success(resData.respMsg);
            this.addPermissionDialog = false;
            this.getList();
            this.getPermissionTreeData();
          } else {
            this.$message.error(resData.respMsg);
          }
          this.loadingObj.permissionsAdd = false;
        });
      } else if (type == "update") {
        if(!this.updateData.name){
          this.$message.warning('权限名称不能为空')
          return false;
        }
        if(this.updateData.parentId === null || this.updateData.parentId === undefined || this.updateData.parentId === '') {
          this.$message.warning('父级名称不能为空')
          return false;
        }
        if(!this.updateData.owner){
          this.$message.warning('权限所属对象不能为空')
          return false;
        }
       
        if(!this.updateData.orderSeq) {
          this.$message.warning('排序不能为空')
          return false;
        }
        if(this.updateData.parentName == "平台后台" || this.updateData.parentId == 0){
          if(!this.updateData.icon && !this.chooseIconDisable) { // 如果当前图标选择按钮可用
            this.$message.warning('图标不能为空')
            return false;
          } 
        }  
         
        this.loadingObj.permissionsEdit = true;
        merge(this.updateData).then(res => {
          let resData = res.data;
          if (resData.success == 1) {
            this.$message.success(resData.respMsg);
            this.updatePermissionDialog = false;
            this.getList();
            this.getPermissionTreeData();
          } else {
            this.$message.error(resData.respMsg);
          }
          this.loadingObj.permissionsEdit = false;
        });
      }
    },
    showTree(type) { // 展示父级权限  事件
    this.treedata = type;
       this.parent_tree_data = []
      let datatree ={}; // 父级权限树请求参数
      if (type == "update") {
        datatree={id:this.updateData.id}
      }
      this.parentPermissionDialog = true;
      this.loading_parent_tree = true;
      parentTree(datatree).then(res => {
        let resData = res.data;
        if (resData.success == 1) {
          this.parent_tree_data = [
            {
              id: 0,
              name: "平台后台",
              children: resData.content
            }
          ]        
          this.loading_parent_tree = false;
        }
      });
      
    },
    chooseIcon(h, type) { // 选择图标
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      if (type == "add") {
        this.operate_type = "add";
      } else if (type == "update") {
        this.operate_type = "update";
      }
      this.iconDialog = true;
    },
    okIcon() { // 确认选择图标
      if (this.operate_type == "add") {
        this.addData.icon = this.temp_icon_name;
      } else if (this.operate_type == "update") {
        this.updateData.icon = this.temp_icon_name;
      }
      this.iconDialog = false;
    },
    getPermissionTreeData() { // 获取权限树数据
      this.loading_tree = true;
      getPermissionTree().then(res => {
        // 初始化权限树
        let resData = res.data;
        if (resData.success == 1) {
          this.tree_data = resData.content;
          this.loading_tree = false;
        } else {
          this.$message.error(esData.respMsg);
        }
      });
    },
    handleChooseIcon(icon) { //点击选择图标
      this.temp_icon_name = icon;
    },
    handleNodeClick(val) { // 点击权限树节点，获取对应的权限详情列表数据
      this.table_id = '';
      this.loading = true;
      findList({ id: val.id }).then(res => {
        // 点击权限节点 获取表格对应数据
        let resData = res.data;
        if (resData.success == 1) {
          if (resData.content.length == 0) {
            // this.$message.warning('')
          }
          this.permissionData = resData.content;
        } else {
           this.$message.console.error(resData.respMsg);
        }
        this.loading = false;
      });
    },
    okParentPermission(val) { // 确认父级权限
      this.updatapermissionOwner = [];    
       if(this.temp_parent.temp_parent_name == '平台后台'){
          this.updatapermissionOwner = this.permissionOwner; // 如果是平台后台 权限所属对象为平台/代理商/公用
          this.chooseIconDisable = false; // 可以选择图标，且图标为必填项
          this.pageUrlList = [];
       }else{
           this.chooseIconDisable = true; // 非平台后台权限，图标按钮不可操作
           this.pageUrlList = this.pageUrlListAll;
            // if (this.operate_type == "add") {
            //   this.addData.icon = ""
            // } else if (this.operate_type == "update") {
            //   this.updateData.icon = ""
            // }
       }
      // 判断权限所属对象下拉值
        if(this.temp_parent.temp_parent_owner == 0 ||this.temp_parent.temp_parent_owner == "0"){ // 如果是平台 权限所属对象为平台
            this.updatapermissionOwner = [{name: "平台", value: "0"}]    
        }else if(this.temp_parent.temp_parent_owner == 1||this.temp_parent.temp_parent_owner == "1"){  // 如果是代理商 代理商
          this.updatapermissionOwner = [{name: "代理商", value: "1"}]  

        }else if(this.temp_parent.temp_parent_owner == 2||this.temp_parent.temp_parent_owner == "2"){  // 如果是公用 权限所属对象为公用
            this.updatapermissionOwner = [{name: "公用", value: "2"}]  
        } 

      if (this.treedata == "add") {
        this.addData.parentName = this.temp_parent.temp_parent_name;
        this.addData.parentId = this.temp_parent.temp_parent_id;
         if(this.addData.owner){
          this.addData.owner = "";
         }
        if(this.addData.parentName != '平台后台'){
          if(this.addData.icon){
            this.addData.icon = "";
          }
        }
      } else if (this.treedata == "update") {
        this.updateData.parentName = this.temp_parent.temp_parent_name;
        this.updateData.parentId = this.temp_parent.temp_parent_id;
        if(this.updateData.owner){
          this.updateData.owner = "";
        }
        if(this.updateData.parentName != '平台后台'){
          if(this.updateData.icon){
            this.updateData.icon = "";
          }
        }
        
      }
      this.parentPermissionDialog = false;
    },
    handleParentNodeClick(val) {
      // 点击父级权限树
      this.temp_parent.temp_parent_name = val.name;
      this.temp_parent.temp_parent_id = val.id;
      this.temp_parent.temp_parent_parentId = val.parentId;
      this.temp_parent.temp_parent_owner = val.owner;

    },
    handleCurrentChange(val) {
      if (val) {
        this.table_id = val.id; // 当前数据id
        this.is_last_child_node = val.is_last_child_node; // 是否为末级节点
        this.name = val.name; // 当前选中数据的权限名称
        this.rowdata = val;
      }
    },
    tableHeaderColor() {
      // 修改row header的背景颜色与内边距
      return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
    },
    rowcellClass() {
      // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
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

        // this.$store.state.sm_user.allData = []
        // this.$store.state.sm_user.allData_total = 0;
        // this.$store.state.sm_user.page = 1;
        // this.$store.state.sm_user.size = 10;
        this.$store.state.sm_user.formInline= {
          owner :"",
          name:"",
          dateTime:{
            sdate:"",
            edate:""
          }
        };
        // this.$store.dispatch('getMaskTableHeight', 2)
      }
    }else {
     // if(this.$store.state.sm_user.allData.length > 0) {
        this.getList()
     // }
    }
  },
  mounted() {
    // 初始化数据
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight); // 判断屏幕大小进行操作
    });
    window.onresize = () => {
      this.judgeScree(this.dialogHeight); 
    };
     permissionUrlDropdownList().then(res => { // url接口数据请求
        let resData = res.data;
        if (resData.success == 1) {
          this.pageUrlList = resData.content;
          this.pageUrlListAll = resData.content;// 页面权限所有的
        } else {
          this.$message.error(resData.respMsg);
          this.pageUrlList = []
          this.pageUrlListAll = [];
        }
      });
    findByCode({ code: "PERMISSION_OWNERTYPE" }).then(res => {
      // 权限所属对象下拉列表
      let resData = res.data;
      if (resData.success == 1) {
        let by_permissionOwner = resData.content["PERMISSION_OWNERTYPE"];
        by_permissionOwner.forEach(element => {
          this.permissionOwner.push(element); // 查询权限所属对象
        });
        this.addPermissionDialog = 
        this.loading_tree = false;
      } else {
        this.$message.error(esData.respMsg);
      }
    });
    this.getPermissionTreeData();
  }
};
</script>
<style lang="scss">
@media (min-width: 700px) and (max-width: 1600px) {
  .permissions_dialog_input_span_name,
  .permissions_dialogdiialogDetails_input_span_name {
    width: 30% !important;
  }
}
.smPermissions {
  .el-table__body-wrapper {
    // max-height: calc(100vh - 250px);
    // overflow-y: auto;
  }

  .icon-group {
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      li {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid gainsboro;
        background:#43586d;
        .this-icon {
          width: 15px;
          height: 15px;
        }
      }
    }
    .active-icon {
      background: #8c4d4d;
    }
  }
  .dialog-back {
    width: 100%;
    height: 800px;
    background-color: black;
    opacity: 0.2;
  }
  .mytablecss {
    height: calc(100vh - 208px);
    width: 85%;
    margin-left: 10px;
    overflow: auto;
  }
  .tableAuto170 {
    overflow: initial;
  }
  .smPermissions-tabledata {
    width: 79%;
    float: right;
  }
  .smPermissions-treebutton {
    padding: 6px 10px 6px 15px;
  }
  .smPermissions-detail-item-box-permissions-p {
    width: 170px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .permissions-tree {
    height: calc(100vh - 208px);
  }
  .tree_diialogTreeInfo_css {
    width: 100%;
    height: 100%;
    float: left;
    overflow-y: auto;
    overflow-x: auto;
  }

  .permissions_add_updata_dialog .dialog-label-item {
    margin-left: 20px;
    line-height: 50px;
  }

  .button_title {
    width: 100%;
    height: 45px;
    text-align: right;
    line-height: 45px;
  }

  .permissions_input_span_name,
  .permissions_input_span_date {
    opacity: 0.8;
    font-size: 12px;
  }

  .button_permissions_title_p_date {
    width: 340px;
    float: left;
    margin-top: 5px;
  }

  .permissions_table {
    height: calc(100% - 90px);
    display: flex;
    justify-content: space-between;
  }

  .permissions_dialog_input_span_name {
    width: 20%;
    height: 30px;
    display: inline-block;
    text-align: right;
  }

  .permissions_dialogdiialogDetails_input_span_name {
    width: 17%;
    height: 30px;
    display: inline-block;
    text-align: right;
  }

  .permissions_pagination {
    width: 100%;
    overflow: hidden;
  }

  .detail-item-box {
    padding-left: 45px;
    width: 100%;
  }

  .detail-item-box p {
    line-height: 30px;
  }
  .detail-item-box div {
    width: 50%;
  }
  .detail-item-box span {
    line-height: 30px;
  }
  .el-pagination__sizes .el-input .el-input__inner {
  font-size: 12px;
}

.el-button {
  margin-left: 3px;
}

.permissions_table .el-table td .cell {
  white-space: nowrap;
}

.permissions_dialog .el-dialog,
.permissions_add_updata_dialog .el-dialog {
  margin-top: 25vh !important;
}

.permissions_dialog .el-dialog__title,
.permissions_add_updata_dialog .el-dialog__title {
  font-size: 14px;
}

.permissions_add_updata_dialog .app-container .el-button {
  padding: 10px 5px !important;
}

.permissions_pagination .el-pagination__total,
.permissions_pagination .el-pagination__sizes .el-input .el-input__inner,
.permissions_pagination .el-pagination__jump {
  font-size: 12px !important;
}

.smPermissions .app-container .el-button {
  padding: 7px 7px !important;
}

.permissions_table .el-table td .cell {
  white-space: nowrap;
}

.permissions_dialog .el-dialog .el-dialog__header,
.permissions_add_updata_dialog .el-dialog .el-dialog__header {
  padding: 10px;
  border-bottom: 1px solid #d7d7d7;
}

.permissions_dialog .el-dialog,
.permissions_add_updata_dialog .el-dialog {
  margin-top: 25vh !important;
}

.permissions_dialog .el-dialog__body,
.permissions_add_updata_dialog .el-dialog__body {
  text-align: -webkit-center;
}

.permissions_dialog .el-dialog__title,
.permissions_add_updata_dialog .el-dialog__title {
  font-size: 14px;
}

.permissions_add_updata_dialog .app-container .el-button {
  padding: 10px 5px !important;
}

.permissions_pagination .el-pagination__total,
.permissions_pagination .el-pagination__sizes .el-input .el-input__inner,
.smPermissions .permissions_pagination .el-pagination__jump {
  font-size: 12px !important;
}

.app-container .el-button {
  padding: 7px 7px !important;
}
}
.mytablecss .el-table--scrollable-x .el-table__body-wrapper{
  overflow: auto!important;
  max-height: calc(100vh - 250px)!important;
}
.smPermissions .el-dialog__wrapper{
  background: #3333!important;
}


</style>
<style>
.el-table__empty-block {
  height: 0px;
}
.el-dialog__body .el-select .el-input {
  width: 200px !important;
}
.addOrEdit p {
  margin-left: -10px;
}
.addOrEdit .userAccount {
  width: 110px !important;
  margin-left: 0px !important;
}
/* .addOrEdit p:last-child{
  margin-top: -25px;
} */
.previewIcon {
  text-align: center;
  height: 80px;
  line-height: 80px;
  border: 1px solid gainsboro;
  width: 80px;
  display: inline-block;
  position: relative;
  left: 105px;
  top: -40px;
}
.theIcon {
  width: 15px !important;
  height: 15px !important;
}
.addOrEdit .choose {
  position: relative;
  left: 140px;
  top: -50px;
}
</style>
