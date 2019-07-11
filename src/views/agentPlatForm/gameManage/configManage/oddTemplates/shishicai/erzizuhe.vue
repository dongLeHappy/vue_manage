<template>
    <div class="erzizuhe-template odd-content-box">
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
                <el-col>00</el-col>
                <el-col><el-input v-model="oddData['00'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>01</el-col>
                <el-col><el-input v-model="oddData['01'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>02</el-col>
                <el-col><el-input v-model="oddData['02'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>03</el-col>
                <el-col><el-input v-model="oddData['03'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>04</el-col>
                <el-col><el-input v-model="oddData['04'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>05</el-col>
                <el-col><el-input v-model="oddData['05'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>06</el-col>
                <el-col><el-input v-model="oddData['06'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>07</el-col>
                <el-col><el-input v-model="oddData['07'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>08</el-col>
                <el-col><el-input v-model="oddData['08'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>09</el-col>
                <el-col><el-input v-model="oddData['09'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>11</el-col>
                <el-col><el-input v-model="oddData['11'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>12</el-col>
                <el-col><el-input v-model="oddData['12'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>13</el-col>
                <el-col><el-input v-model="oddData['13'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>14</el-col>
                <el-col><el-input v-model="oddData['14'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>15</el-col>
                <el-col><el-input v-model="oddData['15'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>16</el-col>
                <el-col><el-input v-model="oddData['16'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>17</el-col>
                <el-col><el-input v-model="oddData['17'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>18</el-col>
                <el-col><el-input v-model="oddData['18'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>19</el-col>
                <el-col><el-input v-model="oddData['19'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>22</el-col>
                <el-col><el-input v-model="oddData['22'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>23</el-col>
                <el-col><el-input v-model="oddData['23'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>24</el-col>
                <el-col><el-input v-model="oddData['24'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>25</el-col>
                <el-col><el-input v-model="oddData['25'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>26</el-col>
                <el-col><el-input v-model="oddData['26'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>27</el-col>
                <el-col><el-input v-model="oddData['27'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>28</el-col>
                <el-col><el-input v-model="oddData['28'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>29</el-col>
                <el-col><el-input v-model="oddData['29'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>33</el-col>
                <el-col><el-input v-model="oddData['33'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>34</el-col>
                <el-col><el-input v-model="oddData['34'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>35</el-col>
                <el-col><el-input v-model="oddData['35'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>36</el-col>
                <el-col><el-input v-model="oddData['36'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>37</el-col>
                <el-col><el-input v-model="oddData['37'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>38</el-col>
                <el-col><el-input v-model="oddData['38'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>39</el-col>
                <el-col><el-input v-model="oddData['39'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>44</el-col>
                <el-col><el-input v-model="oddData['44'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>45</el-col>
                <el-col><el-input v-model="oddData['45'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>46</el-col>
                <el-col><el-input v-model="oddData['46'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>47</el-col>
                <el-col><el-input v-model="oddData['47'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>48</el-col>
                <el-col><el-input v-model="oddData['47'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>49</el-col>
                <el-col><el-input v-model="oddData['49'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>55</el-col>
                <el-col><el-input v-model="oddData['55'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>56</el-col>
                <el-col><el-input v-model="oddData['56'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>57</el-col>
                <el-col><el-input v-model="oddData['57'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>58</el-col>
                <el-col><el-input v-model="oddData['58'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>59</el-col>
                <el-col><el-input v-model="oddData['59'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>66</el-col>
                <el-col><el-input v-model="oddData['66'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>67</el-col>
                <el-col><el-input v-model="oddData['67'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>68</el-col>
                <el-col><el-input v-model="oddData['68'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>69</el-col>
                <el-col><el-input v-model="oddData['69'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>77</el-col>
                <el-col><el-input v-model="oddData['77'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
            <el-row class="odd-content">
                <el-col>78</el-col>
                <el-col><el-input v-model="oddData['78'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>79</el-col>
                <el-col><el-input v-model="oddData['79'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>88</el-col>
                <el-col><el-input v-model="oddData['88'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>89</el-col>
                <el-col><el-input v-model="oddData['89'].odd" :disabled="is_edit_able"></el-input></el-col>
                <el-col>99</el-col>
                <el-col><el-input v-model="oddData['99'].odd" :disabled="is_edit_able"></el-input></el-col>
            </el-row>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props:['oddData','wanfaName'],
    name: 'erzizuhe-template',
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


