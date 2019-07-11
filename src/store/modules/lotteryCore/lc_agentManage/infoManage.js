import { findPage } from '@/api/lotteryCore/lc_agentManage/infoManage'

const lc_infoManage = {
    state: {
        allData: [],
        allDataCount: 0,
        currentPageSize: 2,
        size: 1000,
        page: 1,
        searchForm: {
            agentBossName: [""], // 代理商老板账号
        }

    },
    mutations: {
        SET_DATAINFO: (state, data) => {
            state.allData = data.content
            state.allDataCount = data.totalElements
        },
        DIALOG_DATA: (state, res) => {
            state.dialogData = res;
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
        infoTableData({ commit }, data) { // 获取代理商管理中的信息管理列表数据
            return new Promise((resolve, reject) => {
                findPage(data).then(response => {
                    const data = response.data.content
                    commit('SET_DATAINFO', data)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // getDialogTableDataList({commit},data){ // 查看完整信息弹框表格数据
        //   return new Promise((resolve,reject) => {  
        //     dialogTableDataList(data).then(res =>{
        //       commit("DIALOG_DATA",data)
        //       resolve(res.data)
        //     })
        //   })
        // },

        getInfoDataTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_DATA_CURRENTPAGESIZE', data)
        },

        getInfoDataPageSize({ commit }, data) { // 获取当前页码
            commit('SET_DATA_PAGE_SIZE', data)
        },

        getInfoDataPage({ commit }, data) { // 获取当前页
            commit('SET_DATA_PAGE', data)
        }
    }
}

export default lc_infoManage;