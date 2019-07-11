<template>
    <div class="yizizuhe-template odd-content-box">
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
            <el-row class="odd-content">
                <el-col>0</el-col>
                <el-col><el-input v-model="oddData['0'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>1</el-col>
                <el-col><el-input v-model="oddData['1'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>2</el-col>
                <el-col><el-input v-model="oddData['2'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>3</el-col>
                <el-col><el-input v-model="oddData['3'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>4</el-col>
                <el-col><el-input v-model="oddData['4'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>5</el-col>
                <el-col><el-input v-model="oddData['5'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>6</el-col>
                <el-col><el-input v-model="oddData['6'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>7</el-col>
                <el-col><el-input v-model="oddData['7'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>8</el-col>
                <el-col><el-input v-model="oddData['8'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>9</el-col>
                <el-col><el-input v-model="oddData['9'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props:['oddData','wanfaName'],
    name: 'yizizuhe-template',
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


