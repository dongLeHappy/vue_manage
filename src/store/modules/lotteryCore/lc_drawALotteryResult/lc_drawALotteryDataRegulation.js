import {getRegulationTableList} from '@/api/lotteryCore/lc_drawALotteryResult/lc_drawALotteryDataRegulation'
const lc_drawALotteryDataRegulation = {
  state : {
    tableData:[], // 列表数据all
    datalist_total:0, // 列表数据总条数
    page: 1, // 当前页
    pageSize: 10, //当前条
    currentPageSize:2  // 表格高度
  },
  getters : {
  },
  mutations :{
    SET_REGULATION_TABLEINFO :(state,res)=>{
      state.tableData =[];
      state.datalist_total = 0;
      let data = res;
      if(res){
        res = res.data;
      }
      if(res.length>0){
        state.tableData = res;
        state.datalist_total = data.total;
      }
    },
    SET_DRAWALOTTERYDATAREGULATIONPAGE_DATA :(state,res)=>{
      state.page =res;
    },
    SET_DRAWALOTTERYDATAREGULATIONPAGESIZE_DATA :(state,res)=>{
      state.pageSize =res;
    },
    SET_DRAWALOTTERYDATAREGULATIONTABLEHEIGHT:(state,res)=>{
      state.currentPageSize = res;
    }
  },
  actions: {
    // getPrimaryColorKind({commit}){ // 一级彩种接口调用数据
    //     return new Promise((resolve,reject)=>{
    //       getPrimaryColorKind().then(res=>{
    //           resolve(res.data)
    //       }).catch(err=>{
    //         reject(err)
    //       })
    //     })
    // },
    // getSecondaryColorKind({commit}){ //二级彩种接口调用数据
    //   return new Promise((resolve,reject)=>{
    //     getSecondaryColorKind().then(res=>{
    //         resolve(res.data)
    //     }).catch(err=>{
    //       reject(err)
    //     })
    //   })
    // },
    getRegulationTableList({commit},data){ //数据供应商管理列表查询接口
        return new Promise((resolve,reject)=>{
            getRegulationTableList(data).then(res=>{
            commit("SET_REGULATION_TABLEINFO", res.data.data),
            resolve(res.data)
          }).catch(err=>{
            reject(err)
          })
        })
    },
    getRegulationPage({commit},data){ //保存当前页到全局
      commit("SET_DRAWALOTTERYDATAREGULATIONPAGE_DATA",data)
    },
    getRegulationPageSize({commit},data){ //保存当前条数到全局
      commit("SET_DRAWALOTTERYDATAREGULATIONPAGESIZE_DATA",data)
    },
    getRegulationTableHeight({commit},data){ //设置表格高度
      commit("SET_DRAWALOTTERYDATAREGULATIONTABLEHEIGHT",data)
    }
  }
}


export default lc_drawALotteryDataRegulation
