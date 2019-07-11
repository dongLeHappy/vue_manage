<template>
  <!--新版自定义赔率设置-->
  <div class="app-container">
    <!-- 操作栏 -->
    <el-form>
      <ul class="heard-search">
        <li>
          <span class="rem_tit">当前使用的赔率版本名称：</span>
          <span class="rem_con">
            <el-input v-model="searchForm.currentVersion" placeholder="赔率版本名称" maxlength="15"></el-input>
          </span>
        </li>
        <li>
          <span class="rem_tit">是否开启：</span>
          <span class="rem_con">
            <el-select v-model="searchForm.isOpen" value-key="name" placeholder="全部">
              <el-option
                label="全部"
                value=""
              ></el-option>
              <el-option
                v-for="item in statusArr"
                :key="item.id"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select>
          </span>
        </li>
      </ul>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" @click="search">
          <svg-icon icon-class="chaxun" /> 
          查询</el-button>
        <el-button type="primary" size="mini" @click="resetData">
          <svg-icon icon-class="zhongzhi" />
          重置</el-button>
        <el-button type="primary" size="mini" @click="startOrStop(314)">
          <svg-icon icon-class="qiyong1" />
          启用</el-button>
        <el-button type="primary" size="mini" @click="detailOdd(820)">
          <svg-icon icon-class="chakanxiangqing" />
          查看赔率详情</el-button>
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
        :height="currentPageSize*25 +34"
        ref="tableScroll"
        v-loading="loading"
      >
        <el-table-column width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column type="index" label="序号" width="50" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.$index+(page - 1) * pageSize + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column label="当前使用的赔率版本名称" property="name" align="center" show-overflow-tooltip ></el-table-column>
        <el-table-column label="版本说明" property="description" align="center" show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.description ? scope.row.description : '-' }}</template>
        </el-table-column>
        <el-table-column sortable label="是否开启" property="openable" width="80" align="center" show-overflow-tooltip >
          <template slot-scope="scope">{{ scope.row.openable != null ? (scope.row.openable ? '未开启': '已开启') : '-' }}</template>
        </el-table-column>
        <el-table-column label="修改人" property="lastModifiedBy" align="center" show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.lastModifiedBy ? scope.row.lastModifiedBy : '-' }}</template>
        </el-table-column>
        <el-table-column label="修改时间" property="lastModifiedDate" align="center" width="150" show-overflow-tooltip >
          <template slot-scope="scope">{{ scope.row.lastModifiedDate ? scope.row.lastModifiedDate : '-' }}</template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页    数据要是大于1000条时，把分页释放掉-->
    <!-- <div class="role_pagination">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :current-page.sync="page"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :page-size="pageSize"
        @size-change="handleSizeChange"
        :total="allDataCount"
        @current-change="getList"
      >
      </el-pagination>
    </div> -->
    <!--启用-->
    <el-dialog :visible.sync="startOrStopDialog" title="启用" width="350px" class="role_dialog" :top="dialogMt" :close-on-click-modal="false">
      <div class="dialog-box">
        <p style="text-align: center;">是否确定{{title_Name}}当前使用的赔率版本{{chooseCurrentVersion}}</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="okStartOrStop">确 定</el-button>
        <el-button @click="startOrStopDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 查看赔率详情 -->
    <el-dialog :visible.sync="detailOddDialog" title="查看赔率详情" width="1300px"  class="role_dialog" :top="dialogMt" :close-on-click-modal="false">
        <div class="version-state-box">
          <div>
            <span>当前赔率版本：</span>
            <el-select v-model="dialogCurrentVersion" @change="handleChange">
              <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <span class="version-state">{{ versionState }}</span>
        </div>

        <OddDetail v-if="detailOddDialog" ></OddDetail>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OddDetail from "../gameManage/configManage/ag_userdefine_odd"
import { disable,findAgentList,tree,findByLotteryId,findPlayRuleList } from "@/api/agentPlatForm/systemManage/ag_sm_userdefine_odd"
import { findByCode } from '@/api/select'
export default {
  name: "ag_sm_userdefine_odd",
  components: {
      OddDetail
  },
  computed: {
    ...mapState({
        allData: state => state.ag_sm_userdefine_odd.allData,
        allDataCount: state => state.ag_sm_userdefine_odd.allDataCount,
        currentPageSize: state => state.ag_sm_userdefine_odd.currentPageSize,
    }),
    pageSize: {
      get() {
        return this.$store.state.ag_sm_userdefine_odd.pageSize;
      },
      set(item) {
        return item;
      }
    },
    page: {
      get() {
        return this.$store.state.ag_sm_userdefine_odd.page;
      },
      set(item) {
        return item;
      }
    },
    searchForm:{
      get() {
        return this.$store.state.ag_sm_userdefine_odd.searchForm;
      },
      set(item) {
        return item;
      }
    }
  },
  data() {
    return {
      statusArr: [], // 开启状态 下拉列表
      options:[], // 版本下拉列表
      table_row_data: null,
      table_id: null,
      chooseCurrentVersion: null, // 当前选中的版本名称
      startOrStopDialog: false,
      detailOddDialog: false,
      // loadingObj_LoadingTable:false,
      title_Name: null, // 启用 - 禁用
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
      versionState: '', // 弹框选中版本说明
      dialogCurrentVersion: null, // 弹框 当前选中版本
      isShowCurrentUse: false, // 是否显示当前使用中
      loading: false, // Loading 加载
      confirmLog: 0, // 是否重新加载查看赔率组件
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight); // 判断屏幕大小进行操作
    });
    window.onresize = () => {
      this.judgeScree(this.dialogHeight);
    };
  },
  methods: {
    judgeScree(val) {
      // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + "px";
      if(a < 0){
        this.dialogMt = 0 + "px";
      }
    },
    search() {
      this.getList();
    },
    handleChange(val) {
      var obj = {};
      obj = this.options.find(item =>{
        return item.id === val 
      });
      this.versionState = obj.name;
      this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTree = true; // 树loading
      this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTable = true;// 赔率页面loading
      this.$store.state.ag_sm_userdefine_odd.loadingObj.Loadingplay = true;// 玩法loading
      this.portData(val);
    },
    startOrStop(h) { // 开启启用弹窗
        if(!this.table_id) {
            this.$message.warning('请选中一条数据');
            return false;
        }
        if(this.table_row_data.openable == 0) {
          this.$message.warning('该数据已开启，不可操作')
          return false;
        }
        this.dialogHeight = h;
        this.judgeScree(h)
        this.startOrStopDialog = true;
    },
    okStartOrStop() { // 确定启用
      let data = {
        id: this.table_id,
        disable: !this.table_row_data.openable
      }
      disable(data).then(res => {
        let resData = res.data
        if(resData.success == 1) {
          this.$message.success(resData.respMsg)
          this.startOrStopDialog = false;
          this.getList()
        }else {
          this.$message.error(resData.respData)
        }
      })
    },
    resetData() {
      this.$store.state.ag_sm_userdefine_odd.searchForm = {
        currentVersion: null,
        isOpen: null
      }
        
    },
    portData(val){
      tree({id: val}).then(res => { // 初始化彩种树
        let resData = res.data
        if(resData.success == 1) {
          this.$store.commit('SET_TREE_DATA',resData.content)         
        }else {
          this.$message.error(resData.respMsg)
        } 
        this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTree = false;
      })

      this.$store.commit('SET_WANFA_LIST',[])  // 每次加载查看赔率弹窗，置空当前玩法列表
      findByLotteryId({lotteryId: 8}).then(res => { // 加载六合彩下对应的玩法列表      
          let resData = res.data
          if(resData.success == 1) {
              this.$store.commit('SET_WANFA_LIST',resData.content)
               // 获取玩法后，请求第一个玩法的赔率数据
              this.$store.state.ag_sm_userdefine_odd.currentWanfa =resData.content[0].playRuleId; //选中的玩法ID
              this.$store.state.ag_sm_userdefine_odd.setPlayingMethod =resData.content[0].betOnValue;  // 选中的玩法名称
              
              findPlayRuleList({lotteryOddsVerId: 8,playRuleId: resData.content[0].playRuleId}).then(res => { // 加载六合彩下 特码 玩法对应的赔率
                let resData = res.data;
                if (resData.success == 1) {
                     this.$store.state.lc_detail.inputTemaData = resData.content; // 获取玩法列表中的赔率    
                  //  this.$store.commit('SET_ODD_DETAIL_LIST',resData.content)
                    
                }else {
                    this.$message.error(resData.respMsg);
                }
                  this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTable = false;
              })
          }else {
              this.$message.error(resData.respMsg)
          }
          this.$store.state.ag_sm_userdefine_odd.loadingObj.Loadingplay = false;// 玩法loading
      }) 

    },
    detailOdd(h) { // 查看赔率详情
      if(!this.table_id) {
        this.$message.warning('请选中一条数据');
        return false;
      }
      this.dialogHeight = h;
      this.judgeScree(h)
      this.detailOddDialog = true;
      this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTree = true; // 树loading
      this.$store.state.ag_sm_userdefine_odd.loadingObj.LoadingTable = true;// 赔率页面loading
      this.$store.state.ag_sm_userdefine_odd.loadingObj.Loadingplay = true;// 玩法loading
      findAgentList().then(res => { // 初始化版本下拉列表
        let resData = res.data
        if(resData.success == 1) {
          this.options = resData.content;
          this.options.map(item => {
            if(item.openable == 0) {
              item.name+='（当前使用中）'
            }
          })
        }else {
          this.$message.error(resData.respMsg)
        }
      })
      this.portData(this.table_id);
        
    },
    getList(val) {
      if(!val) {
        val = 1
      }    
      this.loading = true;
      this.table_id = null;
      this.chooseCurrentVersion = null;
      this.$store.dispatch("getAgUserDefineOddPage",val);
      let arr = this.$store.state.ag_sm_userdefine_odd.searchForm;
      let data = {
        name: arr.currentVersion || null, 
        openable: arr.isOpen , 
        page: this.page-1,
        size: this.pageSize
      };
     
      this.$store.dispatch("getAgUserDefineOddData", data).then(res => {
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
        this.loading = false;
        this.$store.dispatch("getAgUserDefineOddTableHeight", currentPageSize);
        this.$refs.tableScroll.bodyWrapper.scrollTop = 0; 
      });
    },
    handleSizeChange(val) {
      this.$store.dispatch("getAgUserDefineOddPageSize", val);
      this.getList();
    },
    handleCurrentChange(val) {
      if(val) {
        this.table_id = val.id;
        this.table_row_data = val;
        this.dialogCurrentVersion = val.id;
        this.versionState = val.name;
      }
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
    },
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
    // {id: "8",name: "香港六合彩",parentId: "1",verId: "8"}
    
  },
  created() { // 初始化数据
    if (
      this.$store.getters.alreadyClose.includes(this.$store.getters.currentView)
    ) {
      if (this.$store.getters.currentView == this.$route.name) {
        this.$store.state.ag_sm_userdefine_odd.allData = [];
        this.$store.state.ag_sm_userdefine_odd.allData_count = 0;
        this.$store.state.ag_sm_userdefine_odd.pageSize = 10;
        this.$store.state.ag_sm_userdefine_odd.page = 1;
        this.$store.state.ag_sm_userdefine_odd.searchForm = {
          currentVersion: null,
          isOpen: null
        }
        this.$store.dispatch("getAgUserDefineOddTableHeight", 2);
      }
    } else {
      if (this.$store.state.ag_sm_userdefine_odd.allData.length > 0) {
        this.getList();
      }
    }

    findByCode({code: 'ODDSLARGEVER_OPENABLE'}).then(res => {
      let resData = res.data
      if(resData.success == 1) { 
        resData.content['ODDSLARGEVER_OPENABLE'].map(item => {
          this.statusArr.push({name: item.name == '是'? '已开启' : '未开启', value: item.value})
        })
      }else {
        this.$message.error(resData.respMsg)
      }
    })
  }
};
</script>
<style lang="scss" >
.userdefine-odd-container .lottery-type-tree {
  max-height: calc(100vh - 130px);
}
.version-state-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 14px;
  padding-right: 15px;
  .el-select {
    .el-input {
      width: 120px!important;
    }
  }
  .version-state {
    background: #ebeef5;
    border: 1px solid gainsboro;
    height: 26px;
    line-height: 26px;
    width:1019px;
    padding-left: 10px;
  }
}

</style>
