import { findPage } from '@/api/lotteryCore/lc_agentManage/clientManage'

const lc_clientManage = {
    state: {
        allData: [],
        allDataCount: 0,
        currentPageSize: 2,
        pageSize: 1000,
        page: 1,
        searchEdition: {
            content: "", // 消息标题
            disable: "", //状态
            device: "" // 显示终端
        },
    },
    mutations: {
        SET_DATAINFO: (state, data) => {
            state.allData = data.content,
                state.allDataCount = data.totalElements
        },

        SET_DATA_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_DATA_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.pageSize = data
        },

        SET_DATA_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getMsgTableData({ commit }, data) { // 获取角色列表数据

            return new Promise((resolve, reject) => {
                findPage(data).then(response => {

                    if (response.data.success == 1) {
                        let data = response.data.content;
                        commit('SET_DATAINFO', data)
                        resolve(response.data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: response.data.respMsg, success: 2 }
                        commit('SET_DATAINFO', data);
                        resolve(data)
                    }



                    // if (response.data.success == 1) {
                    //     let data = response.data.content;
                    //     commit('SET_DATAINFO', data);
                    //     resolve(data)
                    // } else {
                    //     let data = { content: [], totalElements: 0, msg: response.respMsg }
                    //     commit('SET_DATAINFO', data);
                    //     resolve(data)
                    // }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getSendMsgTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_DATA_CURRENTPAGESIZE', data)
        },

        getSendMsgPageSize({ commit }, data) { // 获取当前页码
            commit('SET_DATA_PAGE_SIZE', data)
        },

        getSendMsgPage({ commit }, data) { // 获取当前页
            commit('SET_DATA_PAGE', data)
        }
    }
}

export default lc_clientManage;