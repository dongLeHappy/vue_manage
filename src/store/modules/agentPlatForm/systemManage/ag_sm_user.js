import { findAgentUserPage, fetchDialogList, saveAccreditData } from '@/api/agentPlatForm/systemManage/ag_sm_user'

const ag_sm_user = {
    state: {
        allData: [],
        allDataCount: 0,
        dialogTableData: [],
        currentPageSize: 2,
        pageSize: 1000,
        page: 1,
        smUserForm: { // 查询条件
            username: "", // 代理商员工名称
            disable: "",
            dateTime: "",
        },

        disableArr: [], // 状态下拉列表
    },
    getters: {},
    mutations: {
        SET_USER_DATA: (state, data) => {
            state.allData = data.content
            state.allDataCount = data.totalElements
        },
        SET_USER_DIALOGTABLE_DATA: (state, data) => { // 设置弹窗表格数据
            state.dialogTableData = data.data._list

        },
        SET_AG_USER_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_AG_USER_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.pageSize = data
        },

        SET_AG_USER_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getAgUserData({ commit }, data) { // 获取权限列表数据
            return new Promise((resolve, reject) => {
                findAgentUserPage(data).then(response => {


                    if (response.data.success == 1) {
                        let data = response.data.content;
                        commit('SET_USER_DATA', data)
                        resolve(response.data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: response.data.respMsg, success: 2 }
                        commit('SET_USER_DATA', data);
                        resolve(data)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getAgDialogTableData({ commit }, data) { // 获取弹窗表格数据
            return new Promise((resolve, reject) => {
                fetchDialogList(data).then(response => {
                    const data = response.data
                    commit('SET_USER_DIALOGTABLE_DATA', data)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getSaveAccreditData({ commit }, data) { // 获取弹窗表格数据
            return new Promise((resolve, reject) => {
                saveAccreditData(data).then(response => {
                    const data = response.data
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getAgUserTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_AG_USER_CURRENTPAGESIZE', data)
        },

        getAgUserPageSize({ commit }, data) { // 获取当前页码
            commit('SET_AG_USER_PAGE_SIZE', data)
        },

        getAgUserPage({ commit }, data) { // 获取当前页
            commit('SET_AG_USER_PAGE', data)
        }
    }
}

export default ag_sm_user