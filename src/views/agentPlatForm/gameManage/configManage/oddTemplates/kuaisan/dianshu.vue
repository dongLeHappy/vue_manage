<template>
  <div class="dianshu-complate odd-content-box">
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
      <el-col>4点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_4'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>5点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_5'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>6点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_6'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>7点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_7'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>8点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_8'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>9点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_9'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>10点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_10'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>11点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_11'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>12点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_12'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>13点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_13'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>14点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_14'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>15点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_15'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>16点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_16'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>17点</el-col>
      <el-col>
        <el-input v-model="oddData['TOTAL_17'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>总大</el-col>
      <el-col>
        <el-input v-model="oddData['SAN_JUN_BIG'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>总小</el-col>
      <el-col>
        <el-input v-model="oddData['SAN_JUN_SMALL'].odds" :disabled="true"></el-input>
      </el-col>
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
  name: "dianshu-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.TOTAL_13
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
        SAN_JUN_BIG: {
          betType: "SAN_JUN_BIG",
          betValue: "总大",
          color: "",
          id: "3998",
          new: false,
          odds: ''
        },
        TOTAL_14: {
          betType: "TOTAL_14",
          betValue: "14点",
          color: "",
          id: "3994",
          new: false,
          odds: ''
        },
        TOTAL_15: {
          betType: "TOTAL_15",
          betValue: "15点",
          color: "",
          id: "3995",
          new: false,
          odds: ''
        },
        TOTAL_4: {
          betType: "TOTAL_4",
          betValue: "4点",
          color: "",
          id: "3984",
          new: false,
          odds: ''
        },
        TOTAL_12: {
          betType: "TOTAL_12",
          betValue: "12点",
          color: "",
          id: "3992",
          new: false,
          odds: ''
        },
        TOTAL_5: {
          betType: "TOTAL_5",
          betValue: "5点",
          color: "",
          id: "3985",
          new: false,
          odds: ''
        },
        TOTAL_13: {
          betType: "TOTAL_13",
          betValue: "13点",
          color: "",
          id: "3993",
          new: false,
          odds: ''
        },
        TOTAL_6: {
          betType: "TOTAL_6",
          betValue: "6点",
          color: "",
          id: "3986",
          new: false,
          odds: ''
        },
        TOTAL_10: {
          betType: "TOTAL_10",
          betValue: "10点",
          color: "",
          id: "3990",
          new: false,
          odds: ''
        },
        TOTAL_7: {
          betType: "TOTAL_7",
          betValue: "7点",
          color: "",
          id: "3987",
          new: false,
          odds: ''
        },
        SAN_JUN_SMALL: {
          betType: "SAN_JUN_SMALL",
          betValue: "总小",
          color: "",
          id: "3999",
          new: false,
          odds: ''
        },
        TOTAL_11: {
          betType: "TOTAL_11",
          betValue: "11点",
          color: "",
          id: "3991",
          new: false,
          odds: ''
        },
        TOTAL_8: {
          betType: "TOTAL_8",
          betValue: "8点",
          color: "",
          id: "3988",
          new: false,
          odds: ''
        },
        TOTAL_9: {
          betType: "TOTAL_9",
          betValue: "9点",
          color: "",
          id: "3989",
          new: false,
          odds: ''
        },
        TOTAL_16: {
          betType: "TOTAL_16",
          betValue: "16点",
          color: "",
          id: "3996",
          new: false,
          odds: ''
        },
        TOTAL_17: {
          betType: "TOTAL_17",
          betValue: "17点",
          color: "",
          id: "3997",
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
