import { findPage } from '@/api/lotteryCore/lc_info/lc_second'

const lc_second = {
    state: {
        allData: [],
        allDataCount: 0,
        currentPageSize: 2,
        size: 1000,
        page: 1,
        searchEdition:{ // 查询条件
            id: '',
            parentId: "",
            disable: '',
            category: '', // 彩种性质
            frequency: '', // 彩种类型
            level: '1',
            disabledSecond: true, // 是否启用二级弹出框
        },
        firstLotterySelect:[], // 一级彩种下拉数据
        secondLotterySelect:[],  // 二级彩种下拉选择数据
        disableArr: [], // 状态下拉数据
        lotteryCategoryArr: [],  // 彩种性质下拉数据
        frequencyArr: [], // 彩种类型
    },
    getters: {

    },
    mutations: {
        SET_SECOND_INFO: (state, res) => {
            state.allData = res.content;
            state.allDataCount = res.totalElements;
        },

        SET_LCSECOND_CURRENTPAGESIZE: (state, data) => {
            state.currentPageSize = data
        },

        SET_LCSECOND_PAGE_SIZE: (state, data) => { // 设置当前页码
            state.size = data
        },

        SET_LCSECOND_PAGE: (state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getLcSecondInfo({ commit }, data) { // 获取二级彩种信息
            return new Promise((resolve, reject) => {
                findPage(data).then(res => {
                    let data = res.data.content;
                    commit('SET_SECOND_INFO', data)
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            })
        },

        getLcSecondTableHeight({ commit }, data) { // 获取当前表格高度
            commit('SET_LCSECOND_CURRENTPAGESIZE', data)
        },

        getLcSecondPageSize({ commit }, data) { // 获取当前页码
            commit('SET_LCSECOND_PAGE_SIZE', data)
        },

        getLcSecondPage({ commit }, data) { // 获取当前页
            commit('SET_LCSECOND_PAGE', data)
        }
    }
}

export default lc_second
