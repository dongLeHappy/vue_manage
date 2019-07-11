<template>
<div class="app-container">
  <el-table
    :data="tableData"
    :row-style="tableRowStyle"
    :cell-style="tableCell"
    :cell-class-name="cellSet"
    :header-cell-style="tableHeaderColor"
    class="tableAuto170"
    >
    <el-table-column label="姓名" property="name" width="120">
    </el-table-column>
    <el-table-column label="年龄" property="age" width="120">
    </el-table-column>
    <el-table-column label="性别" property="sex" width="120">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'ComplexTable',
  data() {
    return {
      tableData: [
        {
          name: 'Cindy',
          age: 20,
          sex: '女'
        },
        {
          name: 'Mila',
          age: 22,
          sex: '女'
        },
        {
          name: 'Bob',
          age: 23,
          sex: '男'
        }
      ]
    }
  },
  created() {},
  methods: {
    cellSet(rowIndex, columnIndex, row, column) {
    },
    tableCell(rowIndex, columnIndex, row, column) {
      return 'background-color: #000; padding:0px'
    },
    tableRowStyle({ row, rowIndex }) { // 修改table tr行的背景色
      if(rowIndex == 1) {
        return 'background-color: #f00'
      }else {
        return 'background-color: pink'
      }
    },
    tableHeaderColor({ row, column, rowIndex, columnIndex }) { // 修改table header的背景色
      if(rowIndex === 0) {
        return 'background-color: lightblue;color: #fff;font-weight: 500;'
      }
    }
  }
}
</script>
