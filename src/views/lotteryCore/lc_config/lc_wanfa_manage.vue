<template>
  <!-- 游戏玩法管理 --表格 -->
  <div class="app-container PlayManagement">
    <el-form>
      <el-form-item class="operation-box">
        <!-- <el-button
          type="primary"
          size="mini"
          icon="el-icon-circle-check-outline"
          @click="showroleDialogpv('startUsing')"
        >启用</el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-circle-close-outline"
          @click="showroleDialogpv('endUsing')"
        >禁用</el-button> -->
        <el-button type="primary" size="mini" @click="ueEditor('1')">
          <svg-icon icon-class="chakan" />
          查看/编辑单个玩法规则
          </el-button>
        <el-button type="primary" size="mini" @click="ueEditor('2')">
          <svg-icon icon-class="chakan" />
          查看/编辑全部玩法规则
          </el-button>
      </el-form-item>
    </el-form>
    <div class="role_table">
      <el-table
        :header-cell-style="tableHeaderColor"
        :cell-style="rowcellClass"
        :key="0"
        :data="playManagementallData"
        ref="multipleTable"
        highlight-current-row
        style="width: 100%;"
        @current-change="ChangesRowData"
        border
        class="tableAuto216"
        height="675"
        v-loading="childPageTableLoading"
      >
        <el-table-column width="35">
          <template slot-scope="scope">
            <el-radio :label="scope.row.id" v-model="table_id" class="hidTextRadio">&nbsp;</el-radio>
          </template>
        </el-table-column>
        <el-table-column type="index" label="序号" align="center" width="50" show-overflow-tooltip></el-table-column>
        <el-table-column
          label="二级玩法类型"
          property="category"
          align="center"
          width="120"
          show-overflow-tooltip
        >
          <template slot-scope="scope">{{ scope.row.category ? '多选' : '单选' }}</template>
        </el-table-column>
        <el-table-column
          label="一级玩法名称"
          property="firstPlayName"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column label="二级玩法名称" property="betOnValue" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column label="二级玩法编号" property="code" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column
          label="一级彩种编号"
          property="parentLotteryCode"
          align="center"
          width="120"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          label="对应开奖球号"
          property="prizeBalls"
          align="center"
          width="150"
          show-overflow-tooltip
        ></el-table-column>

        <el-table-column
          label="状态"
          property="disable"
          align="center"
          width="80"
          show-overflow-tooltip
        >
          <template slot-scope="scope">{{ scope.row.disable ? '禁用' : '启用' }}</template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 查看单个玩法规则 -->
    <el-dialog
      :visible.sync="ueEditorDialog"
      v-if="ueEditorDialog"
      :title="title_editor"
      :width="ueEditorwidth"
      class="dataProvider-adddiialog"
      top="20vh"
      :close-on-click-modal="false"
    >
      <div class="dialog-box tinymce">
        <el-form ref="postForm" :model="postForm" class="form-container">
          <el-form-item prop="content" style="margin-bottom: 30px;">
            <Tinymce ref="editor" v-model="contentPostForm"   :height="300"/>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" size="mini" @click="onEditorSetData">编辑</el-button> -->
        <el-button type="primary" size="mini" style="margin-left: 10px;" @click="onEditorChangea" :loading="confirmSaveRule">保 存</el-button>
        <!-- v-loading="loading"-->
        <el-button size="mini" @click="canceldisabled">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ArticleDetail from "@/views/example/components/ArticleDetail";

import Tinymce from "@/components/Tinymce";
import Upload from "@/components/Upload/singleImage3";
import {desc,persistDesc,disable } from '@/api/lotteryCore/lc_info/lc_detail'

const defaultForm = {
  content: "" // 文章内容
};
export default {
  name: "lc_PlayManagement_Table",
  // props:["currentConfigId"],
  components: {
    ArticleDetail,
    Tinymce,
    Upload
  },
  props:[
    'childPageTableLoading'
  ],
  computed: {
    ...mapState({
      playManagementallData: state => state.lc_detail.playManagementallData,
      // currentConfigId: state => state.lc_detail.currentConfigId
    }),
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
    playManagementallData: {
      get(){
        this.table_rowData = "";
        this.table_id = "";
        return this.$store.state.lc_detail.playManagementallData;
      }
    },
    currentConfigId: { //// 选中的玩法名称
      get() {
        return this.$store.state.lc_detail.currentConfigId;
      },
      set(item) {
       return item
      }
    },
  },
  data() {
    return {
      confirmSaveRule:false,
      loading: false, // Loading 加载
      ueEditorDialog: false, // 富文本编辑器弹框展示
      title_editor: "", // 富文本编辑器弹的表头
      ueEditorwidth: "", // 富文本编辑器的宽度
      table_id: "", // 当前行的ID
      table_rowData: "", // 选中一行数据
      startDialog: false, // 启用也禁用弹框
      set_start: {
        title_Name: "", // 禁用还是启用的名称
        play: "", // 玩法
      },
      loading: false,
      postForm: { 
        content: "" // 文章内容
        },
        contentPostForm:""// 文章内容
    };
  },

  methods: {
    getlist() {
      this.loading = true; // 请求接口时loading启用
    },
    ChangesRowData(val, index) {
      // 选中一行数据的方法
    
      if (val) {      
        this.table_rowData = val;
        this.table_id = val.id;
      }
    }, 
    ueEditor(val) {
      this.contentPostForm = ""
      let data = {};
      if (val == "1") {
        if(!this.table_id) {
          this.$message.warning('请选择一条数据')
          return false;
        }
        this.title_editor = "查看单个玩法规则";
        this.ueEditorwidth = "625px";
        data = {
         // palyRuleId:"1", // 玩法ID
          playRuleId:this.table_rowData.id, // 玩法ID
          descType:"0" // 玩法规则类型, 0末级玩法，1全部玩法
        }
      } else if (val == "2") {
        this.title_editor = "查看全部玩法规则";
        this.ueEditorwidth = "950px";
        data = {
          parentLotteryId:this.currentConfigId, // 一级彩种id
          descType:"1" // 玩法规则类型, 0末级玩法，1全部玩法
        }
      }
      // 查看玩法规则【按钮】接口       
        desc(data).then(response => {  
          const resData = response.data
          if(resData.success == 1){
             this.$set(this.postForm,"content","")
            if(response.data.content){
              this.contentPostForm = response.data.content.description; // 玩法规则的内容
            }
         //  this.contentPostForm = response.data.content.description; // 玩法规则的内容
            this.ueEditorDialog = true;
          }else{
            this.$message.warning(resData.respMsg)
          }   
        })
       
    },
    // onEditorSetData(editor) {
    //   // 编辑文本
    // },
    onEditorChangea(editor) {
      // 编辑框---保存
      let data = {}
      if(this.title_editor =="查看单个玩法规则" ){
          data = {
            playRuleId:this.table_rowData.id,  //玩法id
            description:this.contentPostForm,//规则说明
            descType:0 //玩法规则类型, 0末级玩法，1全部玩法
          }
      }else if(this.title_editor =="查看全部玩法规则"){
           data = {
            parentLotteryId:this.currentConfigId,  //玩法id 
            description:this.contentPostForm,//规则说明
            descType:1 //玩法规则类型, 0末级玩法，1全部玩法
          }
      }
       // 玩法规则【保存按钮】接口 
        this.confirmSaveRule = true;      
        persistDesc(data).then(response => {         
          const resData = response.data
          if(resData.success == 1){
            this.ueEditorDialog = false;
            this.$message.success("保存成功")
            // this.ueEditorDialog = true;
          }else{
            this.$message.error(resData.respMsg)
          }    
          this.confirmSaveRule = false; 
        })

      
    },
    canceldisabled() {
      // 编辑框--取消
    //  this.$set(this.postForm,"content","")
      this.ueEditorDialog = false;
    },
    tableHeaderColor() { // 修改row header的背景颜色与内边距
      return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
    },
    rowcellClass() { // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 600);
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.createPost-container {
  width: 600px;
  margin: 0px auto;
  position: relative;
  .createPost-main-container {
    padding: 40px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
  }
  > .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
}
.dataProvider-adddiialog {
  .tinymce {
    height: 430px;
  }
}
.bubu {
  //  玩法规则遮罩层样式
  position: absolute;
  width: 930px;
  height: 438px;
  z-index: 10000;
}
</style>
