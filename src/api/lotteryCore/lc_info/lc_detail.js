import request from '@/utils/request'
import qs from 'qs'

export function findMenuList(param) { // 拉取头部菜单
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lotteryMenu/findMenuList',
    method: 'post'
  })
}

export function getTableData(url) { // 获取对应表格数据
  return request({
    baseURL: '/api', 
    url: url,
    method: 'post'
  })
}
export function desc(data) { //查看单个与全部玩法规则 【findPlayRuleDesc】
  return request({
      baseURL: '/api',
      url: '/cp4/cpconfig/ruleDesc/desc',
      method: 'post',
      data: qs.stringify(data)
  })
}
export function persistDesc(data) { //保存全部玩法规则【persistDesc】
  return request({
      baseURL: '/api',
      url: '/cp4/cpconfig/ruleDesc/persistDesc',
      method: 'post',
      data: qs.stringify(data)
  })
}
export function disable(data) { //启用禁用玩法 【mergeForDisable】
  return request({
      baseURL: '/api',
      url: '/cp4/cpconfig/playRule/disable',
      method: 'post',
      data: qs.stringify(data)
  })
}
// export function mergeList(data) { //通用盘口金额 - 保存更新【mergePlayQuotaList】
//   return request({
//       baseURL: '/api',
//       url: '/cp4/cpconfig/playQuota/mergeList',
//       method: 'post',
//       // data: qs.stringify(data)
//       data: data
//   })
// }
export function persistDetail(data) { //通用盘口金额 - 保存更新【mergePlayQuotaList】
  return request({
      baseURL: '/api',
      url: '/cp4/cpconfig/lotteryQuotaVer/persistDetail',
      method: 'post',
      // data: qs.stringify(data)
      data: data
  })
}
export function findById(data) { //查询单个游戏玩法下注值 【findById】
  return request({
      baseURL: '/api',
      url: '/cp4/cpconfig/playBet/findById',
      method: 'post',
      data: qs.stringify(data)
  })
}
