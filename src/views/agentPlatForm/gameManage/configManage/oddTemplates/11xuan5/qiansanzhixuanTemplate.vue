<template>
    <div class="qianerzhixuan-complate odd-content-box">
        <h2>{{wanfaName}}</h2>
        <!-- 通用球类模板 -->
        <!-- 第一球 -->
        <div>
            <h2 class="qian2-h2 first-h2">第一球</h2>
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
                <el-col><el-input v-model="oddData.firstBall.ballOne.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>2</span></el-col>
                <el-col><el-input v-model="oddData.firstBall.ballTwo.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>3</span></el-col>
                <el-col><el-input v-model="oddData.firstBall.ballThree.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>4</span></el-col>
                <el-col><el-input v-model="oddData.firstBall.ballFour.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>5</span></el-col>
                <el-col><el-input v-model="oddData.firstBall.ballFive.odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col><span>6</span></el-col>
                <el-col><el-input v-model="oddData.firstBall.ballSix.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>7</span></el-col>
                <el-col><el-input v-model="oddData.firstBall.ballSeven.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>8</span></el-col>
                <el-col><el-input v-model="oddData.firstBall.ballEight.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>9</span></el-col>
                <el-col><el-input v-model="oddData.firstBall.ballNine.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>10</span></el-col>
                <el-col><el-input v-model="oddData.firstBall.ballTen.odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col><span>11</span></el-col>
                <el-col><el-input v-model="oddData.firstBall.ballEleven.odd" :disabled="is_edit_able"></el-input></el-col>
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
        <!-- 第二球 -->
        <div>
            <h2 class="qian2-h2">第二球</h2>
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
                <el-col><el-input v-model="oddData.secondBall.ballOne.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>2</span></el-col>
                <el-col><el-input v-model="oddData.secondBall.ballTwo.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>3</span></el-col>
                <el-col><el-input v-model="oddData.secondBall.ballThree.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>4</span></el-col>
                <el-col><el-input v-model="oddData.secondBall.ballFour.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>5</span></el-col>
                <el-col><el-input v-model="oddData.secondBall.ballFive.odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col><span>6</span></el-col>
                <el-col><el-input v-model="oddData.secondBall.ballSix.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>7</span></el-col>
                <el-col><el-input v-model="oddData.secondBall.ballSeven.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>8</span></el-col>
                <el-col><el-input v-model="oddData.secondBall.ballEight.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>9</span></el-col>
                <el-col><el-input v-model="oddData.secondBall.ballNine.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>10</span></el-col>
                <el-col><el-input v-model="oddData.secondBall.ballTen.odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col><span>11</span></el-col>
                <el-col><el-input v-model="oddData.secondBall.ballEleven.odd" :disabled="is_edit_able"></el-input></el-col>
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
        <!-- 第三球 -->
        <div>
            <h2 class="qian2-h2">第三球</h2>
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
                <el-col><el-input v-model="oddData.thirdBall.ballOne.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>2</span></el-col>
                <el-col><el-input v-model="oddData.thirdBall.ballTwo.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>3</span></el-col>
                <el-col><el-input v-model="oddData.thirdBall.ballThree.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>4</span></el-col>
                <el-col><el-input v-model="oddData.thirdBall.ballFour.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>5</span></el-col>
                <el-col><el-input v-model="oddData.thirdBall.ballFive.odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col><span>6</span></el-col>
                <el-col><el-input v-model="oddData.thirdBall.ballSix.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>7</span></el-col>
                <el-col><el-input v-model="oddData.thirdBall.ballSeven.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>8</span></el-col>
                <el-col><el-input v-model="oddData.thirdBall.ballEight.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>9</span></el-col>
                <el-col><el-input v-model="oddData.thirdBall.ballNine.odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col><span>10</span></el-col>
                <el-col><el-input v-model="oddData.thirdBall.ballTen.odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col><span>11</span></el-col>
                <el-col><el-input v-model="oddData.thirdBall.ballEleven.odd" :disabled="is_edit_able"></el-input></el-col>
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
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'qiansan-zhixuan-template',
    props:['oddData','wanfaName'],
    computed: {
        ...mapState({
            is_edit_able: state => state.ag_userdefine_odd.is_edit_able, // 当前赔率信息
        }),
    },
}
</script>
<style lang="scss">
@import '@/styles/oddContent.scss';
.qian2-h2 {
    text-align: center;
}
.first-h2 {
    border-top: 1px solid gainsboro;
}
</style>

