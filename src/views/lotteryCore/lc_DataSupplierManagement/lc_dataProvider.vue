<template>
  <div class="app-container lcRataProvider">
    <!--数据供应商管理--信息管理-->
    <el-form :model="formInline">
      <ul class="heard-search headTime">
        <li style="margin-right:20px;">
          <span class="rem_tit">数据供应商名称：</span>
          <span class="rem_con"><el-input class="supplierName" :disabled="disabledALL" placeholder="请输入数据供应商名称" v-model="formInline.supplierName"></el-input></span>
        </li>
        <li>
          <span class="rem_tit">一级彩种名称：</span>
          <span class="rem_con">
          <el-select placeholder="请选择" value-key="name" v-model="formInline.kindA" @change="changeKindAData" :disabled="disabledALL">
            <el-option v-for="item in firstLotterySelect" :key="item.value" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">二级彩种名称：</span>
          <span class="rem_con">
          <el-select placeholder="请选择" value-key="name" v-model="formInline.kindB" :disabled="formInline.disabledSecond">
            <el-option v-for="item in secondLotterySelect" :key="item.value" :label="item.name" :value="item.value"></el-option>
          </el-select>
          </span>
        </li>
        <li>
        <span class="rem_tit">服务到期时间：</span>
        <span class="rem_con">
           <el-date-picker
           :disabled="disabledALL"
            v-model="formInline.dateTime"
            type="datetimerange"
            align="right"
            style="width:330px"
            :clearable="false"
            start-placeholder="起始时间"
            @change="getDate"
            end-placeholder="结束时间"
            :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>  
        </span>
      </li>

      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="search">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button> 
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="reset">
          <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="addOrUpDataSupplierInfo('add',509)">
          <svg-icon icon-class="xinzeng1" />
          新增</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="addOrUpDataSupplierInfo('upData',539)">
          <svg-icon icon-class="bianji" />
          编辑基础信息</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="lotteryConfigDialog(548)">
          <svg-icon icon-class="dashujukeshihuaico-" />
          配置彩种</el-button>
        <el-button type="primary" size="mini" :disabled="disabledALL" @click="viewFullInformation(490)">
          <svg-icon icon-class="chakanxiangqing" />
          查看完整详情</el-button>
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
        @current-change="handleCurrentChange"
        style="width: 100%;"
        ref="multipleTable"
        border
        class="tableAuto256"
        :default-sort="{prop: 'createdDate',order: 'descending'}"
        :height="currentPageSize*25 + 52"
        v-loading="loading"
      >
        <el-table-column width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column type="index"  label="序号" align="center" :show-overflow-tooltip="true" width="50">
          <template slot-scope="scope">
            <span>{{scope.$index+(page-1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column width="180" label="数据供应商编号" property="code" align="center" :show-overflow-tooltip="true" >
          <template slot-scope="scope">
            {{ scope.row.code?  scope.row.code : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="150" label="数据供应商名称" property="name" align="center" :show-overflow-tooltip="true" >
          <template slot-scope="scope">
            {{ scope.row.name?  scope.row.name : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="220" label="网址" property="url" align="center" :show-overflow-tooltip="true" >
          <template slot-scope="scope">
            {{ scope.row.url?  scope.row.url : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="150" label="账号" property="username" align="center" :show-overflow-tooltip="true" >
          <template slot-scope="scope">
            {{ scope.row.username?  scope.row.username : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="150" label="密码" property="passwd" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{ scope.row.passwd?  scope.row.passwd : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="150" label="联系人" property="contact" align = "center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{ scope.row.contact?  scope.row.contact : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="160" label="支持一级彩种" property="parentLotteryName" align = "center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{ scope.row.parentLotteryName?  scope.row.parentLotteryName : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="160" label="支持二级彩种" property="lotteryName" align = "center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{ scope.row.lotteryName?  scope.row.lotteryName : '-' }}
          </template>
        </el-table-column>
        <el-table-column sortable width="160" label="服务到期时间" property="expiredTime" align = "center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{ scope.row.expiredTime?  scope.row.expiredTime : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="220" label="备注" property="remark" align="center" :show-overflow-tooltip="true" >
          <template slot-scope="scope">
            {{ scope.row.remark?  scope.row.remark : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="120" label="创建人" property="createdBy" align = "center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{ scope.row.createdBy?  scope.row.createdBy : '-' }}
          </template>
        </el-table-column>
        <el-table-column sortable width="150" label="创建时间" property="createdDate" align = "center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{ scope.row.createdDate?  scope.row.createdDate : '-' }}
          </template>
        </el-table-column>
        <el-table-column width="120" label="修改人" property="lastModifiedBy" align = "center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{ scope.row.lastModifiedBy?  scope.row.lastModifiedBy : '-' }}
          </template>
        </el-table-column>
        <el-table-column sortable width="150" label="修改时间" property="lastModifiedDate" align = "center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{ scope.row.lastModifiedDate?  scope.row.lastModifiedDate : '-' }}
          </template>
        </el-table-column>
      </el-table>
    </div>
     <!-- 分页    数据要是大于1000条时，把分页释放掉-->
    <!-- <div class="role_pagination">
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
    </div> -->
    <!-- 新增 / 编辑 -->
    <el-dialog :visible.sync="addOrUpDataDialog" :title="addOrEditTitleName" width="440px" class="dataProvider-adddiialog addDialogs" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box eidtAndAdd">
        <p v-if="addOrEditTitleName == '编辑'">
          <span class="dialog-label-item">
           数据供应商编号：
          </span>
          <el-input disabled="disabled" v-model="addData.code" maxlength="15"/>
        </p>
         <p>
          <span class="dialog-label-item">
            <span class="required">*</span> 数据供应商名称：
          </span>
          <el-input v-model="addData.name" minlength="2" maxlength="20"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span> 网址：
          </span>
          <el-input v-model="addData.url" maxlength="50"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span> 账号：
          </span>
          <el-input v-model="addData.username" minlength="2" maxlength="20"/>
        </p>
       <p>
          <span class="dialog-label-item">
            <span class="required">*</span> 密码：
          </span>
          <el-input v-model="addData.passwd" minlength="4" maxlength="15"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span> 联系人：
          </span>
          <el-input v-model="addData.contact" minlength="2" maxlength="20"/>
        </p>
        <p>
          <span class="dialog-label-item"><span class="required">*</span>服务到期时间</span>  
          <el-date-picker
            v-model="addData.expiredTime"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00">
          </el-date-picker>                
        </p>
        <p>
          <span class="dialog-label-item input-remark-span">备注：</span>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2}"
            v-model="addData.remark"
            maxlength="50"
          />
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addOrEditOK" size="mini" :loading="confirmAddOrEdit">确 定</el-button>
        <el-button @click="addOrUpDataDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 查看完整信息 -->
    <el-dialog :visible.sync="viewFullInformationDialog" title="查看详情" width="540px"  class="dataProvider-Informationdiialog" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box">
        <ul class="heard-search dialog-search-Information">
          <li>
            <span class="rem_tit">数据供应商编号：</span>
            <span class="rem_con">{{viewInformation.code}}</span>
          </li>
          <li>
            <span class="rem_tit">数据供应商名称：</span>
            <span class="rem_con">{{viewInformation.name}}</span>
          </li>
        </ul>     
        <!--  @change="a" -->
      <p class="dialog-tabs"> 
        <el-radio-group v-model="checkInformationInfo" size="mini" >
          <el-radio-button label="基础信息"> 基础信息</el-radio-button>
          <el-radio-button label="彩种配置"> 彩种配置</el-radio-button>
        </el-radio-group>
      </p> 
        <div v-if="checkInformationInfo == '基础信息'" class="checkInformation-span">
            <div class="check-div">
              <p>联系人</p>         
              <p>{{viewInformation.contact}}</p>
            </div> 
            <div class="check-div">
              <p>网址</p>     
              <p>{{viewInformation.url}}</p>
            </div> 
             <div class="check-div">
              <p>账号</p>     
              <p>{{viewInformation.username}}</p>
            </div> 
             <div class="check-div">
              <p>密码</p>     
              <p>{{viewInformation.passwd}}</p>
            </div> 
            <div class="check-div">
              <p>服务到期时间</p>     
              <p>{{viewInformation.expiredTime}}</p>
            </div> 
             <div class="check-div">
              <p>备注</p>     
              <p>{{viewInformation.remark ? viewInformation.remark :'--' }}</p>
            </div> 
        </div>
        <div v-if="checkInformationInfo == '彩种配置'">
          <el-table
            :header-cell-style="tableHeaderColor"
            :cell-style="rowcellClass"
            :key="0"
            :data="tableDataDialog"
            highlight-current-row
            style="width: 100%;"
            border
            class="tableAuto216"
            :height="300">
            <el-table-column type="index"  width="80" label="序号" align="center" :show-overflow-tooltip="true">
                      <template slot-scope="scope">
                        <span>{{scope.$index + 1}}</span>
                      </template>
            </el-table-column>
             <el-table-column  width="120" label="一级彩种名称" property="parentLotteryname" align="center" :show-overflow-tooltip="true">          
            </el-table-column>
             <el-table-column  width="120" label="二级彩种名称" property="lotteryname" align="center" :show-overflow-tooltip="true">          
            </el-table-column>
            <el-table-column  label="授权时间" property="assignTime" align="center" :show-overflow-tooltip="true">           
            </el-table-column>
          </el-table>
        </div>
      </div>
    
    </el-dialog>
    <!-- 配置彩种 -->
    <el-dialog :visible.sync="lotteryConfig" width="600px" title="配置彩种" :close-on-click-modal="false" :top="dialogMt">
      <p style="padding-left:15px"><span style="margin-right:5px;">数据供应商编号：{{ table_data_row.code }}</span> <span>数据供应商名称：{{ table_data_row.name}}</span> </p>
      <div v-loading="loading" class="dialog-box lottery-config">
        <div class="first-lottery">
          <p class="lottery-title-box">一级彩种</p>
          <ul>
            <li v-for="(item,index) in firstSelect" :key="index" @click="tabsSwitch(item.id)" v-bind:class="{active:item.isActive}">
              {{item.name}}
            </li>
          </ul>
        </div>
        <!-- 二级彩种选择框 -->
        <div class="second-lottery" v-show="active">
          <p class="lottery-title-box"><el-checkbox :indeterminate="isIndeterminate" @change="handleCheckAllChange" :disabled="allowEdit" v-model="checkedAll">二级彩种</el-checkbox></p>
          <div style="height:400px:overflow:auto;">
            <el-checkbox-group class="boxGroup" v-model="checkedArr" @change="handleCheckedCitiesChange" :disabled="allowEdit" v-loading="configLoading">
              <el-checkbox v-for="(item,index) in lotteryArr" :label="item.id" :key="index" :checked="item.checked">{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="editLottery">启用编辑</el-button>
        <el-button type="primary" size="mini" @click="saveLotteryConfig" :loading="saveLotteryConfigLoading">保存</el-button>
        <el-button size="mini" @click="lotteryConfig = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import { persistEntity,findById,mergeEntity,findListBySupplierId,findListByLevel,findSupplierLottery,mergeLottery } from '@/api/lotteryCore/lc_DataSupplierManagement/lc_dataProvider'
  import { lotteryDropdownList } from '@/api/select';
  import { dataProviderValidatName,pageUrl,validatePwd } from "@/utils/validate";
  export default {
    name: "lc_dataProvider",
    components: {},
    computed: {
      ...mapState({
        datalist_total: state => state.lc_dataProvider.datalist_total,
        tableData: state => state.lc_dataProvider.tableData,
        currentPageSize: state => state.lc_dataProvider.currentPageSize, // 列表数据多展示的高度 state => state.sm_role.allData,    
        firstLotterySelect: state => state.lc_dataProvider.firstLotterySelect,
        secondLotterySelect: state => state.lc_dataProvider.secondLotterySelect, 
      }),
     pageSize: {
        get(){
          return this.$store.state.lc_dataProvider.pageSize;
        },
        set(item){ return  item;}
      },
      page: {
        get(){
          return this.$store.state.lc_dataProvider.page;
        },
        set(item){ return  item; }
      },
      formInline: {
        get(){
          return this.$store.state.lc_dataProvider.formInline;
        },
        set(item){ return  item; }
      }
    },
    data() {
      return {
        disabledALL:false, // 控制全局不可编辑
        configLoading: false, // 配置彩种弹窗loading
        isIndeterminate:true, // 控制全选样式
        checkedAll: false, // 全选
        checkedArr:[],  // 选中的二级彩种
        loading: false, // Loading 加载
        confirmAddOrEdit:false,
        saveLotteryConfigLoading:false,
        lotteryArr:[],  // 二级彩种列表
        firstSelect: [], // 一级彩种列表
        currentParentId:"", // 当前选中一级彩种ID
        agentBossAccounts:'', // 代理商用户列表
        allowEdit: true, // 默认不允许编辑二级彩种
        lotteryConfig:false, // 配置彩种弹窗
        detail:{},
        tableDataDialog: [],  // 查看完整弹框中的表格数据
        dataAgentNames:"",  // 配置彩种 数据供应商名称
        dataAgentNum:"",  // 配置彩种 数据供应商ID
        active:true,
        table_id:"", // 当前行的ID
        table_data_row:"",  // 当前行数据
        addSupplierDialog:false,  // 新增弹框
        addOrUpDataDialog:false,  // 编辑弹框
        viewFullInformationDialog:false,  // 查看完整弹框
        checkInformationInfo:"基础信息",  // 查看完整弹框中监听是哪个下标
        addOrEditTitleName:"",
        dialogHeight:0,
        dialogMt:this.dialogMt, // 弹出框上边距
        addData:{  //  新增数据
          code:"", // 供应商编号
          name:"", // 供应商名称
          url:"", //  网址
          username:"",  // 账号
          passwd:"",  // 密码
          contact:"",  // 联系人
          expiredTime:"", // 服务到期时间
          remark:"",  // 备注
        },        
        viewInformation:{ // 查看完整弹框中的基础信息数据
          code: "",  // 数据供应商编号
          name: "",  // 数据供应商名称
          contact: "",  //联系人
          url: "", // 网址
          username: "", //账号
          passwd: "",  //密码
          expiredTime: "",//服务到期时间
          remark: ""  //备注
        },
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() >= Date.now();//如果没有后面的-8.64e6就是不可以选择今天的
          }
        }
      };
    },
    methods: {
      judgeScree(val) { // 判断屏幕大小进行操作
        let a = document.body.offsetHeight - val;
        this.dialogMt = a / 2 + 'px';
      }, 
      getDate(val){ // 获取时间
             if(val||this.$store.state.lc_dataProvider.formInline.dateTime != null) {
              this.$store.state.lc_dataProvider.formInline.dateTime[0] = this.dateForm(this.$store.state.lc_dataProvider.formInline.dateTime[0],1);
              this.$store.state.lc_dataProvider.formInline.dateTime[1] = this.dateForm(this.$store.state.lc_dataProvider.formInline.dateTime[1],1);        
              if(this.$store.state.lc_dataProvider.formInline.dateTime[0] == this.$store.state.lc_dataProvider.formInline.dateTime[1]) {
                this.$store.state.lc_dataProvider.formInline.dateTime[1] = this.$store.state.lc_dataProvider.formInline.dateTime[1].split(' ')[0] + ' 23:59:59'
              }
              if(this.$store.state.lc_dataProvider.formInline.dateTime[1].split(' ')[1] == '00:00:00') {
                this.$store.state.lc_dataProvider.formInline.dateTime[1] = this.$store.state.lc_dataProvider.formInline.dateTime[1].split(' ')[0] + ' 23:59:59'
              }         
          }else{
              // let setstate = new Date(this.ServerTimes).getTime()-24*60*60*1000*2; // 当前日期减去一天
              // let state =  this.dateForm(setstate).split(' ')[0] + ' 00:00:00'; // 开始时间
              // let edate =  this.dateForm(this.ServerTimes).split(' ')[0] + ' 23:59:59';   // 结束时间
              // this.$store.state.lc_dataProvider.formInline.dateTime = [state,edate] 
               this.$store.state.lc_dataProvider.formInline.dateTime = [] 
          }

      },
      search() {
        this.getList();
      },
      getList(val){
        this.loading = true;
        if (!val) {
          val = 1;
        }
        this.$store.dispatch('getDataproviderPage',parseInt(val));  // 保存当前页到全局 
        this.table_data_row = "";
        this.table_id = "";
        this.disabledALL=true; // 控制全局不可编辑
        this.$store.state.lc_dataProvider.formInline.disabledSecond = true;
        let formlnline = this.$store.state.lc_dataProvider.formInline;
        let data ={
          page: this.page - 1,
          size: this.pageSize,
          name: formlnline.supplierName,  // 供应商名称
          parentLotteryId: formlnline.kindA,   // 一级彩种
          lotteryId: formlnline.kindB,   // 二级彩种
          expiredTimeBegin: formlnline.dateTime[0],  // 开始时间
          expiredTimeEnd: formlnline.dateTime[1]  // 结束时间
        }
        
        this.$store.dispatch('getLcRataProviderTableList', data).then(res => {
          let currentPageSize = 2;
          if(res.success == 1){
            if (res.content.content.length > 0) {
              currentPageSize = res.content.content.length;
            } else {
              currentPageSize = 2;
            }
          }else{
            this.$message.error(res.respMsg)
          }
          
          this.$store.dispatch("getDataproviderTableHeight", currentPageSize); // 设置表格高度
          this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行 
          this.loading = false;
          this.disabledALL=false; // 控制全局不可编辑
          if(formlnline.kindA == ""){
            this.$store.state.lc_dataProvider.formInline.disabledSecond = true;
          }else{
            this.$store.state.lc_dataProvider.formInline.disabledSecond = false;
          }
        });
      },
      reset(){ // 重置搜索数据
        this.$store.state.lc_dataProvider.formInline = {
            supplierName:"",  // 供应商名称
            kindA:"",  // 一级彩种
            kindB:"",  // 二级彩种
            dateTime:[], // 服务到期时间
            disabledSecond:true, // 二级彩种不可编辑
        }
      },
      editLottery(){  // 启用编辑
        this.allowEdit = false;
      },
      addOrUpDataSupplierInfo(val,h){ // 新增/编辑供应商信息弹框
        if (val == 'upData') {
          this.addOrEditTitleName = "编辑";
            if(!this.table_id) {
              this.$message.warning("请选择一条数据!");
              return;
          };
          findById({id: this.table_id}).then(res => {
            let resData = res.data
            if(resData.success == 1) {
              this.addData = resData.content
            }else {
              this.$message.error('数据异常')
            }
            
          })
        }else{
          this.addOrEditTitleName = "新增";
           this.addData = {}
        }
        this.dialogHeight = h;
        this.judgeScree(this.dialogHeight);
        this.addOrUpDataDialog = true;
      },
      addOrEditOK(){  // 确认编辑
        if(!dataProviderValidatName(this.addData.name)){
            this.$message.warning("请输入2-20位中文，字母或者数字组成的数据供应商名称");
            return
        }    
        if(!pageUrl(this.addData.url)) {
            this.$message.warning("请输入5-50位英文组成的网址");
            return
        }
        if(!dataProviderValidatName(this.addData.username)){
            this.$message.warning("请输入2-20位中文，字母或者数字组成的账号");
            return
        }
        if(!validatePwd(this.addData.passwd)){
            this.$message.warning("请输入4-15位字母或者数字的组合密码");
            return
        }
        if(!dataProviderValidatName(this.addData.contact)){
            this.$message.warning("请输入2-20位中文，字母或者数字组成的联系人");
            return
        }

        if (this.addOrEditTitleName == '新增') {
          let data = {
            name: this.addData.name,
            url: this.addData.url,
            username: this.addData.username,
            passwd: this.addData.passwd,
            contact: this.addData.contact,
            expiredTime: this.dateForm(this.addData.expiredTime,1),
            remark: this.addData.remark,
          }
          this.confirmAddOrEdit = true;
          persistEntity(data).then(res => {
            let resData = res.data;
            if(resData.success == 1) {
              this.$message.success('新增成功')
              this.addOrUpDataDialog = false;
              this.getList()
            }else {
              this.$message.warning(resData.respMsg)
            }
            this.confirmAddOrEdit = false;
          }).catch(error => {
            this.$message.warning(error)
          })
        }else{
          let data = {
            id: this.table_data_row.id,
            name: this.addData.name,
            url: this.addData.url,
            username: this.addData.username,
            passwd: this.addData.passwd,
            contact: this.addData.contact,
            expiredTime: this.dateForm(this.addData.expiredTime,1),
            remark: this.addData.remark,
          };
          this.confirmAddOrEdit = true;
          mergeEntity(data).then(res => {
            let resData = res.data
            if(resData.success == 1) {
              this.$message.success('编辑成功')
              this.addOrUpDataDialog = false;
              this.getList()
            }
            this.confirmAddOrEdit = false;
          })

        }  
      },  
      viewFullInformation(h){ // 查看完整信息弹框
        if(!this.table_id) {
          this.$message.warning("请选择一条数据");
          return false;
        }
        this.dialogHeight = h;
        this.judgeScree(this.dialogHeight);
        
        findById({id: this.table_id}).then(res => { // 拉取供应商基本信息
          let resData = res.data
          if(resData.success == 1) {
            this.viewInformation = resData.content
          }else {
            this.$message.error('数据异常')
          }
        })

        findListBySupplierId({supplierInfoId: this.table_id}).then(res => {
          let resData = res.data
          if(resData.success == 1) {
            this.tableDataDialog = resData.content
          }else {
            this.$message.error('数据异常')
          }
        })



        
        this.viewFullInformationDialog = true;
      },
      handleSizeChange(val) { // 每页多少条数据调整方法
        this.$store.dispatch('getDataproviderPageSize', val)
        this.getList();
      },
      handleCurrentChange(val) { 
        if(val){
          this.dataAgentNames = val.id;  // 配置彩种 数据供应商名称
          this.dataAgentNum = val.accountNumber; 
          this.table_data_row = val;
          this.table_id = val.id;
        }
      },
      lotteryConfigDialog(h){ // 配置彩种
        if (!this.table_id) {
          this.$message.warning('请选择一条数据');
          return false;
        }
        this.allowEdit = true;
        this.firstSelect = [];
        this.checkedArr = [];
        this.lotteryConfig = true;
        this.dialogHeight = h;
        this.judgeScree(this.dialogHeight);
        this.agentNumber = this.detail.agentName;
        this.agentNames = this.detail.agentNum;
        // 初始化一级彩种接口调用数据 
        this.configLoading = true;
        findListByLevel({level: 0}).then(res => { // 一级彩种查询
          let resData = res.data
          if(resData.success == 1) {
            this.firstSelect = resData.content
          }else {
            this.$message.error(resData.respMsg)
          }
          this.configLoading = false;
        })
        
      },
      tabsSwitch(tabIndex) {  // 配置彩种弹框tab切换
        // 初始化一级彩种接口调用数据 
        this.lotteryArr = [];
        this.checkedArr = [];
        this.isIndeterminate = true;
        this.currentParentId = tabIndex;
        let data = {
          supplierInfoId: this.table_id,
          parentLotteryId: tabIndex
        }
        findSupplierLottery(data).then(res => { // 获取当前一级彩种对应的二级彩种
          let resData = res.data
          if(resData.success == 1) {
            this.lotteryArr = resData.content;
            //  this.lotteryArr[0].checked = true;
          }else {
            this.$message.error(resData.respMsg)
          }

        })
      },
      handleCheckAllChange(val){  // 全选
        let tempArr = [];
        this.lotteryArr.map(item => { // 实现全选效果(只取当前数组的id字符串数组)
          tempArr.push(item.id)
        })
        this.checkedArr = val ? tempArr : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value){  // 监听二级彩种
        this.checkedArr = value;
        let checkedCount = value.length;
        this.checkedAll = checkedCount === this.lotteryArr.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.lotteryArr.length;
      },
      saveLotteryConfig(){   // 保存
        let data ={
          supplierInfoId: this.table_id,
          parentLotteryId: this.currentParentId,
          lotteryIdList: this.checkedArr,
        }
        this.saveLotteryConfigLoading = true;
        mergeLottery(data).then(res => {
          
          let resData = res.data
          if(resData.success == 1) {
            this.$message.success(resData.respMsg)
            this.lotteryConfig = false;
            this.getList();
          }else {
            this.$message.error(resData.respMsg)
          }
          this.saveLotteryConfigLoading = false;
        })
      }, 
      
      changeKindAData(val){ // 选中一级彩种名称 请求二级彩种数据
         this.$store.state.lc_dataProvider.secondLotterySelect  =[{ value: "",name: "请选择"}];
          this.$store.state.lc_dataProvider.formInline.kindB = "";
          if(val == null || val == undefined || val == "" || val == 0){
            this.$store.state.lc_dataProvider.formInline.disabledSecond = true;
          }else{
            this.$store.state.lc_dataProvider.formInline.disabledSecond = false;
          
          lotteryDropdownList({parentId: val,level: 1}).then(res => { // 初始化二级彩种下拉列表
            let resData = res.data;
            if(resData.success == 1) {
              let by_secondLotterySelect = resData.content;
              by_secondLotterySelect.forEach(element => {
                  this.$store.state.lc_dataProvider.secondLotterySelect.push(element);
              });
              this.$store.state.lc_dataProvider.formInline.disabledSecond = false; // 开启二级彩种下拉选框
            }else {
              this.$message.error(resData.respMsg)
            }
          }) 
        }
      },
      tableHeaderColor() { // 修改row header的背景颜色与内边距
        return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
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
          this.$store.state.lc_dataProvider.tableData = []
          this.$store.state.lc_dataProvider.datalist_total = 0;
          this.$store.state.lc_dataProvider.page = 1;
          this.$store.state.lc_dataProvider.pageSize = 10;
          this.$store.state.lc_dataProvider.formInline = {
            supplierName:"",  // 供应商名称
            kindA:"",  // 一级彩种
            kindB:"",  // 二级彩种
            dateTime:[], // 服务到期时间
            disabledSecond:true, // 二级彩种不可编辑
        }
          this.$store.dispatch('getDataproviderTableHeight', 2)
        }
      }else {
        if(this.$store.state.lc_dataProvider.tableData.length > 0) {
          this.getList()
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
      })
      window.onresize = () =>{
        this.judgeScree(this.dialogHeight);
      };
      lotteryDropdownList({parentId: 0}).then(res => { // 初始化一级彩种下拉列表
      this.$store.state.lc_dataProvider.firstLotterySelect = [{ value: "",name: "请选择"}];
        let resData = res.data;
        if(resData.success == 1) {
           let by_firstLotterySelect = resData.content;
           by_firstLotterySelect.forEach(element => {
              this.$store.state.lc_dataProvider.firstLotterySelect.push(element);
            });
        }else {
          this.$message.error(resData.respMsg)
        }
      })
    }
  };
</script>
<style lang="scss" scoped>
.lottery-config {
  height: 380px;
  display: flex;
  justify-content: space-between;
  .first-lottery,.second-lottery {
    border: 1px solid gainsboro;
  }
  .first-lottery {
    width: 49%;
    ul li {
      margin: 10px auto;
      line-height: 30px;
      border: 1px solid gainsboro;
      width: 80%;
      text-align: center;
    }
  }
  .second-lottery {
    width: 49%;
  }
  .lottery-title-box {
    text-align: center;
    line-height: 34px;
    border-bottom: 1px solid gainsboro;
  }
}
.addDialog .el-dialog__body .el-input{
  width: 200px!important;
}
.addDialogs p{
  margin-left: -10px;
}
.supplierName.el-input{
  width:140px;
}
.dataProvider-adddiialog .el-dialog .dialog-label-item{
  width: 120px;
  margin-left: 45px;
}
.dialog-search-Information{
  border: none;
  margin-top: 0px;
  margin-bottom: 0px;
}
.dialog-tabs{
    width: 100%;
    height: 40px;
    line-height: 40px !important;
}
.dialog-tabs .el-radio-button__orig-radio:checked+.el-radio-button__inner{
    color: #606266;
    background-color: #f2f2f2;
    border-color: #dcdfe6;
    -webkit-box-shadow: -1px 0 0 0 #dcdfe6;
    box-shadow: -1px 0 0 0 #dcdfe6;
}
.dialog-tabs .el-radio-button__inner{  
    width: 260px;
}
.checkInformation-span{
  min-height: 300px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  .check-div{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    p{
      width: 50%;
      border: solid 1px #dcdfe6;
      text-align: center;
      height: 100% !important;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-bottom: none;
      line-height: 40px;
    }
    p:first-child{
      background-color: #f5f7fa;
    }
    p:last-child{
      border-left: none;
      
    }
  }
  .check-div:last-child {
    border-bottom: solid 1px #dcdfe6;
  }
}
.dataProvider-Informationdiialog .el-dialog{
    max-height: 550px;
}
.eidtAndAdd{
  .el-input,.el-textarea{
    width: 200px!important;
  }
.el-date-editor.el-input, .el-date-editor.el-input__inner{
     height: 28px!important;
}
.el-date-editor .el-range__icon{
  line-height: 20px !important;
}
}
.boxGroup{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .el-checkbox{
    margin:5px auto;
    line-height: 30px;
    border: 1px solid gainsboro;
    width: 80%;
    text-align: center;
  }
}

</style>
