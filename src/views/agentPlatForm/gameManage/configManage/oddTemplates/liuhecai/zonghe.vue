<template>
    <div class="zonghe-template odd-content-box">
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
            </el-row>
            <el-row class="odd-content">
                <el-col>总单</el-col>
                <el-col><el-input v-model="oddData['ZHONGHE_ODD'].odds" :disabled="true"></el-input></el-col>
                <el-col>总双</el-col>
                <el-col><el-input v-model="oddData['ZHONGHE_EVEN'].odds" :disabled="true"></el-input></el-col>
                <el-col>总大</el-col>
                <el-col><el-input v-model="oddData['ZHONGHE_BIG'].odds" :disabled="true"></el-input></el-col>
                <el-col>总小</el-col>
                <el-col><el-input v-model="oddData['ZHONGHE_SMALL'].odds" :disabled="true"></el-input></el-col>
            </el-row>
           
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'zonghe-template',
    computed: {
        ...mapState({
            wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
        }),
        oddData: {
            get(){
                if(this.$store.state.ag_userdefine_odd.odd_detail_data && this.$store.state.ag_userdefine_odd.odd_detail_data.ZHONGHE_SMALL) {
                    return this.$store.state.ag_userdefine_odd.odd_detail_data;
                }else {
                    return this.tempData
                }
            }
        } 
    },
    data() {
        return {
            tempData: {
                'ZHONGHE_BIG': {betType: "ZHONGHE_BIG", betValue: "总大", color: "", id: "540", new: false, odds: ''},
                'ZHONGHE_EVEN': {betType: "ZHONGHE_EVEN", betValue: "总双", color: "", id: "539", new: false, odds: ''},
                'ZHONGHE_ODD': {betType: "ZHONGHE_ODD", betValue: "总单", color: "", id: "538", new: false, odds: ''},
                'ZHONGHE_SMALL': {betType: "ZHONGHE_SMALL", betValue: "总小", color: "", id: "541", new: false, odds: ''}
            }
        }
    }
}
</script>
<style lang="scss">
@import '@/styles/oddContent.scss';

</style>
