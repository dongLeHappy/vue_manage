import request from '@/utils/request'

export function transactionTableData(res) { // 注单报表接口
  let data ={
    page:res.pageSize,
    pageSize:res.pageSize,
    agentBossName:res.agentBossName,
    gameUserName:res.agentGameUserName,
    transactionType:res.transactionType,
    toDoTime:res.toDoTime,
    platformTransactionNum:res.platformTransactionNum,
    agentTransactionNum:res.agentTransactionNum,
  }

  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5ca824c3ea866b0dc477bbd4/agentManage/transactionRecording',
    method: 'get',
    params:data
  })
}
