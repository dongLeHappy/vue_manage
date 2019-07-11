import { findSettleOrderPage } from '@/api/lotteryCore/lc_settlementManage/noteTheSingleDetailManage'

const lc_noteTheSingleDetail = {
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
    SET_DETAIL_INFOS: (state,res) => {
      state.allData = res.content;
      state.allData_total = res.totalElements;
    },

    SET_DETAIL_CURRENTPAGESIZE:(state, data) => {
      state.currentPageSize = data
    },

    SET_DETAIL_PAGE_SIZE:(state, data) => { // 设置当前页码
      state.pageSize = data
    },

    SET_DETAIL_PAGE:(state, data) => { // 设置当前页
      state.page = data
    }
  },
  actions: {
    getNoteTheSingleDetailManage({commit}, data) {
      return new Promise((resolve,reject) => {
        findSettleOrderPage(data).then(res => {
          const data = res.data.content
          commit("SET_DETAIL_INFOS", data)
          resolve(data)
        }).catch(err=>{
          reject(err)
        })
      })
    },

    getDetailTableHeight({commit}, data) { // 获取当前表格高度
      commit('SET_DETAIL_CURRENTPAGESIZE', data)
    },

    getDetailPageSize({commit}, data) { // 获取当前页码
      commit('SET_DETAIL_PAGE_SIZE', data)
    },

    getDetailPage({commit}, data) { // 获取当前页
      commit('SET_DETAIL_PAGE', data)
    }
  }
}


export default lc_noteTheSingleDetail
