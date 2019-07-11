import { findPage } from '@/api/operationManage/ag_gameUserManage'

const ag_gameUserManage = {
    state: {
        allData: [],
        allData_total: 0,
        currentPageSize: 2,
        size: 10,
        page: 1,
        searchEdition: { // 搜索条件
            agentInfoIds: [""],
            username: '',
            gameUserId: '',
            online: '',
            device: '',
            disable: '',
            agentDisable: '',
            dateTime: [], // 最后登录时间
            creationTime: [], // 创建时间
            lastLoginTimeBegin: "",
            lastLoginTimeEnd: "",
            page: 0,
            size: 0,
        },
    },
    getters: {},
    mutations: {
        SET_GAMAUSERDATA: (state, data) => {
            state.allData = data.content
            state.allData_total = data.totalElements
        },
        SET_GAMAUSER_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_GAMAUSER_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.size = data
        },

        SET_GAMAUSER_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getGameUserData({ commit }, data) { // 获取运营数据中心表数据
            commit('SET_GAMAUSERDATA', data)
        },
        getGameUserTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_GAMAUSER_CURRENTPAGESIZE', data)
        },

        getGameUserPageSize({ commit }, data) { // 获取当前页码
            commit('SET_GAMAUSER_PAGE_SIZE', data)
        },

        getGameUserPage({ commit }, data) { // 获取当前页
            commit('SET_GAMAUSER_PAGE', data)
        }
    }
}

export default ag_gameUserManage