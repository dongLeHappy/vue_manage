import { findParentPage } from '@/api/lotteryCore/lc_info/lc_playBetValue'

const lc_playBetValue = {
    state: {
        allData: [],
        allData_total: 0,
        currentPageSize: 2,
        size: 10,
        page: 1,
        searchEdition: { //  查询栏
            parentLotteryId: "", // 一级彩种名称
            menuPlayRuleId: "", // 一级玩法名称
            playRuleId: "", // 二级玩法名称
            betValue: "", // 下注值
            h5Flag: "", // 是否启用
        },
        disableControl: false, // 不可编辑所有的
        firstRuleDisabled: true, // 一级玩法不可编辑
        secondRuleDisabled: true, // 二级玩法不可编辑
    },
    getters: {

    },
    mutations: {
        GET_BETVALUETABLEDATA: (state, res) => {
            state.allData = res.content.content;
            state.allData_total = res.content.totalElements;
        },
        SET_BETVALUECURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data;
        },
        SET_BETVALUEPAGE_SIZE: (state, data) => {
            state.size = data;
        },
        SET_BETVALUEPAGE: (state, data) => {
            state.page = data;
        }
    },
    actions: {
        getFindParentPage({ commit }, data) {
            return new Promise((resolve, reject) => {
                findParentPage(data).then(res => {
                    if (res.data.success == 1) {
                        let data = res.data;
                        commit("GET_BETVALUETABLEDATA", data)
                        resolve(data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: res.data.respMsg, success: 2 }
                        commit('SET_USERDATA', data);
                        resolve(data)
                    }
                }).catch(err => {

                })
            })
        },
        getBetValueTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_BETVALUECURRENTPAGESIZE', data)
        },

        getBetValuePageSize({ commit }, data) { // 获取当前页码
            commit('SET_BETVALUEPAGE_SIZE', data)
        },

        getBetValuePage({ commit }, data) { // 获取当前页
            commit('SET_BETVALUEPAGE', data)
        }
    }
}


export default lc_playBetValue