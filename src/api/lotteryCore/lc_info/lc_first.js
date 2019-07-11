import request from '@/utils/request'
import qs from 'qs'

export function findParentPage(param) { // 查询(按钮)
  let data = {
    page: param.page,
    size: param.size,
    id: param.id,
    disable: param.disable
  }
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lottery/findParentPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function mergeForOrderSeq(param) { // 配置排序(按钮)
  let data = {
    id: param.id,
    level: param.level,
    orderSeq: param.orderSeq
  }
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lottery/mergeForOrderSeq',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function disable(param) { // 启用-禁用(按钮)
  let data = {
    id: param.id,
    disable: param.disable
  }
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lottery/disable',
    method: 'post',
    data: qs.stringify(data)
  })
}



