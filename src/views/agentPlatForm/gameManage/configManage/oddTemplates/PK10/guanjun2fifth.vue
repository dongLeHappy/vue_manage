<template>
  <div class="guanjun2fifth-complate odd-content-box">
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
      <el-col>1</el-col>
      <el-col>
        <el-input v-model="oddData.NO_1.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>2</el-col>
      <el-col>
        <el-input v-model="oddData.NO_2.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>3</el-col>
      <el-col>
        <el-input v-model="oddData.NO_3.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>4</el-col>
      <el-col>
        <el-input v-model="oddData.NO_4.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>5</el-col>
      <el-col>
        <el-input v-model="oddData.NO_5.odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>6</el-col>
      <el-col>
        <el-input v-model="oddData.NO_6.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>7</el-col>
      <el-col>
        <el-input v-model="oddData.NO_7.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>8</el-col>
      <el-col>
        <el-input v-model="oddData.NO_8.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>9</el-col>
      <el-col>
        <el-input v-model="oddData.NO_9.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>10</el-col>
      <el-col>
        <el-input v-model="oddData.NO_10.odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>大</el-col>
      <el-col>
        <el-input v-model="oddData.BIG.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>小</el-col>
      <el-col>
        <el-input v-model="oddData.SMALL.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>单</el-col>
      <el-col>
        <el-input v-model="oddData.ODD.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>双</el-col>
      <el-col>
        <el-input v-model="oddData.EVEN.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>-</el-col>
      <el-col>-</el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>龙</el-col>
      <el-col>
        <el-input v-model="oddData.DRAGON.odds" :disabled="true"></el-input>
      </el-col>
      <el-col>虎</el-col>
      <el-col>
        <el-input v-model="oddData.TIGER.odds" :disabled="true"></el-input>
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
  name: "guanjun2fifth-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.SMALL
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
        BIG: {
          betType: "BIG",
          betValue: "大",
          color: "",
          id: "3854",
          new: false,
          odds: ''
        },
        NO_10: {
          betType: "NO_10",
          betValue: "10",
          color: "",
          id: "3853",
          new: false,
          odds: ''
        },
        ODD: {
          betType: "ODD",
          betValue: "单",
          color: "",
          id: "3856",
          new: false,
          odds: ''
        },
        NO_2: {
          betType: "NO_2",
          betValue: "2",
          color: "",
          id: "3845",
          new: false,
          odds: ''
        },
        NO_3: {
          betType: "NO_3",
          betValue: "3",
          color: "",
          id: "3846",
          new: false,
          odds: ''
        },
        SMALL: {
          betType: "SMALL",
          betValue: "小",
          color: "",
          id: "3855",
          new: false,
          odds: ''
        },
        NO_4: {
          betType: "NO_4",
          betValue: "4",
          color: "",
          id: "3847",
          new: false,
          odds: ''
        },
        NO_5: {
          betType: "NO_5",
          betValue: "5",
          color: "",
          id: "3848",
          new: false,
          odds: ''
        },
        NO_1: {
          betType: "NO_1",
          betValue: "1",
          color: "",
          id: "3844",
          new: false,
          odds: ''
        },
        DRAGON: {
          betType: "DRAGON",
          betValue: "龙",
          color: "",
          id: "3858",
          new: false,
          odds: ''
        },
        EVEN: {
          betType: "EVEN",
          betValue: "双",
          color: "",
          id: "3857",
          new: false,
          odds: ''
        },
        NO_6: {
          betType: "NO_6",
          betValue: "6",
          color: "",
          id: "3849",
          new: false,
          odds: ''
        },
        NO_7: {
          betType: "NO_7",
          betValue: "7",
          color: "",
          id: "3850",
          new: false,
          odds: ''
        },
        TIGER: {
          betType: "TIGER",
          betValue: "虎",
          color: "",
          id: "3859",
          new: false,
          odds: ''
        },
        NO_8: {
          betType: "NO_8",
          betValue: "8",
          color: "",
          id: "3851",
          new: false,
          odds: ''
        },
        NO_9: {
          betType: "NO_9",
          betValue: "9",
          color: "",
          id: "3852",
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




