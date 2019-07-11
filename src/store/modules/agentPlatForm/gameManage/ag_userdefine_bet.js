const ag_userdefine_bet = {
    state: {
        bet_data_common: [], // 当前通用彩种投注上限信息
        bet_data_userdefine: [], // 当前自定义投注上限信息
        isEdit: true, // 当前投注上限是否可编辑(默认不可编辑状态)
        // currentBetType: '', // 当前投注上限类型
    },
    getters: {},
    mutations: {
        SET_BET_DATA: (state, data) => { // 设置通用投注上限
            state.bet_data_common = data;
        },
        SET_USERDEFINE_BET_DATA: (state, data) => { // 设置自定义投注上限
            state.bet_data_userdefine = data;
        },
        SET_ISEDIT_STATUS: (state, data) => { // 设置编辑状态
            state.isEdit = data
        },
    },
    actions: {

    }
}

export default ag_userdefine_bet