import { findPage } from '@/api/systemManage/sm_mask'

const sm_mask = {
    state: {
        allData: [],
        allData_total: 0,
        currentPageSize: 2,
        size: 10,
        page: 1,
        searchEdition: {
            name: null, // 定时任务名称
            status: "1" // 定时任务状态
        },
    },
    getters: {

    },
    mutations: {
        SET_MASKDATA: (state, data) => {
            state.allData = data.content
            state.allData_total = data.totalElements
        },

        SET_MASK_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_MASK_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.size = data
        },

        SET_MASK_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getMaskData({ commit }, data) { // 获取列表数据
            return new Promise((resolve, reject) => {
                findPage(data).then(response => {
                    if (response.data.success == 1) {
                        let data = response.data.content;
                        commit('SET_MASKDATA', data)
                        resolve(response.data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: response.data.respMsg, success: 2 }
                        commit('SET_MASKDATA', data);
                        resolve(data)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getMaskTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_MASK_CURRENTPAGESIZE', data)
        },

        getMaskPageSize({ commit }, data) { // 获取当前页码
            commit('SET_MASK_PAGE_SIZE', data)
        },

        getMaskPage({ commit }, data) { // 获取当前页
            commit('SET_MASK_PAGE', data)
        }
    }
}

export default sm_mask