<template>
  <div class="sanjun-complate odd-content-box">
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
      <el-col>1</el-col>
      <el-col>
        <el-input v-model="oddData.SAN_JUN_1.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>2</el-col>
      <el-col>
        <el-input v-model="oddData.SAN_JUN_2.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>3</el-col>
      <el-col>
        <el-input v-model="oddData.SAN_JUN_3.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>4</el-col>
      <el-col>
        <el-input v-model="oddData.SAN_JUN_4.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>5</el-col>
      <el-col>
        <el-input v-model="oddData.SAN_JUN_5.odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>6</el-col>
      <el-col>
        <el-input v-model="oddData.SAN_JUN_6.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
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
  name: "sanjun-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.SAN_JUN_4
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
        SAN_JUN_4: {
          betType: "SAN_JUN_4",
          betValue: "4",
          color: "",
          id: "3974",
          new: false,
          odds: ''
        },
        SAN_JUN_3: {
          betType: "SAN_JUN_3",
          betValue: "3",
          color: "",
          id: "3973",
          new: false,
          odds: ''
        },
        SAN_JUN_6: {
          betType: "SAN_JUN_6",
          betValue: "6",
          color: "",
          id: "3976",
          new: false,
          odds: ''
        },
        SAN_JUN_5: {
          betType: "SAN_JUN_5",
          betValue: "5",
          color: "",
          id: "3975",
          new: false,
          odds: ''
        },
        SAN_JUN_2: {
          betType: "SAN_JUN_2",
          betValue: "2",
          color: "",
          id: "3972",
          new: false,
          odds: ''
        },
        SAN_JUN_1: {
          betType: "SAN_JUN_1",
          betValue: "1",
          color: "",
          id: "3971",
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
