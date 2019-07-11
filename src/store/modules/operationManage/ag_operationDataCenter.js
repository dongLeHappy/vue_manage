import { findPage } from '@/api/operationManage/ag_operationDataCenter'

const ag_operationDataCenter = {
    state: {
        allData: [],
        allData_total: 0,
        currentPageSize: 2,
        size: 10,
        page: 1,
        btnType: '' ,// 用户判断按钮类型
        searchEdition: {
            agentInfoIds: [""], // 代理商id列表
            showDetail: '', // 是否显示详情
            dateTime: [],
            obtainTimeBegin: "",
            obtainTimeEnd: "",
            page: 0,
            size: 0,
        },
    },
    getters: {},
    mutations: {
        SET_OPERATIONDATA: (state, data) => {
            state.allData = data.content;
            state.allData_total = data.totalElements

        },
        SET_OPERATION_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_OPERATION_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.size = data
        },

        SET_OPERATION_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getOperationData({ commit }, data) { // 获取运营数据中心表数据
            return new Promise((resolve, reject) => {
                findPage(data).then(response => {
                    const data = response.data.content
                    commit('SET_OPERATIONDATA', data)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getOperationTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_OPERATION_CURRENTPAGESIZE', data)
        },

        getOperationPageSize({ commit }, data) { // 获取当前页码
            commit('SET_OPERATION_PAGE_SIZE', data)
        },

        getOperationPage({ commit }, data) { // 获取当前页
            commit('SET_OPERATION_PAGE', data)
        }
    }
}

export default ag_operationDataCenter