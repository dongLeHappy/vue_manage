import { getTableList } from '@/api/lotteryCore/lc_info/lc_peopleOnlineManage'


const lc_peopleOnline = {
    state: {
        allData: [],
        allDataCount: 0,
        currentPageSize: 2,
        size: 1000,
        page: 1,
        onlinePeople: { // 查询条件
            name: '',
            disable: '',
        },
        disableArr: [], // 状态下拉数据
    },
    getters: {

    },
    mutations: {
        GET_PEOPLEOBLINEDATA: (state, data) => {
            state.allData = data
        },
        SET_PEOPLEOBLINE_TABLE_HEIGHT: (state, data) => {
            state.currentPageSize = data
        },
        SET_PEOPLEOBLINE_SIZE: (state, data) => {
            state.size = data;
        },
        SET_PEOPLEOBLINE_PAGE: (state, data) => {
            state.page = data;
        }
    },
    actions: {
        getTableListData({ commit }, data) { // 请求表格数据
            commit("GET_PEOPLEOBLINEDATA", data)
        },
        getPeopleOnlineTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_PEOPLEOBLINE_TABLE_HEIGHT', data)
        },
        getPeopleOnlineSize({ commit }, data) { // 获取当前页码
            commit('SET_PEOPLEOBLINE_SIZE', data)
        },
        getPeopleOnlinePage({ commit }, data) { // 获取当前页
            commit('SET_PEOPLEOBLINE_PAGE', data)
        }
    }
}

export default lc_peopleOnline