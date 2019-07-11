import { findPage } from '@/api/systemManage/sm_ip'

const sm_ip = {
    state: {
        allData: [],
        allDataCount: 0,
        currentPageSize: 2,
        size: 10,
        page: 1,
        searchEdition: {
            address: '',
            category: ''
        },
    },
    getters: {},
    mutations: {
        SET_IPINFO: (state, data) => {
            state.allData = data.content,
                state.allDataCount = data.totalElements
        },

        SET_IP_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_IP_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.size = data
        },

        SET_IP_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getIpInfoList({ commit }, data) { // 获取IP信息接口
            return new Promise((resolve, reject) => {
                findPage(data).then(response => {
                    if (response.data.success == 1) {
                        let data = response.data.content;
                        commit('SET_IPINFO', data)
                        resolve(response.data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: response.data.respMsg, success: 2 }
                        commit('SET_IPINFO', data);
                        resolve(data)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getIpTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_IP_CURRENTPAGESIZE', data)
        },

        getIpPageSize({ commit }, data) { // 获取当前页码
            commit('SET_IP_PAGE_SIZE', data)
        },

        getIpPage({ commit }, data) { // 获取当前页
            commit('SET_IP_PAGE', data)
        }
    }
}

export default sm_ip