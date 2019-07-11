<template>
    <div class="one2fiveball-complate odd-content-box">
        <h2>{{wanfaName}}</h2>
        <!-- 通用球类模板 -->
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
        <el-row class="odd-content">
            <el-col><span>1</span></el-col>
            <el-col><el-input v-model="oddData.ballOne.odd" :disabled="is_edit_able"></el-input></el-col>
            <el-col><span>2</span></el-col>
            <el-col><el-input v-model="oddData.ballTwo.odd" :disabled="is_edit_able"></el-input></el-col>
            <el-col><span>3</span></el-col>
            <el-col><el-input v-model="oddData.ballThree.odd" :disabled="is_edit_able"></el-input></el-col>
            <el-col><span>4</span></el-col>
            <el-col><el-input v-model="oddData.ballFour.odd" :disabled="is_edit_able"></el-input></el-col>
            <el-col><span>5</span></el-col>
            <el-col><el-input v-model="oddData.ballFive.odd" :disabled="is_edit_able"></el-input></el-col>
        </el-row>
        <el-row class="odd-content">
            <el-col><span>6</span></el-col>
            <el-col><el-input v-model="oddData.ballSix.odd" :disabled="is_edit_able"></el-input></el-col>
            <el-col><span>7</span></el-col>
            <el-col><el-input v-model="oddData.ballSeven.odd" :disabled="is_edit_able"></el-input></el-col>
            <el-col><span>8</span></el-col>
            <el-col><el-input v-model="oddData.ballEight.odd" :disabled="is_edit_able"></el-input></el-col>
            <el-col><span>9</span></el-col>
            <el-col><el-input v-model="oddData.ballNine.odd" :disabled="is_edit_able"></el-input></el-col>
            <el-col><span>10</span></el-col>
            <el-col><el-input v-model="oddData.ballTen.odd" :disabled="is_edit_able"></el-input></el-col>
        </el-row>
        <el-row class="odd-content">
            <el-col><span>11</span></el-col>
            <el-col><el-input v-model="oddData.ballEleven.odd" :disabled="is_edit_able"></el-input></el-col>
            <el-col></el-col>
            <el-col></el-col>
            <el-col></el-col>
            <el-col></el-col>
            <el-col></el-col>
            <el-col></el-col>
            <el-col></el-col>
            <el-col></el-col>
        </el-row>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props:['oddData','wanfaName'],
    name: 'common-ball-template',
    computed: {
        ...mapState({
            is_edit_able: state => state.ag_userdefine_odd.is_edit_able, // 当前赔率信息
        }),
    },
}
</script>
<style lang="scss">
@import '@/styles/oddContent.scss';
</style>




