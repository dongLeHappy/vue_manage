const lc_comprehensiveTest = {
  state: {
    allData: [],
    allData_total: 0,
    currentPageSize: 2,
    page: 1,
    pageSize: 10
  },
  getters: {},
  mutations: {
    SET_VALIDATA_DATA: (state, data) => {
      state.allData = data.content;
      state.allData_total = data.totalElements;
    },
    SET_VALIDATA_CURRENTPAGESIZE:(state, data) => {
      state.currentPageSize = data
    },

    SET_VALIDATA_PAGE_SIZE:(state, data) => { // 设置当前页码
      state.pageSize = data
    },

    SET_VALIDATA_PAGE:(state, data) => { // 设置当前页
      state.page = data
    }
  },
  actions: {
    getValidateInfo({commit}, data) { // 获取用户列表数据
      commit('SET_USERDATA', data)
    },

    getValidateTableHeight({commit}, data) { // 获取当前表格高度
      commit('SET_VALIDATA_CURRENTPAGESIZE', data)
    },

    getValidatePageSize({commit}, data) { // 获取当前页码
      commit('SET_VALIDATA_PAGE_SIZE', data)
    },

    getValidatePage({commit}, data) { // 获取当前页
      commit('SET_VALIDATA_PAGE', data)
    }
  }
}

export default lc_comprehensiveTest
