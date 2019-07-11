import request from '@/utils/request'
import qs from 'qs'

// export function everySecondLotteryTableData(param) { // 获取各二级彩种表格数据
//   let data = {
//     name: param.name, //版本名称
//     lotteryId: param.lotteryId, // 状态
//     parentLotteryId: param.parentLotteryId,
//     page:param.page,
//     size:param.size
//   }
//   return request({
//     baseURL: 'http://192.168.50.81/mock/', // 请求自己配的json
//     url: '/5cd3ee65a2f90b0e1825e4f6/cp4/cpconfig/cp4/cpconfig/LotteryOddsVer/findDetailPage',
//     method: 'post',
//     params: data
//   })
// }
export function persistVerDetail(data) { // 确认新增
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lotteryOddsVer/persistVerDetail',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function conFromEditMark(data) { // 确认 编辑说明【按钮】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lotteryOddsVer/mergeEntity',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function findDetailPage(data) { // 查询【按钮】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lotteryOddsVer/findDetailPage',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function findByLotteryId(data) { // 玩法列表
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/playRule/findByLotteryId',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function findPlayRuleList(data) { // 查询玩法赔率列表【findPlayRuleList】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/playOdds/findPlayRuleList',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function mergePlayOdds(data) { // 通用赔率 - 保存【mergePlayOdds】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/playOdds/mergePlayOdds',
    method: 'post',
    // data: qs.stringify(data)
    data: data
  })
}