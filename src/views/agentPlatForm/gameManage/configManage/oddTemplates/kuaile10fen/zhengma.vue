<template>
    <div class="zhengma-template odd-content-box">
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
                <el-col><span>1</span></el-col>
                <el-col><el-input v-model="oddData['1'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>2</span></el-col>
                <el-col><el-input v-model="oddData['2'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>3</span></el-col>
                <el-col><el-input v-model="oddData['3'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>4</span></el-col>
                <el-col><el-input v-model="oddData['4'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>5</span></el-col>
                <el-col><el-input v-model="oddData['5'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col><span>6</span></el-col>
                <el-col><el-input v-model="oddData['6'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>7</span></el-col>
                <el-col><el-input v-model="oddData['7'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>8</span></el-col>
                <el-col><el-input v-model="oddData['8'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>9</span></el-col>
                <el-col><el-input v-model="oddData['9'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>10</span></el-col>
                <el-col><el-input v-model="oddData['10'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col><span>11</span></el-col>
                <el-col><el-input v-model="oddData['11'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>12</span></el-col>
                <el-col><el-input v-model="oddData['12'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>13</span></el-col>
                <el-col><el-input v-model="oddData['13'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>14</span></el-col>
                <el-col><el-input v-model="oddData['14'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>15</span></el-col>
                <el-col><el-input v-model="oddData['15'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col><span>16</span></el-col>
                <el-col><el-input v-model="oddData['16'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>17</span></el-col>
                <el-col><el-input v-model="oddData['17'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>18</span></el-col>
                <el-col><el-input v-model="oddData['18'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span class="blue-ball">19</span></el-col>
                <el-col><el-input v-model="oddData['19'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span class="blue-ball">20</span></el-col>
                <el-col><el-input v-model="oddData['20'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
        
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props:['oddData','wanfaName'],
    name: 'zhengma-template',
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
