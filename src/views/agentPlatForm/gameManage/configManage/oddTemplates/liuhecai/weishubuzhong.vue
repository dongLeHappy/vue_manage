<template>
  <div class="weishubuzhong-template odd-content-box">
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
      <el-col>0尾</el-col>
      <el-col>
        <el-input v-model="oddData['WEISHULIAN_0'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>1尾</el-col>
      <el-col>
        <el-input v-model="oddData['WEISHULIAN_1'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>2尾</el-col>
      <el-col>
        <el-input v-model="oddData['WEISHULIAN_2'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>3尾</el-col>
      <el-col>
        <el-input v-model="oddData['WEISHULIAN_3'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>4尾</el-col>
      <el-col>
        <el-input v-model="oddData['WEISHULIAN_4'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>5尾</el-col>
      <el-col>
        <el-input v-model="oddData['WEISHULIAN_5'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>6尾</el-col>
      <el-col>
        <el-input v-model="oddData['WEISHULIAN_6'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>7尾</el-col>
      <el-col>
        <el-input v-model="oddData['WEISHULIAN_7'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>8尾</el-col>
      <el-col>
        <el-input v-model="oddData['WEISHULIAN_8'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>9尾</el-col>
      <el-col>
        <el-input v-model="oddData['WEISHULIAN_9'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "weishubuzhong-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.WEISHULIAN_8
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
        WEISHULIAN_8: {
          betType: "WEISHULIAN_8",
          betValue: "8尾",
          color: "",
          id: "616",
          new: false,
          odds: ''
        },
        WEISHULIAN_9: {
          betType: "WEISHULIAN_9",
          betValue: "9尾",
          color: "",
          id: "617",
          new: false,
          odds: ''
        },
        WEISHULIAN_6: {
          betType: "WEISHULIAN_6",
          betValue: "6尾",
          color: "",
          id: "614",
          new: false,
          odds: ''
        },
        WEISHULIAN_7: {
          betType: "WEISHULIAN_7",
          betValue: "7尾",
          color: "",
          id: "615",
          new: false,
          odds: ''
        },
        WEISHULIAN_4: {
          betType: "WEISHULIAN_4",
          betValue: "4尾",
          color: "",
          id: "612",
          new: false,
          odds: ''
        },
        WEISHULIAN_5: {
          betType: "WEISHULIAN_5",
          betValue: "5尾",
          color: "",
          id: "613",
          new: false,
          odds: ''
        },
        WEISHULIAN_2: {
          betType: "WEISHULIAN_2",
          betValue: "2尾",
          color: "",
          id: "610",
          new: false,
          odds: ''
        },
        WEISHULIAN_3: {
          betType: "WEISHULIAN_3",
          betValue: "3尾",
          color: "",
          id: "611",
          new: false,
          odds: ''
        },
        WEISHULIAN_0: {
          betType: "WEISHULIAN_0",
          betValue: "0尾",
          color: "",
          id: "608",
          new: false,
          odds: ''
        },
        WEISHULIAN_1: {
          betType: "WEISHULIAN_1",
          betValue: "1尾",
          color: "",
          id: "609",
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
