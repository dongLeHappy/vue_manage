<template>
  <div class="changpai-complate odd-content-box">
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
      <el-col>11</el-col>
      <el-col>
        <el-input v-model="oddData['PAIR_1_1'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>22</el-col>
      <el-col>
        <el-input v-model="oddData['PAIR_2_2'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>33</el-col>
      <el-col>
        <el-input v-model="oddData['PAIR_3_3'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>44</el-col>
      <el-col>
        <el-input v-model="oddData['PAIR_4_4'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>55</el-col>
      <el-col>
        <el-input v-model="oddData['PAIR_5_5'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>66</el-col>
      <el-col>
        <el-input v-model="oddData['PAIR_6_6'].odds" :disabled="true"></el-input>
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
  name: "changpai-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.PAIR_6_6
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
        PAIR_4_4: {
          betType: "PAIR_4_4",
          betValue: "44",
          color: "",
          id: "4168",
          new: false,
          odds: ''
        },
        PAIR_5_5: {
          betType: "PAIR_5_5",
          betValue: "55",
          color: "",
          id: "4169",
          new: false,
          odds: ''
        },
        PAIR_2_2: {
          betType: "PAIR_2_2",
          betValue: "22",
          color: "",
          id: "4166",
          new: false,
          odds: ''
        },
        PAIR_3_3: {
          betType: "PAIR_3_3",
          betValue: "33",
          color: "",
          id: "4167",
          new: false,
          odds: ''
        },
        PAIR_1_1: {
          betType: "PAIR_1_1",
          betValue: "11",
          color: "",
          id: "4165",
          new: false,
          odds: ''
        },
        PAIR_6_6: {
          betType: "PAIR_6_6",
          betValue: "66",
          color: "",
          id: "4170",
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
