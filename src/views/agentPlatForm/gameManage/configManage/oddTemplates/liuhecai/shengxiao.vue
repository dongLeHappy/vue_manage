<template>
  <div class="shengxiao-template odd-content-box">
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
      <el-col>号码</el-col>
      <el-col>赔率</el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>鼠</el-col>
      <el-col>
        <el-input v-model="oddData['SHU'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>牛</el-col>
      <el-col>
        <el-input v-model="oddData['NIU'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>虎</el-col>
      <el-col>
        <el-input v-model="oddData['HU'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>兔</el-col>
      <el-col>
        <el-input v-model="oddData['TU'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>龙</el-col>
      <el-col>
        <el-input v-model="oddData['LONG'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>蛇</el-col>
      <el-col>
        <el-input v-model="oddData['SHE'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>马</el-col>
      <el-col>
        <el-input v-model="oddData['MA'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>羊</el-col>
      <el-col>
        <el-input v-model="oddData['YANG'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>猴</el-col>
      <el-col>
        <el-input v-model="oddData['HOU'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>鸡</el-col>
      <el-col>
        <el-input v-model="oddData['JI'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>狗</el-col>
      <el-col>
        <el-input v-model="oddData['GOU'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>猪</el-col>
      <el-col>
        <el-input v-model="oddData['ZHU'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "shengxiao-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.ZHU
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
        GOU: {
          betType: "GOU",
          betValue: "狗",
          color: "",
          id: "103",
          new: false,
          odds: ""
        },
        HOU: {
          betType: "HOU",
          betValue: "猴",
          color: "",
          id: "101",
          new: false,
          odds: ""
        },
        HU: {
          betType: "HU",
          betValue: "虎",
          color: "",
          id: "95",
          new: false,
          odds: ""
        },
        JI: {
          betType: "JI",
          betValue: "鸡",
          color: "",
          id: "102",
          new: false,
          odds: ""
        },
        LONG: {
          betType: "LONG",
          betValue: "龙",
          color: "",
          id: "97",
          new: false,
          odds: ""
        },
        MA: {
          betType: "MA",
          betValue: "马",
          color: "",
          id: "99",
          new: false,
          odds: ""
        },
        NIU: {
          betType: "NIU",
          betValue: "牛",
          color: "",
          id: "94",
          new: false,
          odds: ""
        },
        SHE: {
          betType: "SHE",
          betValue: "蛇",
          color: "",
          id: "98",
          new: false,
          odds: ""
        },
        SHU: {
          betType: "SHU",
          betValue: "鼠",
          color: "",
          id: "93",
          new: false,
          odds: ""
        },
        TU: {
          betType: "TU",
          betValue: "免",
          color: "",
          id: "96",
          new: false,
          odds: ""
        },
        YANG: {
          betType: "YANG",
          betValue: "羊",
          color: "",
          id: "100",
          new: false,
          odds: ""
        },
        ZHU: {
          betType: "ZHU",
          betValue: "猪",
          color: "",
          id: "104",
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
