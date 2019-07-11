<template>
  <el-table
    :header-cell-style="tableHeaderColor"
    :cell-style="rowcellClass1"
    :key="allData.id"
    :data="allData"
    highlight-current-row
    @current-change="ChangesRowData"
    style="width: 100%" height="540"
    border
    ref="multipleTable"
    class = "tableAuto170"
  >
    <el-table-column type="index" align="center" label="序号" width="50" show-overflow-tooltip>  
    </el-table-column>    
    <el-table-column label="权限编码" property="permisssionId" align="center"  :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column label="权限名称" property="permission_name" align="center"  :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column label="父级名称" property="parent_permission_name" align="center"  :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column label="页面地址" property="pageUrl" align="center" :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column label="权限所属对象" property="permissionBelong" align="center" :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column label="页面权限" property="permissionStatus" width="70" align="center"  ref="checkAll">
      <template slot-scope="scope">
        {{ scope.row.permissionStatus == 0 ?  '无': '有' }}
      </template>
    </el-table-column>
    <!-- <el-table-column label="功能权限" property="dict" align="left" width="750" >
    <template slot-scope="scope">
      <span v-if="scope.row.permissionStatus == 0">
        <span class="nocursor" v-if="scope.row.dict.length ==0 ? false : true">
          <input class="nocursor" disabled="disabled" type="checkbox" :checked="dictIdsAll[scope.$index]" @change="handleCheckAllChange(scope.row,scope.$index)">
          全选
        </span>
        <el-checkbox-group v-model="dictIds" >
          <el-checkbox 
            disabled
            v-for="dictitme in scope.row.dict"
            :key="dictitme.id" 
            :label="dictitme.id"
            :checked="scope.row.checked"
            @change="handleCheckChange(dictitme,scope.row,scope.$index)"
          >
            {{dictitme.name}}
          </el-checkbox>
        </el-checkbox-group>
      </span>

      <span v-if="scope.row.permissionStatus == 1"  ref="mybox1">
        <span :class="dictIdsAll[scope.$index] == true ?'el-checkbox__input is-checked':'el-checkbox__input'" v-if="scope.row.dict.length ==0 ?false : true"><input type="checkbox" class="checkbox-input" :checked="dictIdsAll[scope.$index]" @change="handleCheckAllChange(scope.row,scope.$index)">全选</span>
          <el-checkbox-group v-model="dictIds" >
            <el-checkbox
              v-for="dictitme in scope.row.dict"
              :key="dictitme.id" 
              :label="dictitme.id"
              ref="mybox"
              @change="handleCheckChange(dictitme,scope.row,scope.$index,$event)"
            >
              {{dictitme.name}}
            </el-checkbox>
          </el-checkbox-group>
      </span>
    </template>
  </el-table-column> -->
</el-table>
        
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    allData: {
      get() {
       return this.$store.state.sm_role.table_AssigningUsers_Data;
       
      },
      set(itme) {
         return  itme;
      }
    },
    dictIds: {
      get() {
       return this.$store.state.sm_role.dictIdsitme;
       
      },
      set(itme) {
         return  itme;
      }
    },
    dictIdsAll: {
      get() {
       return this.$store.state.sm_role.CheckeDetailsALL;
       
      },
      set(itme) {
         return  itme;
      }
    }
  },
  name: 'sm_trees',
  data() {
    return {
      table_table_rowData: null, // 一行的数据
      table_table_rowDataId: null, // 单选选中的按钮id
      isIndeterminate:true,
      checkAll:false,
      checkList1: [], // 单选监听
      allTableData:null,
      // 初始化全选按钮, 默认不选
      isCheckedAll: false
    }
  },
 methods: {
    tableHeaderColor() {// 修改row header的背景颜色与内边距
      return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
    },
    rowcellClass1() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
    ChangesRowData(val) { // 选中一行数据的方法
    this.llTableData = val;
    },
    handleCheckAllChange (row,index) {
      let indexdata = [];
      let itme = this.$store.state.sm_role.dictIdsitme; // 监听的所有数据  1
      let data = row.dict; // 当前一行dict数据
         data.forEach(element => {
           indexdata.push(element.id)
         });
       
          if(row.checked){ //全选状态 触发后改为未选
            let itme_by =[];
              let c = indexdata;
              for(var i=0;i<itme.length;i++){
                if(indexdata.indexOf(itme[i])==-1){
                  itme_by.push(itme[i]);
                }      
              } 
              this.$store.state.sm_role.dictIdsitme = itme_by;
              this.dictIdsAll[index]=false;
              this.$set( row,"checked", false ); 
          }else{
            let arr = indexdata.concat(); // 
              for(let i=0;i<itme.length;i++){
                arr.indexOf(itme[i]) === -1 ? arr.push(itme[i]) : 0;
              }  
              this.$store.state.sm_role.dictIdsitme = arr;  
              this.dictIdsAll[index]=true;
              this.$set( row,"checked", true ); 
          }
    },

      handleCheckChange (value,row,index,event) {
        if(row){
        let itme = value.id;
        let idIndex = this.dictIds.indexOf(itme); // this.dictIdsItme 保存页面功能的所有监听数组 {}
        if (idIndex >= 0) {//如果已经包含就去除
        let info = []
            this.dictIds.splice(itme, 1)
            this.dictIds.forEach(element => {
              if(element !=itme){
                info.push(element)
              }
            });
            this.$store.state.sm_role.dictIdsitme = info;
          } else {//如果没有包含就添加
          // 循环两个数组，把同一列的全选处理
          this.dictIds.push(itme);
          }
        let arry1 = this.dictIds; // 全部监听的数据
        let arry2 =row.dict;  // 当前一行的数据
        let arry3 = new Array();  // 取出来相同的数据
        let j = 0;
        for(var i=0;i<arry1.length;i++){
          for(var k=0;k<arry2.length;k++){
            if(arry1[i]==arry2[k].id){
              arry3[j]=arry1[i];
              ++j;
              }
          }
        }
        let tableInfo = this.allData;
        tableInfo.forEach(res => {
          if(res.id==row.id){ // 判断列表数据和当前行一样的时候
            if(arry3.length ==row.dict.length ){ // 当前一行的长度在全部监听中的数据长一样的时候，全选选中
             // res.checked = true;
               this.dictIdsAll[index] = true
            //  this.$set( row,"checked", true ); 
            //  this.$refs.mybox2.$el.ownerDocument.querySelector('.el-checkbox .el-checkbox__original').checked=true;
            }else{// 当前一行的长度在全部监听中的数据长---不一样的时候，全选选中取消
             // res.checked = false;
              this.dictIdsAll[index] = false
            // this.$set( row,"checked", false ); 
            // this.$refs.mybox2.$el.ownerDocument.querySelector('.el-checkbox .el-checkbox__original').checked=false;
            }
          }          
        });
     
        }
    },
  },
   watch: { 
    checkList: function (val, oldVal) { 
      return [];
    }
   }
}
</script>
<style  scoped="scoped">
.app-container .el-table{
    margin-top: 0px;
}
.nocursor{
  background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
    color: #C0C5CC;
}
</style>
