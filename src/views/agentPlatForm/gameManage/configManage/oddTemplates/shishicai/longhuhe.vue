<template>
  <div class="longhuhe-complate odd-content-box">
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
      <el-col>龙</el-col>
      <el-col>
        <el-input v-model="oddData['DRAGON'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>虎</el-col>
      <el-col>
        <el-input v-model="oddData['TIGER'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>和</el-col>
      <el-col>
        <el-input v-model="oddData['TIE'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "longhuhe-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.TIGER
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
      TIE: {
        betType: "TIE",
        betValue: "和",
        color: "",
        id: "764",
        new: false,
        odds: ''
      },
      DRAGON: {
        betType: "DRAGON",
        betValue: "龙",
        color: "",
        id: "762",
        new: false,
        odds: ''
      },
      TIGER: {
        betType: "TIGER",
        betValue: "虎",
        color: "",
        id: "763",
        new: false,
        odds: ''
      }
    };
  }
};
</script>
<style lang="scss">
@import "@/styles/oddContent.scss";
</style>


