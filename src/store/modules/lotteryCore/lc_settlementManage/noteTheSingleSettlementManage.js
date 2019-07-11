import { findLotteryGameNoPage } from '@/api/lotteryCore/lc_settlementManage/noteTheSingleSettlementManage'

const lc_settlementManage = {
  state : {
    allData: [],
    allData_total: 0,
    currentPageSize: 2,
    pageSize: 10,
    page: 1
  },
  getters : {

  },
  mutations: {
    SET_SEND_INFOS: (state,data) => {
      state.allData = data.content;
      state.allData_total = data.totalElements;
    },

    SET_SEND_CURRENTPAGESIZE:(state, data) => {
      state.currentPageSize = data
    },

    SET_SEND_PAGE_SIZE:(state, data) => { // 设置当前页码
      state.pageSize = data
    },

    SET_SEND_PAGE:(state, data) => { // 设置当前页
      state.page = data
    }
  },
  actions: {
    getNoteTheSingleSettlementManage({commit}, data) {
      return new Promise((resolve,reject) => {
        findLotteryGameNoPage(data).then(res => {
          const data = res.data.content
          commit("SET_SEND_INFOS", data)
          resolve(data)
        }).catch(err=>{
          reject(err)
        })
      })
    },

    getSettlementTableHeight({commit}, data) { // 获取当前表格高度
      commit('SET_SEND_CURRENTPAGESIZE', data)
    },

    getSettlementPageSize({commit}, data) { // 获取当前页码
      commit('SET_SEND_PAGE_SIZE', data)
    },

    getSettlementPage({commit}, data) { // 获取当前页
      commit('SET_SEND_PAGE', data)
    }
  }
}


export default lc_settlementManage
