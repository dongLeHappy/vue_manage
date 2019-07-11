<template>
  <!-- 基础信息管理 -->
  <div class="app-container lc-basic">
    <el-form>
      <el-form-item class="operation-box">
        <el-button type="primary" @click.native.prevent="checkVersion(622)">
          <svg-icon icon-class="chakanxiangqing" />
          查看版本信息
          </el-button>
      </el-form-item>
    </el-form>
    <!-- 多选表格 -->
    <el-table
      :header-cell-style="tableHeaderColor"
      :cell-style="rowcellClass"
      highlight-current-row
      ref="multipleTable"
      :data="allData"
      tooltip-effect="dark"
      style="width: 100%"
      border
      class="tableAuto216"
      @current-change="handleCurrentChange"
      :height="currentPageSize*25 + 34"
      v-loading="loading"
      :default-sort = "{prop: 'code', order: 'ascending'}"
      >
      <el-table-column width="35">
        <template slot-scope="scope">
          <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio"></el-radio>
        </template>
      </el-table-column>
      <el-table-column label="序号" align="center" width="50" show-overflow-tooltip>
         <template slot-scope="scope">
          <span> {{scope.$index + 1}} </span>
        </template>
      </el-table-column>
      <el-table-column label="基础信息版本编号" prop="code" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.code ? scope.row.code : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="版本名称" prop="vername" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.vername ? scope.row.vername : '-' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="disable" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.disable == 0 ? '启用' : '禁用' }} </span>
        </template>
      </el-table-column>
      <el-table-column label="备注" prop="remark" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <span> {{ scope.row.remark ? scope.row.remark : '-' }} </span>
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
      
    </el-table>
    <!-- 分页 -->
    <!-- <div class="terraceUser_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        :page-size="pageSize"
        :total="allData_total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="getList"
        :height="currentPageSize*25 + 50"
      >
      </el-pagination>
    </div> -->
    <!-- 查看版本信息 -->
    <el-dialog v-if="checkVersionDialog" :visible.sync="checkVersionDialog" title="查看版本信息" width="845px" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box visonDialog">
        <!-- 版本配置详情（按彩种分） -->
        <div class="lottery-config-box">
          <div class="lottery-info-title">
            <ul>
              <li>版本名称 : {{ table_row_data ? table_row_data.vername : '' }}</li>
              <li>版本编号 : {{ table_row_data ? table_row_data.code : '' }}</li>
              <li>状态 : {{ table_row_data ? (table_row_data.disable ? '禁用' : '启用') : '' }}</li>
            </ul>
          </div>
          <checkVison></checkVison>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import checkVison from './editVison' // 引入对应子组件
import { findByVersionId,findByPlayDetailId } from '@/api/lotteryCore/lc_info/lc_basic'
import { permissionName } from "@/utils/validate";
export default {
  name: "lc_basic",
  data() {
    return {
      loading:false, // Loading 加载
      table_row_data: null, // 当前表格选中行数据
      table_id: null, // 当前选中行 id
      checkVersionDialog: false, // 查看版本信息-弹窗
      display: false,
      boseShow: false, // 控制子组件显示隐藏(切换玩儿法选项时改变该属性的值)
      wuxingShow: false,
      yuxiaxieShow: false,
      zhongfabaiShow: false,
      fangweiShow: false,
      shengxiaoShow: false,
      activeIndex: 0, // 是否激活当前点击彩种选项
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
    };
  },
  components: {
    checkVison
  },
  computed: {
    ...mapState({
      allData: state => state.lc_basic.allData,
      allData_total: state => state.lc_basic.allDataCount,
      currentPageSize: state => state.lc_basic.currentPageSize
    }),
    // pageSize: {
    //   get(){
    //     return this.$store.state.lc_basic.pageSize;
    //   },
    //   set(item){
    //     return  item;
    //   }
    // },
    // page: {
    //   get(){
    //     return this.$store.state.lc_basic.page;
    //   },
    //   set(item){
    //     return  item;
    //   }
    // }
  },
  methods: {
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    getList(val) { // 查询表格方法
      this.loading = true; // 请求接口时loading启用
      if(!val) {
        val = 1;
      }

      this.$store.dispatch("getLcBasicPage",parseInt(val));
      // let data = { 
      //   page:this.page - 1,
      //   size:this.pageSize
      // };

      this.$store.dispatch("getLcBasicInfo", {}).then(res => {
        let currentPageSize = 2;
        if(res.content.length > 0) {
          currentPageSize = res.content.length;
        }else {
          currentPageSize = 2;
        }
        this.$store.dispatch('getLcBasicTableHeight', currentPageSize)
        this.$refs.multipleTable.bodyWrapper.scrollTop = 0; // 表格滚动条回滚到第一行 
        this.loading = false;
      });
    },
    checkVersion(h) { // 查看版本信息
      if(!this.table_id) {
        this.$message.warning('请选择一条数据!');
      }else {
        this.dialogHeight = h;
        this.judgeScree(this.dialogHeight);
        let shengxiaoId = '';
        findByVersionId({playVersionId: this.table_id}).then(res => {
          let resData = res.data;
          if(resData.success == 1) {
            this.$store.commit('SET_WANFA_TYPE', resData.content); // 设置玩法列表
            resData.content.map(item => {
              if(item.playname == '生肖（香港彩）') {
                shengxiaoId = parseInt(item.id) 
              }
            })
            findByPlayDetailId({playDetailId: shengxiaoId}).then(res => { // 每次显示弹窗默认加载“生肖对应数据”
            let resData = res.data
            if(resData.success == 1) {
              this.$store.commit('SET_WANFA_DATA', resData.content)
            }else {
              this.$message.error(resData.respMsg)
            }
          })
          this.checkVersionDialog = true;
          }else {
            this.$message.error(resData.respMsg)
          }
        })
      }
    },
    // handleSizeChange(val) { // 页码切换方法
    //   this.$store.dispatch('getLcBasicPageSize', val);
    //   this.getList();
    // },
    handleCurrentChange(val) { // 切换数据行方法
      if(val != null) {
        this.table_row_data  = val;
        this.table_id = val.id;
      }
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color:rgb(247, 251, 254); padding: 4px 0;text-align:center;";
    },
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    }
  },
  created() {
    if(this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)){
      if(this.$store.getters.currentView == this.$route.name) {
        let newalreadyClose = [] 
        this.$store.getters.alreadyClose.forEach(value => {
          if(value != this.$store.getters.currentView){
            newalreadyClose.push(value)
          }
        })
        this.$store.dispatch("updataTabClose",newalreadyClose)

        this.$store.state.lc_basic.allData = []
        this.$store.state.lc_basic.allData_total = 0;
        // this.$store.state.lc_basic.page = 1;
        // this.$store.state.lc_basic.pageSize = 10;
        this.$store.dispatch('getLcBasicTableHeight', 2)
      }
    }else {
      if(this.$store.state.lc_basic.allData.length > 0) {
        this.getList()
      }
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.getList();
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
  }
};
</script>
<style lang="scss">

.lc-basic {
  .el-form{
    margin-top:10px; 
  }
  .showDetail { // 控制子组件显示隐藏
    display: block;
  }
  .hideDetail {
    display: none;
  }
  .lottery-config-box {
    .lottery-info-title ul,
     .lottery-items-box ul {
        display: flex;
        align-items: center;
        li{
          list-style-type: none;
        }
     }
    .lottery-item-active { // 彩种选项选中应用样式
      background-color: #e0e0e0;
      color: #000;
    }
    .lottery-info-title {
      padding: 10px 0 20px 0;
      li {
        margin-right: 20px;
        span{
          width: 70px;
        }
      }
    }
    .lottery-items-box {  // 彩种选项容器
      padding-bottom: 10px;
      color: #797979;
      white-space: nowrap;
      overflow-x: auto;

      &::-webkit-scrollbar { // 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸
        // width: 6px!important;
        height: 8px!important;
        background-color: #000;
        border-radius: 8px;
      }
      &::-webkit-scrollbar-thumb { // 定义滑块 内阴影+圆角
        background-color: #ccc;
        border-radius: 5px;
      }
      &::-webkit-scrollbar-track { // 定义滚动条轨道 内阴影+圆角
        -webkit-box-shadow: inset 0 0 2px #ccc;
        background-color: #fff;
      }

      .lottery-item {
        &:last-child {
          margin-right: 0;
        }
        cursor:pointer;
        border: 1px solid #d2d2d2;
        margin-right: 15px;
        padding: 0 15px;
        line-height: 29px;
        height: 29px;
        box-sizing: border-box;
        min-width: 120px;
        display: inline-block;
      }
    }
    .lottery-item-detail-box {
      border: 1px solid #d2d2d2;
      box-sizing: border-box;
      min-height: 300px;
      padding: 8px 8px 50px 8px;
      .showDetail {


      }

    }
  }
}
.add-newVison{
  p{
    // float: left;
  }
}
</style>


