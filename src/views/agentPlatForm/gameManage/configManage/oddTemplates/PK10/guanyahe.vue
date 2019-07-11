<template>
  <div class="guanyahe-complate odd-content-box">
    <h2>{{wanfaName}}</h2>
    <!-- 通用球类模板 -->
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
      <el-col>3</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_3.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>4</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_4.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>5</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_5.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>6</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_6.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>7</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_7.odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>8</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_8.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>9</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_9.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>10</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_10.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>11</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_11.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>12</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_12.odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>13</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_13.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>14</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_14.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>15</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_15.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>16</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_16.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>17</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_17.odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>18</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_18.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>19</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_HE_19.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>冠亚大</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_BIG.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>冠亚小</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_SMALL.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>冠亚单</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_ODD.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>冠亚双</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_EVEN.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>冠亚大双</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_BIG_EVEN.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>冠亚大单</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_BIG_ODD.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>冠亚小双</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_SMALL_EVEN.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>冠亚小单</el-col>
      <el-col>
        <el-input v-model="oddData.GUAN_YA_SMALL_ODD.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "guanyahe-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.GUAN_YA_HE_15
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
        GUAN_YA_HE_15: {
          betType: "GUAN_YA_HE_15",
          betValue: "15",
          color: "",
          id: "3958",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_14: {
          betType: "GUAN_YA_HE_14",
          betValue: "14",
          color: "",
          id: "3957",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_13: {
          betType: "GUAN_YA_HE_13",
          betValue: "13",
          color: "",
          id: "3956",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_12: {
          betType: "GUAN_YA_HE_12",
          betValue: "12",
          color: "",
          id: "3955",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_19: {
          betType: "GUAN_YA_HE_19",
          betValue: "19",
          color: "",
          id: "3962",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_18: {
          betType: "GUAN_YA_HE_18",
          betValue: "18",
          color: "",
          id: "3961",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_17: {
          betType: "GUAN_YA_HE_17",
          betValue: "17",
          color: "",
          id: "3960",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_16: {
          betType: "GUAN_YA_HE_16",
          betValue: "16",
          color: "",
          id: "3959",
          new: false,
          odds: ''
        },
        GUAN_YA_SMALL_ODD: {
          betType: "GUAN_YA_SMALL_ODD",
          betValue: "冠亚小单",
          color: "",
          id: "3965",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_11: {
          betType: "GUAN_YA_HE_11",
          betValue: "11",
          color: "",
          id: "3954",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_10: {
          betType: "GUAN_YA_HE_10",
          betValue: "10",
          color: "",
          id: "3953",
          new: false,
          odds: ''
        },
        GUAN_YA_BIG: {
          betType: "GUAN_YA_BIG",
          betValue: "冠亚大",
          color: "",
          id: "3967",
          new: false,
          odds: ''
        },
        GUAN_YA_EVEN: {
          betType: "GUAN_YA_EVEN",
          betValue: "冠亚双",
          color: "",
          id: "3970",
          new: false,
          odds: ''
        },
        GUAN_YA_BIG_ODD: {
          betType: "GUAN_YA_BIG_ODD",
          betValue: "冠亚大单",
          color: "",
          id: "3963",
          new: false,
          odds: ''
        },
        GUAN_YA_ODD: {
          betType: "GUAN_YA_ODD",
          betValue: "冠亚单",
          color: "",
          id: "3969",
          new: false,
          odds: ''
        },
        GUAN_YA_SMALL: {
          betType: "GUAN_YA_SMALL",
          betValue: "冠亚小",
          color: "",
          id: "3968",
          new: false,
          odds: ''
        },
        GUAN_YA_SMALL_EVEN: {
          betType: "GUAN_YA_SMALL_EVEN",
          betValue: "冠亚小双",
          color: "",
          id: "3966",
          new: false,
          odds: ''
        },
        GUAN_YA_BIG_EVEN: {
          betType: "GUAN_YA_BIG_EVEN",
          betValue: "冠亚大双",
          color: "",
          id: "3964",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_4: {
          betType: "GUAN_YA_HE_4",
          betValue: "4",
          color: "",
          id: "3947",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_3: {
          betType: "GUAN_YA_HE_3",
          betValue: "3",
          color: "",
          id: "3946",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_6: {
          betType: "GUAN_YA_HE_6",
          betValue: "6",
          color: "",
          id: "3949",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_5: {
          betType: "GUAN_YA_HE_5",
          betValue: "5",
          color: "",
          id: "3948",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_8: {
          betType: "GUAN_YA_HE_8",
          betValue: "8",
          color: "",
          id: "3951",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_7: {
          betType: "GUAN_YA_HE_7",
          betValue: "7",
          color: "",
          id: "3950",
          new: false,
          odds: ''
        },
        GUAN_YA_HE_9: {
          betType: "GUAN_YA_HE_9",
          betValue: "9",
          color: "",
          id: "3952",
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




