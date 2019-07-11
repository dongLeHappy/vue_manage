<template>
  <div class="one2five-template odd-content-box">
    <h2>{{wanfaName}}</h2>
    <!-- 1-5球类模板 -->
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
        <span>0</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_0'].odds" :disabled="true"></el-input>
      </el-col>
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
    </el-row>
    <el-row class="odd-content">
      <el-col>
        <span>5</span>
      </el-col>
      <el-col>
        <el-input v-model="oddData['NO_5'].odds" :disabled="true"></el-input>
      </el-col>
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
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "one2five-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (this.$store.state.ag_userdefine_odd.odd_detail_data && this.$store.state.ag_userdefine_odd.odd_detail_data.EVEN) {
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
          id: "794",
          new: false,
          odds: ''
        },
        ODD: {
          betType: "ODD",
          betValue: "单",
          color: "",
          id: "796",
          new: false,
          odds: ''
        },
        NO_2: {
          betType: "NO_2",
          betValue: "2",
          color: "",
          id: "786",
          new: false,
          odds: ''
        },
        NO_3: {
          betType: "NO_3",
          betValue: "3",
          color: "",
          id: "787",
          new: false,
          odds: ''
        },
        SMALL: {
          betType: "SMALL",
          betValue: "小",
          color: "",
          id: "795",
          new: false,
          odds: ''
        },
        NO_4: {
          betType: "NO_4",
          betValue: "4",
          color: "",
          id: "788",
          new: false,
          odds: ''
        },
        NO_5: {
          betType: "NO_5",
          betValue: "5",
          color: "",
          id: "789",
          new: false,
          odds: ''
        },
        NO_0: {
          betType: "NO_0",
          betValue: "0",
          color: "",
          id: "784",
          new: false,
          odds: ''
        },
        NO_1: {
          betType: "NO_1",
          betValue: "1",
          color: "",
          id: "785",
          new: false,
          odds: ''
        },
        EVEN: {
          betType: "EVEN",
          betValue: "双",
          color: "",
          id: "797",
          new: false,
          odds: ''
        },
        NO_6: {
          betType: "NO_6",
          betValue: "6",
          color: "",
          id: "790",
          new: false,
          odds: ''
        },
        NO_7: {
          betType: "NO_7",
          betValue: "7",
          color: "",
          id: "791",
          new: false,
          odds: ''
        },
        NO_8: {
          betType: "NO_8",
          betValue: "8",
          color: "",
          id: "792",
          new: false,
          odds: ''
        },
        NO_9: {
          betType: "NO_9",
          betValue: "9",
          color: "",
          id: "793",
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


