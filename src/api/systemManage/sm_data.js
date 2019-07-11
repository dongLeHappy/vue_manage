import request from '@/utils/request'
import qs from 'qs'

export function findParentPage(param) { // 查询(按钮)
  const data = {
    page: param.page,
    size: param.size,
    name: param.name || null
  }
  return request({
    baseURL: '/api',
    url: '/cp4/system/mainData/findParentPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function findListByParentId(param) { // 查询(设置主数据弹窗)
  const data = {
    id: param.id,
    disable: param.disable || null
  }
  return request({
    baseURL: '/api',
    url: '/cp4/system/mainData/findListByParentId',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function persist(param) { // 新增(设置主数据弹窗)
  const data = {
    name: param.name,
    description: param.description,
    orderSeq: param.orderSeq,
    value: param.value
  }
  return request({
    baseURL: '/api',
    url: '/cp4/system/mainData/persist',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function disable(param) { // 启用-禁用(设置主数据弹窗)
  const data = {
    id: param.id,
    disable: param.disable
  }
  return request({
    baseURL: '/api',
    url: '/cp4/system/mainData/disable',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function refreshRedis(data) { // 刷新redis(按钮)
  return request({
    baseURL: '/api',
    url: '/cp4/system/mainData/refreshRedis',
    method: 'post',
    data: qs.stringify(data)
  })
}




