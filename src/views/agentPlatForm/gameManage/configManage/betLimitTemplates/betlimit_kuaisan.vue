<template>
<!-- 快三 自定义投注上限 -->
    <div class="bet-kuaisan-box bet-common-table-box">
        <div class="bet-detail-box">
            <el-row class="bet-header">
                <el-col :span="4">二级玩法</el-col>
                <el-col :span="4">单期单注最低</el-col>
                <el-col :span="4">单期单注最高</el-col>
                <el-col :span="4">单期玩法最高</el-col>
            </el-row>
            <el-row class="bet-detail" v-for="item in bet_data_common.detailList" :key="item.id">
                <el-col class="bet-col-header" :span="4">{{item.betOnValue}}</el-col>
                <el-col :span="4">
                    <el-input :class="{'none-bg-color': editAble}" v-model="item.singleMin" :disabled="isEdit"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input :class="{'none-bg-color': editAble}" v-model="item.singleMax" :disabled="isEdit"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input :class="{'none-bg-color': editAble}" v-model="item.gameNoMax" :disabled="isEdit"></el-input>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'betlimit_kuaisan',
    computed:{
        ...mapState({
            bet_data_common: state => state.ag_userdefine_bet.bet_data_common,
            isEdit: state => state.ag_userdefine_bet.isEdit
        }),
        editAble() {
            return !this.isEdit;
        }
    }
}
</script>
<style lang="scss">
   @import '@/styles/userdefineBetlimit.scss'; 
</style>


