<template>
<!-- 11选5赔率设置 -->
    <div class="odd-11xuan5-box odd-common-table-box">
        <div class="odd-left-box">
            <el-radio-group v-model="currentWanfa"  @change="handleRadioChange" v-loading="wanfaLoading">
                <el-radio-button  v-for="item in wanfa_list" :key="item.id" :label="item">{{item.betOnValue}}</el-radio-button>
            </el-radio-group>
        </div>
        <div class="odd-right-box">
            <!-- 引入对应赔率模板 -->
            <!-- <el-row v-loading="oddLoading" v-if="is1to5ballTemplate"><OnetoFiveballTemplate></OnetoFiveballTemplate></el-row>
            <el-row v-loading="oddLoading" v-if="islonghuTemplate"><longhuTemplate></longhuTemplate></el-row>
            <el-row v-loading="oddLoading" v-if="iszongheTemplate"><zongheTemplate></zongheTemplate></el-row> -->
            <el-row v-if="is1to5ballTemplate"><OnetoFiveballTemplate></OnetoFiveballTemplate></el-row>
            <el-row v-if="islonghuTemplate"><longhuTemplate></longhuTemplate></el-row>
            <el-row v-if="iszongheTemplate"><zongheTemplate></zongheTemplate></el-row>
        </div>
    </div>
</template>
<script>
import { findPlayRuleList } from "@/api/agentPlatForm/systemManage/ag_sm_userdefine_odd" // 查询赔率接口
import { mapState } from "vuex";
import OnetoFiveballTemplate from '../oddTemplates/11xuan5/OnetoFiveballTemplate';
import longhuTemplate from '../oddTemplates/11xuan5/longhuTemplate';
import zongheTemplate from '../oddTemplates/11xuan5/zongheTemplate';
export default {
    name: 'odd-11xuan5',
    data() {
        return {
            tempLoading: true,
            underdefineOddData: [], // 自定义赔率信息
            currentWanfa: '', // 当前玩法
            wanfaLoading: false,
            is1to5ballTemplate: true,  
            islonghuTemplate: true,  
            iszongheTemplate: false,
        }
    },
    components: {
        OnetoFiveballTemplate,
        longhuTemplate,
        zongheTemplate,
    },
    computed: {
        ...mapState({
            current_choose_lotteryId: state => state.ag_userdefine_odd.current_choose_lotteryId, // 当前选中的彩种
            wanfa_list: state => state.ag_userdefine_odd.wanfa_list, // 玩法列表
            current_wanfa: state => state.ag_userdefine_odd.current_wanfa, // 当前选中的玩法
            oddData: state => state.ag_userdefine_odd.odd_detail_data, // 赔率详情
            oddLoading: state => state.ag_userdefine_odd.odd_loading // 赔率详情
        }),
    },
    methods: {
        handleRadioChange(item) { // 监听当前选中的玩法
            this.$store.commit('SET_CURRENT_WANFA', item.betOnValue)
            let wanfaType = item.betOnValue;
            findPlayRuleList({lotteryOddsVerId: this.current_choose_lotteryId,playRuleId: item.playRuleId}).then(res => { // 获取玩法对应赔率
                let resData = res.data;
                if (resData.success == 1) {
                    this.$store.commit('SET_ODD_DETAIL_LIST', resData.content)
                    this.$store.commit("SET_ODD_LOADING",true) // 开始加载loading
                    if(wanfaType == '第一球' || wanfaType == '第二球' || wanfaType == '第三球' || wanfaType == '第四球' || wanfaType == '第五球') {  
                        this.is1to5ballTemplate = true;
                        this.islonghuTemplate = false;
                        this.iszongheTemplate = false;
                    }else if(wanfaType == '龙虎') {
                        this.islonghuTemplate = true;
                        this.is1to5ballTemplate = false;
                        this.iszongheTemplate = false;
                    }else if(wanfaType == '总和') {
                        this.iszongheTemplate = true;
                        this.islonghuTemplate = false;
                        this.is1to5ballTemplate = false;
                    }
                } else {
                    this.$message.error(resData.respMsg);
                }
                return resData.content;
            })
        }
    },
    created() {
        this.wanfaLoading = true;
        setTimeout(() => {
            this.wanfaLoading = false;
        }, 800);
    },
    watch: {
        current_choose_lotteryId(newval,oldval) { // 监听当前选中的玩法，注销上一个选中彩种对应的所有页面及赔率信息
            this.currentWanfa = '第一球'
            this.is1to5ballTemplate = true;
            this.islonghuTemplate = false;
            this.iszongheTemplate = false;
          
        }
    }

}
</script>
<style lang="scss">
@import '@/styles/secondLottery.scss';
</style>




