import { findQutoPage } from '@/api/agentPlatForm/gameManage/ag_userdefine_betlimit'
const ag_userdefine_betlimit = {
    state: {
        allData: [],
        allData_total: 0,
        currentPageSize: 2,
        size: 1000,
        page: 1,
        betlimit: {
            visonName: "", // 当前使用的投注上限版本名称
            isOpen: "", // 是否开启
        },
        disableArr: [],
    },
    getters: {

    },
    mutations: {
        SET_LIMIT_TABLEDATA: (state, data) => {
            state.allData = data.content;
            state.allData_total = data.totalElements;
        },
        SET_LIMIT_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data;
        },
        SET_LIMIT_PAGE_SIZE: (state, data) => {
            state.size = data;
        },
        SET_LIMIT_PAGE: (state, data) => {
            state.page = data;
        }
    },
    actions: {
        getFindQutoPage({ commit }, data) {
            return new Promise((resolve, reject) => {
                findQutoPage(data).then(res => {
                    if (res.data.success == 1) {
                        let data = res.data.content;
                        commit('SET_LIMIT_TABLEDATA', data)
                        resolve(res.data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: res.data.respMsg, success: 2 }
                        commit('SET_LIMIT_TABLEDATA', data);
                        resolve(data)
                    }
                }).catch(err => {
                    reject(err)
                })
            })

        },
        getLimitTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_LIMIT_CURRENTPAGESIZE', data)
        },

        getLimitPageSize({ commit }, data) { // 获取当前页码
            commit('SET_LIMIT_PAGE_SIZE', data)
        },

        getLimitPage({ commit }, data) { // 获取当前页
            commit('SET_LIMIT_PAGE', data)
        }
    }
}

export default ag_userdefine_betlimit