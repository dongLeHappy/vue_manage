<template>
  <!-- 游戏玩法下注值管理 -->
  <div class="app-container PlayManagement">
    <!-- <el-form>
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" icon="el-icon-view" @click="lookData">查看</el-button>
      </el-form-item>
    </el-form> -->
    <div class="role_table">
      <el-table
        :header-cell-style="tableHeaderColor"
        :cell-style="rowcellClass"
        :key="1"
        :data="bottomPourAllData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%;"
        border
        class="tableAuto2166"
        height="726"
        v-loading="childPageTableLoading"
      >
        <el-table-column width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column type="index" label="序号" align="center" width="50" show-overflow-tooltip></el-table-column>
        <el-table-column label="一级玩法名称" property="firstPlayName" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column label="二级玩法名称" property="betOnValue" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column label="二级玩法编号" property="code" align="center" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column label="可选下注项" property="betItem" align="center" width="160" show-overflow-tooltip></el-table-column>
        <el-table-column label="下注示例" property="betEg" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column label="下注值数量" property="betNum" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column label="验证标准" property="ruleType" align="center" width="120" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
    <!--启用与禁用-->
    <el-dialog
      :visible.sync="lookDialog"
      title="查看下注规则"
      width="400px"
      class="look_dialog"
      top="25vh"
      :close-on-click-modal="false"
      >
      <div class="dialog-box">
        <p>
          <span class="dialog-label-item">玩法编号：</span>
          <el-input :value="lookDetails.playId" disabled="disabled"/>
        </p>
        <p>
          <span class="dialog-label-item">二级玩法名称：</span>
          <el-input :value="lookDetails.playName" disabled="disabled"/>
        </p>
        <p style="margin-top: 7PX;">
          <span class="dialog-label-item">可选下注值：</span>
          <el-input
            :value="lookDetails.playData"
            type="textarea"
            disabled="disabled"
            :autosize="{ minRows:4}"
          />
        </p>
        <p style="margin-top: 15PX;">
          <span class="dialog-label-item">下注值规则：</span>
          <el-input
            :value="lookDetails.playrule"
            type="textarea"
            disabled="disabled"
            :autosize="{ minRows: 4}"
          />
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="lookDialog = false">确 定</el-button>
        <el-button @click="lookDialog = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import {findById } from '@/api/lotteryCore/lc_info/lc_detail'
export default {
  name: "lc_BottomPourManagement_Table",
  computed: {
    ...mapState({
      bottomPourAllData: state => state.lc_detail.bottomPourAllData
    })
  },
  props:[
    'childPageTableLoading'
  ],
  data() {
    return {
      loading: false, // Loading 加载
      table_id: "", // 当前行的ID
      table_row_data: "", // 当前行的数据
      lookDialog: false, // 查看弹框
      lookDetails: {
        playName: "",
        playId: "",
        playData: "",
        playrule: ""
      }
    };
  },
  methods: {
    tableHeaderColor() {
      // 修改row header的背景颜色与内边距
      return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
    },
    rowcellClass() {
      // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
    handleCurrentChange(val, index) {
     
      // 选中一行数据的方法
      if (val) {
        this.table_row_data = val;
        this.table_id = val.id;
      }
    },
    // lookData() {
    //   // 查看按钮事件
    //   if (!this.table_id) {
    //     this.$message.warning("请选择一条数据");
    //     return;
    //   }
    //   findById({id:this.table_row_data.id}).then(resdata => { // 人工封盘【确认按钮】    
    //       let res = resdata.data;
    //       if(res.success == 1) {
    //         this.lookDetails = {
    //           playName: res.content.code, // 玩法编号
    //           playId: res.content.betEg, // 二级玩法名称
    //           playData: res.content.betItem, // 可选下注值
    //           playrule: res.content.description // 下注值规则
    //         };
    //         this.lookDialog = true;
    //       }else {
    //         this.$message.error(res.respMsg)
    //       }
    //   }) 
     
    // }
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 600);
  }
};
</script>
<style>
.PlayManagement {
  border: 1px solid #dcdfe6;
  height: calc(100vh - 190px);
  padding-top: 1vh;
}
.look_dialog p {
  line-height: 45px !important;
}

.look_dialog .is-disabled {
  width: 200px !important;
}
</style>