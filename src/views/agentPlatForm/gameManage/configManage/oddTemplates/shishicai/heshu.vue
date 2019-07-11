<template>
    <div class="heshu-template odd-content-box">
        <h2>{{wanfaName}}</h2>
            <el-row class="odd-header">
                <el-col>号码</el-col>
                <el-col>赔率</el-col>
                <el-col>号码</el-col>
                <el-col>赔率</el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>单</el-col>
                <el-col><el-input v-model="oddData['dan'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>双</el-col>
                <el-col><el-input v-model="oddData['shuang'].odd" :disabled="is_edit_able"></el-input></el-col>            
            </el-row>
           
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props:['oddData','wanfaName'],
    name: 'heshu-template',
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


