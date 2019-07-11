import { findPage } from '@/api/lotteryCore/lc_reportManage/lc_worker_log'

const lc_worker_log = {
  state: {
    allData: [],
    allData_total: 0,
    currentPageSize: 2,
    page: 1,
    size: 10,
    searchEdition: {
      agentInfoIds:[""], // 代理商id列表
      username: "" ,
      dateTime: []   
    },
  },
  getters: {},
  mutations: {
    SET_WORKLOG_DATA: (state, data) => {
      state.allDat = [];
      state.allData_total = 0;
      if(data.content != []){
        state.allData = data.content;
        state.allData_total = data.totalElements;
      }
     
    },
    SET_WORKLOG_CURRENTPAGESIZE:(state, data) => {
      state.currentPageSize = data
    },

    SET_WORKLOG_PAGE_SIZE:(state, data) => { // 设置当前页码
      state.size = data
    },

    SET_WORKLOG_PAGE:(state, data) => { // 设置当前页
      state.page = data
    }
  },
  actions: {
    getWorkLogInfo({commit}, data) { // 获取用户列表数据
      return new Promise((resolve, reject) => {
        findPage(data).then(response => {
          const data = response.data.content;
          commit('SET_WORKLOG_DATA', data)
          resolve(response.data.content)
        }).catch(error => {
          reject(error)
        })
      })
    },

    getWorkLogTableHeight({commit}, data) { // 获取当前表格高度
      commit('SET_WORKLOG_CURRENTPAGESIZE', data)
    },

    getWorkLogPageSize({commit}, data) { // 获取当前页码
      commit('SET_WORKLOG_PAGE_SIZE', data)
    },

    getWorkLogPage({commit}, data) { // 获取当前页
      commit('SET_WORKLOG_PAGE', data)
    }
  }
}

export default lc_worker_log
