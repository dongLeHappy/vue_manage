import {fetchList,changePwd} from '@/api/systemManage/sm_admin'

const sm_admin = {
  state: {
    allData: [],
    allData_total: 0,
    changeStatus: '',
    changePwdCode: '',
    currentPageSize: 2,
    pageSize: 10,
    page: 1
  },
  getters: {

  },
  mutations: {
    SET_ADMINDATA: (state, data) => {
      state.allData = data.data.data
      state.allData_total = data.data.total
    },

    CHANGE_PWD:(state, data) => {
      state.changeStatus = data.msg
      state.changePwdCode = data.code
    },

    SET_ADMIN_CURRENTPAGESIZE:(state, data) => {// 设置当前表格无数据高度
      state.currentPageSize = data
    },

    SET_PAGE_SIZE:(state, data) => { // 设置当前页码
      state.pageSize = data
    },

    SET_PAGE:(state, data) => { // 设置当前页
      state.page = data
    }
  },
  actions: {
    getAdminData({commit}, data) { // 获取角色列表数据
      return new Promise((resolve, reject) => { 
        fetchList(data).then(response => {
          const data = response.data
          commit('SET_ADMINDATA', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    
    changePwd({commit}, data) { // 修改用户密码
      return new Promise((resolve, reject) => {
        changePwd(data).then(response => {
          const data = response.data
          commit('CHANGE_PWD',data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    getAdminTableHeight({commit}, data) { // 获取当前表格高度
      commit('SET_ADMIN_CURRENTPAGESIZE', data)
    },

    getPageSize({commit}, data) { // 获取当前页码
      commit('SET_PAGE_SIZE', data)
    },

    getPage({commit}, data) { // 获取当前页
      commit('SET_PAGE', data)
    }
  }
}

export default sm_admin
