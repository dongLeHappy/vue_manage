<template>
  <!-- 11选5赔率设置 -->
  <div class="odd-pk10-box odd-common-table-box">
    <div class="odd-left-box">
      <el-radio-group v-model="currentWanfa" @change="handleRadioChange" v-loading="wanfaLoading">
        <el-radio-button v-for="item in wanfa_list" :key="item.id" :label="item">{{item.betOnValue}}</el-radio-button>
      </el-radio-group>
    </div>
    <div class="odd-right-box">
      <!-- 引入对应赔率模板 -->
      <guanjun2fifthTemplate v-if="isbeijingpk10Template"></guanjun2fifthTemplate>
      <six2tenTemplate v-if="issix2tenTemplate"></six2tenTemplate>
      <guanyaheTemplate v-if="isguanyaheTemplate"></guanyaheTemplate>
    </div>
  </div>
</template>
<script>
import { findPlayRuleList } from "@/api/agentPlatForm/systemManage/ag_sm_userdefine_odd"; // 查询赔率接口
import { mapState } from "vuex";
import guanjun2fifthTemplate from "../oddTemplates/PK10/guanjun2fifth";
import six2tenTemplate from "../oddTemplates/PK10/six2ten";
import guanyaheTemplate from "../oddTemplates/PK10/guanyahe";
export default {
  name: "odd-pk10",
  data() {
    return {
      underdefineOddData: [], // 自定义赔率信息
      currentWanfa: "", // 当前玩法
      wanfaLoading: false,

      isbeijingpk10Template: true,
      issix2tenTemplate: false,
      isguanyaheTemplate: false
    };
  },
  components: {
    guanjun2fifthTemplate,
    six2tenTemplate,
    guanyaheTemplate
  },
  computed: {
    ...mapState({
      current_choose_lotteryId: state =>
        state.ag_userdefine_odd.current_choose_lotteryId, // 当前二级彩种页面
      wanfa_list: state => state.ag_userdefine_odd.wanfa_list, // 玩法列表
      oddData: state => state.ag_userdefine_odd.odd_detail_data // 赔率详情
    })
  },
  methods: {
    handleRadioChange(item) {
      // 监听当前选中的玩法

      this.$store.commit("SET_CURRENT_WANFA", item.betOnValue);
      let wanfaType = item.betOnValue;

      findPlayRuleList({
        lotteryOddsVerId: this.current_choose_lotteryId,
        playRuleId: item.playRuleId
      }).then(res => {
        // 获取玩法对应赔率
        let resData = res.data;
        if (resData.success == 1) {
          this.$store.commit("SET_ODD_DETAIL_LIST", resData.content);
          if (
            wanfaType == "冠军" ||
            wanfaType == "亚军" ||
            wanfaType == "第三名" ||
            wanfaType == "第四名" ||
            wanfaType == "第五名"
          ) {
            this.isbeijingpk10Template = true;
            this.issix2tenTemplate = false;
            this.isguanyaheTemplate = false;
          } else if (
            wanfaType == "第六名" ||
            wanfaType == "第七名" ||
            wanfaType == "第八名" ||
            wanfaType == "第九名" ||
            wanfaType == "第十名"
          ) {
            this.issix2tenTemplate = true;
            this.isbeijingpk10Template = false;
            this.isguanyaheTemplate = false;
          } else if (wanfaType == "冠亚和") {
            this.isguanyaheTemplate = true;
            this.isbeijingpk10Template = false;
            this.issix2tenTemplate = false;
          }
        } else {
          this.$message.error(resData.respMsg);
        }
      });
    }
  },
  created() {
    this.wanfaLoading = true;
    setTimeout(() => {
      this.wanfaLoading = false;
    }, 800);
  },
  watch: {
    current_choose_lotteryId(newval, oldval) {
      // 监听当前选中的玩法，注销上一个选中彩种对应的所有页面及赔率信息
      this.currentWanfa = '冠军'; // 重置上一个彩种页面选中的玩法
      this.isguanyaheTemplate = true;
      this.isbeijingpk10Template = false;
      this.issix2tenTemplate = false;
    }
  }
};
</script>
<style lang="scss">
@import "@/styles/secondLottery.scss";
</style>




