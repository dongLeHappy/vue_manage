<template>
    <div class="wuxing-template odd-content-box">
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
                <el-col>金</el-col>
                <el-col><el-input v-model="oddData['JIN'].odds" :disabled="true"></el-input></el-col>
                <el-col>木</el-col>
                <el-col><el-input v-model="oddData['MU'].odds" :disabled="true"></el-input></el-col>
                <el-col>水</el-col>
                <el-col><el-input v-model="oddData['SHUI'].odds" :disabled="true"></el-input></el-col>
                <el-col>火</el-col>
                <el-col><el-input v-model="oddData['HUO'].odds" :disabled="true"></el-input></el-col>
                <el-col>土</el-col>
                <el-col><el-input v-model="oddData['TU'].odds" :disabled="true"></el-input></el-col>
                <el-col>-</el-col>
                <el-col>-</el-col>
            </el-row>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'wuxing-template',
    computed: {
        ...mapState({
            wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
        }),
        oddData: {
            get(){
                if(this.$store.state.ag_userdefine_odd.odd_detail_data && this.$store.state.ag_userdefine_odd.odd_detail_data.TU) {
                    return this.$store.state.ag_userdefine_odd.odd_detail_data
                }else {
                    return this.tempData;
                }
            }
        } 
    },
    data() {
        return {
            tempData : {
                'HUO': {betType: "HUO", betValue: "火", color: "", id: "79", new: false, odds: ''},
                'JIN': {betType: "JIN", betValue: "金", color: "", id: "76", new: false, odds: ''},
                'MU': {betType: "MU", betValue: "木", color: "", id: "77", new: false, odds: ''},
                'SHUI': {betType: "SHUI", betValue: "水", color: "", id: "78", new: false, odds: ''},
                'TU': {betType: "TU", betValue: "土", color: "", id: "80", new: false, odds: ''}
            }
        }
    }
}
</script>
<style lang="scss">
@import '@/styles/oddContent.scss';

</style>
