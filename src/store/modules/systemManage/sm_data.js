import { findParentPage } from '@/api/systemManage/sm_data'

const sm_data = {
    state: {
        allData: [],
        allDataCount: 0,
        currentPageSize: 2,
        size: 10,
        page: 1,
        searchForm: {
            dataName: "", // 查询条件-主数据名
        }

    },
    getters: {},
    mutations: {
        SET_DATAINFO: (state, data) => {
            state.allData = data.content
            state.allDataCount = data.totalElements
        },

        SET_DATA_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_DATA_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.size = data
        },

        SET_DATA_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getDataInfoList({ commit }, data) { // 获取主数据信息接口
            return new Promise((resolve, reject) => {
                findParentPage(data).then(response => {
                    if (response.data.success == 1) {
                        let data = response.data.content;
                        commit('SET_DATAINFO', data)
                        resolve(response.data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: response.data.respMsg, success: 2 }
                        commit('SET_DATAINFO', data);
                        resolve(data)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },

        getDataTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_DATA_CURRENTPAGESIZE', data)
        },

        getDataPageSize({ commit }, data) { // 获取当前页码
            commit('SET_DATA_PAGE_SIZE', data)
        },

        getDataPage({ commit }, data) { // 获取当前页
            commit('SET_DATA_PAGE', data)
        }
    }
}

export default sm_data