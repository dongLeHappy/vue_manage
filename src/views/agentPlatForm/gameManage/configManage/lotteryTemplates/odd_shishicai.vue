<template>
  <!-- 时时彩赔率设置 -->
  <div class="odd-shishicai-box odd-common-table-box">
    <div class="odd-left-box">
      <el-radio-group v-model="currentWanfa" @change="handleRadioChange" v-loading="wanfaLoading">
        <el-radio-button v-for="item in wanfa_list" :key="item.id" :label="item">{{item.betOnValue}}</el-radio-button>
      </el-radio-group>
    </div>
    <div class="odd-right-box">
      <!-- 引入对应赔率模板 -->
      <jinhua v-if="isjinhua"></jinhua>
      <longhuhe v-if="islonghuhe"></longhuhe>
      <one2fiveball v-if="isone2fiveball"></one2fiveball>
      <zonghe v-if="iszonghe"></zonghe>
    </div>
  </div>
</template>
<script>
import { findPlayRuleList } from "@/api/agentPlatForm/systemManage/ag_sm_userdefine_odd"; // 查询赔率接口
import { mapState } from "vuex";
import jinhua from "../oddTemplates/shishicai/jinhua";
import longhuhe from "../oddTemplates/shishicai/longhuhe";
import one2fiveball from "../oddTemplates/shishicai/one2fiveball";
import zonghe from "../oddTemplates/shishicai/zonghe";
export default {
  name: "odd-shishicai",
  data() {
    return {
      underdefineOddData: [], // 自定义赔率信息
      currentWanfa: "", // 当前玩法
      wanfaLoading: false,

      isjinhua: false,
      islonghuhe: false,
      isone2fiveball: true,
      iszonghe: false
    };
  },
  components: {
    jinhua,
    longhuhe,
    one2fiveball,
    zonghe
  },
  computed: {
    ...mapState({
      current_choose_lotteryId: state => state.ag_userdefine_odd.current_choose_lotteryId, // 当前选中的彩种id
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
              wanfaType == "第一球" ||
              wanfaType == "第二球" ||
              wanfaType == "第三球" ||
              wanfaType == "第四球" ||
              wanfaType == "第五球"
            ) {
              this.isjinhua = false;
              this.islonghuhe = false;
              this.isone2fiveball = true;
              this.iszonghe = false;
            } else if (wanfaType == "龙虎") {
              this.isjinhua = false;
              this.islonghuhe = true;
              this.isone2fiveball = false;
              this.iszonghe = false;
            } else if (wanfaType == "总和") {
              this.isjinhua = false;
              this.islonghuhe = false;
              this.isone2fiveball = false;
              this.iszonghe = true;
            } else if (
              wanfaType == "前三" ||
              wanfaType == "中三" ||
              wanfaType == "后三"
            ) {
              // 金花模板
              this.isjinhua = true;
              this.islonghuhe = false;
              this.isone2fiveball = false;
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
    }, 800);
    this.$store.commit('SET_CURRENT_WANFA', '第一球')
  },
  watch: {
    current_choose_lotteryId(newval, oldval) {
      
      // 
      this.currentWanfa = '第一球';
      this.isjinhua = false;
      this.islonghuhe = false;
      this.isone2fiveball = true;
      this.iszonghe = false;
    }
  }
};
</script>
<style lang="scss">
@import "@/styles/secondLottery.scss";
</style>




