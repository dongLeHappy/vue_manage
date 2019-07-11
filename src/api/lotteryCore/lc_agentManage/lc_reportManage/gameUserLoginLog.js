import request from '@/utils/request'

export function gameUserLoginLog(res) { // 游戏用户登录日志接口
  let data = {
    page:res.page,
    pageSize:res.pageSize,
    agentName:res.agentName,
    operatorUserName:res.operatorUserName,
    gameStaffName:res.gameStaffName,
    loginTime:res.loginTime
  }
  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5ca824c3ea866b0dc477bbd4/agentManage/gameUserLoginLog',
    method: 'get',
    params:data
  })
}
