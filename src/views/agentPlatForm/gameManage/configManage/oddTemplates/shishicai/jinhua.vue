<template>
  <div class="jinhua-template odd-content-box">
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
      <el-col>豹子</el-col>
      <el-col>
        <el-input v-model="oddData['THREE_EQUAL'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>顺子</el-col>
      <el-col>
        <el-input v-model="oddData['THREE_STRAIGHT'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>对子</el-col>
      <el-col>
        <el-input v-model="oddData['THREE_PAIR'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>半顺</el-col>
      <el-col>
        <el-input v-model="oddData['THREE_HALF_STRAIGHT'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>杂六</el-col>
      <el-col>
        <el-input v-model="oddData['THREE_CHAOS'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "jinhua-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.THREE_CHAOS
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
      THREE_CHAOS: {
        betType: "THREE_CHAOS",
        betValue: "杂六",
        color: "",
        id: "773",
        new: false,
        odds: ''
      },
      THREE_STRAIGHT: {
        betType: "THREE_STRAIGHT",
        betValue: "顺子",
        color: "",
        id: "770",
        new: false,
        odds: ''
      },
      THREE_EQUAL: {
        betType: "THREE_EQUAL",
        betValue: "豹子",
        color: "",
        id: "769",
        new: false,
        odds: ''
      },
      THREE_HALF_STRAIGHT: {
        betType: "THREE_HALF_STRAIGHT",
        betValue: "半顺",
        color: "",
        id: "772",
        new: false,
        odds: ''
      },
      THREE_PAIR: {
        betType: "THREE_PAIR",
        betValue: "对子",
        color: "",
        id: "771",
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


