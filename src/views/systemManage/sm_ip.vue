<template>
<!--IP管理-->
  <div class="app-container smIp">
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">IP地址：</span>
          <span class="rem_con"><el-input v-model="searchEdition.address" placeholder="请输入IP地址" maxlength="40" :disabled="disableControl"/></span>
        </li>
        <li>
            <span class="rem_tit">类型：</span>
            <span class="rem_con">
                <el-select v-model="searchEdition.category" value-key="name" placeholder="全部" :disabled="disableControl">
                  <el-option v-for="item in ipTypeArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
            </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" class="ipConfig_button" size="mini" @click="search" :disabled="disableControl">
          <svg-icon icon-class="chaxun" />
          查询
          </el-button>
        <el-button type="primary" class="ipConfig_button" size="mini" @click="reset" :disabled="disableControl">
          <svg-icon icon-class="zhongzhi" />
          重置
          </el-button>
        <el-button type="primary" class="ipConfig_button" @click="add(254)" size="mini" :disabled="disableControl">
          <svg-icon icon-class="xinzeng1" />
          新增
          </el-button>
        <el-button type="primary" class="ipConfig_button" @click="update(284)" size="mini" :disabled="disableControl">
          <svg-icon icon-class="xiugai" />
          修改
          </el-button>
        <el-button type="primary" class="ipConfig_button" size="mini" @click="deleteIP(148)" :disabled="disableControl">
          <svg-icon icon-class="shanchu" />
          删除
          </el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <div class="ipConfig_table">
      <el-table
        :header-cell-style="tableHeaderColor"
        :cell-style="rowcellClass"
        :key="tableKey"
        :data="allData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%;"
        border
        class = "tableAuto216"
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
            <span>{{scope.$index+(page - 1) * size + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column label="IP地址" property="address" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <span> {{ scope.row.address ? scope.row.address : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="类型" property="category" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <span> {{scope.row.category == 0 ? '平台用户' : scope.row.category == 1 ? '代理商用户' : scope.row.category == 2 ? '代理商服务器' : scope.row.category == 3 ? '其它': '-' }} </span>
          </template>
        </el-table-column>
       <el-table-column label="IP说明" property="remark" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <span> {{ scope.row.remark ? scope.row.remark : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="创建人" property="createdBy" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <span> {{ scope.row.createdBy ? scope.row.createdBy : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" property="createdDate" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
           <span> {{ scope.row.createdDate ? scope.row.createdDate : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="修改人" property="lastModifiedBy" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <span> {{ scope.row.lastModifiedBy ? scope.row.lastModifiedBy : '-' }} </span>
          </template>
        </el-table-column>
        <el-table-column label="最后修改时间" property="lastModifiedDate" align="center" width="150" show-overflow-tooltip>
          <template slot-scope="scope">
            <span> {{ scope.row.lastModifiedDate ? scope.row.lastModifiedDate : '-' }} </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="ipConfig_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="size"
        background
        :total="allDataCount"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getList"
      >
      </el-pagination>
    </div>
    <!-- 新增-->
    <el-dialog :visible.sync="addDialogVisible" title="新增" width="380px" class="ipConfig_dialog" :close-on-click-modal="false" :top="dialogMt">
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
    </el-dialog>
    <!-- 修改 -->
    <el-dialog :visible.sync="updateDialogVisible" title="修改" class="ipConfig_dialog" :close-on-click-modal="false" width="380px" :top="dialogMt">
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>IP地址：
          </span>
          <el-input style="width: 200px;" v-model="updataData.address"  @input="validateIpInput('修改')"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required ">*</span>类型：
          </span>
          <el-select v-model="updataData.category " value-key="name" placeholder="全部">
            <el-option v-for="item in updataIpTypeArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
          </el-select>
        </p>
        <p style="padding: 15px 0px;">
          <span class="dialog-label-item input-description-span">IP说明：</span>
          <el-input style="width: 200px;" type="textarea" :autosize="{ minRows: 2}" v-model="updataData.description" maxlength="50"/>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okUpdate" size="mini" :loading="loadingObj.ipEdit">确 定</el-button>
        <el-button @click="updateDialogVisible = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 删除ip -->
    <el-dialog :visible.sync="deleteDialogVisible" title="删除" class="ipConfig_dialog" :close-on-click-modal="false" width="380px" :top="dialogMt">
      <div class="dialog-box">
        <p style="text-align:center;">
          是否删除IP：
          <span class="required">"{{ table_row_data ? table_row_data.address : '' }}"</span>？
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="okDelete" size="mini" :loading="loadingObj.ipDelete">确 定</el-button>
        <el-button @click="deleteDialogVisible = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { persist,merge,remove } from "@/api/systemManage/sm_ip";
import { findByCode } from '@/api/select'
import { ipArea,validIpNumber } from "@/utils/validate";
export default {
  name: "sm_ip",
  computed: {
    ...mapState({
      allData: state => state.sm_ip.allData,
      allDataCount: state => state.sm_ip.allDataCount,
      currentPageSize: state => state.sm_ip.currentPageSize
    }),
    size: {
      get() {
        return this.$store.state.sm_ip.size;
      },
      set(item) {
        return item;
      }
    },
    page: {
      get() {
        return this.$store.state.sm_ip.page;
      },
      set(item) {
        return item;
      }
    },
    searchEdition: {
      get() {
        return this.$store.state.sm_ip.searchEdition;
      },
      set(item) {
        return item;
      }
    }
  },
  data() {
    return {
      disableControl: false,
      loading:false, // Loading 加载
      table_row_data: null, // 一行的数据
      table_id: null, // 单选选中的按钮id
      addDialogVisible: false, // 新增ip弹窗
      updateDialogVisible: false, // 修改ip弹窗
      deleteDialogVisible: false, // 删除ip弹窗
      tableKey: 0,
      total: 0,  
      addData:{
        address: "",
        description: "",
        category: ""
      },
      updataData: {
        // id: "",
        address: "",
        description: "",
        category: ""
      },
      ipTypeArr: [{ value: "",name: "全部"}], // 查询ip类型
      addIpTypeArr: [{ value: "",name: "请选择"}], //新增 ip类型
      updataIpTypeArr: [], //修改 ip类型
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6;//如果没有后面的-8.64e6就是不可以选择今天的
        }
      },
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
      loadingObj:{
        ipAdd:false,
        ipEdit:false,
        ipDelete:false,
      }
    };
  },
  
  mounted(){
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
    findByCode({code: 'IPINFO_CATEGORY'}).then(res => { // 初始化ip类型 下拉框
      let resData = res.data;
      if(resData.success == 1) {
        let by_ipTypeArr = resData.content['IPINFO_CATEGORY']
         by_ipTypeArr.forEach(element => {
            this.ipTypeArr.push(element);
            this.updataIpTypeArr.push(element);
            this.addIpTypeArr.push(element);
          });
      }else {
        this.$message.error(resData.respMsg)
      }
      
    })
  },
  methods: {
    getList(val) { // 拉取数据的方法
      if(!val) {
        val = 1;
      }
      this.loading = true; 
      this.disableControl = true;
      this.$store.dispatch('getIpPage',val);
      this.table_id = '';

      let data = {
        address: this.$store.state.sm_ip.searchEdition.address || null,
        category: this.$store.state.sm_ip.searchEdition.category || null,
        page: this.page - 1,
        size: this.size
      };
      this.$store.dispatch("getIpInfoList", data).then(res => {
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
        
        this.$store.dispatch('getIpTableHeight', currentPageSize)
        this.loading = false; // 接口返回数据时，loading禁用
        this.disableControl = false;
      });
    },
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    validateIpInput(type) { // 验证输入
      if(type == '新增') {
        if(!validIpNumber(this.addData.address)) {
          this.$nextTick(() => {
            this.addData.address = "";
          })
        }
      }else {
        if(!validIpNumber(this.updataData.address)) {
          this.$nextTick(() => {
            this.updataData.address = "";
          })
        } 
      }
      
    },
    search() { // 查询方法
      this.getList();
    },
    reset() { // 重置查询条件
      this.$store.state.sm_ip.searchEdition = {}
    },
    deleteIP(h) { // 删除选中IP
      if(!this.table_id) {
        this.$message.warning('请选择一条数据！')
      }else {
        this.dialogHeight = h;
        this.judgeScree(this.dialogHeight);
        this.deleteDialogVisible = true;
      }
    },
    okDelete() { // 确定删除IP
      this.loadingObj.ipDelete = true;
      remove({id: this.table_id}).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.deleteDialogVisible = false;
          this.getList();
        }else {
          this.$message.error(resData.respMsg);
        }
        this.loadingObj.ipDelete = false;
      })
    },
    add(h) { // 新增IP
      this.addData = {};
      this.judgeScree(h);
      this.addDialogVisible = true;
    },
    okAdd() { // 确认新增

      if(!this.addData.address){
        this.$message.warning('IP地址不能为空，请输入');
        return false
      }
      if(!this.addData.category){
        this.$message.warning('类型不能为空，请输入');
        return false
      }
      this.loadingObj.ipAdd = true;
      persist(this.addData).then(res => {
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.addDialogVisible = false;
          this.getList();
        }else {
          this.$message.error(resData.respMsg);
        }
        this.loadingObj.ipAdd = false;
      })
    },
    update(h) { // 修改
      if(!this.table_id) {
        this.$message.warning('请选择一条数据！')
      }else {
        // this.updataData = JSON.parse(JSON.stringify(this.table_row_data));  // 对象克隆
        this.updataData = {
          id:this.table_row_data.id,
          address: this.table_row_data.address,
          description: this.table_row_data.remark,
          category: this.table_row_data.category.toString()
        }
     
        this.dialogHeight = h;
        this.judgeScree(this.dialogHeight);
        this.updateDialogVisible = true;
      }
    },
    okUpdate() { // 确认修改
      if(!this.updataData.address){
        this.$message.warning('IP地址不能为空，请输入');
        return false
      }
      if(!this.updataData.category){
        this.$message.warning('类型不能为空，请输入');
        return false
      }
      this.loadingObj.ipEdit = true;
      merge(this.updataData).then(res => {
        
        let resData = res.data;
        if(resData.success == 1) {
          this.$message.success(resData.respMsg);
          this.updateDialogVisible = false;
          this.getList();
        }else {
          this.$message.error(resData.respMsg)
        }
        this.loadingObj.ipEdit = false;
      })
    },
    handleCurrentChange(val) { // 表格数据行切换方法
      console.log("qqq:",val)
      if(val != null) {
        this.table_row_data = val;
        this.table_id = val.id;
        // this.updataData.id = val.id;
        // this.updataData.address = val.address;
        // this.updataData.category = val.category+'';
        // this.updataData.description = val.description;
      }
      
    },
    handleSizeChange(val) { // 页码切换方法
      this.$store.dispatch('getIpPageSize', val)
      this.getList();
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: #F5F7FA; padding: 4px 0;text-align:center;";
    },
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    }
  },
  
  created(){
    if(this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)){ // 当前关闭tabs中有没有当前打开的页面
      // 更新已关闭的菜单 数组状态
      let newalreadyClose = [] // 定义一个空数组存 过滤左侧点击的数据
      this.$store.getters.alreadyClose.forEach(value => {
        if(value != this.$store.getters.currentView){
          newalreadyClose.push(value)
        }
      })
      this.$store.dispatch("updataTabClose",newalreadyClose) 

      if(this.$store.getters.currentView == this.$route.name) { 
        this.$store.state.sm_ip.allData = []
        this.$store.state.sm_ip.allDataCount = 0;
        this.$store.state.sm_ip.page = 1;
        this.$store.state.sm_ip.size = 10;
        this.$store.state.sm_ip.searchEdition = {
            address: '',
            category: ''
        }
        this.$store.dispatch('getIpTableHeight', 2)
      }
    }else {
      if(this.$store.state.sm_ip.allData.length > 0) {
        this.getList()
      }
    }
  }
};
</script>
<style lang="scss" >
.smIp {
  .dialog-box {
    .dialog-label-item {
      margin-left: 15px;
      width: 88px;
    }
    .el-select .el-input{
      width: 200px!important;
    }
  }
}
</style>

