
const lc_maximumBetsManage = {
  state : {
    allData: [],
    allData_total: 0,
    currentPageSize: 2,
    size: 1000,
    page: 1,
    searchForm:{  // 头部搜索栏
      name:"", 
      disable:""
    },
    theStatus:[
      {value:"",name:"全部"},     
    ],

  },
  getters : {},
  mutations: {
    SET_MAXIMUMBETSMANAGE_TABLE_INFOS: (state,res) => {
      state.allData = res.content;
      state.allData_total = res.totalElements;
    },

    SET_MAXIMUMBETSMANAGE_TABLE_HEIGHT:(state, data) => {
      state.currentPageSize = data
    },

    SET_MAXIMUMBETSMANAGE_SIZE:(state, data) => { // 设置当前页码
      state.size = data
    },

    SET_MAXIMUMBETSMANAGE_PAGE:(state, data) => { // 设置当前页
      state.page = data
    }
  },
  actions: {
    getMaximumBetsData({commit}, data) {
      commit("SET_MAXIMUMBETSMANAGE_TABLE_INFOS", data)
    },

    getMaximumBetsTableHeight({commit}, data) { // 获取当前表格高度
      commit('SET_MAXIMUMBETSMANAGE_TABLE_HEIGHT', data)
    },

    getMaximumBetsSize({commit}, data) { // 获取当前页码
      commit('SET_MAXIMUMBETSMANAGE_SIZE', data)
    },

    getMaximumBetsPage({commit}, data) { // 获取当前页
      commit('SET_MAXIMUMBETSMANAGE_PAGE', data)
    }
  }
}


export default lc_maximumBetsManage
