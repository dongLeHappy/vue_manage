import {
  getLotteryConfirmedTableList, //开奖确认提交列表查询接口
  // getSupplierDrawingDataAcquisition,  // 确认开奖提交供应商开奖数据获取
  SetSupplierSubmitWinning,  //确认开奖提交确定方法
  findPage
} from '@/api/lotteryCore/lc_drawALotteryResult/lc_lotteryConfirmed'
const lc_lotteryConfirmed = {  //开奖确认提交
  state: {
    // paly_Data:null,  // 初始化中奖榜单管理页面默认展示数据
    tableData: [], // 列表数据all
    datalist_total: 0, // 列表数据总条数
    page: 1, // 当前页
    pageSize: 10, //当前条
    currentPageSize: 2,  // 表格高度
    formInline:{ // 查询条件
      disabledSecond:true, // 二级彩种名称是否可编辑
      parentLotteryId:"", // 一级彩种
      kindB:"", // 二级彩种
      gameNo:"", // 开奖期号
      prizeStatus:"", // 开奖状态
      openingStatus:"",  // 盘口状态
      auditStatus:[],  // 开奖审核状态
      prizeable:"",  // 开奖号码
      dateTime:[] ,// 开奖日期
      openingStatusVal:"2",// 盘口状态默认值
      allstate:["1","3"],
    },
    kindAData:[{ value: "",name: "请选择"}], // 一级彩种下拉选择数据
    kindBData:[{ value: "",name: "请选择"}], // 二级彩种下拉选择数据
    drawALotteryStatu:[{ value: "",name: "全部"}], // 开奖状态选择数据
    shenheStatus:[{ value: "",name: "全部"}], // 开奖审核状态
    pankouStatus:[{ value: "",name: "全部"}], // 盘口状态
    infoResult:[{ value: "",name: "全部"}], // 开奖号码（暂时缺少接口）
  },
  getters: {
  },
  mutations: {
    SET_LOTTERYREGULATION_TABLEINFO: (state, res) => {
      state.tableData = [];
      state.datalist_total = 0;
      state.tableData = res.content;
      state.datalist_total = res.totalElements;
    },
    SET_LOTTERYCONFIRMEDPAGE_DATA: (state, res) => {
      state.page = res;
    },
    SET_LOTTERYCONFIRMEDPAGESIZE_DATA: (state, res) => {
      state.pageSize = res;
    },
    SET_LOTTERYCONFIRMEDTABLEHEIGHT: (state, res) => {
      state.currentPageSize = res;
    }
  },
  actions: {
    getLotteryConfirmedTableList({ commit }, data) { // 查询列表
      commit("SET_LOTTERYREGULATION_TABLEINFO", data)
    },

    // getSupplierDrawingDataAcquisition({ commit }, data) { //认开奖提交供应商开奖数据获取
    //   return new Promise((resolve, reject) => {
    //     getSupplierDrawingDataAcquisition(data).then(res => {
    //       resolve(res.data)
    //     }).catch(err => {
    //       reject(err)
    //     })
    //   })
    // },
    SetSupplierSubmitWinning({ commit }, data) { //确认开奖提交确定方法          
      return new Promise((resolve, reject) => {
        SetSupplierSubmitWinning(data).then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getLotteryConfirmedPage({ commit }, data) { //保存当前页到全局
      commit("SET_LOTTERYCONFIRMEDPAGE_DATA", data)
    },
    getLotteryConfirmedPageSize({ commit }, data) { //保存当前条数到全局
      commit("SET_LOTTERYCONFIRMEDPAGESIZE_DATA", data)
    },
    getLotteryConfirmedTableHeight({ commit }, data) { //设置表格高度
      commit("SET_LOTTERYCONFIRMEDTABLEHEIGHT", data)
    }
  }
}


export default lc_lotteryConfirmed
