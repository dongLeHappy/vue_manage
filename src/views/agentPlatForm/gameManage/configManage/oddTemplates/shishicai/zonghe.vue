<template>
  <div class="zonghe-template odd-content-box">
    <h2>{{wanfaName}}</h2>
    <el-row class="odd-header">
      <el-col>号码</el-col>
      <el-col>赔率</el-col>
      <el-col>号码</el-col>
      <el-col>赔率</el-col>
      <el-col>号码</el-col>
      <el-col>赔率</el-col>
      <el-col>号码</el-col>
      <el-col>赔率</el-col>
      <el-col>号码</el-col>
      <el-col>赔率</el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>总和大</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_BIG'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>总和小</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_SMALL'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>总和单</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_ODD'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>总和双</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_EVEN'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "zonghe-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.TOTAL_ODD
        ) {
          return this.$store.state.ag_userdefine_odd.odd_detail_data;
        } else {
          return this.tempData;
        }
      }
    }
  },
  data() {
    return {
      tempData: {
        TOTAL_ODD: {
          betType: "TOTAL_ODD",
          betValue: "总单",
          color: "",
          id: "767",
          new: false,
          odds: ''
        },
        TOTAL_BIG: {
          betType: "TOTAL_BIG",
          betValue: "总大",
          color: "",
          id: "765",
          new: false,
          odds: ''
        },
        TOTAL_SMALL: {
          betType: "TOTAL_SMALL",
          betValue: "总小",
          color: "",
          id: "766",
          new: false,
          odds: ''
        },
        TOTAL_EVEN: {
          betType: "TOTAL_EVEN",
          betValue: "总双",
          color: "",
          id: "768",
          new: false,
          odds: ''
        }
      }
    };
  }
};
</script>
<style lang="scss">
@import "@/styles/oddContent.scss";
</style>


