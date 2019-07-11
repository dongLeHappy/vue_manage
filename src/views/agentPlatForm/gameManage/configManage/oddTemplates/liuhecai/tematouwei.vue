<template>
    <div class="tematouwei-template odd-content-box">
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
            </el-row>
           <el-row class="odd-content" >
               
                <el-col>0头</el-col>
                <el-col><el-input v-model="oddData['TEMA_TOU_0'].odds" :disabled="true"></el-input></el-col>
                <el-col>1头</el-col>
                <el-col><el-input v-model="oddData['TEMA_TOU_1'].odds" :disabled="true"></el-input></el-col>
                <el-col>2头</el-col>
                <el-col><el-input v-model="oddData['TEMA_TOU_2'].odds" :disabled="true"></el-input></el-col>
                <el-col>3头</el-col>
                <el-col><el-input v-model="oddData['TEMA_TOU_3'].odds" :disabled="true"></el-input></el-col>
                <el-col>4头</el-col>
                <el-col><el-input v-model="oddData['TEMA_TOU_4'].odds" :disabled="true"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>0尾</el-col>
                <el-col><el-input v-model="oddData['TEMA_WEI_0'].odds" :disabled="true"></el-input></el-col>
                <el-col>1尾</el-col>
                <el-col><el-input v-model="oddData['TEMA_WEI_1'].odds" :disabled="true"></el-input></el-col>
                <el-col>2尾</el-col>
                <el-col><el-input v-model="oddData['TEMA_WEI_2'].odds" :disabled="true"></el-input></el-col>
                <el-col>3尾</el-col>
                <el-col><el-input v-model="oddData['TEMA_WEI_3'].odds" :disabled="true"></el-input></el-col>
                <el-col>4尾</el-col>
                <el-col><el-input v-model="oddData['TEMA_WEI_4'].odds" :disabled="true"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>6尾</el-col>
                <el-col><el-input v-model="oddData['TEMA_WEI_6'].odds" :disabled="true"></el-input></el-col>
                <el-col>7尾</el-col>
                <el-col><el-input v-model="oddData['TEMA_WEI_7'].odds" :disabled="true"></el-input></el-col>
                <el-col>8尾</el-col>
                <el-col><el-input v-model="oddData['TEMA_WEI_8'].odds" :disabled="true"></el-input></el-col>
                <el-col>9尾</el-col>
                <el-col><el-input v-model="oddData['TEMA_WEI_9'].odds" :disabled="true"></el-input></el-col>
                <el-col>5尾</el-col>
                <el-col><el-input v-model="oddData['TEMA_WEI_5'].odds" :disabled="true"></el-input></el-col>
            </el-row>
   
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'tematouwei-template',
    computed: {
        ...mapState({
            wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
        }),
        oddData: {
            get(){
                if(this.$store.state.ag_userdefine_odd.odd_detail_data && this.$store.state.ag_userdefine_odd.odd_detail_data.TEMA_WEI_9) {
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
                'TEMA_TOU_0': {betType: "TEMA_TOU_0", betValue: "0头", color: "", id: "61", new: false, odds: ''},
                'TEMA_TOU_1': {betType: "TEMA_TOU_1", betValue: "1头", color: "", id: "62", new: false, odds: ''},
                'TEMA_TOU_2': {betType: "TEMA_TOU_2", betValue: "2头", color: "", id: "63", new: false, odds: ''},
                'TEMA_TOU_3': {betType: "TEMA_TOU_3", betValue: "3头", color: "", id: "64", new: false, odds: ''},
                'TEMA_TOU_4': {betType: "TEMA_TOU_4", betValue: "4头", color: "", id: "65", new: false, odds: ''},
                'TEMA_WEI_0': {betType: "TEMA_WEI_0", betValue: "0尾", color: "", id: "66", new: false, odds: ''},
                'TEMA_WEI_1': {betType: "TEMA_WEI_1", betValue: "1尾", color: "", id: "67", new: false, odds: ''},
                'TEMA_WEI_2': {betType: "TEMA_WEI_2", betValue: "2尾", color: "", id: "68", new: false, odds: ''},
                'TEMA_WEI_3': {betType: "TEMA_WEI_3", betValue: "3尾", color: "", id: "69", new: false, odds: ''},
                'TEMA_WEI_4': {betType: "TEMA_WEI_4", betValue: "4尾", color: "", id: "70", new: false, odds: ''},
                'TEMA_WEI_5': {betType: "TEMA_WEI_5", betValue: "5尾", color: "", id: "71", new: false, odds: ''},
                'TEMA_WEI_6': {betType: "TEMA_WEI_6", betValue: "6尾", color: "", id: "72", new: false, odds: ''},
                'TEMA_WEI_7': {betType: "TEMA_WEI_7", betValue: "6尾", color: "", id: "73", new: false, odds: ''},
                'TEMA_WEI_8': {betType: "TEMA_WEI_8", betValue: "8尾", color: "", id: "74", new: false, odds: ''},
                'TEMA_WEI_9': {betType: "TEMA_WEI_9", betValue: "9尾", color: "", id: "75", new: false, odds: ''}
            }
        }
    }

}
</script>
<style lang="scss">
@import '@/styles/oddContent.scss';

</style>
