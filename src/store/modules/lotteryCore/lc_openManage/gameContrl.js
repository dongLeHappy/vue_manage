import {gameControlTabData} from '@/api/lotteryCore/lc_openManage/gameControl'

const lc_gameControl = {
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
        SET_CONTROL_INFOS: (state,res) => {
          state.allData = res.data;
          state.allData_total = res.total;
        },
    
        SET_CONTROL_CURRENTPAGESIZE:(state, data) => {
          state.currentPageSize = data
        },
    
        SET_CONTROL_PAGE_SIZE:(state, data) => { // 设置当前页码
          state.pageSize = data
        },
    
        SET_CONTROL_PAGE:(state, data) => { // 设置当前页
          state.page = data
        }
      },
    actions: {
        getGameControlTabData({commit}, data) { // 游戏控制表格接口
            return new Promise((resolve, reject) => {
              gameControlTabData(data).then(response => {
                    const data = response.data.data;
                    commit("SET_CONTROL_INFOS", data)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getControlTableHeight({commit}, data) { // 获取当前表格高度
          commit('SET_CONTROL_CURRENTPAGESIZE', data)
        },
    
        getControlPageSize({commit}, data) { // 获取当前页码
            commit('SET_CONTROL_PAGE_SIZE', data)
        },
    
        getControlPage({commit}, data) { // 获取当前页
            commit('SET_CONTROL_PAGE', data)
        }
    }
}

export default lc_gameControl;
