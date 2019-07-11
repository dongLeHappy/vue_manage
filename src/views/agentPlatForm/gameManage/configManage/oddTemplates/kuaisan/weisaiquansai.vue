<template>
  <div class="weisaiquansai-complate odd-content-box">
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
      <el-col>111</el-col>
      <el-col>
        <el-input v-model="oddData['TRIPLE_1_1_1'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>222</el-col>
      <el-col>
        <el-input v-model="oddData['TRIPLE_2_2_2'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>333</el-col>
      <el-col>
        <el-input v-model="oddData['TRIPLE_3_3_3'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>444</el-col>
      <el-col>
        <el-input v-model="oddData['TRIPLE_4_4_4'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>555</el-col>
      <el-col>
        <el-input v-model="oddData['TRIPLE_5_5_5'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>666</el-col>
      <el-col>
        <el-input v-model="oddData['TRIPLE_6_6_6'].odds" :disabled="true"></el-input>
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
    <el-row class="odd-content">
      <el-col>全骰</el-col>
      <el-col>
        <el-input v-model="oddData['TRIPLE_ALL'].odds" :disabled="true"></el-input>
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
  name: "weisaiquansai-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.TRIPLE_ALL
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
        TRIPLE_ALL: {
          betType: "TRIPLE_ALL",
          betValue: "全骰",
          color: "",
          id: "3983",
          new: false,
          odds: ''
        },
        TRIPLE_1_1_1: {
          betType: "TRIPLE_1_1_1",
          betValue: "111",
          color: "",
          id: "3977",
          new: false,
          odds: ''
        },
        TRIPLE_4_4_4: {
          betType: "TRIPLE_4_4_4",
          betValue: "444",
          color: "",
          id: "3980",
          new: false,
          odds: ''
        },
        TRIPLE_3_3_3: {
          betType: "TRIPLE_3_3_3",
          betValue: "333",
          color: "",
          id: "3979",
          new: false,
          odds: ''
        },
        TRIPLE_2_2_2: {
          betType: "TRIPLE_2_2_2",
          betValue: "222",
          color: "",
          id: "3978",
          new: false,
          odds: ''
        },
        TRIPLE_5_5_5: {
          betType: "TRIPLE_5_5_5",
          betValue: "555",
          color: "",
          id: "3981",
          new: false,
          odds: ''
        },
        TRIPLE_6_6_6: {
          betType: "TRIPLE_6_6_6",
          betValue: "666",
          color: "",
          id: "3982",
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
