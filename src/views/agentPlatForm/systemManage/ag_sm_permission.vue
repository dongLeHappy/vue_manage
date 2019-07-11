<template>
  <!-- 权限管理 -->
  <div class="app-container smAdmin">
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">代理商权限名称：</span>
          <span class="rem_con"><el-input style="width:160px;" v-model="searchForm.dataName" placeholder="请输入代理商权限名称"  maxlength="15" :disabled="disableControl"></el-input></span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" @click.native.prevent="search" :disabled="disableControl">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" size="mini" @click.native.prevent="reset" :disabled="disableControl">
          <svg-icon icon-class="zhongzhi" />
          重置</el-button>
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
        @current-change="handleMainTableChange"
        style="width: 100%;" 
        border 
        class="tableAuto216"
        v-loading="loading"
        ref="tableScroll"
      >
        <el-table-column label width="35" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_rowDataId" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index" align="center" width="55" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{scope.$index+(page - 1) * pageSize + 1}} </span>
          </template>
        </el-table-column>
        <el-table-column sortable label="代理商权限编号" prop="code" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.code ? scope.row.code : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="代理商权限名称" prop="name" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.name ? scope.row.name : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="父级名称" prop="parentName" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.parentName ? scope.row.parentName : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column sortable label="创建时间" prop="createdDate" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.createdDate ? scope.row.createdDate : '-' }} </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页    数据要是大于1000条时，把分页释放掉-->
    <!-- <div class="admin_pagination">
      <el-pagination 
        :page-sizes="[10, 20, 50, 100]" 
        :current-page.sync="page"
        background
        :total="allData_total"
        :page-size="pageSize" 
        layout="total, sizes, prev, pager, next, jumper" 
        @size-change="handleSizeChange" 
        @current-change="getList" 
      >
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "sm_admin",
  data() {
    return {
      disableControl: false,
      loading:false, // Loading 加载
      table_rowDataId: null,
      dialog_table_rowDataId: null,
      current_click_rowData: null,
      setMainDataVisible: false, // 设置主数据弹窗
      tableKey: 0,
      total: 0,
      isValidate: false,
      searchTimes:0
    };
  },
  computed: {
    ...mapState({
      allData: state => state.ag_sm_permission.allData,
      allData_total: state => state.ag_sm_permission.allDataCount,
      currentPageSize: state => state.ag_sm_permission.currentPageSize
    }),
    pageSize: {
      get(){
        return this.$store.state.ag_sm_permission.pageSize;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.ag_sm_permission.page;
      },
      set(item){
        return  item;
      }
    },
    searchForm:{
      get(){
        return this.$store.state.ag_sm_permission.searchForm;
      },
      set(item){
        return  item;
      }
    }
  },
  methods: {
    getList(val) { // 填充表格数据
      this.disableControl = true;
      this.loading = true; 
      if(!val) {
        val = 1;
      }
      this.$store.dispatch('getAgPermissionPage',parseInt(val));

      let data = {
        name: this.$store.state.ag_sm_permission.searchForm.dataName,
        page: this.page - 1,
        size: this.pageSize
      }; 
      this.$store.dispatch("getAgPermissionData", data).then(res => {
        let currentPageSize = 2;
        if(res.success == 1){
          if(res.content.length > 0) {
            currentPageSize = res.content.length;
          }else {
            currentPageSize = 2;
          }
        }else{
          this.$message.error(res.respMsg)
        }
        
        this.$refs.tableScroll.bodyWrapper.scrollTop = 0; 
        this.$store.dispatch('getAgPermissionTableHeight', currentPageSize)
        this.loading = false; 
        this.disableControl = false;
      });
    },
    search() { // 查询方法
      this.getList()
    },
    reset() { // 重置查询条件
     this.$store.state.ag_sm_permission.searchForm.dataName = "";
    },
    
    handleSizeChange(val) { // 页码大小变化时
      this.$store.dispatch('getAgPermissionPageSize', val);
      this.getList();
    },
    handleMainTableChange(val) { // 表格数据行切换方法
      if(val != null) {
        this.table_rowDataId = val.id;
      }
    },
    handleDialogTableChange(val) { // 弹框表格单元行切换
      if(val != null) {
        this.dialog_table_rowDataId = val.id;
      }
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
        this.$store.state.ag_sm_permission.allData = []
        this.$store.state.ag_sm_permission.allDataCount = 0;
        this.$store.state.ag_sm_permission.page = 1;
        this.$store.state.ag_sm_permission.pageSize = 10;
        this.$store.state.ag_sm_permission.searchForm.dataName = "";
        this.$store.dispatch('getAgPermissionTableHeight', 2)
      }
    }else {
      if(this.$store.state.ag_sm_permission.allData.length > 0) {
        this.getList()
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .data-dialog-title {
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .filters-box {
      span {
        cursor: pointer;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          color: #409EFF;
        }
      }
    }
  }
</style>

