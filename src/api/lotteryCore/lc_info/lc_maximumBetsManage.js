import request from '@/utils/request'
import qs from 'qs'

export function findPage(data) { // 查询(按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/quotaLargeVer/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function disable(data) { // 启用-禁用(按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/quotaLargeVer/disable',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function persist(data) { // 新增   投注上限大版本【persistQuotaLargeVer】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/quotaLargeVer/persist',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function mergeDescription(data) { // 修改  说明【mergeDescription】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/quotaLargeVer/mergeDescription',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function findDetail(data) { // 编辑-查询
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/quotaLargeVerLottery/findDetail',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function persistList(data) { // 保存二级彩种盘口金额关联表【persistList】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/quotaLargeVerLottery/persistList',
    method: 'post',
    data: qs.stringify(data)
  })
}


