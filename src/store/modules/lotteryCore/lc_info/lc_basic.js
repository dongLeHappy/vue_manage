import { findPage } from '@/api/lotteryCore/lc_info/lc_basic'

const lc_basic = {
  state: {
    allData: [],
    allDataCount: 0,
    currentPageSize: 2,
    pageSize: 10,
    page: 1,
    wanfaType: [], // 版本对应的玩法集合
    wanfaData: [], // 当前玩法对应的数据
    // activeIndex: '生肖（香港彩）', // 当前选中的玩法
  },
  getters: {
      
  },
  mutations: {
    SET_BASIC_INFO: (state, res) => {
      state.allData = res.content;
      state.allDataCount = res.totalElements;
    },
    SET_WANFA_TYPE: (state, data) => { // 设置玩法集合
      state.wanfaType = data;
    },
    SET_WANFA_DATA: (state, data) => { // 设置玩法数据
      state.wanfaData = data;
    },
    SET_CURRENT_WANFA: (state, data) => { // 设置当前选中玩法
      state.activeIndex = data
    },
    SET_BASIC_CURRENTPAGESIZE:(state, data) => {
      state.currentPageSize = data
    },
    SET_BASIC_PAGE_SIZE:(state, data) => { // 设置当前页码
      state.pageSize = data
    },

    SET_BASIC_PAGE:(state, data) => { // 设置当前页
      state.page = data
    }
  },
  actions: {
    getLcBasicInfo({commit}, data) { // 获取列表信息
      return new Promise((resolve, reject) => {
        findPage(data).then(res => {
          let data = res.data.content
            commit('SET_BASIC_INFO', data)
            resolve(data)
        }).catch(err => {
            reject(err)
        })
      })
    },
    getLcBasicTableHeight({commit}, data) { // 获取当前表格高度
      commit('SET_BASIC_CURRENTPAGESIZE', data)
    },
  
    getLcBasicPageSize({commit}, data) { // 获取当前页码
      commit('SET_BASIC_PAGE_SIZE', data)
    },

    getLcBasicPage({commit}, data) { // 获取当前页
      commit('SET_BASIC_PAGE', data)
    }
  }
}

export default lc_basic
