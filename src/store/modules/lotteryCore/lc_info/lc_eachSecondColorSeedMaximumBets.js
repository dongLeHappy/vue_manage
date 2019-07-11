
const lc_eachSecondColorSeedMaximumBets = {
  state : {
    allData: [],
    allData_total: 0,
    currentPageSize: 2,
    size: 10,
    page: 1,
    everyPercentSearch:{  // 头部搜索栏
      secondPercentVison:'',
      firstLevel:'',
      secondLevel:'',
      disabledSecond:true
    },
    kindAData:[  // 一级彩种下拉选择数据
      { value: "",name: "请选择"}
    ],
    kindBData:[   // 二级彩种下拉选择数据
      { value: "",name: "请选择"}
    ],

  },
  getters : {},
  mutations: {
    SET_EACHSECONDCOLORSEED_TABLE_INFOS: (state,res) => {
      state.allData = res.content;
      state.allData_total = res.totalElements;
    },

    SET_EACHSECONDCOLORSEED_TABLE_HEIGHT:(state, data) => {
      state.currentPageSize = data
    },

    SET_EACHSECONDCOLORSEED_SIZE:(state, data) => { // 设置当前页码
      state.size = data
    },

    SET_EACHSECONDCOLORSEED_PAGE:(state, data) => { // 设置当前页
      state.page = data
    }
  },
  actions: {
    getEachSecondColorSeedTableData({commit}, data) {
      commit("SET_EACHSECONDCOLORSEED_TABLE_INFOS", data)
    },

    getEachSecondColorSeedTableHeight({commit}, data) { // 获取当前表格高度
      commit('SET_EACHSECONDCOLORSEED_TABLE_HEIGHT', data)
    },

    getEachSecondColorSeedSize({commit}, data) { // 获取当前页码
      commit('SET_EACHSECONDCOLORSEED_SIZE', data)
    },

    getEachSecondColorSeedPage({commit}, data) { // 获取当前页
      commit('SET_EACHSECONDCOLORSEED_PAGE', data)
    }
  }
}


export default lc_eachSecondColorSeedMaximumBets
