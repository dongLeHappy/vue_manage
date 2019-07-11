import request from '@/utils/request';
import qs from 'qs';

export function findPage(data) { // 查询(按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lottery/findPage',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function mergeForOrderSeq(data) { // 配置排序(按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lottery/mergeForOrderSeq',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function mergeForDescription(data) { // 修改开奖频率(按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lottery/mergeForDescription',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function mergeForHotSeq(param) { // 设置热门排序(按钮)
  let data = {
    id: param.id,
    hotSeq: param.hotSeq
  }
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lottery/mergeForHotSeq',
    method: 'post',
    data: qs.stringify(data)
  })
}


export function disable(data) { // 启用禁用(按钮)
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/lottery/disable',
    method: 'post',
    data: qs.stringify(data)
  })
}




