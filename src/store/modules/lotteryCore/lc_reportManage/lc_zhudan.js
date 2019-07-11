import { findOrderPage } from '@/api/lotteryCore/lc_reportManage/lc_zhudan'
// 注单报表
const lc_zhudan = {
    state: {
        allData: [],
        allData_total: 0,
        currentPageSize: 2,
        page: 1,
        size: 10,
        searchEdition: {
            agentInfoIds: [""], // 代理商老板id列表
            username: '', // 游戏用户名称
            betNo: '', // 注单号码
            settleStatus: '', //注单结算状态
            device: '', // 终端设备
            gameNo: '', // 开奖期号
            parentLotteryId: '', // 一级彩种名称 
            lotteryId: '', // 二级彩种名称
            menuPlayRuleId: '', // 一级玩法Id
            playRuleId: '', // 二级玩法Id
            amountMin: '', // 起始 投注金额
            amountMax: '', // 截止 投注金额
            effectiveAmountMin: '', // 起始 有效投注金额
            effectiveAmountMax: '', // 截止 有效投注金额 
            winlossAmountMin: '', // 起始 输赢金额
            winlossAmountMax: '', // 截止 输赢金额
            settleAmountMin: '', // 起始 结算金额(下限)
            settleAmountMax: '', // 截止 结算金额(上限)
            oddsMin: '', // 起始 赔率
            oddsMax: '', // 截止 赔率
            ClearingTime: [], //计算中奖时间（结算时间）
            BetOnTime: [], //下注时间 
            betTradeNo:'', // 平台交易流水号【下注扣款】
            settleTradeNo:'', //平台交易流水号【注单结算】
            disabledSecond: true, // 默认二级彩种下拉不可操作
            disableWanfa: true, // 默认一级玩法下拉不可操作
            disableWanfb : true, // 默认二级玩法下拉不可操作
            enableBetsTime: false, // 禁用 下注时间
            enableBillTime: true, // 禁用 计算中奖时间（结算时间）
        },
        playRuleIdArr: [], // 一级玩法下拉框
        playRuleIdArrb: [], // 二级玩法下拉框
        kindBData: [],// 二级彩种名称
    },
    getters: {},
    mutations: {
        SET_ZHUDAN_DATA: (state, data) => {
            state.allData = data.content;
            state.allData_total = data.totalElements;
        },
        SET_ZHUDAN_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_ZHUDAN_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.size = data
        },

        SET_ZHUDAN_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getZhuDanInfo({ commit }, data) { // 获取用户列表数据
            commit('SET_ZHUDAN_DATA', data)
        },

        getZhuDanTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_ZHUDAN_CURRENTPAGESIZE', data)
        },

        getZhuDanPageSize({ commit }, data) { // 获取当前页码
            commit('SET_ZHUDAN_PAGE_SIZE', data)
        },

        getZhuDanPage({ commit }, data) { // 获取当前页
            commit('SET_ZHUDAN_PAGE', data)
        }
    }
}

export default lc_zhudan