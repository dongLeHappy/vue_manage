import { findOrderPage } from '@/api/lotteryCore/lc_reportManage/lc_gameuser_log'

const lc_gameuser_log = {
  state: {
    allData: [],
    allData_total: 0,
    currentPageSize: 2,
    page: 1,
    size: 10,
    searchEdition: {
      agentInfoIds:[""], // 代理商id列表
      username: "", // 游戏用户名称
      gameUserCode: "", // 平台游戏用户id
      dateTime:[],
      deviceArr:"" // 终端设备
    },
  },
  getters: {},
  mutations: {
    SET_GAME_USER_DATA: (state, data) => {
      state.allData = data.content;
      state.allData_total = data.totalElements;
    },
    SET_GAMEUSER_CURRENTPAGESIZE:(state, data) => {
      state.currentPageSize = data
    },

    SET_GAMEUSER_PAGE_SIZE:(state, data) => { // 设置当前页码
      state.size = data
    },

    SET_GAMEUSER_PAGE:(state, data) => { // 设置当前页
      state.page = data
    }
  },
  actions: {
    getGameUserLogInfo({commit}, data) { // 获取用户列表数据
      return new Promise((resolve, reject) => {
        findOrderPage(data).then(response => {
          const data = response.data.content
          commit('SET_GAME_USER_DATA', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    getGameUserTableHeight({commit}, data) { // 获取当前表格高度
      commit('SET_GAMEUSER_CURRENTPAGESIZE', data)
    },

    getGameUserPageSize({commit}, data) { // 获取当前页码
      commit('SET_GAMEUSER_PAGE_SIZE', data)
    },

    getGameUserPage({commit}, data) { // 获取当前页
      commit('SET_GAMEUSER_PAGE', data)
    }
  }
}

export default lc_gameuser_log
