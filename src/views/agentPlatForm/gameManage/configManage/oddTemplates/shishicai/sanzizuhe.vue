<template>
    <div class="sanzizuhe-template odd-content-box">
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
                <el-col>000</el-col>
                <el-col><el-input v-model="oddData['000'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>001</el-col>
                <el-col><el-input v-model="oddData['001'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>002</el-col>
                <el-col><el-input v-model="oddData['002'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>003</el-col>
                <el-col><el-input v-model="oddData['003'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>004</el-col>
                <el-col><el-input v-model="oddData['004'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>005</el-col>
                <el-col><el-input v-model="oddData['005'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>006</el-col>
                <el-col><el-input v-model="oddData['006'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>007</el-col>
                <el-col><el-input v-model="oddData['007'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>008</el-col>
                <el-col><el-input v-model="oddData['008'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>009</el-col>
                <el-col><el-input v-model="oddData['009'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>011</el-col>
                <el-col><el-input v-model="oddData['011'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>012</el-col>
                <el-col><el-input v-model="oddData['012'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>013</el-col>
                <el-col><el-input v-model="oddData['013'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>014</el-col>
                <el-col><el-input v-model="oddData['014'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>015</el-col>
                <el-col><el-input v-model="oddData['015'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>016</el-col>
                <el-col><el-input v-model="oddData['016'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>017</el-col>
                <el-col><el-input v-model="oddData['017'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>018</el-col>
                <el-col><el-input v-model="oddData['018'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>019</el-col>
                <el-col><el-input v-model="oddData['019'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>022</el-col>
                <el-col><el-input v-model="oddData['022'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>023</el-col>
                <el-col><el-input v-model="oddData['023'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>024</el-col>
                <el-col><el-input v-model="oddData['024'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>025</el-col>
                <el-col><el-input v-model="oddData['025'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>026</el-col>
                <el-col><el-input v-model="oddData['026'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>027</el-col>
                <el-col><el-input v-model="oddData['027'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>028</el-col>
                <el-col><el-input v-model="oddData['028'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>029</el-col>
                <el-col><el-input v-model="oddData['029'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>033</el-col>
                <el-col><el-input v-model="oddData['033'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>034</el-col>
                <el-col><el-input v-model="oddData['034'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>035</el-col>
                <el-col><el-input v-model="oddData['035'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>036</el-col>
                <el-col><el-input v-model="oddData['036'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>037</el-col>
                <el-col><el-input v-model="oddData['037'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>038</el-col>
                <el-col><el-input v-model="oddData['038'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>039</el-col>
                <el-col><el-input v-model="oddData['039'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>044</el-col>
                <el-col><el-input v-model="oddData['044'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>045</el-col>
                <el-col><el-input v-model="oddData['045'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>046</el-col>
                <el-col><el-input v-model="oddData['046'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>047</el-col>
                <el-col><el-input v-model="oddData['047'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>048</el-col>
                <el-col><el-input v-model="oddData['047'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>049</el-col>
                <el-col><el-input v-model="oddData['049'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>055</el-col>
                <el-col><el-input v-model="oddData['055'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>056</el-col>
                <el-col><el-input v-model="oddData['056'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>057</el-col>
                <el-col><el-input v-model="oddData['057'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>058</el-col>
                <el-col><el-input v-model="oddData['058'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>059</el-col>
                <el-col><el-input v-model="oddData['059'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>066</el-col>
                <el-col><el-input v-model="oddData['066'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>067</el-col>
                <el-col><el-input v-model="oddData['067'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>068</el-col>
                <el-col><el-input v-model="oddData['068'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>069</el-col>
                <el-col><el-input v-model="oddData['069'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>077</el-col>
                <el-col><el-input v-model="oddData['077'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>078</el-col>
                <el-col><el-input v-model="oddData['078'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>079</el-col>
                <el-col><el-input v-model="oddData['079'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>088</el-col>
                <el-col><el-input v-model="oddData['088'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>089</el-col>
                <el-col><el-input v-model="oddData['089'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>099</el-col>
                <el-col><el-input v-model="oddData['099'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>111</el-col>
                <el-col><el-input v-model="oddData['111'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>112</el-col>
                <el-col><el-input v-model="oddData['112'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>113</el-col>
                <el-col><el-input v-model="oddData['113'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>114</el-col>
                <el-col><el-input v-model="oddData['114'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>115</el-col>
                <el-col><el-input v-model="oddData['115'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>116</el-col>
                <el-col><el-input v-model="oddData['116'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>117</el-col>
                <el-col><el-input v-model="oddData['117'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>118</el-col>
                <el-col><el-input v-model="oddData['118'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>119</el-col>
                <el-col><el-input v-model="oddData['119'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>122</el-col>
                <el-col><el-input v-model="oddData['122'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props:['oddData','wanfaName'],
    name: 'sanzizuhe-template',
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


