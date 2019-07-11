<template>
  <!-- 代理商管理 -->
  <div class="app-container lc_infoManage">
    <!-- 通用搜索框 -->
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">代理商老板账号：</span>
          <span class="rem_con">
            <el-select v-model="searchForm.agentBossName"  multiple collapse-tags placeholder="全部" :disabled="disableControl" @change="handleChange" >
                <!-- <el-option label="全部" value=""></el-option> -->
                <el-option v-for="item in agentBossAccounts" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" @click="search" :disabled="disableControl">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" size="mini" @click="reset" :disabled="disableControl">
          <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" size="mini" @click="editOrAdd('add',350)" :disabled="disableControl">
          <svg-icon icon-class="xinzeng1" />
          新增</el-button>
        <el-button type="primary" size="mini" @click="editOrAdd('edit',431)" :disabled="disableControl">
          <svg-icon icon-class="xiugai" />
          修改</el-button>
        <el-button type="primary" size="mini" @click="startOrStop('open',148)" :disabled="disableControl">
          <svg-icon icon-class="qiyong1" />
          启用</el-button>
        <el-button type="primary" size="mini" @click="startOrStop('close',148)" :disabled="disableControl">
          <svg-icon icon-class="jinyong1" />
          禁用</el-button>
        <el-button type="primary" size="mini" @click="permissionManage(600)" :disabled="disableControl">
          <svg-icon icon-class="jinyong1" />
          OpenAPI权限管理</el-button>
        <el-button type="primary" size="mini" @click="viewFullInformation(600)" :disabled="disableControl">
          <svg-icon icon-class="chakanxiangqing" />
          查看完整信息</el-button>
      </el-form-item>
    </el-form>
    <!-- 数据表格 -->
    <div class="table-data">
      <el-table
          background
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          class="tableAuto216"
          :height="currentPageSize*25 + 48"
          highlight-current-row
          @current-change="handleCurrentChange"
          border
          v-loading="loading"
        >
            <el-table-column label width="35">
              <template slot-scope="scope">
                  <el-radio :label="scope.row.id"  v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
                </template>
            </el-table-column>
            <el-table-column align="center" type="index" label="序号" width="50">
              <template slot-scope="scope">
                <span>{{scope.$index+(page - 1) * size + 1}}</span>
              </template>
            </el-table-column>
            <el-table-column sortable prop="code" align="center" label="代理商老板ID" width="130" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span> {{ scope.row.code ? scope.row.code : '-' }} </span>
              </template>
            </el-table-column>
            <el-table-column sortable prop="username" align="center" label="代理商老板账号" width="150" show-overflow-tooltip>
              <template slot-scope="scope">
                <span> {{ scope.row.username ? scope.row.username : '-' }} </span>
              </template>
            </el-table-column>
            <el-table-column sortable prop="disable" align="center" width="80"  label="状态"  show-overflow-tooltip>
              <template slot-scope="scope">
                <span> {{ scope.row.disable ? '禁用' : scope.row.disable == false ? '启用' : '-'  }} </span>
              </template>
            </el-table-column>
            <el-table-column prop="contact" align="center" label="联系人名称" width="120" show-overflow-tooltip>
              <template slot-scope="scope">
                <span> {{ scope.row.contact ? scope.row.contact : '-' }} </span>
              </template>
            </el-table-column>
            <el-table-column prop="uuid" align="center" label="代理商UUID-code"  show-overflow-tooltip>
              <template slot-scope="scope">
                <span> {{ scope.row.uuid ? scope.row.uuid : '-' }} </span>
              </template>
            </el-table-column>
            <el-table-column prop="remark" align="center"  label="备注" show-overflow-tooltip>
              <template slot-scope="scope">
                <span> {{ scope.row.remark ? scope.row.remark : '-' }} </span>
              </template>
            </el-table-column>
            <el-table-column prop="createdBy" align="center" label="创建人" show-overflow-tooltip>
              <template slot-scope="scope">
                <span> {{ scope.row.createdBy ? scope.row.createdBy : '-' }} </span>
              </template>
            </el-table-column>
            <el-table-column sortable prop="createdDate" align="center" label="创建时间" width="150" show-overflow-tooltip>
              <template slot-scope="scope">
                <span> {{ scope.row.createdDate ? scope.row.createdDate : '-' }} </span>
              </template>
            </el-table-column>
            <el-table-column prop="lastModifiedBy" align="center" label="修改人" show-overflow-tooltip>
              <template slot-scope="scope">
                <span> {{ scope.row.lastModifiedBy ? scope.row.lastModifiedBy : '-' }} </span>
              </template>
            </el-table-column>
            <el-table-column sortable prop="lastModifiedDate" align="center" label="修改时间" width="150" show-overflow-tooltip>
              <template slot-scope="scope">
                <span> {{ scope.row.lastModifiedDate ? scope.row.lastModifiedDate : '-' }} </span>
              </template>
            </el-table-column>
          </el-table>
    </div>
     <!-- 分页    数据要是大于1000条时，把分页释放掉-->
    <!-- <div class="terraceUser_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="size"
        :total="allDataCount"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getList"
      >
      </el-pagination>
    </div> -->
    <!-- 新增-修改 -->
    <el-dialog :visible.sync="editOrAddDialog" width="400px" :title="title_Name"  :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box visonDialog">
        <p v-if="title_Name == '修改'">
          <span class="dialog-label-item">
            <span style="color:red"></span>代理商ID：
          </span>
          <el-input v-model="editOrAddData.id" :disabled="title_Name == '修改' ? true : false" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>代理商老板账号：
          </span>
          <el-input v-model="editOrAddData.username" :disabled="title_Name == '修改' ? true : false" style="width: 200px;"/>
        </p>
        <p v-if="title_Name == '修改'">
          <span class="dialog-label-item">
            <span style="color:red">*</span>是否需要修改密码：
          </span>
          <el-radio-group style="display:inline;" v-model="passwdAuth" @change="handleRadioChange">
            <el-radio :label="1">是</el-radio>
            <el-radio label="">否</el-radio>
          </el-radio-group>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>代理商老板密码：
          </span>
          <el-input v-model="editOrAddData.bosepasswd" :disabled="isChangePwd" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>状态：
          </span>
          <el-input :disabled="true" :placeholder="editOrAddData.disable ? '禁用': '启用'" type="text" style="width: 200px"></el-input>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red">*</span>联系人：
          </span>
          <el-input v-model="editOrAddData.contact" style="width: 200px;"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span style="color:red"></span>备注：
          </span>
          <el-input v-model="editOrAddData.remark" type="textarea" style="width: 200px;" maxlength="50"></el-input>
        </p>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okEditOrAdd(title_Name)" :loading="infoManageObj.confirmAddOrEdit">确定</el-button>
        <el-button @click="editOrAddDialog = false">取 消</el-button> 
      </div>
    </el-dialog>
    <!-- 启用/禁用 -->
    <el-dialog :visible.sync="startStopUsingDialog" :title="title_Name" width="350px" :top="dialogMt"
               :close-on-click-modal="false">
      <p style="text-align:center;">
        是否{{title_Name}}代理商
        <span style="color:red">"{{table_row_data ? table_row_data.username : ''}}"</span>？
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="okStartOrOpen(title_Name)">确 定</el-button>
        <el-button size="mini" @click="startStopUsingDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- OpenAPI权限管理 -->
    <el-dialog :visible.sync="permissionManageDialog" title="OpenAPI权限管理" width="1100px" :top="dialogMt" :close-on-click-modal="false">
      <div class="permissionManage-box">
        <div class="manage-info">
          <p>代理商老板ID <span>{{OpenAPIObj.code}}</span></p>
          <p>代理商老板账号 <span>{{OpenAPIObj.username}}</span></p>
          <p>状态 <span>{{OpenAPIObj.disable ? "禁用":"启用"}}</span></p>
        </div>
        <div class="manage-content">
          <div class="manage-left">
            <div style="max-height: 460px;overflow: auto;">
            <p>
              <span class="dialog-label-item">
                <span></span>访问IP地址数量：
              </span>
              <el-input v-model="OpenAPIObj.ipList.length" :disabled="true" style="width: 50px;" maxlength="20"/>&nbsp;&nbsp;
              <svg-icon icon-class="add"  @click="OpenAPIdisabled ? '' : addData()" />
            </p>
            <ul>
              <li v-for="(item,index) in OpenAPIObj.ipList" :key="index">
                <span>IP地址{{index}}：</span> 
                <el-input v-model="OpenAPIObj.ipList[index]"   :disabled ="OpenAPIdisabled" style="width: 220px;"/>&nbsp;&nbsp;
                <svg-icon icon-class="minus" @click="OpenAPIdisabled?'':minusData(item,index)" />
              </li>
            </ul>
            </div>
          </div>
          <div class="manage-right">
            <p>
              <span>OpenAPI类型</span>
              <span>是否允许访问</span>
              <span>访问频率（0秒：不限制）</span>
            </p>
            <ul>
              <li v-for="(item,index) in OpenAPIObj.restrictionList" :key="index">
                <span>{{item.name}}</span>
                <span><el-radio style="width:60px" :disabled ="OpenAPIdisabled" v-model="item.access" :label='0'>是</el-radio></span>
                <span><el-radio style="width:60px" :disabled ="OpenAPIdisabled" v-model="item.access" :label='1'>否</el-radio></span>
                <span><el-input style="width:70px;" :disabled ="OpenAPIdisabled" v-model="item.frequency" maxlength="4"/> &nbsp;&nbsp;&nbsp;秒/次</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="EnabledCompile">启用编辑</el-button>
        <el-button type="primary" size="mini" @click="permissionManageOK" :loading="infoManageObj.OpenAPI">保 存</el-button>
        <el-button size="mini" @click="permissionManageDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 查看完整信息 -->
    <el-dialog :visible.sync="viewFullInformationDialog" title="查看详情" width="540px"  class="dataProvider-Informationdiialog" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box radio-ViewFull">
          <p class="dialog-head">
            <el-radio v-model="radioViewFull" style="margin-left: 10px;" label="1">基本信息</el-radio>
            <el-radio v-model="radioViewFull" style="margin-left: 10px;" label="2">权限管理信息</el-radio>
          </p>
        <!-- <p class="dialog-head">基础信息</p>  -->
        <div style="margin-bottom:20px;" v-if="radioViewFull=='1'?true:false" class="checkInformation_span">
            <div class="check-div">
              <p class="check-p-left">代理商老板ID</p>         
              <p class="check-p-rigyt">{{detailData.code}}</p>
            </div> 
            <div class="check-div">
              <p class="check-p-left">代理商老板账号</p>     
              <p class="check-p-rigyt">{{detailData.username}}</p>
            </div> 
             <div class="check-div">
              <p class="check-p-left">状态</p>     
              <p class="check-p-rigyt">{{detailData.disable ? '禁用' : '启用'}}</p>
            </div> 
            <div class="check-div">
              <p class="check-p-left">联系人</p>  
              <p class="check-p-rigyt">{{detailData.contact}}</p>
            </div> 
            <div class="check-div">
              <p class="check-p-left">备注</p> 
              <el-popover
                ref="popover3"
                v-if="detailData.remark==''?false:true"
                placement="top"
                width="600"
                trigger="hover"
                :content="detailData.remark">
              </el-popover>     
              <p v-popover:popover3 class="check-p-rigyt">{{detailData.remark}}</p>
            </div> 
            <div class="check-div">
              <p class="check-p-left">代理商UUID-hashcode</p>     
              <p class="check-p-rigyt">{{detailData.uuid}}</p>
            </div> 
            <div class="check-div" style="height: 130px;">
              <p class="check-p-left" style="line-height: 145px;">公钥</p>   
              <div class="check-p-heght">{{detailData.publicKey}}</div>
            </div> 
            <div class="check-div" style="height: 130px;">
              <p class="check-p-left" style="line-height: 145px;">私钥</p> 
              <div class="check-p-heght" style=" border-top: none;">{{detailData.privateKey}}</div>              
            </div> 
        </div>
        <div v-if="radioViewFull=='2'?true:false" class="checkInformation_span">

          <div class="check-div" v-for="(item,index) in detailPermissionData.restrictionList" :key="index">
            <p class="check-p-left">{{item.name}}</p>         
            <p class="check-p-rigyt" style="text-align: left;"> 是否允许访问：{{item.access == "0" ?"是":"否"}}
               <span class="leaveABlankSpace"></span> 访问频率：{{item.frequency == 0 || item.frequency == "0"? setMag[1]:item.frequency +"  " +setMag[0] }}</p>
          </div> 
          <div class="check-div">
            <p class="check-p-left">访问IP地址数量</p>         
            <p class="check-p-rigyt" style="text-align: left;"> {{detailPermissionData.ipList.length}}</p>
          </div> 
           <div class="check-div" v-for="(item,index) in detailPermissionData.ipList" :key="index+'q'">
            <p class="check-p-left">IP地址{{index+1}}</p>         
            <p class="check-p-rigyt" style="text-align: left;"> {{detailPermissionData.ipList[index]}}</p>
          </div> 
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { validatePwd,validateCommonUserName,validateUserName,validNinedata_four,validIpNumber} from '@/utils/validate'
import { persistEntity,mergeEntity,disable,findById,get,save} from '@/api/lotteryCore/lc_agentManage/infoManage'
import { agentInfoDropdownList } from '@/api/select'
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      setMag:["秒/次","不限制"],
      radioViewFull:"1",
      infoManageObj:{ // 确认新增/ 修改按钮loading
        confirmAddOrEdit:false,
        OpenAPI:false,  // OpenAPI权限管理 保存按钮
      },
      OpenAPIdisabled:true,
      OpenAPIObj:{
        ipList:[],
        restrictionList:[],
        code:"", //代理商老板ID
        username:"", //代理商老板账号
        disable:"" //状态
      },
      permissionManageDialog:false, // OpenAPI权限管理
      isAllowPost: true, // 是否允许新增
      isChangePwd: true, // 是否启用代理商修改密码 
      disableControl: false,
      viewFullInformationDialog:false,  // 查看完整弹框
      startStopUsingDialog:false,
      loading:false, // Loading 加载
      editOrAddDialog:false, // 新增-修改 弹窗
      title_Name: "", // 标识当前弹窗类型
      // agentBossName: [""], // 代理商老板账号
      editOrAddData: {
        username: "",  // 代理商老板账号
        bosepasswd: "", // 代理商老板密码
        disable: "",   // 是否启用
        contact: "",  // 联系人
        remark: "",  // 备注
        // passwdAuth: 2, // 默认为不修改密码
      },
      passwdAuth: '',
      detailData: {}, // 查看详情
      detailPermissionData: {
        ipList:[],
        restrictionList:[],
      }, // 权限管理信息 查看详情
      table_id:null,
      table_row_data: '',
      data_Name:"",
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
      oldOptions:[],
      allOptions:[], // 用来保存除了全部的数据
      agentBossAccounts: [] // 代理商老板账号下拉列表
    };
  },
  computed:{
    ...mapState({
      tableData: state => state.lc_infoManage.allData,
      allDataCount: state => state.lc_infoManage.allDataCount,
      currentPageSize: state => state.lc_infoManage.currentPageSize
    }),
    size: {
      get(){
        return this.$store.state.lc_infoManage.size;
      },
      set(item) {
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.lc_infoManage.page;
      },
      set(item) {
        return  item;
      }
    },
    searchForm:{
      get(){
        return this.$store.state.lc_infoManage.searchForm;
      },
      set(item) {
        return  item;
      }
    }
  },
  methods:{ 
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    search() {
      this.getList()
    },
    getList(val){ // 获取表格数据
      this.loading = true;
      this.disableControl = true;
      this.table_id = null;
      if(!val){
          val = 1;
      }
      this.$store.dispatch("getInfoDataPage",val)

      let data ={
        page: this.page - 1,
        size: this.size,
        agentInfoIds: this.$store.state.lc_infoManage.searchForm.agentBossName
      };
      if(data.agentInfoIds[0] == ""){
          data.agentInfoIds = ""
      }
      // 
      this.$store.dispatch("infoTableData",data).then(res =>{
        let currentPageSize = 2;
        if(res.content.length > 0) {
          currentPageSize = res.content.length;
        }else {
          currentPageSize = 2;
        }
        this.$store.dispatch('getInfoDataTableHeight', currentPageSize)
        this.loading = false; // 接口返回数据时，loading禁用
        this.disableControl = false;
      })

    },
    handleRadioChange(val) {
      if(val == 1) {
        this.isChangePwd = false
        this.passwdAuth = 1;
      }else {
        this.isChangePwd = true
        this.passwdAuth = '';
      }
    },
    handleSizeChange(val) {
      this.$store.dispatch('getInfoDataPageSize', val);
      this.getList();
    },
    reset(){  // 重置
      this.$store.state.lc_infoManage.searchForm.agentBossName = [];
      let userType = Cookies.get('userType');
      if(userType == '3'||userType == '4'){
        this.$store.state.lc_infoManage.searchForm.agentBossName[0] = this.agentBossAccounts[0].value;
      }
    },
    editOrAdd(type,h){ // 新增-编辑
      if(type == 'add') {
        this.title_Name = '新增'
        this.isChangePwd = false;
        this.editOrAddData = {
          username:"",  // 代理商老板账号
          bosepasswd:"", // 代理商老板密码
          disable:"",   // 是否启用
          contact:"",  // 联系人
          remark:"",  // 备注
        }
        
        this.editOrAddData.disable = true;
      }else if(type == 'edit') {
        if(!this.table_id) {
          this.$message.warning('请选择一条数据');
          return false;
        }
        this.isChangePwd = true;
        this.passwdAuth = '';
        this.editOrAddData = 
        this.editOrAddData = JSON.parse(JSON.stringify(this.table_row_data));  // 对象克隆
        // this.editOrAddData.bosepasswd = '';
        this.title_Name = '修改'
        console.log(this.editOrAddData)
      }

      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.editOrAddDialog = true;
    },
    okEditOrAdd(type) {  // 确认新增 - 修改
      if(this.title_Name == '新增') {
        if(!validateUserName(this.editOrAddData.username)){
          this.$message.warning("代理商老板账号限制4-8位字符、首字母小写、纯字母或字母和数字组合");
          return false;
        }
      }
      if(this.passwdAuth) {
        if(!validatePwd(this.editOrAddData.bosepasswd)){
          this.$message.warning("密码限制4-15位字符,必须数字和字母组合");
          return false;
        }
      }
      if(!validateCommonUserName(this.editOrAddData.contact)){
        this.$message.warning("联系人限制2-20位字符，仅支持中文，数字和字母，大小写不限");
        return false;
      }
      this.infoManageObj.confirmAddOrEdit = true;
      if(this.editOrAddData.bosepasswd){
        this.editOrAddData.passwd = this.$md5(this.editOrAddData.bosepasswd)
      }
      if(type == "修改") {
        this.editOrAddData.passwdAuth = this.passwdAuth;
        mergeEntity(this.editOrAddData).then(res => {
          let resData = res.data;
          if(resData.success == 1) {
            this.$message.success(resData.respMsg)
            this.editOrAddDialog = false;
            this.getList();
          }else {
            this.$message.error(resData.respMsg)
          }
          this.infoManageObj.confirmAddOrEdit = false;
        })
      }else if(type == '新增') {
        if(this.isAllowPost) {
          this.isAllowPost = false;
          persistEntity(this.editOrAddData).then(res => {
            let resData = res.data;
            if(resData.success == 1) {
              this.$message.success(resData.respMsg)
              this.editOrAddDialog = false;
              this.getList();
            }else {
              this.$message.error(resData.respMsg)
            }
            this.isAllowPost = true;
            this.infoManageObj.confirmAddOrEdit = false;
          })
        }else {
          this.$message.warning('您正在执行新增操作，请耐心等待...')
        }
      }
      
    },
    startOrStop(type,h){ // 启用-禁用
      if (!this.table_id) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      if(type == 'open') {
        if(this.table_row_data.disable+'' == 'false') {
          this.$message.warning('该数据已启用，请重新选择')
          return false
        }
        this.title_Name = '启用'
      }else if(type == 'close') {
        if(this.table_row_data.disable+'' == 'true') {
          this.$message.warning('该数据已禁用，请重新选择')
          return false
        }
        this.title_Name = '禁用'
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.startStopUsingDialog = true;
    },
    okStartOrOpen(val){  //启用禁用确认
      let data = {
        id: this.table_id,
        disable: ''
      }
      if(val == '启用') {
        data.disable = false;
      }else {
        data.disable = true
      }
      
      // 
      disable(data).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.getList()
        }else {
          this.$message.error(resData.respMsg)
        }
        this.startStopUsingDialog = false
      })
    },
    handleCurrentChange(val){ // 选中一行的数据，
      if(val) {
        this.table_id = val.id;
        this.editOrAddData = val;
        this.table_row_data = val;
      }
    },
    viewFullInformation(h){ // 查看完整信息
      if(!this.table_id) {
        this.$message.warning("请选择一条数据");
        return false;
      }
      this.radioViewFull = "1" ; // 打开查看详情，默认基本信息页
      findById({id: this.table_id}).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.detailData = resData.content
        }
      })
        // 查询OpenAPI权限
      get({agentInfoId:this.table_id}).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.detailPermissionData.ipList = resData.content.ipList; // ip地址集合
          this.detailPermissionData.restrictionList = resData.content.restrictionList; // 请求限制集合
        }else {
          this.$message.error(resData.respMsg)
        }      
      })

      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.viewFullInformationDialog = true;

    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
    },
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
    handleChange(val) { // 切换代理商多选   
        let i = val.length; 
        if(val[i-1] == "" && val.length == 1){
          this.$store.state.lc_infoManage.searchForm.agentBossName = [""]
        }
        if(val[i-1] == ""){
          this.$store.state.lc_infoManage.searchForm.agentBossName = [""]
        }
        const index = val.indexOf("")
        if(index != -1){
          this.$store.state.lc_infoManage.searchForm.agentBossName.splice(index, 1) // 排除全选选项
        }
    },
       permissionManage(h){ //  OpenAPI权限管理 弹框事件
      if(!this.table_id) {
        this.$message.warning("请选择一条数据");
        return false;
      }
       this.OpenAPIdisabled = true;
       this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.OpenAPIObj ={ 
        ipList:[],
        restrictionList:[],
        code:this.table_row_data.code, //代理商老板ID
        username:this.table_row_data.username, //代理商老板账号
        disable:this.table_row_data.disable //状态
      }
    // 查询OpenAPI权限
      get({agentInfoId:this.table_id}).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.OpenAPIObj.ipList = resData.content.ipList; // ip地址集合
          this.OpenAPIObj.restrictionList = resData.content.restrictionList; // 请求限制集合
          this.permissionManageDialog = true;
        }else {
          this.$message.error(resData.respMsg)
        }      
      })
    },
    minusData(itme,index){
      this.OpenAPIObj.ipList.splice(index,1);  
    },
    addData(){
      this.OpenAPIObj.ipList.push("");
    },
    EnabledCompile(){ // 启用编辑
      this.OpenAPIdisabled = false;
    },
    permissionManageOK(){ // OpenAPI权限管理确定
       if(this.OpenAPIdisabled){
          this.$message.warning("请先启用编辑");
          return false;
       }
      let data = {
        agentInfoId:this.table_id,
        ipList: this.OpenAPIObj.ipList,
        restrictionList: this.OpenAPIObj.restrictionList,
      } 
      for(let i = 0;i<data.ipList.length; i++){
        if(data.ipList[i] == ""){
          this.$message.warning("IP地址不可为空，请输入");
          return false;
        }
        // if(!validIpNumber(data.ipList[i])) {
        //   this.$message.warning("IP地址格式有误，请输入");
        //   return false;
        // }
      }
     for(let i = 0;i<data.restrictionList.length; i++){       
        if(!validNinedata_four(data.restrictionList[i].frequency)){ // 0-1000的正整数
          this.$message.warning('请输入0-1000的正整数');
          return
       }
      }
       // 查询OpenAPI权限
      this.infoManageObj.OpenAPI = true;
      save(data).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success("保存成功");
          this.getList()
          this.permissionManageDialog = false;
          this.infoManageObj.OpenAPI = false;
        }else {
          this.$message.error(resData.respMsg);
          this.infoManageObj.OpenAPI = false;
        }      
      })
    },
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
        this.$store.state.lc_infoManage.allData = []
        this.$store.state.lc_infoManage.allDataCount = 0;
        this.$store.state.lc_infoManage.page = 1;
        this.$store.state.lc_infoManage.size = 10;
        this.$store.state.lc_infoManage.searchForm.agentBossName = [];
        this.$store.dispatch('getInfoDataTableHeight', 2)
      }
    }else {
      if(this.$store.state.lc_infoManage.allData.length > 0) {
        this.getList()
      }
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
    agentInfoDropdownList().then(res => {
        let resData = res.data
        if(resData.success == 1) {
          let userType = Cookies.get('userType') // 在缓存中取得用户类型，来判断当前用户的权限   
          if(userType == 3 ||userType == 4){  // 代理商老板与代理商员工账号登录，代理商老板账号默认当前号，并且文本框不可编辑
            this.agentBossAccounts = resData.content;
            this.$store.state.lc_infoManage.searchForm.agentBossName[0] = resData.content[0].value; // 默认第一个代理商老板账号
            this.disableControl = true;
          }else{
            this.agentBossAccounts=[{ value: "",name: "全部"}] // 代理商老板账号下拉列表 
            let by_agentBossAccounts = resData.content;   
            by_agentBossAccounts.forEach(element => {
                this.agentBossAccounts.push(element);
            });
          }        
        }else {
          this.$message.error(resData.respMsg)
        }
    })
  }
};
</script>
<style lang="scss" scope>
.permissionManage-box{
  border: 1px solid gainsboro;
  max-height: 580px;
  overflow: auto;
  .manage-info{
    border-bottom: 1px solid gainsboro;
    line-height: 40px;
    background-color: #EBEEF5;
    display: flex;
    flex-direction: row;
    p{
      width: 33%;
      text-align: center;
    }
  }
  .manage-content{
    // max-height: 460px;
    width: 100%;
    display: flex;
    flex-direction: row;
    .manage-left{
      width: 45%;
      height: auto;
      border-right: 1px solid gainsboro;
      ul{
        li{
          margin: 15px 0 0 90px;
        }
      }
    }
    .manage-right{
      p{
        display: flex;
        
        span{
          display: inline-block;
          width: 33%;
          line-height: 50px;
          text-align: center;
          font-size: 14px;
        }
      }
      ul{
        li{
          display: flex;
          flex-direction: row;
          >span{
            display: inline-block;
            text-align: center;
            width: 38%;
            line-height: 35px;
          }
          >span:nth-child(2){
            width: 12%
          }
          >span:nth-child(3){
            width: 12%
          }
        }
      }
      width: 55%;
      height: auto;
    }
  }
}


 .el-popover{
      word-break: break-all!important;
  }
.el-radio__label {
  font-size: 12px;
}
.dialog-head{
  height: 30px;
  border: gainsboro 1px solid ;
  border-bottom: none;
  line-height: 30px!important;
  padding-left: 10px;
}
.checkInformation_span {
    height: 502px;
    overflow: auto;
    margin-bottom: 20px;
    border: 1px solid gainsboro;
  p{
    border: solid 1px #dcdfe6;
    text-align: center;
    height: 100% !important;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: none;
    line-height: 40px;
  }
  .check-p-left {
      width: 30%;
      float: left;
  }
  .check-p-rigyt {
    width: 70%;
    border-left: none;
    float: left;
    padding: 0 10px;
  }
  .check-div,.check-div-heigth{
    width: 100%;
    height: 40px;
    line-height: 40px !important;
    p:first-child{
      background-color: #f5f7fa;
    }
    &:last-child{
      p{
        border-bottom: solid 1px #dcdfe6;
      }
    }
  }
 
}

.lc_infoManage {
  .el-dialog {
    max-height: 645px;
  }
  .el-dialog .dialog-label-item{
    width: 115px;
  }
}
  // 查看完整信息
  .checkFullInfo{
    .detail-head{
      ul{
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        li{
          width: 45%;
          text-align: center;
          height: 30px;
          line-height: 30px;
          list-style: none;
          margin-top: 10px;
          outline: 1px solid gainsboro;
        }
      }
    }
    .detail-content{
        display: flex;
        flex-direction:row;
        // justify-content: space-around;
      ul{
        width: 47.5%;
         display: flex;
         flex-direction:column;
         margin-top:10px;
        li{
          width: 100%;
          text-align: center;
          height: 30px;
          line-height: 30px;
          list-style: none;
          margin-left: 15px;
          border-bottom: 1px solid gainsboro;
          border-left: 1px solid gainsboro;
          // border-right: 1px solid gainsboro;
        }
        li:first-child{
          border-top: 1px solid gainsboro;
        }
      }
      ul:last-child{
        li{
          border-right: 1px solid gainsboro;
        }
      }
    }
  }
  .check-p-heght{
    word-wrap: break-word;
    line-height: 21px;
    overflow: hidden;
    overflow-y: auto;
    height: 130px;
    border: 1px solid #dcdfe6;
    border-left: none;
    padding: 0 15px
  }
  .radio-ViewFull .el-radio__input{
    display: none;
   
  }
  .leaveABlankSpace{
    display: inline-block;
    width: 25%;
  }
</style>
