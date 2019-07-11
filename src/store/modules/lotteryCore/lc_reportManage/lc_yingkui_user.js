const lc_yingkui_user = {
    state: {
        allData: [],
        allData_total: 0,
        currentPageSize: 2,
        page: 1,
        size: 10,
        searchEdition: {
            agentInfoIds: [""], // 代理商老板id列表
            gameUsername: '', // 游戏用户名称
            parentLotteryId: '', // 一级彩种名称  
            lotteryId: '', // 二级彩种名称
            palyRuleId: '', // 二级玩法Id
            gameNo: '', // 开奖期号
            totalBetBegin: '', // 起始总投注额
            totalBetEnd: '', // 截止总投注额
            winLossBegin: '', // 起始输赢金额
            winLossEnd: '', // 截止输赢金额
            effectiveAmountBegin: '', // 起始有效投注金额
            effectiveAmountEnd: '', // 截止有效投注金额 
            totalBetNumBegin: '', // 起始总注单数
            totalBetNumEnd: '', // 截止总注单数
            totalBetUserBegin: '', // 起始总下注人数
            totalBetUserEnd: '', // 截止总下注人数
            BetOnTime: [], // 下注时间 
            TheLotteryTime: [], // 开奖时间
            ClearingTime: [], // 结算时间
            disabledSecond: true, // 默认二级彩种下拉不可操作
            disableWanfa: true, // 默认二级玩法下拉不可操作
            enableBetsTime: false, // 禁用下注时间
            enableOpenTime: true, // 禁用开奖时间
            enableBillTime: true, // 禁用结算时间
            sortType: "", // asc升序 desc降序
            sortField: "", // 排序字段
        },
        kindBData: [], // 二级彩种下拉选择数据
        palyRuleIdArr: [], // 二级玩法下拉
    },
    getters: {},
    mutations: {
        SET_YINGKUI_USER_DATA: (state, data) => {
            state.allData = data.content;
            state.allData_total = data.totalElements;
        },
        SET_YINGKUI_USER_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_YINGKUI_USER_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.size = data
        },

        SET_YINGKUI_USER_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getYingKuiUserInfo({ commit }, data) { // 获取用户列表数据
            commit('SET_YINGKUI_USER_DATA', data)
        },

        getYingKuiUserTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_YINGKUI_USER_CURRENTPAGESIZE', data)
        },

        getYingKuiUserPageSize({ commit }, data) { // 获取当前页码
            commit('SET_YINGKUI_USER_PAGE_SIZE', data)
        },

        getYingKuiUserPage({ commit }, data) { // 获取当前页
            commit('SET_YINGKUI_USER_PAGE', data)
        }
    }
}

export default lc_yingkui_user