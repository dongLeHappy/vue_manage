import { findPage } from '@/api/lotteryCore/lc_reportManage/lc_jiaoyi_record'

const lc_jiaoyi_record = {
  state: {
    allData: [],
    allData_total: 0,
    currentPageSize: 2,
    page: 1,
    size: 10,
    searchEdition:{
      agentInfoIds:[""], // 代理商id列表
      gameUsername: '', // 游戏用户名称
      tradeType: '', // 交易类型
      tradeNo: '', // 平台交易流水号
      agentTradeNo: '', // 代理商交易流水号
      amountMin:"",//起始金额
      amountMax:"", //终止金额
      dateTime:[]
    },
  },
  getters: {},
  mutations: {
    SET_JIAOYI_DATA: (state, data) => {
      state.allData = data.content;
      state.allData_total = data.totalElements;
    },
    SET_JIAOYI_CURRENTPAGESIZE:(state, data) => {
      state.currentPageSize = data
    },

    SET_JIAOYI_PAGE_SIZE:(state, data) => { // 设置当前页码
      state.size = data
    },

    SET_JIAOYI_PAGE:(state, data) => { // 设置当前页
      state.page = data
    }
  },
  actions: {
    getJiaoYiInfo({commit}, data) { // 获取用户列表数据
      return new Promise((resolve, reject) => {
        findPage(data).then(response => {
          const data = response.data.content
          commit('SET_JIAOYI_DATA', data)
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    getJiaoYiTableHeight({commit}, data) { // 获取当前表格高度
      commit('SET_JIAOYI_CURRENTPAGESIZE', data)
    },

    getJiaoYiPageSize({commit}, data) { // 获取当前页码
      commit('SET_JIAOYI_PAGE_SIZE', data)
    },

    getJiaoYiPage({commit}, data) { // 获取当前页
      commit('SET_JIAOYI_PAGE', data)
    }
  }
}

export default lc_jiaoyi_record
