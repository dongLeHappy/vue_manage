import request from '@/utils/request'
import qs from 'qs'

// export function percentConfigData(param) { // 赔率大版本管理表格数据
//   let data = {
//     name: param.visonName,
//     disable: param.status,
//     page:param.page,
//     size:param.size
//   }
//   return request({
//     baseURL: '/api', // 请求自己配的json
//     url: '/cp4/cpconfig/cp4/cpconfig/oddsLargeVer/findPage',
//     method: 'post',
//     params: data
//   })
// }
export function findVerDetail(data) { // 查询版本关联表
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/cp4/cpconfig/oddsLargeVer/findVerDetail',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function confirmAdd(param) { // 确认新增
  let data = {
    description: param.description,
  }
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/cp4/cpconfig/oddsLargeVer/persistLargeVer',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function persistList(data) { // 保存编辑
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/cp4/cpconfig/oddsLargeVerLottery/persistList',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function getSelectVal(param) { // 编辑表格下拉框
  let data = {
    lotteryId:param.lotteryId
  }
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/cp4/cpconfig/cp4/cpconfig/LotteryOddsVer/findList',
    method: 'post',
    params: data
  })
}
export function confirmEditMark(data) { // 确认-编辑说明
  return request({
    baseURL: '/api', // 请求自己配的json
    url: '/cp4/cpconfig/oddsLargeVer/mergeEntity',
    method: 'post',
    data: qs.stringify(data)
  })
}



export function findPage(data) { // 查询【按钮】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/oddsLargeVer/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function disable(data) { // 启用禁用【按钮】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/oddsLargeVer/disable',
    method: 'post',
    data: qs.stringify(data)
  })
}