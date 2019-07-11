import request from '@/utils/request'
import qs from 'qs'

export function findPage(data) { // 查询(按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lotteryQuotaVer/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

// export function disable(data) { // 启用-禁用(按钮)
//   return request({
//     baseURL: '/api', 
//     url: '/cp4/cpconfig/quotaLargeVer/disable',
//     method: 'post',
//     data: qs.stringify(data)
//   })
// }
export function persistEntity(data) { // 新增   新增二级彩种投注上限版本【persistQuotaLargeVer】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lotteryQuotaVer/persistEntity',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function mergeDescription(data) { // 编辑说明【mergeDescription】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lotteryQuotaVer/mergeDescription',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function findDetail(data) { // 通过版本id查询赔率上限列表【findListByVer】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lotteryQuotaVer/findDetail',
    method: 'post',
    data: qs.stringify(data)
  })
}


