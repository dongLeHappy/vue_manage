
const ag_userdefine_odd = {
    state: {
        current_choose_lotteryId: '', // 当前选中彩种id(默认为香港六合彩id)
        current_wanfa: '特码', // 当前选中的玩法
        wanfa_list: [], // 玩法列表
        odd_detail_data: [], // 玩法对应赔率信息
        odd_loading: true, // 赔率页loading
    },
    getters: {
        
    },
    mutations: {
        SET_CURRENT_ODD_PAGE: (state, data) => { // 设置当前二级彩种id
            state.current_choose_lotteryId = data;
        },
        SET_WANFA_LIST: (state, data) => { // 设置当前玩法列表
            state.wanfa_list = [];
            state.wanfa_list = data
        },
        SET_ODD_DETAIL_LIST: (state, data) => { // 设置当前彩种下对应玩法的赔率列表
            state.odd_detail_data = []
            state.odd_detail_data = data
        },
        SET_CURRENT_WANFA: (state, data) => { // 设置当前选中的玩法
            state.current_wanfa = ''
            state.current_wanfa = data
        },
        SET_ODD_LOADING: (state, data) => { // 设置赔率loading
            state.odd_loading = data
        }
    },
    actions: {
    }
}

export default ag_userdefine_odd