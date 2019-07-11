
const lc_openManage = {
    state : {
        allData: [],
        allData_total: 0,
        currentPageSize: 2,
        pageSize: 10,
        page: 1,
        trees_AssigningUsers_Data:[], // 二级彩种树查询的数据
        openManageTreeData:null ,// 二级彩种选中的节点数据-对象
        manageSearch: { // 查询条件
          disabledSecond:true, // 二级彩种名称是否可输入
          parentLotteryId: "", // 一级彩种ID
          lotteryId: "", // 二级彩种ID
          gameNo: "", // 开奖期号
          addType: "", // 新增类型
          openingStatus: "", // 盘口状态
          endType: "", // 封盘类型
          settleStatus: "", // 盘口结算状态
          socialOpenTime:[], // 开奖时间
          BettingStartTime:[], // 投注开始时间
          BettingEndTime:[], //投注结束时间
          sortType:"",//asc升序 desc降序
          sortField:""//排序字段govPrizeTime、beginTime、endTime
        },
        kindBData:[{ value: "",name: "请选择"}], // 二级彩种下拉
      },
      getters : {
        
      },
      mutations: {
        SET_OPEN_INFOS: (state,res) => {
          state.allData = res.content;
          state.allData_total = res.totalElements;
        },
    
        SET_OPEN_CURRENTPAGESIZE:(state, data) => {
          state.currentPageSize = data
        },
    
        SET_OPEN_PAGE_SIZE:(state, data) => { // 设置当前页码
          state.pageSize = data
        },
    
        SET_OPEN_PAGE:(state, data) => { // 设置当前页
          state.page = data
        }
      },
    actions: {
        getOpenManageTabData({commit}, response) { // 开盘管理表格接口        
            commit("SET_OPEN_INFOS", response)
        },
        getOpenTableHeight({commit}, data) { // 获取当前表格高度
            commit('SET_OPEN_CURRENTPAGESIZE', data)
        },
    
        getOpenPageSize({commit}, data) { // 获取当前页码
            commit('SET_OPEN_PAGE_SIZE', data)
        },
    
        getOpenPage({commit}, data) { // 获取当前页
            commit('SET_OPEN_PAGE', data)
        }
    }
}

export default lc_openManage
