<template>
  <!-- 主数据管理 -->
  <div class="app-container smData">
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">主数据名称：</span>
          <span class="rem_con"><el-input v-model="searchForm.dataName" placeholder="请输入主数据名称"  maxlength="15" :disabled="disableControl"></el-input></span>
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
        <el-button type="primary" size="mini" @click.native.prevent="setMainData(533)" :disabled="disableControl">
          <svg-icon icon-class="chakanxiangqing" />
          查看
          </el-button>
        <el-button type="primary" size="mini" @click.native.prevent="refresh" :disabled="disableControl">
          <svg-icon icon-class="shuaxin" />
          刷新Redis
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
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index" align="center" width="50" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{scope.$index+(page - 1) * size + 1}} </span>
          </template>
        </el-table-column>
        <el-table-column label="主数据编号" prop="code" align="center"  show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.code ? scope.row.code : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="主数据名称" prop="name" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
              <span> {{ scope.row.name ? scope.row.name : '-' }} </span>
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
    <!-- 设置主数据 -->
    <el-dialog :visible.sync="setMainDataVisible" title="查看主数据" width="600px" :top="dialogMt" class="ipConfig_dialog" :close-on-click-modal="false" >
      <div class="dialog-box">
        <!-- 弹框主内容表头 -->
        <!-- <div class="data-dialog-title">
          <div class="data-dialog-btns">
            <el-button type="primary" size="mini" @click.native.prevent="addMainData">新增</el-button>
            <el-button type="primary" size="mini" @click.native.prevent="startOrStopData('start',148)">启用</el-button>
            <el-button type="primary" size="mini" @click.native.prevent="startOrStopData('stop',148)">禁用</el-button>
          </div>
        </div> -->
        <!-- 弹框表格 -->
        <div class="data-dialog-table">
          <el-table
            :header-cell-style="tableHeaderColor"
            :cell-style="rowcellClass"
            :key="tableKey"
            :data="dialogData"
            highlight-current-row
            @current-change="handleDialogTableChange"
            style="width: 100%;"
            border
            height="400"
            class = "tableAuto216"
            v-loading="dialogLoading"
          >
            <!-- <el-table-column label width="35" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-radio :label="scope.row.id" v-model="dialog_table_id" class="hidTextRadio">&nbsp;</el-radio>
              </template>
            </el-table-column> -->
            <el-table-column label="排序ID" property="id" align="center" width="80" show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="数据说明" property="description" align="center" width="120" show-overflow-tooltip>  
            </el-table-column>
            <el-table-column label="显示名称" property="name" align="center" width="150" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.name ? scope.row.name : '-' }}</span>
              </template>
            </el-table-column>
            
            <el-table-column label="主数据值" property="value" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.value ? scope.row.value : '-' }}</span>
              </template>
            </el-table-column>
            <!-- <el-table-column label="状态" property="disable" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                  <span> {{ scope.row.disable ? '禁用' : scope.row.disable == false ? '禁用' : '-' }}</span>
              </template>
            </el-table-column> -->
          </el-table>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setMainDataVisible = false" size="mini">关闭</el-button>
      </span>
    </el-dialog>
    <!-- 主数据新增弹框 -->
    <!-- <el-dialog :visible.sync="addDataDialog" :title="dataName" width="380px" :top="dialogMt" class="ipConfig_dialog" :close-on-click-modal="false" top="32.2vh">
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>显示名称：
          </span>
          <el-input style="width: 200px;" v-model="addData.name" maxlength="40"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>数据说明：
          </span>
          <el-input style="width: 200px;" v-model="addData.description" maxlength="40"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>排序ID：
          </span>
          <el-input style="width: 200px;" v-model="addData.orderSeq" maxlength="40" />
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>主数据值：
          </span>
          <el-input style="width: 200px;" v-model="addData.value" maxlength="40" />
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>默认状态：
          </span>
          <el-input style="width: 200px;" :disabled="true" placeholder="启用" maxlength="40"/>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okAddMainData" size="mini">确 定</el-button>
        <el-button @click="addDataDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog> -->
    <!-- 启用-禁用(弹框) -->
    <!-- <el-dialog :visible.sync="stopOrgoOnDialog" :title="dialogTitle" width="350px" :top="dialogMt" :close-on-click-modal="false">
      <p style="text-align:center;">
        确定{{dialogTitle}}该主数据？
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="okStopOrStart(dialogTitle)">确 定</el-button>
        <el-button size="mini" @click="stopOrgoOnDialog = false">取 消</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { validateUserName,validatePwd,validsevendata } from "@/utils/validate";
import { findListByParentId,persist,disable,refreshRedis } from "@/api/systemManage/sm_data";
export default {
  name: "sm_admin",
  data() {
    return {
      disableControl: false,
      dialogLoading : false, // 设置主数据表格loading
      loading: false, // Loading 加载
      addDataDialog: false,
      rowDataId: '',
      table_id: null,
      table_row_data: '',
      dialog_table_id: null, // 主数据id
      dialog_table_row: null, // 主数据单元行内容
      current_click_rowData: null,
      setMainDataVisible: false, // 设置主数据弹窗
      stopOrgoOnDialog: false, // 启用禁用弹窗
      dialogTitle: null, // 弹窗标题
      dialogData: [], // 弹窗表格
      dataType: null, // 弹框表格筛选数据类型
      tableKey: 0,
      dialogHeight: 0,
      dialogMt: this.dialogMt, // 弹出框上边距
      addData:{
        name:'',
        orderSeq:'',
        value:'',
        description:''
      }
    };
  },
  computed: {
    ...mapState({
      allData: state => state.sm_data.allData,
      allData_total: state => state.sm_data.allDataCount,
      currentPageSize: state => state.sm_data.currentPageSize
    }),
    size: {
      get(){
        return this.$store.state.sm_data.size;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.sm_data.page;
      },
      set(item){
        return  item;
      }
    },
    searchForm: {
      get(){
        return this.$store.state.sm_data.searchForm;
      },
      set(item){
        return  item;
      }
    }
  },
  methods: {
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
      if(a <= 0){
        this.dialogMt = 0 + 'px';
      }
    },
    getList(val) { // 填充表格数据
      if(!val) {
        val = 1;
      }
      this.disableControl = true;
      this.loading = true; // 请求接口时loading启用
      this.table_id = null;
      this.$store.dispatch('getDataPage',val);
      let data = {
        name: this.$store.state.sm_data.searchForm.dataName,
        page: this.page - 1,
        size: this.size
      }; // 拼装接口参数

      this.$store.dispatch("getDataInfoList", data).then(res => {
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
        this.$store.dispatch('getDataTableHeight', currentPageSize)
        this.loading = false; // 接口返回数据时，loading禁用
        this.disableControl = false;
      });
    },
    search() { // 查询方法
      this.getList()
    },
    reset() { // 重置查询条件
      this.$store.state.sm_data.searchForm.dataName = "";
    },
    getDialogData() { // 获取弹窗表格数据
      this.dialogLoading = true;
      findListByParentId({id: this.table_id}).then(res => {
        let resData = res.data;
        if(resData.success ==1) {
          this.dialogData = resData.content;
          this.dialogLoading = false;
        }else {
          this.$message.error(resData.respMsg)
        }
      })
    },
    setMainData(h) { // 查看主数据按钮
      if(!this.table_id) {
        this.$message.warning('请选择一条数据');
        return false;
      }

      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.setMainDataVisible = true;

      this.getDialogData();
      
    },
    // addMainData() { // 新增主数据弹窗
    //   this.addDataDialog = true;
    // },
    // okAddMainData(){ // 确定新增主数据
    //   if(this.addData.name == ''){
    //     this.$message.warning('显示名称不可为空')
    //     return false;
    //   }else if(this.addData.orderSeq == ''){
    //     this.$message.warning('排序ID不可为空')
    //     return false;
    //   }else if(this.addData.value == ''){
    //     this.$message.warning('主数据值不可为空')
    //     return false;
    //   }else if(this.addData.name.length > 50){
    //     this.$message.warning('主数据值最多输入50位')
    //     return false;
    //   }else if(!this.addData.description){
    //     this.$message.warning('数据说明不可为空')
    //     return false;
    //   }else{
    //     let data = {
    //       name: this.addData.name,
    //       orderSeq: this.addData.orderSeq,
    //       value: this.addData.value,
    //       description: this.addData.description
    //     }
    //     persist(data).then(res => {
    //       let resData = res.data;
    //       if(resData.success == 1) {
    //         this.$message.success(resData.respMsg)
    //         this.addDataDialog = false;
    //       }
    //     })
    //   }

    // },
    // startOrStopData(type,h) { // 启用-禁用弹窗
    //   if(type == 'start') { // 启用
    //     this.dialogTitle = '启用';
    //   }else {
    //     this.dialogTitle = '禁用';
    //   }

    //   this.judgeScree(h)

    //   if(!this.dialog_table_id) {
    //     this.$message.warning('请选择一条数据');
    //     return false;
    //   }

    //   if(this.dialogTitle == '启用' && this.dialog_table_row.disable == true ) { // 启用
    //     this.$message.warning("该数据已被启用，不可操作")
    //     return false;
    //   }else if(this.dialogTitle == '禁用' && this.dialog_table_row.disable == false ) { // 禁用
    //     this.$message.warning("该数据已被禁用，不可操作")
    //     return false;
    //   }

    //   this.stopOrgoOnDialog = true;
    // },
    // okStopOrStart(val) { // 确定启用-禁用
    //   let data = {
    //     id: this.dialog_table_id,
    //     disable: this.dialog_table_row.disable
    //   }
    //   disable(data).then(res => {
    //     let resData = res.data;
    //     if(resData.success ==1) {
    //       this.$message.success(resData.respMsg)
    //       this.stopOrgoOnDialog = false;
    //       this.getDialogData();
    //     }else {
    //       this.$message.error(resData.respMsg)
    //     }
    //   })
    // },
    refresh() { // 刷新
      if(!this.table_id) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      refreshRedis({code: this.table_row_data.code}).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.getList()
        }else {
          this.$message.error(resData.respMsg)
        }
      })
    },
    handleSizeChange(val) { // 页码大小变化时
      this.$store.dispatch('getDataPageSize', val);
      this.getList();
    },
    handleMainTableChange(val) { // 表格数据行切换方法
      if(val != null) {
        this.table_id = val.id;
        this.table_row_data = val;
      }
    },
    handleDialogTableChange(val) { // 弹框表格单元行切换
      this.dialog_table_id = val.id;
      this.dialog_table_row = val;
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: rgb(247, 251, 254); padding: 4px 0;text-align:center;";
    }, 
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
  },
  mounted(){
    this.$nextTick(() => {
      // this.getList();
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
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

        this.$store.state.sm_data.allData = []
        this.$store.state.sm_data.allDataCount = 0;
        this.$store.state.sm_data.page = 1;
        this.$store.state.sm_data.size = 10;
        this.$store.state.sm_data.searchForm.dataName = "";
        this.$store.dispatch('getDataTableHeight', 2)
      }
    }else {
      if(this.$store.state.sm_data.allData.length > 0) {
        this.getList()
      }
    }
  }
};
</script>
<style lang="scss" >
.iconstyle{
  font-weight: bold;
}
.smData {
  .data-dialog-title {
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .filters-box {
      .el-radio-button__inner {
        padding: 5px;
        border: none;
        font-size: 12px;
      }
      .is-active {
        .el-radio-button__inner {
          color: #fff;
          background-color: #409EFF;
          border-left: none;
          border-radius: 4px;
        }
      }
    }
  }
}
  
</style>

