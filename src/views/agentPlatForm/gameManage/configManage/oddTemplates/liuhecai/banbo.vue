<template>
    <div class="banbo-template odd-content-box">
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
                <el-col>红单</el-col>
                <el-col><el-input v-model="oddData['RED_ODD'].odds" :disabled="true"></el-input></el-col>
                <el-col>红双</el-col>
                <el-col><el-input v-model="oddData['RED_EVEN'].odds" :disabled="true"></el-input></el-col>
                <el-col>红大</el-col>
                <el-col><el-input v-model="oddData['RED_BIG'].odds" :disabled="true"></el-input></el-col>
                <el-col>红小</el-col>
                <el-col><el-input v-model="oddData['RED_SMALL'].odds" :disabled="true"></el-input></el-col>
                <el-col>绿单</el-col>
                <el-col><el-input v-model="oddData['GREEN_ODD'].odds" :disabled="true"></el-input></el-col>
                <el-col>绿双</el-col>
                <el-col><el-input v-model="oddData['GREEN_EVEN'].odds" :disabled="true"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>绿大</el-col>
                <el-col><el-input v-model="oddData['GREEN_BIG'].odds" :disabled="true"></el-input></el-col>
                <el-col>绿小</el-col>
                <el-col><el-input v-model="oddData['GREEN_SMALL'].odds" :disabled="true"></el-input></el-col>
                <el-col>蓝单</el-col>
                <el-col><el-input v-model="oddData['BLUE_ODD'].odds" :disabled="true"></el-input></el-col>
                <el-col>蓝双</el-col>
                <el-col><el-input v-model="oddData['BLUE_EVEN'].odds" :disabled="true"></el-input></el-col>
                <el-col>蓝大</el-col>
                <el-col><el-input v-model="oddData['BLUE_BIG'].odds" :disabled="true"></el-input></el-col>
                <el-col>蓝小</el-col>
                <el-col><el-input v-model="oddData['BLUE_SMALL'].odds" :disabled="true"></el-input></el-col>
            </el-row>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'banbo-template',
    computed: {
        ...mapState({
            wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
        }),
        oddData: {
            get(){
                if(this.$store.state.ag_userdefine_odd.odd_detail_data && this.$store.state.ag_userdefine_odd.odd_detail_data.BLUE_SMALL) {
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
                'BLUE_BIG': {betType: "BLUE_BIG", betValue: "蓝大", color: "", id: "87", new: false, odds: ''},
                'BLUE_EVEN': {betType: "BLUE_EVEN", betValue: "蓝双", color: "", id: "86", new: false, odds: ''},
                'BLUE_ODD': {betType: "BLUE_ODD", betValue: "蓝单", color: "", id: "85", new: false, odds: ''},
                'BLUE_SMALL': {betType: "BLUE_SMALL", betValue: "蓝小", color: "", id: "88", new: false, odds: ''},
                'GREEN_BIG': {betType: "GREEN_BIG", betValue: "绿大", color: "", id: "91", new: false, odds: ''},
                'GREEN_EVEN': {betType: "GREEN_EVEN", betValue: "绿双", color: "", id: "90", new: false, odds: ''},
                'GREEN_ODD': {betType: "GREEN_ODD", betValue: "绿单", color: "", id: "89", new: false, odds: ''},
                'GREEN_SMALL': {betType: "GREEN_SMALL", betValue: "绿小", color: "", id: "92", new: false, odds:''},
                'RED_BIG': {betType: "RED_BIG", betValue: "红大", color: "", id: "83", new: false, odds: ''},
                'RED_EVEN': {betType: "RED_EVEN", betValue: "红双", color: "", id: "82", new: false, odds: ''},
                'RED_ODD': {betType: "RED_ODD", betValue: "红单", color: "", id: "81", new: false, odds: ''},
                'RED_SMALL': {betType: "RED_SMALL", betValue: "红小", color: "", id: "84", new: false, odds: ''}
            }
        }
    }
}
</script>
<style lang="scss">
@import '@/styles/oddContent.scss';

</style>
