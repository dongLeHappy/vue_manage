<template>
<!-- 11选5赔率设置 -->
    <div class="odd-kuaisan-box odd-common-table-box">
        <!-- 左侧玩法列表 -->
        <div class="odd-left-box">
            <el-radio-group v-model="currentWanfa"  @change="handleRadioChange" v-loading="wanfaLoading">
                <el-radio-button v-for="item in wanfa_list" :key="item.id" :label="item">{{item.betOnValue}}</el-radio-button>
            </el-radio-group>
        </div>
        <!-- 右侧对应赔率信息 -->
        <div class="odd-right-box">
            <sanjunTemplate v-if="issanjunTemplate"></sanjunTemplate>
            <weisaiquansaiTemplate v-if="isweisaiquansaiTemplate"></weisaiquansaiTemplate>
            <dianshuTemplate v-if="isdianshuTemplate"></dianshuTemplate>
            <changpaiTemplate v-if="ischangpaiTemplate"></changpaiTemplate>
            <duanpaiTemplate v-if="iszduanpaiTemplate"></duanpaiTemplate>
        </div>
        
    </div>
</template>
<script>
import { findPlayRuleList } from "@/api/agentPlatForm/systemManage/ag_sm_userdefine_odd" // 查询赔率接口
import { mapState } from "vuex";
import sanjunTemplate from '../oddTemplates/kuaisan/sanjun'
import weisaiquansaiTemplate from '../oddTemplates/kuaisan/weisaiquansai'
import dianshuTemplate from '../oddTemplates/kuaisan/dianshu'
import changpaiTemplate from '../oddTemplates/kuaisan/changpai'
import duanpaiTemplate from '../oddTemplates/kuaisan/duanpai'
export default {
    name: 'odd-kuaisan',
    data() {
        return {
            underdefineOddData: [], // 自定义赔率信息
            currentOdd: null, // 当前赔率数值
            currentWanfa: '', // 当前玩法
            wanfa_name: '', // 玩法名称
            wanfaLoading: false,

            issanjunTemplate: true,
            isweisaiquansaiTemplate: false,
            isdianshuTemplate: false,
            ischangpaiTemplate: false,
            iszduanpaiTemplate: false,
        }
    },
    components: {
        sanjunTemplate,
        weisaiquansaiTemplate,
        dianshuTemplate,
        changpaiTemplate,
        duanpaiTemplate
    },
    computed: {
        ...mapState({
            current_choose_lotteryId: state => state.ag_userdefine_odd.current_choose_lotteryId, // 当前选中的彩种
            wanfa_list: state => state.ag_userdefine_odd.wanfa_list, // 玩法列表
            current_wanfa: state => state.ag_userdefine_odd.current_wanfa, // 当前选中的玩法
        }),
    },
    methods: {
        handleRadioChange(item) { // 监听当前选中的玩法
        //选中对应的玩法，结合当前状态仓库中保存的彩种，向接口发送两个参数，拉取该玩法对应的赔率信息
            
            this.$store.commit('SET_CURRENT_WANFA', item.betOnValue)
            let wanfaType = item.betOnValue;
            
            findPlayRuleList({lotteryOddsVerId: this.current_choose_lotteryId,playRuleId: item.playRuleId}).then(res => { // 获取玩法对应赔率
                let resData = res.data;
                if (resData.success == 1) {
                    this.$store.commit('SET_ODD_DETAIL_LIST', resData.content)
                    if(wanfaType == '三军') {
                        this.issanjunTemplate = true;
                        this.isweisaiquansaiTemplate = false;
                        this.isdianshuTemplate = false;
                        this.ischangpaiTemplate = false;
                        this.iszduanpaiTemplate = false;
                    }else if(wanfaType == '围骰、全骰') {
                        this.isweisaiquansaiTemplate = true;
                        this.issanjunTemplate = false;
                        this.isdianshuTemplate = false;
                        this.ischangpaiTemplate = false;
                        this.iszduanpaiTemplate = false;
                    }else if(wanfaType == '点数') {
                        this.isdianshuTemplate = true;
                        this.issanjunTemplate = false;
                        this.isweisaiquansaiTemplate = false;
                        this.ischangpaiTemplate = false;
                        this.iszduanpaiTemplate = false;
                    }else if(wanfaType == '长牌') {
                        this.ischangpaiTemplate = true;
                        this.isdianshuTemplate = false;
                        this.issanjunTemplate = false;
                        this.isweisaiquansaiTemplate = false;
                        this.iszduanpaiTemplate = false;
                    }else if(wanfaType == '短牌') {
                        this.iszduanpaiTemplate = true;
                        this.isdianshuTemplate = false;
                        this.issanjunTemplate = false;
                        this.isweisaiquansaiTemplate = false;
                        this.ischangpaiTemplate = false;
                    }
                } else {
                    this.$message.error(resData.respMsg);
                }
                return resData.content;
            })


          
        },
    },
    created() {
       
        this.wanfaLoading = true;
        setTimeout(() => {
            this.wanfaLoading = false;
        }, 800);
    },
    watch: {
        current_choose_lotteryId(newval,oldval) { // 监听当前选中的玩法，注销上一个选中彩种对应的所有页面及赔率信息
            this.currentWanfa = '三军'
            this.issanjunTemplate = true; // 注销上一个彩种页面选中玩法对应的赔率页面 
            this.isweisaiquansaiTemplate = false;
            this.isdianshuTemplate = false;
            this.ischangpaiTemplate = false;
            this.iszduanpaiTemplate = false;
            
        }
    }
}
</script>
<style lang="scss">
@import '@/styles/secondLottery.scss';
</style>




