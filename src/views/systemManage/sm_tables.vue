<template>
  <el-table
    :header-cell-style="tableHeaderColor"
    :cell-style="rowcellClass1"
    :key="0"
    :data="allData"
    highlight-current-row
    style="width: 100%" 
    border
    height="540"
    class = "tableAuto170"
  >
    <el-table-column type="index" label="序号" align="center" show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="权限编码" property="permisssionId" align="center"  show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="权限名称" property="permission_name" align="center"  show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="父级名称" property="parent_permission_name" align="center" show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="页面地址" property="pageUrl" align="center"  show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="权限所属对象" property="permissionBelong" align="center">
    </el-table-column>
  </el-table>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      allData:state => state.sm_role.table_Assigning_Data,
    }),
  },
  name: 'sm_trees',
  data() {
    return {
      table_table_rowData: null, // 一行的数据
      table_table_rowDataId: null, // 单选选中的按钮id
      isIndeterminate:true,
      checkAll:false
    }
  },
  methods: {
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
    },
    rowcellClass1() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    }
  }
}
</script>
<style scoped="scoped">
.el-table__empty-text{
  position: absolute;
  left:50%;
}
.app-container .el-table{
  margin-top: 0px;
}
.per_but{
  overflow: hidden;
  margin: 5px 0px 0px;
  float: left
}
.per_but:last-child{
  margin-bottom: 5px
}
.curbut{
  margin-right:8px;
  background:#409eff;
  line-height: 20px;
  border-radius:3px;
  text-align: center;
  color:#fff;
  float:left;
  padding:1px 8px;
  cursor: pointer;
}
.disbut{
  margin-right:8px;
  background:#a4a4a4;
  line-height: 20px;
  border-radius:3px;
  text-align: center;
  color:#eaeaea;
  float:left;
  padding:1px 8px;
  cursor: pointer;
}
</style>