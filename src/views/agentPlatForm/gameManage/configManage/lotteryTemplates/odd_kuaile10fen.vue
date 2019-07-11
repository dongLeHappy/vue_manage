<template>
<!-- 11选5赔率设置 -->
    <div class="odd-kuaile10fen-box odd-common-table-box">
        <div class="odd-left-box">
            <el-radio-group v-model="currentWanfa"  @change="handleRadioChange" v-loading="wanfaLoading">
                <el-radio-button v-for="item in wanfa_list" :key="item.id" :label="item">{{item.betOnValue}}</el-radio-button>
            </el-radio-group>
        </div>
        <div class="odd-right-box">
            <!-- 引入对应赔率模板 -->
            <one2fourball v-if="isone2fourball" :oddData="odd_detail_data" :wanfaName="wanfa_name"></one2fourball>
            <five2eightball v-if="isfive2eightball" :oddData="odd_detail_data" :wanfaName="wanfa_name"></five2eightball>
            <zonghe v-if="iszonghe" :oddData="odd_detail_data" :wanfaName="wanfa_name"></zonghe>
            <zhengma v-if="iszhengma" :oddData="odd_detail_data" :wanfaName="wanfa_name"></zhengma>
        </div>
    </div>
</template>
<script>
import { findPlayRuleList } from "@/api/agentPlatForm/systemManage/ag_sm_userdefine_odd" // 查询赔率接口
import { mapState } from "vuex";
import one2fourball from '../oddTemplates/kuaile10fen/one2fourball'
import five2eightball from '../oddTemplates/kuaile10fen/five2eightball'
import zonghe from '../oddTemplates/kuaile10fen/zonghe'
import zhengma from '../oddTemplates/kuaile10fen/zhengma'
export default {
    name: 'odd-kuaile10fen',
    data() {
        return {
            underdefineOddData: [], // 自定义赔率信息
            currentOdd: null, // 当前赔率数值
            currentWanfa: '第一球', // 当前玩法
            odd_detail_data: {}, // 详细赔率
            wanfa_name: '第一球', // 玩法名称
            wanfaLoading: false,

            isone2fourball: true,
            isfive2eightball: false,
            iszonghe: false,
            iszhengma: false,
        }
    },
    components: {
        one2fourball,
        five2eightball,
        zonghe,
        zhengma
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
                    if(wanfaType == '第一球' || wanfaType == '第二球' || wanfaType == '第三球' || wanfaType == '第四球') {
                        this.isone2fourball = true
                        this.isfive2eightball = false
                        this.iszonghe = false
                        this.iszhengma = false
                    }else if(wanfaType == '第五球' || wanfaType == '第六球' || wanfaType == '第七球' || wanfaType == '第八球') {
                        this.isone2fourball = false
                        this.isfive2eightball = true
                        this.iszonghe = false
                        this.iszhengma = false
                    }else if(wanfaType == '总和') {
                        this.isone2fourball = false
                        this.isfive2eightball = false
                        this.iszonghe = true
                        this.iszhengma = false
                    }else if(wanfaType == '正码') {
                        this.isone2fourball = false
                        this.isfive2eightball = false
                        this.iszonghe = false
                        this.iszhengma = true
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
    },
    watch: {
        current_choose_lotteryId(newval,oldval) { // 监听当前选中的玩法，注销上一个选中彩种对应的所有页面及赔率信息
            this.currentWanfa = '第一球'
            this.isone2fourball = true
            this.isfive2eightball = false
            this.iszonghe = false
            this.iszhengma = false
        }
    }
}
</script>
<style lang="scss">
@import '@/styles/secondLottery.scss';
</style>




