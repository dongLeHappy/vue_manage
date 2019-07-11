<template>
        <!-- 通用赔率管理 -->
   <div class="app-container GeneralOddsManagement"><!--@click="roleAdd"-->
     <el-form>
        <el-form-item class="operation-box">
          <el-button type="primary" size="mini" icon="el-icon-lc-bianji" @click="editTheseRule">启用编辑</el-button>
          <el-button type="primary" size="mini" icon="el-icon-lc-save" @click="savaTheseRule">保存</el-button>
        </el-form-item>
      </el-form>
    <div class="GeneralOddsManagement-content">
        <el-row :gutter="20" class="GeneralOddsManagement_row_title">
          <el-col><div class="GeneralOddsManagement_title">
            <span class="GeneralOddsManagement-title-span">下注类型</span><span class="GeneralOddsManagement-title-span">开盘赔率</span>
          </div></el-col>
          <el-col><div class="GeneralOddsManagement_title">
            <span class="GeneralOddsManagement-title-span">下注类型</span> <span class="GeneralOddsManagement-title-span">开盘赔率</span>
          </div></el-col>
        </el-row>
      <div class="body-content">        
       <ul>
         <li v-for="item in data" :key="item.name"> 
           <span class="GeneralOddsManagement-content-left">{{item.name}}</span>
            <span class="GeneralOddsManagement-content-right">
              <el-input :disabled="theEdit" v-for="(item_inputdata,index) in item.inputdata" :key="index" :value="item_inputdata" v-bind:class="item.inputdata.length>1?'inputcss':''"></el-input>
              </span></li>
       </ul>
      
        </div>
        <div class="inputing"><span>一键输入：</span>  <el-input :disabled="theEdit"></el-input> &nbsp; <el-button type="primary" size="mini" >确定</el-button></div>
      
      
    </div>


    </div>
</template>
<script>
    import { mapState } from "vuex";
    export default {
     name:"lc_GeneralOddsManagement",
      computed: {
    ...mapState({
      allData: [],
     
    }),
  },
      data(){
          return{
            theEdit: true,
            data:[
              {'id':"hu",'name':"第一球","inputdata":["102",]},
              {'id':"hu",'name':"第二 球","inputdata":["102",]},
              {'id':"hu",'name':"第三球","inputdata":["102","66","10.36"]},
              {'id':"hu",'name':"第四球","inputdata":["102",]},
              {'id':"hu",'name':"第一二球","inputdata":["102","66","10.36"]},
              {'id':"hu",'name':"第一三球","inputdata":["102","10.36"]}, {'id':"hu",'name':"第一球","inputdata":["102",]},
              {'id':"hu",'name':"第二 球","inputdata":["102",]},
              {'id':"hu",'name':"第三球","inputdata":["102","66","10.36"]},
              {'id':"hu",'name':"第四球","inputdata":["102",]},
              {'id':"hu",'name':"第一二球","inputdata":["102","66","10.36"]},
              {'id':"hu",'name':"第一三球","inputdata":["102","10.36"]},
               {'id':"hu",'name':"第一球","inputdata":["102",]},
              {'id':"hu",'name':"第二 球","inputdata":["102",]},
              {'id':"hu",'name':"第三球","inputdata":["102","66","10.36"]},
              {'id':"hu",'name':"第四球","inputdata":["102",]},
              // {'id':"hu",'name':"第一二球","inputdata":["102","66","10.36"]},
              // {'id':"hu",'name':"第一三球","inputdata":["102","10.36"]},
              //  {'id':"hu",'name':"第一球","inputdata":["102",]},
              // {'id':"hu",'name':"第二 球","inputdata":["102",]},
              // {'id':"hu",'name':"第三球","inputdata":["102","66","10.36"]},
              // {'id':"hu",'name':"第四球","inputdata":["102",]},
              // {'id':"hu",'name':"第一二球","inputdata":["102","66","10.36"]},
              // {'id':"hu",'name':"第一三球","inputdata":["102","10.36"]}, {'id':"hu",'name':"第一球","inputdata":["102",]},
              // {'id':"hu",'name':"第二 球","inputdata":["102",]},
              // {'id':"hu",'name':"第三球","inputdata":["102","66","10.36"]},
              // {'id':"hu",'name':"第四球","inputdata":["102",]},
              // {'id':"hu",'name':"第一二球","inputdata":["102","66","10.36"]},
              // {'id':"hu",'name':"第一三球","inputdata":["102","10.36"]}, {'id':"hu",'name':"第一球","inputdata":["102",]},
              // {'id':"hu",'name':"第二 球","inputdata":["102",]},
              // {'id':"hu",'name':"第三球","inputdata":["102","66","10.36"]},
              // {'id':"hu",'name':"第四球","inputdata":["102",]},
              // {'id':"hu",'name':"第一二球","inputdata":["102","66","10.36"]},
              // {'id':"hu",'name':"第一三球","inputdata":["102","10.36"]},
            ]
          }
      },
      methods:{
          // showroleDialogpv(val) {
            
          // },
        tableHeaderColor() { // 修改row header的背景颜色与内边距
          return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
        },
        rowcellClass() { // 行的cell样式
          return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
        },
        editTheseRule() {  //启用编辑
          this.theEdit = false;
        },
        savaTheseRule() { //保存
          this.theEdit = true;
        }
      },
      created() {
          let name_play = this.$store.state.lc_detail.getname;
      },
      mounted() { 
            let name = this.$store.state.lc_detail.getname1
            let name_play = this.$store.state.lc_detail.getname;
           
            // if(name_play =="ba"){  // 通用赔率管理
            //    this.titleName ="开盘赔率";
            // } else if(name_play == "ca"){  //  通用赔率上限管理
            //    this.titleName ="赔率上限";
            // }
           
            
     }
    }
</script>
<style lang="scss">

.GeneralOddsManagement-content{
  color: #606266;
  border: solid 1px #dcdfe6;
  margin-top: 12px !important;
  height:72vh;
  padding-left: 35vh;
  font-size: 12px !important;
  .el-col{
  width: 50vh;
  height: 27px;
  margin-right: 5.7vh;
  margin-bottom: 10px;
  span{
    display:inline-block;
    width: 49.5%;
    &:last-child{
      border-left: 1px solid #dcdfe6;
    }
  }
 
  }
  .body-content{
    width: 106vh;
    max-height: 60vh;
    overflow: hidden;
    overflow-y: auto;
    margin-bottom: 10px;
   ul{
    width: 100%;
    height: 100%;
   }
    li{
    width:47.8vh;
    float: left;
    border: solid 1px #dcdfe6;
    line-height: 28px;
    height: 28px;
    margin:0px 0px 8px 0px;
    // padding: 2px 0px;
    // margin-right: 7vh
    span {
      width: 50%;
      display:inline-block;
      float: left;
      text-align: center;
      font-size: 12px;

    }
    .GeneralOddsManagement-content-left{
     
    }
    .GeneralOddsManagement-content-right{
     border-left: 1px solid #dcdfe6;
     .el-input__inner{       
       width: 80%;
       font-size: 12px;
      height:20px !important;
       line-height:10px !important;
      border: none;
      text-align: center; 
      border: solid 1px #dcdfe6;
      // color: #606266;
      color:#868585;
      padding: 0px;
      border-radius: 0%;
    }
    .inputcss{
      width: 30%;
      margin-left: 4px;
    }
    }
    &:nth-child(odd){
      margin-right: 8vh;
    }
    }
    
  }
}
.GeneralOddsManagement_row_title{
  height: 25px;
  line-height:25px;
  margin-top: 15px;
}

.GeneralOddsManagement_title{
  text-align: center;
  border: solid 1px #dcdfe6;
  background-color: #F2F2F2;
  
}
// .foutedata{
//   width: 100%;
// }
.inputing{
  width: 40%;
  float: right;
  height: 28px;
  >span{
    display:inline-block;
    width: 8vh;
    float: left;
    height: 100%;
    line-height: 27px;
  }
  .el-input{
    float: left;
    width: 10vh;
    height: 27px;
    input{
      height: 100%;
    }
  }
}

@media (min-width:700px) and (max-width:1400px) {
.GeneralOddsManagement-content{
    height:69vh;
    padding-left: 20vh;
    .body-content{
      max-height: 55vh;
    li{
        width:47.5vh;
    }
}
  }
}

</style>