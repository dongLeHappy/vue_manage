<template>
  <!-- 香港彩---通用赔率管理 -->
  <div class="app-container HongKongColour-allocation">
    <!--@click="roleAdd"-->
    <el-form>
      <el-form-item class="operation-box">
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-lc-bianji"
          @click="editTheseRule"
        >启用编辑</el-button>
        <el-button type="primary" size="mini" icon="el-icon-lc-save" @click="savaTheseRule">保存</el-button>
      </el-form-item>
    </el-form>
    <div class="HongKongColour-content">
      <div class="HongKongColour-content-lefts">
        <!-- <ul>
            <li v-for="(itme,index) in data" :key="index+itme.name">{{itme.name}}</li>
        </ul>-->
        <el-radio-group
          v-model="HongKongColourPrimaryColorKind"
          class="HongKongColour-content-left-groups"
        >
          <div class="showoverflowy">
            <p v-for="(itme,index) in data" :key="index+itme.name">
              <el-radio-button :label="itme.name">{{itme.name}}</el-radio-button>
            </p>
          </div>
          <!-- <p><el-radio-button :label="itme.name" v-for="(itme,index) in data" :key="index+itme.name">{{itme.name}}</el-radio-button></p> -->
        </el-radio-group>
      </div>
      <div class="HongKongColour-content-rights">
        <p style="font-size: 12px;">{{HongKongColourPrimaryColorKind}}</p>
        <PlayConfiguration :play="HongKongColourPrimaryColorKind"></PlayConfiguration>
        <div class="HongKongColours-inputing">
          <span>一键输入：</span>
          <el-input v-model="AKeyInput" :disabled="HongKongTheEdit"></el-input>&nbsp;
          <el-button type="primary" size="mini" @click="allInputOK">确定</el-button>
        </div>
      </div>

      <!-- <div class="HongKongColour-inputing">
        <span>一键输入：</span>
        <el-input v-model="AKeyInput" :disabled="HongKongTheEdit"></el-input>&nbsp;
        <el-button type="primary" size="mini" @click="allInputOK">确定</el-button>
      </div> -->
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import PlayConfiguration from "./hongKong_PlayConfiguration";
export default {
  name: "lc_HongKongColour",
  components: {
    PlayConfiguration
  },
  props: ["play"],
  computed: {
    ...mapState({
      HongKongTheEdit: state => state.lc_detail.HongKongTheEdit
    }),
    HongKongColourPrimaryColorKind: {
      get() {
        return this.$store.state.lc_detail.HongKongColourPrimaryColorKind;
      },
      set(item) {
        this.changeradio(item);
        // return item;
      }
    }
  },
  data() {
    return {
     
      AKeyInput: "", // 监听一键输入的数据，
     
    };
  },
  methods: {
    // showroleDialogpv(val) {

    // },
    tableHeaderColor() {
      // 修改row header的背景颜色与内边距
      return "background-color: #F7FBFE; padding: 4px 0;text-align:center;";
    },
    rowcellClass() {
      // 行的cell样式
      return "padding:0;overflow: hidden !important;white-space: nowrap !important;word-break: keep-all !important;text-overflow: ellipsis !important;";
    },
    editTheseRule() {
      //启用编辑
      this.$store.state.lc_detail.HongKongTheEdit = false;
    },
    savaTheseRule() {
      //保存
      this.$store.state.lc_detail.HongKongTheEdit = true;
    },
    changeradio(val) {
      this.$store.state.lc_detail.HongKongColourPrimaryColorKind = val;
      this.$store.state.lc_detail.HongKongTheEdit = true;
      this.AKeyInput = "";
      let Tema =
        val == "特码" ||
        val == "正1特" ||
        val == "正2特" ||
        val == "正3特" ||
        val == "正4特" ||
        val == "正5特" ||
        val == "正6特";
      // if(Tema){

      // }
    },
    allInputOK() {
      if (this.HongKongTheEdit) {
        this.$message.warning("请先启用编辑！");
        return;
      }
      let allInputData = this.AKeyInput.replace(/\s/g, "");
      if (allInputData != "") {
        let data = this.$store.state.lc_detail.inputTemaData;
        for (let i in data) {
          // let bullInfo = data
          data[i].data = this.AKeyInput;
        }
      } else {
        this.$message.warning("数据不可为空！");
      }
    }
  },
  created() {
  },
  mounted() {
    // 香港彩---通用赔率管理和 通用赔率上限管理
  }
};
</script>
 <style lang="scss">
 .HongKongColour-allocation { 

.HongKongColour-content{
  color: #606266;
  border: solid 1px #dcdfe6;
  margin-top: 12px !important;
  height:72vh;
  font-size: 12px !important;
  padding-right: 8vh;
  padding-top: 1.5vh;
  .HongKongColour-content-lefts{  // 左边
    width: 20%;
    float: left;
    // margin-right: 6vh;
    max-height: 64vh;
    // padding-top: 1.5vh;
    text-align: center;
    font-size: 12px;
    .HongKongColour-content-left-groups{
     >div{   
      >p{
      // border: solid 1px #dcdfe6;
        width: 95%;
        height: 30px;
        line-height: 30px;       
          .el-radio-button{
          width: 100%;
          height: 100%;
          // .el-radio__inner,.el-radio__input.is-checked .el-radio__inner{
          //   display:none;
          // }
          >span{
            font-size: 12px;
            width: 100%;
            height: 100%;
            display: inline-block;
            line-height: 0%;
            border-radius: 0;
          }
        }
        .el-radio-button__orig-radio:checked+.el-radio-button__inner{
         background: rgba(242, 242, 242, 1);
         border-color:#dcdfe6;
         color: #606266;
        }
      }
      }
      .showoverflowy{
          width: 100%;
          max-height: 600px;
          overflow: hidden;
          overflow-y: auto;
          border-bottom: solid 1px #dcdfe6;
      }
    }
  }
  .HongKongColour-content-rights{  // 右边
    width:80%;
    float: left;
    max-height: 64vh;
    //  margin-top: 1.5vh;
    border: solid 1px #dcdfe6;
    >p{
      height: 30px;
      line-height: 30px;
      // border: solid 1px #dcdfe6;
      padding-left: 3vh;
    }
  }
}
}
.HongKongColours-inputing{
  width: 19%;
  float: right;
  height: 28px;
  margin-top: 15px;
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
    // .HongKongColour-allocation {
        .HongKongColour-content{
            height:69vh;
        }
        .HongKongColours-inputing{
        width: 23.2%;
        }
        .showoverflowy{
          max-height: 480px;
        }
      // }  
  }

</style>