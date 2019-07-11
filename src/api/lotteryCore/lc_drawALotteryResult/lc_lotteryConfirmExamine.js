import request from '@/utils/request'

export function getLotteryConfirmExamineTableList(data) {  //开奖确认审核管理列表查询接口
  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5ca3062721d4990ddb61f67d/example_copy/getLotteryConfirmExamineTableList',
    method: 'post',
    params:data
  })
}
export function getSupplierExamineWinResult(data) {//  开奖确认提交（弹框获取供应商开奖数据的接口）
  return request({
    baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
    url: '/5ca3062721d4990ddb61f67d/example_copy/lc_lotteryConfirmed',
    method: 'get',
    params:data
  })
}

// export function lotteryConfirmed(data) { //  开奖确认提交（弹框接口）
//   return request({
//     baseURL: 'http://192.168.50.81:80/mock', // 请求自己配的json
//     url: '/5ca3062721d4990ddb61f67d/example_copy/lc_lotteryConfirmed',
//     method: 'get',
//     params:data
//   })
// }
