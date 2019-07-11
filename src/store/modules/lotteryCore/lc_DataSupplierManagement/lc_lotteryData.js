import {
  getALotteryResultsQueryTableList,
  getDataProviderInformation,
  findPage
} from '@/api/lotteryCore/lc_DataSupplierManagement/lc_lotteryData'
const lc_lotteryData = { // 数据供应商管理 ----开奖数据管理（供应商）
  state: {
    tableData: [], // 列表数据all
    datalist_total: 0, // 列表数据总条数
    page: 1, // 当前页
    pageSize: 10, //当前条
    currentPageSize: 2 , // 表格高度
   
    formInline: {
      // 查询条件
      formInlineDataSuppliers:[""], // 数据供应商名称多选监听
      disabledSecond: true,
      kindA: "", // 一级彩种
      kindB: "", // 二级彩种
      issue: "", // 期号
      dateTime: [],
      drawALottery: "", // 开奖状态
      takeAPosition: "", // 开盘状态
      sortType:"",//asc升序 desc降序
      sortField:""//排序字段govPrizeTime、beginTime、endTime
    },
    firstLotterySelect: [{ value: "",name: "请选择"}], // 一级彩种数据
    secondLotterySelect: [{ value: "",name: "请选择"}], // 二级彩种数据
    dataSupplierArr: [{ value: "",name: "请选择"}], // 数据供应商下拉
  },
  getters: {
  },
  mutations: {
    SET_ALOTTERYRESULTSQUERY_TABLEINFO: (state, res) => {
      state.tableData = res.content;
      state.datalist_total = res.totalElements;
    },
    SET_LOTTERYDATAPAGE_DATA: (state, res) => {
      state.page = res;
    },
    SET_LOTTERYDATAPAGESIZE_DATA: (state, res) => {
      state.pageSize = res;
    },
    SET_LOTTERYDATATABLEHEIGHT: (state, res) => {
      state.currentPageSize = res;
    }
  },
  actions: {
    getALotteryResultsQueryTableList({ commit }, data) { //供应商开奖结果列表查询接口
      commit("SET_ALOTTERYRESULTSQUERY_TABLEINFO", data)
    },
    getDomainInfo({ commit }, data) { //供应商开奖结果列表查询接口
      return new Promise((resolve, reject) => {
        getALotteryResultsQueryTableList(data).then(res => {       
          commit("SET_ALOTTERYRESULTSQUERY_TABLEINFO", res.data.content),
            resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getDataProviderInformation({ commit }, data) { //查看供应商开奖数据查询接口
      return new Promise((resolve, reject) => {
        getDataProviderInformation(data).then(res => {
          let par = res.data.data.content
          resolve(par)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getALotteryResultsQueryPage({ commit }, data) { //保存当前页到全局
      commit("SET_LOTTERYDATAPAGE_DATA", data)
    },
    getALotteryResultsQueryPageSize({ commit }, data) { //保存当前条数到全局
      commit("SET_LOTTERYDATAPAGESIZE_DATA", data)
    },
    getALotteryResultsQueryTableHeight({ commit }, data) { //设置表格高度
      commit("SET_LOTTERYDATATABLEHEIGHT", data)
    }
  }
}


export default lc_lotteryData
