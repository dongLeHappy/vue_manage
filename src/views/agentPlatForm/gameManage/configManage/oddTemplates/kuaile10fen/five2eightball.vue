<template>
  <div class="five2eight-template odd-content-box">
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
      <el-col>
        <span>1</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_1'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>2</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_2'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>3</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_3'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>4</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_4'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>5</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_5'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>
        <span>6</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_6'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>7</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_7'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>8</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_8'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>9</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_9'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>10</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_10'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>
        <span>11</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_11'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>12</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_12'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>13</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_13'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>14</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_14'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>15</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_15'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>
        <span>16</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_16'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>17</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_17'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span>18</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_18'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span class="blue-ball">19</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_19'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>
        <span class="blue-ball">20</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_20'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>大</el-col>
      <el-col>
        <el-input v-model="oddData['BIG'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>小</el-col>
      <el-col>
        <el-input v-model="oddData['SMALL'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>单</el-col>
      <el-col>
        <el-input v-model="oddData['ODD'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>双</el-col>
      <el-col>
        <el-input v-model="oddData['EVEN'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>尾大</el-col>
      <el-col>
        <el-input v-model="oddData['TAIL_BIG'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>尾小</el-col>
      <el-col>
        <el-input v-model="oddData['TAIL_SMALL'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>合单</el-col>
      <el-col>
        <el-input v-model="oddData['SUM_ODD'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>合双</el-col>
      <el-col>
        <el-input v-model="oddData['SUM_EVEN'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>东</el-col>
      <el-col>
        <el-input v-model="oddData['EAST'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>西</el-col>
      <el-col>
        <el-input v-model="oddData['WEST'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>南</el-col>
      <el-col>
        <el-input v-model="oddData['SOUTH'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>北</el-col>
      <el-col>
        <el-input v-model="oddData['NORTH'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>中</el-col>
      <el-col>
        <el-input v-model="oddData['ZHONG'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>发</el-col>
      <el-col>
        <el-input v-model="oddData['FA'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>白</el-col>
      <el-col>
        <el-input v-model="oddData['BAI'].odds" :disabled="true"></el-input>
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
  name: "five2eight-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.ZHONG
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
        WEST: {
          betType: "WEST",
          betValue: "西",
          color: "",
          id: "1989",
          new: false,
          odds: ""
        },
        ZHONG: {
          betType: "ZHONG",
          betValue: "中",
          color: "",
          id: "1984",
          new: false,
          odds: ""
        },
        NO_20: {
          betType: "NO_20",
          betValue: "20",
          color: "",
          id: "1975",
          new: false,
          odds: ""
        },
        ODD: {
          betType: "ODD",
          betValue: "单",
          color: "",
          id: "1978",
          new: false,
          odds: ""
        },
        NO_13: {
          betType: "NO_13",
          betValue: "13",
          color: "",
          id: "1968",
          new: false,
          odds: ""
        },
        NO_2: {
          betType: "NO_2",
          betValue: "2",
          color: "",
          id: "1957",
          new: false,
          odds: ""
        },
        NO_14: {
          betType: "NO_14",
          betValue: "14",
          color: "",
          id: "1969",
          new: false,
          odds: ""
        },
        NO_3: {
          betType: "NO_3",
          betValue: "3",
          color: "",
          id: "1958",
          new: false,
          odds: ""
        },
        SMALL: {
          betType: "SMALL",
          betValue: "小",
          color: "",
          id: "1977",
          new: false,
          odds: ""
        },
        NO_15: {
          betType: "NO_15",
          betValue: "15",
          color: "",
          id: "1970",
          new: false,
          odds: ""
        },
        NO_4: {
          betType: "NO_4",
          betValue: "4",
          color: "",
          id: "1959",
          new: false,
          odds: ""
        },
        NO_16: {
          betType: "NO_16",
          betValue: "16",
          color: "",
          id: "1971",
          new: false,
          odds: ""
        },
        NO_5: {
          betType: "NO_5",
          betValue: "5",
          color: "",
          id: "1960",
          new: false,
          odds: ""
        },
        NO_17: {
          betType: "NO_17",
          betValue: "17",
          color: "",
          id: "1972",
          new: false,
          odds: ""
        },
        NORTH: {
          betType: "NORTH",
          betValue: "北",
          color: "",
          id: "1990",
          new: false,
          odds: ""
        },
        NO_18: {
          betType: "NO_18",
          betValue: "18",
          color: "",
          id: "1973",
          new: false,
          odds: ""
        },
        NO_19: {
          betType: "NO_19",
          betValue: "19",
          color: "",
          id: "1974",
          new: false,
          odds: ""
        },
        NO_1: {
          betType: "NO_1",
          betValue: "1",
          color: "",
          id: "1956",
          new: false,
          odds: ""
        },
        SOUTH: {
          betType: "SOUTH",
          betValue: "南",
          color: "",
          id: "1988",
          new: false,
          odds: ""
        },
        NO_6: {
          betType: "NO_6",
          betValue: "6",
          color: "",
          id: "1961",
          new: false,
          odds: ""
        },
        EAST: {
          betType: "EAST",
          betValue: "东",
          color: "",
          id: "1987",
          new: false,
          odds: ""
        },
        SUM_EVEN: {
          betType: "SUM_EVEN",
          betValue: "合双",
          color: "",
          id: "1983",
          new: false,
          odds: ""
        },
        NO_7: {
          betType: "NO_7",
          betValue: "7",
          color: "",
          id: "1962",
          new: false,
          odds: ""
        },
        NO_8: {
          betType: "NO_8",
          betValue: "8",
          color: "",
          id: "1963",
          new: false,
          odds: ""
        },
        NO_9: {
          betType: "NO_9",
          betValue: "9",
          color: "",
          id: "1964",
          new: false,
          odds: ""
        },
        SUM_ODD: {
          betType: "SUM_ODD",
          betValue: "合单",
          color: "",
          id: "1982",
          new: false,
          odds: ""
        },
        BIG: {
          betType: "BIG",
          betValue: "大",
          color: "",
          id: "1976",
          new: false,
          odds: ""
        },
        TAIL_SMALL: {
          betType: "TAIL_SMALL",
          betValue: "尾小",
          color: "",
          id: "1981",
          new: false,
          odds: ""
        },
        BAI: {
          betType: "BAI",
          betValue: "白",
          color: "",
          id: "1986",
          new: false,
          odds: ""
        },
        NO_10: {
          betType: "NO_10",
          betValue: "10",
          color: "",
          id: "1965",
          new: false,
          odds: ""
        },
        NO_11: {
          betType: "NO_11",
          betValue: "11",
          color: "",
          id: "1966",
          new: false,
          odds: ""
        },
        NO_12: {
          betType: "NO_12",
          betValue: "12",
          color: "",
          id: "1967",
          new: false,
          odds: ""
        },
        TAIL_BIG: {
          betType: "TAIL_BIG",
          betValue: "尾大",
          color: "",
          id: "1980",
          new: false,
          odds: ""
        },
        EVEN: {
          betType: "EVEN",
          betValue: "双",
          color: "",
          id: "1979",
          new: false,
          odds: ""
        },
        FA: {
          betType: "FA",
          betValue: "发",
          color: "",
          id: "1985",
          new: false,
          odds: ""
        }
      }
    };
  }
};
</script>
<style lang="scss">
@import "@/styles/oddContent.scss";
</style>
