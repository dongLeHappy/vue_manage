<template>
  <!-- 定时任务管理 -->
  <div class="app-container smAdmin">
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">定时任务名称：</span>
          <span class="rem_con"><el-input v-model="searchEdition.name" placeholder="请输入定时任务名称"  maxlength="15" :disabled="disableControl"></el-input></span>
        </li>
          <li>
          <span class="rem_tit">类型：</span>
          <span class="rem_con">
              <el-select v-model="searchEdition.status" :disabled="disableControl" value-key="name" placeholder="请选择">
                <el-option v-for="(item,index) in theStatus" :key="index" :label="item.name" :value="item.value"></el-option>
              </el-select>
            </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" @click.native.prevent="search" :disabled="disableControl">
          <svg-icon icon-class="chaxun" />
          查询
          </el-button>
        <el-button type="primary" size="mini" @click.native.prevent="reset" :disabled="disableControl">
          <svg-icon icon-class="zhongzhi" />
          重置
          </el-button>
        <el-button type="primary" size="mini" @click.native.prevent="editState(254)" :disabled="disableControl">
          <svg-icon icon-class="bianji" />
          编辑说明
          </el-button>
        <el-button type="primary" size="mini" @click.native.prevent="checkLog(584)" :disabled="disableControl">
          <svg-icon icon-class="chakanxiangqing" />
          查看执行日志
          </el-button>
      </el-form-item>
    </el-form>
    <!-- 表格数据展示 -->
    <div class="admin_table">
      <el-table 
        :header-cell-style="tableHeaderColor" 
        :cell-style="rowcellClass" 
        :key="tableKey" 
        :data="allData" 
        ref="multipleTable"
        highlight-current-row 
        @current-change="handleMainTableChange"
        style="width: 100%;" 
        border 
        class="tableAuto216"
        :height="currentPageSize*25 + 34"
           v-loading="loading"
      >
      <el-table-column label width="35" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-radio :label="scope.row.code" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index" align="center" width="50" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{scope.$index+(page - 1) * size + 1}} </span>
          </template>
        </el-table-column>
        <el-table-column label="定时任务编号" prop="code" align="center" width="100"  show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.code ? scope.row.code : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="定时任务名称" prop="name" align="center" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.name ? scope.row.name : '-' }} </span>
          </template>
        </el-table-column>
        <!-- 0 运行中  1 暂停 -->
        <el-table-column label="当前状态" prop="status" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span>{{ scope.row.status  ? '暂停' : '运行中' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="刷新频率" prop="refreshTime" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.refreshTime ? scope.row.refreshTime : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="最后执行耗时" prop="cost"  width="100" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.cost ? scope.row.cost+'s' : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="说明" prop="description" align="center"  show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.description ? scope.row.description : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="创建人" prop="createdBy" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.createdBy ? scope.row.createdBy : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" prop="createdDate" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.createdDate ? scope.row.createdDate : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="修改人" prop="lastModifiedBy" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.lastModifiedBy ? scope.row.lastModifiedBy : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="修改时间" prop="lastModifiedDate" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.lastModifiedDate ? scope.row.lastModifiedDate : '-' }} </span>
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
      >
      </el-pagination>
    </div>
    <!-- 编辑说明 -->
    <el-dialog :visible.sync="editDialogVisible" title="编辑说明" width="350px" class="ipConfig_dialog editSaying" :close-on-click-modal="false" :top="dialogMt">
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item userAccount">定时任务编号：</span>
          <el-input style="width: 200px;" :disabled="true" v-model="editMaskData.jobId" maxlength="40"/>
        </p>
        <p>
          <span class="dialog-label-item userAccount">定时任务名称：</span>
          <el-input style="width: 200px;" :disabled="true" :autosize="{ minRows: 2}" v-model="editMaskData.name" maxlength="50"/>
        </p>
        <p>
          <span class="dialog-label-item input-remark-span">说明：</span>
          <el-input
            style="width: 200px;"
            type="textarea"
            :autosize="{ minRows: 2}"
            v-model="editMaskData.remark"
            maxlength="50"
          />
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okEditState" size="mini">确 定</el-button>
        <el-button @click="editDialogVisible = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 查看执行日志 -->
    <el-dialog :visible.sync="checkLogDialogVisible" title="查看执行日志（近7天）" width="555px" :close-on-click-modal="false" :top="dialogMt">
      <div class="dialog-box">
        <!-- 弹框主内容表头 -->
        <div class="data-dialog-title">
          <div class="filters-box">
            <el-radio-group v-model="maskType" @change="handleRadioChange">
              <el-radio-button :label="table_id" >当前定时任务</el-radio-button>
              <!-- <el-radio-button :label="0">全部定时任务</el-radio-button> -->
            </el-radio-group>
          </div>
        </div>
        <!-- 弹框表格 -->
        <div class="data-dialog-table">
          <el-table
            :header-cell-style="tableHeaderColor"
            :cell-style="rowcellClass"
            :key="tableKey"
            :height="307"
            :data="dialogTableData"
            highlight-current-row
            style="width: 100%;"
            border
            class = "tableAuto216"
            v-loading="dialogLoading"
          >
            <el-table-column label="序号" type="index" align="center" width="60" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{scope.$index+(dialogPage - 1) * dialogPageSize + 1}} </span>
              </template>
            </el-table-column>
            <el-table-column label="定时任务编号" property="code" align="center" width="110" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.code ? scope.row.code : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="定时任务名称" property="name" align="center" width="130" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.name ? scope.row.name : '-' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="执行时间" property="createdDate" align="center" width="140" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.createdDate }}</span>
              </template>
            </el-table-column>
            <el-table-column label="耗时 (秒)" property="cost" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                  {{ scope.row.cost == false ? 0 : scope.row.cost ? scope.row.cost : '-' }}
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <div class="admin_pagination">
          <el-pagination 
            :page-sizes="[10, 20, 50, 100]" 
            :current-page.sync="dialogPage"
            background
            :pager-count="5"
            :page-size="dialogPageSize" 
            layout="total, prev, pager, next" 
            :total="dialogTableDataCount"
            @current-change="getDialogTableList" 
          >
          </el-pagination>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mergeRemark,checkMaskLog } from "@/api/systemManage/sm_mask";
import { findByCode } from '@/api/select'; // 所有的下拉框中的数据接口
export default {
  name: "sm_mask",
  data() {
    return {
      disableControl: false,
      loading: false, // Loading 加载
      dialogLoading: false, // 弹框loading
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
      table_row_data: null, 
      table_id: null, // 单条数据Id
      maskType: '', // 监听查执行日志选中 任务类型
      dialogTableData: [], // 弹框表格数据
      dialogTableDataCount: 0, // 弹框表格数据总条数
      currentDataStatus: null, // 当前数据状态     
      editDialogVisible: false,
      checkLogDialogVisible: false,
      tableKey: 0,
      dialogPage: 1,
      dialogPageSize: 10,
      total: 0,
      editMaskData: { 
        params: '', // 定时任务名称
        jobId: '', // 定时任务编号
        remark: '' // 定时任务说明
      },
      // searchEdition: {
      //   name: null, // 定时任务名称
      //   status:"1"  // 定时任务状态
      // },
      theStatus:[], // 定时任务状态下拉框数据
    };
  },
  computed: {
    ...mapState({
      allData: state => state.sm_mask.allData,
      allData_total: state => state.sm_mask.allData_total,
      currentPageSize: state => state.sm_mask.currentPageSize
    }),
    size: {
      get(){
        return this.$store.state.sm_mask.size;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.sm_mask.page;
      },
      set(item){
        return  item;
      }
    },
    searchEdition:{
      get(){
        return this.$store.state.sm_mask.searchEdition;
      },
      set(item){
        return  item;
      }
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight);  
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
  },
  methods: {
    judgeScree(val) { 
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    getList(val) { 
      if(!val) {
        val = 1;
      }
      this.loading = true; 
      this.disableControl = true;
      this.$store.dispatch('getMaskPage',val);
      this.table_id = null;
      let data = {
        page: this.page - 1,
        size: this.size,
        name: this.$store.state.sm_mask.searchEdition.name,
        category:this.$store.state.sm_mask.searchEdition.status
      }; 

      this.$store.dispatch("getMaskData", data).then(res => {
        let currentPageSize = 2;
        if(res.success == 1){
          if(res.content.content.length > 0) {
            currentPageSize = res.content.content.length ;
          }else {
            currentPageSize = 2;
          }
        }else{
          this.$message.error(res.respMsg)
        }
        
        this.$store.dispatch('getMaskTableHeight', currentPageSize)
        this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行 
        this.loading = false; 
        this.disableControl = false;
      });
    },
    getDialogTableList(val) {
      let data = {
        jobId: this.table_id,
        page: val - 1,
        size: this.dialogPageSize,
     //   page: this.dialogPage - 1,
        category:this.$store.state.sm_mask.searchEdition.status,
      }
      if(this.maskType == 0){
        data.jobId = 0;
      }
      this.dialogLoading = true;
      checkMaskLog(data).then(res => {
        
        let resData = res.data.content;
        this.dialogTableDataCount = resData.totalElements;
        if(res.data.success == 1) {
          this.dialogTableData = resData.content;
        }else {
          this.$message.error(resData.respMsg);
        }
        this.dialogLoading = false;
      })
    },
    search() { // 查询方法
      this.getList()
    },
    reset() { // 重置查询条件
      this.$store.state.sm_mask.searchEdition = {
        name :"",
        status:"1"
      };
    },
    editState(h) { // 编辑说明
      if(!this.table_id) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.editDialogVisible = true;
    },
    okEditState() { // 确认编辑
      let data = {
        jobId: this.editMaskData.jobId,
        remark: this.editMaskData.remark,
        category:this.$store.state.sm_mask.searchEdition.status
      }
      mergeRemark(data).then(res => {
        
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.editDialogVisible = false;
          this.getList()
        }else {
          this.$message.error(resData.respMsg)
        }
      })

    },
    checkLog(h) { // 查看执行日志
      this.maskType = this.table_id; // 默认选中当前定时任务
      if(!this.table_id) {
        this.$message.warning("请选择一条数据");
        return false;
      }
      let data = {
        jobId: this.table_id,
        category:this.$store.state.sm_mask.searchEdition.status,
        page: this.dialogPage - 1,
        size: this.dialogPageSize
      }
      this.dialogLoading = true;
      checkMaskLog(data).then(res => {
        let resData = res.data.content;
        this.dialogTableDataCount = resData.totalElements;
        if(res.data.success == 1) {
          this.dialogTableData = resData.content;
        }
        this.dialogLoading = false;
      })
      

      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.checkLogDialogVisible = true;
    },
    handleRadioChange(val) { // 筛选 全部任务 和 当前任务 (暂无接口)
    this.dialogPage = 1;
      this.maskType = val
      let data = {
        jobId: this.table_id,
        category:this.$store.state.sm_mask.searchEdition.status,
        page: this.dialogPage - 1,
        size: this.dialogPageSize
      }
      if(val == 0) {
        data.jobId = 0
      }
      this.dialogLoading = true;
      checkMaskLog(data).then(res => {
        
        let resData = res.data.content;
        this.dialogTableDataCount = resData.totalElements;
        if(res.data.success == 1) {
          this.dialogTableData = resData.content;
        }
        this.dialogLoading = false;
      })
      
    },
    handleSizeChange(val) { // 页码大小变化时
      this.$store.dispatch('getMaskPageSize', val)
      this.getList();
    },
    handleMainTableChange(val) { // 表格数据行切换方法
    
      if(val) {
        this.table_row_data = val;
        this.table_id = val.code
        this.editMaskData.jobId = val.jobId;
        this.editMaskData.name = val.name;
        this.editMaskData.remark = val.description;
        this.dialogPage = 1;
      }
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: rgb(247, 251, 254); padding: 4px 0;text-align:center;";
    }, 
    rowcellClass() { // 行的cell样式
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

        this.$store.state.sm_mask.allData = []
        this.$store.state.sm_mask.allData_total = 0;
        this.$store.state.sm_mask.page = 1;
        this.$store.state.sm_mask.size = 10;
        this.$store.state.sm_mask.searchEdition = {
          name :"",
          status:"1"
        };
        this.$store.dispatch('getMaskTableHeight', 2)
      }
    }else {
      if(this.$store.state.sm_mask.allData.length > 0) {
        this.getList()
      }
    }
  },
  mounted(){
     findByCode({code: "SCHEDULE_CATEGORY"}).then(res => {  // 初始化下拉列表
     this.theStatus = []
      let resData = res.data;
      if(resData.success == 1) {
         let by_theStatus = resData.content['SCHEDULE_CATEGORY']; // 初始化定时任务日志类型
                by_theStatus.forEach(element => {
                  this.theStatus.push(element);
                });  
      }
    })
  }
};
</script>
<style lang="scss">
.smAdmin {
  .userAccount{
    width: 110px!important;
    margin-left: 10px!important;
  }
  .dialog-box {
    .el-input {
      width: 80px;
    }
  }
  .data-dialog-title {
    padding-bottom: 8px;
    .filters-box {
      .el-radio-button {
        margin-right: 10px;
      }
      .el-radio-button__inner {
        border: 1px solid #dcdfe6;
        padding: 5px 10px !important;
        border-radius: 4px
      }
      .is-active {
        .el-radio-button__inner {
          border: none;
        }
      }
    }
  }
  .data-dialog-table {
    max-width: 540px;
    max-height: 500px;
    overflow: auto;
  }
  .editSaying .el-dialog__body p{
    margin-left: -15px;
  }
}
  
</style>