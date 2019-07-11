<template>
  <div class="qima-template odd-content-box">
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
      <el-col>单0</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_ODD_0'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>单1</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_ODD_1'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>单2</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_ODD_2'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>单3</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_ODD_3'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>单4</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_ODD_4'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>单5</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_ODD_5'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>单6</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_ODD_6'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>单7</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_ODD_7'].odds" :disabled="true"></el-input>
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
      <el-col>双0</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_EVEN_0'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>双1</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_EVEN_1'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>双2</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_EVEN_2'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>双3</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_EVEN_3'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>双4</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_EVEN_4'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>双5</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_EVEN_5'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>双6</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_EVEN_6'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>双7</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_EVEN_7'].odds" :disabled="true"></el-input>
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
      <el-col>大0</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_BIG_0'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>大1</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_BIG_1'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>大2</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_BIG_2'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>大3</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_BIG_3'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>大4</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_BIG_4'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>大5</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_BIG_5'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>大6</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_BIG_6'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>大7</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_BIG_7'].odds" :disabled="true"></el-input>
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
      <el-col>小0</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_SMALL_0'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>小1</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_SMALL_1'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>小2</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_SMALL_2'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>小3</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_SMALL_3'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>小4</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_SMALL_4'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>小5</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_SMALL_5'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>小6</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_SMALL_6'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>小7</el-col>
      <el-col>
        <el-input v-model="oddData['QIMA_SMALL_7'].odds" :disabled="true"></el-input>
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
  name: "qima-template",
  computed: {
    ...mapState({
      wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
    }),
    oddData: {
      get() {
        if (
          this.$store.state.ag_userdefine_odd.odd_detail_data &&
          this.$store.state.ag_userdefine_odd.odd_detail_data.QIMA_SMALL_7
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
        QIMA_BIG_0: {
          betType: "QIMA_BIG_0",
          betValue: "大0",
          color: "",
          id: "558",
          new: false,
          odds: ""
        },
        QIMA_BIG_1: {
          betType: "QIMA_BIG_1",
          betValue: "大1",
          color: "",
          id: "559",
          new: false,
          odds: ""
        },
        QIMA_BIG_2: {
          betType: "QIMA_BIG_2",
          betValue: "大2",
          color: "",
          id: "560",
          new: false,
          odds: ""
        },
        QIMA_BIG_3: {
          betType: "QIMA_BIG_3",
          betValue: "大3",
          color: "",
          id: "561",
          new: false,
          odds: ""
        },
        QIMA_BIG_4: {
          betType: "QIMA_BIG_4",
          betValue: "大4",
          color: "",
          id: "562",
          new: false,
          odds: ""
        },
        QIMA_BIG_5: {
          betType: "QIMA_BIG_5",
          betValue: "大5",
          color: "",
          id: "563",
          new: false,
          odds: ""
        },
        QIMA_BIG_6: {
          betType: "QIMA_BIG_6",
          betValue: "大6",
          color: "",
          id: "564",
          new: false,
          odds: ""
        },
        QIMA_BIG_7: {
          betType: "QIMA_BIG_7",
          betValue: "大7",
          color: "",
          id: "565",
          new: false,
          odds: ""
        },
        QIMA_EVEN_0: {
          betType: "QIMA_EVEN_0",
          betValue: "双0",
          color: "",
          id: "550",
          new: false,
          odds: ""
        },
        QIMA_EVEN_1: {
          betType: "QIMA_EVEN_1",
          betValue: "双1",
          color: "",
          id: "551",
          new: false,
          odds: ""
        },
        QIMA_EVEN_2: {
          betType: "QIMA_EVEN_2",
          betValue: "双2",
          color: "",
          id: "552",
          new: false,
          odds: ""
        },
        QIMA_EVEN_3: {
          betType: "QIMA_EVEN_3",
          betValue: "双3",
          color: "",
          id: "553",
          new: false,
          odds: ""
        },
        QIMA_EVEN_4: {
          betType: "QIMA_EVEN_4",
          betValue: "双4",
          color: "",
          id: "554",
          new: false,
          odds: ""
        },
        QIMA_EVEN_5: {
          betType: "QIMA_EVEN_5",
          betValue: "双5",
          color: "",
          id: "555",
          new: false,
          odds: ""
        },
        QIMA_EVEN_6: {
          betType: "QIMA_EVEN_6",
          betValue: "双6",
          color: "",
          id: "556",
          new: false,
          odds: ""
        },
        QIMA_EVEN_7: {
          betType: "QIMA_EVEN_7",
          betValue: "双7",
          color: "",
          id: "557",
          new: false,
          odds: ""
        },
        QIMA_ODD_0: {
          betType: "QIMA_ODD_0",
          betValue: "单0",
          color: "",
          id: "542",
          new: false,
          odds: ""
        },
        QIMA_ODD_1: {
          betType: "QIMA_ODD_1",
          betValue: "单1",
          color: "",
          id: "543",
          new: false,
          odds: ""
        },
        QIMA_ODD_2: {
          betType: "QIMA_ODD_2",
          betValue: "单2",
          color: "",
          id: "544",
          new: false,
          odds: ""
        },
        QIMA_ODD_3: {
          betType: "QIMA_ODD_3",
          betValue: "单3",
          color: "",
          id: "545",
          new: false,
          odds: ""
        },
        QIMA_ODD_4: {
          betType: "QIMA_ODD_4",
          betValue: "单4",
          color: "",
          id: "546",
          new: false,
          odds: ""
        },
        QIMA_ODD_5: {
          betType: "QIMA_ODD_5",
          betValue: "单5",
          color: "",
          id: "547",
          new: false,
          odds: ""
        },
        QIMA_ODD_6: {
          betType: "QIMA_ODD_6",
          betValue: "单6",
          color: "",
          id: "548",
          new: false,
          odds: ""
        },
        QIMA_ODD_7: {
          betType: "QIMA_ODD_7",
          betValue: "单7",
          color: "",
          id: "549",
          new: false,
          odds: ""
        },
        QIMA_SMALL_0: {
          betType: "QIMA_SMALL_0",
          betValue: "小0",
          color: "",
          id: "566",
          new: false,
          odds: ""
        },
        QIMA_SMALL_1: {
          betType: "QIMA_SMALL_1",
          betValue: "小1",
          color: "",
          id: "567",
          new: false,
          odds: ""
        },
        QIMA_SMALL_2: {
          betType: "QIMA_SMALL_2",
          betValue: "小2",
          color: "",
          id: "568",
          new: false,
          odds: ""
        },
        QIMA_SMALL_3: {
          betType: "QIMA_SMALL_3",
          betValue: "小3",
          color: "",
          id: "569",
          new: false,
          odds: ""
        },
        QIMA_SMALL_4: {
          betType: "QIMA_SMALL_4",
          betValue: "小4",
          color: "",
          id: "570",
          new: false,
          odds: ""
        },
        QIMA_SMALL_5: {
          betType: "QIMA_SMALL_5",
          betValue: "小5",
          color: "",
          id: "571",
          new: false,
          odds: ""
        },
        QIMA_SMALL_6: {
          betType: "QIMA_SMALL_6",
          betValue: "小6",
          color: "",
          id: "572",
          new: false,
          odds: ""
        },
        QIMA_SMALL_7: {
          betType: "QIMA_SMALL_7",
          betValue: "小7",
          color: "",
          id: "573",
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
