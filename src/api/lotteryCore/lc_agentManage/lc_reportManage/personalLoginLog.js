import request from '@/utils/request'

export function personalLoginLogTableData(res) { // 盈亏报表接口
  let data ={
    page:res.page,
    pageSize:res.pageSize,
    agentBossName:res.agentBossName,
    operatorUserName:res.operatorUserName,
    gameStaffName:res.gameStaffName,
    loginTime:res.loginTime
  };
  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5ca824c3ea866b0dc477bbd4/agentManage/personalLoginLog',
    // http://192.168.50.81/mock/5ca824c3ea866b0dc477bbd4/agentManage/personalLoginLog
    method: 'get',
    params:data
  })
}
