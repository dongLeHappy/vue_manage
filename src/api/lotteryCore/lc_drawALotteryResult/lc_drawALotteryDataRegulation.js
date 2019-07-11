import request from '@/utils/request'

// export function getPrimaryColorKind() { // 一级彩种
//   return request({
//     baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
//     url: '/5ca3062721d4990ddb61f67d/example_copy/Primarycolorkindlist',
//     method: 'get'
//   })
// }

// export function getSecondaryColorKind() { // 二级彩种
//   return request({
//     baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
//     url: '/5ca3062721d4990ddb61f67d/example_copy/Thesecondarycolorkindlist',
//     method: 'get'
//   })
// }
export function getRegulationTableList(data) { // 开奖数据确认规则管理列表查询接口
  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5ca3062721d4990ddb61f67d/example_copy/drawALotteryDataRegulationList',
    method: 'get',
    params:data
  })
}
