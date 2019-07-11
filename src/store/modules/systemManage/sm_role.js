import { findPage } from '@/api/systemManage/sm_role'

let allStr = "";
const sm_role = {
    state: {
        allData: [], // 列表的所有数据
        allData_count: 0, // 列表的总条数
        currentPageSize: 2,
        page: 1,
        pageSize: 1000,
        formInline: { // 查询条件
            name: null,
            disable: "",
        },
    },
    getters: {

    },
    mutations: {
        SET_ROLE_DATAINFO: (state, data) => { // ---获取角色列表数据
            state.allData = data.content;
            state.allData_count = data.totalElements;
        },
        SET_ROLE_CURRENTPAGESIZE: (state, data) => { // 设置当前表格高度
            state.currentPageSize = data
        },
        SET_ROLE_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.pageSize = data
        },
        SET_ROLE_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }

    },
    actions: {
        getRoleinfo({ commit }, data) { // 获取角色列表数据
            return new Promise((resolve, reject) => {
                findPage(data).then(response => {
                    if (response.data.success == 1) {
                        let data = response.data.content;
                        commit('SET_ROLE_DATAINFO', data)
                        resolve(response.data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: response.data.respMsg, success: 2 }
                        commit('SET_ROLE_DATAINFO', data);
                        resolve(data)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },

        getRoleTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_ROLE_CURRENTPAGESIZE', data)
        },

        getRolePageSize({ commit }, data) { // 获取当前页码
            commit('SET_ROLE_PAGE_SIZE', data)
        },

        getRolePage({ commit }, data) { // 获取当前页
            commit('SET_ROLE_PAGE', data)
        }
    }
}

export default sm_role