<template>
  <!-- 香港六合彩赔率设置 -->
  <div class="odd-fenfencai-box odd-common-table-box">
    <div class="odd-left-box">
      <el-radio-group v-model="currentWanfa" @change="handleRadioChange" v-loading="wanfaLoading">
        <el-radio-button v-for="item in wanfa_list" :key="item.id" :label="item">{{item.betOnValue}}</el-radio-button>
      </el-radio-group>
    </div>
    <div class="odd-right-box" >
      <!-- 引入对应赔率模板 -->
      <banbo v-if="isbanbo"></banbo>
      <qima v-if="isqima"></qima>
      <shengxiao v-if="isshengxiao"></shengxiao>
      <temaone2six v-if="istemaone2six"></temaone2six>
      <tematouwei v-if="istematouwei"></tematouwei>
      <weishu v-if="isweishu"></weishu>
      <weishubuzhong v-if="isweishubuzhong"></weishubuzhong>
      <wuxing v-if="iswuxing"></wuxing>
      <yixiao v-if="isyixiao"></yixiao>
      <yixiaobuzhong v-if="isyixiaobuzhong"></yixiaobuzhong>
      <zhengma v-if="iszhengma"></zhengma>
      <zonghe v-if="iszonghe"></zonghe>
    </div>
  </div>
</template>
<script>
import { findPlayRuleList } from "@/api/agentPlatForm/systemManage/ag_sm_userdefine_odd"; // 查询赔率接口
import { mapState } from "vuex";
import banbo from "../oddTemplates/liuhecai/banbo";
import qima from "../oddTemplates/liuhecai/qima";
import shengxiao from "../oddTemplates/liuhecai/shengxiao";
import temaone2six from "../oddTemplates/liuhecai/temaone2six";
import tematouwei from "../oddTemplates/liuhecai/tematouwei";
import weishu from "../oddTemplates/liuhecai/weishu";
import weishubuzhong from "../oddTemplates/liuhecai/weishubuzhong";
import wuxing from "../oddTemplates/liuhecai/wuxing";
import yixiao from "../oddTemplates/liuhecai/yixiao";
import yixiaobuzhong from "../oddTemplates/liuhecai/yixiaobuzhong";
import zhengma from "../oddTemplates/liuhecai/zhengma";
import zonghe from "../oddTemplates/liuhecai/zonghe";
export default {
  name: "odd-xianggaicai",
  data() {
    return {
      underdefineOddData: [], // 自定义赔率信息
      currentWanfa: '', // 当前玩法
      wanfaLoading: false, // 玩法列表加载loading
      
      isbanbo: false,
      isqima: false,
      isshengxiao: false,
      istemaone2six: true, // 默认显示特码玩法
      istematouwei: false,
      isweishu: false,
      isweishubuzhong: false,
      iswuxing: false,
      isyixiao: false,
      isyixiaobuzhong: false,
      iszhengma: false,
      iszonghe: false
    };
  },
  components: {
    banbo,
    qima,
    shengxiao,
    temaone2six,
    tematouwei,
    weishu,
    weishubuzhong,
    wuxing,
    yixiao,
    yixiaobuzhong,
    zhengma,
    zonghe
  },
  computed: {
    ...mapState({
      current_choose_lotteryId: state => state.ag_userdefine_odd.current_choose_lotteryId, // 当前选中的彩种id
      wanfa_list: state => state.ag_userdefine_odd.wanfa_list, // 玩法列表
      oddData: state => state.ag_userdefine_odd.odd_detail_data, // 赔率详情
      current_wanfa: state => state.ag_userdefine_odd.current_wanfa, // 当前玩法
    })
  },
  methods: {
    handleRadioChange(item) {  // 监听当前选中的玩法
      this.$store.commit('SET_CURRENT_WANFA', item.betOnValue)
      let wanfa_name = item.betOnValue;
      findPlayRuleList({lotteryOddsVerId: this.current_choose_lotteryId,playRuleId: item.playRuleId}).then(res => { // 获取玩法对应赔率
        let resData = res.data;
        if (resData.success == 1) {
          this.$store.commit('SET_ODD_DETAIL_LIST', resData.content)
          if (wanfa_name == "半波") {
            this.isbanbo = true;
            this.isqima = false;
            this.isshengxiao = false;
            this.istemaone2six = false;
            this.istematouwei = false;
            this.isweishu = false;
            this.isweishubuzhong = false;
            this.iswuxing = false;
            this.isyixiao = false;
            this.isyixiaobuzhong = false;
            this.iszhengma = false;
            this.iszonghe = false;
          } else if (wanfa_name == "七码") {
            this.isbanbo = false;
            this.isqima = true;
            this.isshengxiao = false;
            this.istemaone2six = false;
            this.istematouwei = false;
            this.isweishu = false;
            this.isweishubuzhong = false;
            this.iswuxing = false;
            this.isyixiao = false;
            this.isyixiaobuzhong = false;
            this.iszhengma = false;
            this.iszonghe = false;
          } else if (wanfa_name == "特码" || wanfa_name == "正1特" ||  wanfa_name == "正2特" || wanfa_name == "正3特" || wanfa_name == "正4特" || wanfa_name == "正5特" || wanfa_name == "正6特") {
            this.isbanbo = false;
            this.isqima = false;
            this.isshengxiao = false;
            this.istemaone2six = true;
            this.istematouwei = false;
            this.isweishu = false;
            this.isweishubuzhong = false;
            this.iswuxing = false;
            this.isyixiao = false;
            this.isyixiaobuzhong = false;
            this.iszhengma = false;
            this.iszonghe = false;
          } else if (wanfa_name == "特码头尾") {
            this.isbanbo = false;
            this.isqima = false;
            this.isshengxiao = false;
            this.istemaone2six = false;
            this.istematouwei = true;
            this.isweishu = false;
            this.isweishubuzhong = false;
            this.iswuxing = false;
            this.isyixiao = false;
            this.isyixiaobuzhong = false;
            this.iszhengma = false;
            this.iszonghe = false;
          } else if (wanfa_name == "五行") {
            this.isbanbo = false;
            this.isqima = false;
            this.isshengxiao = false;
            this.istemaone2six = false;
            this.istematouwei = false;
            this.isweishu = false;
            this.isweishubuzhong = false;
            this.iswuxing = true;
            this.isyixiao = false;
            this.isyixiaobuzhong = false;
            this.iszhengma = false;
            this.iszonghe = false;
          } else if (wanfa_name == "特肖" || wanfa_name == "二肖" || wanfa_name == "三肖") {
            this.isbanbo = false;
            this.isqima = false;
            this.isshengxiao = true;
            this.istemaone2six = false;
            this.istematouwei = false;
            this.isweishu = false;
            this.isweishubuzhong = false;
            this.iswuxing = false;
            this.isyixiao = false;
            this.isyixiaobuzhong = false;
            this.iszhengma = false;
            this.iszonghe = false;
          } else if (wanfa_name == "总和") {
            this.isbanbo = false;
            this.isqima = false;
            this.isshengxiao = false;
            this.istemaone2six = false;
            this.istematouwei = false;
            this.isweishu = false;
            this.isweishubuzhong = false;
            this.iswuxing = false;
            this.isyixiao = false;
            this.isyixiaobuzhong = false;
            this.iszhengma = false;
            this.iszonghe = true;
          } else if (wanfa_name == "一肖" || wanfa_name == "二肖连-中" || wanfa_name == "三肖连-中" || wanfa_name == "四肖连-中" || wanfa_name == "五肖连-中") {
            this.isbanbo = false;
            this.isqima = false;
            this.isshengxiao = false;
            this.istemaone2six = false;
            this.istematouwei = false;
            this.isweishu = false;
            this.isweishubuzhong = false;
            this.iswuxing = false;
            this.isyixiao = true;
            this.isyixiaobuzhong = false;
            this.iszhengma = false;
            this.iszonghe = false;
          } else if (wanfa_name == "一肖不中" || wanfa_name == "二肖连-不中" || wanfa_name == "三肖连-不中" || wanfa_name == "四肖连-不中" || wanfa_name == "五肖连-不中") {
            this.isbanbo = false;
            this.isqima = false;
            this.isshengxiao = false;
            this.istemaone2six = false;
            this.istematouwei = false;
            this.isweishu = false;
            this.isweishubuzhong = false;
            this.iswuxing = false;
            this.isyixiao = false;
            this.isyixiaobuzhong = true;
            this.iszhengma = false;
            this.iszonghe = false;
          } else if (wanfa_name == "尾数" || wanfa_name == "二尾连-中" || wanfa_name == "三尾连-中" || wanfa_name == "四尾连-中") {
            this.isbanbo = false;
            this.isqima = false;
            this.isshengxiao = false;
            this.istemaone2six = false;
            this.istematouwei = false;
            this.isweishu = true;
            this.isweishubuzhong = false;
            this.iswuxing = false;
            this.isyixiao = false;
            this.isyixiaobuzhong = false;
            this.iszhengma = false;
            this.iszonghe = false;
          } else if (wanfa_name == "尾数不中" || wanfa_name == "二尾连-不中" || wanfa_name == "三尾连-不中" || wanfa_name == "四尾连-不中") {
            this.isbanbo = false;
            this.isqima = false;
            this.isshengxiao = false;
            this.istemaone2six = false;
            this.istematouwei = false;
            this.isweishu = false;
            this.isweishubuzhong = true;
            this.iswuxing = false;
            this.isyixiao = false;
            this.isyixiaobuzhong = false;
            this.iszhengma = false;
            this.iszonghe = false;
          } else {
            this.isbanbo = false;
            this.isqima = false;
            this.isshengxiao = false;
            this.istemaone2six = false;
            this.istematouwei = false;
            this.isweishu = false;
            this.isweishubuzhong = false;
            this.iswuxing = false;
            this.isyixiao = false;
            this.isyixiaobuzhong = false;
            this.iszhengma = true;
            this.iszonghe = false;
          }
        } else {
          this.$message.error(resData.respMsg);
        }
      })
    }
  },
  created() {
    this.wanfaLoading = true;
    setTimeout(() => {
      this.wanfaLoading = false;
    }, 600);
    // 切换彩种 显示第一个对应玩法的对应赔率 ---- '特码'
    this.$store.commit('SET_CURRENT_WANFA', '特码')
  },
  watch: {
    current_choose_lotteryId(newval, oldval) {
      // 二级彩种切换时，控制对应第一个模板的显示
      this.currentWanfa = '特码';
      this.isbanbo = false;
      this.isqima = false;
      this.isshengxiao = false;
      this.istemaone2six = true;
      this.istematouwei = false;
      this.isweishu = false;
      this.isweishubuzhong = false;
      this.iswuxing = false;
      this.isyixiao = false;
      this.isyixiaobuzhong = false;
      this.iszhengma = false;
      this.iszonghe = false;
    }
  }
};
</script>
<style lang="scss">
@import "@/styles/secondLottery.scss";
</style>




