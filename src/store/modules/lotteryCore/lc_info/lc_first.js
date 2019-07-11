import {findParentPage} from '@/api/lotteryCore/lc_info/lc_first'

const lc_first = {
  state : {
    allData: [],
    allData_total: 0,
    currentPageSize: 2,
    size: 1000,
    page: 1,
    searchEdition: {
      id: "", // 一级彩种id
      disable: "" // 状态
    },
    firstSelect: [{ value: "",name: "请选择"}], // 一级彩种下拉列表数据
    disableArr: [{ value: "",name: "全部"}],// 启用状态下拉列表数据
  },
  getters : {
    
  },
  mutations: {
    SET_LCFIRST_INFOS: (state,res) => {
      state.allData = res.content;
      state.allData_total = res.totalElements;
    },

    SET_LCFIRST_CURRENTPAGESIZE:(state, data) => {
      state.currentPageSize = data
    },

    SET_LCFIRST_PAGE_SIZE:(state, data) => { // 设置当前页码
      state.size = data
    },

    SET_LCFIRST_PAGE:(state, data) => { // 设置当前页
      state.page = data
    }
  },
  actions: {
    getLcFirstInfo({commit}, data) {
      return new Promise((resolve,reject) => {
        findParentPage(data).then(res => {
          let data = res.data.content;
          commit("SET_LCFIRST_INFOS", data)
          resolve(data)
        }).catch(err=>{
          reject(err)
        })
      })
    },

    getLcFirstTableHeight({commit}, data) { // 获取当前表格高度
      commit('SET_LCFIRST_CURRENTPAGESIZE', data)
    },

    getLcFirstPageSize({commit}, data) { // 获取当前页码
      commit('SET_LCFIRST_PAGE_SIZE', data)
    },

    getLcFirstPage({commit}, data) { // 获取当前页
      commit('SET_LCFIRST_PAGE', data)
    }
  }
}


export default lc_first
