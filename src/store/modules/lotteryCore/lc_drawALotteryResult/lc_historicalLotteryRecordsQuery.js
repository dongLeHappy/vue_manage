 import {} from '@/api/lotteryCore/lc_drawALotteryResult/lc_historicalLotteryRecordsQuery'
const lc_historicalLotteryRecordsQuery = { // 供应商开奖结果查询
  state : {
    tableData:[], // 列表数据all
    datalist_total:0, // 列表数据总条数
    page: 1, // 当前页
    pageSize: 10, //当前条
    currentPageSize:2 , // 表格高度
    formInline:{ // 查询条件
      disabledSecond:true,
      kindA:"", // 一级彩种
      kindB:"", // 二级彩种
      issue:"", // 期号'
      dateTime:[], // 默认时间      
      drawALottery:"", // 开奖状态       
      lotterWay:"",  // 开奖号码
      sortType:"",//asc升序 desc降序
      sortField:""//排序字段govPrizeTime、beginTime、endTime
    },
    kindAData:[  // 一级彩种下拉选择数据
      { value: "",name: "请选择"}
    ],  
    kindBData:[   // 二级彩种下拉选择数据
      { value: "",name: "请选择"}
    ],
    drawALotteryStatu:[  // 开奖状态选择数据
       { value: "",name: "全部"}
    ],
    lotterWay:[  // 开奖号码
       { value: "",name: "全部"}
    ],
  },
  getters : {
  },
  mutations :{
    SET_HISTORICALRECORDS_TABLEINFO :(state,res)=>{
      state.tableData =[];
      state.datalist_total = 0;
      if(res.content.length>0){
        state.tableData = res.content;
        state.datalist_total = res.totalElements;
      }
    },
    SET_HISTORICALLOTTERYPAGE_DATA :(state,res)=>{
      state.page =res;
    },
    SET_HISTORICALLOTTERYPAGESIZE_DATA :(state,res)=>{
      state.pageSize =res;
    },
    SET_HISTORICALLOTTERYTABLEHEIGHT:(state,res)=>{
      state.currentPageSize = res;
    }
  },
  actions: {
    getHistoricalRecordsTableList({commit},data){ // 历史开奖记录查询列表【条件查询】
      commit("SET_HISTORICALRECORDS_TABLEINFO", data)
    },
    getHistoricalRecordsPage({commit},data){ //保存当前页到全局
      commit("SET_HISTORICALLOTTERYPAGE_DATA",data)
    },
    getHistoricalRecordsPageSize({commit},data){ //保存当前条数到全局
      commit("SET_HISTORICALLOTTERYPAGESIZE_DATA",data)
    },
    getHistoricalRecordsTableHeight({commit},data){ //设置表格高度
      commit("SET_HISTORICALLOTTERYTABLEHEIGHT",data)
    }
  }
}


export default lc_historicalLotteryRecordsQuery
