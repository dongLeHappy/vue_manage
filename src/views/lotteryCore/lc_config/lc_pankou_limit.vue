<template>
  <!-- 通用盘口金额限制配置 -->
  <div class="monetaryLimitationPlayManagement">
    <!--@click="roleAdd" -->
    <el-form v-if="thisLottery == '编辑赔率'?true:false">
      <el-form-item class="operation-box">
        <el-button type="primary" size="mini" @click="editTheseRule">
          <svg-icon icon-class="bianji" />
          启用编辑</el-button>
        <el-button type="primary" size="mini" @click="savaTheseRule">
          <svg-icon icon-class="baocun" />
          保存</el-button>
      </el-form-item>
    </el-form>
    <div class="PlayManagement_content" v-loading="loading">
        <el-row class="play_row_title" :class="isShowPadding16 ? 'showPadding16': ''">
          <el-col v-for="(itme,index) in title" :key="index">
            <div class="play_title">{{itme}}</div>
          </el-col>
        </el-row>
      <div class="aaa">     
        <el-row class="play_row_content" v-for="(item,index) in contentAllData" :key="index">
          <el-col>
            <div class="play_content palyname">{{item.betOnValue}}</div>
          </el-col>
          <el-col>
            <div class="play_content">
              <el-input style="width:100%" :disabled="allowEdit_pankoulimit" v-model="item.singleMin"></el-input>
            </div>
          </el-col>
          
          <el-col>
            <div class="play_content">
              <el-input style="width:100%" :disabled="allowEdit_pankoulimit" v-model="item.singleMax"></el-input>
            </div>
          </el-col>
          <el-col>
            <div class="play_content">
              <el-input style="width:100%" :disabled="allowEdit_pankoulimit" v-model="item.gameNoMax"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { validNinedata,validNinedatayi } from "@/utils/validate";
import {persistDetail } from '@/api/lotteryCore/lc_info/lc_detail'
export default {
  name: "lc_monetaryLimitation",
  computed: {
    ...mapState({
      contentAllData: state => state.lc_detail.contentAllData,
      isShowPadding16: state => state.lc_detail.isShowPadding16,
      allowEdit_pankoulimit: state => state.lc_detail.allowEdit_pankoulimit,
    })
  },
  props:["thisLottery"],
  data() {
    return {
      title: ["二级玩法", "单期单注最低", "单期单注最高", "单期玩法最高"],
     // allowEdit: true,
      loading: false,
      timmer: null, // 设置定时器
    };
  },
  methods: {
    getContent() {
     // 获取玩法 ，下注值
      let data = {
        type: this.$store.state.lc_detail.getname1
      };
      this.$store.dispatch("getLimitAmount", data).then(res => {});
    },
    editTheseRule() {  //启用编辑
      this.$store.state.lc_detail.allowEdit_pankoulimit = false;
    },
    savaTheseRule() {
      // 通用盘口金额限制配置接口 保存  接口请求
      if (this.$store.state.lc_detail.allowEdit_pankoulimit) {
        this.$message.warning("请编辑后再保存");
        return;
      }
      let dataInfo = this.contentAllData;
      for (let i = 0; i < dataInfo.length; i++) {
        if(dataInfo[i].singleMin=="" || dataInfo[i].singleMax=="" || dataInfo[i].gameNoMax==""){
          this.$message.warning(dataInfo[i].betOnValue + " 请输入范围在大于或等于0小于1亿的正整数");
          return;
        }
        if(!validNinedatayi(dataInfo[i].singleMin)||!validNinedatayi(dataInfo[i].singleMax)||!validNinedatayi(dataInfo[i].gameNoMax)){
          this.$message.warning(dataInfo[i].betOnValue + " 请输入范围在大于或等于0小于1亿的正整数");
          return;
        }
        if(Number(dataInfo[i].singleMin)>=Number(dataInfo[i].singleMax) || Number(dataInfo[i].singleMax) >= Number(dataInfo[i].gameNoMax)){
          this.$message.warning(dataInfo[i].betOnValue + " 请输入单期单注最低＜单期单注最高＜单期玩法最高的金额");
          return;
        }
     }
      // let data = {
      //   playQuotaList: this.contentAllData
      // };
      // 启用禁用玩法-接口       
        persistDetail({playQuotaList:this.contentAllData}).then(response => {  
          const resData = response.data;
          if(resData.success == 1){
           this.$message.success("保存成功");
            this.$emit('seteditPercentLotteryDialog')
            this.$store.state.lc_detail.allowEdit_pankoulimit  = true;
          }else{
            this.$message.error(resData.respMsg)
          }   
        })
    }
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 600);
  }
};
</script>
<style lang="scss" scope>
.el-dialog__body .pencent-content .el-input .el-input__inner{
  height: 26px!important;
}
.monetaryLimitationPlayManagement {
  border: 1px solid #dcdfe6;
  height: calc(60vh - 58px);
  padding-top: 1.5vh;
  width: 100%;
  .operation-box {
    padding-right: 10px;
  } 
}
.PlayManagement_content {
  margin-top: 12px !important;
  // height: 62vh;
  width: 70%;
  margin: 0 auto;
  width: 98%;
  border: 1px solid gainsboro;
}
.play_row_title,
.play_row_content {
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
}

.play_row_title {
  height: 25px;
  line-height: 25px;
  margin-top: 20px;
}
.play_title,
.play_content {
  text-align: center;
  border: solid 1px #dcdfe6;
  background-color: #f2f2f2;
}
.play_row_content {
  height: 22px;
  line-height: 22px;
  margin-top: 8px;
}
.play_row_content input {
  width: 100%;
  height: 22px;
  border: none;
  text-align: center;
}
.palyname {
  background-color: #ffff;
}
.aaa {
  height: calc(50vh - 78px);
  width: 100% !important;
  overflow: auto;
  margin-top: 10px;
}
.aaa::-webkit-scrollbar {
    display: none;
  }
.PlayManagement_content .el-col {
  width: 135px;
}
@media (min-width: 700px) and (max-width: 1500px) {
  .monetaryLimitationPlayManagement {
    padding-right: 0% !important;
    max-height: calc(60vh);
    min-height: calc(50vh);
  }

}

</style>