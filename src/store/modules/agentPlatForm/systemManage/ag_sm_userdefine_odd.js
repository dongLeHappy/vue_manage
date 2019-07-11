import { findAgentPage } from '@/api/agentPlatForm/systemManage/ag_sm_userdefine_odd'

const ag_sm_userdefine_odd = {
    state: {
        tree_data: [], // 彩种树数据
        allData: [],
        allDataCount: 0,
        currentPageSize: 2,
        pageSize: 1000,
        page: 1,
        searchForm: {
            currentVersion: null,
            isOpen: null,
        },
        loadingObj:{
            LoadingTree:false,
            LoadingTable:false,
            Loadingplay:false,

        },
        currentWanfa:"", // 选中的玩法ID
        setPlayingMethod:"", // 选中的玩法名称
    },
    getters: {},
    mutations: {
        SET_AG_USERDEFINE_ODD_DATA: (state, data) => { // 获取表格信息
            state.allData = data.content;
            state.allDataCount = data.totalElements;

        },
        SET_TREE_DATA: (state, data) => { // 设置彩种树数据
            state.tree_data = data
        },
        SET_AG_USERDEFINE_ODD_CURRENTPAGESIZE: (state, data) => { // 设置当前表格高度
            state.currentPageSize = data
        },

        SET_AG_USERDEFINE_ODD_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.pageSize = data
        },

        SET_AG_USERDEFINE_ODD_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getAgUserDefineOddData({ commit }, data) { // 获取列表数据
            return new Promise((resolve, reject) => {
                findAgentPage(data).then(response => {

                    if (response.data.success == 1) {
                        let data = response.data.content;
                        commit('SET_AG_USERDEFINE_ODD_DATA', data)
                        resolve(response.data)
                    } else {
                        let data = { content: [], totalElements: 0, respMsg: response.data.respMsg, success: 2 }
                        commit('SET_AG_USERDEFINE_ODD_DATA', data);
                        resolve(data)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },

        getAgUserDefineOddTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_AG_USERDEFINE_ODD_CURRENTPAGESIZE', data)
        },

        getAgUserDefineOddPageSize({ commit }, data) { // 获取当前页码
            commit('SET_AG_USERDEFINE_ODD_PAGE_SIZE', data)
        },

        getAgUserDefineOddPage({ commit }, data) { // 获取当前页
            commit('SET_AG_USERDEFINE_ODD_PAGE', data)
        }
    }
}

export default ag_sm_userdefine_odd