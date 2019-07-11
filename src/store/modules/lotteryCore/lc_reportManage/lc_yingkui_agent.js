import { findOrderAgent } from '@/api/lotteryCore/lc_reportManage/lc_yingkui_agent'

const lc_yingkui_agent = {
    state: {
        allData: [],
        allData_total: 0,
        currentPageSize: 2,
        page: 1,
        size: 10,
        searchEdition: {
            agentInfoIds: [""], // 代理商老板id列表
            parentLotteryId: '', // 一级彩种编码
            lotteryId: '', // 二级彩种编码
            playRuleId: '', // 二级玩法Id
            gameNo: '', // 开奖期号
            betAmountBegin: '', // 起始总投注额
            betAmountEnd: '', // 截止总投注额
            effictiveBegin: '', // 起始有效投注金额
            effictiveEnd: '', // 截止有效投注金额
            winLossBegin: '', // 起始输赢金额
            winLossEnd: '', // 截止输赢金额
            totalBetBegin: '', // 起止总注单数
            totalBetEnd: '', // 截止总注单数
            totalBetUserBegin: '', // 起始总下注人数
            totalBetUserEnd: '', // 截止总下注人数
            BetOnTime: [], //下注时间 
            TheLotteryTime: [], //开奖时间
            ClearingTime: [], //结算时间
            enableBetsTime: false, // 禁用下注时间
            enableOpenTime: true, // 禁用开奖时间
            enableBillTime: true, // 禁用结算时间
            disabledSecond: true, // 二级彩种不可编辑
            disabledRule: true // 二级玩法
        },
        agentInfoIdsArr: [], // 代理商老板id
        playRuleIdArr: [], // 二级玩法下拉框
        kindAData: [], // 一级彩种下拉选择数据
        kindBData: [], // 二级彩种下拉选择数据
    },
    getters: {},
    mutations: {
        SET_YINGKUI_DATA: (state, data) => {
            state.allData = [];
            if (data.content.length > 0) {
                state.allData = data.content;
            }
            state.allData = data.content;
            state.allData_total = data.totalElements;
        },
        SET_YINGKUI_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_YINGKUI_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.size = data
        },

        SET_YINGKUI_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getYingKuiAgentInfo({ commit }, data) { // 获取用户列表数据
            return new Promise((resolve, reject) => {
                findOrderAgent(data).then(response => {
                    const data = response.data;
                   
                    if(data.success == 1){
                    commit('SET_YINGKUI_DATA', data)
                    }
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        getYingKuiTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_YINGKUI_CURRENTPAGESIZE', data)
        },

        getYingKuiPageSize({ commit }, data) { // 获取当前页码
            commit('SET_YINGKUI_PAGE_SIZE', data)
        },

        getYingKuiPage({ commit }, data) { // 获取当前页
            commit('SET_YINGKUI_PAGE', data)
        }
    }
}

export default lc_yingkui_agent