import {
  getLotteryConfirmExamineTableList, //开奖确认管理列表查询接口
  getSupplierExamineWinResult  // 确认开奖提交供应商开奖数据获取
 
} from '@/api/lotteryCore/lc_drawALotteryResult/lc_lotteryConfirmExamine'
const lc_lotteryConfirmed = {  //开奖确认管理
  state : {
    tableData:[], // 列表数据all
    datalist_total:0, // 列表数据总条数
    page: 1, // 当前页
    pageSize: 10, //当前条
    currentPageSize:2,  // 表格高度
    formInline:{ // 查询条件
      disabledSecond:true,
      kindA:"", // 一级彩种
      kindB:"", // 二级彩种
      issue:"", // 期号
      dateTime:[],// 开奖日期
      drawALottery:"", // 开奖状态
      takeAPosition:"",  // 盘口状态
      // takeAuditInfo:"2",  // 开奖审核状态
      takeAuditInfoval:"2", //监听开奖审核状态
      info:""  // 开奖号码
    },
    kindBData:[   // 二级彩种下拉选择数据
      { value: "",name: "请选择"}
    ],
  },
  getters : {
  },
  mutations :{
    SET_LOTTERYCONFIRMEXAMINE_TABLEINFO :(state,res)=>{
      state.tableData =[];
      state.datalist_total = 0;
      state.tableData = res.content;
      state.datalist_total = res.totalElements;
    },
    SET_LOTTERYCONFIRMEXAMINE_PAGE :(state,res)=>{
      state.page =res;
    },
    SET_LOTTERYCONFIRMEXAMINE_PAGESIZE :(state,res)=>{
      state.pageSize =res;
    },
    SET_LOTTERYCONFIRMEXAMINE_TABLEHIGHT:(state,res)=>{
      state.currentPageSize = res;
    }
  },
  actions: {
    getLotteryConfirmExamineTableList({commit},data){ //开奖确认审核管理列表查询接口
      commit("SET_LOTTERYCONFIRMEXAMINE_TABLEINFO", data)
    },
    getSupplierExamineWinResult({commit},data){ //认开奖提交供应商开奖数据获取
      return new Promise((resolve,reject)=>{
        getSupplierExamineWinResult(data).then(res=>{
          resolve(res.data)
        }).catch(err=>{
          reject(err)
        })
      })
  },
    getLotteryConfirmExaminePage({commit},data){ //保存当前页到全局
      commit("SET_LOTTERYCONFIRMEXAMINE_PAGE",data)
    },
    getLotteryConfirmExaminePageSize({commit},data){ //保存当前条数到全局
      commit("SET_LOTTERYCONFIRMEXAMINE_PAGESIZE",data)
    },
    getLotteryConfirmExamineTableHeight({commit},data){ //设置表格高度
      commit("SET_LOTTERYCONFIRMEXAMINE_TABLEHIGHT",data)
    }
  }
}


export default lc_lotteryConfirmed
