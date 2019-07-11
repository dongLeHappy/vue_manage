<template>
  <div class="changpai-template odd-content-box">
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
      <el-col>12</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_1_2'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>13</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_1_3'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>14</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_1_4'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>15</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_1_5'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>16</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_1_6'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>23</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_2_3'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>24</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_2_4'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>25</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_2_5'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>26</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_2_6'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>34</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_3_4'].odds" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="odd-content">
      <el-col>35</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_3_5'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>36</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_3_6'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>45</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_4_5'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>46</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_4_6'].odds" :disabled="true"></el-input>
      </el-col>
      <el-col>56</el-col>
      <el-col>
        <el-input v-model="oddData['SPEC_5_6'].odds" :disabled="true"></el-input>
      </el-col>
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
          this.$store.state.ag_userdefine_odd.odd_detail_data.SPEC_1_2
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
        SPEC_5_6: {
          betType: "SPEC_5_6",
          betValue: "56",
          color: "",
          id: "4014",
          new: false,
          odds: ''
        },
        SPEC_4_5: {
          betType: "SPEC_4_5",
          betValue: "45",
          color: "",
          id: "4012",
          new: false,
          odds: ''
        },
        SPEC_3_6: {
          betType: "SPEC_3_6",
          betValue: "36",
          color: "",
          id: "4011",
          new: false,
          odds: ''
        },
        SPEC_4_6: {
          betType: "SPEC_4_6",
          betValue: "46",
          color: "",
          id: "4013",
          new: false,
          odds: ''
        },
        SPEC_3_4: {
          betType: "SPEC_3_4",
          betValue: "34",
          color: "",
          id: "4009",
          new: false,
          odds: ''
        },
        SPEC_2_5: {
          betType: "SPEC_2_5",
          betValue: "25",
          color: "",
          id: "4007",
          new: false,
          odds: ''
        },
        SPEC_1_6: {
          betType: "SPEC_1_6",
          betValue: "16",
          color: "",
          id: "4004",
          new: false,
          odds: ''
        },
        SPEC_3_5: {
          betType: "SPEC_3_5",
          betValue: "35",
          color: "",
          id: "4010",
          new: false,
          odds: ''
        },
        SPEC_2_6: {
          betType: "SPEC_2_6",
          betValue: "26",
          color: "",
          id: "4008",
          new: false,
          odds: ''
        },
        SPEC_2_3: {
          betType: "SPEC_2_3",
          betValue: "23",
          color: "",
          id: "4005",
          new: false,
          odds: ''
        },
        SPEC_1_4: {
          betType: "SPEC_1_4",
          betValue: "14",
          color: "",
          id: "4002",
          new: false,
          odds: ''
        },
        SPEC_2_4: {
          betType: "SPEC_2_4",
          betValue: "24",
          color: "",
          id: "4006",
          new: false,
          odds: ''
        },
        SPEC_1_5: {
          betType: "SPEC_1_5",
          betValue: "15",
          color: "",
          id: "4003",
          new: false,
          odds: ''
        },
        SPEC_1_2: {
          betType: "SPEC_1_2",
          betValue: "12",
          color: "",
          id: "4000",
          new: false,
          odds: ''
        },
        SPEC_1_3: {
          betType: "SPEC_1_3",
          betValue: "13",
          color: "",
          id: "4001",
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
