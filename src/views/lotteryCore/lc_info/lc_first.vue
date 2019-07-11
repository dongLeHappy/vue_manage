<template>
  <!-- 一级彩种管理 -->
  <div class="app-container">
    <el-form >
      <ul class="heard-search">
        <li>
          <span class="rem_tit">一级彩种名称：</span>
          <span class="rem_con">
            <el-select v-model="searchEdition.id" placeholder="请选择" :disabled="disableControl">
              <el-option v-for="item in firstSelect" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </span>
        </li>
        <li>
          <span class="rem_tit">状态：</span>
          <span class="rem_con">
            <el-select v-model="searchEdition.disable" placeholder="启用" :disabled="disableControl">
              <el-option
                v-for="item in disableArr"
                :key="item.id"
                :label="item.name"
                :value="item.value"
              ></el-option>
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
        <el-button type="primary" size="mini" @click.native.prevent="configOrder" :disabled="disableControl">
          <svg-icon icon-class="dashujukeshihuaico-" />
          配置排序
          </el-button>
        <el-button type="primary" size="mini" @click.native.prevent="startOrStop('start',148)" :disabled="disableControl">
          <svg-icon icon-class="qiyong1" />
          启用
          </el-button>
        <el-button type="primary" size="mini" @click.native.prevent="startOrStop('disabled',148)" :disabled="disableControl">
          <svg-icon icon-class="jinyong1" />
          禁用
          </el-button>
      </el-form-item>
    </el-form>
    <!-- 多选表格 -->
    <el-table
      background
      ref="multipleTable"
      :data="allData"
      tooltip-effect="dark"
      highlight-current-row
      @current-change="handleCurrentChange"
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
      <el-table-column sortable label="排序顺序" prop="orderSeq"  width="100" show-overflow-tooltip align="center">
        <template slot-scope="scope">
          <span> {{ scope.row.orderSeq ? scope.row.orderSeq : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="一级彩种名称" prop="name" show-overflow-tooltip align="center">
        <template slot-scope="scope">
          <span> {{ scope.row.name ? scope.row.name : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="一级彩种编号" prop="code" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.code ? scope.row.code : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column sortable label="状态" prop="disable" align="center" width="80" show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.disable != null ? (scope.row.disable ? '禁用': '启用') : '-' }}
        </template>
      </el-table-column>
      <el-table-column label="创建人" prop="createdBy" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.createdBy ? scope.row.createdBy : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column sortable label="创建时间" prop="createdDate" align="center" width="150" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.createdDate ? scope.row.createdDate : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="修改人" prop="lastModifiedBy" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.lastModifiedBy ? scope.row.lastModifiedBy : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column sortable label="修改时间" prop="lastModifiedDate" align="center" width="150" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.lastModifiedDate ? scope.row.lastModifiedDate : '-' }} </span>
        </template>
      </el-table-column>
    </el-table>
  <!-- 分页 数据要是大于1000条时，把分页释放掉- -->
    <!-- <div class="terraceUser_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="size"
        :total="allData_total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getList"
      ></el-pagination>
    </div> -->
    <!--启用/禁用-->
    <el-dialog :visible.sync="startOrStopDialog" :title="title_Name" width="350px" top="35vh">
      <p style="text-align:center;">
        是否{{title_Name}}一级彩种
        <span style="color:red">"{{table_row_data ? table_row_data.name : ''}}"</span>？
      </p>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click.native.prevent="okStartOrStop(title_Name)">确定</el-button>
        <el-button @click.native.prevent="startOrStopDialog = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 配置排序 -->
    <el-dialog :visible.sync="peizhiDialog" title="配置排序" width="350px" top="35vh">
      <p>
          <span class="dialog-label-item">
            一级彩种名称：
          </span>
          <el-input style="width: 160px;" :disabled="true" v-model="configData.name"/>
        </p>
        <p>
          <span class="dialog-label-item">
            <span class="required">*</span>
            排序</span>
          <el-input style="width: 160px;" v-model="configData.orderSeq"/>
        </p>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click.native.prevent="okConfigOrder" :loading="firstConfigSort">确定</el-button>
        <el-button @click.native.prevent="peizhiDialog = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { valida0to100Num } from "@/utils/validate";
import { lotteryDropdownList,findByCode } from '@/api/select';
import { mergeForOrderSeq,disable } from "@/api/lotteryCore/lc_info/lc_first";
export default {
  name: "lc_first",
  data() {
    return {
      firstConfigSort:false,
      disableControl: false,
      peizhiDialog: false, // 配置排序弹窗
      loading:false, // Loading 加载
      table_id: null,
      table_row_data: null,
      startOrStopDialog: false,
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
      title_Name: '', // 弹窗类型
      button: { // 按钮权限
        search: true,
        reset: true,
        enable: true,
        disable: true
      },
      formInline: {
        user: "",
        region: ""
      },
      configData: {
        name: '',
        orderSeq: ''
      },
      okOrStop:{}
    };
  },
  computed: {
    ...mapState({
      allData: state => state.lc_first.allData,
      allData_total: state => state.lc_first.allData_total,
      currentPageSize: state => state.lc_first.currentPageSize,
      firstSelect: state => state.lc_first.firstSelect,
      disableArr: state => state.lc_first.disableArr
    }),
    size: {
      get(){
        return this.$store.state.lc_first.size;
      },
      set(item){
        return  item;
      }
    },
    page: {
      get(){
        return this.$store.state.lc_first.page;
      },
      set(item){
        return  item;
      }
    },
    searchEdition: {
      get(){
        return this.$store.state.lc_first.searchEdition;
      },
      set(item){
        return  item;
      }
    }
  },
  methods: {
    search() { // 查询
      this.getList();
    },
    reset() { // 重置
     this.$store.state.lc_first.searchEdition={
        id: "", // 一级彩种id
        disable: "" // 状态
     }
    },
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    getList(val) { // 初始化表格数据
      if(!val) {
        val = 1;
      }
      this.disableControl = true;
      this.loading = true;
      this.table_id = null;
      this.$store.dispatch('getLcFirstPage',parseInt(val))

      let data = {
        page: this.page - 1,
        size: this.size,
        id: this.$store.state.lc_first.searchEdition.id || null,  // 一级彩种id
        disable: this.$store.state.lc_first.searchEdition.disable || null  // 状态
      }

      this.$store.dispatch("getLcFirstInfo",data).then(res => {
        let currentPageSize = 2;
        if(res.content.length > 0) {
          currentPageSize = res.content.length;
        }else {
          currentPageSize = 2;
        }
        this.$store.dispatch('getLcFirstTableHeight', currentPageSize)
        this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行 
        this.loading = false; // 接口返回数据时，loading禁用
        this.disableControl = false;
      });
    },
    configOrder() { // 配置排序
      if(!this.table_id) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      this.configData.orderSeq = this.table_row_data.orderSeq;
      this.peizhiDialog = true
    },
    okConfigOrder() {
      if(!valida0to100Num(this.configData.orderSeq)) {
        this.$message.warning('输入范围1-100的正整数')
        return false;
      }
      let data = {
        id: this.table_id,
        level: 0,
        orderSeq: this.configData.orderSeq
      }
      this.firstConfigSort = true;
      mergeForOrderSeq(data).then(res => {
        let resData = res.data
        if(resData.success == 1) {
          this.$message.success('系统操作成功') // 后端缺少 respMsg返回字段
          this.peizhiDialog = false
          this.getList()
        }else {
          this.$message.error(resData.respMsg)
        }
        this.firstConfigSort = false;
      })
    },
    startOrStop(type,h) { // 打开启用-禁用弹窗
      if (!this.table_id) {
        this.$message.warning('请选择一条数据');
        return false;
      }
      if (type == "start") {
        this.title_Name = "启用";
      } else if (type == "disabled") {
        this.title_Name = "禁用";
      }
      if(type == "start" && this.table_row_data.disable == false){
        this.$message.warning("该数据已被启用，不可操作");
        return false;
      }else if(type == "disabled" && this.table_row_data.disable == true){
        this.$message.warning("该数据已被禁用，不可操作");
        return false;
      }
      this.dialogHeight = h;
      this.judgeScree(this.dialogHeight);
      this.startOrStopDialog = true;
    },
    okStartOrStop(val){  //  确认启用/禁用
      let data = {
        id: this.table_id,
        disable: !this.table_row_data.disable
      }
      disable(data).then(res => {
        let resData = res.data
        if(resData.success == 1) {
          this.$message.success('操作成功') // 后台缺少 respMsg
          this.startOrStopDialog = false
          this.getList()
        }else {
          this.$message.error(resData.respMsg)
        }
      })
      
    },
    handleSizeChange(val) { // 页码切换
      this.$store.dispatch('getLcFirstPageSize', val);
      this.getList();
    },
    handleCurrentChange(val) { // 表格数据行切换
      if(val != null) {
        this.table_id = val.id;
        this.table_row_data = val;
        this.configData.name = this.table_row_data.name;
        this.configData.orderSeq = val.orderSeq;
      }
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

        this.$store.state.lc_first.allData = []
        this.$store.state.lc_first.allData_total = 0;
        this.$store.state.lc_first.page = 1;
        this.$store.state.lc_first.size = 10;
        this.$store.state.lc_first.searchEdition={id: "",disable: ""} // 状态
        this.$store.dispatch('getLcFirstTableHeight', 2)
      }
    }else {
      if(this.$store.state.lc_first.allData.length > 0) {
        this.getList()
      }
    }
  },
  mounted(){
    this.$nextTick(() => {
      // this.getList();
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
    lotteryDropdownList({parentId: 0}).then(res => { // 初始化一级彩种下拉列表
    this.$store.state.lc_first.firstSelect = [{ value: "",name: "请选择"}];
      let resData = res.data;
      if(resData.success == 1) {
         let by_firstSelect = resData.content;
           by_firstSelect.forEach(element => {
              this.$store.state.lc_first.firstSelect.push(element);
            });
      }else {
        this.$message.error(resData.respMsg)
      }
    })

    findByCode({code: 'DISABLE'}).then(res => { // 初始化状态下拉列表
      this.$store.state.lc_first.disableArr=[{ value: "",name: "请选择"}];
      let resData = res.data;
        if(resData.success == 1) {
          let by_disableArr = resData.content['DISABLE']
          by_disableArr.forEach(element => {
              this.$store.state.lc_first.disableArr.push(element);
            });
        }else {
          this.$message.error(resData.respMsg)
        }
      })
  }
};
</script>


