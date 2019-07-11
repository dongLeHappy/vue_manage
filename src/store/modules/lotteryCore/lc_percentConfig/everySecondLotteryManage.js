import { everySecondLotteryTableData } from '@/api/lotteryCore/lc_percentConfig/lc_everySecondLotteryManage'

const lc_everySecondLottery = {
    state: {
        allData: [],
        allDataCount: 0,
        currentPageSize: 2,
        pageSize: 10,
        page: 1,
        everyPercentSearch:{ // 搜索条件
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
    getters: {
        
    },
    mutations: {
        SET_EVERYSECOND_INFO: (state, res) => {
            state.allData = res.content
            state.allDataCount = res.totalElements
        },

        SET_EVERYSECOND_CURRENTPAGESIZE:(state, data) => {
            state.currentPageSize = data
        },
      
        SET_EVERYSECOND_PAGE_SIZE:(state, data) => { // 设置当前页码
            state.pageSize = data
        },
    
        SET_EVERYSECOND_PAGE:(state, data) => { // 设置当前页
            state.page = data
        }
    },
    actions: {
        getEverySecondLotteryTableData({commit}, data) { // 获取赔率大版本表格数据
            commit('SET_EVERYSECOND_INFO', data)
        },

        getEverySecondTableHeight({commit}, data) { // 获取当前表格高度
            commit('SET_EVERYSECOND_CURRENTPAGESIZE', data)
          },
      
        getEverySecondPageSize({commit}, data) { // 获取当前页码
            commit('SET_EVERYSECOND_PAGE_SIZE', data)
        },
    
        getEverySecondPage({commit}, data) { // 获取当前页
            commit('SET_EVERYSECOND_PAGE', data)
        }
    }
}

export default lc_everySecondLottery
