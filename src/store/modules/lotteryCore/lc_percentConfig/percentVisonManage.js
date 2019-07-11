import { percentConfigData } from '@/api/lotteryCore/lc_percentConfig/lc_percentVisonManage'

const lc_percentVison = {
    state: {
        allData: [],
        allDataCount: 0,
        currentPageSize: 2,
        pageSize: 1000,
        page: 1,
        searchForm:{  // 头部搜索栏
            visonName:"", 
            status:""
        },
        theStatus:[
            {value:"",name:"全部"},     
          ],
    },
    getters: {
        
    },
    mutations: {
        SET_PERCENT_INFO: (state, res) => {
            state.allData = res.content
            state.allDataCount = res.totalElements
        },

        SET_PERCENT_CURRENTPAGESIZE:(state, data) => {
            state.currentPageSize = data
        },
      
        SET_PERCENT_PAGE_SIZE:(state, data) => { // 设置当前页码
            state.pageSize = data
        },
    
        SET_PERCENT_PAGE:(state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
      getPercentConfigData({commit}, data) { // 获取赔率大版本表格数据
        commit('SET_PERCENT_INFO', data)
        },

        getPercentVisonTableHeight({commit}, data) { // 获取当前表格高度
            commit('SET_PERCENT_CURRENTPAGESIZE', data)
          },
      
        getPercentVisonPageSize({commit}, data) { // 获取当前页码
            commit('SET_PERCENT_PAGE_SIZE', data)
        },
    
        getPercentVisonPage({commit}, data) { // 获取当前页
            commit('SET_PERCENT_PAGE', data)
        }
    }
}

export default lc_percentVison
