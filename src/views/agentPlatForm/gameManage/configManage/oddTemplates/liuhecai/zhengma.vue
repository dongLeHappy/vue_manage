<template>
    <div class="zhengma-template odd-content-box">
        <h2>{{wanfaName}}</h2>
        <!-- 1-5球类模板 -->
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
            <el-col><el-input v-model="oddData['NO_1'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">11</span></el-col>
            <el-col><el-input v-model="oddData['NO_11'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">21</span></el-col>
            <el-col><el-input v-model="oddData['NO_21'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">31</span></el-col>
            <el-col><el-input v-model="oddData['NO_31'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">41</span></el-col>
            <el-col><el-input v-model="oddData['NO_41'].odds" :disabled="true"></el-input></el-col>
        </el-row>
        <el-row class="odd-content">
            <el-col><span>2</span></el-col>
            <el-col><el-input v-model="oddData['NO_2'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>12</span></el-col>
            <el-col><el-input v-model="oddData['NO_12'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">22</span></el-col>
            <el-col><el-input v-model="oddData['NO_22'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">32</span></el-col>
            <el-col><el-input v-model="oddData['NO_32'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">42</span></el-col>
            <el-col><el-input v-model="oddData['NO_42'].odds" :disabled="true"></el-input></el-col>
        </el-row>
        <el-row class="odd-content">
            <el-col><span class="blue-ball">3</span></el-col>
            <el-col><el-input v-model="oddData['NO_3'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>13</span></el-col>
            <el-col><el-input v-model="oddData['NO_13'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>23</span></el-col>
            <el-col><el-input v-model="oddData['NO_23'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">33</span></el-col>
            <el-col><el-input v-model="oddData['NO_33'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">43</span></el-col>
            <el-col><el-input v-model="oddData['NO_43'].odds" :disabled="true"></el-input></el-col>
        </el-row>
       <el-row class="odd-content">
            <el-col><span class="blue-ball">4</span></el-col>
            <el-col><el-input v-model="oddData['NO_4'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">14</span></el-col>
            <el-col><el-input v-model="oddData['NO_14'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>24</span></el-col>
            <el-col><el-input v-model="oddData['NO_24'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>34</span></el-col>
            <el-col><el-input v-model="oddData['NO_34'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">44</span></el-col>
            <el-col><el-input v-model="oddData['NO_44'].odds" :disabled="true"></el-input></el-col>
        </el-row>
        <el-row class="odd-content">
            <el-col><span class="green-ball">5</span></el-col>
            <el-col><el-input v-model="oddData['NO_5'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">15</span></el-col>
            <el-col><el-input v-model="oddData['NO_15'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">25</span></el-col>
            <el-col><el-input v-model="oddData['NO_25'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>35</span></el-col>
            <el-col><el-input v-model="oddData['NO_35'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>45</span></el-col>
            <el-col><el-input v-model="oddData['NO_45'].odds" :disabled="true"></el-input></el-col>
        </el-row>
        <el-row class="odd-content">
            <el-col><span class="green-ball">6</span></el-col>
            <el-col><el-input v-model="oddData['NO_6'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">16</span></el-col>
            <el-col><el-input v-model="oddData['NO_16'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">26</span></el-col>
            <el-col><el-input v-model="oddData['NO_26'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">36</span></el-col>
            <el-col><el-input v-model="oddData['NO_36'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>46</span></el-col>
            <el-col><el-input v-model="oddData['NO_46'].odds" :disabled="true"></el-input></el-col>
        </el-row>
        <el-row class="odd-content">
            <el-col><span>7</span></el-col>
            <el-col><el-input v-model="oddData['NO_7'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">17</span></el-col>
            <el-col><el-input v-model="oddData['NO_17'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">27</span></el-col>
            <el-col><el-input v-model="oddData['NO_27'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">37</span></el-col>
            <el-col><el-input v-model="oddData['NO_37'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">47</span></el-col>
            <el-col><el-input v-model="oddData['NO_47'].odds" :disabled="true"></el-input></el-col>
        </el-row>
        <el-row class="odd-content">
            <el-col><span>8</span></el-col>
            <el-col><el-input v-model="oddData['NO_8'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>18</span></el-col>
            <el-col><el-input v-model="oddData['NO_18'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">28</span></el-col>
            <el-col><el-input v-model="oddData['NO_28'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">38</span></el-col>
            <el-col><el-input v-model="oddData['NO_38'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">48</span></el-col>
            <el-col><el-input v-model="oddData['NO_48'].odds" :disabled="true"></el-input></el-col>
        </el-row>
        <el-row class="odd-content">
            <el-col><span class="blue-ball">9</span></el-col>
            <el-col><el-input v-model="oddData['NO_9'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>19</span></el-col>
            <el-col><el-input v-model="oddData['NO_19'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>29</span></el-col>
            <el-col><el-input v-model="oddData['NO_29'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">39</span></el-col>
            <el-col><el-input v-model="oddData['NO_39'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="green-ball">49</span></el-col>
            <el-col><el-input v-model="oddData['NO_49'].odds" :disabled="true"></el-input></el-col>
        </el-row>
        <el-row class="odd-content">
            <el-col><span class="blue-ball">10</span></el-col>
            <el-col><el-input v-model="oddData['NO_10'].odds" :disabled="true"></el-input></el-col>
            <el-col><span class="blue-ball">20</span></el-col>
            <el-col><el-input v-model="oddData['NO_20'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>30</span></el-col>
            <el-col><el-input v-model="oddData['NO_30'].odds" :disabled="true"></el-input></el-col>
            <el-col><span>40</span></el-col>
            <el-col><el-input v-model="oddData['NO_40'].odds" :disabled="true"></el-input></el-col>
            <el-col>-</el-col>
            <el-col>-</el-col>
        </el-row>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'zhengma-template',
    computed: {
        ...mapState({
            wanfaName: state => state.ag_userdefine_odd.current_wanfa // 当前玩法
        }),
        oddData: {
            get(){
                if(this.$store.state.ag_userdefine_odd.odd_detail_data && this.$store.state.ag_userdefine_odd.odd_detail_data.NO_40) {
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
                'NO_1': {betType: "NO_1", betValue: "1", color: "", id: "1", new: false, odds: ''},
                'NO_2': {betType: "NO_2", betValue: "2", color: "", id: "2", new: false, odds: ''},
                'NO_3': {betType: "NO_3", betValue: "3", color: "", id: "3", new: false, odds: ''},
                'NO_4': {betType: "NO_4", betValue: "4", color: "", id: "4", new: false, odds: ''},
                'NO_5': {betType: "NO_5", betValue: "5", color: "", id: "5", new: false, odds: ''},
                'NO_6': {betType: "NO_6", betValue: "6", color: "", id: "6", new: false, odds: ''},
                'NO_7': {betType: "NO_7", betValue: "7", color: "", id: "7", new: false, odds: ''},
                'NO_8': {betType: "NO_8", betValue: "8", color: "", id: "8", new: false, odds: ''},
                'NO_9': {betType: "NO_9", betValue: "9", color: "", id: "9", new: false, odds: ''},
                'NO_10': {betType: "NO_10", betValue: "10", color: "", id: "10", new: false, odds: ''},
                'NO_11': {betType: "NO_11", betValue: "11", color: "", id: "11", new: false, odds: ''},
                'NO_12': {betType: "NO_12", betValue: "12", color: "", id: "12", new: false, odds: ''},
                'NO_13': {betType: "NO_13", betValue: "13", color: "", id: "13", new: false, odds: ''},
                'NO_14': {betType: "NO_14", betValue: "14", color: "", id: "14", new: false, odds: ''},
                'NO_15': {betType: "NO_15", betValue: "15", color: "", id: "15", new: false, odds: ''},
                'NO_16': {betType: "NO_16", betValue: "16", color: "", id: "16", new: false, odds: ''},
                'NO_17': {betType: "NO_17", betValue: "17", color: "", id: "17", new: false, odds: ''},
                'NO_18': {betType: "NO_18", betValue: "18", color: "", id: "18", new: false, odds: ''},
                'NO_19': {betType: "NO_19", betValue: "19", color: "", id: "19", new: false, odds: ''},
                'NO_20': {betType: "NO_20", betValue: "20", color: "", id: "20", new: false, odds: ''},
                'NO_21': {betType: "NO_21", betValue: "21", color: "", id: "21", new: false, odds: ''},
                'NO_22': {betType: "NO_22", betValue: "22", color: "", id: "22", new: false, odds: ''},
                'NO_23': {betType: "NO_23", betValue: "23", color: "", id: "23", new: false, odds: ''},
                'NO_24': {betType: "NO_24", betValue: "24", color: "", id: "24", new: false, odds: ''},
                'NO_25': {betType: "NO_25", betValue: "25", color: "", id: "25", new: false, odds: ''},
                'NO_26': {betType: "NO_26", betValue: "26", color: "", id: "26", new: false, odds: ''},
                'NO_27': {betType: "NO_27", betValue: "27", color: "", id: "27", new: false, odds: ''},
                'NO_28': {betType: "NO_28", betValue: "28", color: "", id: "28", new: false, odds: ''},
                'NO_29': {betType: "NO_29", betValue: "29", color: "", id: "29", new: false, odds: ''},
                'NO_30': {betType: "NO_30", betValue: "30", color: "", id: "30", new: false, odds: ''},
                'NO_31': {betType: "NO_31", betValue: "31", color: "", id: "31", new: false, odds: ''},
                'NO_32': {betType: "NO_32", betValue: "32", color: "", id: "32", new: false, odds: ''},
                'NO_33': {betType: "NO_33", betValue: "33", color: "", id: "33", new: false, odds: ''},
                'NO_34': {betType: "NO_34", betValue: "34", color: "", id: "34", new: false, odds: ''},
                'NO_35': {betType: "NO_35", betValue: "35", color: "", id: "35", new: false, odds: ''},
                'NO_36': {betType: "NO_36", betValue: "36", color: "", id: "36", new: false, odds: ''},
                'NO_37': {betType: "NO_37", betValue: "37", color: "", id: "37", new: false, odds: ''},
                'NO_38': {betType: "NO_38", betValue: "38", color: "", id: "38", new: false, odds: ''},
                'NO_39': {betType: "NO_39", betValue: "39", color: "", id: "39", new: false, odds: ''},
                'NO_40': {betType: "NO_40", betValue: "40", color: "", id: "40", new: false, odds: ''},
                'NO_41': {betType: "NO_41", betValue: "41", color: "", id: "41", new: false, odds: ''},
                'NO_42': {betType: "NO_42", betValue: "42", color: "", id: "42", new: false, odds: ''},
                'NO_43': {betType: "NO_43", betValue: "43", color: "", id: "43", new: false, odds: ''},
                'NO_44': {betType: "NO_44", betValue: "44", color: "", id: "44", new: false, odds: ''},
                'NO_45': {betType: "NO_45", betValue: "45", color: "", id: "45", new: false, odds: ''},
                'NO_46': {betType: "NO_46", betValue: "46", color: "", id: "46", new: false, odds: ''},
                'NO_47': {betType: "NO_47", betValue: "47", color: "", id: "47", new: false, odds: ''},
                'NO_48': {betType: "NO_48", betValue: "48", color: "", id: "48", new: false, odds: ''},
                'NO_49': {betType: "NO_49", betValue: "49", color: "", id: "49", new: false, odds: ''},
            }
        }
    }
}
</script>
<style lang="scss">
@import '@/styles/oddContent.scss';
</style>


