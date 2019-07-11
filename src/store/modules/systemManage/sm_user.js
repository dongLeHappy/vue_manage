import { findPage } from '@/api/systemManage/sm_user'

const sm_user = {
    state: {
        allData: [],
        allData_total: 0,
        currentPageSize: 2,
        page: 1,
        size: 1000,
        smUserForm: { // 查询条件
            username: null,
            disable: "0"
        },
        formInline: { // 权限管理页面中的搜索条件
            // 查询form数据
            name: "",
            owner: "",
            dateTime: {
                // 查询条件时间范围
                sdate: "",
                edate: ""
            }
        },
    },
    getters: {},
    mutations: {
        SET_USERDATA: (state, data) => {
            state.allData = data.content;
            state.allData_total = data.totalElements;
        },
        SET_USER_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_USER_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.size = data
        },

        SET_USER_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getUserInfo({ commit }, data) { // 获取用户列表数据
            return new Promise((resolve, reject) => {
                findPage(data).then(response => {
                    if (response.data.success == 1) {
                        let data = response.data.content;
                        commit('SET_USERDATA', data)
                        resolve(response.data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: response.data.respMsg, success: 2 }
                        commit('SET_USERDATA', data);
                        resolve(data)
                    }

                }).catch(error => {
                    reject(error)
                })
            })
        },

        getUserTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_USER_CURRENTPAGESIZE', data)
        },

        getUserPageSize({ commit }, data) { // 获取当前页码
            commit('SET_USER_PAGE_SIZE', data)
        },

        getUserPage({ commit }, data) { // 获取当前页
            commit('SET_USER_PAGE', data)
        }
    }
}

export default sm_user