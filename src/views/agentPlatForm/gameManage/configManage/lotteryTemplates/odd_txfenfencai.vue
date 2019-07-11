<template>
<!-- 时时彩赔率设置 -->
    <div class="odd-fenfencai-box odd-common-table-box">
        <div class="odd-left-box">
            <el-radio-group v-model="currentWanfa" @change="handleRadioChange"  v-loading="wanfaLoading">
                <el-radio-button v-for="item in wanfa_list" :key="item.id" :label="item">{{item.betOnValue}}</el-radio-button>
            </el-radio-group>
        </div>
        <div class="odd-right-box">
            <!-- 引入对应赔率模板 -->
            <erdingwei v-if="iserdingwei" :oddData="odd_detail_data" :wanfaName="wanfa_name"></erdingwei>
            <erzizuhe v-if="iserzizuhe" :oddData="odd_detail_data" :wanfaName="wanfa_name"></erzizuhe>
            <heshu v-if="isheshu" :oddData="odd_detail_data" :wanfaName="wanfa_name"></heshu>
            <jinhua v-if="isjinhua" :oddData="odd_detail_data" :wanfaName="wanfa_name"></jinhua>
            <longhuhe v-if="islonghuhe" :oddData="odd_detail_data" :wanfaName="wanfa_name"></longhuhe>
            <one2fiveball v-if="isone2fiveball" :oddData="odd_detail_data" :wanfaName="wanfa_name"></one2fiveball>
            <sanzizuhe v-if="issanzizuhe" :oddData="odd_detail_data" :wanfaName="wanfa_name"></sanzizuhe>
            <yizizuhe v-if="isyizizuhe" :oddData="odd_detail_data" :wanfaName="wanfa_name"></yizizuhe>
            <zonghe v-if="iszonghe" :oddData="odd_detail_data" :wanfaName="wanfa_name"></zonghe>
            <!-- 一键配置赔率 -->
            <div class="set-odd-box" v-if="current_oddtype == '自定义赔率'">
                <span class="set-input-state">一键输入</span>
                <el-input :disabled="is_edit_able" v-model="currentOdd"></el-input>
                <el-button type="primary" @click.native.prevent="okSetOdd">确定</el-button>
                <el-button type="primary" @click.native.prevent="getCommonOdd">同步通用赔率</el-button>
            </div>
        </div>
        
    </div>
</template>
<script>
import { mapState } from "vuex";
import erdingwei from '../oddTemplates/shishicai/erdingwei'
import erzizuhe from '../oddTemplates/shishicai/erzizuhe'
import heshu from '../oddTemplates/shishicai/heshu'
import jinhua from '../oddTemplates/shishicai/jinhua'
import longhuhe from '../oddTemplates/shishicai/longhuhe'
import one2fiveball from '../oddTemplates/shishicai/one2fiveball'
import sanzizuhe from '../oddTemplates/shishicai/sanzizuhe'
import yizizuhe from '../oddTemplates/shishicai/yizizuhe'
import zonghe from '../oddTemplates/shishicai/zonghe'
export default {
    name: 'odd-shishicai',
    data() {
        return {
            underdefineOddData: [], // 自定义赔率信息
            currentOdd: null, // 当前赔率数值
            currentWanfa: '第一球', // 当前玩法
            odd_detail_data: {}, // 详细赔率
            wanfa_name: '第一球', // 玩法名称
            wanfaLoading: false,

            iserdingwei: false,
            iserzizuhe: false,
            isheshu: false,
            isjinhua: false,
            islonghuhe: false,
            isone2fiveball: false,
            issanzizuhe: false,
            isyizizuhe: false,
            iszonghe: false,
        }
    },
    components: {
        erdingwei,
        erzizuhe,
        heshu,
        jinhua,
        longhuhe,
        one2fiveball,
        sanzizuhe,
        yizizuhe,
        zonghe
    },
    computed: {
        ...mapState({
            odd_data_common: state => state.ag_userdefine_odd.odd_data_common, // 当前通用赔率
            current_choose_lotteryType: state => state.ag_userdefine_odd.current_choose_lotteryType, // 当前选中的彩种
            wanfa_list: state => state.ag_userdefine_odd.wanfa_list, // 玩法列表
            current_wanfa: state => state.ag_userdefine_odd.current_wanfa, // 当前选中的玩法
            current_oddtype: state => state.ag_userdefine_odd.current_oddtype, // 当前赔率类型
            is_edit_able: state => state.ag_userdefine_odd.is_edit_able, // 当查看通用赔率时，输入框不可编辑,
        }),
    },
    methods: {
        okSetOdd() { // 确定设置当前输入赔率
            for(let item in this.odd_detail_data) {
                this.odd_detail_data[item].odd = this.currentOdd;
            }
        },
        getCommonOdd() { // 同步通用赔率
            this.userdefineOddData = this.odd_data_common;
        },
        handleRadioChange(wanfaType) { // 监听当前选中的玩法
        //选中对应的玩法，结合当前状态仓库中保存的彩种，向接口发送两个参数，拉取该玩法对应的赔率信息
            let data = {
                "lotteryType": this.current_choose_lotteryType,
                "wanfaType": wanfaType
            }
            this.$store.dispatch('getOddDetail',data).then(res=>{ // 设置对应玩法赔率
                this.odd_detail_data = res
                this.wanfa_name = data.wanfaType
                if(this.odd_detail_data) {
                    if(wanfaType == '第一球' || wanfaType == '第二球' || wanfaType == '第三球' || wanfaType == '第四球' || wanfaType == '第五球') {
                        this.iserdingwei = false;
                        this.iserzizuhe = false;
                        this.isheshu = false;
                        this.isjinhua = false;
                        this.islonghuhe = false;
                        this.isone2fiveball = true;
                        this.issanzizuhe = false;
                        this.isyizizuhe = false;
                        this.iszonghe = false;
                    }else if(wanfaType == '龙虎') {
                        this.iserdingwei = false;
                        this.iserzizuhe = false;
                        this.isheshu = false;
                        this.isjinhua = false;
                        this.islonghuhe = true;
                        this.isone2fiveball = false;
                        this.issanzizuhe = false;
                        this.isyizizuhe = false;
                        this.iszonghe = false;
                    }else if(wanfaType == '总和') {
                        this.iserdingwei = false;
                        this.iserzizuhe = false;
                        this.isheshu = false;
                        this.isjinhua = false;
                        this.islonghuhe = false;
                        this.isone2fiveball = false;
                        this.issanzizuhe = false;
                        this.isyizizuhe = false;
                        this.iszonghe = true;
                    }else if(wanfaType.indexOf('金花') >= 0) {
                        this.iserdingwei = false;
                        this.iserzizuhe = false;
                        this.isheshu = false;
                        this.isjinhua = true;
                        this.islonghuhe = false;
                        this.isone2fiveball = false;
                        this.issanzizuhe = false;
                        this.isyizizuhe = false;
                        this.iszonghe = false;
                    }else if(wanfaType.indexOf('一字组合') >= 0) {
                        this.iserdingwei = false;
                        this.iserzizuhe = false;
                        this.isheshu = false;
                        this.isjinhua = false;
                        this.islonghuhe = false;
                        this.isone2fiveball = false;
                        this.issanzizuhe = false;
                        this.isyizizuhe = true;
                        this.iszonghe = false;
                    }else if(wanfaType.indexOf('二字组合') >= 0) {
                        this.iserdingwei = false;
                        this.iserzizuhe = true;
                        this.isheshu = false;
                        this.isjinhua = false;
                        this.islonghuhe = false;
                        this.isone2fiveball = false;
                        this.issanzizuhe = false;
                        this.isyizizuhe = false;
                        this.iszonghe = false;
                    }else if(wanfaType.indexOf('三字组合') >= 0) {
                        this.iserdingwei = false;
                        this.iserzizuhe = false;
                        this.isheshu = false;
                        this.isjinhua = false;
                        this.islonghuhe = false;
                        this.isone2fiveball = false;
                        this.issanzizuhe = true;
                        this.isyizizuhe = false;
                        this.iszonghe = false;
                    }else if(wanfaType.indexOf('二定位') >= 0) {
                        this.iserdingwei = true;
                        this.iserzizuhe = false;
                        this.isheshu = false;
                        this.isjinhua = false;
                        this.islonghuhe = false;
                        this.isone2fiveball = false;
                        this.issanzizuhe = false;
                        this.isyizizuhe = false;
                        this.iszonghe = false;
                    }else if(wanfaType.indexOf('和数') >= 0) {
                        this.iserdingwei = false;
                        this.iserzizuhe = false;
                        this.isheshu = true;
                        this.isjinhua = false;
                        this.islonghuhe = false;
                        this.isone2fiveball = false;
                        this.issanzizuhe = false;
                        this.isyizizuhe = false;
                        this.iszonghe = false;
                    }
                }
            })
        }
    },
    created() {
        this.userdefineOddData = this.odd_data_common;
        this.$store.dispatch('getOddDetail',{"lotteryType":'分分彩',"wanfaType":'第一球'}).then(res => { // PK10默认显示冠军玩法
            this.odd_detail_data = res;
            if(this.odd_detail_data) {
                this.isone2fiveball = true
            }
        })

        this.wanfaLoading = true;
        setTimeout(() => {
            this.wanfaLoading = false;
        }, 800);
    },
    watch: {
        current_choose_lotteryType(newval,oldval) { // 监听当前选中的玩法，注销上一个选中彩种对应的所有页面及赔率信息
            // this.currentWanfa = null; // 重置上一个彩种页面选中的玩法
            this.iserdingwei = false;
            this.iserzizuhe = false;
            this.isheshu = false;
            this.isjinhua = false;
            this.islonghuhe = false;
            this.isone2fiveball = false;
            this.issanzizuhe = false;
            this.isyizizuhe = false;
            this.iszonghe = false;
            this.$store.dispatch('getOddDetail',{"lotteryType":'分分彩',"wanfaType":'第一球'}).then(res => { // PK10默认显示冠军玩法
                this.odd_detail_data = res;
                if(this.odd_detail_data) {
                    this.isone2fiveball = true
                }
            })
        },
        current_wanfa() {
            this.currentOdd = null;
        }
    }
}
</script>
<style lang="scss">
@import '@/styles/secondLottery.scss';
</style>




