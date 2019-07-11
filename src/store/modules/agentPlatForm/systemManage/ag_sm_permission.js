import { agentPermissionPage } from '@/api/agentPlatForm/systemManage/ag_sm_permission'


const ag_sm_permission = {
    state: {
        allData: [],
        allDataCount: 0,
        currentPageSize: 2,
        pageSize: 1000,
        page: 1,
        searchForm: {
            dataName: "", // 查询条件-主数据名
        }

    },
    getters: {},
    mutations: {
        SET_PERMISSION_DATA: (state, data) => {
            state.allData = data.content
            state.allDataCount = data.totalElements
        },
        SET_AG_PERMISSION_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_AG_PERMISSION_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.pageSize = data
        },

        SET_AG_PERMISSION_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getAgPermissionData({ commit }, data) { // 获取权限列表数据
            return new Promise((resolve, reject) => {
                agentPermissionPage(data).then(response => {
                    if (response.data.success == 1) {
                        let data = response.data.content;
                        commit('SET_PERMISSION_DATA', data)
                        resolve(response.data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: response.data.respMsg, success: 2 }
                        commit('SET_PERMISSION_DATA', data);
                        resolve(data)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },

        getAgPermissionTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_AG_PERMISSION_CURRENTPAGESIZE', data)
        },

        getAgPermissionPageSize({ commit }, data) { // 获取当前页码
            commit('SET_AG_PERMISSION_PAGE_SIZE', data)
        },

        getAgPermissionPage({ commit }, data) { // 获取当前页
            commit('SET_AG_PERMISSION_PAGE', data)
        }
    }
}

export default ag_sm_permission